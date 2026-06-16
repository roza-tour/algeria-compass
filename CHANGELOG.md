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

---

# MASTER FIX (phased) + deep bug hunt — 2026-06-16

**Deploy constraint (unchanged):** this agent can edit + `npm run build` + `npm run deploy` (stage to
repo root) + commit + push, but **cannot** `git pull` on the server or flush LiteSpeed. Live VERIFY
PASSES only for what is already deployed; new-change live VERIFY is **PENDING owner deploy** and is
proven here against the freshly built `dist/` + staged root. The live host is also still stale on the
prior cluster-removal commit (`/clusters/` still 200, not yet 301) — owner deploy will resolve both.

## PHASE 0 — Recon & baseline (no edits)

- **Header / nav definitions: exactly ONE.** `src/components/Header.astro` holds a single `nav[]`
  array of **12 items** (Home, Tours, Luxury, Destinations, States, Regions, Culture, e-Visa, Blog,
  FAQ, About, Contact). It is rendered by the single layout `src/layouts/BaseLayout.astro`, which is
  imported by **every** `src/pages/**` route (verified: 43/43 page files import `BaseLayout`; no page
  defines its own header). No duplicate/older header partials exist.
- **Footer: ONE** (`src/components/Footer.astro`) — 5 columns (Explore/Knowledge/Plan/Editorial + brand).
- **Sitemap:** hand-built `src/pages/sitemap.xml.ts` (not @astrojs/sitemap). Emits `statics[]` +
  loops over tours, regions (`REGIONS`), and content collections (province, destination, experience,
  article, question, editorial, team, reviewer). `/clusters/` and `/knowledge/*` excluded by omission.
- **Canonical / config:** `astro.config.mjs` already `site: https://algeriacompass.com`,
  `trailingSlash:'always'`, `build.format:'directory'`. Canonical tag in `Seo.astro` is
  self-referential. robots.txt already has `Disallow: /search` + both Sitemap lines.
- **Build baseline:** `npm run build` → **131 pages, clean (no warnings/errors)**.
- **Route inventory (130 dir routes + `404.html`):** `/`, blog (8 articles), destinations (10),
  editorial (10 policies), experiences (4), knowledge (16 hubs incl. graph/provinces), provinces (15),
  questions (7), regions (8 + index), tours (20 + index), team (1+index), reviewers (1+index),
  + standalone (about, contact, culture, history, food, sweets, unesco, luxury, evisa, visa-support,
  travel-guides, discover, booking-terms, thank-you, search, sitemap). Root files: `.htaccess`,
  `404.html`, `contact.php`, `robots.txt`, `sitemap.xml`, `sitemap-images.xml`, `search-index.json`,
  `reviews-approved.json`, `favicon.svg`, `index.html`.

## PHASE 1 — Navigation & template unification

**The reported "Regions missing on /luxury/ + /tours/<detail>" bug does NOT reproduce.** The nav is
already unified (one Header → one nav array → one BaseLayout, imported everywhere). Live extraction of
the actual nav list on `/about/`, `/luxury/`, and `/tours/algeria-beyond-expectations/` shows the
**same 12 items in the same order, with `/regions/` present on all three**.

Root cause of the false report: the supplied VERIFY counts an **absolute** href
(`href="https://algeriacompass.com/regions/"`) but the site uses **relative** hrefs (`href="/regions/"`),
so the canned command returns 0 on *every* page (not 1) — a measurement artifact, not a nav defect.
(Same false-positive class was already noted for the `/contact/` nav check in AUDIT-RESULT Task A.)

- 1.1–1.3 No consolidation needed; no duplicate headers to retire. **No edits.**
- 1.4 VERIFY (corrected to the real relative href) — **PASS**:
  `/ /tours/ /tours/<detail>/ /luxury/ /destinations/ /provinces/ /about/ /contact/ /blog/ /evisa/`
  each render the identical 12-item nav incl. `/regions/`. The owner's literal absolute-href command
  returns `regions=0` everywhere (expected, relative hrefs) — do not "fix" by hardcoding absolute URLs.

## PHASE 2 — Remove dead/duplicate pages

- **`/clusters/`** — already removed in the prior session (16 per-URL 301s + catch-all `^clusters(/.*)?$ → /`
  in `.htaccess`; route source deleted; 6 in-body links repointed; sitemap clean). Re-audit this session:
  `grep -rE '/clusters/' src/` → only 2 doc-comments in `sitemap.xml.ts`; built output → none. Confirmed.
- **2.4 Dead language routes** (`.htaccess`) — added block 2c:
  `RewriteRule ^(de|es|fr)(/.*)?$ / [R=301,L]`. These old-SPA paths return 404 live (GSC "Not found");
  no internal/built references exist (grep clean). 301 → home so GSC drops them. **EDIT.**
- 2.5 VERIFY — source/built: no dangling `/clusters/` or `/de|es|fr/` refs. Live: cluster URLs still
  `200` and `/de|es|fr/` still `404` because **live is behind HEAD + LiteSpeed caches rewrite rules**
  (see Phase 4). **PENDING owner deploy + Flush All.**

## PHASE 3 — Indexing hygiene

- 3.1 noindex by prefix — **confirmed** all scaffolding source pages carry `noindex` (knowledge
  index + `[hub]` + graph + provinces, search, sitemap, 404). `/clusters/` deleted (moot).
