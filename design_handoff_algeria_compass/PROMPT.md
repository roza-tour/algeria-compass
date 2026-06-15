# PROMPT — Build the “Algeria Compass” website & design system

You are building **Algeria Compass** — a licensed Algerian tour operator’s marketing website *and* its underlying design system. Build it locally as a real, production codebase. This document is self-sufficient: implement everything below. Where exact CSS values are given, use them verbatim.

---

## 0) What to build & stack

- A multi-page marketing site. **Page 1 (build first, in full): the Homepage.** Then scaffold: Tours (list + detail), Destinations, States/Provinces, Travel guides, Culture & Food, Questions (FAQ), Contact, About.
- **Recommended stack:** Astro 4 + TypeScript (content-driven, fast, matches the brand’s real stack). If you prefer, Next.js (App Router) is fine. Use plain CSS with custom properties (no Tailwind needed) — the tokens below are CSS variables.
- Ship semantic, accessible HTML. Respect `prefers-reduced-motion`. Mobile-first responsive.
- The reference design files (HTML/CSS/JS) accompanying this prompt are **design references**, not production code to paste. Recreate them idiomatically in the chosen framework.

---

## 1) Brand in one paragraph

Algeria Compass makes the largest country in Africa understandable and visitable: private, locally-guided journeys across the Sahara, the UNESCO Casbah of Algiers, the Roman cities, the M’Zab Valley and the Kabyle coast. The tone is **premium-editorial and honest** — a knowledgeable local guide, never a hard sell. It reads like a serious publication about a place. Tours from €30; a luxury 5-star collection up top.

**Voice rules:** British-leaning English; diacritics on place names (Sétif, Béjaïa, Ghardaïa, M’Zab, Tassili n’Ajjer). Substance over adjectives. No “book now / hidden gem / bucket-list” filler. CTAs are calm: “Plan a journey”, “Browse all tours”, “WhatsApp us”. Never fabricate reviews, ratings, prices or credentials.

---

## 2) Design tokens (use verbatim)

```css
:root{
  /* Brand — emerald (primary, dominant) */
  --brand-green:#0B3D2E; --green-d:#07261C; --green-l:#11543D; --brand-green-300:#3C7A66;
  /* Brand — gold (heritage accent, sampled from the logo) */
  --brand-gold:#C19333; --gold-l:#E4AD40; --gold-d:#7E5E1A;
  /* Neutrals & surfaces */
  --ink:#1A1A1A; --paper:#FBF8F2; --cream:#F6EFE0; --card:#FFFFFF;
  --muted:#6B6B63; --text-m:#4A4A4A; --text-l:#5F5F58; --border:#E6DDC8; --wash:#EEF5EF;
  /* Status */ --red:#C92B34; --success:#2F8F57;
  /* Semantic aliases */ --green:var(--brand-green); --gold:var(--brand-gold); --bg:var(--paper);
  --text:var(--ink); --accent:var(--brand-green);
  /* Radius */ --radius-s:6px; --radius-m:14px; --r:16px; --radius-l:24px; --radius-pill:999px;
  /* Shadow (warm, green-tinted) */
  --shadow-card:0 6px 24px rgba(11,61,46,.08); --shadow-hover:0 14px 34px rgba(0,0,0,.09);
  --shadow-nav:0 2px 16px rgba(7,38,28,.18);
  /* Layout */ --maxw:1200px; --maxw-wide:1360px;
}
/* Regional accents — set on a wrapper via [data-region] */
[data-region="roman"]{--accent:#8B2020;--wash:#F7EFE7}
[data-region="andalusian"]{--accent:#0D5C7A;--wash:#EEF6F8}
[data-region="kabylie"]{--accent:#1E5C3A;--wash:#EEF5EF}
[data-region="sahara"]{--accent:#A85408;--wash:#FDF5EA}
[data-region="mzab"]{--accent:#96620A;--wash:#FBF6EC}
[data-region="coast"]{--accent:#1466A0;--wash:#EEF4F9}
[data-region="highlands"]{--accent:#5A6B2F;--wash:#F2F4EA}
```

**Typography**
- Display / headings: **Cinzel** (serif, inscriptional), weights 400–900.
- Body: **Nunito** (humanist sans), 300/400/600/700.
- Arabic script: **Noto Naskh Arabic**.
- Load via Google Fonts. Scale: display `clamp(2rem,5vw,3.3rem)`; h2 `1.5–1.8rem`; body `1.02rem`; line-height 1.2 headings / 1.7 body. Eyebrow/kicker: `.72rem`, uppercase, letter-spacing `.14em`, colour `--gold-d` on light or `--gold-l` on dark.

