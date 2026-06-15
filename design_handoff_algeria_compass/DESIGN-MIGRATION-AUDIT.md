# Algeria Compass — Design-System Migration Audit

**Scope:** Apply the `design_handoff_algeria_compass` design system to the **existing** Astro site, **presentation layer only**. Preserve all pages, content, tours, reviews, comments, images, articles, destinations, provinces, SEO metadata, structured data, URLs, slugs, internal links, forms, and business information. No content rewriting, shortening, or replacement. **No code changes in this phase — audit only.**

**Date:** 2026-06-14 · **Branch:** `main` · **Status:** read-only analysis complete.

---

## 0. Headline finding (read this first)

The handoff is **not a new design** to impose on a foreign codebase. Per `reference/DESIGN-SYSTEM-README.md`, the design system was **built by reading this exact repository** — `src/styles/global.css` is named as *"the single source of truth for design tokens,"* and the logos/photography were imported from this repo's `assets/img/`.

**Consequence:** ~80% of the design system is already implemented and live. The tokens, the emerald+gold palette, Cinzel/Nunito type, the sticky emerald nav, the 12px gold identity band, the compass-diamond footer, the regional `[data-region]` accent system, and most components already exist and already match the handoff values.

This task is therefore a **consolidation + fidelity-alignment pass**, not a rebuild:
- promote the current condensed token block to the handoff's fuller, named token layer (additive, alias-safe);
- close a small set of genuine visual gaps (hero treatment, motif coverage, a few card details);
- decide on clearly-flagged **net-new** scope (the 8-region 3D experience) that is *additive*, not a replacement.

There is **no content, data, URL, schema, or form migration** implied or required.

---

## 1. Complete site inventory

### 1.1 Stack & build
- **Astro 4.16** static (`output: 'static'`, `trailingSlash: 'always'`, `site: https://algeriacompass.com`), plain CSS custom properties (no Tailwind) — exactly the handoff's recommended stack.
- Build: `npm run deploy` = `scripts/build.mjs` → `dist/` → `scripts/stage-dist.mjs` copies built output into the repo root (cPanel docroot **is** the repo root). `inlineStylesheets: 'always'`.
- ~139 built pages (last recorded count).

### 1.2 Layouts (1)
- `src/layouts/BaseLayout.astro` — the single chrome wrapper. Imports `global.css` + `civ-skins.css` + `contrast-overrides.css`; mounts `Seo`, `SchemaGraph`, `Analytics`, `Header`, `Footer`, `StickyContact`, `CookieConsent`. Exposes props `region`, `civ`, `bodyClass`, `schema`, `sticky` → `<html data-region data-civ>` + `<body class>`. **This is the correct and only injection point for a global restyle.**

### 1.3 Pages / routes
Static pages: `index`, `about`, `contact`, `culture`, `food`, `sweets`, `history`, `evisa`, `visa-support`, `travel-guides`, `booking-terms`, `luxury`, `unesco`, `search`, `sitemap`, `thank-you`, `404`, plus `discover/`, `editorial/`, `knowledge/ (index, graph, provinces)`, `clusters/`, `reviewers/`, `team/`.
Dynamic collections (`getStaticPaths`):
- `tours/[slug]` — **20 tours** (`src/data/tours.json`) + `tours/index`
- `destinations/[slug]` — **10** (incl. 7 UNESCO) + index
- `provinces/[slug]` — **15 states** + index
- `questions/[slug]` — **7** + index
- `experiences/[slug]` — **4** + index
- `blog/[slug]`, `editorial/[slug]`, `reviewers/[slug]`, `team/[slug]`
- `clusters/[cluster]`, `knowledge/[hub]`

**All routes, slugs, and `trailingSlash` behaviour must remain byte-identical.** No route is renamed, merged, or removed.

### 1.4 Navigation
- `Header.astro` — sticky emerald `.nav`, 11 links: Home, Tours, Luxury, Destinations, States, Culture, e-Visa, Blog, FAQ, About, Contact + WhatsApp pill + "Plan a Trip" CTA + mobile toggle. Matches handoff §3 (handoff lists a subset; current is a superset — **keep the superset**).
- `Footer.astro` — 5-column dark footer (brand+NAP+socials / Explore / Knowledge / Plan / Editorial), compass-diamond overlay, cert chips. Matches handoff §3.

