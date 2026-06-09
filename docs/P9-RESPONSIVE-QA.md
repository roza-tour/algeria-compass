# P9 — Mobile & tablet QA + speed (results)

Automated with `scripts/qa-responsive.mjs` (puppeteer-core driving the system
Chrome). Re-run any time with the preview server up:

```
npm run build && npm run preview      # in one shell
node scripts/qa-responsive.mjs        # in another
```

It loads each major page at every required viewport, measures real layout, and
writes `shots/p9/report.json` + screenshots (`shots/` is gitignored).

## Coverage

- **Pages (11):** home, tour (Timimoun), /tours/, /evisa/, /food/, /culture/,
  /provinces/, a state page (Oran), /search/, /sitemap/, /contact/.
- **Viewports (9):** 360, 390, 414, 768, 834, 1024 portrait + 1024×768,
  1112×834, 1366×1024 landscape.
- **99 page×viewport checks.**

## Results

| Check | Result |
|-------|--------|
| Horizontal overflow | **0 / 99** — `scrollWidth === clientWidth` on every page at every width |
| Element overflow past viewport | none |
| Slider nav arrows | 46×46 px (≥44) ✓ |
| Slider pagination dots | 10 px visual, **26 px hit area** via invisible `::before` (WCAG 2.5.8 AA) ✓ |
| Tap-target warnings remaining | inline text links only (breadcrumbs, footer, NAP, bylines) — WCAG 2.5.5 exempts inline text links; off-canvas drawer nav links measured but not user-tappable in that state |
| Image CLS | all `<img>` carry explicit `width`/`height` — no layout shift |

> The audit measures each element's own box, so it reports the dot's 10 px
> visual size, not the 26 px pseudo-element hit area — the effective tap target
> is 26 px.

## Speed / image handling

- **LCP:** hero is text (`.hero-compact`) on the homepage; component heroes use
  `fetchpriority="high"` + explicit dimensions (`Hero.astro`, tour hero).
- **Lazy-loading:** gallery / strip / below-fold images use
  `loading="lazy" decoding="async"` (incl. the footer logo, fixed in P9).
- **CLS:** every image has intrinsic `width`/`height`; the states strip,
  tour gallery and sweets grid reserve space, so no shift on load.

## Fixes applied in P9

1. Traveller-slider dots: 9 px → 10 px visual with a 26 px invisible hit area.
2. Footer logo: `loading="lazy" decoding="async"` (below the fold).
3. Tour hero `<img>`: `fetchpriority="high" decoding="async"`.
4. Homepage "States" plan card copy: corrected the locked-terminology slip
   ("Algeria's 58 wilayas" → "across Algeria's States").

Outstanding (owner): real photo galleries for the 9 flagged states — see
[`IMAGE-GAPS.md`](IMAGE-GAPS.md).
