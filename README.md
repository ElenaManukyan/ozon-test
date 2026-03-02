# Progress Circle Component 🌀

A high-performance, reusable circular progress indicator built with a focus on **encapsulation** and **clean API**.  
Designed for mobile web applications using **Vanilla JS (ES6+ Modules)**.

## 🚀 Improvements & Refactoring (Ozon Feedback addressed)

Following the technical requirements and best practices, the component was fully refactored to address architecture issues:

- **Isolated Logic**: The component is now a self-contained ES6 Class. All HTML/SVG structure is generated internally, preventing DOM pollution.
- **Explicit Public API**: Added clear methods (`setValue`, `setAnimated`, `setHidden`) to control the state from outside without touching internal variables.
- **Robust Validation**: Implemented strict value normalization (0–100) and type checking to prevent broken UI states (fixing the issue where values like 9999 or -9999 were possible).
- **Modular Structure**: Separated CSS, Logic, and Application layers into a dedicated component folder.
- **Independent States**: Fixed the bug where changing values while hidden or animated would break the component logic.

## ✨ Features

- **State Management**: Independent control over Value, Animation, and Visibility.
- **SVG-based Rendering**: Uses `stroke-dasharray` for precise progress control.
- **Adaptive Layout**: Fully responsive design for portrait 📱 and landscape 🖥️ orientations.
- **Zero Dependencies**: Pure HTML5, CSS3, and JavaScript.

## 🎯 Demo

[Live Demo on GitHub Pages](https://elenamanukyan.github.io/ozon-test/)

## 🛠️ API Reference

The component provides a clean interface for integration:

```javascript
import { Progress } from './components/Progress/index.js';

const progress = new Progress(document.getElementById('container'));

progress.setValue(75);      // Set progress (automatically clamped between 0-100)
progress.setAnimated(true); // Enable/Disable rotation
progress.setHidden(false);  // Toggle visibility
```

## 🚀 How to run locally
Since the project uses ES6 Modules, it requires a local server to handle CORS:
```
1.1 Use VS Code Live Server extension.
1.2 Or run npx serve in the project root.
2. Open http://localhost:3000.
```

## 📋 Technical Stack
* JavaScript: ES6+ Classes for encapsulation.
* CSS3: Flexbox, Keyframe animations, and custom UI controls.
* SVG: Mathematical path control for the progress ring.

<img width="752" height="444" alt="image" src="https://github.com/user-attachments/assets/76264e36-5ebc-40bb-849f-38eeb8c2c594" />
<img width="500" height="653" alt="image" src="https://github.com/user-attachments/assets/451aee0a-4856-4d7d-a0e9-cae13a85e9a3" />
