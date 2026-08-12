const fs = require('fs');
const http = require('http');
const https = require('https');
const path = require('path');

const html = fs.readFileSync('page.html', 'utf8');

// extract CSS links
const cssRegex = /href=["']([^"']+\.css[^"']*)["']/g;
let match;
const cssFiles = [];
while ((match = cssRegex.exec(html)) !== null) {
  cssFiles.push(match[1]);
}

// extract images
const imgRegex = /(?:src|srcset|data-src)=["']([^"']+)["']/g;
const images = new Set();
while ((match = imgRegex.exec(html)) !== null) {
  const parts = match[1].split(',');
  for (let p of parts) {
    const u = p.trim().split(' ')[0];
    if (u && !u.startsWith('data:')) images.add(u);
  }
}

// extract background images from inline styles or css
const bgRegex = /url\(["']?([^"')]+)["']?\)/g;
while ((match = bgRegex.exec(html)) !== null) {
  if (!match[1].startsWith('data:')) images.add(match[1]);
}

console.log('--- CSS FILES ---');
console.log(cssFiles);

console.log('--- IMAGES (' + images.size + ') ---');
console.log(Array.from(images));
