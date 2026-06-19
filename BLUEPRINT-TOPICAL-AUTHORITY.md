# Algeria Compass — Topical Authority Blueprint (Phases 1–4)
**Date:** 2026-06-17 · **Goal:** preserve every URL (0 deletions, 0 merges, 0 redirects) while eliminating search-intent overlap via topic ownership.
**Status:** blueprint only — **no files edited**. Implementation (Phase 5) awaits approval.
**Method:** measured from `src/content/*` and the fresh production build in `dist/`. "Semantic %" = share of the *smaller* page's 4-grams found in the other (rendered `<main>`). "Intent %" = composite of head-query target + H1/title + FAQ overlap.

---

# PHASE 1 — ALL OVERLAPPING PAIRS

### Group A — Place pairs (same location, two+ URLs)

| # | URL A | URL B | Current intent (both) | H1 A / H1 B | Semantic % | Intent % | Risk |
|---|---|---|---|---|---|---|---|
| A1 | `/provinces/djanet/` | `/destinations/djanet/` | generic Djanet guide | "Djanet" / **"Djanet"** (dup H1) | low (~1.4% body) | ~55% | **High** |
| A1b| `/destinations/djanet/` | `/destinations/tassili-najjer/` | Tassili + desert | "Djanet" / "Tassili n'Ajjer" | low | ~50% | **High** |
| A2 | `/provinces/constantine/` | `/destinations/constantine/` | city travel guide | "Constantine" / "Constantine" (dup) | ~9% body | ~70% | **High** |
| A3 | `/provinces/tlemcen/` | `/destinations/tlemcen/` | city travel guide | "Tlemcen" / "Tlemcen" (dup) | ~6% body | ~70% | **High** |
| A4 | `/provinces/tipaza/` | `/destinations/tipaza/` | Roman ruins + town | "Tipaza" / "Tipaza" (dup) | ~9% body | ~75% (3/4 FAQ verbatim) | **High** |
| A5 | `/provinces/ghardaia/` | `/destinations/mzab-valley/` | M'Zab/Ghardaïa guide | "Ghardaïa" / "M'Zab Valley" | **41.7%** | ~85% (FAQs verbatim) | **Critical** |

> A1–A4 = duplicated **intent** (text written differently). A5 = duplicated **intent AND information** (highest text overlap on the site; FAQs "What is the M'Zab", "Why is the M'Zab", "Can tourists visit", "best time to visit Ghardaïa" appear on both).

### Group B — Place ↔ Blog

| # | URL A | URL B | Overlap subject | Semantic % | Intent % | Risk |
|---|---|---|---|---|---|---|
| B1 | `/destinations/mzab-valley/` | `/blog/mzab-valley-le-corbusier/` | M'Zab architecture / Le Corbusier | **44.0%** | ~70% | **High** |
| B2 | `/destinations/tassili-najjer/` + `/destinations/djanet/` | `/blog/algerian-sahara-travel-guide/` | Djanet/Tassili/Tadrart | 3.2% | ~55% | Med |
| B3 | `/destinations/tassili-najjer/` | `/regions/sahara/` | Sahara plateau | low | ~40% | Low |

### Group C — Question ↔ Blog (same head query, two URLs)

| # | Question page | Blog guide | Head query both target | Semantic % | Intent % | Risk |
|---|---|---|---|---|---|---|
| C1 | `/questions/is-algeria-safe/` | `/blog/algeria-safety-guide/` | "is Algeria safe" | 23.3% | ~90% | **High** |
| C2 | `/questions/do-i-need-a-visa-for-algeria/` | `/blog/algeria-visa-guide/` | "Algeria visa" | 26.4% | ~90% | **High** |
| C3 | `/questions/how-do-you-get-around-in-algeria/` | `/blog/algeria-transportation-guide/` | "getting around Algeria" | 21.4% | ~90% | **High** |
| C4 | `/questions/when-is-the-best-time-to-visit-algeria/` | `/blog/best-time-to-visit-algeria/` | "best time to visit Algeria" | 19.6% | ~90% | **High** |
| C5 | `/questions/how-much-does-a-trip-to-algeria-cost/` | `/blog/complete-algeria-travel-guide/` (cost section + FAQ) | "Algeria trip cost / is Algeria expensive" | 20.2% | ~70% | Med |

### Group D — FAQ-schema cannibalization & hubs

