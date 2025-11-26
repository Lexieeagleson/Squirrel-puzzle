# Squirrel Drop 🐿️🌰

A fun and engaging web-based puzzle game where you help a cute squirrel collect nuts by sliding blocks to create paths!

## 🎮 Gameplay

- **Objective**: Guide falling nuts into their matching baskets by sliding blocks horizontally
- **Controls**: Drag blocks left or right to create paths for nuts to fall through
- **Win Condition**: Get all nuts into their matching colored baskets

## 🌟 Features

- **12 Challenging Levels** with increasing difficulty
- **Multiple Nut Types**: Acorn, Walnut, Chestnut, Hazelnut, Pecan, Almond
- **Obstacles**: Rocks, logs, and leaves that block your path
- **Mobile-Friendly**: Works on both desktop and mobile browsers
- **Touch Support**: Smooth drag-and-drop on touch devices
- **Progress Saving**: Your progress is saved locally
- **Responsive Design**: Adapts to any screen size

## 🚀 How to Play

1. **Start**: Click "Play" to continue from your last unlocked level, or "Level Select" to choose a specific level
2. **Drag Blocks**: Touch/click and drag the wooden or stone blocks horizontally
3. **Clear the Path**: Create a clear vertical path from each nut to its matching basket
4. **Watch Nuts Fall**: When a path is clear, nuts will fall down automatically
5. **Complete Level**: Get all nuts in their matching baskets to win!

## 🎨 Visual Style

- 2D cartoon-style graphics
- Cozy forest theme with greens and browns
- Cute squirrel mascot
- Soft outlines and wholesome vibes

## 📁 Project Structure

```
Squirrel-puzzle/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Game styles
├── js/
│   ├── utils.js        # Utility functions
│   ├── assets.js       # Graphics and asset generation
│   ├── levels.js       # Level definitions
│   ├── game.js         # Core game engine
│   └── main.js         # UI controller and initialization
├── levels/             # Level data (future expansion)
├── assets/             # Asset directories
│   ├── nuts/
│   ├── baskets/
│   ├── tiles/
│   ├── ui/
│   ├── characters/
│   └── backgrounds/
└── README.md
```

## 🔧 Running Locally

### Option 1: Direct File Open
Simply open `index.html` in a modern web browser.

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000`

## 🌐 Deployment

### GitHub Pages (Automatic)
This repository is configured with GitHub Actions for automatic deployment to GitHub Pages.

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. Go to Settings → Pages and select "GitHub Actions" as the source (first time only)
4. Your game will be available at `https://[username].github.io/Squirrel-puzzle/`

### Other Hosting
Simply upload all files to any static web host (Netlify, Vercel, etc.)

## 📱 Browser Support

- ✅ Chrome (Desktop & Mobile)
- ✅ Safari (Desktop & iOS)
- ✅ Firefox
- ✅ Edge
- ✅ Samsung Internet

## 🛠️ Technical Details

- **Rendering**: HTML5 Canvas
- **No Dependencies**: Pure vanilla JavaScript
- **Storage**: LocalStorage for progress
- **Responsive**: CSS flexbox and media queries

## 🎮 Level Design Guide

Levels are defined in `js/levels.js` with the following structure:

```javascript
{
    id: 1,                    // Unique level ID
    name: "Level Name",       // Display name
    gridWidth: 5,            // Grid columns
    gridHeight: 6,           // Grid rows
    grid: [...],             // 2D array (0=path, 1=wall, 2=rock, 3=log, 4=leaves)
    blocks: [...],           // Sliding blocks
    nuts: [...],             // Nuts to collect
    baskets: [...],          // Goal baskets
    par: 3                   // Par moves for the level
}
```

## 📜 License

MIT License - Feel free to use and modify!

## 🎉 Credits

Created with ❤️ for puzzle game enthusiasts