### 1.5 Components (~60 in `src/components/`)
- **Chrome:** Header, Footer, Hero, StickyContact, CookieConsent, Analytics, Seo, SchemaGraph, Breadcrumbs.
- **Homepage sections:** StatesStrip, TourCard, CivilizationsExplorer, SweetsStrip / SweetsSection, TravellerSlider, Reviews, HonestAnswers, CtaSection, CultureSection, Motif.
- **Editorial primitives (already present, named in handoff §5):** QuickAnswer, FactsBox→`KeyFacts`, Byline, EntitySnapshot, SourceList, EditorialMeta, Card.
- **Content/knowledge widgets:** KeyTakeaways, PracticalInfoBox, ComparisonTable, ClimateMatrix, DifficultyScale, SeasonRecommendation, TravelerProfileMatch, TripDurationPlanner, TripPlanningBlock, RoutePlanner, Timeline, TravelStats, TravelCostTable, TravelRequirements, CommonMistakes, ExpertNote, DestinationSnapshot, ProvinceSnapshot, RelatedGrid, EntityLinks, PhotoGallery, LuxuryProgram, InquiryForm, FaqSection.

### 1.6 Content sources
- `src/data/`: `tours.json` (20 tours, source of truth), `tour-visuals.ts` (per-region accents), `luxury.mjs`, `sweets.mjs`, `traveller-slider.json`, `algeria.ts`, `faq.ts`, `clusters.ts`, `hubs.ts`, `intents.ts`, `sources.ts`, `civSkins.mjs`.
- `src/content/` collections: article (9), destination (10), province (15), question (7), experience (4), editorial (10), team, reviewer.
- **None of this is touched.** It is the content the redesign must preserve.

### 1.7 Image library
- `public/assets/img/` — logos (`logo-full.png`, `logo-emblem-gold.webp`, `logo-emblem-512.png`, favicons) + hero/aerial photography.
- `public/assets/img/tours/` — **177 files**, place-keyed sets (`algiers-*`, `tipaza-*`, `djanet-*`, `ghardaia-*`, `bejaia-*`, `constantine-*`, `setif-*`, `djemila-*`, `batna-timgad-*`, `bousaada-*`, etc.) + `thumbs/tours/*.webp`. Sub-dirs: `clients/`, `cuisine/`, `ceramics`, `annaba/`, `blida/`, `beni-hammad/`.
- Handoff `reference/assets/regions/` adds **8 pattern SVGs + 8 emblem SVGs** (`pat-*`, `em-*`) — these are **new ornament assets** not yet in `public/`.

### 1.8 Forms
- **Contact / inquiry:** `InquiryForm.astro` (multi-step, `.inq`) → `public/contact.php` (PHP `mail()` → hello@). `contact.php` at root.
- **Reviews:** dark-emerald form in `Reviews.astro` → `reviews.php` (server-side moderation) + `reviews-admin.php`. **Never auto-publishes.**
- Sticky WhatsApp + "Plan a Trip" CTAs (`wa.me/213784193176`).
- **All form markup, field names, and PHP endpoints must be preserved exactly** — restyle the container/inputs only.

### 1.9 Review system
- `Reviews.astro` renders approved reviews from `reviews-approved.json` (currently `reviews: []` → empty-state, by design) and emits AggregateRating/Review JSON-LD **only** from real entries. Google 5.0 banner links to the real profile. **No fabricated reviews — locked.**

### 1.10 FAQ systems (three, all real)
- `src/data/faq.ts` (15 categories / ~39 Q&A) → `/questions/` + homepage `FaqSection` + FAQPage JSON-LD.
- `questions/[slug]` content collection (7 long-form Q&A pages).
- `HonestAnswers.astro` — homepage trust section, single-open `<details name>` accordions + trust/metric badges.

---

## 2. Design migration strategy

**Principle:** change *how things look*, never *what they say or where they live*. Every edit lands in CSS, token declarations, or component **markup-for-style** (class names, wrappers, ornament) — never in copy, data, routes, schema, or endpoints.

