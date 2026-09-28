const fs = require('fs');
const path = require('path');

const photosDir = path.join(__dirname, '../public/photos');
const logosDir = path.join(__dirname, '../public/logos');

if (!fs.existsSync(photosDir)) fs.mkdirSync(photosDir, { recursive: true });
if (!fs.existsSync(logosDir)) fs.mkdirSync(logosDir, { recursive: true });

function makePhotoSvg(filename, label, dimensions = "800x600") {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600" fill="none">
    <rect width="800" height="600" fill="#F4F4F3"/>
    <rect x="20" y="20" width="760" height="560" rx="20" stroke="#DCDCDA" stroke-width="2" stroke-dasharray="8 8" fill="#FAFAFA"/>
    <circle cx="400" cy="240" r="44" fill="#EAEAE7"/>
    <path d="M382 250 L400 228 L418 250 H382 Z" fill="#A8A8A4"/>
    <circle cx="414" cy="226" r="4" fill="#A8A8A4"/>
    <text x="400" y="320" text-anchor="middle" font-family="system-ui, sans-serif" font-size="22" font-weight="600" fill="#171717">${label}</text>
    <text x="400" y="355" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" fill="#737373">Self-serve placeholder (${dimensions})</text>
    <rect x="230" y="390" width="340" height="40" rx="20" fill="#EAEAE7"/>
    <text x="400" y="415" text-anchor="middle" font-family="monospace" font-size="13" font-weight="500" fill="#262626">Drop into: public/photos/${filename}</text>
  </svg>`;
}

function makeLogoSvg(filename, companyName) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="90" viewBox="0 0 220 90" fill="none">
    <rect width="220" height="90" rx="14" fill="#F7F7F6"/>
    <rect x="6" y="6" width="208" height="78" rx="10" stroke="#E2E2DF" stroke-width="1.5" stroke-dasharray="5 5"/>
    <text x="110" y="46" text-anchor="middle" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#171717">${companyName}</text>
    <text x="110" y="64" text-anchor="middle" font-family="monospace" font-size="10" fill="#737373">public/logos/${filename}</text>
  </svg>`;
}

const photos = [
  { file: 'about-photo-1.jpg', label: 'About Photo 1 (Workspace / Portrait)', dim: '800x600' },
  { file: 'about-photo-2.jpg', label: 'About Photo 2 (Life / Snapshot)', dim: '800x600' },
  { file: 'work-1.jpg', label: 'Work 1 (Screenshot / Preview)', dim: '800x500' },
  { file: 'work-2.jpg', label: 'Work 2 (Screenshot / Preview)', dim: '800x500' },
  { file: 'work-3.jpg', label: 'Work 3 (Screenshot / Preview)', dim: '800x500' },
  { file: 'listening-cover.jpg', label: 'Listening Artwork', dim: '400x400' },
  { file: 'reading-cover.jpg', label: 'Book Cover', dim: '400x600' },
  { file: 'avatar.jpg', label: 'Profile Avatar', dim: '200x200' },
];

photos.forEach(p => {
  const filePath = path.join(photosDir, p.file);
  const svgPath = filePath.replace(/\.jpg$/, '.svg');
  const svgContent = makePhotoSvg(p.file, p.label, p.dim);
  fs.writeFileSync(svgPath, svgContent);
  fs.writeFileSync(filePath, svgContent);
});

const logos = [
  { file: 'company-1.svg', name: '[Company 1]' },
  { file: 'company-2.svg', name: '[Company 2]' },
  { file: 'company-3.svg', name: '[Company 3]' },
  { file: 'company-4.svg', name: '[Company 4]' },
];

logos.forEach(l => {
  const filePath = path.join(logosDir, l.file);
  fs.writeFileSync(filePath, makeLogoSvg(l.file, l.name));
});

console.log('Successfully generated placeholder assets in public/photos and public/logos!');
