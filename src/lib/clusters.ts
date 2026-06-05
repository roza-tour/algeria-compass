// Cluster intelligence engine. Derives entity↔cluster, cluster↔entity and cluster↔cluster
// relationships from the central registry + the knowledge graph. Zero hardcoding.
import { clusters, clusterById, type Cluster } from '../data/clusters';
import { entities, type Entity, type EntityType } from '../data/algeria';
import { effectiveThemes, getEntity } from './graph';

// importance weight per entity type — drives "authority cluster" + ranking. Tunable, central.
const IMPORTANCE: Partial<Record<EntityType, number>> = {
  country: 10, unesco: 9, region: 7, province: 6, 'roman-site': 6, 'sahara-area': 6,
  'islamic-site': 5, 'mountain-area': 5, 'coast-area': 5, museum: 4, 'national-park': 4,
  'ottoman-site': 4, city: 4, 'historical-building': 4, 'french-site': 3,
  'historical-period': 5, food: 3, tradition: 3, architecture: 4, festival: 4,
  language: 3, transport: 4, season: 3, accommodation: 3, 'travel-style': 2, theme: 2,
};
export const entityImportance = (e: Entity) => IMPORTANCE[e.type] ?? 2;

// does an entity belong to a cluster? (theme OR entity-type bridge — fully scalable)
function entityInCluster(e: Entity, c: Cluster): boolean {
  if (c.bridge.entityTypes.includes(e.type)) return true;
  const themes = new Set(effectiveThemes(e.id));
  return c.bridge.themes.some(t => themes.has(t));
}

export interface EntityClusterView {
  primary?: Cluster;
  secondary: Cluster[];
  authority?: Cluster;   // cluster this entity most strengthens (importance-weighted)
  all: Cluster[];
}

const _entityClusters = new Map<string, EntityClusterView>();
export function entityClusters(entityId: string): EntityClusterView {
  if (_entityClusters.has(entityId)) return _entityClusters.get(entityId)!;
  const e = getEntity(entityId);
  const empty: EntityClusterView = { secondary: [], all: [] };
  if (!e) return empty;
  const matched = clusters.filter(c => entityInCluster(e, c));
  // primary = most specific matching cluster (highest specificity, then importance of fit)
  const sorted = [...matched].sort((a, b) => b.specificity - a.specificity);
  const view: EntityClusterView = {
    primary: sorted[0],
    secondary: sorted.slice(1),
    authority: sorted[0],   // an entity most strengthens its most-specific cluster
    all: sorted,
  };
  _entityClusters.set(entityId, view);
  return view;
}

// cluster -> entities (ranked by importance), with role classification
export interface ClusterEntity { entity: Entity; importance: number; role: 'anchor' | 'core' | 'supporting'; }
const _clusterEntities = new Map<string, ClusterEntity[]>();
export function clusterEntities(clusterId: string): ClusterEntity[] {
  if (_clusterEntities.has(clusterId)) return _clusterEntities.get(clusterId)!;
  const c = clusterById(clusterId);
  if (!c) return [];
  const list = entities
    .filter(e => entityInCluster(e, c))
    .map(e => ({ entity: e, importance: entityImportance(e) }))
    .sort((a, b) => b.importance - a.importance)
    .map((x, i) => ({ ...x, role: (i === 0 ? 'anchor' : x.importance >= 5 ? 'core' : 'supporting') as ClusterEntity['role'] }));
  _clusterEntities.set(clusterId, list);
  return list;
}

// cluster -> cluster relations: explicit relatedClusters + shared-entity strength
export interface ClusterLink { cluster: Cluster; shared: number; explicit: boolean; }
export function clusterRelations(clusterId: string): ClusterLink[] {
  const c = clusterById(clusterId);
  if (!c) return [];
  const mine = new Set(clusterEntities(clusterId).map(x => x.entity.id));
  const out: ClusterLink[] = [];
  for (const other of clusters) {
    if (other.id === clusterId) continue;
    const shared = clusterEntities(other.id).filter(x => mine.has(x.entity.id)).length;
    const explicit = c.relatedClusters.includes(other.id);
    if (shared > 0 || explicit) out.push({ cluster: other, shared, explicit });
  }
  return out.sort((a, b) => (b.explicit ? 1 : 0) - (a.explicit ? 1 : 0) || b.shared - a.shared);
}

// metrics for the audit + hub pages
export function clusterStats() {
  const rows = clusters.map(c => {
    const ents = clusterEntities(c.id);
    return {
      id: c.id, name: c.name, entities: ents.length,
      anchors: ents.filter(e => e.role === 'anchor').length,
      core: ents.filter(e => e.role === 'core').length,
      related: clusterRelations(c.id).length,
      hub: c.knowledgeHub ?? null,
    };
  });
  const connected = entities.filter(e => entityClusters(e.id).all.length > 0).length;
  return {
    clusters: clusters.length,
    entitiesConnected: connected,
    entitiesTotal: entities.length,
    coverage: +(100 * connected / entities.length).toFixed(1),
    emptyClusters: rows.filter(r => r.entities === 0).map(r => r.id),
    rows,
  };
}

export { clusters, clusterById };
