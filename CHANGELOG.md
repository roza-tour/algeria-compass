# CHANGELOG — Technical SEO / Indexing Fix Pass (2026-06-15)

Static Astro site → built to `dist/` → staged into repo root via `npm run deploy` →
served from cPanel/Apache (LiteSpeed) docroot. Canonical host: **https://algeriacompass.com** (HTTPS, non-www).

## ⚠️ Deploy / verification constraint
This agent has **no SSH and cannot deploy or curl the live site** (deploy is owner-driven:
server `git pull` + LiteSpeed flush). All Appendix-A/B VERIFY commands target the live host,
so they are run **locally** here (built `dist/` + `astro preview` + curl localhost) and the
live re-test is handed off in `AUDIT-RESULT.md` (Task 9). PASS/FAIL below = local verification.

---

## STEP 0 — RECON (read-only, no edits)

- **`astro.config.mjs`** — ALREADY correct: `site: 'https://algeriacompass.com'`,
  `trailingSlash: 'always'`, `build.format: 'directory'`. No change needed for Task 1 step 1.
- **`build.format`** = `directory` → routes emit `<route>/index.html`; the 404 emits `404.html`
  (Astro special-case), so `ErrorDocument 404 /404.html` is correct (NOT `/404/index.html`).
- **Sitemap** — hand-built endpoint `src/pages/sitemap.xml.ts` (not @astrojs/sitemap).
  Emits a `statics[]` list + loops over tours, regions, hubs, clusters, and content collections.
- **Canonical Layout** = `src/layouts/BaseLayout.astro` → `src/components/{Header,Footer,Seo,SchemaGraph}.astro`.
- **Canonical tag** — `Seo.astro` builds `new URL(Astro.url.pathname, site)`; under
  `trailingSlash:'always'` this is already self-referential with a trailing slash (Task 7 ✓ pre-existing).
- **Provinces index + Contact** — already migrated to `BaseLayout` in source AND in staged root HTML
  (logo-emblem-gold.webp header, canonical 12-item nav, real socials, /assets/img/). The task brief
  was written against an older repo state (Task 5 mostly pre-satisfied; see Task 5 note).
- **`logo-full.png`** appears 2×/page sitewide = shared `Footer.astro` (`.f-logo`) + `SchemaGraph`
  org `logo`. Not the old template; cannot be 0 without a sitewide brand change (forbidden by rules).
- **Editorial policy pages** referenced in sitewide JSON-LD all exist as content collection entries:
  `editorial-policy.md`, `corrections-policy.md`, `transparency-policy.md` (Task 2-critical ✓).
- **Tooling** — `sharp` already installed (Astro dep) → WebP conversion needs no new npm dep.

---

## CHANGES BY FILE

| File | Change | Task |
|------|--------|------|
| `public/.htaccess`, `.htaccess` (root/staged) | Replaced the HTTPS-only redirect with a single-hop **HTTPS + non-www** canonical 301; added **trailing-slash** enforcement (skips files/extensions); added legacy `/images/* → /assets/img/*` 301 + a commented slot for GSC-specific legacy slugs; `Options -MultiViews`; kept existing compression/caching/security/CSP and `ErrorDocument 404 /404.html` (correct for `build.format=directory`). | 1, 6 |
| `src/pages/sitemap.xml.ts` | Removed `search/`, `sitemap/`, `knowledge/`, `knowledge/provinces/`, `knowledge/graph/`, `clusters/` from `statics`; dropped the `hubs` and `clusters` loops + their now-unused imports. Sitemap now emits only canonical, 200, indexable, trailing-slash URLs (109). | 3 |
| `src/components/Seo.astro` | Added `noindex?: boolean` prop → emits `<meta name="robots" content="noindex,follow">` when set. | 4 |
| `src/layouts/BaseLayout.astro` | Added `noindex` prop, forwarded to `Seo`. | 4 |
| `src/pages/clusters/index.astro`, `clusters/[cluster].astro`, `knowledge/index.astro`, `knowledge/[hub].astro`, `knowledge/graph.astro`, `knowledge/provinces.astro`, `search.astro`, `sitemap.astro`, `404.astro` | Added `noindex` to the `<BaseLayout>` call (thin/scaffolding meta pages — keep `follow` so equity still flows). | 4 |
| `scripts/gen-webp.mjs` | Extended to also generate display-sized `.sm.webp` (1280w, q74) for every top-level hero/content JPG and every `tours/*.jpg` hero. | 8 |
| `src/components/Hero.astro` | `<img>` → `<picture>` with a `.sm.webp` `<source>` + JPG fallback; keeps alt/width/height/`fetchpriority`. `.hero img` is a descendant rule so layout is unchanged. | 8 |
| `src/pages/tours/[slug].astro` | Tour hero `<img>` → `<picture>` + `.sm.webp` source/JPG fallback (LCP image). | 8 |
| `public/assets/img/**.sm.webp` | Generated WebP assets (530 verified). Hero `algiers-white-city-aerial`: 228 KB JPG → **72 KB** WebP. | 8 |
| `astro.config.mjs` | **No change** — already `site:https://algeriacompass.com`, `trailingSlash:'always'`, `build.format:'directory'`. | 1 |

