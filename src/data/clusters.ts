// Central CLUSTER REGISTRY. Clusters are first-class entities. No cluster is hardcoded
// anywhere else — pages, hubs, validation and the relationship engine all read from here.
import type { EntityType } from './algeria';

export type IntentId =
  | 'informational' | 'planning' | 'comparison' | 'decision' | 'practical'
  | 'inspirational' | 'educational' | 'navigation' | 'research' | 'emergency';

export interface Cluster {
  id: string;                 // canonical slug, e.g. "algeria-sahara"
  name: string;
  description: string;
  purpose: string;
  keywords: string[];
  primaryIntent: IntentId;
  intents: IntentId[];
  audience: string;
  authorityGoal: string;
  supportingTypes: string[];      // content collection types that live in this cluster
  faqTypes: string[];
  conversionGoal: string;
  knowledgeHub?: string;          // graph theme slug this cluster pairs with
  relatedClusters: string[];      // cluster ids
  schemaTypes: string[];          // schema.org types pages in this cluster emit
  // --- entity bridge (scalable; connects the 229-entity graph without per-entity edits) ---
  bridge: { themes: string[]; entityTypes: EntityType[] };
  // higher = more specific; used to pick an entity's PRIMARY cluster deterministically
  specificity: number;
}

export const clusters: Cluster[] = [
  {
    id: 'algeria-travel-planning', name: 'Algeria Travel Planning',
    description: 'When to go, how to get around, what to budget and how to prepare for Algeria.',
    purpose: 'Convert curiosity into a confident, well-planned trip.',
    keywords: ['Algeria travel planning','plan a trip to Algeria','Algeria itinerary','how many days in Algeria'],
    primaryIntent: 'planning', intents: ['planning','practical','decision'],
    audience: 'First-time and returning visitors actively planning.',
    authorityGoal: 'Be the most complete, current planning reference for Algeria.',
    supportingTypes: ['article','question'], faqTypes: ['logistics','seasonal','budget'],
    conversionGoal: 'Plan-a-journey enquiry once a route is shaped.',
    knowledgeHub: 'travel-planning', relatedClusters: ['algeria-transportation','algeria-safety','algeria-sahara'],
    schemaTypes: ['Article','FAQPage','HowTo'],
    bridge: { themes: ['theme:travel-planning'], entityTypes: ['season','accommodation','travel-style'] }, specificity: 1,
  },
  {
    id: 'algeria-sahara', name: 'Algeria Sahara',
    description: 'The deep desert: Tassili, Tadrart, the Hoggar, ergs and oasis worlds.',
    purpose: 'Own the definitive English guide to the Algerian Sahara.',
    keywords: ['Algeria Sahara','Tassili nAjjer','Tadrart','Algerian desert tour','Djanet'],
    primaryIntent: 'inspirational', intents: ['inspirational','planning','decision','practical'],
    audience: 'Adventure, photography and bucket-list desert travellers.',
    authorityGoal: 'Top-cited source for Algerian desert travel and rock art.',
    supportingTypes: ['article','destination','experience','question'], faqTypes: ['seasonal','safety','logistics'],
    conversionGoal: 'Enquiry for a guided desert journey.',
    knowledgeHub: 'sahara', relatedClusters: ['algeria-adventure','algeria-photography','algeria-unesco'],
    schemaTypes: ['Article','Place','TouristAttraction','FAQPage'],
    bridge: { themes: ['theme:sahara'], entityTypes: ['sahara-area'] }, specificity: 3,
  },
  {
    id: 'algeria-history', name: 'Algeria History',
    description: 'From prehistory and Numidia through Rome, Islam, the Ottomans and independence.',
    purpose: 'Explain Algeria through time and where to see each era.',
    keywords: ['Algeria history','Roman Algeria','Numidian kingdom','ancient Algeria'],
    primaryIntent: 'educational', intents: ['educational','informational','research'],
    audience: 'History-minded travellers, students, researchers.',
    authorityGoal: 'Authoritative, sourced narrative of Algerian history for travellers.',
    supportingTypes: ['article','destination','question'], faqTypes: ['educational','sites'],
    conversionGoal: 'Deeper engagement; route to history-led journeys.',
    knowledgeHub: 'history', relatedClusters: ['algeria-unesco','algeria-architecture','algeria-culture'],
    schemaTypes: ['Article','LandmarksOrHistoricalBuildings','FAQPage'],
    bridge: { themes: ['theme:history','theme:roman-heritage'], entityTypes: ['historical-period','roman-site'] }, specificity: 3,
  },
  {
    id: 'algeria-culture', name: 'Algeria Culture',
    description: 'Amazigh and Arab heritage, music, crafts, language and daily life.',
    purpose: 'Represent living Algerian culture with depth and respect.',
    keywords: ['Algerian culture','Amazigh culture','rai music','Andalusian music Algeria'],
    primaryIntent: 'informational', intents: ['informational','educational','inspirational'],
    audience: 'Culturally curious travellers.',
    authorityGoal: 'Respectful, accurate cultural reference foregrounding local voices.',
    supportingTypes: ['article','question'], faqTypes: ['etiquette','language','customs'],
    conversionGoal: 'Cultural-journey interest.',
    knowledgeHub: 'culture', relatedClusters: ['algeria-festivals','algeria-history','algeria-food'],
    schemaTypes: ['Article','FAQPage'],
    bridge: { themes: ['theme:cultural','theme:amazigh'], entityTypes: ['tradition','language'] }, specificity: 2,
  },
  {
    id: 'algeria-food', name: 'Algeria Food',
    description: 'Couscous, regional dishes, street food, pastries and tea culture.',
    purpose: 'Be the reference on Algerian cuisine for visitors.',
    keywords: ['Algerian food','Algerian cuisine','couscous','what to eat in Algeria'],
    primaryIntent: 'informational', intents: ['informational','planning','inspirational'],
    audience: 'Food-led travellers.',
    authorityGoal: 'Definitive, regionally accurate Algerian food guide.',
    supportingTypes: ['article','question'], faqTypes: ['dishes','dietary','etiquette'],
    conversionGoal: 'Culinary-interest engagement.',
    knowledgeHub: 'cuisine', relatedClusters: ['algeria-culture','algeria-travel-planning'],
    schemaTypes: ['Article','ItemList','FAQPage'],
    bridge: { themes: ['theme:cuisine'], entityTypes: ['food'] }, specificity: 3,
  },
  {
    id: 'algeria-unesco', name: 'Algeria UNESCO',
    description: "Algeria's seven UNESCO World Heritage Sites and the heritage around them.",
    purpose: 'Own search and citation for Algeria + UNESCO.',
    keywords: ['Algeria UNESCO','UNESCO sites Algeria','Djemila','Timgad','Mzab Valley'],
    primaryIntent: 'informational', intents: ['informational','educational','planning'],
    audience: 'Heritage travellers and researchers.',
    authorityGoal: 'Most complete English guide to Algeria’s World Heritage.',
    supportingTypes: ['article','destination','question'], faqTypes: ['sites','visiting'],
    conversionGoal: 'Heritage-journey interest.',
    knowledgeHub: 'unesco', relatedClusters: ['algeria-history','algeria-architecture','algeria-sahara'],
    schemaTypes: ['Article','LandmarksOrHistoricalBuildings','ItemList','FAQPage'],
    bridge: { themes: ['theme:unesco'], entityTypes: ['unesco'] }, specificity: 4,
  },
  {
    id: 'algeria-photography', name: 'Algeria Photography',
    description: 'Where, when and how to photograph Algeria, respectfully.',
    purpose: 'Capture the photography-travel audience.',
    keywords: ['Algeria photography','photographing the Sahara','best photo spots Algeria'],
    primaryIntent: 'inspirational', intents: ['inspirational','planning','practical'],
    audience: 'Photographers and content creators.',
    authorityGoal: 'Go-to photo-travel guide for Algeria.',
    supportingTypes: ['article'], faqTypes: ['gear','permissions','timing'],
    conversionGoal: 'Photography-journey interest.',
    knowledgeHub: 'photography', relatedClusters: ['algeria-sahara','algeria-mountains','algeria-architecture'],
    schemaTypes: ['Article','FAQPage'],
    bridge: { themes: ['theme:photography'], entityTypes: [] }, specificity: 2,
  },
  {
    id: 'algeria-road-trips', name: 'Algeria Road Trips',
    description: 'Driving routes linking coast, mountains, Roman cities and desert.',
    purpose: 'Own overland-route planning for Algeria.',
    keywords: ['Algeria road trip','driving in Algeria','Algeria itinerary by car'],
    primaryIntent: 'planning', intents: ['planning','practical','inspirational'],
    audience: 'Independent and overland travellers.',
    authorityGoal: 'Best route library for Algeria.',
    supportingTypes: ['article'], faqTypes: ['routes','driving','logistics'],
    conversionGoal: 'Self-drive or guided-route enquiry.',
    knowledgeHub: 'road-trips', relatedClusters: ['algeria-transportation','algeria-sahara','algeria-history'],
    schemaTypes: ['Article','ItemList','FAQPage'],
    bridge: { themes: ['theme:road-trips'], entityTypes: [] }, specificity: 2,
  },
  {
    id: 'algeria-luxury', name: 'Algeria Luxury Travel',
    description: 'Premium, private and curated ways to experience Algeria.',
    purpose: 'Serve the high-value private-travel audience honestly.',
    keywords: ['Algeria luxury travel','private Algeria tour','luxury Sahara Algeria'],
    primaryIntent: 'decision', intents: ['decision','planning','inspirational'],
    audience: 'Premium private travellers.',
    authorityGoal: 'Credible premium-travel reference (no false 5-star claims).',
    supportingTypes: ['article','experience'], faqTypes: ['standards','logistics'],
    conversionGoal: 'Private-journey enquiry.',
    knowledgeHub: 'luxury', relatedClusters: ['algeria-sahara','algeria-unesco','algeria-travel-planning'],
    schemaTypes: ['Article','FAQPage'],
    bridge: { themes: ['theme:luxury'], entityTypes: [] }, specificity: 2,
  },
  {
    id: 'algeria-family', name: 'Algeria Family Travel',
    description: 'Travelling Algeria with children — coast, easy heritage, oases.',
    purpose: 'Reassure and guide family travellers.',
    keywords: ['Algeria with kids','family travel Algeria','is Algeria good for families'],
    primaryIntent: 'planning', intents: ['planning','practical','decision'],
    audience: 'Families.',
    authorityGoal: 'Trusted family-travel reference for Algeria.',
    supportingTypes: ['article','question'], faqTypes: ['safety','logistics','activities'],
    conversionGoal: 'Family-journey enquiry.',
    knowledgeHub: 'family', relatedClusters: ['algeria-beaches','algeria-safety','algeria-travel-planning'],
    schemaTypes: ['Article','FAQPage'],
    bridge: { themes: ['theme:family'], entityTypes: [] }, specificity: 2,
  },
  {
    id: 'algeria-safety', name: 'Algeria Safety',
    description: 'Honest, current safety guidance for travelling Algeria.',
    purpose: 'Answer the #1 hesitation with calm, sourced facts.',
    keywords: ['is Algeria safe','Algeria safety','solo travel Algeria','Algeria travel advisory'],
    primaryIntent: 'decision', intents: ['decision','practical','emergency'],
    audience: 'Anyone deciding whether to go.',
    authorityGoal: 'Most trusted, current safety reference for Algeria.',
    supportingTypes: ['article','question'], faqTypes: ['safety','solo','health'],
    conversionGoal: 'Reassurance → planning.',
    knowledgeHub: 'travel-planning', relatedClusters: ['algeria-travel-planning','algeria-transportation','algeria-family'],
    schemaTypes: ['Article','FAQPage'],
    bridge: { themes: [], entityTypes: ['region'] }, specificity: 1,
  },
  {
    id: 'algeria-transportation', name: 'Algeria Transportation',
    description: 'Flights, rail, buses, shared taxis, metros and desert 4x4.',
    purpose: 'Make moving around Algeria clear and current.',
    keywords: ['transport in Algeria','Algeria trains','getting around Algeria','Air Algerie'],
    primaryIntent: 'practical', intents: ['practical','planning','navigation'],
    audience: 'Active trip-planners.',
    authorityGoal: 'Most current Algeria transport reference.',
    supportingTypes: ['article','question'], faqTypes: ['routes','costs','booking'],
    conversionGoal: 'Logistics support → enquiry.',
    knowledgeHub: 'travel-planning', relatedClusters: ['algeria-travel-planning','algeria-road-trips','algeria-safety'],
    schemaTypes: ['Article','FAQPage','HowTo'],
    bridge: { themes: [], entityTypes: ['transport'] }, specificity: 3,
  },
  {
    id: 'algeria-architecture', name: 'Algeria Architecture',
    description: 'Mozabite, Roman, Andalusian, Ottoman and colonial building traditions.',
    purpose: 'Be the reference on Algerian architecture.',
    keywords: ['Algerian architecture','Mzab architecture','Casbah Algiers','Andalusian Tlemcen'],
    primaryIntent: 'educational', intents: ['educational','informational','inspirational'],
    audience: 'Architecture and design enthusiasts.',
    authorityGoal: 'Authoritative architecture reference for Algeria.',
    supportingTypes: ['article','destination','question'], faqTypes: ['styles','sites'],
    conversionGoal: 'Heritage-journey interest.',
    knowledgeHub: 'architecture', relatedClusters: ['algeria-history','algeria-unesco','algeria-culture'],
    schemaTypes: ['Article','LandmarksOrHistoricalBuildings','FAQPage'],
    bridge: { themes: ['theme:architecture'], entityTypes: ['architecture','islamic-site','ottoman-site','french-site','historical-building'] }, specificity: 3,
  },
  {
    id: 'algeria-festivals', name: 'Algeria Festivals',
    description: 'Yennayer, Sebeiba, Timgad, raï and other Algerian festivals.',
    purpose: 'Capture event- and calendar-led travel interest.',
    keywords: ['Algeria festivals','Yennayer','Sebeiba Djanet','Timgad festival'],
    primaryIntent: 'planning', intents: ['planning','inspirational','informational'],
    audience: 'Event- and culture-led travellers.',
    authorityGoal: 'Definitive Algerian festival calendar and guide.',
    supportingTypes: ['article','question'], faqTypes: ['dates','what-to-expect'],
    conversionGoal: 'Date-led journey interest.',
    knowledgeHub: 'culture', relatedClusters: ['algeria-culture','algeria-history'],
    schemaTypes: ['Article','Event','FAQPage'],
    bridge: { themes: [], entityTypes: ['festival'] }, specificity: 3,
  },
  {
    id: 'algeria-beaches', name: 'Algeria Beaches & Coast',
    description: "Algeria's 1,600 km Mediterranean coast, beaches and coastal cities.",
    purpose: 'Own Algeria coastal-travel search.',
    keywords: ['Algeria beaches','Algerian coast','Jijel coast','best beaches Algeria'],
    primaryIntent: 'inspirational', intents: ['inspirational','planning','informational'],
    audience: 'Summer, family and coastal travellers.',
    authorityGoal: 'Best English coast guide for Algeria.',
    supportingTypes: ['article','destination','question'], faqTypes: ['beaches','seasonal'],
    conversionGoal: 'Coastal-trip interest.',
    knowledgeHub: 'coast', relatedClusters: ['algeria-family','algeria-travel-planning','algeria-photography'],
    schemaTypes: ['Article','Place','FAQPage'],
    bridge: { themes: ['theme:coast'], entityTypes: ['coast-area'] }, specificity: 3,
  },
  {
    id: 'algeria-mountains', name: 'Algeria Mountains',
    description: 'The Djurdjura, Aurès, Hoggar and Atlas ranges and their parks.',
    purpose: 'Own Algeria mountain-travel search.',
    keywords: ['Algeria mountains','Djurdjura','Aures','Hoggar trekking'],
    primaryIntent: 'inspirational', intents: ['inspirational','planning','practical'],
    audience: 'Trekkers and nature travellers.',
    authorityGoal: 'Best English mountain guide for Algeria.',
    supportingTypes: ['article','destination','question'], faqTypes: ['trekking','seasonal'],
    conversionGoal: 'Mountain/adventure interest.',
    knowledgeHub: 'mountains', relatedClusters: ['algeria-adventure','algeria-photography','algeria-culture'],
    schemaTypes: ['Article','Place','FAQPage'],
    bridge: { themes: ['theme:mountains'], entityTypes: ['mountain-area','national-park'] }, specificity: 3,
  },
];

export const clusterById = (id: string) => clusters.find(c => c.id === id);
export const clusterIds = clusters.map(c => c.id);
