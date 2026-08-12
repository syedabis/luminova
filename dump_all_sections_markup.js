const fs = require('fs');
const body = fs.readFileSync('clean_body.html', 'utf8');

// Find all main section blocks
const sections = [];
const regex = /<(?:section|div)[^>]*class=["']([^"']*(?:nav-wrapper|feature-1-wrap|card-1-wrap|app-card-1-wrap|cap-20-card-wrap|test-card-1-wrap|card-390|f-stack-1|faq-85|cta-30|footer-container)[^"']*)["'][^>]*>/gi;

let match;
while ((match = regex.exec(body)) !== null) {
  sections.push({ class: match[1], pos: match.index });
}

console.log(`Found ${sections.length} main component markers.`);
sections.forEach((s, idx) => {
  console.log(`Marker ${idx+1}: ${s.class}`);
});