| # | URL A | URL B | Problem | Risk |
|---|---|---|---|---|
| D1 | `/blog/complete-algeria-travel-guide/` | `/questions/*` (visa, safety, best-time, languages, cost) | Complete-guide **FAQPage repeats the exact questions** the dedicated Q pages own → competes for the same FAQ rich-result | **High** |
| D2 | `/travel-guides/` | `/blog/complete-algeria-travel-guide/` | hub vs article, 39% small-overlap; hub partly re-explains the guide | Med |
| D3 | `/food/` | `/blog/algerian-food-guide/` | near-identical titles ("Algerian Food: …Couscous…"); text low (8.2%) → **intent** overlap | Med |
| D4 | `/questions/what-are-algerias-unesco-world-heritage-sites/` | `/unesco/` | both list Algeria's UNESCO sites (27.9%) | Med |
| D5 | `/evisa/` | `/visa-support/` | both visa-service pages (13.8%) — mostly differentiated already | Low |
| D6 | `/questions/what-languages-are-spoken-in-algeria/` | `/blog/complete-algeria-travel-guide/` (language FAQ) | language FAQ duplicated | Low-Med |

---

# PHASE 2 — OWNERSHIP FRAMEWORK (applied)

| Page type | Owns |
|---|---|
| **Province / Travel-Guide** | trip planning · transport · accommodation · permits · budgets · itineraries · seasons · logistics · practical info |
| **Destination** | history · heritage · architecture · culture · traditions · cuisine · local identity · arts · music · significance |
| **Question** | concise answer · FAQ intent · quick explanation (the snippet owner) |
| **Blog** | comprehensive long-form guide · deep educational content (the depth owner; **must NOT carry a FAQPage that repeats Question pages**) |

Resolution principles:
1. Each URL becomes the **canonical authority for one topic bucket**; others keep only a 2–4 sentence teaser + a contextual link.
2. **FAQs live on exactly one page per question.** Logistics FAQs → province/travel-guide; identity FAQs → destination; head-query FAQs → the Question page (not the blog).
3. **keyFacts split** by bucket (logistics facts → province; heritage/culture facts → destination).
4. Blogs keep depth but their `faqs:` arrays drop any question owned by a Question page; instead link to it.

---

# PHASE 3 — BLUEPRINTS

## A5 · Ghardaïa ↔ M'Zab Valley *(highest priority — do alongside Djanet)*

**`/provinces/ghardaia/` — Travel-planning authority**
- Primary intent: how to visit Ghardaïa / M'Zab trip planning. Secondary: itineraries, season, getting there, where to stay, etiquette/permits for the towns.
- Keep: Why visit, getting there/around, when to go, itineraries, where to stay, etiquette, practical, market/shopping logistics.
- Remove (→ destination): "The design that influenced modern architecture", deep "five towns" heritage description, Mozabite cultural history → reduce to teasers.
- Expand: flights/road to Ghardaïa, day-by-day M'Zab itinerary, accommodation, visiting-Beni-Isguen logistics & etiquette.
- FAQ ownership: *How do I get to Ghardaïa? · When is the best time? · Can tourists visit Beni Isguen? (logistics/etiquette) · What should I buy in the market?* → remove "What/Why is the M'Zab" (→ destination).
- Links: → `/destinations/mzab-valley/` (heritage), `/blog/mzab-valley-le-corbusier/` (architecture deep-dive), `/tours/ghardaia-guided-tour/`, `/regions/mzab/`.

**`/destinations/mzab-valley/` — Heritage/identity authority**
- Primary intent: M'Zab Valley UNESCO heritage, Mozabite (Ibadi) culture & architecture. Secondary: the five ksour, why UNESCO.
- Keep: What it is, why it matters (UNESCO), the five towns, Mozabite identity.
- Remove (→ province): access/season/"how to visit" logistics → 1 line + link.
- Expand: Ibadi Mozabite social organisation, the architecture (and its influence — coordinate with B1), Beni Isguen as holy town, crafts/carpets identity.
- FAQ ownership: *What is the M'Zab Valley? · Which towns make it up? · Why is it a UNESCO site? · Why did it influence modern architecture?* (identity) — remove logistics/"best time".
- Links: → `/provinces/ghardaia/` (plan a visit), `/blog/mzab-valley-le-corbusier/` (architecture essay), `/unesco/`.

