# Part 9 — Visual Content Strategy (image architecture)

No images are added in this phase. This is the standard every future image obeys, building on
the real pipeline already used (PIL: EXIF-strip, orientation-fix, resize, descriptive names).

## Universal image rules (MUST)
- **Real & rights-cleared.** Own photos, licensed, or properly free-licensed — provenance recorded. No AI-generated images of real places presented as real. No scraped/unlicensed stock.
- **Correct entity match.** The image must depict the place/subject of the page (validated against the entity it maps to). A photo of place A never illustrates place B.
- **Privacy & hygiene.** Strip EXIF (incl. GPS); fix orientation; no identifiable private individuals without basis.
- **Optimised.** Long edge ≤1500–2000px for heroes, ≤1200px for gallery; JPEG q≈82 (or WebP/AVIF when the pipeline supports it); target <300KB.
- **Named descriptively.** `place-subject.jpg` (e.g. `constantine-sidi-mcid-bridge.jpg`) — slug-style, lowercase, hyphenated.
- **Lazy-loaded** below the fold (`loading="lazy"`, `decoding="async"`); hero eager.

## Per-type standards
| Type | Ratio / size | Notes |
|---|---|---|
| Hero | landscape, ≥1600px wide, ~16:9 crop-safe | text overlays left; avoid busy centres; subject reads at small sizes |
| Province gallery | 4–6 images, mixed | cover the province's range (city, landscape, heritage, life) |
| Destination gallery | 3–6 images | the specific site from multiple angles |
| Food photography | top-down or 45°, natural light | dish identifiable; context props minimal |
| Architecture | straight verticals, golden hour | show form + detail; one wide + one detail |
| Landscape | wide, foreground interest | true colour; no over-saturation |
| UNESCO | establishing + detail + context | caption must name the site + inscription |

## Metadata, alt text & captions (MUST)
- **Alt text:** describe what's shown + place, ≤125 chars, no "image of"; e.g. *"The Sidi M'Cid suspension bridge over the Rhumel gorge, Constantine."*
- **Caption (where shown):** factual; may add context/credit. Captions are content — accuracy rules apply.
- **Credit/licence:** stored in the asset register (filename → {alt, credit, licence, entityId, source}).
- **Filename = descriptive slug** (above).

## Image schema standards
- Heroes/gallery may emit `ImageObject` (contentUrl, caption, representativeOfPage for hero).
- Page `image` flows into OG/Twitter (already in `Seo.astro`) — must be a real, relevant file.
- For UNESCO/landmark images, associate with the entity `@id` (the place the image depicts).

## Entity-mapping standard
Every published image is registered against an **entity id** from the graph (e.g.
`unesco:djemila`), so galleries, hubs and schema can be generated and de-duplicated, and so a
photo is never reused to depict a different place. Maintain `docs/content-os/asset-register.json`
(filename → {alt, entityId, credit, licence}) as images are added.

## Production pipeline (reuse what exists)
1. Source & confirm rights → 2. EXIF-strip + orient + resize (PIL) → 3. descriptive name →
4. write alt + register entityId/credit → 5. place as hero/gallery → 6. visual review gate (Part 8).
