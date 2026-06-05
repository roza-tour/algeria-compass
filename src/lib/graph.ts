// Algeria relationship engine — derives a real knowledge graph from the entity dataset.
import { entities, type Entity, type EntityType } from '../data/algeria';

const byId = new Map<string, Entity>();
for (const e of entities) byId.set(e.id, e);

const byType = new Map<EntityType, Entity[]>();
for (const e of entities) {
  if (!byType.has(e.type)) byType.set(e.type, []);
  byType.get(e.type)!.push(e);
}

// containment: parent -> children (derived, so the dataset stays DRY)
const childrenIndex = new Map<string, Entity[]>();
for (const e of entities) {
  if (e.parent) {
    if (!childrenIndex.has(e.parent)) childrenIndex.set(e.parent, []);
    childrenIndex.get(e.parent)!.push(e);
  }
}
// reverse explicit relations (so links are bidirectional)
const reverseRelated = new Map<string, Set<string>>();
for (const e of entities) for (const r of e.related || []) {
  if (!reverseRelated.has(r)) reverseRelated.set(r, new Set());
  reverseRelated.get(r)!.add(e.id);
}

export const PLACE_ATTRACTION_TYPES: EntityType[] = [
  'unesco','roman-site','islamic-site','ottoman-site','french-site','historical-building',
  'museum','city','national-park','sahara-area','mountain-area','coast-area',
];
const isAttraction = (e: Entity) => PLACE_ATTRACTION_TYPES.includes(e.type);

export const getEntity = (id: string) => byId.get(id);
export const allEntities = () => entities;
export const entitiesByType = (t: EntityType) => byType.get(t) || [];
export const childrenOf = (id: string) => childrenIndex.get(id) || [];
export const entitiesInRegion = (regionId: string) =>
  entities.filter(e => e.region === regionId && e.type !== 'region');

// content <-> entity mapping
export const entityForContent = (collection: string, slug: string) =>
  entities.find(e => e.contentSlug && e.contentSlug.collection === collection && e.contentSlug.slug === slug);
export const contentForEntity = (e?: Entity) => e?.contentSlug;

// effective themes: explicit, plus themes inherited from contained entities (place -> its sites),
// plus, for regions/country, themes of everything beneath them. Memoised.
const themeCache = new Map<string, string[]>();
export function effectiveThemes(id: string): string[] {
  if (themeCache.has(id)) return themeCache.get(id)!;
  const e = byId.get(id);
  if (!e) return [];
  const set = new Set<string>(e.themes || []);
  // inherit from direct children (e.g. province -> its UNESCO/Roman sites)
  for (const c of childrenOf(id)) for (const t of c.themes || []) set.add(t);
  // regions and country aggregate from everything in scope
  if (e.type === 'region') for (const x of entitiesInRegion(id)) for (const t of x.themes || []) set.add(t);
  if (e.type === 'country') for (const x of entities) for (const t of x.themes || []) set.add(t);
  const out = [...set];
  themeCache.set(id, out);
  return out;
}

// candidate pool around an entity: containment + same region + shared theme + explicit relations
function candidatePool(e: Entity): Entity[] {
  const ids = new Set<string>();
  const push = (x?: string | null) => { if (x && x !== e.id) ids.add(x); };
  childrenOf(e.id).forEach(c => push(c.id));
  push(e.parent);
  (e.related || []).forEach(push);
  (reverseRelated.get(e.id) || new Set()).forEach(push);
  const myThemes = new Set(effectiveThemes(e.id));
  if (e.region) entitiesInRegion(e.region).forEach(x => push(x.id));
  if (e.type === 'region') entitiesInRegion(e.id).forEach(x => push(x.id));
  // theme co-membership (themes themselves + entities carrying those themes)
  for (const t of myThemes) {
    push(t);
    (childrenIndex.get(t) || []).forEach(x => push(x.id)); // themes have no children; harmless
  }
  if (myThemes.size) for (const x of entities) {
    if (x.id === e.id) continue;
    if ((x.themes || []).some(t => myThemes.has(t))) push(x.id);
  }
  return [...ids].map(i => byId.get(i)!).filter(Boolean);
}