**B1 · `/blog/mzab-valley-le-corbusier/` — Long-form depth**
- Owns: the Le Corbusier / modernist-architecture essay (a distinct angle). Trim general "what is the M'Zab" overlap to a short framing that links to the destination; drop the duplicated "best time to visit Ghardaïa" FAQ (→ province).

## A1/A1b · Djanet trio → see **Phase 4** (reference model).

## A2 · Constantine
- Province owner: planning (add itineraries, when-to-go, where-to-stay; keep transport). FAQ: how to get there, best time, days, cost.
- Destination owner: identity — bridges as engineering heritage, Malouf music (Constantine is its capital), Ahmed Bey Palace, Casbah/Rocher identity, cuisine. Remove "How to reach". FAQ: "why City of Bridges", "what is Malouf", "what to see at Ahmed Bey Palace".
- Links: province↔destination cross-teasers; dedup "City of Bridges" FAQ to destination.

## A3 · Tlemcen
- Province owner: planning depth + transport. Destination owner: Andalusian-Islamic monuments (Great Mosque, Mansourah, El Mechouar, Sidi Boumediène), Zianid history, gharnati music, crafts. Drop "how to reach" FAQ from destination.

## A4 · Tipaza *(lowest structural overlap — FAQ split is the main fix)*
- Destination keeps UNESCO-site focus (Roman park, Royal Mausoleum, basilica). Province owns coast/beaches/Cherchell, distance-from-Algiers, where to stay, itineraries.
- FAQ split: keep "Royal Mausoleum" + "what is it known for" on destination; move "how far from Algiers" + "good for beaches" to province.

## C1–C5 · Question ↔ Blog (one repeatable pattern)
- **Question page owns** the concise answer + the head-query FAQ snippet. Keep it tight (≤ ~400 words main): direct answer, 3–5 key facts, one "read the full guide →" link.
- **Blog guide owns** the long-form depth (sub-topics, tables, month-by-month, etc.). Keep its rich FAQs **only for sub-questions the Question page does NOT own** (e.g. safety blog keeps "women travellers / families / driving / scams"; the Question page keeps the head "Is Algeria safe?").
- Internal links: Question → Blog ("full guide"); Blog intro → Question (for the quick answer) and → relevant province/destination.
- **D1 fix:** remove from `/blog/complete-algeria-travel-guide/` `faqs:` every question owned by a Question page (visa, safety, best-time, languages, cost) — replace that block with links to the Question pages. The complete guide keeps planning-specific FAQs ("how many days", "independent travel", "cash or cards", "alcohol").

## D2 · travel-guides hub vs complete guide
- `/travel-guides/` stays a **hub/index** (curated links + 1–2 sentence framing per guide), not prose that re-explains. Link to the complete guide as the flagship.

## D3 · food page vs food blog
- `/food/` owns the **on-site culinary identity/overview** (dishes, the table, regional food culture) as a topic page; `/blog/algerian-food-guide/` owns the **traveller's how/where deep-dive**. Differentiate the near-identical titles (e.g. food page → "The Food of Algeria: Dishes, Flavours & Food Culture"; blog → "Algerian Food: A Traveller's Guide — What & Where to Eat"). Cross-link.

## D4 · UNESCO Q vs page
- `/questions/what-are-algerias-unesco-world-heritage-sites/` = concise list + snippet; `/unesco/` = the full hub linking each destination. Q links to the hub.

## D5 · evisa vs visa-support
- Already differentiated (e-Visa process vs invitation/documentation service). Add explicit cross-links + one-line scope statement on each; low priority.

---

# PHASE 4 — DJANET REFERENCE MODEL (master pattern)

### `/provinces/djanet/` — **OWNER: travel planning**
Owns: flights · permits · accommodation · itineraries · transport · costs · seasonality · planning.
Brief teasers only (with links) for: Tuareg culture → `/destinations/djanet/`; Tassili → `/destinations/tassili-najjer/`; Tadrart Rouge (described here as itinerary, no own page).
- **H1:** "Djanet Travel Guide: Visiting Algeria's Deep Sahara"
- **H2 (after):** Why visit Djanet · Planning at a glance · Getting to Djanet (flights) · Permits & guides · When to go · How many days & sample itineraries · The two desert landscapes (Tassili link + Tadrart described) · Where to stay · Packing & desert safety · Costs · Practical tips
- **FAQ (logistics only):** How do I get to Djanet? · When is the best time? · Do I need a guide & permits? · How many days? · How much does a trip cost?
- **keyFacts:** state #56, flights from Algiers, season Nov–Feb, permits required, typical trip length.

