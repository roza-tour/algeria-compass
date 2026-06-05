// Content relationship engine. Given a page's context, generate recommendations automatically
// from the knowledge graph + cluster registry + intent taxonomy. Pure (no content I/O); pages
// pass their collection entries to scoreContent() to rank related pages.
import { clusterById, clusterRelations, entityClusters } from './clusters';
import { intentById } from '../data/intents';
import type { IntentId } from './clusters';
import { discover, relatedEntities, entityForContent, effectiveThemes, type Entity } from './graph';

export interface RecoContext {
  collection: string;
  slug?: string;
  region?: string;               // site thematic region (sahara, roman, …)
  primaryCluster?: string;
  secondaryClusters?: string[];
  intent?: IntentId;
  entityId?: string;             // explicit graph entity id, if known
}

export interface Recommendations {
  entityId?: string;
  entities: Entity[];                 // recommended entity links (graph-driven)
  clusters: { id: string; name: string; shared: number; explicit: boolean }[];
  aiBlocks: string[];                 // component ids to include (from intent)
  faqTypes: string[];                 // FAQ angles to cover (from cluster)
  schemaTypes: string[];              // schema.org types to emit (intent ∪ cluster)
  citationHints: string[];           // sourcing reminders
}

function resolveEntityId(ctx: RecoContext): string | undefined {
  if (ctx.entityId) return ctx.entityId;
  if (ctx.slug) { const e = entityForContent(ctx.collection, ctx.slug); if (e) return e.id; }
  return undefined;
}

export function recommend(ctx: RecoContext): Recommendations {
  const eid = resolveEntityId(ctx);
  const cluster = ctx.primaryCluster ? clusterById(ctx.primaryCluster) : undefined;
  const intent = ctx.intent ? intentById(ctx.intent) : undefined;

  // entity links: from the graph if we can resolve an entity; else from the cluster's entities
  let entities: Entity[] = [];
  if (eid) entities = relatedEntities(eid, 12);
  else if (cluster) {
    const d = discover('country:algeria'); // fallback broad
    entities = d.attractions.slice(0, 6);
  }

  const clusters = cluster ? clusterRelations(cluster.id).map(r => ({
    id: r.cluster.id, name: r.cluster.name, shared: r.shared, explicit: r.explicit,
  })) : [];

  const aiBlocks = intent ? [...intent.aiOpportunities] : [];
  const faqTypes = cluster ? [...cluster.faqTypes] : [];
  const schemaTypes = Array.from(new Set([...(intent?.schema ?? []), ...(cluster?.schemaTypes ?? [])]));

  const citationHints: string[] = [];
  if (cluster?.id === 'algeria-unesco') citationHints.push('Cite the UNESCO World Heritage list URL for each site.');
  if (cluster?.id === 'algeria-safety' || ctx.intent === 'emergency') citationHints.push('Cite a named, dated government travel advisory.');
  if (cluster?.id === 'algeria-history') citationHints.push('Cite an encyclopaedic/scholarly source for dates and dynasties.');
  if (cluster?.id === 'algeria-transportation') citationHints.push('Cite operator/official transport pages; stamp lastReviewed.');
  if (!citationHints.length) citationHints.push('Add ≥1 authoritative source; cornerstones ≥3, cited inline.');

  return { entityId: eid, entities, clusters, aiBlocks, faqTypes, schemaTypes, citationHints };
}

// Rank a content entry's relevance to a context (shared primary cluster > shared cluster >
// shared region/theme > shared entity neighbourhood). Used to auto-build "related content".
export function scoreContent(ctx: RecoContext, data: any): number {
  let s = 0;
  const pc = ctx.primaryCluster;
  const dc = data.primaryCluster || data.cluster;
  const dsec: string[] = data.secondaryClusters || [];
  if (pc && dc === pc) s += 6;
  if (pc && dsec.includes(pc)) s += 3;
  for (const c of ctx.secondaryClusters || []) { if (dc === c) s += 2; if (dsec.includes(c)) s += 1; }
  if (ctx.region && data.region === ctx.region) s += 2;
  if (ctx.intent && data.intent === ctx.intent) s += 1;
  return s;
}

// Convenience: rank+slice a list of {slug,data} entries for "you may also like".
export function relatedContent(ctx: RecoContext, entries: { slug: string; data: any }[], limit = 6) {
  return entries
    .filter(e => e.slug !== ctx.slug)
    .map(e => ({ e, score: scoreContent(ctx, e.data) }))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(x => x.e);
}
