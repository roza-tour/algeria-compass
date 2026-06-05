# Part 5 — Content Cluster Architecture

Sixteen topical clusters. Each = one **pillar** (cornerstone guide, specced in Part 6) +
supporting articles + FAQ pages + the matching **knowledge hub** (`/knowledge/<slug>/`,
already built) + the **entities** that anchor it. Hub-and-spoke: every supporting page links
up to its pillar; the pillar links down to all spokes and across to its knowledge hub.

## Linking law
`supporting article → pillar` (up) · `pillar → all supporting` (down) · `pillar ↔ knowledge hub` (across) ·
`any page → entities via graph` (EntityLinks). No orphan articles: a page without a cluster is not publishable.

## Cluster master table

| # | Cluster | Pillar (Part 6) | Knowledge hub | Anchor entities |
|---|---|---|---|---|
| 1 | Travel Planning | Complete Algeria Travel Guide | /knowledge/travel-planning/ | seasons, transport, accommodation, visa |
| 2 | Culture | Algeria Culture Guide | /knowledge/culture/ | tradition×8, festival×5, language×7 |
| 3 | History | Algeria History Guide | /knowledge/history/ | historical-period×10, roman/islamic/ottoman sites |
| 4 | Food | Algeria Food Guide | /knowledge/cuisine/ | food×13 |
| 5 | UNESCO | Algeria UNESCO Guide | /knowledge/unesco/ | unesco×7 |
| 6 | Sahara | Algeria Sahara Guide | /knowledge/sahara/ | sahara-area×7, Tassili, Tadrart, Hoggar |
| 7 | Transportation | Algeria Transportation Guide | /knowledge/travel-planning/ | transport×8, airports, SNTF |
| 8 | Safety | Algeria Safety Guide | /knowledge/travel-planning/ | safety theme, regions |
| 9 | Photography | Algeria Photography Guide | /knowledge/photography/ | sahara/mountain/coast areas, UNESCO |
| 10 | Road Trips | Algeria Road Trip Guide | /knowledge/road-trips/ | provinces, corridors, areas |
| 11 | Beaches/Coast | Algeria Beaches & Coast Guide | /knowledge/coast/ | coast-area×6, Tipaza |
| 12 | Mountains | Algeria Mountains Guide | /knowledge/mountains/ | mountain-area×7, national-park |
| 13 | Architecture | Algeria Architecture Guide | /knowledge/architecture/ | architecture×8, M'Zab, Casbah, Tlemcen |
| 14 | Festivals | Algeria Festivals Guide | /knowledge/culture/ | festival×5 (Yennayer, Sebeiba…) |
| 15 | Family Travel | Algeria Family Travel Guide | /knowledge/family/ | coast, accessible UNESCO, parks |
| 16 | Luxury Travel | Algeria Luxury Travel Guide | /knowledge/luxury/ | premium stays, private desert, UNESCO |

## Per-cluster specs (pillar → spokes → FAQs → intent)

### 1. Travel Planning
- **Spokes:** When to visit Algeria · Algeria visa guide · Getting around Algeria · Algeria travel budget/costs · Is Algeria safe · What to pack · Connectivity & money.
- **FAQs:** Do I need a visa? Is it safe? Best month? How many days? Is it expensive?
- **User journey:** discovery → reassurance (safety/visa) → logistics → itinerary → plan a journey.
- **AI-citation:** QuickFacts (visa/best-time/currency/language), Common Mistakes.

### 2. Culture
- **Spokes:** Amazigh culture · Algerian music (raï, Andalusian) · Crafts & carpets · Etiquette & customs · Languages of Algeria · Religion & daily life.
- **FAQs:** What language? What to wear? Customs to know? **Intent:** informational/cultural.

### 3. History
- **Spokes:** Numidian kingdoms · Roman Algeria · Islamic & medieval dynasties · Ottoman Regency · French colonial era · War of independence.
- **FAQs:** Who were the Numidians? Why so many Roman ruins? **AI block:** Timeline.

### 4. Food
- **Spokes:** Couscous · Street food · Regional dishes (east/west/south) · Pastries & sweets · Tea & hospitality · Vegetarian in Algeria.
- **Intent:** informational + planning. **AI block:** dish comparison table.

### 5. UNESCO
- **Spokes:** one guide per site ×7 (Tassili, M'Zab, Djémila, Tipasa, Timgad, Kasbah, Beni Hammad).
- **FAQs:** How many sites? Which to prioritise? **Source:** UNESCO URL mandatory each.

### 6. Sahara
- **Spokes:** Tassili n'Ajjer · Tadrart Rouge · Hoggar/Assekrem · Oasis towns (M'Zab, Timimoun) · Desert safety · Best time for the desert · What to pack.
- **Intent:** high-purchase-intent + awe. **AI block:** monthly suitability table.

### 7. Transportation — Spokes: flights, SNTF rail, intercity bus, shared taxis (louage), Algiers metro/tram, driving & 4x4, airport guide. **Update:** 12 mo.
### 8. Safety — Spokes: general safety, solo travel, women travellers, desert/south advisories, health. **Source:** official advisories. **Update:** 6 mo.
### 9. Photography — Spokes: Sahara, M'Zab, Casbah, Constantine gorges, coast; gear & light; permissions/etiquette.
### 10. Road Trips — Spokes: Roman north-east loop, coast drive, M'Zab/oasis loop, Algiers→Constantine, Saoura. **AI block:** route cost/time table.
### 11. Beaches/Coast — Spokes: Jijel Corniche, Béjaïa, Oran/Les Andalouses, Tipaza, Annaba/El Kala.
### 12. Mountains — Spokes: Djurdjura, Aurès & Ghoufi, Hoggar, Babor; trekking; cedar parks.
### 13. Architecture — Spokes: M'Zab/Mozabite, Casbah/Ottoman, Roman, Hispano-Moorish Tlemcen, French-colonial, Saharan ksour.
### 14. Festivals — Spokes: Yennayer, Sebeiba (Djanet), Timgad Festival, Raï festival, Ghardaïa carpet festival. **AI block:** calendar table.
### 15. Family Travel — Spokes: coast for families, easy Roman sites, oasis trips, practical with kids.
### 16. Luxury Travel — Spokes: private desert expeditions, heritage journeys, best stays, tailored access.

## Search-intent coverage (across clusters)
Informational (history/culture/food), navigational (place names), commercial-investigation
(best time, comparisons, itineraries), transactional (visa, how to get to X, plan a journey).
Each cluster's pillar must explicitly answer the top informational + commercial-investigation
query for its topic in its QuickAnswer.
