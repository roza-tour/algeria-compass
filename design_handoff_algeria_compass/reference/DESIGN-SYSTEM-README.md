# Algeria Compass — Design System

The brand and UI system for **Algeria Compass** — the definitive, independent English-language travel-intelligence platform for Algeria. It reads like a publication (Lonely Planet × Atlas Obscura × National Geographic Travel), focused entirely on one country, and explicitly **not** a tour brochure.

> **Identity:** Algeria Compass maps the whole country as a connected body of knowledge — 58 provinces, their heritage, landscapes, food and cultures — turning the largest, least-documented country in Africa into clear, trustworthy, openly sourced knowledge.

This system gives design agents the foundations (colour, type, spacing, motifs), reusable components, and a full website UI kit needed to produce on-brand Algeria Compass interfaces and assets.

## Sources
Built by reading the brand's own repository. Explore it for deeper context:
- **GitHub:** https://github.com/roza-tour/algeria-compass — Astro static site. Key references used: `src/styles/global.css` (the single source of truth for design tokens), `BRAND-GUIDE.md`, `VOICE-GUIDE.md`, `IDENTITY.txt`, `PROJECT-README.md`, and the Astro components under `src/components/` (`Header`, `Footer`, `Hero`, `EntitySnapshot`, `Card`, etc.).
- Real imagery (EXIF-stripped travel photography) and logo files were imported from `assets/img/` in that repo.

> **Positioning note:** the repo is mid-rebrand. Older surfaces still carry the legacy "Djazaïr Tours / Explore Algeria in Elite Luxury" tour-operator language. The **current, authoritative** positioning is the independent editorial platform described in `BRAND-GUIDE.md` and `VOICE-GUIDE.md`, and this system follows that. Treat any "book now / best price / luxury" framing as deprecated.

---

## Content fundamentals — how Algeria Compass writes

The voice is **a knowledgeable, trusted guide — a well-read friend who knows Algeria intimately and explains it clearly. Never a salesperson.**

- **Person & address:** Speaks to an intelligent "you" implicitly; the platform is "we" only on trust/editorial pages ("we correct it in the open when we are wrong"). Mostly impersonal, substance-first prose.
- **Casing:** Sentence case for headings in prose; the uppercase **eyebrow/kicker** is the one place small-caps tracking is used. Wordmark is "Algeria **Compass**" (Compass in gold), never with an agency suffix.
- **Spelling:** British-leaning English, consistent within a page. Diacritics on Algerian place names where standard — **Sétif, Béjaïa, Ghardaïa, M'Zab, Tassili n'Ajjer**. First mention full proper name, short form thereafter.
- **Substance over adjectives:** "a near-vertical maze of Ottoman alleys" beats "stunning old town". Concrete, specific, dated, sourced.
- **Emoji:** **None** in editorial copy. (The legacy footer used a few unicode glyphs for contact/social; the rebrand drops them — use text labels or real icons.)
- **Numbers/facts:** Be exact with verifiable facts; write sensitive numbers (visa fees, costs, advisory levels) as **ranges + "confirm official source"**. Never fabricate facts, prices, reviews, credentials or named authors — authorship is honest and org-level ("editorial-team" / "editorial-review").

**Never:** "book now", "limited offer", "best price", "breathtaking", "hidden gem", "bucket-list", "must-see" as filler, "undiscovered paradise". **Do:** lead with what it is and why it matters; cite when it counts; respect the reader's time.

| Off-brand | On-brand |
|---|---|
| "Book your dream Algerian adventure today!" | "Plan a journey through Algeria — when you're ready." |
| "Djémila is a breathtaking must-see hidden gem." | "Djémila is one of the best-preserved Roman cities in the world, set on a remote upland in Sétif." |
| "Discover the magic of mysterious Algeria." | "Understand Algeria — its history, landscapes and cultures — before you go." |

---

## Visual foundations

The look is **premium-editorial**: a deep emerald authority colour, gold heritage accents sampled from the logo, and warm paper backgrounds. It reads like a serious publication about a place, not a sales site.

