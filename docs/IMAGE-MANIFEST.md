# Image manifest — location-correct image mapping (Phase 6)

Principle: every place/tour/blog post maps to a **location-correct** image. Where no
correct photo exists, the page is **flagged** with a neutral placeholder and an on-page
editor's note — we never substitute another location's photo. (Source of truth for tour
heroes: `src/data/tour-visuals.ts`; galleries derive from each tour's own wilaya slugs.)

## Tours (hero — all distinct, all from a wilaya in the tour)
| Tour | Hero | OK |
|---|---|---|
| djanet-sahara-safari | djanet-1 | ✅ |
| djanet-ghardaia-desert-2-days | djanet-6 | ✅ |
| bousaada-desert-tour | bousaada-1 | ✅ |
| timimoun-desert-escape | — (branded gradient, `needsImage`) | ⚠ no Timimoun photo |
| ghardaia-guided-tour | ghardaia-1 | ✅ |
| oran-mostaganem-tlemcen | tlemcen-1 | ✅ |
| algeria-eastern-sahara-discovery | constantine-7 | ✅ |
| tour-bejaia-historic | bejaia-1 | ✅ |
| private-guided-tour | tipaza-5 | ✅ |
| the-beauty-of-algeria | batna-timgad-1 | ✅ |
| algeria-through-time-and-tradition | djemila-4 | ✅ |
| algiers-city-tour-…​ | algiers-1 | ✅ |
| algierstour-hammagarden-…​ | algiers-3 | ✅ |
| day-tour-algeria-culture | algiers-7 | ✅ |
| algeria-cultural-tour | tipaza-1 | ✅ |
| algeria-tour | djemila-1 | ✅ |
| algeria-intensive-discovery-tour | constantine-1 | ✅ |
| the-soul-of-algeria | tipaza-7 | ✅ |
| the-culture-and-heritage-of-algeria | constantine-4 | ✅ |
| algeria-beyond-expectations | setif-1 | ✅ |

Tour galleries: built only from the tour's own wilaya slugs, so they are inherently
location-correct. Timimoun's gallery is suppressed (gradient hero).

## States (/provinces/)
| State | Hero | OK |
|---|---|---|
| Algiers | algiers-white-city-aerial | ✅ |
| Oran | oran-bay-santa-cruz | ✅ |
| Sétif | setif-tram-centre | ✅ |
| Béjaïa | tours/bejaia-2 (sea & coast; fixed from oued-canyon-palms) | ✅ |
| Ghardaïa | ghardaia-mzab-panorama | ✅ |
| Tipaza | tours/tipaza-1 | ✅ |
| Batna | timgad-trajan-arch (Timgad is in Batna) | ✅ |
| Tlemcen | tlemcen-andalusian-arches | ✅ |
| Constantine | constantine-sidi-mcid-bridge | ✅ |
| Djanet | tours/djanet-2 (desert; fixed from djanet-canyon-green) | ✅ |
| Bou Saada | bou-saada-oasis | ✅ |
| **Mostaganem** | placeholder (was Oran photos) | ⚠ **needs real photo** |
| **Timimoun** | placeholder (was M'Zab/Tadrart) | ⚠ **needs real photo** |
| Annaba | — (no page yet) | ⚠ **needs real photo** |
| Blida | — (no page yet) | ⚠ **needs real photo** |

## Destinations (/destinations/)
| Destination | Hero | OK |
|---|---|---|
| Casbah of Algiers | casbah-old-city-mosque | ✅ |
| Djémila | tours/djemila-1 (**fixed** — was ksar-mural-art.jpg) | ✅ |
| Timgad | timgad-trajan-arch | ✅ |
| Tipaza | tours/tipaza-1 | ✅ |
| M'Zab Valley | ghardaia-mzab-panorama | ✅ |
| Tassili n'Ajjer | tassili-dune-rocks | ✅ |
| Constantine | constantine-sidi-mcid-bridge | ✅ |
| Tlemcen | tlemcen-mechouar-pool | ✅ |
| Djanet | djanet-guelta-palms | ✅ |
| **Al Qal'a of Beni Hammad** | placeholder | ⚠ **needs real photo** |

## Blog (thematic images — all appropriate)
safety→algiers-boulevards-aerial · transport→setif-tram-centre · visa→algiers-white-city-aerial ·
food→traditional-dining-tea · handicrafts→ghardaia-mzab-carpets · sahara→sahara-plateau-sunset ·
best-time→sahara-plateau-sunset (shared, thematic) · complete-guide→sahara-dunes-tadrart ·
mzab-le-corbusier→ghardaia-ksar-lane. No wrong-place images.

## Outstanding — real photos to supply
Mostaganem, Timimoun, Annaba, Blida, Al Qal'a of Beni Hammad. (Also: confirm whether any
`tours/oran-*` images are actually Mostaganem — the library groups "Oran / Mostaganem".)
