# Algeria Compass — Complete Technical / SEO / UX / QA Audit
**Date:** 2026-06-16 · **Method:** verified directly from `src/` source **and** a fresh production build (`npm run build`, 131 pages in 13.2 s). No prior report relied upon.

---

## PHASE 1 — SITE INVENTORY

**Stack:** Astro 4.16 static (`output: 'static'`, `format: 'directory'`, `trailingSlash: 'always'`, `compressHTML`, `inlineStylesheets: 'always'`). Zero UI framework, **zero `client:` hydration**, **0 bytes of JS in `dist/assets`** — all behaviour is small `is:inline` scripts. Built output is staged to the repo root (`scripts/stage-dist.mjs`) and served from the cPanel docroot. The root `index.html` **is** the Astro-built `index.astro` (no separate SPA).

### Layouts (1)
- `src/layouts/BaseLayout.astro` — **the only layout. 100% of pages use it** (verified: 0 pages import any other layout).

### Routes (44 page modules → 131 built HTML pages)
Static: `index, about, contact, culture, history, food, sweets, unesco, luxury, evisa, visa-support, booking-terms, travel-guides, thank-you, search, sitemap, 404`
Index+dynamic collections: `tours/{index,[slug]}`, `destinations/{index,[slug]}`, `provinces/{index,[slug]}`, `regions/{index,[slug]}`, `experiences/{index,[slug]}`, `blog/{index,[slug]}`, `questions/{index,[slug]}`, `editorial/{index,[slug]}`, `team/{index,[slug]}`, `reviewers/{index,[slug]}`, `discover/index`
Knowledge (noindex scaffolding): `knowledge/{index,[hub],graph,provinces}` + `knowledge/graph.json.ts`
Endpoints: `sitemap.xml.ts`, `sitemap-images.xml.ts`, `search-index.json.ts`

### Reusable components (55, in `src/components/`)
Chrome: `Header, Footer, Seo, SchemaGraph, Analytics, CookieConsent, StickyContact, Breadcrumbs`. Content/UX: `Hero, Card, TourCard, CtaSection, InquiryForm, Reviews, FaqSection, PhotoGallery, RelatedGrid, Timeline, KeyFacts, QuickAnswer, …` (full list in `src/components/`).

### Layout/component dependency map
- **Every** page → `BaseLayout` → `{Seo, Header, Footer, SchemaGraph, Analytics, CookieConsent}` (+ `StickyContact` when `sticky` prop true).
- `sticky=true`: index, luxury, sweets, regions/{index,[slug]}, blog/[slug], destinations/[slug], experiences/[slug], provinces/[slug]. `tours/[slug]` uses `sticky=false` because it ships its **own** mobile sticky book-bar.
- `InquiryForm`: contact, luxury, tours/[slug], experiences/[slug].
- `CtaSection`: 20 pages. `Breadcrumbs` component: 31 pages.
- `Reviews`: **homepage only**.

---

## PHASE 2 — TEMPLATE CONSISTENCY

| Element | Source | Verdict |
|---|---|---|
| Header | `Header.astro` (single, shared) | ✅ Identical on all 131 pages |
| Footer | `Footer.astro` (single, shared) | ✅ Identical on all pages |
| Navigation | `nav[]` array in `Header.astro` | ✅ One source of truth |
| Social links | `Footer.astro` (IG/FB) + `SchemaGraph` `sameAs` | ✅ Consistent (IG + FB) |
| CTA (WhatsApp/Plan) | `Header`, `StickyContact`, `InquiryForm` all read `config.ts CONTACT` | ✅ Single source |
| Breadcrumbs | **inconsistent implementation** (see below) | ⚠️ |

**Legacy layouts:** none. There is no second/legacy layout anywhere.