### Phase D0 — Token layer consolidation (foundation, low risk)
Promote the condensed `:root` in `global.css` to the handoff's fuller token set, **additively**:
- Add the missing named tokens: `--green-d/-l` as base values, `--cream`, `--card`, `--muted`, `--text-m/-l`, `--border`, `--success`, `--white`; the full **type scale** (`--fs-*`, `--fw-*`, `--lh-*`, `--ls-*`), **spacing scale** (`--space-1…8`, `--section-y`, `--gutter`), `--maxw-wide:1360px`, `--radius-pill`, `--radius-m`, the warm shadow set (`--shadow-hover/-pill/-nav`), and the semantic aliases (`--surface-card`, `--text-heading`, `--accent-deep`, etc.).
- **Keep every existing alias** so no current component CSS breaks (the file explicitly notes "existing component CSS consumes these").
- Reconcile the one real inconsistency: `--gold-d` is set to `#8B6A22` at line 30 then re-overridden to `#7E5E1A` at line 169. Collapse to a single `#7E5E1A` (AA on white) as the handoff specifies.
- Optionally split into `tokens/colors.css` + `typography.css` + `spacing.css` mirroring the handoff, imported by `global.css`. **Optional** — a single consolidated `:root` is functionally equivalent and lower-risk; recommend keeping one file unless the team wants the literal handoff structure.

### Phase D1 — Chrome fidelity (Header / IdBand / Footer)
Already ~95% aligned. Small deltas only: confirm id-band tile (24×12) + nav heights match; verify footer column ornament opacity (.13) and logo-on-emerald rule. **No structural change.**

### Phase D2 — Homepage section polish
The homepage already renders the handoff's section order (Hero → States strip → Featured tours → Luxury band → Plan → Civilisations → Sweets → Traveller marquee → Reviews → Honest Answers → Final CTA). Align visual details to spec: card hover (`-4px` lift, image `scale(1.05)`, sand border, no resting shadow), marquee timings, accordion single-open + keyboard nav, reveal-on-scroll **with visible-by-default fallback**.
- **Decision required — hero:** handoff §4.1 specifies a ~78vh **full-bleed photo hero with parallax**; the live homepage deliberately uses a compact gradient text hero (`.hero-compact`) "to keep the tour catalog above the fold." This is an intentional product divergence, not a defect → **see Risk R1.**

### Phase D3 — Regional accents & motifs (enrichment)
- Ensure every region/destination/province/tour page sets `data-region` so `--accent`/`--wash` retint cards, eyebrows, dividers (mechanism already exists; verify coverage).
- Add the 8 `pat-*`/`em-*` SVGs to `public/assets/regions/` and wire them as **decorative** backgrounds/emblems via `Motif.astro` + `civ-skins.css`. Purely additive ornament.

### Phase D4 — Net-new, optional, clearly separated
- **8-Region 3D experience** (handoff §6): a new `regions/` hub + per-region tilt/parallax pages. This **does not exist** in the repo and is **new scope**, not a reskin. Build only on explicit approval; it adds pages (does not modify/replace `provinces/` or `culture/`). **See Risk R4.**

**Suggested order:** D0 → D1 → D2 → D3, each: build → visual-verify → commit → (server pull to verify live) → STOP for approval (per the established per-phase workflow). D4 only if requested.

---

## 3. Components requiring redesign / re-touch

| Component | Change | Risk |
|---|---|---|
| `global.css` `:root` | Expand to full token layer (additive); fix `--gold-d` dup | Low |
| `TourCard.astro` | Align to spec card: "Private" badge, duration chip, 2-item gold-✓ trust list, price/CTA footer, hover lift+zoom — **without changing tour data or links** | Low–Med |
| `StatesStrip.astro` | Confirm 228×150 cards, seamless `-50%` marquee, pause-on-hover, reduced-motion scroll fallback | Low |
| `CivilizationsExplorer.astro` | Per-civ accent + geometric pattern + line-art emblem, single-open accordion, keyboard arrows | Med (skins are **generated** — see Risk R3) |
| `Hero.astro` | Photo hero + protection-gradient + (motion-gated) parallax/scroll-cue, **if** the hero decision favours the handoff treatment | Med |
| `SweetsStrip.astro` | Circular pastry thumbs (96px, gold border); gradient-initial fallback if no real photos | Low |
| `TravellerSlider.astro` | Two opposing rows, gold hairline, pause-on-hover, static-grid reduced-motion fallback | Low |
| `Reviews.astro` | Restyle container + form chrome only; **keep `reviews-approved.json` wiring, empty-state, schema, `reviews.php` POST** | Med (do not touch logic) |
| `HonestAnswers.astro` | Gold line-icons, trust+metric badges, `<details name="ha-faq">` single-open | Low |
| `InquiryForm.astro` | Restyle inputs/steps; **field names + `contact.php` action unchanged** | Med (do not touch logic) |
| `Footer.astro` | Minor ornament/spacing alignment | Low |
| `Motif.astro` + `civ-skins.css` | Host the 8 new pattern/emblem SVGs | Low |
| Editorial primitives (QuickAnswer, KeyFacts, Byline, EntitySnapshot, SourceList) | Confirm they consume `--accent`/`--wash` so `[data-region]` retints them | Low |