(The accompanying `styles.css`, `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css` contain these exact values — copy them in as the global stylesheet entry.)

---

## 3) Global chrome

**Header (sticky):** deep-emerald (`--green-d`) bar, height 64px. Left: gold compass emblem (`logo-emblem-gold.webp`) + wordmark “Algeria **Compass**” (Compass in `--gold-l`, Cinzel 800). Right: nav links (Tours, Destinations, States, Travel guides, Culture, Questions) in `rgba(246,239,224,.82)`, hover white; plus a gold “💬 WhatsApp” pill. Below the header: a **12px “identity band”** — a gold mountain-ridge stripe on `#0E3D24` (repeating SVG, 24×12px tile).

**Footer:** gradient `--green → --green-d` with a faint gold compass-diamond pattern overlay (90px tile, opacity .13). 5 columns: brand block (full logo `logo-full.png` + italic tagline “The independent guide to Algeria”) + Explore / Discover / Plan / Trust link lists. Bottom bar: “© 2026 Algeria Compass. Licensed Algerian tour operator…”.

**WhatsApp:** number `213784193176`; links are `https://wa.me/213784193176?text=<encoded message>`.

---

## 4) Homepage — 11 sections, in this exact order

1. **Hero** (≈78vh). Full-bleed photo `algiers-white-city-aerial.jpg` with a 110° dark-emerald scrim + faint gold compass-diamond pattern layer. Content: eyebrow “Algeria Revealed · Licensed Algerian Tour Operator”; H1 **“Explore Algeria in Elite Luxury”**; lead “Private, locally-guided journeys across Algeria — Sahara, the UNESCO Casbah, Roman cities, the M’Zab and the coast.”; buttons: gold “Browse all tours →”, ghost “💬 WhatsApp us”. **Parallax:** on scroll the image translates +0.18×, content translates +0.30× and fades; on mousemove the pattern layer drifts. Animated “Scroll” cue bottom-centre.

2. **States strip** — background `--wash`. Header row: eyebrow “Where we travel” + “All states →”. A **continuous marquee** of 13 state cards (228×150px, radius 14, name overlaid on a bottom gradient, gold border on hover, image zoom on hover). Duplicate the set for a seamless `-50%` loop (50–55s linear); pause on hover; reduced-motion → horizontal scroll. States + photos: Algiers `algiers-9`, Oran `oran-1`, Tlemcen `tlemcen-1`, Constantine `constantine-1`, Sétif `setif-1`, Béjaïa `bejaia-1`, Ghardaïa `ghardaia-1`, Bou Saâda `bousaada-6`, Djanet `djanet-1`, Tipaza `tipaza-5`, Timgad `batna-timgad-1`, Djémila `djemila-1`, Mostaganem `oran-5` (all under `assets/img/tours/`).

3. **Featured tours** — eyebrow “Private journeys” + H2 “Featured tours”. Responsive grid (min 300px) of 6 **tour cards**. Card: 16:10 photo (zoom on hover, `--accent` bg), “Private” badge top-left, duration chip bottom-right; body: title (Cinzel), 3-line benefit, a 2-item trust list (“Licensed Algerian operator”, “Free cancellation up to 5 days before” with gold ✓), footer with price (“from €X / person”, Cinzel numerals) and a green “View & book →” CTA that turns gold on hover. Lift + shadow on hover. **Tours data (truthful — use exactly):**
   | id | title | duration | from € | hero (assets/img/tours/) | accent |
   |---|---|---|---|---|---|
   | djanet-sahara-safari | Djanet Sahara Safari — 5-Day Tadrart Rouge | 5 days · 4 nights | 828 | djanet-1.jpg | #C8680A |
   | algiers-city | Algiers Full-Day — Casbah, Bardo & Martyrs’ Memorial | 1 day | 83 | algiers-1.jpg | #11738A |
   | eastern | Eastern Algeria & Sahara Discovery — 6 Days | 6 days · 5 nights | 912 | constantine-7.jpg | #6B2D8B |
   | west | Western Algeria — Oran, Mostaganem & Tlemcen (5 Days) | 5 days · 4 nights | 768 | tlemcen-1.jpg | #0D5C7A |
   | ghardaia | Ghardaïa — 3-Day M’Zab Valley Tour | 3 days · 2 nights | 330 | ghardaia-1.jpg | #B87A0A |
   | cultural | Algeria Cultural Tour — 5 Days | 5 days · 4 nights | 900 | tipaza-1.jpg | #B58A2E |

   Benefit lines (verbatim): Djanet — “Five days in the most beautiful desert on Earth — blood-red sandstone, golden dunes and 10,000-year-old art, guided by the Tuareg who have always called it home.”; Algiers — “A full day through the white city — the Ottoman Casbah, a great museum, and the monument that crowns Algiers, with a real Algerian lunch in between.”; Eastern — “Six days across Algeria’s east — Constantine’s bridges, the Roman cities of Djémila and Timgad, a Saharan gateway at Bou Saâda, and the Béjaïa coast.”; West — “Five days across the Algerian west — raï-city Oran, the beaches of Mostaganem, and the deep Andalusian soul of Tlemcen.”; Ghardaïa — “Three days in the M’Zab — the thousand-year-old hill-towns of the Mozabites, their secret water channels, and a night in the open desert.”; Cultural — “Five days from the Casbah to the Sahara — Algiers, Roman Tipaza, and the timeless M’Zab Valley, with a private licensed guide throughout.” Below grid: “All 20 tours →”.

