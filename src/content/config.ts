import { defineCollection, z, reference } from 'astro:content';

const region = z.enum(['sahara','kabylie','roman','andalusian','mzab','coast','highlands']);

const seo = z.object({
  title: z.string(),
  description: z.string(),
  primaryKeyword: z.string().optional(),
  keywords: z.array(z.string()).default([])
});

const faq = z.array(z.object({ q: z.string(), a: z.string() })).default([]);
const keyFacts = z.array(z.object({ label: z.string(), value: z.string() })).default([]);

// ----- Editorial / citation primitives -----
const sourceItem = z.object({
  title: z.string(),
  publisher: z.string().optional(),
  url: z.string().optional(),
  type: z.enum(['unesco','government','tourism','academic','museum','historical','transport','local-authority','news','reference']).optional(),
  note: z.string().optional()
});
// Shared trust/attribution fields mixed into every content type.
const editorial = {
  author: z.string().default('editorial-team'),     // -> team collection slug
  reviewedBy: z.string().default('editorial-review'),// -> reviewer collection slug
  lastReviewed: z.coerce.date().optional(),
  sources: z.array(sourceItem).default([])
};

// Cluster + intent classification (optional in Zod; the publishing validator enforces presence
// and validity against the central registries, avoiding build breakage + circular imports).
const classification = {
  cluster: z.string().optional(),            // canonical PRIMARY cluster id (alias of primaryCluster)
  primaryCluster: z.string().optional(),
  secondaryClusters: z.array(z.string()).default([]),
  relatedClusters: z.array(z.string()).default([]),
  intent: z.string().optional()
};

const province = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    heading: z.string().optional(),   // optional on-page H1 override (defaults to name)
    wilayaNumber: z.number().optional(),
    region,
    image: z.string(),
    imageAlt: z.string(),
    coordinates: z.object({ lat: z.number(), lng: z.number() }).optional(),
    gallery: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
    quickAnswer: z.string(),
    keyFacts,
    attractions: z.array(z.string()).default([]),
    unesco: z.array(z.string()).default([]),
    sameAs: z.array(z.string()).default([]),
    faqs: faq,
    related: z.array(reference('province')).default([]),
    featuredAttractions: z.array(z.string()).default([]),
    featuredExperiences: z.array(z.string()).default([]),
    featuredArticles: z.array(z.string()).default([]),
    seo,
    updated: z.coerce.date(),
    ...editorial,
    ...classification
  })
});

const destination = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    heading: z.string().optional(),   // optional on-page H1 override (defaults to name)
    province: z.string().optional(),
    region,
    image: z.string(),
    imageAlt: z.string(),
    gallery: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
    coordinates: z.object({ lat: z.number(), lng: z.number() }).optional(),
    sameAs: z.array(z.string()).default([]),
    quickAnswer: z.string(),
    keyFacts,
    faqs: faq,
    seo,
    updated: z.coerce.date(),
    ...editorial,
    ...classification
  })
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    region,
    durationDays: z.number(),
    priceFrom: z.number().optional(),
    currency: z.string().default('USD'),
    image: z.string(),
    imageAlt: z.string(),
    highlights: z.array(z.string()).default([]),
    itinerary: z.array(z.object({ day: z.string(), title: z.string(), text: z.string() })).default([]),
    stops: z.array(z.object({ name: z.string(), image: z.string(), alt: z.string(), note: z.string().optional() })).default([]),
    gallery: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
    quickAnswer: z.string(),
    faqs: faq,
    seo,
    updated: z.coerce.date(),
    ...editorial,
    ...classification
  })
});

const article = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    region: region.optional(),
    image: z.string(),
    imageAlt: z.string(),
    excerpt: z.string(),
    quickAnswer: z.string(),
    keyFacts,
    faqs: faq,
    readMinutes: z.number().default(6),
    // --- optional publishing-grade AI blocks (Phase 4A pillars) ---
    keyTakeaways: z.array(z.string()).default([]),
    stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    climate: z.array(z.object({ month: z.string(), tempC: z.string().optional(), rain: z.string().optional(), verdict: z.string().optional() })).default([]),
    climatePlace: z.string().optional(),
    seasons: z.array(z.object({ season: z.string(), rating: z.number(), note: z.string().optional() })).default([]),
    costs: z.array(z.object({ item: z.string(), budget: z.string().optional(), mid: z.string().optional(), high: z.string().optional() })).default([]),
    costCurrency: z.string().optional(),
    costNote: z.string().optional(),
    travelerProfiles: z.array(z.object({ type: z.string(), fit: z.enum(['great','good','limited']), note: z.string().optional() })).default([]),
    requirements: z.array(z.object({ label: z.string(), value: z.string(), required: z.boolean().optional() })).default([]),
    requirementsNote: z.string().optional(),
    commonMistakes: z.array(z.object({ mistake: z.string(), instead: z.string() })).default([]),
    comparisons: z.array(z.object({ caption: z.string().optional(), columns: z.array(z.string()), rows: z.array(z.object({ label: z.string(), href: z.string().optional(), cells: z.array(z.string()) })) })).default([]),
    practical: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    practicalTitle: z.string().optional(),
    frAlt: z.string().optional(),   // path to a French translation of this article (for hreflang)
    seo,
    published: z.coerce.date(),
    updated: z.coerce.date(),
    ...editorial,
    ...classification
  })
});

const question = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    category: z.string(),
    shortAnswer: z.string(),
    keyFacts,
    related: z.array(reference('question')).default([]),
    seo,
    updated: z.coerce.date(),
    ...editorial,
    ...classification
  })
});

// ----- Editorial authority collections -----
const team = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    kind: z.enum(['team','editor','author','contributor']).default('author'),
    isOrganization: z.boolean().default(false), // true for the collective editorial team entity
    shortBio: z.string(),
    image: z.string().optional(),
    expertise: z.array(z.string()).default([]),
    regions: z.array(z.string()).default([]),
    researchFocus: z.string().optional(),
    languages: z.array(z.string()).default([]),
    specializations: z.array(z.string()).default([]),
    methodology: z.string().optional(),
    researchStandards: z.string().optional(),
    credentials: z.array(z.string()).default([]),
    email: z.string().optional(),
    sameAs: z.array(z.string()).default([]),
    order: z.number().default(50),
    seo: seo.optional(),
    updated: z.coerce.date()
  })
});

const reviewer = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    isOrganization: z.boolean().default(false),
    shortBio: z.string(),
    image: z.string().optional(),
    reviewExpertise: z.array(z.string()).default([]),
    reviewAreas: z.array(z.string()).default([]),
    factCheckDomains: z.array(z.string()).default([]),
    verificationProcess: z.string().optional(),
    reviewStandards: z.string().optional(),
    authorityLevel: z.string().optional(),
    sameAs: z.array(z.string()).default([]),
    order: z.number().default(50),
    seo: seo.optional(),
    updated: z.coerce.date()
  })
});

const editorialPage = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().default(50),
    ...classification,
    seo: seo.optional(),
    updated: z.coerce.date()
  })
});

export const collections = { province, destination, experience, article, question, team, reviewer, editorial: editorialPage };