export interface Discovery {
  regions: Entity[];
  provinces: Entity[];
  attractions: Entity[];
  unesco: Entity[];
  themes: Entity[];
  historicalPeriods: Entity[];
  traditions: Entity[];
  foods: Entity[];
  architecture: Entity[];
}

const cap = <T,>(a: T[], n: number) => a.slice(0, n);

// Entity-based discovery (no random linking). Returns categorised related entities.
export function discover(id: string, limits: Partial<Record<keyof Discovery, number>> = {}): Discovery {
  const e = byId.get(id);
  const empty: Discovery = { regions:[], provinces:[], attractions:[], unesco:[], themes:[], historicalPeriods:[], traditions:[], foods:[], architecture:[] };
  if (!e) return empty;
  const pool = candidatePool(e);
  const myThemes = new Set(effectiveThemes(e.id));
  const themeMatch = (x: Entity) => (x.themes || []).some(t => myThemes.has(t));
  // rank: explicit/related & containment first (already in pool), then theme strength
  const score = (x: Entity) => {
    let s = 0;
    if ((e.related||[]).includes(x.id) || (x.related||[]).includes(e.id)) s += 5;
    if (x.parent === e.id || e.parent === x.id) s += 4;
    if (e.region && x.region === e.region) s += 2;
    if (themeMatch(x)) s += 1;
    return s;
  };
  const ranked = [...pool].sort((a,b)=>score(b)-score(a));
  const pick = (pred:(x:Entity)=>boolean, n:number) => cap(ranked.filter(pred), n);
  const region = e.type === 'region' ? e : (e.region ? byId.get(e.region) : undefined);
  return {
    regions: region ? [region] : [],
    provinces: pick(x => x.type === 'province', limits.provinces ?? 6),
    attractions: pick(isAttraction, limits.attractions ?? 8),
    unesco: pick(x => x.type === 'unesco', limits.unesco ?? 6),
    themes: pick(x => x.type === 'theme', limits.themes ?? 8),
    historicalPeriods: pick(x => x.type === 'historical-period', limits.historicalPeriods ?? 6),
    traditions: pick(x => x.type === 'tradition', limits.traditions ?? 6),
    foods: pick(x => x.type === 'food', limits.foods ?? 6),
    architecture: pick(x => x.type === 'architecture', limits.architecture ?? 6),
  };
}

// Generic related-entities list (mixed types, ranked) — for compact "related" strips.
export function relatedEntities(id: string, limit = 10, onlyTypes?: EntityType[]): Entity[] {
  const e = byId.get(id);
  if (!e) return [];
  const pool = candidatePool(e).filter(x => !onlyTypes || onlyTypes.includes(x.type));
  const myThemes = new Set(effectiveThemes(e.id));
  const score = (x: Entity) => {
    let s = 0;
    if ((e.related||[]).includes(x.id) || (x.related||[]).includes(e.id)) s += 5;
    if (x.parent === e.id || e.parent === x.id) s += 4;
    if (e.region && x.region === e.region) s += 2;
    if ((x.themes||[]).some(t=>myThemes.has(t))) s += 1;
    if (isAttraction(x)) s += 1;
    return s;
  };
  return cap([...pool].sort((a,b)=>score(b)-score(a)), limit);
}

// All entities that belong to a theme (direct theme membership), for hubs.
export function entitiesForTheme(themeId: string, onlyTypes?: EntityType[]): Entity[] {
  return entities.filter(e =>
    e.id !== themeId &&
    (e.themes || []).includes(themeId) &&
    (!onlyTypes || onlyTypes.includes(e.type))
  );
}

export function graphStats() {
  const total = entities.length;
  const withCoords = entities.filter(e => e.coordinates).length;
  const withParent = entities.filter(e => e.parent).length;
  const relationEdges = entities.reduce((n,e)=> n + (e.related?.length||0) + (e.parent?1:0) + (e.themes?.length||0), 0);
  const withContent = entities.filter(e => e.contentSlug).length;
  const orphans = entities.filter(e => !e.parent && e.type !== 'country' && !(e.related?.length) && !(e.themes?.length));
  const byTypeCount: Record<string, number> = {};
  for (const e of entities) byTypeCount[e.type] = (byTypeCount[e.type]||0)+1;
  return { total, withCoords, withParent, relationEdges, withContent, orphans, byTypeCount,
           density: +(relationEdges/total).toFixed(2) };
}
