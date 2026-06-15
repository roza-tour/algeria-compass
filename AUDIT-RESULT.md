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

---

# ADDENDUM — LIVE verification & finish-line pass (2026-06-16)

This pass was run **against the live domain** (`curl https://algeriacompass.com`), not just the build.
Build/commit `91a8d1b` + this addendum's commit. **Sitemap: 109 URLs.**

## TASK A — Live re-test (Appendix 1) — results

| Check | Result | Detail |
|---|---|---|
| All 109 sitemap URLs return `200 0` | **PASS** | every `<loc>` → `200 0`, no redirects, no 404s |
| `http://` → 301 | **PASS** | canonical-host single-hop |
| `https://www.` → 301 | **PASS** | non-www single-hop |
| `/tours` (no slash) → 301 | **PASS** | trailing-slash enforced |
| `/images/og-image.png` → 301 → `/assets/img/og-image.png` | **PASS** | legacy asset path remap live |
| `/contact/` = NEW template | **PASS** | `logo-emblem-gold.webp`=1; nav has Tours+Luxury+e-Visa (relative hrefs `/tours/ /luxury/ /evisa/`); socials = `instagram.com/algeria_compass/` + `facebook.com/profile.php?id=61590718167514` (not bare) |
| Scaffolding `noindex,follow` | **PASS** | `/clusters/ /knowledge/ /knowledge/graph/ /knowledge/provinces/ /search/ /sitemap/` all noindex |
| Indexable pages NOT noindex | **PASS** | `/ /tours/ /provinces/ /contact/ /evisa/ /luxury/` all blank (indexable) |
| 404 is a real 404 | **PASS** | `/this-page-does-not-exist-xyz/` → 404 |

**Note on the Appendix `/contact/` nav grep:** the canned pattern looks for *absolute* hrefs
(`href="https://algeriacompass.com/tours/"`); the site uses *relative* hrefs (`href="/tours/"`),
so the absolute grep returns blank. Re-checked with the relative pattern → Tours, Luxury, e-Visa
all present. **Not a fail** — the whole new template (emblem, 12-item nav, real socials) is live.

## TASK B — Fixes for FAILs

Only one Appendix item was actually unmet on live: **robots.txt** (see Task C). No other FAILs.

## TASK C — robots.txt `Disallow: /search` — DONE (source) · PENDING LIVE

`public/robots.txt` + staged root `robots.txt` now read:

```
User-agent: *
Allow: /
Disallow: /search
Sitemap: https://algeriacompass.com/sitemap.xml
Sitemap: https://algeriacompass.com/sitemap-images.xml
```

`Allow: /` and **both** `Sitemap:` lines preserved; on-page `noindex` on `/search/` kept.
**Live still serves the OLD robots.txt** (last-modified Wed 10 Jun, no `Disallow`) even with a
cache-buster query → owner deploy + LiteSpeed flush required (see Handoff).

## TASK D — De-orphan internal links — DONE

All 7 targets were **already in the global Footer** (Explore / Knowledge / Plan columns) — verified
live. Second requirement = an in-body "related" link on a topically-adjacent page. True status
(checked across `src/pages` **and** `src/components`, since some cross-links live in components):

| Page | In-body related link | Action |
|---|---|---|
| `/experiences/` | from `/discover/` body | already linked — no change |
| `/history/` | from `/culture/` body | already linked — no change |
| `/food/` | from `/culture/` + `/sweets/` bodies | already linked — no change |
| `/unesco/` | from `/history/` body | already linked — no change |
| `/sweets/` | from `/food/` (via `SweetsSection`/`SweetsStrip` gold CTA) | already linked — no change |
| `/travel-guides/` | **none** (Footer only) → **added** | `blog/index.astro` related line |
| `/discover/` | **none** (Footer only) → **added** | `blog/index.astro` related line |

**Diff:** `src/pages/blog/index.astro` gained one related paragraph after the article grid:
> More ways to explore Algeria: [our travel guides](/travel-guides/), or [discover Algeria](/discover/) region by region.

Both targets return `200` with trailing slash (confirmed in Task A sitemap sweep). No top-nav change
(12-item nav untouched). A redundant `/sweets/` link briefly added to `food.astro` was reverted —
food already cross-links sweets in-body via its components.

## TASK E — Legacy 301s — NOT ACTIONED (no data this session)

No GSC "Not found (404)" / "Page with redirect" URL export was provided in this session, so the
`.htaccess` legacy-301 slot (block #4) was **left untouched** by design. **Owner next step:** export
those two reports from GSC → Pages and send the URL list; each genuinely-renamed slug then gets a
`RewriteRule old → live-200-URL` in that slot (or 410 if truly gone). Never add a redirected old URL
to the sitemap.

## TASK F — OWNER-ONLY steps (cannot be done from here: no SSH / cPanel / GSC)

1. **Deploy the new commit + flush cache** (REQUIRED for Task C/D to go live): on the server
   `git pull origin main` in the docroot, fix perms (dirs 755 / files 644), then **LiteSpeed Web
   Cache Manager → Flush All** (live `robots.txt` is currently cached/stale at 10 Jun). Then re-run
   Appendix 1 — expect robots.txt to show `Disallow: /search` and `/blog/` to show 2 `/travel-guides/`
   + 2 `/discover/` links (Footer + in-body).
2. **Google Search Console:** resubmit `sitemap.xml`; for each error type (Page with redirect,
   Not found, Duplicate/alternate canonical, Crawled–not indexed) click **Validate Fix**; run URL
   Inspection + **Request Indexing** on the homepage and top tour / e-Visa / luxury pages.
3. **Bing Webmaster Tools:** resubmit the sitemap.
4. **Off-site discovery/authority** (so a brand-new domain actually gets *indexed*, not just
   "Discovered"): set up Google Business Profile + a few directory/aggregator listings
   (TourRadar / Viator).
5. **Legacy 301s:** export GSC 404 + redirect URL lists and send them (see Task E).
