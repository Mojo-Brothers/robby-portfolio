import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');

// 1. Ensure 200.html exists for Cloudflare Pages SPA fallback
const indexPath = path.join(distDir, 'index.html');
const fallbackPath = path.join(distDir, '200.html');
if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, fallbackPath);
  console.log('Created dist/200.html for native Cloudflare SPA routing.');
}

// 2. Remove _redirects if it exists in dist to prevent Cloudflare Error 100324 (infinite loop)
const redirectsPath = path.join(distDir, '_redirects');
if (fs.existsSync(redirectsPath)) {
  fs.unlinkSync(redirectsPath);
  console.log('Removed dist/_redirects to prevent infinite loop code 100324.');
}
