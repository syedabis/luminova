const fs = require('fs');
const body = fs.readFileSync('clean_body.html', 'utf8');

const navMatch = body.match(/<div[^>]*class=["'][^"']*nav-wrapper[^"']*["'][\s\S]*?<\/div>\s*<\/div>\s*<\/div>/i);
if (navMatch) {
  console.log("=== NAV HTML ===");
  console.log(navMatch[0].slice(0, 3000));
} else {
  console.log("Nav wrapper not matched cleanly, searching for nav-container");
  const navc = body.match(/<div[^>]*class=["'][^"']*nav-container[^"']*["'][\s\S]*?<\/nav>/i);
  if (navc) console.log(navc[0]);
}
