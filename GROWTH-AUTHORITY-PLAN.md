# Algeria Compass — Off-Site Authority Acquisition Plan
**Created:** 2026-06-20 · **Status:** website project CLOSED (architecture complete, deliverability verified). This is the growth phase.
**Strategy chosen:** all three channels in parallel — (1) Reviews + GBP, (2) Citations/directories, (3) Digital PR / backlinks.
**Rule for everything below:** no invented facts. All NAP data is the single source of truth; every external listing must match it *character-for-character*.

---

## 0. MASTER NAP / CITATION RECORD (single source of truth)

Use these EXACT values on every profile, directory, and citation. Inconsistency (abbreviations, missing suffixes, different phone formats) is the #1 thing that weakens citation signals.

| Field | Value | Source |
|---|---|---|
| **Business name** | Algeria Compass | config.ts / schema |
| **Category** | Tour operator / Travel agency (licensed Algerian tour operator) | About page |
| **Phone (display)** | +213 784 193 176 | config.ts |
| **Phone (E.164)** | +213784193176 | config.ts |
| **WhatsApp** | +213 784 193 176 (wa.me/213784193176) | config.ts |
| **Email** | hello@algeriacompass.com | config.ts |
| **Website** | https://algeriacompass.com | astro.config |
| **Street address** | Rue Larbi Ben M'Hidi, Alger-Centre, 16000 Algiers, Algeria | config.ts — **owner-confirmed 2026-06-20 to match GBP** |
| **Locality** | Alger-Centre | config.ts |
| **Region** | Algiers | config.ts |
| **Postal code** | 16000 | config.ts |
| **Country** | Algeria (DZ) | config.ts |
| **Geo** | 36.7791524, 3.0580592 | config.ts |
| **Google Maps** | https://maps.app.goo.gl/Ro5E2HnFp7GjRX9s9 | config.ts |
| **Languages** | English, French, Arabic | schema |
| **Price range** | €30 – €2,290 per person | schema |
| **Years in business** | 7+ years | About page |
| **Instagram** | https://www.instagram.com/algeria_compass/ | footer |
| **Facebook** | https://www.facebook.com/profile.php?id=61590718167514 | footer |
| **Google review/profile** | https://share.google/rEAjf9e2qvCwefa2X | reviews component |

> **Action 0 — DONE (2026-06-20):** owner confirmed the address above matches the Google Business Profile; `src/config.ts` marked confirmed. Citations are unblocked. Optional refinement: if the GBP also publishes opening hours, send them and I'll add an `openingHours` field to the LocalBusiness schema (not required for citation consistency).

---

## DIVISION OF LABOUR

| I (Claude Code) can do | Only you (owner) can do |
|---|---|
| Build/keep the NAP source of truth in code & schema | Submit to directories (accounts/verification) |
| Verify Organization/sameAs/LocalBusiness structured data | Manage the GBP dashboard (posts, photos, Q&A, hours) |
| Generate outreach templates, target lists, review-request copy | Send outreach emails / DMs to bloggers & press |
| Wire approved reviews into the on-site pipeline | Ask past clients for reviews; approve them |
| Add a press/about kit or `sameAs` entries when you create new profiles | Sign up for HARO-style services; reply to queries |
| Track schema/link health after each new profile | Phone/email verification, business-licence uploads |

---

## CHANNEL 1 — REVIEWS + GBP  *(fastest ROI, start day 1)*

**Why first:** trust signal that compounds for both local pack and organic; you already have a GBP and an on-site moderation pipeline (`reviews.php` → `reviews-admin.php` → `reviews-approved.json`). The on-site review file is currently **empty**, so the homepage shows only the manual "5.0 / 9 Google reviews" claim and emits **no** AggregateRating schema yet.

**Owner actions:**
1. **GBP completeness pass:** confirm name/category/address/hours, add 10–20 real tour photos, write the business description (reuse the About page voice), enable messaging, list services = your tour types.
2. **Review drive:** message the last ~30–50 past clients with the GBP review short-link. Target: +1–2 Google reviews/week, sustained.
3. **On-site reviews:** as genuine reviews come in (Google or the on-site form), approve real ones via `reviews-admin.php`. Each approved entry auto-renders a card AND populates AggregateRating/Review JSON-LD — turning the manual "5.0" claim into schema-backed proof.

