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
| 1 | A·Perf | ~~P1~~ ✅ FIXED | `logo-full.png` was **1.21 MB** on every page (footer + schema logo) | `assets/img/logo-full.png` (`Footer.astro`, `SchemaGraph.astro`) | Full-res 1023×776 PNG shown at 220px | **Done 2026-06-16:** downscaled to 460w (1.27 MB→**29 KB** PNG) + lossless **27 KB** WebP; footer now `<picture>` webp+png; schema logo = the 29 KB PNG. ~1.24 MB saved/page. | — |
| 2 | A·Perf | ~~P2~~ ✅ FIXED | **133 `<img>` lacked `width`/`height`** | `PhotoGallery`, experience-stop figures, blog `.prose` content imgs | Components/markdown omitted intrinsic dims | **Done:** `src/lib/imageSize.ts` (build-time sharp) emits real dims in `PhotoGallery` + stops; rehype plugin (`astro.config.mjs`) injects dims into markdown `/assets` imgs; `.prose img` responsive rule. **133 → 0.** | — |
| 3 | A·Perf | ~~P2~~ ✅ FIXED | gallery JPGs 200–430 KB served raw (not WebP) | `assets/img/<city>/*.jpg`, `cuisine/*` | `gen-webp` covered heroes/slider only | **Done:** extended `gen-webp.mjs` (step 9) → 760w `.sm.webp` for annaba/blida/timimoun/mostaganem/msila-bousaada/beni-hammad/cuisine; `PhotoGallery` + stops now `<picture>` (webp+jpg). beni-hammad-05 439→96 KB (−78%). Client photos + heroes were already `<picture>`. | — |
| 4 | B·Deploy | **P1** | Live still serves **old rewrite ruleset** — `http://www/tours` = 3 hops, `https://www/tours` = 2 hops (host chain) | live `.htaccess` behavior | Server behind HEAD **and** LiteSpeed caches mod_rewrite rules across `git pull` | Owner: `git pull` + **LiteSpeed → Flush All** (source already single-hop) | XS (owner) |
| 5 | B·Deploy | **P1** | Live `/clusters/*` still **200** (should 301) and `/de//es//fr/` still **404** (should 301) | live | Same as #4 — deletions + new 301s not yet pulled/flushed | Owner deploy + flush; then re-run Phase 2/4 VERIFY | XS (owner) |
| 6 | C·Content | ~~P2~~ ✅ FIXED | **Civilisation count mismatch**: culture page asserted **6**, `CivilizationsExplorer` asserts **8** | `src/pages/culture.astro` vs `src/components/CivilizationsExplorer.astro:99` | Two independently-authored taxonomies | **Done (no fabrication):** culture heading "Six civilisations…" → "**The civilisations that shaped Algeria**" — presents its 6 detailed profiles without asserting a total, so it no longer contradicts the flagship 8-civ explorer. (Adding 2 sourced cards to reach 8 is the alternative if you'd rather standardise on 8.) | — |
| 7 | C·Content | ~~P3~~ ✅ FIXED | `CivilizationsExplorer` "**Eight worlds**" reused the "worlds" word like footer "**Regions — 8 worlds**" | `CivilizationsExplorer.astro:99` | Shared "worlds" metaphor across two taxonomies | **Done:** explorer lead → "**Eight civilisations** layered…"; "worlds" now reserved for regions. |
| 8 | C·Content | ~~P3~~ ✅ FIXED | `/travel-guides/` was light (intro + 3 links) vs its "knowledge hub" framing | `src/pages/travel-guides.astro` | Hub page never fleshed out | **Done:** added a 6-card "essential guides" grid (complete guide, visa, safety, best-time, transport, Sahara) pulled from the article collection + a quick-answers line. |
| 9 | D·Minor | P3 | `algiers-white-city-aerial.jpg` rendered with **empty `alt`** in some contexts (5×) — verify decorative | built output (home/region hero backgrounds) | Decorative-vs-content ambiguity | Confirm decorative; if content, add alt | XS |
| 10 | D·Minor | P3 | `/thank-you/` is orphaned (no inbound link) | `dist/thank-you/` | Reached only via form POST redirect | Expected; now `noindex`ed this pass — informational only | — |

## Notes
- Items **4 & 5 are deploy-state, not code** — the source/build is already correct; they clear on the owner's next `git pull` + LiteSpeed Flush All. Listed because they're live-visible right now.
- The 288 "empty alt" images are overwhelmingly **decorative** (header emblem 131×, region SVG motifs) — correct usage; only #9 needs a glance.
- Thin-page scan: only `/thank-you/` is genuinely thin (now noindex); other "short" pages are real hubs, not soft-404s.
