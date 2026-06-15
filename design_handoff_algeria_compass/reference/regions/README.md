# Algeria Compass — The Regions (8 طبوع · 3D experience)

A visually-rich, interactive recreation of Algeria as **eight distinct regions**, each with its own colour world, geometric ornament, archaeological sites and 3D treatment.

## The eight طبوع
| # | Region | Colour | Ornament | Sites |
|---|--------|--------|----------|-------|
| 01 | **Algiers & the Casbah** | Mediterranean teal | Ottoman 8-point star | Casbah, Ketchaoua, Maqam Echahid |
| 02 | **Constantine** | plum | interlaced arches | Sidi M’Cid bridge, Emir Abdelkader mosque |
| 03 | **Roman Algeria** | terracotta red | Greek-key meander | Djémila, Timgad, Tipaza |
| 04 | **The M’Zab** | amber | cubist nested squares | Ghardaïa, Beni Isguen |
| 05 | **The Sahara** | burnt orange | Tuareg cross | Tassili n’Ajjer, Tadrart, Djanet |
| 06 | **Tlemcen & the West** | Andalusian teal-blue | sebka lattice | Mansourah, Oran, Santa Cruz |
| 07 | **Béjaïa & Kabylie** | sea blue | Amazigh chevrons | Cap Carbon, Gouraya, old medina |
| 08 | **Bou Saâda** | rose-clay | radiating sun | El Hamel, palm groves, the Hodna |

Colours are drawn from the brand’s own per-tour accent system (`src/data/tour-visuals.ts`). Each region’s pattern + emblem are generated SVGs in `assets/regions/`.

## The 3D
- **Hub** — every region is an interactive **3D tilt card** that rotates toward the cursor, with its emblem and label lifted on raised planes (`translateZ`), its pattern in screen-blend, and a colour scrim.
- **Region hero** — a **parallax** stage: the photo, the ornament layer and the title drift independently with the cursor and on scroll.
- **Monuments** — each archaeological site is a **3D-tilting card** on a perspective stage, with a cursor-tracking sheen and a raised info plate.
- **Intro medallion** — a slowly-rotating emblem in a tinted glass disc.

## Files
- `index.html` — entry; routes the hub ↔ the eight region pages.
- `regions.css` — the colour-driven layout + 3D styles (reads `--rc / --rc-d / --rc-l / --pat`).
- `engine.jsx` — the 3D engine: `Tilt3D`, `MonumentCard`, `ParallaxHero`.
- `data.jsx` — the eight region configs (colour, ornament, hero, monuments, culture, facts).
- `pages.jsx` — `RegionHub` + `RegionPage`.

All photography is the real location-correct tour library in `assets/img/tours/`.
