import { defineConfig } from 'astro/config';

// Static build for Namecheap cPanel shared hosting.
// `npm run build` -> dist/ -> upload contents into public_html/
export default defineConfig({
  site: 'https://algeriacompass.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  output: 'static',
  compressHTML: true
});
