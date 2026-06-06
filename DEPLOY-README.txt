ALGERIA COMPASS — UNIFIED DEPLOY PACKAGE
================================================================
File: algeriacompass-UNIFIED-DEPLOY.zip   (~122 MB, 1628 files, 113 pages)

ONE complete Astro-built website. Single template/chrome for every page
(homepage, 20 tour pages at /tours/<slug>/, blog, destinations, provinces,
guides, knowledge, editorial, etc.) — one logo/header/footer/palette.
The old 4.67MB monolithic homepage has been retired; the homepage and each
tour are now real Astro pages. Build is self-contained: `npm run build`
emits the full dist/ (all assets live in public/).

This is a COMPLETE, STANDALONE package for a CLEAN install on an EMPTY document
root. It does NOT depend on any file from a previous deployment.

CONTENTS (everything sits DIRECTLY in the docroot — NOT in a subfolder)
  index.html              -> rebranded homepage: 20+ tours, galleries, lightbox
                             (CSS + JS inlined — self-contained)
  .htaccess               -> HTTPS redirect + compression + caching + 404 + index
  404.html                -> branded not-found page
  robots.txt / sitemap.xml-> SEO (sitemap lists all 91 URLs)
  favicon.svg             -> site icon (PNG icons live in assets/img/)
  assets/img/             -> rebrand photos: clients (557), tours (147),
                             thumbs (705), logo-mark + favicons + og-image
  assets/*.css            -> hashed stylesheet for the content pages
  images/                 -> 91 content-site photos (destinations, provinces...)
  discover/               -> "Discover Algeria" hub (the former homepage content)
  about/ blog/ clusters/ contact/ culture/ destinations/ editorial/
  experiences/ food/ history/ knowledge/ provinces/ questions/
  reviewers/ team/ travel-guides/ unesco/   -> 91 content routes (clean URLs)

PAGES: 92 HTML pages total (rebranded "/" + 91 content routes).

DEPLOY (cPanel)
  1. cPanel -> Domains -> find the Document Root for algeriacompass.com.
  2. Open it in File Manager (enable "Show Hidden Files" so .htaccess extracts).
  3. Upload algeriacompass-UNIFIED-DEPLOY.zip there and Extract IN PLACE.
     The docroot must directly contain index.html, assets/, images/ and the
     route folders (blog/, destinations/, ...).
  4. Permissions: folders 755, files 644.
  5. LiteSpeed Web Cache Manager -> Flush All  (important).
  6. Test (cache-busted):  https://algeriacompass.com/?x=1
     - homepage: rebranded hero, tours, "Moments from our trips" gallery strip,
       click a photo -> lightbox
     - header/footer: logo-mark, gold band, same look on every page
     - open /blog/ , /destinations/ , /discover/  -> same brand, real content
     - browser console: no 404s

URLs & SEO
  - All existing content URLs are preserved (trailing-slash clean URLs).
  - "/" now serves the rebranded homepage; the previous landing lives at
    /discover/ (preserved and included in sitemap.xml).
  - Sitemap contains 91 URLs; robots.txt points to it.

NOTES
  - All <img> are loading="lazy" with width/height (no layout shift).
  - Grids use 400px thumbnails; full images load only in the lightbox.
  - Linux/cPanel-safe: the zip uses forward-slash paths (extracts into folders,
    not flat files). Fully self-contained — no prior deployment required.

REBUILD (developers)
  npm install
  npm run build        -> regenerates dist/ (all content pages, re-skinned)
  Then overlay the rebrand homepage + assets/img and repackage. The committed
  source of truth for the chrome is:
    src/layouts/BaseLayout.astro, src/components/Header.astro,
    src/components/Footer.astro, src/styles/global.css
