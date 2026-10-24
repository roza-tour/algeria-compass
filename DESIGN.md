# Algeria Compass — Design system

The site's look, written down so every page follows the same decisions.
The values live in `src/styles/global.css` (`:root`); pages use the token
names, never raw values.

**Direction: modern luxury travel.** Photography carries the page; type is
quiet and editorial; ornament is rare. Set in October 2026 after the owner
judged the previous look "cartoonish and very old". Not based on a
comparison with other live sites — no reference library was connected —
but on the project's own most premium page, `/luxury/`, whose type
pairing the owner had already approved, extended to the whole site.

What made the old look dated, and is now ruled out:
- an inscriptional all-caps display face (Cinzel) on every heading
- a rounded body face (Nunito), which read as playful
- tiling ornament under body text, emblem watermarks, patterned dividers
- flat, saturated colour tiles standing in for photographs
- heavy (800) weights and large radii on everything

Kept on purpose: the seasonal theming, **including its falling particles**
(autumn leaves, spring petals, winter snow). The owner wants them — they are
what makes the season felt. Only the wavy/scalloped hero and footer edges
were removed.

## Colour

| Token | Value | Role |
|---|---|---|
| `--brand-green` | `#0B3D2E` | Primary: buttons, links, active states |
| `--green-d` | `#07261C` | Header, footer, dark bands |
| `--brand-gold` | `#C19333` | The one accent: rules, eyebrows on dark, primary CTA fill |
| `--gold-l` | `#E4AD40` | Gold text on dark only |
| `--gold-d` | `#7E5E1A` | Gold text on light (AA) |
| `--paper` | `#FBF8F2` | Page background |
| `--card` | `#FFFFFF` | Cards, panels |
| `--ink` | `#141414` | Body text |
| `--text-m` | `#3A3A38` | Secondary text (≥7:1 on paper) |
| `--border` | `#E6DDC8` | Hairlines, card borders |
| `--red` / `--success` | `#C92B34` / `#2F8F57` | Error / success |

Region and civilisation colours are **identity, not decoration**: they
appear under text on a photograph, in a border or a thin rule — never as
a flat tile in place of a picture. Text contrast ≥4.5:1, large text ≥3:1,
measured against the composited photograph, not the base colour.

## Typography

| Role | Family | Weight | Notes |
|---|---|---|---|
| Display / headings | Cormorant Garamond | 600 (500 at display size) | Sentence case. Never all-caps. |
| Body / UI | Jost | 400 body, 500–600 UI | |
| Wordmark | Cinzel | 700 | The "Algeria Compass" lockup beside the logo only — it matches the logo. |
| Arabic | Noto Naskh Arabic | | |

Scale (fluid): display `clamp(2.6rem,5.6vw,4.2rem)`, h1 `clamp(2.2rem,4vw,3.1rem)`,
h2 `2.05rem`, h3 `1.45rem`, lead `1.18rem`, body `1.08rem`, small `.95rem`,
eyebrow `.74rem` (Jost 600, uppercase, `.16em`). Cormorant runs small for
its em, so headings sit one step larger than a sans would. Body line-height
1.65; line length 60–75ch.

## Spacing

Existing scale `--space-1`…`--space-8` (.35 → 3rem). Sections `4rem` desktop,
`2.6rem` phone. Content width 1200px; prose 760px.

## Shape and depth

Radius: `--radius-s 4px` (buttons, inputs), `--radius-m 10px` (cards,
panels), `--radius-l 16px` (feature cards, image panels). Pills only for
floating chips (WhatsApp, Ask). One shadow for cards, one stronger on hover.

## Components

- **Primary button**: gold fill, deep-green text, 4px radius, Jost 600.
- **Secondary**: transparent, 1px border, same shape.
- **Cards**: photograph first, white body, hairline border, 10px radius.
- **Eyebrow + heading + lead** at the top of each section; one thin gold
  rule is the only ornament allowed.

## Imagery

Real photographs of Algeria, people-free unless consent is on file.
Never upscaled past the source width (use a narrower panel instead).
Icons: one line set (stroke 1.75), no emoji in UI.
