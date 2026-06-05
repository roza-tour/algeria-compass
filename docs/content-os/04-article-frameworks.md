# Part 4 — Definitive Article Frameworks (templates only)

Nine article types, each with a fixed skeleton mapped to the `article` (or `question`)
collection and existing components. Common spine for all article types:

**Spine:** `Hero → Byline → QuickAnswer (≤60w) → KeyFacts/Key Takeaways → [type sections] → FAQs → SourceList → EditorialMeta → EntityLinks → CTA`

Common requirements (all types): exactly one H1; QuickAnswer; ≥1 AI-citation block;
FAQPage (≥3 Q) where relevant; ≥3 inline contextual internal links; links up to its
cluster pillar; `updated`+`lastReviewed`; valid Article schema (author, reviewedBy, dateModified, citation).

---

## A. Travel Guides (destination/region "things to do", "X travel guide")
- **Sections:** intro/why · top things to do (ItemList) · best time · getting there · where to stay · suggested itinerary · practical tips · safety note · FAQs.
- **Length:** 1,500–2,500w. **Citations:** ≥2. **Entities:** the place + ≥5 related (attractions, province, region). **FAQs:** ≥5. **Schema:** Article + ItemList + FAQPage. **Conversion:** soft CTA to plan a journey. **Links:** pillar + ≥4 entities.

## B. History Guides
- **Sections:** overview · chronological eras (Timeline) · key sites today · legacy/why it matters · visiting the history · FAQs.
- **Length:** 1,800–3,000w. **Citations:** ≥4 (encyclopaedic/scholarly). **Entities:** historical-period(s) + roman/islamic/ottoman sites + provinces. **FAQs:** ≥4. **Schema:** Article + (optional) `Event`/`Place` + FAQPage. **AI block:** Timeline + Key Takeaways.

## C. Food Guides
- **Sections:** food culture intro · dish-by-dish (each = name, what it is, where) · regional variations · drinks/tea · etiquette · where to try · FAQs.
- **Length:** 1,500–2,400w. **Citations:** ≥2 (incl. couscous UNESCO ICH where relevant). **Entities:** food entities + regions. **FAQs:** ≥4. **Schema:** Article + ItemList; per-dish optional. **AI block:** Comparison table (dish × region × notes).

## D. UNESCO Guides
- **Sections:** what/why inscribed · history · what to see · visiting (access, time, season) · conservation · nearby · FAQs.
- **Length:** 1,500–2,200w. **Citations:** ≥2 incl. **mandatory UNESCO list URL**. **Entities:** the UNESCO entity + province + period + theme. **FAQs:** ≥4. **Schema:** Article + LandmarksOrHistoricalBuildings + FAQPage. **AI block:** Quick Facts (inscription ref, criteria, province, best time).

## E. Transportation Guides
- **Sections:** overview of options · by air/rail/road/shared-taxi/metro-tram · routes & realities · costs (table) · booking/permits · accessibility · FAQs.
- **Length:** 1,200–2,000w. **Citations:** ≥1 (operator/gov where possible). **Entities:** transport entities + cities. **FAQs:** ≥5. **Schema:** Article + HowTo (optional) + FAQPage. **AI block:** Practical-info box + cost table. **Update cadence:** ≤12 months.

## F. Practical Guides (visa, safety, money, connectivity, when-to-go)
- **Sections:** direct answer first · requirements/details · step-by-step · exceptions · official-source pointer · FAQs.
- **Length:** 1,000–1,800w. **Citations:** ≥2 official/authoritative (**mandatory** for visa & safety). **Entities:** relevant theme + country. **FAQs:** ≥6. **Schema:** Article/FAQPage + HowTo (visa). **AI block:** Common Mistakes + Practical-info box. **Update cadence:** **≤6 months** (visa/safety).

## G. Comparison Guides ("Algeria vs Morocco", "Tassili vs Tadrart")
- **Sections:** at-a-glance verdict · comparison table · dimension-by-dimension · who each suits · FAQs.
- **Length:** 1,200–2,000w. **Citations:** ≥2. **Entities:** both subjects + shared themes. **FAQs:** ≥4. **Schema:** Article + ItemList. **AI block:** **Comparison table is the centrepiece** (`ComparisonTable`).

## H. FAQ Guides / Q&A (the `question` collection)
- **Sections:** `shortAnswer` (≤50w) · full answer · context/exceptions · related questions · sources.
- **Length:** 400–900w. **Citations:** ≥1 (≥2 if safety/visa/health). **Entities:** topic entities. **Schema:** **QAPage** + speakable. **AI block:** the shortAnswer is the answer-engine target. **Fix from audit:** add a QuickAnswer-equivalent + ≥1 source to every question page.

## I. Knowledge Pages (hub/entity pages — `/knowledge/*`)
- **Sections:** definition/QuickAnswer · entity inventory (EntitySnapshots) · everything-in-hub (EntityLinks) · plan-around-this (cards) · FAQs.
- **Length:** flexible; driven by graph. **Schema:** CollectionPage + ItemList + DefinedTerm + FAQPage. **Rule:** generated from the entity graph, never hand-listed; no empty hubs.

---

## Per-type quick reference
| Type | Length | Min sources | Min FAQs | Centerpiece AI block | Update cadence |
|---|---|---|---|---|---|
| Travel guide | 1,500–2,500 | 2 | 5 | ItemList + QuickFacts | 12 mo |
| History | 1,800–3,000 | 4 | 4 | Timeline | 24 mo |
| Food | 1,500–2,400 | 2 | 4 | Comparison table | 24 mo |
| UNESCO | 1,500–2,200 | 2 (UNESCO URL) | 4 | Quick Facts | 24 mo |
| Transport | 1,200–2,000 | 1 | 5 | Cost table | 12 mo |
| Practical | 1,000–1,800 | 2 (official) | 6 | Common mistakes | 6 mo |
| Comparison | 1,200–2,000 | 2 | 4 | Comparison table | 18 mo |
| Q&A | 400–900 | 1–2 | n/a | shortAnswer | 12 mo |
| Knowledge | graph-driven | per entity | 3 | EntitySnapshot/Links | with graph |
