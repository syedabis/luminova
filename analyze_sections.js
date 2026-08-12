const fs = require('fs');
const body = fs.readFileSync('clean_body.html', 'utf8');

// Find all top-level divs or sections inside page-wrapper or main-wrapper
console.log('--- Inspecting Sections in clean_body.html ---');

// Search for elements with class containing 'section', 'nav', 'hero', 'footer', 'banner'
const regex = /<div[^>]*class=["']([^"']*(?:nav|section|hero|footer|banner|wrapper|main|app-card|cap-20|test-card|card-390|f-stack|faq|cta)[^"']*)["'][^>]*>/gi;
let match;
const sectionMatches = [];
while ((match = regex.exec(body)) !== null) {
  sectionMatches.push({ class: match[1], index: match.index });
}

console.log(`Found ${sectionMatches.length} section markers.`);
sectionMatches.forEach((s, idx) => {
  console.log(`${idx + 1}. Class: ${s.class}`);
});
