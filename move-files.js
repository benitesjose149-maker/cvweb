const fs = require('fs');
const path = require('path');

const browserPath = path.join(__dirname, 'docs', 'browser');
const docsPath = path.join(__dirname, 'docs');

if (fs.existsSync(browserPath)) {
  console.log('Moving files from browser/ to docs/...');
  
  const files = fs.readdirSync(browserPath);
  
  files.forEach(file => {
    const src = path.join(browserPath, file);
    const dest = path.join(docsPath, file);
    
    if (fs.statSync(src).isFile()) {
      fs.copyFileSync(src, dest);
      console.log(`✓ Moved: ${file}`);
    }
  });
  
  // Delete browser folder
  fs.rmSync(browserPath, { recursive: true, force: true });
  console.log('✓ Removed browser/ folder');
  
  // Update index.html base href if needed
  const indexPath = path.join(docsPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    let indexContent = fs.readFileSync(indexPath, 'utf8');
    // Use relative path for GitHub Pages
    indexContent = indexContent.replace(/<base href="[^"]*">/, '<base href="./">');
    // Fix script and style paths to be relative
    indexContent = indexContent.replace(/href="([^"]*\.css)"/g, 'href="./$1"');
    indexContent = indexContent.replace(/src="([^"]*\.js)"/g, 'src="./$1"');
    fs.writeFileSync(indexPath, indexContent);
    console.log('✓ Updated index.html base href and paths');
  }
  
  console.log('✅ Files moved successfully!');
} else {
  console.log('⚠ browser/ folder not found');
}