**My actions (on request):**
- Replace the hardcoded "9 five-star reviews" with a value derived from `reviews-approved.json` (kills the stale-claim risk once the file has data), OR keep manual and just sync the number.
- Add `aggregateRating` continuity checks to the build.

**KPIs:** GBP reviews count & rating; on-site approved-review count; AggregateRating present in `dist/index.html`.

---

## CHANNEL 2 — CITATIONS / DIRECTORIES  *(foundational, needs Action 0)*

Submit the EXACT NAP record above. Prioritise travel-relevant + high-authority general directories over volume.

**Tier 1 — travel/tour-specific (highest relevance):**
- TripAdvisor (Operator listing — also a review channel)
- GetYourGuide / Viator (if you want OTA distribution; optional, commission-based)
- Lonely Planet / travel operator directories
- Niche: Algeria / Sahara / North Africa travel directories and "tour operators in Algeria" lists

**Tier 2 — high-authority general:**
- Bing Places, Apple Business Connect (the non-Google map ecosystems)
- Facebook Page (exists — ensure NAP matches), Instagram bio (exists)
- Trustpilot (review + citation)

**Tier 3 — local/regional:**
- Algerian business directories; Algiers tourism / chamber listings; relevant `.dz` directories

**Process:** one spreadsheet, columns = directory | URL | NAP submitted (Y/N) | live URL | matches-source (Y/N) | date. After each goes live, tell me the profile URL and I'll add it to the schema `sameAs` so Google connects the entity graph.

**KPIs:** # live citations; % NAP-consistent; new `sameAs` entries wired.

---

## CHANNEL 3 — DIGITAL PR / BACKLINKS  *(highest authority value, longest lead time)*

The site's content depth (province/destination/blog/question clusters, UNESCO coverage) is the linkable asset. Pitch the *content*, not the homepage.

**Tactics (grounded, not speculative):**
1. **Roundup link-building:** find existing "things to do in Algeria", "is Algeria safe", "Sahara travel", "Algeria itinerary" articles on travel blogs; offer your relevant guide as a resource. Your safety/visa/transport guides + Tassili/M'Zab destination pages are the natural fits.
2. **Journalist queries:** sign up for a HARO-style service (Featured, Qwoted, SourceBottle). Reply to Algeria/North-Africa/Sahara/"emerging destinations" queries as a licensed operator with 7+ years on the ground — earns editorial links.
3. **Guest content / interviews:** travel podcasts and blogs covering off-the-beaten-path destinations; Algeria is under-covered = a hook.
4. **Partnerships:** local guides, riads/lodges, photographers you work with — reciprocal mentions and real-relationship links.

**My actions:** outreach email/DM templates per tactic; a target-list scaffold; a one-page "press/about kit" page on-site if you want a linkable hub (note: this would be the one new on-site page — optional, your call given the site is "closed").

**KPIs:** referring domains gained; editorial (non-directory) links; branded search volume.

---

## 90-DAY TIMELINE (parallel)

### Days 1–30 (2026-06-20 → 2026-07-20) — Foundation
- **Action 0:** confirm exact address + hours → I lock config.ts/schema.
- GBP completeness pass + photos + description (owner).
- Launch review drive to past clients (owner).
- Submit Tier-1 travel directories + Bing/Apple/Trustpilot (owner); I wire each live URL into `sameAs`.
- Sign up for one journalist-query service; start daily scan (owner).
- I prepare: outreach templates, citation tracker, roundup target list.

### Days 31–60 (2026-07-21 → 2026-08-19) — Momentum
- Sustain reviews (+1–2/wk); approve real ones on-site → AggregateRating goes live.
- Complete Tier-2 + begin Tier-3 citations.
- Begin roundup outreach (10–15 qualified targets/wk).
- 2–4 journalist-query responses/wk.

### Days 61–90 (2026-08-20 → 2026-09-18) — Authority
- Reviews compounding; on-site review wall populated.
- Citations: aim NAP-consistent across all Tier-1/2.
- First editorial backlinks landing; pursue guest content/partnerships.
- Review what's working; double down.

---

## WHAT I WILL **NOT** DO (per closure audit)
- No new on-site content/pages unless evidence shows it beats off-site authority (none currently does). The optional press kit page is the only candidate, and only if you want a linkable PR hub.
- No invented directories, fake reviews, or speculative "SEO tasks."

## IMMEDIATE NEXT STEP
Paste the **exact street address line and opening hours** from your Google listing. That unblocks citation consistency and lets me align `config.ts`. Everything else can start in parallel today.
