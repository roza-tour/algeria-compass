import { defineConfig } from 'astro/config';
import sharp from 'sharp';
import { join } from 'node:path';

// Rehype plugin: inject real intrinsic width/height (+ lazy/async) into markdown
// content <img> that reference local /assets paths, so in-body images are CLS-safe
// and pass the Lighthouse "explicit width and height" audit. Astro does not process
// absolute public-path images, hence this. Failures are swallowed (skip the image).
function rehypeImageDims() {
  const cache = new Map();
  return async (tree) => {
    const imgs = [];
    (function walk(node) {
      if (node.tagName === 'img' && typeof node.properties?.src === 'string' && node.properties.src.startsWith('/assets') && !node.properties.width) imgs.push(node);
      (node.children || []).forEach(walk);
    })(tree);
    for (const node of imgs) {
      const src = node.properties.src;
      let dim = cache.get(src);
      if (dim === undefined) {
        try { const m = await sharp(join('public', src)).metadata(); dim = (m.width && m.height) ? { w: m.width, h: m.height } : null; }
        catch { dim = null; }
        cache.set(src, dim);
      }
      if (dim) {
        node.properties.width = dim.w;
        node.properties.height = dim.h;
        if (!node.properties.loading) node.properties.loading = 'lazy';
        if (!node.properties.decoding) node.properties.decoding = 'async';
      }
    }
  };
}

// Static build for Namecheap cPanel shared hosting.
// `npm run build` -> dist/ -> upload contents into public_html/
export default defineConfig({
  site: 'https://algeriacompass.com',
  trailingSlash: 'always',
  markdown: { rehypePlugins: [rehypeImageDims] },
  build: {
    format: 'directory',
    assets: 'assets',
    // 'auto': tiny stylesheets stay inline, the big shared one is emitted as a
    // file. With 275 pages, inlining everything meant ~85kb of identical CSS in
    // every HTML document — never cached, since HTML is served with a 1-hour
    // max-age while hashed assets are immutable for a year. One cached request
    // beats re-sending the same bytes on every page of a browsing session.
    inlineStylesheets: 'auto'
  },
  output: 'static',
  compressHTML: true
});
