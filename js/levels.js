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
                { id: 1, x: 2, y: 2, width: 1, height: 1, type: 'wood' }
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
                [1, 0, 1, 0, 1]
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
                { id: 1, type: 'acorn', x: 1, y: 5 },
                { id: 2, type: 'chestnut', x: 3, y: 5 }
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
                { id: 3, x: 1, y: 4, width: 2, height: 1, type: 'stone' }
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
                [1, 0, 1, 0, 1]
            ],
            blocks: [
                { id: 1, x: 2, y: 1, width: 1, height: 1, type: 'wood' },
                { id: 2, x: 3, y: 3, width: 1, height: 1, type: 'wood' },
                { id: 3, x: 2, y: 5, width: 1, height: 1, type: 'stone' }
            ],
            nuts: [
                { id: 1, type: 'acorn', x: 3, y: 0 }
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
                { id: 1, x: 1, y: 2, width: 2, height: 1, type: 'wood' },
                { id: 2, x: 3, y: 4, width: 2, height: 1, type: 'wood' }
            ],
            nuts: [
                { id: 1, type: 'walnut', x: 1, y: 0 },
                { id: 2, type: 'chestnut', x: 3, y: 0 },
                { id: 3, type: 'hazelnut', x: 5, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'walnut', x: 1, y: 6 },
                { id: 2, type: 'chestnut', x: 3, y: 6 },
                { id: 3, type: 'hazelnut', x: 5, y: 6 }
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
                { id: 3, x: 1, y: 5, width: 2, height: 1, type: 'stone' }
            ],
            nuts: [
                { id: 1, type: 'acorn', x: 1, y: 0 },
                { id: 2, type: 'pecan', x: 4, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'acorn', x: 1, y: 7 },
                { id: 2, type: 'pecan', x: 4, y: 7 }
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
                { id: 3, x: 2, y: 4, width: 2, height: 1, type: 'stone' },
                { id: 4, x: 1, y: 5, width: 2, height: 1, type: 'wood' }
            ],
            nuts: [
                { id: 1, type: 'walnut', x: 1, y: 0 },
                { id: 2, type: 'almond', x: 3, y: 0 },
                { id: 3, type: 'chestnut', x: 5, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'walnut', x: 1, y: 7 },
                { id: 2, type: 'almond', x: 3, y: 7 },
                { id: 3, type: 'chestnut', x: 5, y: 7 }
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
                { id: 1, x: 1, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 2, x: 4, y: 2, width: 2, height: 1, type: 'wood' },
                { id: 3, x: 1, y: 4, width: 2, height: 1, type: 'stone' },
                { id: 4, x: 4, y: 5, width: 2, height: 1, type: 'stone' },
                { id: 5, x: 2, y: 7, width: 2, height: 1, type: 'wood' }
            ],
            nuts: [
                { id: 1, type: 'acorn', x: 1, y: 0 },
                { id: 2, type: 'walnut', x: 3, y: 0 },
                { id: 3, type: 'hazelnut', x: 4, y: 0 },
                { id: 4, type: 'pecan', x: 6, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'acorn', x: 1, y: 8 },
                { id: 2, type: 'walnut', x: 3, y: 8 },
                { id: 3, type: 'hazelnut', x: 4, y: 8 },
                { id: 4, type: 'pecan', x: 6, y: 8 }
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
                [1, 1, 0, 0, 1, 1]
            ],
            blocks: [
                { id: 1, x: 1, y: 2, width: 2, height: 1, type: 'wood' },
                { id: 2, x: 2, y: 5, width: 2, height: 1, type: 'wood' }
            ],
            nuts: [
                { id: 1, type: 'almond', x: 2, y: 0 },
                { id: 2, type: 'chestnut', x: 3, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'almond', x: 2, y: 7 },
                { id: 2, type: 'chestnut', x: 3, y: 7 }
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
                [1, 0, 0, 0, 2, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [0, 0, 1, 0, 1, 0, 0]
            ],
            blocks: [
                { id: 1, x: 1, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 2, x: 4, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 3, x: 1, y: 2, width: 2, height: 1, type: 'stone' },
                { id: 4, x: 2, y: 4, width: 2, height: 1, type: 'wood' },
                { id: 5, x: 1, y: 5, width: 2, height: 1, type: 'wood' }
            ],
            nuts: [
                { id: 1, type: 'walnut', x: 1, y: 0 },
                { id: 2, type: 'hazelnut', x: 3, y: 0 },
                { id: 3, type: 'pecan', x: 5, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'walnut', x: 1, y: 7 },
                { id: 2, type: 'hazelnut', x: 3, y: 7 },
                { id: 3, type: 'pecan', x: 5, y: 7 }
            ],
            par: 7
        },

        // Level 13 - Leaf Pile
        {
            id: 13,
            name: "Leaf Pile",
            gridWidth: 6,
            gridHeight: 7,
            grid: [
                [1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 0, 4, 0, 0, 1],
                [1, 0, 0, 0, 4, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [0, 0, 1, 1, 0, 0]
            ],
            blocks: [
                { id: 1, x: 1, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 2, x: 3, y: 2, width: 2, height: 1, type: 'wood' },
                { id: 3, x: 1, y: 4, width: 2, height: 1, type: 'stone' }
            ],
            nuts: [
                { id: 1, type: 'acorn', x: 1, y: 0 },
                { id: 2, type: 'walnut', x: 4, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'acorn', x: 1, y: 6 },
                { id: 2, type: 'walnut', x: 4, y: 6 }
            ],
            par: 5
        },

        // Level 14 - Four Corners
        {
            id: 14,
            name: "Four Corners",
            gridWidth: 7,
            gridHeight: 8,
            grid: [
                [0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [0, 0, 1, 0, 1, 0, 0]
            ],
            blocks: [
                { id: 1, x: 1, y: 2, width: 2, height: 1, type: 'wood' },
                { id: 2, x: 4, y: 2, width: 2, height: 1, type: 'wood' },
                { id: 3, x: 2, y: 4, width: 3, height: 1, type: 'stone' },
                { id: 4, x: 1, y: 5, width: 2, height: 1, type: 'wood' }
            ],
            nuts: [
                { id: 1, type: 'chestnut', x: 0, y: 0 },
                { id: 2, type: 'hazelnut', x: 3, y: 0 },
                { id: 3, type: 'pecan', x: 6, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'chestnut', x: 1, y: 7 },
                { id: 2, type: 'hazelnut', x: 3, y: 7 },
                { id: 3, type: 'pecan', x: 5, y: 7 }
            ],
            par: 6
        },

        // Level 15 - Stone Wall
        {
            id: 15,
            name: "Stone Wall",
            gridWidth: 6,
            gridHeight: 8,
            grid: [
                [1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 0, 2, 2, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [0, 0, 1, 1, 0, 0]
            ],
            blocks: [
                { id: 1, x: 1, y: 1, width: 1, height: 1, type: 'stone' },
                { id: 2, x: 4, y: 1, width: 1, height: 1, type: 'stone' },
                { id: 3, x: 1, y: 4, width: 2, height: 1, type: 'wood' },
                { id: 4, x: 3, y: 5, width: 2, height: 1, type: 'wood' }
            ],
            nuts: [
                { id: 1, type: 'almond', x: 1, y: 0 },
                { id: 2, type: 'acorn', x: 4, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'almond', x: 1, y: 7 },
                { id: 2, type: 'acorn', x: 4, y: 7 }
            ],
            par: 6
        },

        // Level 16 - Zigzag Path
        {
            id: 16,
            name: "Zigzag Path",
            gridWidth: 7,
            gridHeight: 9,
            grid: [
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [0, 0, 1, 0, 1, 0, 0]
            ],
            blocks: [
                { id: 1, x: 2, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 2, x: 3, y: 3, width: 2, height: 1, type: 'wood' },
                { id: 3, x: 2, y: 5, width: 2, height: 1, type: 'stone' },
                { id: 4, x: 2, y: 7, width: 2, height: 1, type: 'wood' }
            ],
            nuts: [
                { id: 1, type: 'walnut', x: 1, y: 0 },
                { id: 2, type: 'chestnut', x: 5, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'walnut', x: 1, y: 8 },
                { id: 2, type: 'chestnut', x: 5, y: 8 }
            ],
            par: 7
        },

        // Level 17 - Double Stack
        {
            id: 17,
            name: "Double Stack",
            gridWidth: 6,
            gridHeight: 9,
            grid: [
                [1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [0, 0, 1, 1, 0, 0]
            ],
            blocks: [
                { id: 1, x: 1, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 2, x: 3, y: 2, width: 2, height: 1, type: 'wood' },
                { id: 3, x: 1, y: 3, width: 2, height: 1, type: 'stone' },
                { id: 4, x: 3, y: 4, width: 2, height: 1, type: 'stone' },
                { id: 5, x: 1, y: 5, width: 2, height: 1, type: 'wood' },
                { id: 6, x: 3, y: 6, width: 2, height: 1, type: 'wood' }
            ],
            nuts: [
                { id: 1, type: 'hazelnut', x: 1, y: 0 },
                { id: 2, type: 'pecan', x: 4, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'hazelnut', x: 1, y: 8 },
                { id: 2, type: 'pecan', x: 4, y: 8 }
            ],
            par: 8
        },

        // Level 18 - Rock Garden
        {
            id: 18,
            name: "Rock Garden",
            gridWidth: 7,
            gridHeight: 8,
            grid: [
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 2, 0, 2, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 2, 0, 2, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [0, 0, 1, 0, 1, 0, 0]
            ],
            blocks: [
                { id: 1, x: 1, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 2, x: 4, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 3, x: 1, y: 3, width: 2, height: 1, type: 'stone' },
                { id: 4, x: 4, y: 4, width: 2, height: 1, type: 'stone' }
            ],
            nuts: [
                { id: 1, type: 'acorn', x: 1, y: 0 },
                { id: 2, type: 'almond', x: 3, y: 0 },
                { id: 3, type: 'walnut', x: 5, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'acorn', x: 1, y: 7 },
                { id: 2, type: 'almond', x: 3, y: 7 },
                { id: 3, type: 'walnut', x: 5, y: 7 }
            ],
            par: 7
        },

        // Level 19 - The Funnel
        {
            id: 19,
            name: "The Funnel",
            gridWidth: 8,
            gridHeight: 9,
            grid: [
                [0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 0, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 1, 1, 1],
                [1, 1, 1, 0, 0, 1, 1, 1]
            ],
            blocks: [
                { id: 1, x: 2, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 2, x: 4, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 3, x: 2, y: 2, width: 2, height: 1, type: 'stone' },
                { id: 4, x: 3, y: 4, width: 1, height: 1, type: 'wood' }
            ],
            nuts: [
                { id: 1, type: 'chestnut', x: 1, y: 0 },
                { id: 2, type: 'hazelnut', x: 6, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'chestnut', x: 3, y: 8 },
                { id: 2, type: 'hazelnut', x: 4, y: 8 }
            ],
            par: 6
        },

        // Level 20 - Log Jam
        {
            id: 20,
            name: "Log Jam",
            gridWidth: 7,
            gridHeight: 9,
            grid: [
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 3, 0, 0, 0, 1],
                [1, 0, 0, 0, 3, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 3, 0, 0, 0, 1],
                [1, 0, 0, 0, 3, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [0, 0, 1, 0, 1, 0, 0]
            ],
            blocks: [
                { id: 1, x: 1, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 2, x: 4, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 3, x: 3, y: 4, width: 2, height: 1, type: 'stone' },
                { id: 4, x: 1, y: 6, width: 2, height: 1, type: 'wood' }
            ],
            nuts: [
                { id: 1, type: 'walnut', x: 1, y: 0 },
                { id: 2, type: 'almond', x: 3, y: 0 },
                { id: 3, type: 'acorn', x: 5, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'walnut', x: 1, y: 8 },
                { id: 2, type: 'almond', x: 3, y: 8 },
                { id: 3, type: 'acorn', x: 5, y: 8 }
            ],
            par: 8
        },

        // Level 21 - The Maze
        {
            id: 21,
            name: "The Maze",
            gridWidth: 8,
            gridHeight: 9,
            grid: [
                [1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 0, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 0, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 1, 0, 0, 1, 0, 0]
            ],
            blocks: [
                { id: 1, x: 1, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 2, x: 5, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 3, x: 3, y: 3, width: 2, height: 1, type: 'stone' },
                { id: 4, x: 1, y: 4, width: 2, height: 1, type: 'wood' },
                { id: 5, x: 3, y: 6, width: 2, height: 1, type: 'wood' }
            ],
            nuts: [
                { id: 1, type: 'hazelnut', x: 1, y: 0 },
                { id: 2, type: 'chestnut', x: 3, y: 0 },
                { id: 3, type: 'pecan', x: 6, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'hazelnut', x: 1, y: 8 },
                { id: 2, type: 'chestnut', x: 4, y: 8 },
                { id: 3, type: 'pecan', x: 6, y: 8 }
            ],
            par: 9
        },

        // Level 22 - Wide Open
        {
            id: 22,
            name: "Wide Open",
            gridWidth: 9,
            gridHeight: 8,
            grid: [
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 1, 0, 1, 0, 1, 0, 0]
            ],
            blocks: [
                { id: 1, x: 1, y: 1, width: 3, height: 1, type: 'wood' },
                { id: 2, x: 5, y: 1, width: 3, height: 1, type: 'wood' },
                { id: 3, x: 2, y: 3, width: 2, height: 1, type: 'stone' },
                { id: 4, x: 5, y: 3, width: 2, height: 1, type: 'stone' },
                { id: 5, x: 1, y: 5, width: 2, height: 1, type: 'wood' },
                { id: 6, x: 4, y: 5, width: 3, height: 1, type: 'wood' }
            ],
            nuts: [
                { id: 1, type: 'acorn', x: 1, y: 0 },
                { id: 2, type: 'walnut', x: 3, y: 0 },
                { id: 3, type: 'almond', x: 5, y: 0 },
                { id: 4, type: 'chestnut', x: 7, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'acorn', x: 1, y: 7 },
                { id: 2, type: 'walnut', x: 3, y: 7 },
                { id: 3, type: 'almond', x: 5, y: 7 },
                { id: 4, type: 'chestnut', x: 7, y: 7 }
            ],
            par: 10
        },

        // Level 23 - Obstacle Run
        {
            id: 23,
            name: "Obstacle Run",
            gridWidth: 7,
            gridHeight: 10,
            grid: [
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 2, 0, 0, 0, 1],
                [1, 0, 0, 0, 3, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 4, 0, 0, 0, 1],
                [1, 0, 0, 0, 2, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [0, 0, 1, 0, 1, 0, 0]
            ],
            blocks: [
                { id: 1, x: 1, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 2, x: 4, y: 2, width: 2, height: 1, type: 'wood' },
                { id: 3, x: 1, y: 4, width: 2, height: 1, type: 'stone' },
                { id: 4, x: 3, y: 5, width: 2, height: 1, type: 'stone' },
                { id: 5, x: 1, y: 7, width: 2, height: 1, type: 'wood' }
            ],
            nuts: [
                { id: 1, type: 'pecan', x: 1, y: 0 },
                { id: 2, type: 'hazelnut', x: 3, y: 0 },
                { id: 3, type: 'walnut', x: 5, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'pecan', x: 1, y: 9 },
                { id: 2, type: 'hazelnut', x: 3, y: 9 },
                { id: 3, type: 'walnut', x: 5, y: 9 }
            ],
            par: 9
        },

        // Level 24 - Tight Squeeze
        {
            id: 24,
            name: "Tight Squeeze",
            gridWidth: 6,
            gridHeight: 10,
            grid: [
                [1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 1, 0, 0, 1, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 1, 0, 0, 1, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 1, 0, 0, 1, 1],
                [1, 1, 0, 0, 1, 1]
            ],
            blocks: [
                { id: 1, x: 2, y: 1, width: 1, height: 1, type: 'wood' },
                { id: 2, x: 2, y: 3, width: 2, height: 1, type: 'stone' },
                { id: 3, x: 2, y: 4, width: 1, height: 1, type: 'wood' },
                { id: 4, x: 2, y: 6, width: 2, height: 1, type: 'wood' },
                { id: 5, x: 2, y: 7, width: 1, height: 1, type: 'stone' }
            ],
            nuts: [
                { id: 1, type: 'almond', x: 2, y: 0 },
                { id: 2, type: 'acorn', x: 3, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'almond', x: 2, y: 9 },
                { id: 2, type: 'acorn', x: 3, y: 9 }
            ],
            par: 8
        },

        // Level 25 - Five Nuts
        {
            id: 25,
            name: "Five Nuts",
            gridWidth: 9,
            gridHeight: 9,
            grid: [
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 1, 0, 1, 0, 1, 0, 0]
            ],
            blocks: [
                { id: 1, x: 1, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 2, x: 4, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 3, x: 6, y: 2, width: 2, height: 1, type: 'wood' },
                { id: 4, x: 2, y: 3, width: 3, height: 1, type: 'stone' },
                { id: 5, x: 1, y: 5, width: 2, height: 1, type: 'wood' },
                { id: 6, x: 5, y: 5, width: 2, height: 1, type: 'stone' },
                { id: 7, x: 3, y: 6, width: 2, height: 1, type: 'wood' }
            ],
            nuts: [
                { id: 1, type: 'acorn', x: 1, y: 0 },
                { id: 2, type: 'walnut', x: 3, y: 0 },
                { id: 3, type: 'chestnut', x: 4, y: 0 },
                { id: 4, type: 'hazelnut', x: 5, y: 0 },
                { id: 5, type: 'pecan', x: 7, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'acorn', x: 1, y: 8 },
                { id: 2, type: 'walnut', x: 3, y: 8 },
                { id: 3, type: 'chestnut', x: 4, y: 8 },
                { id: 4, type: 'hazelnut', x: 5, y: 8 },
                { id: 5, type: 'pecan', x: 7, y: 8 }
            ],
            par: 11
        },

        // Level 26 - Mixed Obstacles
        {
            id: 26,
            name: "Mixed Obstacles",
            gridWidth: 8,
            gridHeight: 10,
            grid: [
                [1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 2, 0, 0, 3, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 4, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 3, 0, 0, 2, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 1, 0, 0, 1, 0, 0]
            ],
            blocks: [
                { id: 1, x: 1, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 2, x: 5, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 3, x: 1, y: 3, width: 2, height: 1, type: 'stone' },
                { id: 4, x: 4, y: 4, width: 2, height: 1, type: 'wood' },
                { id: 5, x: 1, y: 5, width: 2, height: 1, type: 'wood' },
                { id: 6, x: 4, y: 7, width: 2, height: 1, type: 'stone' }
            ],
            nuts: [
                { id: 1, type: 'almond', x: 1, y: 0 },
                { id: 2, type: 'pecan', x: 3, y: 0 },
                { id: 3, type: 'chestnut', x: 6, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'almond', x: 1, y: 9 },
                { id: 2, type: 'pecan', x: 4, y: 9 },
                { id: 3, type: 'chestnut', x: 6, y: 9 }
            ],
            par: 10
        },

        // Level 27 - The Tower
        {
            id: 27,
            name: "The Tower",
            gridWidth: 5,
            gridHeight: 11,
            grid: [
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 0, 0, 1],
                [1, 0, 1, 0, 1]
            ],
            blocks: [
                { id: 1, x: 1, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 2, x: 2, y: 2, width: 2, height: 1, type: 'stone' },
                { id: 3, x: 1, y: 3, width: 2, height: 1, type: 'wood' },
                { id: 4, x: 2, y: 4, width: 2, height: 1, type: 'stone' },
                { id: 5, x: 1, y: 6, width: 2, height: 1, type: 'wood' },
                { id: 6, x: 2, y: 7, width: 2, height: 1, type: 'wood' },
                { id: 7, x: 1, y: 8, width: 2, height: 1, type: 'stone' }
            ],
            nuts: [
                { id: 1, type: 'hazelnut', x: 1, y: 0 },
                { id: 2, type: 'walnut', x: 3, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'hazelnut', x: 1, y: 10 },
                { id: 2, type: 'walnut', x: 3, y: 10 }
            ],
            par: 10
        },

        // Level 28 - Crossing Paths
        {
            id: 28,
            name: "Crossing Paths",
            gridWidth: 8,
            gridHeight: 9,
            grid: [
                [1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 2, 2, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 1, 0, 0, 1, 0, 0]
            ],
            blocks: [
                { id: 1, x: 1, y: 1, width: 3, height: 1, type: 'wood' },
                { id: 2, x: 4, y: 1, width: 3, height: 1, type: 'wood' },
                { id: 3, x: 1, y: 2, width: 2, height: 1, type: 'stone' },
                { id: 4, x: 5, y: 2, width: 2, height: 1, type: 'stone' },
                { id: 5, x: 1, y: 4, width: 2, height: 1, type: 'wood' },
                { id: 6, x: 5, y: 5, width: 2, height: 1, type: 'wood' },
                { id: 7, x: 2, y: 6, width: 2, height: 1, type: 'stone' }
            ],
            nuts: [
                { id: 1, type: 'acorn', x: 1, y: 0 },
                { id: 2, type: 'walnut', x: 4, y: 0 },
                { id: 3, type: 'almond', x: 6, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'acorn', x: 1, y: 8 },
                { id: 2, type: 'walnut', x: 4, y: 8 },
                { id: 3, type: 'almond', x: 6, y: 8 }
            ],
            par: 11
        },

        // Level 29 - The Labyrinth
        {
            id: 29,
            name: "The Labyrinth",
            gridWidth: 9,
            gridHeight: 10,
            grid: [
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 0, 0, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 2, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 0, 0, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 1, 0, 0, 0, 1, 0, 0]
            ],
            blocks: [
                { id: 1, x: 1, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 2, x: 4, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 3, x: 6, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 4, x: 3, y: 3, width: 3, height: 1, type: 'stone' },
                { id: 5, x: 1, y: 5, width: 2, height: 1, type: 'wood' },
                { id: 6, x: 5, y: 5, width: 2, height: 1, type: 'stone' },
                { id: 7, x: 3, y: 7, width: 3, height: 1, type: 'wood' }
            ],
            nuts: [
                { id: 1, type: 'chestnut', x: 1, y: 0 },
                { id: 2, type: 'hazelnut', x: 4, y: 0 },
                { id: 3, type: 'pecan', x: 7, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'chestnut', x: 1, y: 9 },
                { id: 2, type: 'hazelnut', x: 4, y: 9 },
                { id: 3, type: 'pecan', x: 7, y: 9 }
            ],
            par: 12
        },

        // Level 30 - Six Pack
        {
            id: 30,
            name: "Six Pack",
            gridWidth: 10,
            gridHeight: 9,
            grid: [
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 1, 0, 1, 0, 1, 0, 0, 0]
            ],
            blocks: [
                { id: 1, x: 1, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 2, x: 4, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 3, x: 7, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 4, x: 2, y: 3, width: 3, height: 1, type: 'stone' },
                { id: 5, x: 6, y: 3, width: 2, height: 1, type: 'stone' },
                { id: 6, x: 1, y: 5, width: 2, height: 1, type: 'wood' },
                { id: 7, x: 4, y: 5, width: 3, height: 1, type: 'wood' },
                { id: 8, x: 3, y: 6, width: 2, height: 1, type: 'stone' }
            ],
            nuts: [
                { id: 1, type: 'acorn', x: 1, y: 0 },
                { id: 2, type: 'walnut', x: 3, y: 0 },
                { id: 3, type: 'chestnut', x: 4, y: 0 },
                { id: 4, type: 'hazelnut', x: 5, y: 0 },
                { id: 5, type: 'pecan', x: 7, y: 0 },
                { id: 6, type: 'almond', x: 8, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'acorn', x: 1, y: 8 },
                { id: 2, type: 'walnut', x: 3, y: 8 },
                { id: 3, type: 'chestnut', x: 5, y: 8 },
                { id: 4, type: 'hazelnut', x: 7, y: 8 },
                { id: 5, type: 'pecan', x: 8, y: 8 },
                { id: 6, type: 'almond', x: 9, y: 8 }
            ],
            par: 13
        },

        // Level 31 - Expert Challenge
        {
            id: 31,
            name: "Expert Challenge",
            gridWidth: 9,
            gridHeight: 11,
            grid: [
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 2, 0, 0, 0, 2, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 3, 0, 3, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 4, 0, 0, 0, 4, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 1, 0, 0, 0, 1, 0, 0]
            ],
            blocks: [
                { id: 1, x: 1, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 2, x: 4, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 3, x: 6, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 4, x: 1, y: 3, width: 2, height: 1, type: 'stone' },
                { id: 5, x: 6, y: 3, width: 2, height: 1, type: 'stone' },
                { id: 6, x: 1, y: 6, width: 3, height: 1, type: 'wood' },
                { id: 7, x: 5, y: 6, width: 3, height: 1, type: 'wood' },
                { id: 8, x: 3, y: 9, width: 3, height: 1, type: 'stone' }
            ],
            nuts: [
                { id: 1, type: 'acorn', x: 1, y: 0 },
                { id: 2, type: 'walnut', x: 3, y: 0 },
                { id: 3, type: 'chestnut', x: 4, y: 0 },
                { id: 4, type: 'hazelnut', x: 7, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'acorn', x: 1, y: 10 },
                { id: 2, type: 'walnut', x: 4, y: 10 },
                { id: 3, type: 'chestnut', x: 5, y: 10 },
                { id: 4, type: 'hazelnut', x: 7, y: 10 }
            ],
            par: 14
        },

        // Level 32 - Grand Finale
        {
            id: 32,
            name: "Grand Finale",
            gridWidth: 10,
            gridHeight: 12,
            grid: [
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 2, 0, 0, 0, 0, 2, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 3, 3, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 4, 0, 0, 0, 0, 4, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 1, 0, 1, 0, 1, 0, 0, 0]
            ],
            blocks: [
                { id: 1, x: 1, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 2, x: 4, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 3, x: 7, y: 1, width: 2, height: 1, type: 'wood' },
                { id: 4, x: 1, y: 2, width: 2, height: 1, type: 'stone' },
                { id: 5, x: 7, y: 2, width: 2, height: 1, type: 'stone' },
                { id: 6, x: 1, y: 4, width: 2, height: 1, type: 'wood' },
                { id: 7, x: 6, y: 4, width: 3, height: 1, type: 'wood' },
                { id: 8, x: 1, y: 6, width: 3, height: 1, type: 'stone' },
                { id: 9, x: 5, y: 6, width: 3, height: 1, type: 'stone' },
                { id: 10, x: 1, y: 9, width: 2, height: 1, type: 'wood' },
                { id: 11, x: 4, y: 9, width: 2, height: 1, type: 'wood' },
                { id: 12, x: 7, y: 9, width: 2, height: 1, type: 'wood' }
            ],
            nuts: [
                { id: 1, type: 'acorn', x: 1, y: 0 },
                { id: 2, type: 'walnut', x: 3, y: 0 },
                { id: 3, type: 'chestnut', x: 4, y: 0 },
                { id: 4, type: 'hazelnut', x: 5, y: 0 },
                { id: 5, type: 'pecan', x: 6, y: 0 },
                { id: 6, type: 'almond', x: 8, y: 0 }
            ],
            baskets: [
                { id: 1, type: 'acorn', x: 1, y: 11 },
                { id: 2, type: 'walnut', x: 3, y: 11 },
                { id: 3, type: 'chestnut', x: 5, y: 11 },
                { id: 4, type: 'hazelnut', x: 7, y: 11 },
                { id: 5, type: 'pecan', x: 8, y: 11 },
                { id: 6, type: 'almond', x: 9, y: 11 }
            ],
            par: 15
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
