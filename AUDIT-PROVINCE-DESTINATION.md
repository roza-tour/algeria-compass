# Province ↔ Destination Audit — Intent Differentiation
**Date:** 2026-06-17 · **Scope:** all 15 province + 10 destination pages · **Goal:** preserve every URL, eliminate intent cannibalization. **No page deletions recommended.**
Measured directly from `src/content/{province,destination}/*.md` (4-gram text overlap, topic-heading overlap, FAQ/quick-answer intent, image integrity).

---

## 1. Collection health (all 25 pages)

Both collections render through one template each (`provinces/[slug].astro`, `destinations/[slug].astro`) → identical chrome, schema, byline, sources. Verified:
- **Schema:** province → `TouristDestination#place`; destination → `TouristAttraction#attraction`. Both carry author/reviewer/citation/geo. ✅ (Note: province uses `TouristDestination`, destination uses `TouristAttraction` — semantically correct split.)
- **SEO:** 0 duplicate titles/descriptions, every page self-canonical + in sitemap (from the full build audit). ✅
- **Images:** 133 image refs checked, **0 missing**. ✅
- **Thin-prose flag:** the markdown *prose body* is only **~300–365 words** on every page; the 2,500+ rendered words come from frontmatter (quickAnswer/keyFacts/FAQs) + shared components (RelatedGrid, FAQ, Byline, Sources). Real unique editorial prose is thin — relevant to the expansion plan below.

### The architecture already works where names differ
Province and destination **do not cannibalize** when they have different names — the province is the *area* guide and the destination is the *specific site*:

| Province (area) | Destination (site) | Status |
|---|---|---|
| `/provinces/setif/` | `/destinations/djemila/` | ✅ clean — different intent |
| `/provinces/batna/` | `/destinations/timgad/` | ✅ clean |
| `/provinces/ghardaia/` | `/destinations/mzab-valley/` | ✅ clean |
| `/provinces/algiers/` | `/destinations/casbah-of-algiers/` | ✅ clean |

**Cannibalization occurs only for the 4 cities where a destination was created with the *same name* as the province and given a generic "city travel guide" treatment** instead of a specific heritage/site treatment: **Constantine, Tlemcen, Tipaza, Djanet.** Those 4 pairs are the entire problem set.

---

## 2. Per-pair diagnosis

### Overlap measurement (what I found)
**Information overlap is LOW** (verbatim 4-gram Jaccard) — the prose is written differently. **Intent overlap is HIGH** — same query target, same H1 name, and largely duplicated FAQs/quick-answers.

| Pair | Info overlap (text 4-gram) | Shared topic headings | Duplicated FAQs | **Intent overlap (composite)** | Cause |
|---|---|---|---|---|---|
| **Constantine** | 4.6% | 1 ("What to see") | 2 of ~4 (incl. verbatim "Why is Constantine called the City of Bridges?") | **HIGH (~70%)** | duplicated **intent** |
| **Tlemcen** | 2.6% | 1 ("What to see") | 2 of ~4 ("known/famous for", "how to reach") | **HIGH (~70%)** | duplicated **intent** |
| **Tipaza** | 4.2% | 0 | **3 of 4 verbatim** ("known for", "how far from Algiers", "Royal Mausoleum") | **HIGH (~75%)** | duplicated **intent** (worst FAQ overlap) |
| **Djanet** | 0.5% | 0 | 2 of 3 ("how to get to", "best time") | **MODERATE (~45%)** | duplicated **intent** (transport/timing only) |

> **Verdict on question #3:** the overlap is **caused by duplicated search intent, not duplicated information.** All four destination pages currently answer the *same questions a traveller asks the province page* (what's it known for, how to get there, is it worth it) instead of owning a distinct angle.