- **Colour.** Dominant **emerald green** `#0B3D2E` (chrome, headings, primary actions); **gold** `#C19333` as a heritage accent (wordmark "Compass", CTAs, dividers) — gold is used sparingly and never as large flat fills on light surfaces (use `--gold-d #7E5E1A` for gold text on white to hold WCAG AA). Warm **paper** `#FBF8F2` / **cream** `#F6EFE0` page fields, **sand** `#E6DDC8` hairlines, **ink** `#1A1A1A` text. A **regional accent system** retints content per place — Roman red, Sahara amber, Kabylie green, Andalusian teal, M'Zab ochre, coast blue, highlands olive — applied with `data-region="…"` on a wrapper, which swaps `--accent` and the tint `--wash`.
- **Type.** **Cinzel** (serif, inscriptional/classical) for all display and headings; **Nunito** (humanist sans, warm) for body; **Noto Naskh Arabic** for Arabic script. Headings line-height 1.2; body 1.7 with generous measure. The uppercase **eyebrow** (`.72rem`, `.14em` tracking, accent colour) sits above most headings.
- **Backgrounds & texture.** Full-bleed **real photography** in heroes with a **left-to-right dark protection gradient** (`linear-gradient(90deg, rgba(8,25,18,.85), rgba(8,25,18,.3) 72%)`) so white text holds. Two signature SVG motifs: the **gold "mountain ridge" identity band** (12px striped divider under the nav on emerald) and the **compass-diamond field** (faint gold lattice over the dark footer / green panels). No purple/blue tech gradients; the only gradients are emerald→deeper-emerald and the hero protection wash.
- **Imagery vibe.** Warm, natural, documentary — landscapes, ruins, oasis towns, real people. Not over-graded, not black-and-white, no heavy grain. Object-fit cover, 16/10 in cards.
- **Cards.** White surface, **1px sand border**, 16px radius, no resting shadow; on hover they **lift 4px** with a soft shadow and the image **scales to 1.05** (`.2s`/`.4s` ease). Tag (accent, uppercase, tiny) → serif title → muted description → hairline-topped meta line.
- **Shadows.** Soft and warm, tinted with green: resting `0 6px 24px rgba(11,61,46,.08)`, hover `0 14px 34px rgba(0,0,0,.09)`, floating pill `0 8px 22px rgba(0,0,0,.18)`. No hard or neutral-grey drop shadows.
- **Borders & radius.** Sand hairlines everywhere; radii 6 / 14 / 16 / 24px + full pills. Trust/aside blocks use a **4px left accent rule** (`QuickAnswer`, editorial-meta) rather than heavy borders.
- **Motion.** Restrained. `.15–.25s` ease transitions on hover/press; a small fade-up on multi-step forms. No bounces, no parallax, no infinite decorative loops.
- **Hover / press.** Links: gold-light on dark, accent underline on light. Buttons: green darkens to `--green-d`, gold lifts to `--gold-l` with a 1px `translateY(-1px)`. Focus: 3px gold outline, 2px offset (accessibility is a first-class concern in the source).
- **Layout.** Content column max **1200px**; nav & footer span **1360px**. Generous section padding (`3rem` vertical). Sticky emerald nav. Sticky contact pill bottom-right on long pages. Two-column article layout (prose + facts/entity sidebar) on detail pages.
- **Transparency & blur.** Used lightly — translucent white borders/fills on dark chrome (`rgba(255,255,255,.05–.12)`); no glassmorphism.

---

## Iconography

The source site is **icon-light by design** — it leans on type, the compass emblem, and photography rather than an icon set.

- **No bundled icon font or SVG sprite** ships in the repo. The legacy build used a handful of **unicode glyphs** (✉ ☎ 📍 💬 🧭 🔒 🇩🇿) for contact/social/cert chips; the rebrand voice moves away from emoji, so prefer **short text labels** ("WhatsApp", "Email") or a real line-icon set.
- **The brand mark is the icon vocabulary:** the **gold compass rose** (`assets/img/logo-emblem-512.png`, `logo-emblem-gold.webp`) and the derived motifs (mountain ridge band, compass-diamond lattice). Use these for ornament instead of generic UI icons.
- **The editorial affordance is the arrow** "→" appended to CTAs ("Plan a journey →") and "↗" for external reference links — both plain glyphs, no icon library.
- **If you need a UI icon set** (search, menu, chevrons), substitute **[Lucide](https://lucide.dev)** from CDN — its thin, calm, 1.5–2px stroke matches the editorial restraint. **This is a substitution, not the brand's own set — flag it when you use it.**

Logo assets in `assets/img/`: `logo-full.png` (emblem + wordmark, master — always on emerald), `logo-emblem-512.png` & `logo-emblem-gold.webp` (mark only), `favicon-512.png` / `favicon-32.png`, plus `favicon.svg`. The logo is transparent gold — **place it on deep emerald, never recolour or background-remove it.**

---

## Index / manifest

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s the three token layers.
- `tokens/colors.css` · `tokens/typography.css` · `tokens/spacing.css` — CSS custom properties (base + semantic aliases + 7 regional accent scopes). Fonts (Cinzel, Nunito, Noto Naskh Arabic) load via Google Fonts inside `typography.css`.
- `README.md` (this file) · `SKILL.md` (Agent-Skill manifest).

**Foundations** (`foundations/` — Design System tab specimen cards)
- Colors: brand · neutrals · regional accents
- Type: display (Cinzel) · body (Nunito) · scale & eyebrow
- Spacing: radius · shadows · spacing scale
- Brand: logo lockup · emblem & wordmark · identity motifs

**Components** (`components/`) — React primitives, each with `.jsx` + `.d.ts` + `.prompt.md`
- `core/`: **Button** (green / gold / ghost / ghostLight · sm/md/lg), **Eyebrow**, **Badge** (type / soft / unesco / green)
- `editorial/`: **Card**, **QuickAnswer**, **FactsBox**, **Byline**, **EntitySnapshot**, **SourceList**
- Namespace at runtime: `window.AlgeriaCompassDesignSystem_e971ec`. Starting points: Button, Card, Website.

**UI kits** (`ui_kits/`)
- `website/` — clickable recreation of the Algeria Compass site: `index.html` (interactive), `chrome.jsx` (nav / id-band / footer), `screens.jsx` (home + province detail).

**Assets** (`assets/img/`) — logos, favicons, and real Algeria travel photography.