---

## TASK VERIFICATION (local — see AUDIT-RESULT.md for live re-test handoff)

- **Task 1 — Canonicalization.** Config already correct. `.htaccess` now does HTTPS+non-www in one hop + trailing slash. Build clean (148 pages). **PASS (local).** Live 301-chain curls require deploy → handed to Sam.
- **Task 2 — Internal links.** 145 unique internal route links across `dist/`; **all** end in a trailing slash and **all** resolve to a built `index.html` (zero 404 targets). The 3 schema-referenced editorial pages (`/editorial/{editorial-policy,corrections-policy,transparency-policy}/`) exist. **PASS.**
- **Task 3 — Sitemap hygiene.** 109 URLs; **zero** excluded scaffolding URLs present; every `<loc>` maps to a built file. **PASS.**
- **Task 4 — noindex thin pages.** `clusters`, `knowledge` (+graph/provinces), `search`, `sitemap`, `404` all emit `noindex,follow`; indexable pages (home/tours/provinces/contact/about) do **not**. **PASS.**
- **Task 5 — Template unification.** `provinces/index` + `contact` already render the unified `BaseLayout` (emblem header, canonical 12-item nav, real socials `instagram.com/algeria_compass/` + `facebook.com/profile.php?id=61590718167514`, `/assets/img/` paths). Old-template markers gone. **PASS (with caveat).** `logo-full.png` count = **2** (not 0) because it is used by the shared `Footer` (`.f-logo`) + the sitewide `SchemaGraph` org `logo` — **on every page**, not the old template. Reaching 0 would require changing the shared footer/schema brand asset sitewide, which the hard rules forbid (don't change Footer / brand tokens). Flagged for owner decision.
- **Task 6 — Legacy 301s.** `/images/* → /assets/img/*` 301 added; trailing-slash + host rules absorb most "Page with redirect"/old-URL cases. A documented slot in `.htaccess` is ready for the **exact** GSC "Not found (404)" / "Page with redirect" slugs (the old SPA had no enumerable sub-URLs, so specific renamed-slug 301s need the GSC export). **PASS (framework in place; specific map pending GSC data).**
- **Task 7 — Self-referential canonicals.** Sampled `/`, `/tours/`, `/provinces/`, `/contact/`, `/tours/djanet-sahara-safari/` — each canonical equals its own final https + non-www + trailing-slash URL. **PASS.**
- **Task 8 — Image optimization.** Heroes now served as WebP via `<picture>` (+ JPG fallback). Hero 228 KB → 72 KB (−68%, under the ~110 KB target). Homepage hero was already WebP + preload. Alt text preserved; `fetchpriority="high"` kept; no CLS (width/height intact). **PASS (local).** Live PageSpeed/LCP re-test handed to Sam.
- **Task 9 — Build + report.** `npm run deploy` ran (148 pages built + staged to repo root). `AUDIT-RESULT.md` written. **PASS.**
</content>
</invoke>