---

## 4. Components that can remain unchanged

- **All content collections** (`src/content/**`) and **all `src/data/**`** — text, tours, prices, itineraries, facts.
- **Routing / `getStaticPaths` / slugs / `trailingSlash`** — every URL preserved.
- **SEO & structured data:** `Seo.astro`, `SchemaGraph.astro`, `entitySchema.ts`, `authorship.ts`, all JSON-LD, `sitemap.xml.ts`, `sitemap-images.xml.ts`, `search-index.json.ts`, `robots.txt`, canonicals.
- **Form/server logic:** `contact.php`, `reviews.php`, `reviews-admin.php`, `reviews-approved.json` data contract, InquiryForm field names.
- **Analytics & consent:** `Analytics.astro` (GA4 + Consent Mode v2), `CookieConsent.astro`.
- **Knowledge/graph machinery:** `lib/graph.ts`, `clusters.ts`, `related.ts`, `recommend.ts`, `knowledge/*`, `clusters/*`.
- **Deploy pipeline:** `scripts/build.mjs`, `stage-dist.mjs`, `astro.config.mjs`.
- **`Header.astro` / `Footer.astro` link sets and `nav` array** — structure stays; only visual tokens may be touched.

---

## 5. Risks before implementation

**R1 — Hero / "Elite Luxury" positioning conflict (HIGH, needs a decision).**
The handoff's two documents disagree. `PROMPT.md` §4.1 prescribes the H1 *"Explore Algeria in Elite Luxury"* and a tour-operator framing verbatim; `DESIGN-SYSTEM-README.md` explicitly marks *"Explore Algeria in Elite Luxury / book now / luxury"* as **deprecated legacy language** and pushes an *independent editorial platform* voice ("58 provinces… openly sourced knowledge"). The live site uses the tour-operator framing and a compact hero. **A pure presentation reskin must not change copy or positioning** — so I will keep current copy/hero unless you direct otherwise. **Need your call:** (a) keep current hero + copy as-is (recommended for "presentation only"), or (b) adopt the handoff's photo-parallax hero **layout** while keeping current copy, or (c) also adopt the editorial-platform voice (this would be a *content* change, outside the stated scope).

**R2 — `global.css` is large and shared by every page.** A single token typo cascades site-wide. Mitigation: additive-only token edits, keep all aliases, build + screenshot-diff key page types (home, tour, destination, province, question, editorial) before commit.

**R3 — `civ-skins.css` is GENERATED, not hand-edited** (per project memory). Contrast/skin tweaks belong in `contrast-overrides.css`, and the generator (`src/data/civSkins.mjs`) is the real source. Editing the generated file directly will be overwritten on next build.

**R4 — The 8-region 3D experience is net-new scope, not a reskin.** It adds parallax/tilt/3D motion the rest of the site deliberately avoids ("No bounces, no parallax" — README motion section), and new routes. Building it risks scope-creep and a motion-language inconsistency. Recommend treating it as a separate, explicitly-approved project; it must be **additive** (no change to existing `provinces/`, `culture/`, `discover/`).

**R5 — Motion & accessibility regressions.** Reveal-on-scroll must ship **visible-by-default** (never base `opacity:0`); all parallax/marquee/tilt gated behind `prefers-reduced-motion`. Preserve existing focus-visible gold outline, skip-link, AA contrast (`--gold-d #7E5E1A` for gold text on white). Don't regress the contrast work already done.

**R6 — Inline per-page `<style>` blocks.** Several pages (e.g. `index.astro`, `luxury.astro`) carry scoped styles that duplicate/override globals. Token changes must be checked against these so a global edit doesn't fight a local one (e.g. luxury's `lux-band`/`plan-card` definitions).

**R7 — Deploy lag.** Pushing to `main` does **not** auto-deploy; the cPanel server must `git pull` + flush LiteSpeed. "Verify live" depends on the user pulling — never claim live from a push alone.

**R8 — No visual baseline captured yet.** Before any edit, capture before/after screenshots of representative pages (home, a tour, a destination, a province, a question, an editorial page, contact, reviews) to prove content/layout parity.

---

## 6. Recommended immediate next step

Get a decision on **R1 (hero/positioning)**, then proceed with **Phase D0 (token consolidation)** — the safest, highest-leverage, fully-additive starting point — build, screenshot-diff, and stop for approval before touching components. **No code has been changed in this audit.**
