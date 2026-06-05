import type { APIRoute } from 'astro';
import { clusters } from '../../data/clusters';
import { clusterEntities, clusterRelations, entityClusters, clusterStats } from '../../lib/clusters';
import { entities } from '../../data/algeria';

export const GET: APIRoute = () => {
  const clusterNodes = clusters.map(c => ({
    id: c.id, name: c.name, intent: c.primaryIntent, knowledgeHub: c.knowledgeHub ?? null,
    entities: clusterEntities(c.id).map(x => ({ id: x.entity.id, role: x.role, importance: x.importance })),
    related: clusterRelations(c.id).map(r => ({ id: r.cluster.id, shared: r.shared, explicit: r.explicit })),
  }));
  const entityNodes = entities.map(e => {
    const v = entityClusters(e.id);
    return { id: e.id, type: e.type, primaryCluster: v.primary?.id ?? null,
             secondaryClusters: v.secondary.map(c => c.id), authorityCluster: v.authority?.id ?? null };
  });
  const payload = { name: 'Algeria Compass cluster graph', generated: new Date().toISOString(),
    stats: clusterStats(), clusters: clusterNodes, entities: entityNodes };
  return new Response(JSON.stringify(payload), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
