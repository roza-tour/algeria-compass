# algeriacompass.com — Technical & Indexing Diagnostic

**Date:** 2026-06-10 · **Mode:** READ-ONLY (no source changed, nothing deployed) ·
**Build audited:** fresh `npm run build` → 139 pages → evidence taken from `dist/`.

---

## 0. Headline verdict

> **There is NO technical blocker preventing indexing. The site is simply
> < 1 week old and awaiting Google's first crawl. That is normal.**

Every hard blocker was checked and is clear: `site` is set, sitemaps build with
real URLs, `robots.txt` allows crawl and references both sitemaps, there is **zero**
`noindex` anywhere, canonicals are present and trailing-slash-consistent,
`<html lang>` is present, and **no static `public/*.html` is shadowing an Astro
page** (the top suspect — ruled out).

The real issues are **credibility / content-completeness** (visible owner
placeholders, empty social links) and **reach** (English-only, no hreflang) — not
crawlability.

---

## A) Build output
`npm run build` → **139 pages**, output in `dist/`. Top-level routes present:
`tours/ destinations/ provinces/ luxury/ blog/ questions/ culture/ evisa/ food/
sweets/ search/ sitemap/ knowledge/ team/ editorial/ reviewers/` + `robots.txt`,
`sitemap.xml`, `sitemap-images.xml`, `search-index.json`, `contact.php`.

**Deployment model note (important):** the live docroot is the **git repo root**,
which holds the *committed copy* of the build (synced by `npm run deploy`), not
`dist/` directly. Verified `index.html` at the repo root is the real generated page
(has `<link rel="canonical">` + the JSON-LD graph) and matches `dist/`. So what
Google sees = the root copy = the Astro output. ✅ (Keep running `npm run deploy`
after every change or the root goes stale — that staleness is the *real-world*
version of the "shadow page" risk.)

---

## B) Indexing blockers — all clear ✅

| # | Check | Result | Evidence |
|---|-------|--------|----------|
| 1 | `site` set? | ✅ YES | `astro.config.mjs:6  site: 'https://algeriacompass.com'` |
| 2 | Sitemap integration? | ✅ YES (custom) | Not `@astrojs/sitemap`; custom endpoints `src/pages/sitemap.xml.ts`, `sitemap-images.xml.ts` |
| 3 | Sitemap in build + URL count | ✅ YES | `dist/sitemap.xml` = **137 `<loc>`**, `dist/sitemap-images.xml` = **58**. (137 vs 139 pages = `404` + `thank-you` correctly excluded.) |
| 4 | robots allows crawl + names sitemap | ✅ YES | `dist/robots.txt`: `Allow: /` + 2 `Sitemap:` lines. No `Disallow: /`. |
| 5 | Any `noindex`? | ✅ NONE | `grep -rln noindex src/ public/ dist/` → empty |
| 6 | **Static `public/*.html` shadowing Astro?** | ✅ NO | `find public -name "*.html"` → empty. Homepage source = `src/pages/index.astro`. `dist/index.html` contains canonical + full JSON-LD → genuinely Astro-generated, not a hand-written override. |
| 7 | Canonical + trailing-slash consistent | ✅ YES | home `https://algeriacompass.com/`; tour `https://algeriacompass.com/tours/djanet-sahara-safari/` — both match their sitemap `<loc>`. |
| 8 | `<html lang>` on built pages | ✅ YES | `dist/index.html` → `<html lang="en">`; tour → `<html lang="en" data-region=… data-civ=…>` |

**Conclusion:** no hard blocker. The only action that affects "is it indexed yet"
is **manual** — submit the sitemap in Google Search Console + request indexing
(see §5).

---

## P0 — Live credibility damage (fix before promoting the site)

These don't block crawling, but they render **live** and read as "unfinished".

### P0-1 · Visible owner-placeholder badges on the homepage
`src/components/HonestAnswers.astro:18–21` defines placeholder badges that are
**rendered** (line 75) and present in the built homepage:
```
dist/index.html →  "add platform + score" , "add founding year" , "add a real figure"
HonestAnswers.astro:19  { label: 'Independent rating', hint: 'add platform + score' }
HonestAnswers.astro:20  { label: 'Years in operation', hint: 'add founding year' }
HonestAnswers.astro:21  { label: 'Travellers hosted',  hint: 'add a real figure' }
```
A visitor sees grey "＋ Independent rating · *add platform + score*" chips on the
home page. **Fix (owner):** fill the three real figures, or remove the
`placeholders` block until you have them. *(Component is correctly used at
`src/pages/index.astro:98` area; the data is the gap, not the code.)*

### P0-2 · Empty / generic social links in the footer (site-wide)
`src/components/Footer.astro:20–21` link to the bare networks, not your accounts —
present on every page:
```
Footer.astro:20  href="https://www.instagram.com/"   (→ Instagram home, not your profile)
Footer.astro:21  href="https://www.facebook.com/"     (→ Facebook home)
```
Clicking either looks broken. **Fix (owner):** supply the real profile URLs (also
unlocks the empty `sameAs` in the Organization schema — `SchemaGraph.astro` is
already wired for them), or hide the icons until the accounts exist.

---

## P1 — High impact

### P1-1 · English-only — no French / Arabic, no hreflang
```
grep -rln hreflang src/ dist/   → NONE
src/pages/fr , src/pages/ar     → NO localized routes
Seo.astro:26  og:locale en_US   (only locale declared)
```
For Algeria-travel intent, **French and Arabic are the majority search languages**.
Today the site captures only English queries. This is the single biggest *reach*
gap (not an indexing fault). **Fix (project):** plan an i18n track (`/fr/`, `/ar/`)
with reciprocal `hreflang` + `x-default`. Large effort — flagging, not doing.