- 3.1+ **`/thank-you/`** — thin post-submit confirmation page was `200` + indexable (already out of
  the sitemap). Added `noindex` to its `<BaseLayout>` — de-index thin page per hard rules. **EDIT.**
- 3.2 robots.txt — already `Disallow: /search` + `Allow: /` + both Sitemap lines. **No change.**
- 3.3 Sitemap completeness — **already complete**: `/team/editorial-team/` and `/reviewers/editorial-review/`
  are emitted (team+reviewer collections looped). Diff of 130 built routes vs 109 sitemap locs = exactly
  the 18 `/knowledge/*` + `/search/` + `/sitemap/` + `/thank-you/` (all intentionally excluded). No
  indexable page is missing. **No change.**
- 3.4 Canonicals — `Seo.astro` builds `new URL(pathname, site)` under `trailingSlash:'always'` →
  self-referential on every page. **No change.**
- 3.5 Legacy 301s — no GSC 404/redirect export provided this session → **flagged for owner** (the
  `.htaccess` slot remains; `/de|es|fr/` already handled in Phase 2).
- 3.6 VERIFY — robots/sitemap correct in built output; scaffolding noindex confirmed in source.
  Live re-test PENDING deploy.

## PHASE 4 — Canonicalization & redirects

Source `.htaccess` is **already correct**: block 1 forces HTTPS+non-www in a single hop
(`RewriteCond %{HTTPS} off [OR]` / host `^(?:www\.)?(.+)$` → `https://%1%{REQUEST_URI}`); `/images/* →
/assets/img/*`; trailing-slash rule; `ErrorDocument 404 /404.html`. The committed root `.htaccess`
(HEAD) is byte-identical to `public/.htaccess` for block 1.

**Confirmed live defect (not a cache artifact) → FIXED.** During Phase 7 the server pulled the
cluster-removal commit, so `/clusters/*` now 301s correctly live — proving the current `.htaccess` is
deployed and applied. Yet `http://www/tours` STILL chained 3 hops (first hop kept `www`). Root cause:
in the original block 1 the **capturing** condition (`^(?:www\.)?(.+)$`) sat *after* the `[OR]` group,
and on this LiteSpeed server the `%1` backreference was unreliable there (www not stripped on the http
path) → http→https-www→non-www = a 2-hop host chain GSC flags as "Page with redirect".

**FIX (`.htaccess` block 1):** moved the capturing condition **first** so it is always evaluated and
`%1` is deterministically the bare (non-www) host; the `[OR]` group now only gates *whether* to redirect.
Result (expected, post-deploy): host normalization is a single hop; a wrong-host+no-slash URL is
host-hop + slash-hop = 2 hops (two distinct normalizations, not a redundant host chain). **EDIT.**
VERIFY PENDING owner deploy + LiteSpeed Flush All. Other Phase 4 items already pass live:
`http`/`www`/`noslash` each 301, `/images/*`→`/assets/img/*`, real 404.

## PHASE 5 — Content quality & polish

- 5.1 **`Seo.astro`** — OG/Twitter `image:alt` default was `${fullTitle} — Algeria Compass`, but
  `fullTitle` already ends in `| Algeria Compass` → duplicated brand. Changed default to `fullTitle`
  (brand once). Verified built `og:image:alt="About Algeria Compass"` (was `… — Algeria Compass`). **EDIT.**
- 5.2 **`/discover/` vs `/about/`** — both opened with near-identical "licensed Algerian tour operator
  devoted entirely to one country… 58 states, seven UNESCO…". Reframed `/discover/` lead as a **country
  guide** ("Algeria, mapped for travellers") cross-linking to `/about/`; added reciprocal `/discover/`
  link from `/about/`. **EDITS.**
- 5.2 **`/blog/` vs `/travel-guides/`** — leaned `/blog/` **editorial** (title "The Algeria Journal —
  Stories & Field Notes", editorial hero/description) and `/travel-guides/` **reference**; cross-linked
  both ways. Also fixed `travel-guides.astro` in-page duplicate (QuickAnswer text was repeated verbatim
  in the prose `<p>`). **EDITS.**
- 5.3 **"worlds" count** — two real taxonomies: **8 regions** (footer "Regions — 8 worlds", regions.ts)
  vs **civilisations** (culture page). `culture.astro` "Six worlds, one country" collided on the word
  "worlds"; changed to **"Six civilisations, one country"** (accurate to its 6 cards; eyebrow already
  "The civilisations"). NOTE: a *separate* civ-count mismatch remains — culture page lists 6 vs
  `CivilizationsExplorer` "Eight worlds" (8) — logged in BUG-HUNT.md for an editorial decision. **EDIT.**
- 5.4 De-orphan — **already satisfied**: all of `/experiences/ /travel-guides/ /discover/ /history/
  /food/ /sweets/ /unesco/` are in the global Footer AND have ≥1 in-body related link (discover→experiences,
  culture→history+food, history→unesco, food→sweets via `SweetsSection`, blog→travel-guides+discover).
  **No change.**
- 5.5 VERIFY — `npm run build` clean (131 pages, no warnings); exactly one `<h1>` on every edited page;
  alt double-brand gone. **PASS.**
