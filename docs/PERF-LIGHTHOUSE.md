# Lighthouse / performance pass — what was implemented

Addressing the audit. **Caveat:** these are code/`.htaccess` fixes verified against
the local production build. True Lighthouse scores also depend on the **server**
(Brotli, HTTP/2, TTFB, cache headers) which LiteSpeed/cPanel controls — the
`.htaccess` configures them but the host must honour them. Re-run Lighthouse
after the server pulls + flushes.

## Performance

| Issue | Fix | Status |
|-------|-----|--------|
| Render-blocking CSS (`about.css`, `index.css`) | `build.inlineStylesheets: 'always'` in `astro.config.mjs` — all CSS inlined into `<head>`, zero blocking stylesheet requests | ✅ |
| Render-blocking Google Fonts | `preload` + `media="print" onload="this.media='all'"` + `<noscript>` fallback (BaseLayout) | ✅ |
| LCP image lazy-loaded | First StatesStrip card + first featured TourCard now `loading="eager" fetchpriority="high"` | ✅ |
| Images not next-gen (WebP) | 224 display-sized WebP generated (`scripts/gen-webp.mjs`) for the homepage contexts, served via `<picture>`: StatesStrip 460w, marquee 360w, tour thumbs 480w, logo 130w. Logo **119 KB → 11 KB**; StatesStrip hero **231 KB → 71 KB**; marquee client **~100 KB → 13 KB** | ✅ (homepage) |
| Images oversized for display | WebP variants sized to the display box (e.g. 736px → 460px) | ✅ (homepage) |
| GTM/GA 63 KB unused JS + long tasks + main-thread | `gtag.js` download **deferred** until first interaction or `requestIdleCallback` (consent + config still queue early) | ✅ |
| DOM size 1,166 | Marquee trimmed 36→24 photos; `content-visibility:auto` on the marquee section | ⚠️ partial (rich homepage; `<picture>` adds nodes) |
| Forced reflow | Old slider JS (read layout) removed — Travellers is now a pure-CSS marquee; GA deferred | ✅ |
| Cache / compression | `.htaccess`: Brotli, immutable `Cache-Control` for hashed assets + images | ✅ |

## Accessibility

| Issue | Fix |
|-------|-----|
| Contrast (eyebrow, WhatsApp) | Fixed in L3 + this pass: eyebrows use AA gold `#7E5E1A`; WhatsApp buttons use dark text on green; footer headings lightened |
| `<ul role="navigation">` | Removed `role` from the `<ul>`; the wrapping `<nav>` carries `aria-label="Primary"` |
| Heading order (footer `<h4>`) | Footer column headings `<h4>` → `<h2>` |
| Duplicate WhatsApp links / labels | Each WhatsApp link given a unique `aria-label` (nav / CTA / mobile / sticky / footer) |
| Redundant pastry `alt` | Homepage sweets-strip thumbnails set to `alt=""` (decorative; name shown as caption) |

## Best Practices — security headers (`.htaccess`)

`Strict-Transport-Security` (HSTS, preload), `X-Content-Type-Options`,
`X-Frame-Options: SAMEORIGIN`, `Referrer-Policy`, `Cross-Origin-Opener-Policy`,
`Permissions-Policy`, and a `Content-Security-Policy` in enforcement mode
(allows our inline CSS/JS + Google Analytics + Google Fonts + the OSM/Google map
iframes).

## Not done this pass (flagged — larger follow-ups)

- **Multi-width responsive `srcset`** and **WebP for *all* images** (detail-page
  heroes, the full 641-photo client library): this pass covered the homepage
  contexts Lighthouse audits. Full coverage needs an image pipeline
  (`astro:assets`) migration off the current string/`fs`-based image references.
- **Explicit `<link rel="preload" as="image">`** for the LCP image: used
  `eager`+`fetchpriority="high"` on the in-HTML `<img>` instead (effective; a
  head-level preload would need a per-page head slot).
- **DOM < 800** is not guaranteed on the homepage (it is image-rich by design).
- **100/100 mobile Performance** is partly server-bound (TTFB/compression/HTTP-2);
  confirm after the server applies the new `.htaccess`.