**Breadcrumb inconsistency (the one real Phase-2 finding):** three different breadcrumb implementations coexist:
1. `components/Breadcrumbs.astro` (renders nav **+ BreadcrumbList JSON-LD**) — used by 31 pages.
2. Hand-rolled `<nav class="crumbs">` + a **separately** hand-authored `BreadcrumbList` node in the page's `schema` array — `tours/[slug].astro:158` & `:106`.
3. Hand-rolled `<nav class="rg-crumbs">` + hand-authored BreadcrumbList — `regions/[slug].astro:45` & `:24`.

All three produce valid markup + schema, so this is a **maintainability/duplication** issue, not a functional gap. `discover/index` has **no** breadcrumb at all (acceptable for a top-level hub; home correctly has none).
*Files:* `src/components/Breadcrumbs.astro`, `src/pages/tours/[slug].astro`, `src/pages/regions/[slug].astro`.

---

## PHASE 3 — SEO AUDIT (per-route, from built HTML)

All meta is generated centrally by `Seo.astro` (canonical = `new URL(pathname, site)`; title auto-suffixed `| Algeria Compass`; OG + Twitter cards; optional `noindex`). Schema by `SchemaGraph.astro` (Org+Country+WebSite graph on every page) + per-page nodes.

**Coverage across all 131 built pages:**
- Missing `<title>`: **0** · Missing meta description: **0** · Missing canonical: **0** · Missing JSON-LD: **0**.
- **Duplicate titles: 0. Duplicate meta descriptions: 0.** (Checked every page.)
- Open Graph (type/title/desc/url/image/image:alt/site_name/locale) + Twitter (card/title/desc/image/image:alt): present on every page. ✅

**Gaps (informational, not errors):**
- **No `hreflang`** anywhere; `<html lang="en">` is hard-coded. Correct *only if* the site stays English-only (org schema advertises en/fr/ar and content references French/Arabic). If FR/AR pages are ever added this becomes a blocker. *File:* `BaseLayout.astro:19`.
- **No `twitter:site`/`twitter:creator`** handle; no `article:published_time`/`author` OG tags on blog posts. *File:* `Seo.astro`.

**Cannibalization / overlapping intent (real, see Phase 5 for full list):** province-vs-destination duplicate city guides; question-vs-blog duplicate topic guides.

**Orphans:** **0.** A link-graph crawl of all built HTML found every indexable page is linked internally.
**Crawl traps / pagination:** none — fully static, no paginated or faceted URLs, no infinite calendars. ✅

---

## PHASE 4 — INDEXABILITY AUDIT

