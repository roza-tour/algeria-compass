# State photo gaps — real galleries needed (P8 flag)

The owner flagged these **9 states** as still relying on a single / generic
or reused photo and will **supply real photo galleries** for each. This file
is the hand-off checklist — nothing here is fixed automatically.

## How to add a real gallery for a state

1. Drop the photos in `public/assets/img/` (or `public/assets/img/tours/` if
   they double as tour photos). Use descriptive filenames, e.g.
   `oran-front-de-mer.jpg`, `oran-cathedral.jpg`.
2. Edit `src/content/province/<state>.md`:
   - `image:` → the new hero (one strong landscape shot).
   - `gallery:` → 6–10 entries, each `{ src: "...", alt: "descriptive alt" }`.
3. Rebuild. The state page, the homepage states strip and the **image sitemap**
   (`/sitemap-images.xml`) pick the new photos up automatically.

## Flagged states

| State | Content file | Gallery imgs now | Current hero |
|-------|--------------|------------------|--------------|
| Algiers | `src/content/province/algiers.md` | 6 | `/assets/img/algiers-white-city-aerial.jpg` |
| Oran | `src/content/province/oran.md` | 6 | `/assets/img/oran-bay-santa-cruz.jpg` |
| Tlemcen | `src/content/province/tlemcen.md` | 3 | `/assets/img/tlemcen-andalusian-arches.jpg` |
| Constantine | `src/content/province/constantine.md` | 3 | `/assets/img/constantine-sidi-mcid-bridge.jpg` |
| Sétif | `src/content/province/setif.md` | 5 | `/assets/img/setif-tram-centre.jpg` |
| Tipaza | `src/content/province/tipaza.md` | 3 | `/assets/img/tours/tipaza-1.jpg` |
| Batna | `src/content/province/batna.md` | 3 | `/assets/img/timgad-trajan-arch.jpg` |
| Ghardaïa | `src/content/province/ghardaia.md` | 5 | `/assets/img/ghardaia-mzab-panorama.jpg` |
| Djanet | `src/content/province/djanet.md` | 3 | `/assets/img/tours/djanet-2.jpg` |

> Target: each flagged state gets a distinct, owned gallery of **6+ real
> photos** so it no longer leans on a single generic or reused image.
