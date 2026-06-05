# Algeria Compass — Content Operating System (Phase 3)

This is the system that produces the content, not the content itself. Every future
page on algeriacompass.com is governed by the documents in this folder. Nothing is
published at scale until a page passes the validator in `/scripts/validate-content.py`.

## How the system fits together
1. **Audit & gaps** (`01`) — where we are today, measured, with a scored gap report.
2. **Governance standards** (`02`) — the non-negotiable rules every page obeys.
3. **Province framework** (`03`) — the definitive blueprint for a province page.
4. **Article frameworks** (`04`) — blueprints per article type (guide, history, food, UNESCO…).
5. **Cluster architecture** (`05`) — the 16 topical clusters: pillar → supporting → FAQ → entities.
6. **Cornerstone blueprints** (`06`) — full specs for the 14 flagship guides (not the content).
7. **AI-citation blocks** (`07`) — the reusable answer-engine components every page can drop in.
8. **Quality control** (`08`) — the 11-gate publishing checklist + the runnable validator.
9. **Visual standards** (`09`) — image architecture, metadata, alt-text and schema rules.
10. **Phase-3 report** (`10`) — everything created, improvements, remaining weaknesses, next phase.

## Ground truth this system is built on (already in the codebase)
- **Collections** (`src/content/config.ts`): province, destination, experience, article, question, editorial, team, reviewer — all share trust fields (author, reviewedBy, lastReviewed, sources).
- **Entity graph** (`src/data/algeria.ts`, `src/lib/graph.ts`): 229 entities / 26 types, the source of all entity links.
- **AI/extraction components**: `QuickAnswer`, `KeyFacts`, `FaqSection`, `EntitySnapshot`, `EntityLinks`, `ComparisonTable`, `Timeline`, `SourceList`, `Byline`, `EditorialMeta`, `PhotoGallery`.
- **Schema**: `SchemaGraph` (Organization/WebSite/Country), `entitySchema.ts` (Place/AdministrativeArea/Museum/Landmark/DefinedTerm/ItemList/CollectionPage), per-template Article/TouristTrip/QAPage/FAQ/Breadcrumb.
- **Editorial layer**: 10 published policies under `/editorial/`, plus `/team/` and `/reviewers/`.

## Operating principle
Quantity is downstream of system. We do not publish a page type until its framework here is
complete, its cluster slot is defined, and it can pass the validator. This is what keeps a
multi-year, multi-hundred-page build consistent and citable.
