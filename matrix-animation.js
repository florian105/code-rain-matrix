/**
 * Code Rain Matrix Animation
 * Ultra-subtle Matrix-style animation for professional websites
 * Author: Florian Nègre
 * License: MIT
 */

(function() {
    // Get canvas element
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) {
        console.error('Matrix canvas not found. Add <canvas id="matrix-canvas"></canvas> to your HTML.');
        return;
    }
    
    const ctx = canvas.getContext('2d');

    // Configuration
    const config = {
        chars: '01アイウエオカキクケコサシスセソタチツテト',
        fontSize: 14,
        speed: 0.15, // 0.05 = very slow, 0.4 = fast
        fadeOpacity: 0.05, // 0.01-0.1
        charOpacity: [0.3, 0.8], // min, max
        matrixColor: '#d6ff3f',
        backgroundColor: '#0d3b6f',
        resetProbability: 0.975 // Higher = slower reset
    };

    // Set canvas size
    function resizeCanvas() {
        const container = canvas.parentElement;
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
        
        // Recalculate columns
        columns = Math.floor(canvas.width / config.fontSize);
        
        // Reset drops array
        drops.length = 0;
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * (canvas.height / config.fontSize);
        }
    }

    // Initialize
    let columns = Math.floor(canvas.width / config.fontSize);
    const drops = [];
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // RGB to Hex helper
    function rgbToHex(r, g, b) {
        return '#' + [r, g, b].map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }).join('');
    }

    // Draw function
    function draw() {
        // Fade effect
        const bgRgb = [13, 59, 111]; // #0d3b6f
        const alpha = Math.floor(config.fadeOpacity * 255).toString(16).padStart(2, '0');
        ctx.fillStyle = `rgba(${bgRgb.join(',')}, ${config.fadeOpacity})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Set font
        ctx.font = config.fontSize + 'px monospace';

        // Draw characters
        for (let i = 0; i < drops.length; i++) {
            // Random character
            const text = config.chars[Math.floor(Math.random() * config.chars.length)];
            const x = i * config.fontSize;
            const y = drops[i] * config.fontSize;

            // Variable opacity for depth
            const opacity = Math.random() * (config.charOpacity[1] - config.charOpacity[0]) + config.charOpacity[0];
            const alphaHex = Math.floor(opacity * 255).toString(16).padStart(2, '0');
            ctx.fillStyle = config.matrixColor + alphaHex;
            ctx.fillText(text, x, y);

            // Reset drop to top randomly
            if (y > canvas.height && Math.random() > config.resetProbability) {
                drops[i] = 0;
            }

            // Increment Y coordinate
            drops[i] += config.speed;
        }
    }

    // Animation loop (33ms ≈ 30 FPS for smoothness without performance hit)
    const animationInterval = setInterval(draw, 33);

    // Cleanup on page unload
    window.addEventListener('beforeunload', function() {
        clearInterval(animationInterval);
    });

    // Expose config for runtime modifications (optional)
    window.matrixAnimation = {
        setSpeed: function(speed) {
            config.speed = speed;
        },
        setColor: function(color) {
            config.matrixColor = color;
        },
        setOpacity: function(min, max) {
            config.charOpacity = [min, max];
        }
    };
})();
