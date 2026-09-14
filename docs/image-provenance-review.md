# Image provenance — needs the owner's confirmation

**Status: open. Nothing here has been deleted.**

## What was found

While placing unused photographs onto pages that needed them, the image
library turned out to be three different things wearing the same filenames.

1. **`assets/img/clients/` — the owner's own photographs.** 556 files at
   768x1024, 825x1100, 1100x825 and 540x960: ordinary phone-camera aspect
   ratios, resized through one pipeline. No third-party watermarks were seen
   in the sample opened. These are safe to publish and consent is confirmed;
   eleven of them are now live at `/moments/`.

2. **`assets/img/tours/` and `assets/img/` — mixed, and part of it looks
   sourced from social media.** `tours/tlemcen-7.jpg` carries a visible TikTok
   watermark for an account that is not ours. Beyond that single provable
   case, 123 files in these two folders are exactly 736 or 675 pixels wide.
   736px is Pinterest's standard rendered image width. None of the 178 files
   in `tours/` carries camera EXIF.

3. **Photographs that simply should not be published.** `tours/setif-5.jpg`
   is the Ain El Fouara fountain behind blue construction hoarding.

## Why this matters

70 of the 123 are already rendered on live pages. If they were saved from
Pinterest or TikTok, the site is republishing other photographers' work
commercially. Width alone is not proof — a designer may have resized to 736px,
or the owner may have downloaded her own photographs back off Pinterest — which
is exactly why this is a list to confirm rather than a list to act on.

## What was done, and not done

- `/moments/` publishes only client photographs.
- Two photographs added to the Tlemcen and Timgad galleries earlier in the
  same session were **withdrawn** once this was measured, because both are
  736px wide. `tours/batna-timgad-9.jpg` (764px) was kept.
- Nothing was deleted, renamed or moved.

## What is needed

For each block below, confirm we own it or replace it. The client library is
large and clean — for most of these there is likely a replacement already in
`clients/`.


### Currently live (70) — highest priority

- `assets/img/tours/algiers-10.jpg`
- `assets/img/tours/algiers-5.jpg`
- `assets/img/tours/algiers-7.jpg`
- `assets/img/tours/algiers-8.jpg`
- `assets/img/tours/algiers-9.jpg`
- `assets/img/tours/batna-timgad-11.jpg`
- `assets/img/tours/batna-timgad-6.jpg`
- `assets/img/tours/bejaia-1.jpg`
- `assets/img/tours/bejaia-3.jpg`
- `assets/img/tours/bejaia-4.jpg`
- `assets/img/tours/bejaia-5.jpg`
- `assets/img/tours/bousaada-1.jpg`
- `assets/img/tours/constantine-2.jpg`
- `assets/img/tours/constantine-4.jpg`
- `assets/img/tours/djanet-3.jpg`
- `assets/img/tours/djanet-5.jpg`
- `assets/img/tours/djanet-8.jpg`
- `assets/img/tours/djanet-9.jpg`
- `assets/img/tours/djemila-1.jpg`
- `assets/img/tours/djemila-3.jpg`
- `assets/img/tours/ghardaia-1.jpg`
- `assets/img/tours/ghardaia-2.jpg`
- `assets/img/tours/ghardaia-5.jpg`
- `assets/img/tours/oran-1.jpg`
- `assets/img/tours/oran-5.jpg`
- `assets/img/tours/setif-1.jpg`
- `assets/img/tours/tipaza-1.jpg`
- `assets/img/tours/tipaza-3.jpg`
- `assets/img/tours/tipaza-5.jpg`
- `assets/img/tours/tipaza-9.jpg`
- `assets/img/tours/tlemcen-1.jpg`
- `assets/img/tours/tlemcen-3.jpg`
- `assets/img/tours/tlemcen-4.jpg`
- `assets/img/tours/tlemcen-6.jpg`
- `assets/img/algiers-boulevards-aerial.jpg`
- `assets/img/algiers-colonial-corner.jpg`
- `assets/img/algiers-emir-fountain.jpg`
- `assets/img/algiers-great-mosque.jpg`
- `assets/img/algiers-martyrs-trees.jpg`
- `assets/img/algiers-white-city-aerial.jpg`
- `assets/img/bou-saada-gorge.jpg`
- `assets/img/bou-saada-town-aerial.jpg`
- `assets/img/casbah-old-city-mosque.jpg`
- `assets/img/casbah-old-street.jpg`
- `assets/img/constantine-ahmed-bey-courtyard.jpg`
- `assets/img/constantine-ahmed-bey-gallery.jpg`
- `assets/img/constantine-emir-mosque.jpg`
- `assets/img/constantine-gorge.jpg`
- `assets/img/constantine-monument-morts.jpg`
- `assets/img/djanet-guelta-palms.jpg`
- `assets/img/ghardaia-ksar-lane.jpg`
- `assets/img/ghardaia-market-square.jpg`
- `assets/img/ghardaia-mzab-minaret.jpg`
- `assets/img/oran-bay-santa-cruz.jpg`
- `assets/img/oran-cathedral.jpg`
- `assets/img/oran-hotel-de-ville.jpg`
- `assets/img/oran-port-aerial.jpg`
- `assets/img/oran-santa-cruz-chapel.jpg`
- `assets/img/oran-striped-tower.jpg`
- `assets/img/setif-ain-el-fouara.jpg`
- `assets/img/setif-golden-flower.jpg`
- `assets/img/setif-lake-modern.jpg`
- `assets/img/timgad-trajan-arch.jpg`
- `assets/img/tlemcen-andalusian-arches.jpg`
- `assets/img/tlemcen-andalusian-gallery.jpg`
- `assets/img/tlemcen-el-ourit-falls.jpg`
- `assets/img/tlemcen-el-ourit-gorge.jpg`
- `assets/img/tlemcen-mechouar-pool.jpg`
- `assets/img/tlemcen-minaret.jpg`
- `assets/img/tlemcen-tiled-courtyard.jpg`

