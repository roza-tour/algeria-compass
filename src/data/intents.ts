// Central INTENT registry. Every future page targets one primary intent. Mappings here drive
// schema choice, AI blocks, FAQ style, conversion and linking — read, never hardcoded per page.
import type { IntentId } from './clusters';

export interface Intent {
  id: IntentId;
  name: string;
  description: string;
  contentTypes: string[];      // collection types that typically carry this intent
  schema: string[];            // schema.org types to emit
  conversion: string;          // expected conversion behaviour
  aiOpportunities: string[];   // which AI blocks serve this intent (component ids, see ai-components)
  faqStyle: string;            // how FAQs should read for this intent
  linking: string;             // internal-linking emphasis
  answerStyle: string;         // how the QuickAnswer should read
}

export const intents: Intent[] = [
  { id: 'informational', name: 'Informational', description: 'User wants to understand a topic.',
    contentTypes: ['article','question','destination'], schema: ['Article','FAQPage'],
    conversion: 'Engagement + onward links; no hard ask.', aiOpportunities: ['quick-answer','key-takeaways','entity-snapshot','timeline'],
    faqStyle: 'What/why/who definitional questions.', linking: 'Link to cluster pillar + related entities.', answerStyle: 'Define plainly in ≤60 words.' },
  { id: 'planning', name: 'Planning', description: 'User is organising a trip.',
    contentTypes: ['article','province','experience'], schema: ['Article','HowTo','FAQPage','ItemList'],
    conversion: 'Plan-a-journey enquiry once a route is shaped.', aiOpportunities: ['trip-duration-planner','seasonal-recommendation','travel-planning-block','travel-cost-table'],
    faqStyle: 'When/how-long/how-much questions.', linking: 'Link logistics pillars (transport, safety, when-to-visit).', answerStyle: 'Actionable recommendation first.' },
  { id: 'comparison', name: 'Comparison', description: 'User is weighing options.',
    contentTypes: ['article'], schema: ['Article','ItemList'],
    conversion: 'Decision support → planning.', aiOpportunities: ['quick-comparison-matrix','traveler-profile-match'],
    faqStyle: 'X vs Y, which is better for…', linking: 'Link both compared subjects + decision pillar.', answerStyle: 'State the verdict up front.' },
  { id: 'decision', name: 'Decision', description: 'User is deciding whether/what to do.',
    contentTypes: ['article','question'], schema: ['Article','FAQPage'],
    conversion: 'Reassurance → enquiry.', aiOpportunities: ['traveler-profile-match','common-mistakes','expert-recommendation'],
    faqStyle: 'Should I / is it worth / is it safe.', linking: 'Link reassurance + planning pillars.', answerStyle: 'Give a clear, qualified yes/no.' },
  { id: 'practical', name: 'Practical', description: 'User needs to do a concrete task.',
    contentTypes: ['article','question'], schema: ['Article','HowTo','FAQPage'],
    conversion: 'Task completion → trust.', aiOpportunities: ['practical-info-box','travel-requirements','common-mistakes','travel-cost-table'],
    faqStyle: 'How do I / what do I need.', linking: 'Link adjacent practical guides.', answerStyle: 'Direct steps or requirement first.' },
  { id: 'inspirational', name: 'Inspirational', description: 'User is dreaming/discovering.',
    contentTypes: ['article','destination','experience'], schema: ['Article','Place','ImageObject'],
    conversion: 'Save/return + soft interest.', aiOpportunities: ['destination-snapshot','travel-statistics','expert-recommendation'],
    faqStyle: 'What makes X special / highlights.', linking: 'Link to plan-it pillars + galleries.', answerStyle: 'Evocative but factual hook.' },
  { id: 'educational', name: 'Educational', description: 'User wants depth (history/culture).',
    contentTypes: ['article','destination'], schema: ['Article','LandmarksOrHistoricalBuildings'],
    conversion: 'Authority + deeper reading.', aiOpportunities: ['timeline','key-takeaways','entity-snapshot'],
    faqStyle: 'When/who/why historical.', linking: 'Link era + sites + UNESCO.', answerStyle: 'Summarise the era/idea in ≤60 words.' },
  { id: 'navigation', name: 'Navigation', description: 'User wants a specific place/section.',
    contentTypes: ['province','destination'], schema: ['Place','CollectionPage'],
    conversion: 'Route to the right page.', aiOpportunities: ['province-snapshot','destination-snapshot','entity-links'],
    faqStyle: 'Where is / how to reach.', linking: 'Strong cross-links to siblings.', answerStyle: 'Locate it immediately.' },
  { id: 'research', name: 'Research', description: 'Deep/academic interest.',
    contentTypes: ['article','question'], schema: ['Article','Dataset'],
    conversion: 'Citation + authority.', aiOpportunities: ['timeline','travel-statistics','entity-snapshot'],
    faqStyle: 'Detailed factual.', linking: 'Link sources + knowledge graph.', answerStyle: 'Precise, sourced.' },
  { id: 'emergency', name: 'Emergency / Safety', description: 'Time-sensitive safety need.',
    contentTypes: ['article','question'], schema: ['Article','FAQPage'],
    conversion: 'Right answer fast; trust.', aiOpportunities: ['practical-info-box','common-mistakes'],
    faqStyle: 'Is it safe / what to do if.', linking: 'Link official advisories + safety pillar.', answerStyle: 'Calm, direct, sourced.' },
];

export const intentById = (id: IntentId) => intents.find(i => i.id === id);
export const intentIds = intents.map(i => i.id);
