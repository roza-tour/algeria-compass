import { defineConfig } from 'astro/config';

// Static build for Namecheap cPanel shared hosting.
// `npm run build` -> dist/ -> upload contents into public_html/
export default defineConfig({
  site: 'https://algeriacompass.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    assets: 'assets',
    // Inline ALL component CSS into <head> — removes the render-blocking
    // external stylesheet requests Lighthouse flagged (about.css / index.css).
    inlineStylesheets: 'always'
  },
  output: 'static',
  compressHTML: true
});