- **robots.txt** — static file (`robots.txt`, copied into `dist/`), **not** generated. `Allow: /`, `Disallow: /search`, two `Sitemap:` lines. ✅ Note: `/knowledge/*`, `/sitemap/`, `/thank-you/` are **not** disallowed in robots.txt — they rely on meta `noindex` (correct: lets Google read the noindex). ✅
- **sitemap.xml** — generated by `sitemap.xml.ts`. Output = **109 URLs**, which is **exactly** the count of indexable built pages (131 total − 22 noindex). 1:1, no missing indexable pages, **0 noindex URLs leaked into the sitemap** (cross-checked every `<loc>` against its file's robots meta). ✅
- **sitemap-images.xml** — generated, 390 `<image:image>` entries. ✅
- **astro.config.mjs** — `site` set, canonical host correct. ✅
- **redirects/headers** — `.htaccess`: single-hop HTTPS+non-www canonicalisation (capturing cond first — LiteSpeed-safe), trailing-slash in one hop, legacy `/clusters/*`→real-page 301s, dead `/de|/es|/fr`→`/` 301s, `/images/*`→`/assets/img/*`. Security headers (HSTS, X-CTO, X-Frame, Referrer-Policy, COOP, Permissions-Policy, **CSP**) + immutable asset caching. ✅
- **noindex rules** — applied to exactly: `404`, all `knowledge/*` (19), `search`, `sitemap`, `thank-you` (22 total). ✅ No canonical money page is accidentally noindexed.

**Can anything block indexing of money pages?** No. Evidence: every tour/destination/province/region/blog/question page is `index,follow`, has a self-canonical, and is in the sitemap.

---

## PHASE 5 — CONTENT STRUCTURE AUDIT

Collections (`src/content/config.ts`): province(15), destination(10), experience(4), article/blog(9), question(7), editorial(10), team(1), reviewer(1). Plus tours(21, JSON), regions(8, TS data).

### ⚠️ Conflict A — two unrelated "region" taxonomies
- `/regions/` pages = 8 "worlds": `algiers, constantine, roman, mzab, sahara, tlemcen, bejaia, bousaada` (`data/regions.ts`).
- content `region` enum = 7 thematic: `sahara, kabylie, roman, andalusian, mzab, coast, highlands` (`content/config.ts:3`).
- Only `sahara, roman, mzab` overlap. The word "region" means two different things in the data model → taxonomy/hierarchy confusion. *Files:* `src/data/regions.ts`, `src/content/config.ts`.

### ⚠️ Conflict B — province ↔ destination duplicate city guides (cannibalization)
Four cities exist as **both** a province and a destination, with near-identical titles and full-length bodies:

| URL pair | Province title | Destination title | Words (prov/dest) |
|---|---|---|---|
| `/provinces/constantine/` vs `/destinations/constantine/` | "…City of Bridges — Travel Guide" | "…The City of Bridges Travel Guide" | 2830 / 2552 |
| `/provinces/tlemcen/` vs `/destinations/tlemcen/` | "…Andalusian Heritage & Music — Travel Guide" | "…Andalusian Heritage Travel Guide" | — |
| `/provinces/tipaza/` vs `/destinations/tipaza/` | "…Roman Ruins by the Sea — Travel Guide" | "Roman Ruins by the Sea near Algiers" | — |
| `/provinces/djanet/` vs `/destinations/djanet/` | "…Gateway to the Tassili — Guide" | "…Gateway to the Tassili & Tadrart" | — |

Two indexable full guides competing for the same "<city> travel guide" query each.

### ⚠️ Conflict C — question ↔ blog duplicate-intent guides (cannibalization)
Same topic, two ranking URLs, both substantial:

| Intent | Question page (words) | Blog page (words) |
|---|---|---|
| Is Algeria safe | `/questions/is-algeria-safe/` (1593) | `/blog/algeria-safety-guide/` (3635) |
| Algeria visa | `/questions/do-i-need-a-visa-for-algeria/` (1601) | `/blog/algeria-visa-guide/` (3932) |
| Getting around | `/questions/how-do-you-get-around-in-algeria/` (1659) | `/blog/algeria-transportation-guide/` (3499) |
| Best time | `/questions/when-is-the-best-time-to-visit-algeria/` | `/blog/best-time-to-visit-algeria/` |

### ⚠️ Conflict D — food + visa clusters
- Food: `/food/` ("Algerian Food: Couscous, Rechta…") vs `/blog/algerian-food-guide/` ("Algerian Food: …Couscous, Tagines…") — duplicate intent. `/sweets/` is distinct.
- Visa: `/evisa/`, `/visa-support/`, `/questions/do-i-need-a-visa/`, `/blog/algeria-visa-guide/` — 4 URLs; the service pages (evisa/visa-support) are differentiated, but the Q + blog overlap.

### Recommended canonical hierarchy
```
Home
├─ Tours (commercial; money pages)            → keep as primary conversion layer
├─ Regions (8 "worlds", thematic discovery)   → rename data taxonomy to avoid clash w/ content `region`
├─ Destinations (UNESCO/landmark *sites*)      → make this the canonical "place" guide
│     └─ Provinces (administrative *States*)    → trim the 4 dup cities to a short hub that LINKS to the destination guide
├─ Experiences
└─ Knowledge
      ├─ Questions (concise FAQ; canonical for the snippet)  ── pick ONE owner per intent…
      └─ Blog guides (long-form)                              ──…and have the other link to it (or 301/merge)
```
For B/C/D: choose one owner per query, trim the other to a stub that links up, and/or add `rel=canonical` consolidation. No code blocks indexing — this is content strategy.

---

## PHASE 6 — PERFORMANCE AUDIT

- **JS:** `find dist/assets -name '*.js'` → **0 files, 0 bytes.** No hydration, no framework, no `client:` directives. Only tiny inline scripts (nav toggle, scroll-reveal, form, analytics, search). ✅ Best-in-class.
- **CSS:** `inlineStylesheets:'always'` → no render-blocking external stylesheet. Fonts loaded async (`media=print/onload` swap + `<noscript>` fallback). ✅
- **Layout shift (CLS):** **every** `<img>` in the build has explicit `width`+`height` (0 of 1652 missing). A rehype plugin (`astro.config.mjs rehypeImageDims`) injects real intrinsic dims into markdown images via `sharp`. ✅
- **Lazy loading:** 1652 imgs, 238 without `loading=` — these are the intentional eager LCP heroes (`fetchpriority="high"`) + header logo; everything below the fold is `loading="lazy"`. ✅ Correct.
- **Images served:** WebP heroes/thumbs with JPG `<picture>` fallback (tours hero `.sm.webp`, Card thumbnails sitewide per recent commits). ✅
- **Analytics:** GA4 deferred until first interaction/idle with Consent-Mode-v2 default-denied. ✅
- **Duplicate rendering / waste:** none found. No component re-renders the same heavy block.

**P3 repo-hygiene (not visitor-facing):** large tracked artifacts get deployed to docroot though unlinked: `new-logo.png` (2.1 MB), `astro_home.png`/`astro_setif.png`/`astro_article.png` (~0.6–1.1 MB, tracked at root), plus `.shots/` & `_verify/` QA PNGs (up to 3.7 MB). `index.html.bak`/`index.html.pre-photos.bak` (4.4 MB each) are untracked. They cost nothing to visitors (not referenced) but bloat the repo/upload and are publicly fetchable.

---

## PHASE 7 — CONVERSION AUDIT (flow traced end-to-end)

- **Inquiry/booking form** (`InquiryForm.astro` → `POST /contact.php`):
  - Progressive enhancement: JS `fetch` → JSON success panel; no-JS native POST → `/thank-you/`. Honeypot (`website`), client validation (name/email/message + regex), `?i=` interest prefill, live WhatsApp-message builder.
  - Server (`contact.php`): method guard, honeypot, header-injection guard (`nohdr`), `FILTER_VALIDATE_EMAIL`, `mail()` to `hello@`, redirect `/thank-you/` (ok) or `/contact/?error=1`. ✅ **Verified path.**
  - ⚠️ **Unverifiable at code level:** `mail()` deliverability depends on server SPF/DKIM for `no-reply@algeriacompass.com`. Owner must confirm mail actually arrives (and the `config.ts` street address TODO).
- **WhatsApp:** every CTA builds `wa.me/213784193176` from `config.ts` (Header, StickyContact, tour book-bar, InquiryForm fallback). ✅ Consistent number.
- **Review submission** (`Reviews.astro` → `POST /reviews.php`): stores PENDING to `data/reviews-pending.jsonl`, never auto-publishes; approved ones surface from `/reviews-approved.json` at runtime; AggregateRating/Review JSON-LD only from real approved data. Honeypot + length guards + 1–5 rating validation. ✅
  - ⚠️ The homepage hard-codes "5.0 on Google — from 9 five-star reviews" (`Reviews.astro:16-18`) — manual claim that can go stale; verify it stays accurate.
- **Tracking:** `data-evt` delegation + `window.trackEvent` fire `inquiry_submit`, `book_intent`, `whatsapp_click`, `plan_click` to GA4/Plausible. ✅ Wired; only fires after consent grant (by design).

---

## PHASE 8 — BUILD VERIFICATION (from generated output, not source)

`npm run build` → **131 pages, success.** Inspected `dist/`:
- `dist/robots.txt` present; correct contents. ✅
- `dist/sitemap.xml` = 109 `<loc>` (== indexable count); `dist/sitemap-images.xml` = 390 images; `dist/sitemap/index.html` = HTML sitemap page. ✅
- Schema output: `index.html` carries the full `@graph` (TravelAgency + Country + WebSite + SearchAction) inline; tour/region pages add TouristTrip/TouristDestination + BreadcrumbList + ImageObject (+ FAQPage when present). ✅
- Meta output: 0 pages missing title/description/canonical; 0 duplicate titles/descriptions. ✅
- Rendered navigation: identical Header/Footer markup across all sampled pages. ✅
- noindex output: present on the 22 expected pages only. ✅

---

## PHASE 9 — PRIORITIZATION

### P0 — Blocking
**None.** No issue currently prevents indexing, breaks the build, or breaks conversion at the code level.

### P1 — Major
1. **Province↔destination duplicate city guides (cannibalization).** *Sev: High SEO.* URLs: `/provinces/{constantine,tlemcen,tipaza,djanet}/` ⇆ `/destinations/{same}/`. *Files:* `src/content/province/*.md`, `src/content/destination/*.md`. *Root cause:* same city modelled in two collections with overlapping titles/intent and full bodies. *Fix:* pick destination as canonical place-guide; trim the province version to an administrative hub that links to it (or add cross `rel=canonical`). *Effort:* ~M (content, 4 cities).
2. **Question↔blog duplicate-intent guides (cannibalization).** *Sev: High SEO.* Pairs: safety, visa, transport, best-time. *Files:* `src/content/question/*.md`, `src/content/article/*.md`. *Root cause:* both rank for the same query at substantial length. *Fix:* one owner per intent (Question = concise snippet owner, Blog = deep-dive) with explicit "full guide →" link from Q to blog; consider canonical consolidation. *Effort:* ~M.

### P2 — Improvements
3. **`mail()` deliverability unverified.** *Sev: Med (conversion).* `contact.php`/`reviews.php` rely on PHP `mail()` from `no-reply@`. *Fix:* confirm SPF/DKIM; send a live test; consider SMTP/Formspree (`FORMSPREE_ID` already scaffolded in `config.ts`). *Effort:* S (ops).
4. **Two "region" taxonomies.** *Sev: Med (IA clarity).* `data/regions.ts` (8) vs content `region` enum (7). *Fix:* rename one (e.g. content field → `zone`/`theme`) and document the relationship. *Effort:* M (touches schema + templates).
5. **Food + visa cluster overlap.** `/food/` vs `/blog/algerian-food-guide/`; Q-visa vs blog-visa. *Fix:* differentiate or consolidate as in P1-2. *Effort:* S–M.
6. **Breadcrumb implementation duplicated 3 ways.** *Sev: Low-Med (maintainability).* *Files:* `Breadcrumbs.astro`, `tours/[slug].astro`, `regions/[slug].astro`. *Fix:* route tours/regions through the shared `Breadcrumbs.astro` (it already emits BreadcrumbList) and delete the inline copies. *Effort:* S.

### P3 — Optional
7. **Add `twitter:site`/`creator` + blog `article:*` OG tags.** *File:* `Seo.astro`. *Effort:* S.
8. **Repo/docroot bloat.** Remove/`.gitignore` `astro_*.png`, `new-logo.png`, `.shots/`, `_verify/`, `*.bak` from the deployed root. *Effort:* S.
9. **Stale manual "9 Google reviews" claim** on homepage. *File:* `Reviews.astro:18`. *Fix:* keep in sync or derive. *Effort:* S.
10. **hreflang** — add only if/when FR/AR localisation ships. *File:* `BaseLayout.astro`. *Effort:* M (future).

---

### Bottom line
Technically the site is in **excellent** shape: one layout, fully consistent chrome, zero shipped JS, zero CLS, perfect meta/canonical/schema/sitemap hygiene (0 duplicates, 0 orphans, sitemap == indexable set), strong `.htaccess` (single-hop canonical + CSP), and a sound, progressively-enhanced conversion stack. **The only material problems are content-architecture cannibalization** (province↔destination and question↔blog duplicate guides) — strategy work, not bugs — plus the operational need to **verify email deliverability**.
