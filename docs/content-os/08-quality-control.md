# Part 8 — Content Quality-Control System

A page is publishable only after passing **11 gates**. Some are automated by
`/scripts/validate-content.py` (run on every page and in CI); the rest are human checklists.
`scripts/content-audit.py` reports portfolio health over time.

## The 11 gates

| # | Gate | Mode | Pass condition (summary) |
|---|---|---|---|
| 1 | Editorial review | human | Accurate, original, on-voice (VOICE-GUIDE), right framework (Part 4), correct length band. |
| 2 | Fact review | human | Every factual claim verified; risky facts (visa/safety/health/price) sourced or flagged; independent of writer. |
| 3 | Citation review | auto+human | `sources` ≥ type minimum; links live & authoritative; UNESCO URL where applicable; inline cites on cornerstones. |
| 4 | Entity review | auto+human | Mapped to its graph entity; `EntityLinks` populated; entities named correctly; no orphan page (has a cluster). |
| 5 | Schema review | auto (build) | Builds with **0 JSON-LD errors**; correct type (Article/Place/QAPage/CollectionPage); FAQPage/Breadcrumb present; author/reviewedBy/dateModified/citation set. |
| 6 | SEO review | auto+human | Unique title (brand auto-suffixed), meta description 120–160c, one H1, canonical correct, in sitemap, image set. |
| 7 | GEO review | human | Citable, sourced, factual; authorship/publisher clear; content is liftable as ground truth. |
| 8 | AEO review | auto | **AEO triad** present (QuickAnswer/shortAnswer + KeyFacts + FAQ); answers ≤~50w; structured markup. |
| 9 | Accessibility review | auto+human | One H1 + logical order; every image has alt; AA contrast; descriptive links; table headers. |
| 10 | Internal-linking review | auto+human | Links up to pillar; ≥3 entity links; **≥3 inline contextual links**; no broken internal links (build). |
| 11 | Visual review | human | Real, rights-cleared, correct-place imagery; EXIF stripped; descriptive name; alt written; entity-registered (Part 9). |

## Automated gate (run before every publish)
```bash
npm run build                         # gates 5,6,10 (schema/links/sitemap) — must be clean
python3 scripts/validate-content.py src/content/<collection>/<slug>.md   # gates 3,4,8,9 + depth
```
The validator exits non-zero on any **MUST** failure — wire it into CI so a failing page
cannot merge. WARN items are allowed but must be acknowledged by the reviewer in the PR.

## Portfolio health (run monthly)
```bash
python3 scripts/content-audit.py      # depth, FAQs, sourcing, coverage across all collections
```

## Reusable publish checklist (paste into each PR)
- [ ] Belongs to a cluster (Part 5) and links to its pillar
- [ ] Uses the correct framework (Part 3/4) and length band
- [ ] AEO triad present (QuickAnswer + KeyFacts + FAQ)
- [ ] ≥ type-minimum sources; links live; UNESCO URL if applicable; inline cites on cornerstones
- [ ] Fact pass done (independent); risky facts sourced/flagged; no fabricated prices
- [ ] Mapped to its graph entity; EntityLinks populated; ≥3 inline contextual links
- [ ] Images: real, rights-cleared, correct place, EXIF-stripped, alt written, entity-registered
- [ ] `updated` + `lastReviewed` set; update cadence noted for time-sensitive pages
- [ ] `npm run build` clean (0 schema errors, 0 broken links/images)
- [ ] `validate-content.py` = no FAIL (WARNs acknowledged)
- [ ] Editorial + (where named) reviewer recorded

## Current backlog (from running the validator today)
PASS 0 · WARN 15 · FAIL 21 / 36. The five provinces are near-pass (WARN: slightly under
word target, no inline links). Destinations, experiences, articles and questions FAIL
(thin + unsourced) — this is the **content backlog** to bring up to standard in the build
phases. The gate's job from now on: **no new page enters in that state.**
