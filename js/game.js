// Main game engine for Squirrel Drop

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.tileSize = 60;
        this.padding = 20;
        
        // Game state
        this.currentLevel = null;
        this.levelId = 1;
        this.moves = 0;
        this.isPlaying = false;
        this.isAnimating = false;
        
        // Game objects
        this.grid = [];
        this.blocks = [];
        this.nuts = [];
        this.baskets = [];
        this.filledBaskets = new Set();
        
        // Drag state
        this.dragging = null;
        this.dragStart = { x: 0, y: 0 };
        this.dragOffset = { x: 0, y: 0 };
        
        // Animation state
        this.animations = [];
        this.lastTime = 0;
        
        // Bind methods
        this.handlePointerDown = this.handlePointerDown.bind(this);
        this.handlePointerMove = this.handlePointerMove.bind(this);
        this.handlePointerUp = this.handlePointerUp.bind(this);
        this.update = this.update.bind(this);
        
        // Setup event listeners
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Touch events
        this.canvas.addEventListener('touchstart', this.handlePointerDown, { passive: false });
        this.canvas.addEventListener('touchmove', this.handlePointerMove, { passive: false });
        this.canvas.addEventListener('touchend', this.handlePointerUp, { passive: false });
        this.canvas.addEventListener('touchcancel', this.handlePointerUp, { passive: false });
        
        // Mouse events
        this.canvas.addEventListener('mousedown', this.handlePointerDown);
        this.canvas.addEventListener('mousemove', this.handlePointerMove);
        this.canvas.addEventListener('mouseup', this.handlePointerUp);
        this.canvas.addEventListener('mouseleave', this.handlePointerUp);
    }

    loadLevel(levelId) {
        const levelData = Levels.getLevelData(levelId);
        if (!levelData) {
            console.error('Level not found:', levelId);
            return false;
        }

        this.currentLevel = levelData;
        this.levelId = levelId;
        this.moves = 0;
        this.isPlaying = true;
        this.filledBaskets = new Set();
        this.animations = [];

        // Setup grid
        this.grid = Utils.deepClone(levelData.grid);
        
        // Setup game objects
        this.blocks = levelData.blocks.map(b => ({
            ...b,
            pixelX: b.x * this.tileSize,
            pixelY: b.y * this.tileSize,
            moving: false
        }));
        
        this.nuts = levelData.nuts.map(n => ({
            ...n,
            pixelX: n.x * this.tileSize + this.tileSize / 2,
            pixelY: n.y * this.tileSize + this.tileSize / 2,
            falling: false,
            collected: false,
            velocity: 0
        }));
        
        this.baskets = levelData.baskets.map(b => ({
            ...b,
            pixelX: b.x * this.tileSize + this.tileSize / 2,
            pixelY: b.y * this.tileSize + this.tileSize / 2,
            filled: false
        }));

        // Resize canvas
        this.resizeCanvas();
        
        // Update moves display
        this.updateMovesDisplay();
        
        // Start game loop
        if (!this.animationFrame) {
            this.lastTime = performance.now();
            this.animationFrame = requestAnimationFrame(this.update);
        }

        return true;
    }

    resizeCanvas() {
        const level = this.currentLevel;
        if (!level) return;

        const canvasWidth = level.gridWidth * this.tileSize + this.padding * 2;
        const canvasHeight = level.gridHeight * this.tileSize + this.padding * 2;
        
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        
        // Adjust canvas display size for responsive design
        const container = this.canvas.parentElement;
        const maxWidth = container.clientWidth - 20;
        const maxHeight = window.innerHeight - 200;
        
        const scale = Math.min(maxWidth / canvasWidth, maxHeight / canvasHeight, 1);
        this.canvas.style.width = `${canvasWidth * scale}px`;
        this.canvas.style.height = `${canvasHeight * scale}px`;
    }

    handlePointerDown(e) {
        if (!this.isPlaying || this.isAnimating) return;
        e.preventDefault();
        
        const pos = Utils.getEventPosition(e, this.canvas);
        const gridX = Math.floor((pos.x - this.padding) / this.tileSize);
        const gridY = Math.floor((pos.y - this.padding) / this.tileSize);
        
        // Check if clicking on a block
        for (const block of this.blocks) {
            if (gridX >= block.x && gridX < block.x + block.width &&
                gridY >= block.y && gridY < block.y + block.height) {
                
                this.dragging = block;
                this.dragStart = { x: pos.x, y: pos.y };
                this.dragOffset = {
                    x: pos.x - block.pixelX - this.padding,
                    y: pos.y - block.pixelY - this.padding
                };
                break;
            }
        }
    }

    handlePointerMove(e) {
        if (!this.dragging || !this.isPlaying) return;
        e.preventDefault();
        
        const pos = Utils.getEventPosition(e, this.canvas);
        const deltaX = pos.x - this.dragStart.x;
        
        // Only allow horizontal movement
        const newPixelX = this.dragging.x * this.tileSize + deltaX;
        
        // Check boundaries
        const minX = this.getBlockMinX(this.dragging);
        const maxX = this.getBlockMaxX(this.dragging);
        
        this.dragging.pixelX = Utils.clamp(newPixelX, minX * this.tileSize, maxX * this.tileSize);
    }

    handlePointerUp(e) {
        if (!this.dragging || !this.isPlaying) return;
        
        const block = this.dragging;
        this.dragging = null;
        
        // Snap to grid
        const newGridX = Math.round(block.pixelX / this.tileSize);
        
        // Check if position changed
        if (newGridX !== block.x) {
            // Update block position
            const oldX = block.x;
            block.x = newGridX;
            block.pixelX = newGridX * this.tileSize;
            
            this.moves++;
            this.updateMovesDisplay();
            
            // Check for falling nuts
            this.checkFallingNuts();
        } else {
            // Snap back to original position
            block.pixelX = block.x * this.tileSize;
        }
    }

    getBlockMinX(block) {
        let minX = 0;
        
        for (let x = block.x - 1; x >= 0; x--) {
            let blocked = false;
            
            // Check grid obstacles
            for (let row = block.y; row < block.y + block.height; row++) {
                if (this.grid[row][x] !== 0) {
                    blocked = true;
                    break;
                }
            }
            
            // Check other blocks
            if (!blocked) {
                for (const other of this.blocks) {
                    if (other.id !== block.id) {
                        if (this.blocksOverlapHorizontal(x, block.y, block.width, block.height, other)) {
                            blocked = true;
                            break;
                        }
                    }
                }
            }
            
            if (blocked) {
                minX = x + 1;
                break;
            }
        }
        
        return minX;
    }

    getBlockMaxX(block) {
        const level = this.currentLevel;
        let maxX = level.gridWidth - block.width;
        
        for (let x = block.x + 1; x <= level.gridWidth - block.width; x++) {
            let blocked = false;
            
            // Check grid obstacles
            for (let row = block.y; row < block.y + block.height; row++) {
                for (let col = x; col < x + block.width; col++) {
                    if (this.grid[row][col] !== 0) {
                        blocked = true;
                        break;
                    }
                }
                if (blocked) break;
            }
            
            // Check other blocks
            if (!blocked) {
                for (const other of this.blocks) {
                    if (other.id !== block.id) {
                        if (this.blocksOverlapHorizontal(x, block.y, block.width, block.height, other)) {
                            blocked = true;
                            break;
                        }
                    }
                }
            }
            
            if (blocked) {
                maxX = x - 1;
                break;
            }
        }
        
        return maxX;
    }

    blocksOverlapHorizontal(x, y, width, height, other) {
        return !(x + width <= other.x || x >= other.x + other.width ||
                 y + height <= other.y || y >= other.y + other.height);
    }

    checkFallingNuts() {
        for (const nut of this.nuts) {
            if (nut.collected || nut.falling) continue;
            
            // Check if nut can fall
            const canFall = this.canNutFall(nut);
            if (canFall) {
                nut.falling = true;
                nut.velocity = 0;
                this.isAnimating = true;
            }
        }
    }

    canNutFall(nut) {
        const gridX = Math.floor((nut.pixelX - this.tileSize / 2) / this.tileSize);
        const gridY = Math.floor((nut.pixelY - this.tileSize / 2) / this.tileSize);
        
        // Check if path is clear below
        for (let y = gridY; y < this.currentLevel.gridHeight; y++) {
            // Check grid
            if (this.grid[y][gridX] !== 0) {
                return false;
            }
            
            // Check blocks
            for (const block of this.blocks) {
                if (gridX >= block.x && gridX < block.x + block.width &&
                    y >= block.y && y < block.y + block.height) {
                    return false;
                }
            }
        }
        
        return true;
    }

    update(currentTime) {
        const deltaTime = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;
        
        // Update falling nuts
        let anyFalling = false;
        const gravity = 1200;
        
        for (const nut of this.nuts) {
            if (nut.falling && !nut.collected) {
                anyFalling = true;
                nut.velocity += gravity * deltaTime;
                nut.pixelY += nut.velocity * deltaTime;
                
                // Check if nut reached basket
                const gridX = Math.floor((nut.pixelX - this.tileSize / 2) / this.tileSize);
                
                // Calculate the maximum Y position (bottom of the last row)
                const maxPixelY = (this.currentLevel.gridHeight - 1) * this.tileSize + this.tileSize / 2;
                
                // Check if nut has reached or passed the bottom row
                if (nut.pixelY >= maxPixelY) {
                    // Clamp the nut position to the bottom row
                    nut.pixelY = maxPixelY;
                    
                    // Find matching basket
                    for (const basket of this.baskets) {
                        if (basket.x === gridX && basket.type === nut.type && !basket.filled) {
                            nut.collected = true;
                            basket.filled = true;
                            this.filledBaskets.add(basket.id);
                            break;
                        }
                    }
                    
                    // Stop falling regardless of whether collected
                    nut.falling = false;
                }
            }
        }
        
        if (!anyFalling) {
            this.isAnimating = false;
            
            // Check win condition
            if (this.checkWinCondition()) {
                this.onLevelComplete();
            }
        }
        
        // Render
        this.render();
        
        // Continue loop
        this.animationFrame = requestAnimationFrame(this.update);
    }

    checkWinCondition() {
        // All nuts must be collected
        return this.nuts.every(nut => nut.collected);
    }

    onLevelComplete() {
        this.isPlaying = false;
        
        // Save progress
        const progress = Utils.loadFromStorage('squirrel-progress', { completedLevels: [], bestMoves: {} });
        if (!progress.completedLevels.includes(this.levelId)) {
            progress.completedLevels.push(this.levelId);
        }
        if (!progress.bestMoves[this.levelId] || this.moves < progress.bestMoves[this.levelId]) {
            progress.bestMoves[this.levelId] = this.moves;
        }
        Utils.saveToStorage('squirrel-progress', progress);
        
        // Show win popup
        if (typeof onLevelComplete === 'function') {
            onLevelComplete(this.levelId, this.moves, this.currentLevel.par);
        }
    }

    render() {
        const ctx = this.ctx;
        const level = this.currentLevel;
        if (!level) return;

        // Clear canvas
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw background
        Assets.drawBackground(ctx, this.canvas.width, this.canvas.height);

        ctx.save();
        ctx.translate(this.padding, this.padding);

        // Draw grid tiles
        for (let y = 0; y < level.gridHeight; y++) {
            for (let x = 0; x < level.gridWidth; x++) {
                const tileX = x * this.tileSize;
                const tileY = y * this.tileSize;
                const tileType = this.grid[y][x];
                
                if (tileType === 0) {
                    // Path tile
                    Assets.drawPathTile(ctx, tileX, tileY, this.tileSize);
                } else if (tileType === 1) {
                    // Floor tile
                    Assets.drawFloorTile(ctx, tileX, tileY, this.tileSize, x + y);
                } else if (tileType === 2) {
                    // Rock obstacle
                    Assets.drawPathTile(ctx, tileX, tileY, this.tileSize);
                    Assets.drawObstacle(ctx, 'rock', tileX + this.tileSize / 2, tileY + this.tileSize / 2, this.tileSize);
                } else if (tileType === 3) {
                    // Log obstacle
                    Assets.drawPathTile(ctx, tileX, tileY, this.tileSize);
                    Assets.drawObstacle(ctx, 'log', tileX + this.tileSize / 2, tileY + this.tileSize / 2, this.tileSize);
                } else if (tileType === 4) {
                    // Leaves obstacle
                    Assets.drawPathTile(ctx, tileX, tileY, this.tileSize);
                    Assets.drawObstacle(ctx, 'leaves', tileX + this.tileSize / 2, tileY + this.tileSize / 2, this.tileSize);
                }
            }
        }

        // Draw baskets
        for (const basket of this.baskets) {
            Assets.drawBasket(ctx, basket.type, basket.pixelX, basket.pixelY, this.tileSize, basket.filled);
        }

        // Draw blocks
        for (const block of this.blocks) {
            const isSelected = this.dragging && this.dragging.id === block.id;
            Assets.drawBlock(
                ctx,
                block.pixelX,
                block.pixelY,
                block.width * this.tileSize,
                block.height * this.tileSize,
                this.tileSize,
                block.type
            );
            
            // Highlight selected block
            if (isSelected) {
                ctx.strokeStyle = '#FFD700';
                ctx.lineWidth = 4;
                ctx.strokeRect(
                    block.pixelX + 2,
                    block.pixelY + 2,
                    block.width * this.tileSize - 4,
                    block.height * this.tileSize - 4
                );
            }
        }

        // Draw nuts
        for (const nut of this.nuts) {
            if (!nut.collected || nut.falling) {
                Assets.drawNut(ctx, nut.type, nut.pixelX, nut.pixelY, this.tileSize);
            }
        }

        ctx.restore();
    }

    updateMovesDisplay() {
        const movesDisplay = document.getElementById('moves-display');
        if (movesDisplay) {
            movesDisplay.textContent = `Moves: ${this.moves}`;
        }
    }

    restart() {
        this.loadLevel(this.levelId);
    }

    stop() {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = null;
        }
        this.isPlaying = false;
    }
}