### Current intent of each page (as written)
- **All 4 provinces:** generic city/area travel guide — `Why visit · Short history · What to see · Culture · Food · Getting there & around · Practical tips`. Planning-leaning but **also carries history/culture** (which should be the destination's job), and the 4 short provinces are **missing** the deep-planning sections (itineraries, when-to-go, where-to-stay) that the long provinces — Algiers, Béjaïa, Ghardaïa, Oran, Sétif — already have.
- **Constantine / Tlemcen destinations:** mini travel guide (`Overview · History · What to see · How to reach`) — duplicates the province intent, and includes **"How to reach"** (logistics) which belongs to the province.
- **Tipaza destination:** already in the tight UNESCO-site format (`What it is · Why it matters · What you'll see · How to visit`) — structurally good, but its **FAQs duplicate the province** (the real leak).
- **Djanet destination:** focuses on `Tassili n'Ajjer · Tadrart Rouge` — good site focus, but overlaps both the Djanet province **and** the separate `/destinations/tassili-najjer/` page.

---

## 3. Target model → ownership split

| Intent / topic | Owner |
|---|---|
| travel guide, trip planning, transportation, accommodation, itineraries, "how to get there", "best time", practical visitor info, "how many days" | **PROVINCE** |
| culture, history, heritage, local traditions, cuisine, architecture, identity / "why it matters" / "what's it famous for" | **DESTINATION** |

This keeps both URLs, gives each a non-competing query set, and matches the user's specified model.

---

## 4. Per-pair plan (expand, don't delete)

### Constantine — `/provinces/constantine/` ⇆ `/destinations/constantine/`
- **Province (planning owner).** Missing vs model: *Suggested itineraries, When to go, Where to stay, deeper transport*. **Expand** to the long-province template; **move** the deep "short history / culture" prose toward a 2–3 sentence teaser that links to the destination.
- **Destination (heritage/identity owner).** Missing vs model: *architecture (the gorge bridges as engineering heritage — Sidi M'Cid, Sidi Rached), local traditions (Malouf music — Constantine is its capital), cuisine identity, Ahmed Bey Palace, the Casbah/Rocher identity*. **Remove** "How to reach" (→ province). **Re-scope** FAQs to heritage ("why City of Bridges", "what is Malouf", "what to see at Ahmed Bey Palace").
- **Linking:** Province "Things to see" block → destination as the lead card; destination top callout → "Planning a visit? See the Constantine travel guide." Deduplicate the identical "City of Bridges" FAQ to the **destination** only.

### Tlemcen — `/provinces/tlemcen/` ⇆ `/destinations/tlemcen/`
- **Province (planning owner).** Add *itineraries, when-to-go, where-to-stay*; keep transport ("how to reach" stays here, remove from destination).
- **Destination (heritage owner).** Strong natural identity to own: *Andalusian–Islamic architecture (Great Mosque, Mansourah minaret, El Mechouar, Sidi Boumediène), Zianid history, Andalusian/gharnati music tradition, crafts*. **Expand** these; drop the "how to reach" FAQ.
- **Linking:** province → "the Andalusian monuments are covered in the Tlemcen heritage guide"; destination → "to plan the trip, see the Tlemcen travel guide." Keep "known/famous for" FAQ on the **destination**; keep "how to reach" on the **province**.

### Tipaza — `/provinces/tipaza/` ⇆ `/destinations/tipaza/`
- *Lowest structural overlap; the leak is FAQs.* **Destination** keeps the UNESCO-site focus (Roman park, Royal Mausoleum of Mauretania, basilica, identity/"why it matters"). **Province** owns the *coast/beaches, Cherchell side-trip, distance-from-Algiers logistics, where to stay, itineraries*.
- **Action:** split the **3 duplicated FAQs** — keep "What is the Royal Mausoleum?" + "what is it known for" on the **destination**; keep "how far from Algiers?" + "good for beaches?" on the **province**. Add the missing province planning sections.
- **Linking:** destination → "combine the ruins with the coast — see the Tipaza travel guide"; province → "full ruins guide: the Tipaza UNESCO site."

### Djanet — `/provinces/djanet/` ⇆ `/destinations/djanet/`
- *Special case: 3-way overlap with `/destinations/tassili-najjer/`.* **Re-scope the Djanet destination to the town's Tuareg identity** (Sebeiba festival/UNESCO intangible heritage, oasis culture, palm gardens, basecamp identity) and let **`/destinations/tassili-najjer/` own the rock-art plateau** and Tadrart. This removes the Djanet-vs-Tassili overlap too.
- **Province (planning owner):** owns *permits & guide requirements, how to get there (flights via DJG), best season, desert-trip logistics, where to stay*.
- **Linking:** province → links to both the Tassili destination and the Djanet town destination; destination(town) → "planning permits & flights? see the Djanet travel guide."

---

## 5. Net effect
- **URLs preserved:** 25 → 25 (0 deletions, 0 redirects).
- **Cannibalization removed:** each pair now targets disjoint query sets (planning vs identity) with deduplicated FAQs and explicit cross-links.
- **Bonus fixes:** the 4 "short" provinces get the same planning depth as the flagship provinces; the Djanet/Tassili three-way overlap is resolved; thin prose bodies (~350w) get a reason to grow with genuinely different material.
- **Effort:** ~M per pair (content rewrite of 1 destination + expansion of 1 province + FAQ re-split + 2 cross-links). Templates need **no** code change — only the markdown frontmatter/body and the FAQ arrays.
