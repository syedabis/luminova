const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const html = fs.readFileSync('page.html', 'utf8');

// Ensure public directory exists
const publicDir = path.join(__dirname, 'public');
const imagesDir = path.join(publicDir, 'images');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });

console.log('Extracting assets and inspecting HTML structure...');

// Extract all img src and srcset URLs
const imgRegex = /(?:src|srcset|data-src)=["']([^"']+)["']/g;
const imgUrls = new Set();
let match;

while ((match = imgRegex.exec(html)) !== null) {
  const parts = match[1].split(',');
  for (let p of parts) {
    const urlStr = p.trim().split(' ')[0];
    if (urlStr && urlStr.startsWith('http')) {
      imgUrls.add(urlStr);
    }
  }
}

console.log(`Found ${imgUrls.size} image URLs.`);

// Helper function to download file
function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const client = url.startsWith('https') ? https : http;
    client.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      } else {
        file.close();
        fs.unlink(dest, () => {});
        reject(new Error(`Failed with code ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function downloadAll() {
  const mapping = {};
  let count = 0;
  for (const url of imgUrls) {
    try {
      const urlObj = new URL(url);
      const pathname = urlObj.pathname;
      const basename = path.basename(pathname);
      const ext = path.extname(basename) || '.png';
      const cleanName = basename.replace(/[^a-zA-Z0-9._-]/g, '_');
      const filename = `asset_${count}_${cleanName}`;
      const destPath = path.join(imagesDir, filename);

      await downloadFile(url, destPath);
      mapping[url] = `/images/${filename}`;
      console.log(`Downloaded ${count + 1}/${imgUrls.size}: ${cleanName}`);
    } catch (e) {
      console.error(`Error downloading ${url}:`, e.message);
    }
    count++;
  }
  fs.writeFileSync('image_mapping.json', JSON.stringify(mapping, null, 2));
  console.log('Done downloading assets!');
}

downloadAll();
