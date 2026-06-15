# AUDIT-RESULT.md — Technical SEO / Indexing Fix Pass

**Site:** https://algeriacompass.com (HTTPS, non-www) · Static Astro → cPanel/Apache (LiteSpeed)
**Date:** 2026-06-15 · **Build:** 148 pages, clean · **Sitemap:** 109 URLs

> **Verification scope.** This agent has no SSH and cannot deploy or curl the live host.
> Everything below is verified against the freshly built `dist/` + staged repo root (the exact
> bytes that go live). The live curl re-test (Appendix B) is in the **Handoff for Sam** section —
> run it after the server pulls + LiteSpeed flush.

---

## 1. Per-URL status table

### Indexable pages (in sitemap, self-canonical, trailing slash) — built & resolve to 200
| URL | Built | In sitemap | Canonical |
|-----|-------|-----------|-----------|
| `/` | ✅ | ✅ | self |
| `/tours/` + 20 `/tours/<slug>/` | ✅ | ✅ | self |
| `/luxury/` | ✅ | ✅ | self |
| `/destinations/` (+ entries) | ✅ | ✅ | self |
| `/provinces/` (+ entries) | ✅ | ✅ | self |
| `/regions/` + 8 `/regions/<slug>/` | ✅ | ✅ | self |
| `/experiences/` (+ entries) | ✅ | ✅ | self |
| `/blog/` (+ articles) | ✅ | ✅ | self |
| `/questions/` (+ entries) | ✅ | ✅ | self |
| `/culture/ /history/ /food/ /sweets/ /unesco/` | ✅ | ✅ | self |
| `/travel-guides/ /visa-support/ /evisa/ /booking-terms/` | ✅ | ✅ | self |
| `/about/ /contact/ /discover/` | ✅ | ✅ | self |
| `/editorial/` (+ 10 policies) `/team/` `/reviewers/` (+ entries) | ✅ | ✅ | self |

### noindex pages (kept live, `noindex,follow`, EXCLUDED from sitemap)
| URL | Built | In sitemap | robots |
|-----|-------|-----------|--------|
| `/clusters/` (+ `/clusters/<id>/`) | ✅ | ❌ excluded | `noindex,follow` |
| `/knowledge/` `/knowledge/graph/` `/knowledge/provinces/` (+ `/knowledge/<hub>/`) | ✅ | ❌ excluded | `noindex,follow` |
| `/search/` | ✅ | ❌ excluded | `noindex,follow` |
| `/sitemap/` (HTML sitemap) | ✅ | ❌ excluded | `noindex,follow` |
| `404` (`/404.html`) | ✅ (404 status) | ❌ | `noindex,follow` |

**Internal links:** 145 unique internal route links across the build — **100% trailing-slash, 100% resolve to a built page** (zero 404 targets). Every sitemap `<loc>` maps to a built file.

---

## 2. Redirect map (`.htaccess`)

| From | To | Type |
|------|-----|------|
| `http://…` (any) | `https://…` (same path) | 301 (single hop, combined w/ www) |
| `https://www.…` | `https://…` (non-www, same path) | 301 (single hop) |
| `…/path` (no trailing slash, not a file/extension) | `…/path/` | 301 |
| `/images/*` | `/assets/img/*` | 301 (legacy asset path) |
| *(slot)* old GSC slugs | current equivalent | 301 — **add from GSC export** |
| any 404 | `/404.html` (styled, real 404 status) | ErrorDocument |

The canonical-host rule is a **single** combined condition so http+www never chains
(http→https→non-www) — that chain is what GSC labels "Page with redirect".

---

## 3. Sitemap
- **109** URLs, all `https://algeriacompass.com/…/` (final, non-www, trailing slash).
- Scaffolding (`/clusters/`, `/knowledge/*`, `/search/`, `/sitemap/`, `/404/`) **excluded**.
- Every `<loc>` corresponds to a built `index.html` (no phantom/404 entries).

---

