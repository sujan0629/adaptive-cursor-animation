# Cursor Animation Effect

This project implements a custom animated cursor effect with a light/dark theme toggle using HTML, CSS, and JavaScript. The cursor effect creates a trail of animated circles that follow the user's mouse movements, and the page background can be toggled between light and dark modes.

## Features

- **Custom Animated Cursor**: A circle trail follows the user's mouse movements, creating a dynamic and interactive user experience.
- **Light/Dark Mode Toggle**: Users can switch between light and dark modes using a toggle button, with smooth transitions between themes.
- **Responsive Design**: The animated cursor is hidden on smaller screens for a cleaner mobile experience.

## Files

- **`index.html`**: The main HTML file that structures the page and links the necessary styles and scripts.
- **`cursor.css`**: CSS for styling the animated circles and ensuring responsive behavior.
- **`theme-changer.css`**: CSS for styling the theme toggle button, ensuring it's positioned and sized correctly.
- **`main.js`**: JavaScript for handling the custom cursor animation logic, making the circles follow the user's mouse movements.
- **`script-theme.js`**: JavaScript for handling the light/dark theme toggle functionality, allowing smooth transitions between the two themes.

## How It Works

- **Cursor Animation**: 
  - The `main.js` file listens to the `mousemove` event, tracks the coordinates, and moves the circles accordingly. Circles adjust their positions and scales to create a smooth animation effect【7†source】.

- **Theme Toggle**:
  - The `script-theme.js` file controls the light and dark theme transitions. It changes the background color of the page and the color of the circles based on the current theme. It also updates the theme toggle icon from a sun (light mode) to a moon (dark mode)【8†source】.

- **Responsive Behavior**: 
  - In `cursor.css`, the animated cursor is hidden on screens with a width smaller than 1200px, ensuring that mobile devices have a cleaner interface【6†source】.

## Usage

1. Clone the repository or download the project files.
2. Open `index.html` in your browser to see the cursor animation in action.
3. Click the toggle button in the center of the page to switch between light and dark themes.

## Customization

- You can adjust the number, size, and colors of the animated circles by modifying the `.circle` class in the `cursor.css` file.
- Modify the appearance of the theme toggle button by editing `theme-changer.css`.
- Additional logic or effects can be added to the cursor animation by editing `main.js` and `script-theme.js`.

## Dependencies

- **Bootstrap Icons**: Used for the theme toggle button icon. You can include Bootstrap Icons from a CDN, as demonstrated in the `index.html` file.

---