4. **Luxury band** — full-width dark-emerald block with radial gold/green glows. Eyebrow “★ The 5-Star Collection”; H2 “Luxury Algeria, privately yours”; copy “Three signature, all-inclusive 8-day journeys — Roman ruins, UNESCO cities, the Sahara and the Andalusian west. Internal flights, 5-star hotels, private 4WD. From €1,615 / person.”; gold CTA “Discover the journeys →” that lifts on hover.

5. **Plan your Algeria trip** (`plan-sec`, background `linear-gradient(180deg,#fbf8f2,#f3ede0)`) — eyebrow “The country”, H2 “Plan your Algeria trip”, lead “Six ways into Algeria — pick a thread and pull.” Six gradient cards (min 240px, radius 18, white text, a translucent circle that scales on hover, emoji + Cinzel title + description + “→”). Cards (emoji, title, text, gradient a→b):
   - 🧭 Browse tours — “20 private, guided itineraries — Sahara, coast and Roman north.” — `#0B3D2E→#11543D`
   - 🏛️ Destinations — “Casbah of Algiers, Tassili n’Ajjer, Constantine, Djémila and more.” — `#8A3F2E→#b4543b`
   - 🗺️ States — “Region-by-region guides across Algeria’s States.” — `#1E8C8C→#27a9a9`
   - 🛂 Travel guides — “Visa, safety, best time to visit, food and transport.” — `#C19333→#dba63c`
   - 🍵 Culture & food — “Cuisine, crafts, music and the civilisations that shaped Algeria.” — `#7a3b16→#9c5223`
   - ✨ Discover Algeria — “Our in-depth, researched guide to the whole country.” — `#4A2A6A→#6b3f97`

6. **Civilisations of Algeria** — eyebrow “A layered country”, H2, lead about eight worlds. A grid of **8 skin-themed cards** (each: its own accent colour, a faint geometric pattern background, a line-art emblem, “Civilisation 0N”, name, hook). Clicking a card opens a **single-open accordion panel** beneath (photo + emblem + title + accent divider + lead paragraph + a ★ fact + state chips + a “Browse journeys →” row). First card open by default; keyboard arrow navigation. Then a “cuisine closer” card linking to Food. The 8 civilisations (id, name, accent, pattern/emblem key, hero photo under assets/img/tours/, hook, fact):
   1. Amazigh — `#1466A0` — *bejaia* — `bejaia-1` — “The indigenous soul of North Africa” — “Tifinagh script and Berber pottery patterns are over 3,000 years old.”
   2. Tuareg & the Sahara — `#C8680A` — *sahara* — `djanet-1` — “Blue-veiled nomads, a sea of dunes” — “Tassili n’Ajjer holds ~15,000 rock paintings, older than the pyramids.”
   3. The Mozabites — `#B87A0A` — *mzab* — `ghardaia-1` — “White ksour of the desert” — “The M’Zab’s cubist architecture inspired Le Corbusier; UNESCO since 1982.”
   4. Roman & Numidian — `#8B2020` — *roman* — `djemila-1` — “Africa’s Rome, frozen in stone” — “Djémila and Timgad are among the best-preserved Roman cities on Earth.”
   5. First Islamic Kingdoms — `#7A2E5E` — *constantine* — `constantine-1` — “Brick minarets of the first kingdoms” — “The Qal’a of Beni Hammad, first Hammadid capital, is UNESCO-listed (1980).”
   6. Andalusian — `#0D5C7A` — *tlemcen* — `tlemcen-1` — “Andalusia in exile — arches & zellige” — “Tlemcen was the Zianid capital and a refuge for the exiles of Al-Andalus.”
   7. Ottoman Algiers — `#11738A` — *algiers* — `algiers-9` — “Corsair palaces above the bay” — “For 300 years Algiers led Ottoman Barbary; its Casbah is UNESCO-listed.”
   8. Modern Algeria — `#A0511E` — *bousaada* — `bousaada-6` — “The mountains that made a nation” — “The Aurès mountains lit the spark of the 1954 war of independence.”
   (Full lead paragraphs are in the reference `home.js`.) Generate one seamless **geometric SVG pattern + a line-art emblem per civilisation** (Ottoman 8-point star, Roman Greek-key meander, M’Zab nested diamonds, Tuareg cross, Andalusian sebka lattice, Amazigh chevrons, Constantine interlaced arches, Bou Saâda sun-rays) — see `assets/regions/` reference SVGs.