### Not currently published (53)

- `assets/img/tours/algiers-11.jpg`
- `assets/img/tours/algiers-12.jpg`
- `assets/img/tours/algiers-13.jpg`
- `assets/img/tours/algiers-6.jpg`
- `assets/img/tours/batna-timgad-10.jpg`
- `assets/img/tours/batna-timgad-12.jpg`
- `assets/img/tours/bousaada-10.jpg`
- `assets/img/tours/bousaada-15.jpg`
- `assets/img/tours/bousaada-16.jpg`
- `assets/img/tours/bousaada-5.jpg`
- `assets/img/tours/bousaada-8.jpg`
- `assets/img/tours/bousaada-9.jpg`
- `assets/img/tours/constantine-10.jpg`
- `assets/img/tours/constantine-5.jpg`
- `assets/img/tours/constantine-6.jpg`
- `assets/img/tours/constantine-8.jpg`
- `assets/img/tours/constantine-9.jpg`
- `assets/img/tours/djanet-10.jpg`
- `assets/img/tours/djanet-4.jpg`
- `assets/img/tours/djanet-7.jpg`
- `assets/img/tours/ghardaia-10.jpg`
- `assets/img/tours/ghardaia-8.jpg`
- `assets/img/tours/mostaganem-1.jpg`
- `assets/img/tours/mostaganem-10.jpg`
- `assets/img/tours/mostaganem-3.jpg`
- `assets/img/tours/mostaganem-5.jpg`
- `assets/img/tours/mostaganem-6.jpg`
- `assets/img/tours/mostaganem-7.jpg`
- `assets/img/tours/mostaganem-8.jpg`
- `assets/img/tours/mostaganem-9.jpg`
- `assets/img/tours/oran-10.jpg`
- `assets/img/tours/oran-2.jpg`
- `assets/img/tours/oran-4.jpg`
- `assets/img/tours/oran-6.jpg`
- `assets/img/tours/oran-7.jpg`
- `assets/img/tours/oran-8.jpg`
- `assets/img/tours/oran-9.jpg`
- `assets/img/tours/setif-2.jpg`
- `assets/img/tours/setif-3.jpg`
- `assets/img/tours/setif-7.jpg`
- `assets/img/tours/setif-9.jpg`
- `assets/img/tours/timimoun-4.jpg`
- `assets/img/tours/timimoun-6.jpg`
- `assets/img/tours/timimoun-7.jpg`
- `assets/img/tours/timimoun-8.jpg`
- `assets/img/tours/timimoun-9.jpg`
- `assets/img/tours/tipaza-10.jpg`
- `assets/img/tours/tipaza-2.jpg`
- `assets/img/tours/tipaza-4.jpg`
- `assets/img/tours/tlemcen-2.jpg`
- `assets/img/tours/tlemcen-7.jpg`
- `assets/img/tours/tlemcen-8.jpg`
- `assets/img/tours/tlemcen-9.jpg`

### Proven, not inferred

- `assets/img/tours/tlemcen-7.jpg` — visible TikTok watermark. Not currently rendered on any page.
- `assets/img/tours/setif-5.jpg` — construction hoarding across the subject.
