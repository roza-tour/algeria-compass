# Part 3 — Definitive Province Framework (blueprint only)

The canonical structure for every one of the 58 provinces. Maps to the `province`
collection + existing components. Sections marked **core** are required (validator);
others scale with how much there is to say about a province. Target total: **1,800–3,000 words**.

## Page flow & component mapping
`Hero → Byline → QuickAnswer → KeyFacts → [prose sections] → SourceList → EditorialMeta → PhotoGallery → EntityLinks → RelatedGrid(provinces) → CtaSection`

## Section specifications

| # | Section | Core | Words | Required entities | Sources | Internal links | Structured data / block |
|---|---|---|---|---|---|---|---|
| 1 | Hero (name, region, 1-line) | ✔ | — | province, region | — | — | Hero; image+imageAlt |
| 2 | Byline (written/reviewed/updated) | ✔ | — | author, reviewer | — | /team, /reviewers | `author`,`reviewedBy`,`dateModified` |
| 3 | Quick Answer (40–60w direct answer) | ✔ | 40–60 | province | — | — | `QuickAnswer`; speakable |
| 4 | Key Facts (capital, wilaya №, region, best time, getting there) | ✔ | — | province, season, transport | — | — | `KeyFacts` |
| 5 | Overview / Why visit | ✔ | 150–250 | province, 2–3 attractions | ≥0 | 2 | prose |
| 6 | History | ✔ | 200–350 | historical-period(s), roman/islamic/ottoman sites | ≥1 | 2 | `Timeline` (optional) |
| 7 | Geography & landscape | ◐ | 120–200 | mountain/sahara/coast-area | — | 1 | prose |
| 8 | Climate & best time to visit | ✔ | 120–180 | season×4 | ≥0 | 1 | Monthly table (Part 7) |
| 9 | How to get there & transport | ✔ | 120–200 | transport, nearest airport/rail | — | 2 | Practical-info box |
| 10 | Accommodation | ◐ | 100–160 | accommodation types | — | 1 | prose |
| 11 | Top attractions | ✔ | 250–400 | 3–6 attraction entities | ≥1 | 3 (to destinations) | `ItemList`; EntitySnapshot |
| 12 | Hidden gems | ◐ | 120–200 | city/area entities | — | 1 | prose |
| 13 | Culture & people | ◐ | 150–250 | tradition, language, festival | ≥0 | 2 | prose |
| 14 | Architecture | ◐ | 100–180 | architecture type, sites | ≥0 | 1 | prose |
| 15 | Food & markets | ◐ | 120–200 | food, tradition | — | 1 (food cluster) | prose |
| 16 | Crafts | ◐ | 80–140 | tradition | — | 1 | prose |
| 17 | Nature & parks | ◐ | 100–160 | national-park, mountain/coast-area | — | 1 | prose |
| 18 | UNESCO connections | ◐ | 80–150 | unesco entity(ies) | ≥1 (UNESCO) | 1 (UNESCO hub) | LandmarksOrHistoricalBuildings link |
| 19 | Suggested itineraries (1–3 day) | ◐ | 150–250 | attractions, experiences | — | 2 (experiences) | ordered list |
| 20 | Travel-style notes (family / luxury / adventure / photography) | ◐ | 120–220 | theme entities | — | 2 (theme hubs) | "good for" callouts |
| 21 | Road trips | ◐ | 80–150 | road-trips theme, neighbouring provinces | — | 1 | prose |
| 22 | Costs | ◐ | 80–140 | — | — | — | Travel-cost table (Part 7) |
| 23 | Safety & practical | ✔ | 100–180 | safety theme | ≥0 (gov advisory if claimed) | 1 (safety guide) | Practical-info box |
| 24 | Expert notes | ◐ | 60–120 | — | — | — | Expert-recommendation block |
| 25 | FAQs (≥6, ≥8 flagship) | ✔ | — | province | — | — | `FaqSection` → FAQPage |
| 26 | Sources | ✔ | — | — | render all | — | `SourceList`; `citation` |
| 27 | Editorial meta (reviewed/updated/report error) | ✔ | — | reviewer | — | — | `EditorialMeta` |
| 28 | Photo gallery | ◐ | — | — | — | — | `PhotoGallery` (each {src,alt}) |
| 29 | Related entities | ✔ | — | discover(province.id) | — | many | `EntityLinks` (graph-driven) |
| 30 | Related provinces | ✔ | — | same-region provinces | — | 3–6 | `RelatedGrid` |
| 31 | Related experiences | ◐ | — | experiences in region | — | 1–3 | cards |
| 32 | CTA (plan a journey) | ✔ | — | — | — | /contact | `CtaSection` (editorial tone) |

## AI / search blocks required on every province
- **AI-citation block**: QuickAnswer (≤60w) + KeyFacts (5–7 rows). 
- **Featured-snippet block**: one definition-style sentence + a 3–6 item list (attractions or best-time).
- **Voice-search block**: at least 3 FAQs phrased as natural questions ("When is the best time to visit X?").
- **Schema block**: `AdministrativeArea` with `containedInPlace` (province→region→country), `geo`, `identifier` (DZ-NN), plus FAQPage + Breadcrumb (auto from template).
- **Knowledge-graph block**: `EntityLinks` fed by `discover(province.id)` — attractions, UNESCO, neighbours, themes, periods, food, architecture.

## Required-source policy for provinces
≥1 authoritative source overall; if the province contains a UNESCO site, the UNESCO list URL is mandatory; history claims need an encyclopaedic/scholarly source. Provinces with a flagship destination SHOULD reach ≥2 sources.

## Definition of done (province)
Total 1,800–3,000w · all **core** sections present · ≥6 FAQs · ≥1 source (≥2 flagship) · hero+gallery with correct alts · QuickAnswer+KeyFacts · EntityLinks populated · validator green.