7. **Sweets strip** (background `#FBF1DC`) — eyebrow “Culture · Pastries”, H2 “A sweet finish”, sub about baklawa/makroud/qalb el louz/kaab el ghzal, “Explore Algerian sweets →”. A horizontal row of circular pastry thumbs (96px, 3px `#E4AD40` border, lift on hover). *If real pastry photos are unavailable, use warm gradient circles with the sweet’s initial — do not use wrong photos.*

8. **Traveller marquee** (background `#07261C`) — centred eyebrow “Moments from our trips”, H2 “Real journeys, real travellers”, sub. **Two rows** of photo tiles (fixed height ~190px, native width, radius 14, gold hairline) scrolling in **opposite directions** (64s / 72s), each row duplicated for a seamless loop; pause on hover; reduced-motion → static grid.

9. **Reviews** — eyebrow “In their words”, H2 “Reviews from our travellers”, sub. A **Google 5.0 banner** (links to the real profile) — “5.0 ★★★★★ — from 9 five-star reviews”. Two-column grid: left = approved-reviews list (fetched from `/reviews-approved.json` at runtime; show an empty-state message when none, exactly as the real site does — never fabricate reviews); right = a dark-emerald review form (name, country, tour select, 1–5 star input, comment, submit). Form POSTs to `/reviews.php` (server-side moderation) — stub the endpoint or wire to your backend; never auto-publish.

10. **Honest Answers** — dark-emerald section with a faint gold motif. Eyebrow “Honest Answers”, H2 “Curious about Algeria — but not sure who to trust?”, sub. A row of **trust badges** (🛡 Licensed Algerian operator · 🛂 Visa support included · 🧭 Local Algerian guides · 💬 Arabic · Tamazight · French · English) plus two **real metric badges** (“5.0★ on Google — 9 five-star reviews” linking out; “7+ years guiding Algeria”). Then **6 category cards**, each with a gold line-icon and a single-open `<details>` accordion (use `name="ha-faq"`). Categories & questions are in the reference `home.js` (verbatim, all truthful). Footer: “All travel questions →”, “Ask us anything →”.

11. **Final CTA** (background `--wash`) — centred H2 “Ready to see Algeria?”, “Tell us your dates and interests — we’ll craft a private itinerary.”, gold “Plan a trip” + green “💬 WhatsApp” buttons.

---

## 5) Reusable components to factor out
`Button` (variants: green / gold / ghost / ghostLight; sizes sm/md/lg; optional trailing arrow), `Eyebrow`, `Badge`, `TourCard`, `StateCard`, `PlanCard`, `CivCard`+`CivPanel`, `SweetThumb`, `Reveal` (scroll-in), `Marquee`, `Accordion` (`<details name>`), `Nav`, `Footer`, `IdBand`. Plus editorial primitives for content pages: `QuickAnswer` (answer-first box, left accent rule), `FactsBox` (gold-tinted key-facts table), `Byline` (org-level, dot-separated), `EntitySnapshot` (knowledge-graph fact card), `SourceList` (cited sources — the “openly sourced” promise). Build these against the CSS variables so `[data-region]` retints them.

---

