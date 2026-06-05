# Part 1 — Content Audit & Gap Report

Measured by `/scripts/content-audit.py` (re-runnable). Body-word counts exclude frontmatter.
"Internal links" here counts inline links *in prose*; component-level linking (RelatedGrid,
EntityLinks) is separate and strong — see note below.

## Inventory & metrics (current)

| Collection | Pages | Avg body words | FAQs | Sourced pages | Citations | Inline links/pg |
|---|---|---|---|---|---|---|
| province | 5 | **960** | 40 | 5/5 | 10 | 0 |
| destination | 6 | 156 | 12 | 3/6 | 3 | 0 |
| experience | 4 | 66 | 8 | 1/4 | 1 | 0 |
| article | 6 | 112 | 12 | 0/6 | 0 | 0 |
| question | 3 | 79 | 0 | 0/3 | 0 | 0 |
| editorial | 10 | 395 | — | — | — | 3.4 |
| team / reviewer | 2 | ~270 | — | — | — | 3.0 |

## Scored gap analysis (0–100)

| Dimension | Score | Reading |
|---|---|---|
| Content depth | 42 | Provinces excellent (~960w); destinations/experiences/articles are **stubs** built around structure (heroes, galleries, stops) not prose. |
| Information quality | 70 | What exists is accurate and well-structured; thin where short. |
| Research quality | 55 | Strong on provinces/UNESCO; articles carry **no research apparatus** yet. |
| Citation quality | 38 | Only 14 citations total; **articles 0/6**, experiences 1/4. |
| Practical value | 60 | Good logistics on provinces; weak on destinations/articles. |
| Entity coverage | 84 | 229-entity graph; near-complete structural coverage. |
| Internal linking | 66 | Component linking strong (Related/EntityLinks on pages); **inline contextual links ≈ 0** — a real gap for cornerstone prose. |
| FAQ coverage | 58 | Provinces 8 each; questions collection has **0 FAQ schema of its own**; articles thin. |
| AEO readiness | 64 | QuickAnswer/KeyFacts/FAQ present on most; questions lack QuickAnswer. |
| GEO readiness | 72 | Sourcing + entity schema strong on provinces; weak where citations are absent. |
| AI-citation potential | 60 | Good blocks exist; under-used on destinations/articles/experiences. |
| Topical coverage | 35 | Only ~6 articles vs a 16-cluster map; most cornerstone topics **unwritten** (by design — Phase 3 plans them). |
| Visual content planning | 55 | Real photos on flagship pages; no formal image standard yet (see Part 9). |

**Composite content-system readiness: ~58/100** — strong skeleton, thin flesh, no governing standard. Phase 3 closes the governance/architecture gap; later phases fill content against it.

## Strong pages
`province/algiers, bejaia, ghardaia, setif` (and oran) — depth, 8 FAQs, sourced, gallery, schema.

## Weak pages (content thin — fill later against the new frameworks)
- **All destinations** (casbah-of-algiers, constantine, djanet, djemila, tassili-najjer, tlemcen): 156w avg.
- **All experiences**: 66w avg (rely on stops/itinerary; need narrative + practical depth).
- **All articles**: 112w avg, 0 citations — effectively placeholders.
- **All questions**: 79w, no QuickAnswer, no FAQ schema of their own.

## Missing topics / clusters
12 of 16 clusters in Part 5 have **no pillar yet** (transportation, safety, photography, road-trips, beaches, mountains, architecture, festivals, family, luxury, adventure, planning). Existing articles map only to Sahara/food/culture/UNESCO partially.

## Missing authority signals
- No page declares an **explicit** `author:`/`reviewedBy:` (all rely on the organisational default). Acceptable today, but real named bylines are the single biggest E-E-A-T lever still open.
- Editorial policies sit at ~395 words vs the 1,000–1,500 target.
- No inline citations inside article prose.

## Missing user-intent coverage
Transactional ("Algeria visa requirements 2026"), comparison ("Algeria vs Morocco"), seasonal ("Algeria in April"), and logistics ("how to get to Djanet") intents are largely uncovered. Mapped in Parts 5–6.
