const fs = require('fs');
const body = fs.readFileSync('clean_body.html', 'utf8');

// 1. Navigation items
console.log("=== NAV LINKS ===");
const linkRegex = /<a[^>]*href=["']([^"']*)["'][^>]*class=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi;
let m;
while ((m = linkRegex.exec(body)) !== null) {
  const href = m[1];
  const cls = m[2];
  const txt = m[3].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (cls.includes('nav') || cls.includes('logo') || href.includes('contact') || href.includes('solutions') || href.includes('services')) {
    console.log(`[NAV] ${txt} => ${href}`);
  }
}

// 2. Headings
console.log("\n=== HEADINGS ===");
const hRegex = /<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi;
while ((m = hRegex.exec(body)) !== null) {
  const txt = m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  console.log(`[H] ${txt}`);
}
