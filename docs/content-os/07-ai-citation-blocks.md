# Part 7 — AI Citation System (reusable answer-engine blocks)

Blocks designed so AI assistants and answer engines can lift a clean, correct answer.
Each page composes from these. ✅ = component already exists in `src/components`;
🛠 = pattern to add as a small component when the content-build phase starts (spec given).

| Block | Status | Component / pattern | Purpose & rule |
|---|---|---|---|
| Quick Answer | ✅ | `QuickAnswer.astro` | ≤60w direct answer to the page's core question. First textual block after the hero. Marked speakable. |
| Key Facts | ✅ | `KeyFacts.astro` | 5–7 label/value rows of the most-asked hard facts. Render as `<dl>`. |
| Key Takeaways | 🛠 | bulleted callout (3–6 items) | Skimmable conclusions near the top of long guides. One sentence each, fact-first. |
| Comparison Table | ✅ | `ComparisonTable.astro` | columns + rows; the centrepiece of comparison guides; also dish×region, mode×cost. |
| Timeline | ✅ | `Timeline.astro` | era → title → note; history guides and province history sections. |
| Monthly Breakdown Table | 🛠 | `ComparisonTable` preset | months × (weather, crowds, desert OK?, verdict). For "best time" + Sahara. |
| Travel Cost Table | 🛠 | `ComparisonTable` preset | item × budget/mid/high. **Costs as ranges, dated, never fabricated.** |
| Practical Information Box | 🛠 | bordered `<aside>` | getting there / hours-reality / permits / what to bring. Scannable key→value. |
| Common Mistakes | 🛠 | titled list | "Mistake → do this instead." Strong for visa/safety/desert. |
| Expert Recommendations | 🛠 | callout w/ attribution | named once real reviewers exist; until then "Algeria Compass recommends…". No fake authority. |
| Trip Planning Block | 🛠 | structured panel | who-it-suits, days needed, pair-with, season. Links to plan-a-journey (soft). |
| Voice Search Block | ✅ (via FAQ) | `FaqSection` | ≥3 natural-question FAQs; conversational phrasing; FAQPage schema. |
| Featured Snippet Block | pattern | definition sentence + 3–8 list/table | one paragraph (40–55w) **or** a clean list directly answering the head term. |
| Answer Engine Block | pattern | QuickAnswer + KeyFacts + FAQ together | the standard "AEO triad" present on every substantive page. |
| Entity Snapshot | ✅ | `EntitySnapshot.astro` | machine-readable entity card (type, region, coords, status, sources). |
| Entity Links | ✅ | `EntityLinks.astro` + `discoveryGroups()` | graph-driven related links; no random linking. |
| Source List | ✅ | `SourceList.astro` | renders `sources[]`; emits `citation` schema. |

## Rules for every AI block
- **Self-contained & literally true** — a block must be liftable out of context and still correct.
- **No fabrication** — numbers, prices, dates, statuses must be sourced or omitted; ranges over false precision.
- **Front-loaded** — the answer triad (QuickAnswer + KeyFacts + FAQ) appears high on the page.
- **Structured markup** — tables as `<table>`, facts as `<dl>`, steps as `<ol>`, FAQs as FAQPage; lets engines parse without guessing.
- **Speakable** — QuickAnswer + FAQ answers stay ≤ ~50 words and are plain-spoken for voice.
- **Schema-paired** — each block has a schema counterpart (FAQPage, ItemList, HowTo, Article.citation).

## The mandatory "AEO triad"
Every province, destination, guide and question MUST ship: `QuickAnswer` + `KeyFacts` +
`FaqSection`. The validator (Part 8) fails a substantive page that is missing the triad.

## New-component build spec (for the content phase, not now)
Each 🛠 block is a ≤40-line Astro component taking typed props, using existing CSS tokens,
no external deps, schema-aware. Build them once, reuse everywhere. Do **not** build during
Phase 3 (architecture only) — they are specified here so the build phase is mechanical.
