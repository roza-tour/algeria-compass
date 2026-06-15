# Handoff: Algeria Compass — website & design system

## How to use this bundle
Give **`PROMPT.md`** directly to Claude Code (or any coding agent). It is a complete, self-sufficient build brief: brand, exact design tokens, fonts, all 11 homepage sections with verbatim copy + truthful tours data, the 8-region 3D experience, the motion system, the asset sources, a suggested file structure, and acceptance criteria. Start it with something like:

> “Read PROMPT.md and build the Algeria Compass site locally. Start with the homepage in full, confirm it visually, then do the Regions experience and scaffold the remaining pages. Use the files in /reference as the source of truth for exact values and layout.”

## About the design files
Everything in **`reference/`** is a **design reference created in HTML/CSS/JS** — prototypes showing the intended look and behaviour, **not** production code to paste. The task is to recreate them idiomatically in a real codebase (Astro recommended; Next.js fine). These are **high-fidelity** mockups: final colours, type, spacing and interactions — recreate them pixel-faithfully.

## What's in `reference/`
- `styles.css` + `tokens/` — the real global stylesheet and token layers (colours, typography, spacing). Exact values to copy in.
- `homepage/` — the full homepage prototype (`index.html`, `home.css`, `home.js`). The source of truth for section order, copy, the tours table, civilisations content, and the FAQ text.
- `regions/` — the 8-region 3D experience (`regions.css`, `engine.jsx`, `data.jsx`, `pages.jsx`) — hub + per-region pages, the tilt/parallax engine, and all region data.
- `assets/regions/` — 8 seamless geometric patterns + 8 line-art emblems (one per civilisation/region), already generated.
- `components/` — reusable primitives (Button, Badge, Card, QuickAnswer, FactsBox, Byline, EntitySnapshot, SourceList) with `.d.ts` prop contracts and `.prompt.md` usage notes.
- `DESIGN-SYSTEM-README.md` — the full brand guide: content fundamentals (voice/tone), visual foundations, iconography.

## Assets to fetch
Logos and photography are **not** all bundled here (to keep the zip light). Pull them from the brand repo **github.com/roza-tour/algeria-compass** → `assets/img/` and `assets/img/tours/` (see `assets/img/tours/INVENTORY.txt`). `PROMPT.md` §8 lists exactly which files each section needs.

## Source-of-truth data (do not invent)
`src/data/tours.json`, `src/data/tour-visuals.ts`, and `src/components/CivilizationsExplorer.astro` in that repo hold the real tour facts, prices and civilisation copy. Never fabricate reviews, ratings, prices, authors or facts. WhatsApp number: `213784193176`.
