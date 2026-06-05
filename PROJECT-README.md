# Algeria Compass — Complete Project (final, updated)

The definitive independent English travel-intelligence platform for Algeria.
Static Astro site, built for cPanel deployment. This archive is the full, current state
of everything built across all phases.

## What's inside
- `src/` — full source: pages, layouts, components (39), content collections, data + lib (engines).
- `dist/` — the BUILT site (91 pages). Upload the **contents of this folder** to `public_html/`.
- `public/` — static assets incl. 91 EXIF-stripped real photos.
- `docs/content-os/` — the Content Operating System: 13 docs + reports + validation/cluster JSON.
- `scripts/` — `content-audit.py`, `validate-content.py` (advanced validator, 5 scores).
- Brand + voice guides, this README.

## Quick deploy (no build needed)
Upload everything inside `dist/` to your `public_html/`. The `.htaccess` (HTTPS, compression,
cache, 404) is included. Done.

## Develop / rebuild locally
```
npm install
npm run dev      # local preview
npm run build    # regenerate dist/
python3 scripts/validate-content.py   # content quality gate (5 scores, severity levels)
```

## Architecture (current)
- **Knowledge graph:** 229 entities / 26 types, 622 edges (`src/data/algeria.ts`, `src/lib/graph.ts`).
- **Cluster system:** 16 clusters as first-class entities + intent taxonomy (10) + engines
  (`src/data/clusters.ts`, `src/data/intents.ts`, `src/lib/clusters.ts`, `src/lib/recommend.ts`).
- **Hubs:** `/knowledge/` (entity/theme) + `/clusters/` (content clusters) + JSON exports.
- **AI components:** 24 publishing-grade extraction blocks.
- **Authority pillars (5):** Complete Travel Guide, Visa, Safety, Best Time, Transportation —
  all pass the validator at 100/100/100 (publishing/authority/AI).

## Integrity (last build)
91 pages · 0 broken links · 0 broken images · 0 JSON-LD errors · 0 empty clusters.

## Standing rules baked into the project
- No fabricated facts, prices, reviews, credentials or named authors. Sensitive numbers
  (visa fees, costs, advisory levels) are written as ranges + "confirm official source".
- Authorship is honest org-level ("editorial-team" / "editorial-review").
- Brand: deep green #0B261A, gold #D6A636, cream #F6EFE0; domain algeriacompass.com.

## Known open items
- Pillar word counts (1,082–1,518) are below the brief's 3,000+ aspiration — dense over padded, by choice.
- No named bylines yet (biggest open E-E-A-T lever).
- Content backlog: ~19 thin/unsourced pages still blocked by the validator (future content phase).
- Missing photos: Béjaïa + Djémila Roman-ruins (to add when supplied).
