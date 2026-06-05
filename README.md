# Algeria Compass — Algeria Platform (Astro, static)

A scalable, static, multi-page Algeria tourism platform. Every province, destination,
experience, article and question builds to its **own real HTML URL** — the fix for the
old single-file hash-routing site. Deploys to **Namecheap cPanel shared hosting** with no
Node runtime, no SSR, and no database.

```bash
npm install      # once
npm run build    # outputs the static site to dist/
```
Then upload the **contents of `dist/`** into `public_html/` on cPanel. That's it.

---

## 1. Audit of the old site
Single 4.4 MB `index.html`, ~23 "pages" behind **one** hash URL (`#/blog`, `#/faq`…),
images base64-inlined, one shared `<head>`. Good content and branding, wrong architecture
for SEO/GEO/AEO. Full audit in `ALGERIA-PLATFORM-ARCHITECTURE.md`.

## 2. Migration risks (and how they're handled)
- **Hash-link rot** → all internal links are real `/path/` URLs.
- **Image performance** → images served from `public/images/` as real files (upgrade to `astro:assets` for AVIF/WebP later).
- **Schema duplication** → centralised in `SchemaGraph.astro` (one `@graph`, linked `@id`s).
- **Content lock-in** → content is portable Markdown in `src/content/`, not hard-coded HTML.
- **cPanel quirks** → `trailingSlash:'always'` + `build.format:'directory'` so `/page/` resolves to `/page/index.html` with no rewrite rules; `.htaccess` ships in `public/`.

## 3. Reusable assets carried over
Brand (name, green/gold palette, Cinzel type, DJ mark), the 25 curated photos, the 6 blog
articles, FAQ/visa/culture copy, the region colour system, and all schema patterns — extracted
into Astro components.

## 4. Folder structure
```
src/
  components/   Seo, SchemaGraph, Header, Footer, Hero, Breadcrumbs,
                QuickAnswer, KeyFacts, FaqSection, Card, CtaSection
  layouts/      BaseLayout.astro   (<head> + SEO + schema + header/footer)
  content/      config.ts + province/ destination/ experience/ article/ question/  (Markdown)
  pages/        index, about, contact, culture, history, food, unesco, travel-guides, 404,
                provinces/[slug] + index, destinations/[slug] + index,
                experiences/[slug] + index, blog/[slug] + index, questions/[slug] + index,
                sitemap.xml.ts
  styles/       global.css (design tokens + region themes + components)
public/         images/  favicon.svg  robots.txt  .htaccess
```

## 5. URL structure
`/` · `/destinations/{slug}/` · `/provinces/{slug}/` · `/experiences/{slug}/` ·
`/blog/{slug}/` · `/questions/{slug}/` · `/culture/` `/history/` `/food/` `/unesco/` `/travel-guides/` ·
`/about/` `/contact/` · `/sitemap.xml`. Lowercase, hyphenated, trailing-slash, stable.

## 6. Content collections (add content = add a Markdown file)
Typed in `src/content/config.ts`: **province, destination, experience, article, question**.
Each file's frontmatter feeds SEO, hero, quick-answer, key-facts, FAQ and schema automatically.
To add the 4th province, drop `src/content/province/oran.md` — it builds itself into `/provinces/oran/`.

## 7. SEO architecture
Per-page `<head>` from frontmatter via `Seo.astro` (title, description, canonical, Open Graph,
Twitter cards). Breadcrumbs on every page. Auto `sitemap.xml`, `robots.txt`. Clean directory URLs.

## 8. GEO architecture
One linked knowledge graph (`SchemaGraph.astro`): Organization + WebSite (+ SearchAction) on every
page, plus per-page TouristDestination / TouristAttraction / TouristTrip / BlogPosting / QAPage with
stable `@id`s and `containedInPlace` / `isPartOf` / `provider` links. Citable quick-answer +
key-facts blocks on every page.

## 9. AEO architecture
`QuickAnswer` (40–55-word snippet/voice answer), `KeyFacts` table, `FaqSection` with FAQPage schema,
and `/questions/` QAPage pages with `speakable` markup.

## 10. Deployment workflow (cPanel)
1. Set `site` in `astro.config.mjs` to your real domain (currently `https://algeriacompass.com`).
2. `npm run build`
3. cPanel → File Manager → `public_html/`
4. Upload **everything inside `dist/`** (including the hidden `.htaccess`) into `public_html/`.
No Node, no database, no server config. Tip: zip `dist/`, upload the zip, extract in cPanel.

---

## What's seeded now (Phase 0/1 foundation — 32 static pages)
3 provinces (Sétif, Algiers, Béjaïa) · 3 destinations (Djanet, Constantine, Tlemcen) ·
3 experiences (Tassili Odyssey, City of Bridges, Andalusian Kingdom) · 6 articles · 3 Q&A ·
all knowledge hubs + home + contact.

## How to grow it
- New province/article/etc. = one Markdown file in the matching `src/content/` folder.
- New region theme = one token block in `src/styles/global.css` (`[data-region="…"]`).
- Languages later via Astro i18n (subpath + hreflang) — the architecture is ready.
- Wire the contact form to Formspree/your endpoint (placeholder in `src/pages/contact.astro`).

## Honest notes
- Some images are regional stand-ins (your library covers Sahara + M'Zab); replace per page via the frontmatter `image:` field as real photos arrive.
- The About page has a `TODO` for verified credentials only — no fabricated reviews or licences.
