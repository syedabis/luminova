const fs = require('fs');
const html = fs.readFileSync('page.html', 'utf8');

// Let's write a regex/string helper to inspect tags, attributes, text content
console.log("=== HTML ANALYSIS ===");

// 1. Check Navbar / Header
const navMatch = html.match(/<nav[\s\S]*?<\/nav>/i) || html.match(/class="[^"]*nav[^"]*"[\s\S]*?<\/div>/i);
console.log("--- Header / Navigation ---");
// Find all nav links and dropdowns
const linkRegex = /<a[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi;
let lMatch;
const navLinks = [];
while ((lMatch = linkRegex.exec(html)) !== null) {
  const text = lMatch[2].replace(/<[^>]+>/g, '').trim();
  if (text) {
    navLinks.push({ href: lMatch[1], text: text.replace(/\s+/g, ' ') });
  }
}
console.log("Sample links count:", navLinks.length);

// Let's extract key sections by class or tag
const sectionRegex = /<(?:section|div)[^>]*class=["']([^"']*(?:section|hero|footer|nav|header|banner|grid|wrapper|block|card|testimonial|faq)[^"']*)["'][^>]*>/gi;
let sMatch;
const classes = new Set();
while ((sMatch = sectionRegex.exec(html)) !== null) {
  classes.add(sMatch[1]);
}
console.log("Main Section Classes:", Array.from(classes));

