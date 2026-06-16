# BUG-HUNT.md — deep local + live audit (2026-06-16)

Triage only — **no fixes applied here** (per Phase 6). Sam to action in a later pass.
Scanned: built `dist/` (= what deploys), source, and live `https://algeriacompass.com`.
Severity: **P0** break · **P1** high (perf/SEO impact) · **P2** medium · **P3** low/polish.

## What's already CLEAN (no action)
- Internal links: 129 unique, **100% trailing-slash, 0 broken/404 targets** (built).
- Metadata: **0 duplicate or missing** `<title>` / `meta description` sitewide.
- Canonicals: **self-referential on every page**, 0 mismatches.
- JSON-LD: **263 blocks, 0 parse errors**; TouristTrip has name+Offer(price,priceCurrency); questions = QAPage; tours = FAQPage.
- Headings: every page has **exactly one `<h1>`**, first heading is always h1.
- Fragments: 56 pages use `#anchors`, **0 missing targets**.
- Mixed content: **none** (no `http://` assets). Broken `<img>` files: **none**.
- Contact form: `POST /contact.php` + WhatsApp (`data-wa`) + email (`data-email`) paths wired; all fields present; `contact.php` deployed.
- Nav/footer: single `Header`/`Footer` component → identical on every page type (verified live).

---

## Findings

| # | Batch | Sev | Issue (one line) | File / URL | Root cause | Suggested fix | Effort |
|---|-------|-----|------------------|------------|------------|---------------|--------|
| 1 | A·Perf | **P1** | `logo-full.png` is **1.21 MB**, served on **every page** (footer) + as schema org logo; no WebP | `assets/img/logo-full.png` (via `Footer.astro`, `SchemaGraph.astro`) | Full-res PNG never optimized; displayed at 220×167 | Export a resized WebP (~440px wide) + keep small PNG fallback; ~1.2 MB → <30 KB | S |
| 2 | A·Perf | **P2** | **133 `<img>` lack `width`/`height`** → layout shift (CLS) | gallery/snapshot/card imgs in province, destination, experience, region, tours templates + components (`PhotoGallery`, `Card`, snapshots) | Components omit intrinsic dims | Add `width`/`height` (or aspect-ratio CSS) to the shared image components | M |
| 3 | A·Perf | **P2** | **18 review/client photos 200–310 KB** + ~113 raster files >200 KB served as JPG/PNG, not WebP | `assets/img/clients/*.jpg`, `assets/img/<city>/*.jpg`, several heroes (`beni-hammad-05` 428 KB, `tlemcen-el-ourit-falls` 294 KB, `constantine-bridge-waterfall` 284 KB) | `gen-webp` covered heroes only; galleries/avatars not converted | Extend `scripts/gen-webp.mjs` to gallery + client dirs; use `<picture>`/`srcset` | M |
| 4 | B·Deploy | **P1** | Live still serves **old rewrite ruleset** — `http://www/tours` = 3 hops, `https://www/tours` = 2 hops (host chain) | live `.htaccess` behavior | Server behind HEAD **and** LiteSpeed caches mod_rewrite rules across `git pull` | Owner: `git pull` + **LiteSpeed → Flush All** (source already single-hop) | XS (owner) |
| 5 | B·Deploy | **P1** | Live `/clusters/*` still **200** (should 301) and `/de//es//fr/` still **404** (should 301) | live | Same as #4 — deletions + new 301s not yet pulled/flushed | Owner deploy + flush; then re-run Phase 2/4 VERIFY | XS (owner) |
| 6 | C·Content | **P2** | **Civilisation count mismatch**: culture page lists **6** ("Six civilisations") but `CivilizationsExplorer` says **"Eight worlds"** (8: +Mozabite, +modern) | `src/pages/culture.astro` vs `src/components/CivilizationsExplorer.astro:99` | Two independently-authored taxonomies | Editorial decision: pick canonical civ list/count and align both (and any tour copy) | S |
| 7 | C·Content | P3 | `CivilizationsExplorer` "**Eight worlds**" (civilisations) reuses the same "worlds" word as footer "**Regions — 8 worlds**" (both =8) — potential reader confusion | `CivilizationsExplorer.astro:99`, `Footer.astro:31` | Shared "worlds" metaphor across two taxonomies | Consider "Eight civilisations" vs "Eight regions/worlds" wording split | XS |
| 8 | C·Content | P3 | `/travel-guides/` is light on body content (intro + 3 links) vs its "knowledge hub" framing | `src/pages/travel-guides.astro` | Hub page never fleshed out | Add a short guide index / cards to the key planning articles | S |
| 9 | D·Minor | P3 | `algiers-white-city-aerial.jpg` rendered with **empty `alt`** in some contexts (5×) — verify decorative | built output (home/region hero backgrounds) | Decorative-vs-content ambiguity | Confirm decorative; if content, add alt | XS |
| 10 | D·Minor | P3 | `/thank-you/` is orphaned (no inbound link) | `dist/thank-you/` | Reached only via form POST redirect | Expected; now `noindex`ed this pass — informational only | — |

## Notes
- Items **4 & 5 are deploy-state, not code** — the source/build is already correct; they clear on the owner's next `git pull` + LiteSpeed Flush All. Listed because they're live-visible right now.
- The 288 "empty alt" images are overwhelmingly **decorative** (header emblem 131×, region SVG motifs) — correct usage; only #9 needs a glance.
- Thin-page scan: only `/thank-you/` is genuinely thin (now noindex); other "short" pages are real hubs, not soft-404s.
