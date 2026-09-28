const fs = require('fs');
const path = require('path');

const TARGET_DIRS = ['src', 'scripts', 'public'];
const TARGET_FILES = ['README.md', 'package.json', 'tailwind.config.ts'];
const ROOT = path.join(__dirname, '..');

let errors = [];

function checkFile(filePath) {
  // Do not flag the checker itself
  if (filePath.endsWith('check-em-dash.js')) return;
  
  const content = fs.readFileSync(filePath, 'utf8');
  // Check for forbidden dash (U+2014) or HTML entities
  if (content.includes(String.fromCharCode(0x2014)) || content.includes('&mdash;') || content.includes('&#8212;')) {
    errors.push(filePath);
  }
}

function walkDir(dir) {
  const fullPath = path.join(ROOT, dir);
  if (!fs.existsSync(fullPath)) return;
  const entries = fs.readdirSync(fullPath, { withFileTypes: true });
  for (const entry of entries) {
    const entryPath = path.join(fullPath, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.next' && entry.name !== '.git') {
        walkDir(path.join(dir, entry.name));
      }
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (['.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.css', '.svg'].includes(ext)) {
        checkFile(entryPath);
      }
    }
  }
}

for (const d of TARGET_DIRS) walkDir(d);
for (const f of TARGET_FILES) {
  const fp = path.join(ROOT, f);
  if (fs.existsSync(fp)) checkFile(fp);
}

if (errors.length > 0) {
  console.error('VIOLATION: Found forbidden em-dash in:');
  errors.forEach(e => console.error('  - ' + path.relative(ROOT, e)));
  process.exit(1);
} else {
  console.log('PASSED: Zero em-dashes found anywhere in the project.');
}
