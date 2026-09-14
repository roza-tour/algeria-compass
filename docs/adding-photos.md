# Adding photographs

One rule: **put the file in the right folder with the right name, then build.**
Everything else — thumbnails, WebP versions, appearing on the page — happens
automatically.

Photographs belong in the repository, under `public/assets/img/`. Do not upload
them straight to the server through cPanel: the deploy is a `git reset --hard`,
so anything not in the repository is outside the backup and will not survive a
fresh clone.

---

## 1. Photographs of a place → tour and destination galleries

**Folder:** `public/assets/img/tours/`
**Name:** `<place>-<number>.jpg`, continuing the numbering already there.

The place names in use:

`algiers` · `tipaza` · `oran` · `mostaganem` · `tlemcen` · `djanet` ·
`ghardaia` · `bousaada` · `bejaia` · `constantine` · `setif` · `djemila` ·
`batna-timgad` · `timimoun`

So the next Djanet photograph is `djanet-18.jpg`, the next Tlemcen one is
`tlemcen-14.jpg`.

**What happens on its own:** every tour that visits that place picks the photo
up — `djanet-18.jpg` appears on all four Djanet tours without anyone editing
them — and the build generates the 400×400 thumbnail the gallery renders from.

**What still needs a person:** these gallery tiles all share the tour's title as
their alt text. To give a photograph its own description, and to put it on a
province or destination page, it has to be listed by hand in the page's
`gallery:` block — see section 3.

## 2. Photographs of travellers → the Moments gallery

**Folder:** `public/assets/img/clients/`
**Name:** `client-<number>.jpg`, continuing from the highest number present.

These do **not** appear anywhere automatically, by design: every one is a
photograph of an identifiable person, so it goes live only when someone has
chosen it. Add it to the list at the top of `src/pages/moments.astro`:

```js
{ src: '/assets/img/clients/client-642.jpg', alt: 'Say what is in the photograph' },
```

The build makes the WebP version for any client photo that is referenced.

## 3. A specific photograph on a specific page

Province, destination and experience pages carry their own `gallery:` list in
`src/content/<kind>/<slug>.md`:

```yaml
gallery:
  - { src: "/assets/img/tours/tlemcen-6.jpg", alt: "The tiled reflecting pool in the palace courtyard at Tlemcen" }
```

## Alt text

Describe what is actually in the frame — "the Arch of Trajan from the paved
main street of Timgad", not "Timgad". It is what a blind visitor hears, what
Google reads, and what shows if the image fails to load. If you have not
looked at the photograph, do not write its alt text.

## Before you commit

```
npm run build     # generates thumbnails and WebP, builds the site
npm run audit:seo # catches orphan pages, missing images, oversized metadata
npm run stage     # copies the built site into the document root
```

`npm run build` runs the image preparation itself, so there is no separate
command to remember.