### `/destinations/djanet/` — **OWNER: Tuareg cultural identity of the place** *(not anthropology-only — it is the identity page of Djanet as a place)*
Owns: Tuareg identity · Sebeiba festival · language · music · dress · traditions · oasis life · palm gardens · markets · local culture.
Brief contextual mentions only (with links) for: Tassili, Tadrart, travel logistics → link to province.
- **H1:** "Djanet: Tuareg Heart of the Algerian Sahara"
- **H2 (after):** Overview (living Tuareg oasis) · The Kel Ajjer Tuareg · Language & poetry (Tamahaq/Tifinagh) · Dress & the indigo veil · Music, dance & oral tradition · The Sebeiba festival (UNESCO ICH) · Crafts & silverwork · Markets & oasis life (palm gardens, gueltas) · Desert hospitality · Explore it with us
- **Remove:** "Tassili n'Ajjer" + "Tadrart Rouge" + "Practical/how-to-get-there" sections.
- **FAQ (identity):** Who are the Tuareg of Djanet? · What is the Sebeiba festival? · What is Djanet known for? (moved from province) · What language is spoken?
- **keyFacts:** people (Kel Ajjer Tuareg), language (Tamahaq), festival (Sebeiba/UNESCO ICH), oasis/palm setting.

### `/destinations/tassili-najjer/` — **OWNER: UNESCO heritage, rock art & prehistoric Sahara**
Owns: UNESCO significance · rock art · archaeology · prehistoric Sahara · geology · environmental history · conservation.
Logistics = **one short paragraph** → link all planning to province.
- **H1:** "Tassili n'Ajjer: Algeria's UNESCO Prehistoric Rock-Art Plateau" (keep)
- **H2 (after):** Overview · Why it's a UNESCO World Heritage Site (criteria) · The rock art (~15,000 works) · Reading the green Sahara · The chronological styles (Round Head / Pastoral / Horse / Camel) · The plateau landscape & geology · Conservation & responsible visiting · Explore it with us
- **FAQ (heritage):** What is Tassili famous for? · How old is the art / what does it show? · Why is it a UNESCO site? · What are the rock-art styles? — remove "how do you visit" (→ province).
- **keyFacts:** UNESCO 1982 (mixed criteria), ~15,000 images, rock-art periods, plateau geology, conservation status.

### Djanet trio ownership (before → after)
| Topic | Province | Djanet dest | Tassili dest |
|---|:---:|:---:|:---:|
| Planning/flights/permits/season/itineraries/stay/cost | **OWNER** | link | 1-line + link |
| Tuareg culture / Sebeiba / language / music / markets | teaser+link | **OWNER** | link (descendants) |
| Rock art / UNESCO / green Sahara / styles / conservation | teaser+link | link | **OWNER** |
| Tadrart Rouge | **OWNER** (itinerary) | brief | brief |

---

# PHASES 5–7 (on approval) — execution checklist

**Phase 5 (implement):** edit markdown bodies, frontmatter (seo.title/description retained for ranking continuity), `faqs:`, `keyFacts`, internal links. Preserve URLs, schema @ids, canonicals. Fix the duplicate `<h1>Djanet/Constantine/Tlemcen/Tipaza</h1>` (distinct Hero title per destination).
**Phase 6 (validate):** `npm run build`; verify 0 broken links, 0 duplicate H1s, schema intact (TouristDestination/Attraction unchanged), all meta present, 0 orphans, no FAQ duplicated across pages, breadcrumbs intact, sitemap still 1:1.
**Phase 7 (scale):** apply to Constantine, Tlemcen, Tipaza, then Ghardaïa/M'Zab, then the Question↔Blog set (incl. the complete-guide FAQ purge), then food/UNESCO/hub items.

# FINAL DELIVERABLE INDEX (produced after Phase 5)
1. Before/After structure — per page (drafted above; finalised post-edit)
2. Files modified — list
3. FAQ ownership map — one owner per question
4. Internal linking map — directed edges province↔destination↔blog↔question
5. Topic ownership map — bucket → URL
6. Remaining overlaps — anything intentionally left (e.g. evisa/visa-support low risk)
