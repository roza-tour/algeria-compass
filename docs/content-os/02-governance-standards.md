# Part 2 — Content Governance System

The rules every future page obeys. A page is not publishable until it satisfies all
**MUST** items here (enforced by `/scripts/validate-content.py`). **SHOULD** items are
strong defaults a reviewer may waive with a reason recorded in the PR.

## 1. Editorial standards
- MUST be accurate, original prose written for an international reader who wants to *understand* Algeria.
- MUST follow `VOICE-GUIDE.md` (knowledgeable, trustworthy, never promotional/brochure).
- MUST NOT contain fabricated facts, reviews, credentials, prices, or urgency.
- SHOULD lead with substance (what/why/what-to-know), not adjectives.

## 2. Publishing standards
- MUST set: `title`, valid `seo.title`/`seo.description`, `image`, `imageAlt`, `updated`, `quickAnswer` (or `shortAnswer` for questions).
- MUST belong to exactly one **cluster** (Part 5) and link to that cluster's pillar.
- MUST build cleanly (`npm run build`) with zero schema errors and zero broken links/images.
- Titles: natural, unique; the brand suffix is auto-added by `Seo.astro` — do not hand-append.

## 3. Research standards
- Claims of fact MUST be checkable against an authoritative source (see Citation standards).
- Dates, figures, statuses (UNESCO refs, visa rules, opening realities) MUST be verified at time of writing and stamped via `lastReviewed`.
- Uncertainty MUST be stated, not hidden ("rules change — confirm with the consulate").

## 4. Fact-checking standards
- Every page passes an independent fact pass before publish (separate person from writer where possible), per `/editorial/fact-checking-policy/`.
- High-risk facts (safety, visas, health, prices) MUST carry a source or an explicit "verify" note; prices SHOULD be omitted unless confirmed.

## 5. Review standards
- Editorial review + fact review are distinct gates (Part 8). Reviewer recorded in `reviewedBy` when a named reviewer exists; until then the organisational review function applies.

## 6. Citation standards
- Province/destination/UNESCO/history/safety/visa pages MUST carry ≥1 real source in `sources` (UNESCO, Britannica/encyclopaedic, government, peer-reviewed, recognised media).
- Cornerstone guides MUST carry ≥3 sources and SHOULD cite inline at the claim.
- Sources render via `SourceList`; each entry: `{title, publisher, url, type}`. No invented or dead links.

## 7. Update standards
- Each page has an `updated` date; time-sensitive pages (visa, safety, transport, prices, "best time") reviewed on the cadence in `/editorial/content-update-policy/` (≤12 months; ≤6 for visa/safety).
- Material changes bump `updated` and `lastReviewed`.

## 8. Correction standards
- Errors are fixed openly per `/editorial/corrections-policy/`; significant corrections noted on-page. A visible "report an error" path stays available (EditorialMeta).

## 9. AI-usage standards
- AI may assist drafting/structuring/translation; it MUST NOT be the source of facts.
- Every AI-assisted page is human-reviewed and fact-checked; disclosure follows `/editorial/ai-usage-policy/`.
- No AI-generated photos of real places presented as real (see Part 9).

## 10. Image standards (summary; full spec Part 9)
- Real, rights-cleared imagery only; correct place match; EXIF stripped; descriptive filename; meaningful `imageAlt`.
- Hero + optional `gallery`; each gallery item `{src, alt}`.

## 11. Accessibility standards
- One `<h1>`; logical heading order; every image has alt (decorative = empty alt).
- Colour contrast ≥ WCAG AA (use `--gold-d` for gold-on-light text).
- Links descriptive; tables have headers; focus states preserved (already in `global.css`).

## 12. Internal-linking standards
- MUST link up to the cluster pillar and to ≥3 related entities/pages.
- SHOULD include ≥3 **inline contextual** links in prose (current gap — see audit).
- Entity links come from the graph (`EntityLinks`/`discoveryGroups`) — never hand-rolled or random.

## Required frontmatter contract (per content type)
| Field | province | destination | experience | article | question |
|---|---|---|---|---|---|
| title/name | ✔ | ✔ | ✔ (name) | ✔ (title) | ✔ (question) |
| seo.title/description | ✔ | ✔ | ✔ | ✔ | ✔ |
| quickAnswer / shortAnswer | quickAnswer | quickAnswer | quickAnswer | quickAnswer | shortAnswer |
| keyFacts | ✔ | ✔ | ✔ | SHOULD | ✔ |
| faqs (≥3 cornerstone) | ✔ | ✔ | ✔ | SHOULD | n/a (is the Q) |
| image/imageAlt | ✔ | ✔ | ✔ | ✔ | SHOULD |
| sources (≥1; ≥3 cornerstone) | ✔ | ✔ | ✔ | ✔ | ✔ |
| updated/lastReviewed | ✔ | ✔ | ✔ | ✔ | ✔ |
| cluster | ✔ | ✔ | ✔ | ✔ | ✔ |