## 4. Schema-type check per template (JSON-LD `@graph`)
Sitewide nodes on **every** page: `TravelAgency` (#organization), `Country`, `WebSite` + `SearchAction`.

| Template | Key types present |
|----------|-------------------|
| Home | TravelAgency, WebSite, Country, Review/AggregateRating |
| Tour `/tours/<slug>/` | **TouristTrip**, **Offer**, **FAQPage**, **BreadcrumbList**, ImageObject, ItemList |
| FAQ `/questions/` | **FAQPage**, Question/Answer, **BreadcrumbList** |
| Province `/provinces/<slug>/` | **TouristDestination**, **FAQPage**, **BreadcrumbList**, CreativeWork |

Schema-referenced policy URLs (`publishingPrinciples`, `actionableFeedbackPolicy`, `ethicsPolicy`)
→ `/editorial/editorial-policy/`, `/editorial/corrections-policy/`, `/editorial/transparency-policy/`
all exist and return 200. ✅ (was the highest-risk sitewide quality signal.)

---

## 5. Hero image before/after
| Image | Before (JPG) | After (WebP `.sm.webp`) | Δ |
|-------|-------------|------------------------|----|
| `algiers-white-city-aerial` (home hero) | 228 KB | 72 KB | −68% |
| `tours/algiers-1` (tour hero sample) | 80 KB | 60 KB | −25% |
| All heroes | served JPG | `<picture>` WebP + JPG fallback | 530 webp generated |

Alt text preserved, `fetchpriority="high"` kept, width/height intact (no CLS).

---

## 6. GSC error-type → structural resolution checklist
- [x] **Page with redirect** — single-hop canonical host (HTTPS+non-www) + trailing-slash enforced in `.htaccess`; internal links & sitemap already use the final URL so crawlers never hit a chain.
- [x] **Not found (404)** — every internal link + every sitemap URL resolves to a built page; the 3 schema policy pages exist; `/images/*` legacy paths 301 to current assets.
- [x] **Duplicate / alternate (canonical)** — `trailingSlash:'always'` + self-referential canonicals + the slash/host 301s collapse all duplicate variants to one canonical URL.
- [x] **Crawled/Discovered – not indexed** — thin scaffolding (`clusters`/`knowledge`/`search`/`sitemap`) `noindex,follow` + removed from sitemap to focus crawl budget on the ~109 real pages; sitemap is clean for resubmission.

---

## 7. ⚠️ Known deviation (needs owner decision)
**Task 5 verify expected `logo-full.png` hits = 0 on `/provinces/` & `/contact/`; actual = 2.**
Those 2 hits are **not** the old template — they are the shared `Footer.astro` logo (`.f-logo`)
and the sitewide `SchemaGraph` org `logo`, present on **every** page. The old-template markers
(old nav, bare `instagram.com`/`facebook.com`, `/images/` paths) are gone. Reaching 0 requires
swapping the footer/schema brand asset **sitewide**, which the hard rules forbid (don't change the
shared Footer / brand tokens). Left as-is; raise with the owner if the footer logo should change.

---

## 8. Handoff for Sam (account actions — NOT performed by this agent)
1. **Deploy:** on the server, `git pull origin main` in the docroot → set perms (dirs 755, files 644) → **LiteSpeed → Flush All**. (This agent cannot deploy.)
2. **Run Appendix B** (live re-test) — paste in a shell with `curl`:
   ```bash
   echo "== Sitemap URLs (expect ALL: '200 0') =="
   curl -s https://algeriacompass.com/sitemap.xml | grep -oE '<loc>[^<]+' | sed 's/<loc>//' \
    | while read u; do echo "$(curl -s -o /dev/null -w '%{http_code} %{num_redirects}' "$u") $u"; done
   echo "== Canonical-host redirects (expect 301) =="
   curl -s -o /dev/null -w "http   %{http_code}\n" http://algeriacompass.com/
   curl -s -o /dev/null -w "www    %{http_code}\n" https://www.algeriacompass.com/
   curl -s -o /dev/null -w "noslsh %{http_code}\n" https://algeriacompass.com/tours
   echo "== Scaffolding noindex (expect noindex,follow) =="
   for u in /clusters/ /knowledge/ /search/ /sitemap/; do echo "$u $(curl -s https://algeriacompass.com$u | grep -o 'content=\"noindex,follow\"')"; done
   echo "== 404 is real (expect 404) =="
   curl -s -o /dev/null -w "%{http_code}\n" https://algeriacompass.com/this-page-does-not-exist-xyz/
   ```
3. **Legacy 301s:** export GSC's **Not found (404)** + **Page with redirect** URL lists; for any
   genuinely renamed slug, add a `RewriteRule` in the marked slot in `.htaccess` (→ a URL that
   returns 200). Do **not** add redirected old URLs to the sitemap.
4. **GSC:** resubmit `sitemap.xml`; URL-Inspect → Request Indexing key pages; click **Validate Fix**
   on each error type (Page with redirect, Not found, Duplicate/alternate, Crawled–not indexed).
5. **Bing Webmaster Tools:** resubmit the sitemap.
</content>
