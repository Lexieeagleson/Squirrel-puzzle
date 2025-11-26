// Level definitions for Squirrel Drop
// Grid legend:
// 0 = empty (path)
// 1 = floor/wall (not passable)
// 2 = obstacle (rock)
// 3 = obstacle (log)
// 4 = obstacle (leaves)

const Levels = {
    levels: [
        // Level 1 - Tutorial: Simple single nut
        {
            id: 1,
            name: "First Steps",
            gridWidth: 5,
            gridHeight: 6,
            grid: [
                [1, 1, 0, 1, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 1, 0, 1, 1]
            ],
            blocks: [
                { id: 1, x: 1, y: 2, width: 2, height: 1, type: 'wood' }
            ],
            nuts: [
                { id: 1, type: 'acorn', x: 2, y: 1 }
            ],
            baskets: [
                { id: 1, type: 'acorn', x: 2, y: 5 }
            ],
            par: 1
        },

        // Level 2 - Two nuts same type
        {
            id: 2,
            name: "Double Trouble",
            gridWidth: 5,
            gridHeight: 6,
            grid: [
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 1, 0, 1]
            ],
            blocks: [
                { id: 1, x: 1, y: 2, width: 2, height: 1, type: 'wood' }
            ],
            nuts: [
                { id: 1, type: 'walnut', x: 1, y: 0 },
                { id: 2, type: 'walnut', x: 3, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'walnut', x: 1, y: 5 },
                { id: 2, type: 'walnut', x: 3, y: 5 }
            ],
            par: 2
        },

        // Level 3 - Different nut types
        {
            id: 3,
            name: "Mix and Match",
            gridWidth: 5,
            gridHeight: 6,
            grid: [
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [0, 0, 1, 0, 0]
            ],
            blocks: [
                { id: 1, x: 1, y: 2, width: 2, height: 1, type: 'wood' },
                { id: 2, x: 2, y: 3, width: 2, height: 1, type: 'wood' }
            ],
            nuts: [
                { id: 1, type: 'acorn', x: 1, y: 0 },
                { id: 2, type: 'chestnut', x: 3, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'chestnut', x: 1, y: 5 },
                { id: 2, type: 'acorn', x: 3, y: 5 }
            ],
            par: 3
        },

        // Level 4 - First obstacle
        {
            id: 4,
            name: "Rocky Road",
            gridWidth: 5,
            gridHeight: 7,
            grid: [
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 2, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 1, 0, 1]
            ],
            blocks: [
                { id: 1, x: 1, y: 1, width: 2, height: 1, type: 'wood' }
            ],
            nuts: [
                { id: 1, type: 'hazelnut', x: 1, y: 0 },
                { id: 2, type: 'hazelnut', x: 3, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'hazelnut', x: 1, y: 6 },
                { id: 2, type: 'hazelnut', x: 3, y: 6 }
            ],
            par: 2
        },

        // Level 5 - Multiple blocks
        {
            id: 5,
            name: "Block Party",
            gridWidth: 6,
            gridHeight: 7,
            grid: [
                [1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 0, 1, 1, 0, 1]
            ],
            blocks: [
                { id: 1, x: 1, y: 2, width: 2, height: 1, type: 'wood' },
                { id: 2, x: 3, y: 3, width: 2, height: 1, type: 'wood' },
                { id: 3, x: 1, y: 4, width: 3, height: 1, type: 'stone' }
            ],
            nuts: [
                { id: 1, type: 'pecan', x: 1, y: 0 },
                { id: 2, type: 'almond', x: 4, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'pecan', x: 1, y: 6 },
                { id: 2, type: 'almond', x: 4, y: 6 }
            ],
            par: 4
        },

        // Level 6 - Longer path
        {
            id: 6,
            name: "The Long Drop",
            gridWidth: 5,
            gridHeight: 8,
            grid: [
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [0, 0, 1, 0, 0]
            ],
            blocks: [
                { id: 1, x: 1, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 2, x: 2, y: 3, width: 2, height: 1, type: 'wood' },
                { id: 3, x: 1, y: 5, width: 2, height: 1, type: 'stone' }
            ],
            nuts: [
                { id: 1, type: 'acorn', x: 2, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'acorn', x: 3, y: 7 }
            ],
            par: 3
        },

        // Level 7 - Three nut types
        {
            id: 7,
            name: "Triple Threat",
            gridWidth: 7,
            gridHeight: 7,
            grid: [
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [0, 0, 1, 0, 1, 0, 0]
            ],
            blocks: [
                { id: 1, x: 1, y: 2, width: 3, height: 1, type: 'wood' },
                { id: 2, x: 3, y: 4, width: 3, height: 1, type: 'wood' }
            ],
            nuts: [
                { id: 1, type: 'walnut', x: 1, y: 0 },
                { id: 2, type: 'chestnut', x: 3, y: 0 },
                { id: 3, type: 'hazelnut', x: 5, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'hazelnut', x: 1, y: 6 },
                { id: 2, type: 'walnut', x: 3, y: 6 },
                { id: 3, type: 'chestnut', x: 5, y: 6 }
            ],
            par: 4
        },

        // Level 8 - Obstacle course
        {
            id: 8,
            name: "Obstacle Course",
            gridWidth: 6,
            gridHeight: 8,
            grid: [
                [1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 0, 2, 0, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 0, 0, 3, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [0, 0, 1, 1, 0, 0]
            ],
            blocks: [
                { id: 1, x: 1, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 2, x: 3, y: 3, width: 2, height: 1, type: 'wood' },
                { id: 3, x: 1, y: 5, width: 3, height: 1, type: 'stone' }
            ],
            nuts: [
                { id: 1, type: 'acorn', x: 1, y: 0 },
                { id: 2, type: 'pecan', x: 4, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'pecan', x: 1, y: 7 },
                { id: 2, type: 'acorn', x: 4, y: 7 }
            ],
            par: 5
        },

        // Level 9 - Complex puzzle
        {
            id: 9,
            name: "Brain Teaser",
            gridWidth: 7,
            gridHeight: 8,
            grid: [
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 2, 0, 2, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [0, 0, 1, 0, 1, 0, 0]
            ],
            blocks: [
                { id: 1, x: 1, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 2, x: 4, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 3, x: 2, y: 4, width: 3, height: 1, type: 'stone' },
                { id: 4, x: 1, y: 5, width: 2, height: 1, type: 'wood' }
            ],
            nuts: [
                { id: 1, type: 'walnut', x: 1, y: 0 },
                { id: 2, type: 'almond', x: 3, y: 0 },
                { id: 3, type: 'chestnut', x: 5, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'chestnut', x: 1, y: 7 },
                { id: 2, type: 'walnut', x: 3, y: 7 },
                { id: 3, type: 'almond', x: 5, y: 7 }
            ],
            par: 6
        },

        // Level 10 - The Gauntlet
        {
            id: 10,
            name: "The Gauntlet",
            gridWidth: 8,
            gridHeight: 9,
            grid: [
                [1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 2, 0, 0, 3, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 3, 0, 0, 2, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 1, 0, 0, 1, 0, 0]
            ],
            blocks: [
                { id: 1, x: 1, y: 1, width: 3, height: 1, type: 'wood' },
                { id: 2, x: 4, y: 2, width: 3, height: 1, type: 'wood' },
                { id: 3, x: 1, y: 4, width: 2, height: 1, type: 'stone' },
                { id: 4, x: 4, y: 5, width: 2, height: 1, type: 'stone' },
                { id: 5, x: 2, y: 7, width: 4, height: 1, type: 'wood' }
            ],
            nuts: [
                { id: 1, type: 'acorn', x: 1, y: 0 },
                { id: 2, type: 'walnut', x: 3, y: 0 },
                { id: 3, type: 'hazelnut', x: 4, y: 0 },
                { id: 4, type: 'pecan', x: 6, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'pecan', x: 1, y: 8 },
                { id: 2, type: 'hazelnut', x: 3, y: 8 },
                { id: 3, type: 'walnut', x: 4, y: 8 },
                { id: 4, type: 'acorn', x: 6, y: 8 }
            ],
            par: 8
        },

        // Level 11 - Narrow Passages
        {
            id: 11,
            name: "Narrow Passages",
            gridWidth: 6,
            gridHeight: 8,
            grid: [
                [1, 0, 0, 0, 0, 1],
                [1, 1, 0, 0, 1, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 1, 0, 0, 1, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 0, 1, 1, 0, 1]
            ],
            blocks: [
                { id: 1, x: 1, y: 2, width: 2, height: 1, type: 'wood' },
                { id: 2, x: 2, y: 5, width: 2, height: 1, type: 'wood' }
            ],
            nuts: [
                { id: 1, type: 'chestnut', x: 2, y: 0 },
                { id: 2, type: 'almond', x: 3, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'almond', x: 1, y: 7 },
                { id: 2, type: 'chestnut', x: 4, y: 7 }
            ],
            par: 4
        },

        // Level 12 - Cross Traffic
        {
            id: 12,
            name: "Cross Traffic",
            gridWidth: 7,
            gridHeight: 8,
            grid: [
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 2, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [0, 0, 1, 0, 1, 0, 0]
            ],
            blocks: [
                { id: 1, x: 1, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 2, x: 4, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 3, x: 1, y: 2, width: 4, height: 1, type: 'stone' },
                { id: 4, x: 2, y: 4, width: 2, height: 1, type: 'wood' },
                { id: 5, x: 1, y: 5, width: 3, height: 1, type: 'wood' }
            ],
            nuts: [
                { id: 1, type: 'walnut', x: 1, y: 0 },
                { id: 2, type: 'hazelnut', x: 3, y: 0 },
                { id: 3, type: 'pecan', x: 5, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'pecan', x: 1, y: 7 },
                { id: 2, type: 'walnut', x: 3, y: 7 },
                { id: 3, type: 'hazelnut', x: 5, y: 7 }
            ],
            par: 7
        }
    ],

    // Get a level by ID
    getLevel(id) {
        return this.levels.find(level => level.id === id);
    },

    // Get total number of levels
    getTotalLevels() {
        return this.levels.length;
    },

    // Get level data formatted for game
    getLevelData(id) {
        const level = this.getLevel(id);
        if (!level) return null;
        return Utils.deepClone(level);
    }
};