## 6) The “8 Regions” experience (second flagship page — build after homepage)
A cinematic **Regions hub** (“One country, eight worlds”) → a grid of **8 interactive 3D tilt cards**, one per region (Algiers, Constantine, Roman Algeria, The M’Zab, The Sahara, Tlemcen, Béjaïa & Kabylie, Bou Saâda). Each opens a **bespoke region page**: a **parallax hero** (image + ornament + title drift on scroll/cursor), an intro with a slowly-rotating emblem medallion, a **3D monument showcase** (each archaeological site a perspective card that tilts toward the cursor with a tracking sheen + raised info plate), culture facets, a dotted fact-ledger, a gallery, and a closing CTA. Each region carries its **own palette + geometric ornament + emblem** (same 8 motifs as the civilisations). See reference files in `ui_kits/regions/` (`regions.css`, `engine.jsx`, `data.jsx`, `pages.jsx`).

**3D engine spec:** `Tilt` reads cursor position within an element, applies `perspective(900–1000px) rotateY(px*max) rotateX(-py*max)` (max 9–14°) on mousemove, eases back on leave; raised layers use `translateZ`. `ParallaxHero` translates image / pattern / content at different rates on scroll + cursor. All transforms GPU-friendly (`will-change:transform`).

---

## 7) Motion system (applies site-wide)
- **Scroll-reveal:** elements fade + rise 34–38px when entering view (IntersectionObserver). **CRITICAL fallback:** content must be visible by **default**; only add the hidden/animated state via JS in a *visible* tab, so print, reduced-motion, no-JS and background tabs always show content (don’t ship `opacity:0` as the base state).
- **Scroll-progress** gold bar at the very top.
- Hover: cards lift `translateY(-4…-6px)` + soft shadow + image `scale(1.05)`; buttons darken/lift; links gold on dark, accent underline on light. Press: subtle `translateY` / shrink.
- Transitions `.15–.25s`; marquees linear 50–72s. No bouncing, no infinite decorative loops on text. Honour `prefers-reduced-motion`.

---

## 8) Assets — pull from the brand’s repo
GitHub: **github.com/roza-tour/algeria-compass** (branch `main`). Use:
- Logos: `assets/img/logo-full.png`, `assets/img/logo-emblem-gold.webp`, `assets/img/logo-emblem-512.png`, favicons.
- Location photography: `assets/img/tours/<place>-<n>.jpg` — sets for `algiers, tipaza, oran, tlemcen, djanet, ghardaia, bousaada, bejaia, constantine, setif, djemila, batna-timgad` (see `assets/img/tours/INVENTORY.txt`). Hero/aerials also at `assets/img/<place>-*.jpg`.
- The logo is transparent gold — **always place it on deep emerald; never recolour.**
- Real per-region accent colours live in `src/data/tour-visuals.ts`; tour content in `src/data/tours.json`; civilisation content in `src/components/CivilizationsExplorer.astro`. Treat all facts/prices there as source-of-truth and never invent new ones.
- Icons: the brand is icon-light — use the compass emblem + arrow glyphs (→, ↗). If a UI icon set is needed, use **Lucide** (thin stroke) and note the substitution. Emoji appear only in the plan cards / trust badges as in the reference.

---

## 9) File structure (Astro suggestion)
```
src/
  styles/ global.css   (= the provided styles.css + tokens/*)
  layouts/ BaseLayout.astro   (head, fonts, Nav, IdBand, Footer)
  components/ Button, Eyebrow, Badge, TourCard, StateCard, PlanCard,
              CivilizationsExplorer, SweetsStrip, TravellerMarquee,
              Reviews, HonestAnswers, Reveal, Marquee, …
  data/ tours.json, civilisations.ts, states.ts, tour-visuals.ts
  pages/ index.astro, tours/, destinations/, provinces/, regions/,
         culture.astro, food.astro, questions.astro, contact.astro, about.astro
public/ assets/img/…   (logos + tours/ photography), assets/regions/ (8 patterns + 8 emblems)
```

---

## 10) Acceptance criteria
- Homepage renders all 11 sections in order, pixel-faithful to the references, with the exact copy, tours data and prices above.
- Marquees loop seamlessly and pause on hover; civilisations + Honest-Answers accordions are single-open and keyboard-accessible; reveal/parallax/3D run only with motion allowed and never hide content otherwise.
- Lighthouse: no console errors; images lazy-loaded with width/height; AA contrast (use `--gold-d` for gold text on light).
- Fully responsive (header collapses, grids reflow to 1–2 cols on mobile).
- No fabricated reviews, ratings, prices, authors or facts. WhatsApp = `wa.me/213784193176`.

Build the homepage first and confirm it visually, then proceed to the Regions experience and the remaining pages using the same components and tokens.
