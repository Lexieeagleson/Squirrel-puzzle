// Asset definitions and procedural generation for the game

const Assets = {
    // Color palette for the game
    colors: {
        // Nut colors
        acorn: '#8B4513',
        acornCap: '#654321',
        walnut: '#A0522D',
        walnutShell: '#8B7355',
        chestnut: '#954535',
        chestnutShell: '#7B3F00',
        hazelnut: '#D2691E',
        hazelnutShell: '#CD853F',
        pecan: '#DEB887',
        pecanShell: '#BC8F8F',
        almond: '#FFEBCD',
        almondShell: '#F5DEB3',
        
        // Block colors
        woodLight: '#DEB887',
        woodMedium: '#CD853F',
        woodDark: '#8B7355',
        stone: '#808080',
        stoneDark: '#696969',
        
        // Environment
        grass: '#7CB342',
        grassDark: '#558B2F',
        dirt: '#8D6E63',
        dirtDark: '#6D4C41',
        
        // Basket/goal colors
        basketWood: '#A0522D',
        basketWoodDark: '#8B4513',
        
        // UI
        highlight: '#FFD700',
        shadow: 'rgba(0,0,0,0.3)'
    },

    // Nut types with their properties
    nutTypes: {
        acorn: {
            name: 'Acorn',
            color: '#8B4513',
            capColor: '#654321',
            shape: 'acorn'
        },
        walnut: {
            name: 'Walnut',
            color: '#A0522D',
            shellColor: '#8B7355',
            shape: 'round'
        },
        chestnut: {
            name: 'Chestnut',
            color: '#954535',
            shellColor: '#7B3F00',
            shape: 'round'
        },
        hazelnut: {
            name: 'Hazelnut',
            color: '#D2691E',
            shellColor: '#CD853F',
            shape: 'oval'
        },
        pecan: {
            name: 'Pecan',
            color: '#DEB887',
            shellColor: '#BC8F8F',
            shape: 'oval'
        },
        almond: {
            name: 'Almond',
            color: '#FFEBCD',
            shellColor: '#F5DEB3',
            shape: 'almond'
        }
    },

    // Draw a nut on the canvas
    drawNut(ctx, type, x, y, size, highlight = false) {
        const nut = this.nutTypes[type];
        if (!nut) return;

        const radius = size * 0.4;
        ctx.save();
        ctx.translate(x, y);

        // Highlight effect
        if (highlight) {
            ctx.shadowColor = '#FFD700';
            ctx.shadowBlur = 15;
        }

        switch (nut.shape) {
            case 'acorn':
                this.drawAcorn(ctx, nut, radius);
                break;
            case 'round':
                this.drawRoundNut(ctx, nut, radius);
                break;
            case 'oval':
                this.drawOvalNut(ctx, nut, radius);
                break;
            case 'almond':
                this.drawAlmondNut(ctx, nut, radius);
                break;
        }

        ctx.restore();
    },

    drawAcorn(ctx, nut, radius) {
        // Draw cap
        ctx.beginPath();
        ctx.ellipse(0, -radius * 0.4, radius * 0.85, radius * 0.5, 0, Math.PI, 0);
        ctx.fillStyle = nut.capColor;
        ctx.fill();
        
        // Cap texture lines
        ctx.strokeStyle = '#4a3520';
        ctx.lineWidth = 1;
        for (let i = -3; i <= 3; i++) {
            ctx.beginPath();
            ctx.arc(0, -radius * 0.8, radius * 0.6, 
                    Math.PI * 0.2 + i * 0.15, 
                    Math.PI * 0.8 + i * 0.05, false);
            ctx.stroke();
        }
        
        // Draw stem
        ctx.beginPath();
        ctx.moveTo(0, -radius * 0.9);
        ctx.lineTo(0, -radius * 1.1);
        ctx.strokeStyle = '#4a3520';
        ctx.lineWidth = 3;
        ctx.stroke();

        // Draw body
        ctx.beginPath();
        ctx.ellipse(0, radius * 0.2, radius * 0.7, radius, 0, 0, Math.PI * 2);
        ctx.fillStyle = nut.color;
        ctx.fill();
        
        // Body shine
        ctx.beginPath();
        ctx.ellipse(-radius * 0.2, 0, radius * 0.15, radius * 0.4, -0.3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.fill();
    },

    drawRoundNut(ctx, nut, radius) {
        // Main body
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.fillStyle = nut.color;
        ctx.fill();
        
        // Shell texture
        ctx.strokeStyle = nut.shellColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(-radius * 0.5, -radius * 0.3);
        ctx.quadraticCurveTo(0, -radius * 0.5, radius * 0.5, -radius * 0.3);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-radius * 0.6, radius * 0.1);
        ctx.quadraticCurveTo(0, radius * 0.4, radius * 0.6, radius * 0.1);
        ctx.stroke();
        
        // Shine
        ctx.beginPath();
        ctx.ellipse(-radius * 0.3, -radius * 0.3, radius * 0.2, radius * 0.15, -0.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.fill();
    },

    drawOvalNut(ctx, nut, radius) {
        // Main body (oval)
        ctx.beginPath();
        ctx.ellipse(0, 0, radius * 0.7, radius, 0, 0, Math.PI * 2);
        ctx.fillStyle = nut.color;
        ctx.fill();
        
        // Shell line
        ctx.beginPath();
        ctx.moveTo(0, -radius);
        ctx.lineTo(0, radius);
        ctx.strokeStyle = nut.shellColor;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Shine
        ctx.beginPath();
        ctx.ellipse(-radius * 0.2, -radius * 0.3, radius * 0.15, radius * 0.25, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.35)';
        ctx.fill();
    },

    drawAlmondNut(ctx, nut, radius) {
        // Almond shape (pointed oval)
        ctx.beginPath();
        ctx.moveTo(0, -radius);
        ctx.bezierCurveTo(radius * 0.8, -radius * 0.5, radius * 0.8, radius * 0.5, 0, radius);
        ctx.bezierCurveTo(-radius * 0.8, radius * 0.5, -radius * 0.8, -radius * 0.5, 0, -radius);
        ctx.fillStyle = nut.color;
        ctx.fill();
        
        // Center line
        ctx.beginPath();
        ctx.moveTo(0, -radius * 0.8);
        ctx.lineTo(0, radius * 0.8);
        ctx.strokeStyle = nut.shellColor;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Shine
        ctx.beginPath();
        ctx.ellipse(-radius * 0.2, -radius * 0.2, radius * 0.12, radius * 0.3, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.35)';
        ctx.fill();
    },

    // Draw a basket/goal
    drawBasket(ctx, nutType, x, y, size, filled = false) {
        const nut = this.nutTypes[nutType];
        const width = size * 0.9;
        const height = size * 0.7;
        
        ctx.save();
        ctx.translate(x, y + size * 0.1);

        // Basket shadow
        ctx.beginPath();
        ctx.ellipse(0, height * 0.4, width * 0.45, height * 0.15, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0,0,0,0.2)';
        ctx.fill();

        // Basket body
        ctx.beginPath();
        ctx.moveTo(-width * 0.5, -height * 0.3);
        ctx.lineTo(-width * 0.4, height * 0.3);
        ctx.quadraticCurveTo(0, height * 0.5, width * 0.4, height * 0.3);
        ctx.lineTo(width * 0.5, -height * 0.3);
        ctx.quadraticCurveTo(0, -height * 0.1, -width * 0.5, -height * 0.3);
        ctx.fillStyle = this.colors.basketWood;
        ctx.fill();
        ctx.strokeStyle = this.colors.basketWoodDark;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Basket rim
        ctx.beginPath();
        ctx.ellipse(0, -height * 0.3, width * 0.5, height * 0.15, 0, 0, Math.PI * 2);
        ctx.fillStyle = this.colors.basketWoodDark;
        ctx.fill();

        // Inner rim (hole)
        ctx.beginPath();
        ctx.ellipse(0, -height * 0.3, width * 0.35, height * 0.1, 0, 0, Math.PI * 2);
        ctx.fillStyle = nut ? nut.color : '#4a3520';
        ctx.globalAlpha = 0.5;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Basket weave lines
        for (let i = -2; i <= 2; i++) {
            ctx.beginPath();
            ctx.moveTo(-width * 0.45 + i * width * 0.15, -height * 0.2);
            ctx.lineTo(-width * 0.38 + i * width * 0.15, height * 0.25);
            ctx.strokeStyle = this.colors.basketWoodDark;
            ctx.lineWidth = 1;
            ctx.stroke();
        }

        // Filled indicator
        if (filled) {
            ctx.beginPath();
            ctx.arc(0, 0, size * 0.15, 0, Math.PI * 2);
            ctx.fillStyle = '#4CAF50';
            ctx.fill();
            ctx.fillStyle = 'white';
            ctx.font = `${size * 0.2}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('✓', 0, 0);
        }

        ctx.restore();
    },

    // Draw a sliding block
    drawBlock(ctx, x, y, width, height, tileSize, blockType = 'wood') {
        ctx.save();
        
        const colors = blockType === 'stone' 
            ? { main: this.colors.stone, dark: this.colors.stoneDark }
            : { main: this.colors.woodMedium, dark: this.colors.woodDark };

        // Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.2)';
        ctx.fillRect(x + 4, y + 4, width, height);

        // Main block
        ctx.fillStyle = colors.main;
        ctx.fillRect(x, y, width, height);

        // Border
        ctx.strokeStyle = colors.dark;
        ctx.lineWidth = 3;
        ctx.strokeRect(x + 1, y + 1, width - 2, height - 2);

        // Wood grain or stone texture
        if (blockType === 'wood') {
            ctx.strokeStyle = 'rgba(139,115,85,0.4)';
            ctx.lineWidth = 1;
            for (let i = 0; i < width; i += tileSize * 0.3) {
                ctx.beginPath();
                ctx.moveTo(x + i + Math.random() * 10, y + 5);
                ctx.bezierCurveTo(
                    x + i + 5, y + height * 0.3,
                    x + i - 5, y + height * 0.7,
                    x + i + Math.random() * 10, y + height - 5
                );
                ctx.stroke();
            }
        } else {
            // Stone cracks
            ctx.strokeStyle = 'rgba(100,100,100,0.5)';
            ctx.lineWidth = 1;
            for (let i = 0; i < 3; i++) {
                ctx.beginPath();
                const startX = x + Math.random() * width;
                const startY = y + Math.random() * height;
                ctx.moveTo(startX, startY);
                ctx.lineTo(startX + (Math.random() - 0.5) * 30, startY + (Math.random() - 0.5) * 30);
                ctx.stroke();
            }
        }

        // Highlight
        ctx.fillStyle = 'rgba(255,255,255,0.2)';
        ctx.fillRect(x + 3, y + 3, width - 6, 5);

        ctx.restore();
    },

    // Draw an obstacle
    drawObstacle(ctx, type, x, y, size) {
        ctx.save();
        ctx.translate(x, y);

        switch (type) {
            case 'rock':
                this.drawRock(ctx, size);
                break;
            case 'log':
                this.drawLog(ctx, size);
                break;
            case 'leaves':
                this.drawLeaves(ctx, size);
                break;
        }

        ctx.restore();
    },

    drawRock(ctx, size) {
        const radius = size * 0.4;
        
        // Rock shape (irregular)
        ctx.beginPath();
        ctx.moveTo(-radius, radius * 0.2);
        ctx.lineTo(-radius * 0.7, -radius * 0.5);
        ctx.lineTo(0, -radius * 0.7);
        ctx.lineTo(radius * 0.8, -radius * 0.4);
        ctx.lineTo(radius, radius * 0.3);
        ctx.lineTo(radius * 0.5, radius * 0.6);
        ctx.lineTo(-radius * 0.3, radius * 0.5);
        ctx.closePath();
        
        ctx.fillStyle = '#808080';
        ctx.fill();
        ctx.strokeStyle = '#606060';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Highlight
        ctx.beginPath();
        ctx.ellipse(-radius * 0.3, -radius * 0.2, radius * 0.15, radius * 0.1, -0.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.fill();
    },

    drawLog(ctx, size) {
        const width = size * 0.8;
        const height = size * 0.4;

        // Log body
        ctx.beginPath();
        ctx.ellipse(0, 0, width * 0.5, height * 0.5, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#8B7355';
        ctx.fill();
        ctx.strokeStyle = '#6B5344';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Wood rings
        ctx.strokeStyle = 'rgba(107,83,68,0.5)';
        ctx.lineWidth = 1;
        for (let r = 0.1; r < 0.5; r += 0.12) {
            ctx.beginPath();
            ctx.ellipse(0, 0, width * r, height * r, 0, 0, Math.PI * 2);
            ctx.stroke();
        }

        // Center dot
        ctx.beginPath();
        ctx.arc(0, 0, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#5a4030';
        ctx.fill();
    },

    drawLeaves(ctx, size) {
        const colors = ['#7CB342', '#8BC34A', '#689F38', '#9CCC65'];
        
        for (let i = 0; i < 5; i++) {
            const angle = (i / 5) * Math.PI * 2 + Math.random() * 0.5;
            const dist = size * 0.15 + Math.random() * size * 0.1;
            const leafX = Math.cos(angle) * dist;
            const leafY = Math.sin(angle) * dist;
            const leafAngle = angle + Math.PI * 0.5;
            
            ctx.save();
            ctx.translate(leafX, leafY);
            ctx.rotate(leafAngle);
            
            ctx.beginPath();
            ctx.ellipse(0, 0, size * 0.2, size * 0.08, 0, 0, Math.PI * 2);
            ctx.fillStyle = colors[i % colors.length];
            ctx.fill();
            
            ctx.restore();
        }
    },

    // Draw forest floor tile
    drawFloorTile(ctx, x, y, size, variant = 0) {
        ctx.fillStyle = this.colors.grass;
        ctx.fillRect(x, y, size, size);
        
        // Grass texture
        ctx.fillStyle = this.colors.grassDark;
        for (let i = 0; i < 5; i++) {
            const gx = x + (variant * 13 + i * 17) % size;
            const gy = y + (variant * 7 + i * 23) % size;
            ctx.beginPath();
            ctx.moveTo(gx, gy + 8);
            ctx.lineTo(gx - 2, gy);
            ctx.lineTo(gx + 2, gy);
            ctx.closePath();
            ctx.fill();
        }
    },

    // Draw empty/path tile
    drawPathTile(ctx, x, y, size) {
        ctx.fillStyle = this.colors.dirt;
        ctx.fillRect(x, y, size, size);
        
        // Dirt texture
        ctx.fillStyle = this.colors.dirtDark;
        for (let i = 0; i < 3; i++) {
            const px = x + 10 + Math.random() * (size - 20);
            const py = y + 10 + Math.random() * (size - 20);
            ctx.beginPath();
            ctx.arc(px, py, 2 + Math.random() * 3, 0, Math.PI * 2);
            ctx.fill();
        }
    },

    // Draw the squirrel mascot
    drawSquirrel(ctx, x, y, size, pose = 'happy') {
        ctx.save();
        ctx.translate(x, y);
        
        const scale = size / 100;
        ctx.scale(scale, scale);

        // Tail
        ctx.beginPath();
        ctx.moveTo(25, 0);
        ctx.bezierCurveTo(50, -30, 60, -50, 45, -60);
        ctx.bezierCurveTo(30, -70, 20, -50, 30, -30);
        ctx.bezierCurveTo(35, -20, 30, 0, 25, 10);
        ctx.fillStyle = '#A0522D';
        ctx.fill();
        
        // Tail stripe
        ctx.beginPath();
        ctx.moveTo(30, -5);
        ctx.bezierCurveTo(45, -35, 50, -50, 40, -55);
        ctx.strokeStyle = '#D2691E';
        ctx.lineWidth = 8;
        ctx.stroke();

        // Body
        ctx.beginPath();
        ctx.ellipse(0, 20, 25, 30, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#A0522D';
        ctx.fill();

        // Belly
        ctx.beginPath();
        ctx.ellipse(0, 25, 15, 20, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#DEB887';
        ctx.fill();

        // Head
        ctx.beginPath();
        ctx.ellipse(0, -20, 22, 20, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#A0522D';
        ctx.fill();

        // Cheeks
        ctx.beginPath();
        ctx.ellipse(-12, -12, 8, 6, 0, 0, Math.PI * 2);
        ctx.ellipse(12, -12, 8, 6, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#DEB887';
        ctx.fill();

        // Ears
        ctx.beginPath();
        ctx.ellipse(-15, -38, 6, 10, -0.3, 0, Math.PI * 2);
        ctx.ellipse(15, -38, 6, 10, 0.3, 0, Math.PI * 2);
        ctx.fillStyle = '#A0522D';
        ctx.fill();
        
        // Inner ears
        ctx.beginPath();
        ctx.ellipse(-15, -36, 3, 5, -0.3, 0, Math.PI * 2);
        ctx.ellipse(15, -36, 3, 5, 0.3, 0, Math.PI * 2);
        ctx.fillStyle = '#FFDAB9';
        ctx.fill();

        // Eyes
        ctx.beginPath();
        ctx.ellipse(-8, -22, 5, 6, 0, 0, Math.PI * 2);
        ctx.ellipse(8, -22, 5, 6, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#2c1810';
        ctx.fill();
        
        // Eye shine
        ctx.beginPath();
        ctx.arc(-9, -24, 2, 0, Math.PI * 2);
        ctx.arc(7, -24, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();

        // Nose
        ctx.beginPath();
        ctx.ellipse(0, -14, 4, 3, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#4a3520';
        ctx.fill();

        // Mouth based on pose
        if (pose === 'happy') {
            ctx.beginPath();
            ctx.arc(0, -10, 6, 0.1 * Math.PI, 0.9 * Math.PI);
            ctx.strokeStyle = '#4a3520';
            ctx.lineWidth = 2;
            ctx.stroke();
        } else if (pose === 'excited') {
            ctx.beginPath();
            ctx.ellipse(0, -8, 5, 4, 0, 0, Math.PI * 2);
            ctx.fillStyle = '#4a3520';
            ctx.fill();
        }

        // Arms
        ctx.beginPath();
        ctx.ellipse(-25, 15, 8, 12, -0.5, 0, Math.PI * 2);
        ctx.ellipse(25, 15, 8, 12, 0.5, 0, Math.PI * 2);
        ctx.fillStyle = '#A0522D';
        ctx.fill();

        // Feet
        ctx.beginPath();
        ctx.ellipse(-12, 50, 10, 6, 0, 0, Math.PI * 2);
        ctx.ellipse(12, 50, 10, 6, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#8B4513';
        ctx.fill();

        ctx.restore();
    },

    // Draw background
    drawBackground(ctx, width, height) {
        // Sky gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, '#87CEEB');
        gradient.addColorStop(0.5, '#98D8C8');
        gradient.addColorStop(1, '#7CB342');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        // Trees in background
        this.drawBackgroundTrees(ctx, width, height);
    },

    drawBackgroundTrees(ctx, width, height) {
        const treePositions = [0.1, 0.25, 0.4, 0.6, 0.75, 0.9];
        
        treePositions.forEach((pos, i) => {
            const x = width * pos;
            const y = height * 0.6;
            const treeHeight = height * 0.4 + (i % 2) * height * 0.1;
            
            // Trunk
            ctx.fillStyle = '#5D4037';
            ctx.fillRect(x - 8, y, 16, treeHeight * 0.4);
            
            // Foliage layers
            const foliageColors = ['#2E7D32', '#388E3C', '#43A047'];
            for (let j = 0; j < 3; j++) {
                ctx.beginPath();
                ctx.moveTo(x, y - treeHeight + j * 25);
                ctx.lineTo(x - 30 - j * 10, y - treeHeight * 0.3 + j * 25);
                ctx.lineTo(x + 30 + j * 10, y - treeHeight * 0.3 + j * 25);
                ctx.closePath();
                ctx.fillStyle = foliageColors[j];
                ctx.fill();
            }
        });
    }
};
