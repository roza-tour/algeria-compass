# Part 1 — AI Content Component Library (inventory + spec)

24 reusable AI/extraction components. 8 existed before Phase 3.5; **16 were built this phase**.
All use central CSS tokens, are dependency-free, accessible (semantic `<dl>`/`<table>`/`<ol>`,
labelled), and responsive (tables scroll on mobile). Usage rules enforced by the validator.

| Component | New | Purpose | Key inputs | Schema | SEO/GEO | AEO / AI-citation |
|---|---|---|---|---|---|---|
| QuickAnswer | — | ≤60w direct answer | text | speakable | snippet | **primary AEO target** |
| KeyFacts | — | hard-fact `<dl>` | facts[] | — | snippet | fast extraction |
| FaqSection | — | Q&A list | faqs[] | FAQPage | rich result | voice + AEO |
| ComparisonTable | — | matrix (Quick Comparison) | columns, rows | — | table snippet | comparison answers |
| Timeline | — | Historical Timeline | items[] | (Event opt) | — | era extraction |
| EntitySnapshot | — | entity fact card | entity | Place/etc via graph | entity SEO | entity grounding |
| EntityLinks | — | graph-driven links | groups[] | — | internal links | relationship signal |
| SourceList | — | citations | sources[] | citation | GEO trust | source grounding |
| KeyTakeaways | ✔ | skimmable conclusions | items[] | — | snippet | summary extraction |
| TravelCostTable | ✔ | cost breakdown (ranges) | rows[],currency | — | table snippet | cost answers |
| DifficultyScale | ✔ | 1–5 difficulty + factors | level,factors[] | — | — | suitability answers |
| TravelerProfileMatch | ✔ | who-it-suits | profiles[] | — | — | decision answers |
| ClimateMatrix | ✔ | 12-month climate | months[] | — | table snippet | seasonal answers |
| SeasonRecommendation | ✔ | best-time ratings | seasons[] | — | snippet | "best time" answers |
| ProvinceSnapshot | ✔ | province at-a-glance | name,capital… | (pairs w/ AdministrativeArea) | entity SEO | province grounding |
| DestinationSnapshot | ✔ | destination at-a-glance | name,type… | (pairs w/ Place) | entity SEO | destination grounding |
| ExpertNote | ✔ | attributed recommendation | text,by | — | E-E-A-T | expert-answer (honest attribution) |
| TripPlanningBlock | ✔ | plan-it panel | bestTime,days… | — | — | planning answers |
| TripDurationPlanner | ✔ | days → what you can do | options[] | — | — | "how many days" answers |
| RoutePlanner | ✔ | route with stops/legs | stops[],mode | (ItemList opt) | — | itinerary answers |
| CommonMistakes | ✔ | mistake → do-instead | items[] | — | — | corrective answers |
| TravelRequirements | ✔ | visa/permit/health checklist | items[] | (HowTo opt) | — | requirement answers |
| PracticalInfoBox | ✔ | key practical facts | rows[] | — | snippet | practical answers |
| TravelStats | ✔ | stat tiles | stats[] | — | — | statistic extraction |

## Per-component contract (applies to all)
- **Required vs optional inputs** are encoded in each component's `Props` interface (TypeScript) — the source of truth.
- **Structured data:** components are presentational; page templates emit the matching schema (FAQPage, ItemList, HowTo, Article.citation, Place). The table above notes the natural pairing.
- **Internal-linking opportunities:** EntityLinks/RoutePlanner/EntitySnapshot link to entities & pages; others are linkable in surrounding prose.
- **AI-citation / voice / snippet:** every block is self-contained and literally true so it can be lifted; QuickAnswer/KeyFacts/FAQ are the explicit AEO triad.
- **Accessibility:** tables have `<caption>`+scope headers; scales/ratings carry `aria-label`; boxes use `<dl>`; all wrap in `.tbl-scroll` where wide.
- **Responsive:** grids use `auto-fit/minmax`; tables scroll horizontally on mobile.

## Validation rules (enforced/》recommended)
- Substantive pages (province/destination/experience/article/question) MUST ship the **AEO triad** (QuickAnswer/shortAnswer + KeyFacts + FAQ) — validator gate `ai`.
- Use the **intent-matched** blocks: the intent registry (`src/data/intents.ts`) lists `aiOpportunities` per intent; `recommend()` returns them automatically.
- Cost/stat/requirement blocks MUST use ranges and carry a source or a "verify" note — no fabricated precision.
- ExpertNote attribution defaults to "Algeria Compass"; a named expert is used only when real.
