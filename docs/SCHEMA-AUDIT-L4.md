# L4 — Structured-data audit & fix (report)

Goal: a clean **travel** schema graph with **no ecommerce (Product) interpretation**,
and a richer Organization. Below: every schema type **removed / modified / kept**,
per template.

## ✅ Removed (ecommerce misuse)

| Where | Removed | Why |
|-------|---------|-----|
| `src/pages/tours/[slug].astro` | **`Product`** node (with nested **`Brand`** + product-`Offer` + `seller`) | A guided tour is a travel service, not a physical good. The `Product`+`Brand` pairing is what triggers Google's product parsing and the "missing field" warnings (GTIN, Brand, shippingDetails, hasMerchantReturnPolicy). Removing it removes the whole class of warnings. **Price is not lost** — it remains on the tour's `TouristTrip.offers` (EUR). |

> Sitewide grep of the built site confirms **zero** `Product`, `Brand`,
> `shippingDetails`, `hasMerchantReturnPolicy`, or `gtin` remain.

## 🔧 Modified

| Where | Type | Change |
|-------|------|--------|
| `src/components/SchemaGraph.astro` | **TravelAgency** (sitewide `#organization`) | Added `priceRange` ("€30–€2,290 per person"), `currenciesAccepted` ("EUR"), `audience` (Audience → "International leisure travellers"), `knowsLanguage` (en/fr/ar), `areaServed` as an array (`#algeria`). `contactPoint` gained `email` + `areaServed: "Worldwide"`. `sameAs` is **wired but empty** — populated from `SAMEAS` once the owner supplies social URLs (never fabricated). |
| `src/pages/tours/[slug].astro` | **TouristTrip** | Now the sole commercial node for a tour: `Trip/TouristTrip` + `Offer` (`price`, `priceCurrency: EUR`, `availability`) only — no GTIN/brand/shipping/returns. |

## ✔️ Kept — already travel-correct (verified, parses clean)

| Template | Schema types |
|----------|--------------|
| sitewide (`SchemaGraph`) | **TravelAgency**, **Country** (#algeria), **WebSite** (+ sitelinks `SearchAction`) |
| `tours/[slug]` | **TouristTrip** (+Offer EUR), **BreadcrumbList**, **ImageObject**, **FAQPage** |
| `luxury` | **TouristTrip** ×3 (+**AggregateOffer**, EUR price band), **BreadcrumbList** |
| `experiences/[slug]` | **TouristTrip** (+Offer) — ⚠️ see flag below |
| `destinations/[slug]` | **TouristAttraction** |
| `provinces/[slug]` | **TouristDestination** |
| `blog/[slug]` | **BlogPosting + Article**, **BreadcrumbList**, **WebPage**, **FAQPage** |
| `questions/[slug]` | **QAPage**, **BreadcrumbList**, **WebPage** (speakable) |
| `booking-terms` | **FAQPage** + **BreadcrumbList** (reflects the 5-day cancellation policy) |
| Reviews component | **AggregateRating / Review** — injected client-side **only from real approved reviews**, never fabricated, never when empty |

## Cancellation policy in schema

There is **no standard Schema.org property** for "free cancellation" on
`TouristTrip`/`Trip`/`Offer`. The only related field is
`Offer.hasMerchantReturnPolicy` — which is the **ecommerce** signal we are
deliberately removing. So the policy is surfaced as valid structured data via
the **`FAQPage` on `/booking-terms/`** ("Free cancellation up to 5 days before
the tour departure date") rather than forced into an unsupported field.

## Validation

- All JSON-LD parses without error on every template (home, luxury, tour,
  experience, destination, province, blog, question, booking, reviews).
- No ecommerce types remain anywhere in the built site.
- **Recommended:** once live, run a tour URL and `/luxury/` through Google's
  **Rich Results Test** + the Schema.org validator to confirm zero warnings.

## ⚑ Owner to provide / confirm

1. **Social profile URLs** for the Organization `sameAs` (Instagram, Facebook,
   etc.) → paste into `SAMEAS` in `src/components/SchemaGraph.astro`.
2. **Experiences currency:** the 3 experience itineraries emit **USD**
   (`experience.currency` defaults to USD in the content schema), while the rest
   of the brand prices in **EUR**. If those numbers are EUR, switch the default —
   not changed automatically to avoid mis-pricing.
3. `TourBookingPage` was **not** added as a distinct type (booking happens on the
   tour/luxury page via the on-page request form). Say the word if you want each
   tour/luxury page additionally typed as a booking/reservation page.