### P1-2 · Reviews are client-rendered only; data file absent
`src/components/Reviews.astro:16` fetches `/reviews-approved.json`, which **does not
exist** in `public/` or `dist/`.
```
ls dist/reviews-approved.json     → MISSING
ls public/reviews-approved.json   → MISSING
```
Handled **gracefully** (not a hard bug): on 404 the widget shows
*"No reviews yet — be the first…"* (`Reviews.astro:100`), and it injects
`AggregateRating`/`Review` JSON-LD **only** from real data — so **no fake reviews**. ✅
Two caveats: (a) the static HTML still contains the no-JS fallback string
`"Loading reviews…"`, and (b) reviews/rating are invisible to crawlers that don't
execute the fetch. **Fix (owner):** add real approved reviews to
`public/reviews-approved.json` when available; they'll render + emit rating schema
automatically. Until then, current behaviour is honest and fine.

### P1-3 · Schema coverage — already strong (no fix needed, documented for record)
JSON-LD present and type-rich across templates:
```
TravelAgency, WebSite (+SearchAction), Country            — homepage  ✅
TouristTrip + Offer, BreadcrumbList, ImageObject, FAQPage — tours      ✅
TouristAttraction / TouristDestination                    — dest/state ✅
BlogPosting, QAPage, FAQPage, Person/ProfilePage, AboutPage, CollectionPage ✅
AggregateRating/Review — client-injected from real data only ✅
```
The four "ideal" types you asked about — **TravelAgency, TouristTrip+Offer,
FAQPage, BreadcrumbList — are ALL present.** Nothing missing. No fake
`Review`/`AggregateRating` is emitted statically.

---

## P2 — Polish

### P2-1 · 69 empty `alt=""` on the homepage — mostly intentional, spot-check advised
`grep -o 'alt=""' dist/index.html` = **69**, against `tmq-tile` ×100 (the traveller
marquee). The marquee **duplicates** each row for its seamless loop and sets
`alt=""` on the `aria-hidden` duplicate tiles **by design** (correct a11y), plus the
decorative sweets strip uses `alt=""`. So the count is expected, not 69 missing
descriptions. **Action:** spot-check that no *content* image (hero, gallery)
slipped through with empty alt. No duplicated `"Algeria Compass … Algeria Compass"`
alt patterns found. ✅

### P2-2 · Mobile nav a11y — already correct ✅
`Header.astro:28` `<button … aria-expanded="false" aria-controls="primary-nav"
aria-label="Open menu">`, toggled in JS (`:49–50`). Nav has `aria-label="Primary"`.
No action.

### P2-3 · Contrast tokens — previously hardened, looks AA
Brand tokens (`src/styles/global.css`): `--green-d:#07261C`, `--gold`, and the
explicit AA fix `:root{ --gold-d:#7E5E1A }` (≈5.6:1 for small gold text on white,
line 169). A prior legibility sweep + `scripts/contrast-audit.mjs` exist. Risk
remaining is hero text over photos (case-by-case). **Action:** a fresh
Lighthouse/axe run (manual) to confirm — see §5.

### P2-4 · Meta length (minor SEO truncation)
Homepage `<title>` ≈ 73 chars and `<meta description>` ≈ 230 chars — both longer
than Google's display limits (~60 / ~155–160), so they'll truncate in SERPs. Not a
ranking issue; tighten if you want cleaner snippets.

### P2-5 · `about` page credentials placeholder
`src/pages/about.astro:51` `<!-- TODO: add only verified credentials (licence no.,
insurer, named editors/reviewers) -->` — an HTML comment (not visible), but the
About page is thin on trust signals. **Fix (owner):** add the operator licence
number, insurer and named team once confirmed.

### P2-6 · Luxury Chréa photo placeholder (known)
`src/data/luxury.mjs:177` Programme 03 Day 2 uses a Blida image with an explicit
`flag` note (Chréa/Cherchell have no dedicated photo). Owner to supply real photos.

### P2-7 · Docroot hygiene (verify, not confirmed here)
Because the docroot = repo root, ensure the server does **not** serve `src/`,
`scripts/`, `node_modules/`, `*.mjs`, `package.json`, etc. (an `.htaccess` deny or
moving the docroot). Couldn't verify server config from here — flag to check.

---

## 5. Manual steps — only the owner/operator can do these

1. **Google Search Console** — verify the property, **submit `sitemap.xml`**, then
   *URL Inspection → Request indexing* for the homepage + top tours. This is the
   actual trigger for first indexing (the site is technically ready).
2. **Bing Webmaster Tools** — add site + submit the same sitemap (feeds Bing/ChatGPT).
3. **Fill the real figures** in `HonestAnswers` (P0-1) and **real social URLs** in
   the footer + schema `sameAs` (P0-2).
4. **Add `public/reviews-approved.json`** with real approved reviews (P1-2) — rating
   schema then appears automatically.
5. **Run Lighthouse** (mobile) on the live URL after the server pulls — confirms the
   perf/contrast work and Core Web Vitals on real hosting (TTFB/compression are
   server-bound).
6. **Decide on FR/AR** (P1-1) — the biggest reach lever for Algeria travel search.

---

*Read-only audit. Nothing in `src/` was modified; nothing was deployed. This file
is the only artifact written.*
