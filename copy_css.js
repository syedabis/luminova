const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'src', 'app');
if (!fs.existsSync(appDir)) fs.mkdirSync(appDir, { recursive: true });

let cssContent = fs.readFileSync('webflow.css', 'utf8');

// Additional custom enhancements for smooth scrolling & Next.js compatibility
const extraCss = `
html {
  scroll-behavior: smooth;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #0c0e12;
  color: #ffffff;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-color: #0c0e12;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #0c0e12;
}
::-webkit-scrollbar-thumb {
  background: #2a2e39;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #3f4556;
}

.w-dropdown-list.w--open {
  display: block !important;
  opacity: 1 !important;
  visibility: visible !important;
}

.w-dropdown-toggle.w--open {
  z-index: 1000;
}
`;

fs.writeFileSync(path.join(appDir, 'globals.css'), cssContent + '\n' + extraCss);
console.log('Created src/app/globals.css successfully!');
