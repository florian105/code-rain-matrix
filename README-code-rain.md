# Code Rain Matrix Animation

Subtle Matrix-style code rain animation for website backgrounds.

## Features

- 🎨 Ultra-subtle animation (perfect for professional B2B sites)
- ⚡ Lightweight (pure HTML5 Canvas, no libraries)
- 📱 Responsive (adapts to container size)
- 🎯 UMSO-compatible (embed-friendly)
- 🎨 Customizable (speed, opacity, colors)

## Preview

![Code Rain Animation](preview.png)

## Usage

### As Website Background

```html
<div style="position: relative; width: 100%; height: 200px; overflow: hidden; background: #0d3b6f;">
    <canvas id="matrix-canvas"></canvas>
</div>
<script src="matrix-animation.js"></script>
```

### Customization

Edit `matrix-animation.js`:

```javascript
// Speed (0.05 = very slow, 0.4 = fast)
drops[i] += 0.15;

// Opacity (0.01-0.1)
const fadeColor = 'rgba(13, 59, 111, 0.05)';

// Colors
const matrixColor = '#d6ff3f'; // Character color
const backgroundColor = '#0d3b6f'; // Background
```

## Integration

### UMSO CMS
1. Add "Custom HTML" block
2. Paste the embed code
3. Adjust height as needed

### Standard HTML
Include in your HTML file or use as external script.

## Technical Details

- Pure JavaScript (no dependencies)
- Canvas API
- 60 FPS animation
- Memory-efficient

## License

MIT License - Free to use and modify

## Author

Florian Nègre - [negreflorian.com](https://negreflorian.com)
