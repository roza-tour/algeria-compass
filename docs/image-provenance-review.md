# Image provenance — resolved

**Status: closed, 14 September 2026. Owner confirmed the library is ours.**

The question raised below was answered: all photographs in the library belong
to Algeria Compass. The two photographs withdrawn while the question was open
have been restored to the Tlemcen province and Timgad destination galleries,
and the library is cleared for use.

This note is kept because the measurements behind it are still useful when the
library grows.

## What was measured

- `assets/img/tours/` and `assets/img/` hold 123 files exactly 736 or 675
  pixels wide — Pinterest's standard rendered width — and none of the 178
  files in `tours/` carries camera EXIF. With ownership confirmed, the likely
  explanation is that the photographs were collected or resized through
  Pinterest rather than sourced from it.
- `assets/img/clients/` is 556 files at ordinary phone aspect ratios
  (768x1024, 825x1100, 1100x825, 540x960) resized through one pipeline.

## Two files still worth attention

Neither is a rights question; both are quality questions.

- `assets/img/tours/tlemcen-7.jpg` carries a visible TikTok watermark for
  another account. Ours or not, a competitor's handle across a photograph on a
  luxury tour page reads badly. It is not currently rendered on any page.
  Worth replacing or re-exporting without the overlay.
- `assets/img/tours/setif-5.jpg` shows the Ain El Fouara fountain behind blue
  construction hoarding. Also not currently published.

## For new photographs

See `docs/adding-photos.md`.

## Batch of 2026-09-26 (108 photos sent on WhatsApp)

Sent by the owner in answer to the "missing photos" inventory: the Casbah,
Notre-Dame d'Afrique, Ketchaoua, Cherchell, Mansourah, Beni Hammad, Timimoun
foggaras, Tassili rock art and Tuareg life.

**39 published.** Each was opened, its place identified from what is in the
frame, and filed under the place it shows: `tours/algiers-14..26`,
`tipaza-11..12`, `batna-timgad-14`, `timimoun-11..13`, `tlemcen-14..15`,
`djanet-18..29`, `beni-hammad/beni-hammad-06,08,09,10`, `batna/batna-01..02`.

**Rights: owner-confirmed 2026-09-26 as free, open-licence images.** If any
turn out to be under a licence that requires credit (Creative Commons BY and
similar), the credit line goes in the photo's alt-adjacent caption or on
`/editorial/`. Original note follows.

**Rights: originally flagged.** Unlike the earlier library, this
batch shows signs of having been collected online: most files are exactly
736 px wide (Pinterest's download size), and four carry other photographers'
signatures. Those four were **not** published — now for a quality reason rather than a
rights one: another photographer's signature across a photo reads badly on a
luxury tour page, the same reason `tlemcen-7` is kept off the site:

| File in the zip | Signature |
|---|---|
| `3.17.16 PM.jpeg` (Casbah lane) | "Riyad G… photography" |
| `3.17.18 PM (3).jpeg` (Casbah lane, orange door) | "Farouk … photography" |
| `3.17.20 PM (2).jpeg` (Tuareg round a fire) | "@…" handle |
| `3.17.20 PM.jpeg` (rock painting) | "oussama hamdi photography" |

If any of the 39 published ones are not ours to use, remove them with
`git rm` and take the line out of the page's `gallery:` block. The tour
galleries pick files up automatically, so deleting the file is enough there.

**Not published for other reasons:** one is Antelope Canyon in the USA,
not Algeria; several are too small (under 500 px); some could not be placed
with confidence (a Kabylie hill village, a domed guesthouse, several canyons
and camel scenes that could be anywhere in the Sahara); and one giraffe
petroglyph looks digitally generated. Hoggar photographs were left for now:
no tour or page covers the Hoggar yet.
