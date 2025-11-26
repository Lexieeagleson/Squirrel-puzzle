// Utility functions for the game

const Utils = {
    // Clamp a value between min and max
    clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    },

    // Linear interpolation
    lerp(start, end, t) {
        return start + (end - start) * t;
    },

    // Ease out cubic
    easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    },

    // Ease in out quad
    easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    },

    // Check if two rectangles overlap
    rectsOverlap(r1, r2) {
        return !(r1.x + r1.width < r2.x || 
                 r2.x + r2.width < r1.x || 
                 r1.y + r1.height < r2.y || 
                 r2.y + r2.height < r1.y);
    },

    // Get touch or mouse position from event
    getEventPosition(e, canvas) {
        const rect = canvas.getBoundingClientRect();
        let clientX, clientY;
        
        if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else if (e.changedTouches && e.changedTouches.length > 0) {
            clientX = e.changedTouches[0].clientX;
            clientY = e.changedTouches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }
        
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        
        return {
            x: (clientX - rect.left) * scaleX,
            y: (clientY - rect.top) * scaleY
        };
    },

    // Deep clone an object
    deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    },

    // Save to local storage
    saveToStorage(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (e) {
            console.warn('Failed to save to localStorage:', e);
            return false;
        }
    },

    // Load from local storage
    loadFromStorage(key, defaultValue = null) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : defaultValue;
        } catch (e) {
            console.warn('Failed to load from localStorage:', e);
            return defaultValue;
        }
    },

    // Generate a simple hash for level data
    hashLevel(levelData) {
        return JSON.stringify(levelData).split('').reduce((a, b) => {
            a = ((a << 5) - a) + b.charCodeAt(0);
            return a & a;
        }, 0);
    }
};
