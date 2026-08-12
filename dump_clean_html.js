const fs = require('fs');
const path = require('path');

let html = fs.readFileSync('page.html', 'utf8');
const mapping = JSON.parse(fs.readFileSync('image_mapping.json', 'utf8'));

// Replace all external CDN URLs with mapped local URLs
for (const [remoteUrl, localUrl] of Object.entries(mapping)) {
  const escaped = remoteUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  html = html.replace(new RegExp(escaped, 'g'), localUrl);
}

// Extract body content inside <body>...</body>
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
const bodyContent = bodyMatch ? bodyMatch[1] : html;

fs.writeFileSync('clean_body.html', bodyContent);
console.log('Saved clean_body.html with local image paths.');

// Let's also inspect all sections inside bodyContent
const cheerio = require('events'); // Simple regex section parser
console.log('Clean body size:', bodyContent.length);
