// Main entry point and UI controller for Squirrel Drop

let game = null;
let currentScreen = 'start';

// DOM Elements
const startScreen = document.getElementById('start-screen');
const levelSelectScreen = document.getElementById('level-select-screen');
const gameScreen = document.getElementById('game-screen');
const winPopup = document.getElementById('win-popup');
const pauseMenu = document.getElementById('pause-menu');

// Buttons
const playBtn = document.getElementById('play-btn');
const levelSelectBtn = document.getElementById('level-select-btn');
const backToMenuBtn = document.getElementById('back-to-menu-btn');
const menuBtn = document.getElementById('menu-btn');
const restartBtn = document.getElementById('restart-btn');
const nextLevelBtn = document.getElementById('next-level-btn');
const replayBtn = document.getElementById('replay-btn');
const resumeBtn = document.getElementById('resume-btn');
const restartLevelBtn = document.getElementById('restart-level-btn');
const exitToMenuBtn = document.getElementById('exit-to-menu-btn');

// Level grid
const levelGrid = document.getElementById('level-grid');

// Initialize game
function init() {
    const canvas = document.getElementById('game-canvas');
    game = new Game(canvas);
    
    // Setup event listeners
    setupUIListeners();
    
    // Generate level select buttons
    generateLevelButtons();
    
    // Handle resize
    window.addEventListener('resize', handleResize);
    
    console.log('Squirrel Drop initialized!');
}

function setupUIListeners() {
    // Start screen
    playBtn.addEventListener('click', () => {
        const progress = Utils.loadFromStorage('squirrel-progress', { completedLevels: [] });
        const nextLevel = Math.max(1, ...progress.completedLevels.map(l => l + 1), 1);
        startLevel(Math.min(nextLevel, Levels.getTotalLevels()));
    });
    
    levelSelectBtn.addEventListener('click', () => {
        showScreen('level-select');
    });
    
    // Level select
    backToMenuBtn.addEventListener('click', () => {
        showScreen('start');
    });
    
    // Game screen
    menuBtn.addEventListener('click', () => {
        showPauseMenu();
    });
    
    restartBtn.addEventListener('click', () => {
        if (game) game.restart();
    });
    
    // Win popup
    nextLevelBtn.addEventListener('click', () => {
        const nextLevel = game.levelId + 1;
        hidePopup(winPopup);
        if (nextLevel <= Levels.getTotalLevels()) {
            startLevel(nextLevel);
        } else {
            showScreen('start');
            alert('Congratulations! You completed all levels!');
        }
    });
    
    replayBtn.addEventListener('click', () => {
        hidePopup(winPopup);
        if (game) game.restart();
    });
    
    // Pause menu
    resumeBtn.addEventListener('click', () => {
        hidePopup(pauseMenu);
        if (game) game.isPlaying = true;
    });
    
    restartLevelBtn.addEventListener('click', () => {
        hidePopup(pauseMenu);
        if (game) game.restart();
    });
    
    exitToMenuBtn.addEventListener('click', () => {
        hidePopup(pauseMenu);
        if (game) game.stop();
        showScreen('start');
    });
}

function generateLevelButtons() {
    const progress = Utils.loadFromStorage('squirrel-progress', { completedLevels: [], bestMoves: {} });
    const totalLevels = Levels.getTotalLevels();
    
    levelGrid.innerHTML = '';
    
    for (let i = 1; i <= totalLevels; i++) {
        const btn = document.createElement('button');
        btn.className = 'level-btn';
        btn.textContent = i;
        
        const isCompleted = progress.completedLevels.includes(i);
        const isUnlocked = i === 1 || progress.completedLevels.includes(i - 1) || isCompleted;
        
        if (isCompleted) {
            btn.classList.add('completed');
        }
        
        if (!isUnlocked) {
            btn.classList.add('locked');
            btn.textContent = '🔒';
        } else {
            btn.addEventListener('click', () => {
                startLevel(i);
            });
        }
        
        levelGrid.appendChild(btn);
    }
}

function startLevel(levelId) {
    showScreen('game');
    
    // Update level display
    document.getElementById('level-display').textContent = `Level ${levelId}`;
    
    // Load level
    if (game) {
        game.loadLevel(levelId);
    }
}

function showScreen(screenName) {
    // Hide all screens
    startScreen.classList.add('hidden');
    levelSelectScreen.classList.add('hidden');
    gameScreen.classList.add('hidden');
    
    // Show requested screen
    switch (screenName) {
        case 'start':
            startScreen.classList.remove('hidden');
            break;
        case 'level-select':
            generateLevelButtons();
            levelSelectScreen.classList.remove('hidden');
            break;
        case 'game':
            gameScreen.classList.remove('hidden');
            break;
    }
    
    currentScreen = screenName;
}

function showPopup(popup) {
    popup.classList.remove('hidden');
}

function hidePopup(popup) {
    popup.classList.add('hidden');
}

function showPauseMenu() {
    if (game) game.isPlaying = false;
    showPopup(pauseMenu);
}

// Called from game.js when level is completed
function onLevelComplete(levelId, moves, par) {
    // Update stats
    const winStats = document.getElementById('win-stats');
    if (winStats) {
        let message = `Moves: ${moves}`;
        if (moves <= par) {
            message += ` 🌟 (Par: ${par})`;
        } else {
            message += ` (Par: ${par})`;
        }
        winStats.textContent = message;
    }
    
    // Update next level button visibility
    const hasNextLevel = levelId < Levels.getTotalLevels();
    nextLevelBtn.style.display = hasNextLevel ? 'inline-block' : 'none';
    
    // Show popup
    showPopup(winPopup);
    
    // Refresh level buttons
    generateLevelButtons();
}

function handleResize() {
    if (game && game.currentLevel) {
        game.resizeCanvas();
    }
}

// Start the game when DOM is ready
document.addEventListener('DOMContentLoaded', init);
