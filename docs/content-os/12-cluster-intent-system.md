# Parts 2/5/6 — Cluster & Intent Intelligence System

The clusters that were *conceptual* in Phase 3 are now *first-class entities* with their own
registry, engine, hubs, schema fields, JSON export and validation. Nothing is hardcoded.

## Registries (single source of truth)
- **`src/data/clusters.ts`** — 16 clusters, each with: name, description, purpose, keywords,
  primaryIntent, intents[], audience, authorityGoal, supportingTypes, faqTypes, conversionGoal,
  knowledgeHub, relatedClusters, schemaTypes, a scalable **bridge** `{ themes, entityTypes }`,
  and a `specificity` (for deterministic primary-cluster selection).
- **`src/data/intents.ts`** — 10 intents, each mapping to contentTypes, schema, conversion,
  aiOpportunities (component ids), faqStyle, linking and answerStyle.

## Engine (`src/lib/clusters.ts`)
- `entityClusters(id)` → `{ primary, secondary[], authority, all[] }` for any of the 229 entities.
- `clusterEntities(id)` → entities ranked by importance, classified `anchor | core | supporting`.
- `clusterRelations(id)` → cluster→cluster links via shared entities + explicit `relatedClusters`.
- `clusterStats()` → coverage + per-cluster metrics + empty-cluster detection.
- **The bridge is why this scales:** an entity joins a cluster by matching the cluster's `themes`
  (via the knowledge-graph's theme inheritance) **or** its `entityTypes`. New entities connect
  automatically — no per-entity edits, ever.

## Relationship engine (`src/lib/recommend.ts`)
`recommend(ctx)` returns, for any page: recommended entity links, related clusters, the
intent-matched AI blocks, FAQ angles, schema types and citation hints. `relatedContent(ctx, entries)`
ranks sibling pages by shared cluster/region/intent. Templates call these instead of hand-linking.

## Schema fields (Part 3)
`primaryCluster`, `cluster`, `secondaryClusters[]`, `relatedClusters[]`, `intent` added to
province/destination/experience/article/question/editorial (optional in Zod to protect the build;
**the validator enforces presence + validity** against the registries). All 24 topical pages
were migrated — see `cluster-assignment.md`.

## Hubs (Part 4) — `/clusters/` + `/clusters/[cluster]`
Generated entirely from the registry + engine + graph: overview, purpose, stats (TravelStats),
anchor entities (EntitySnapshot), all entities (EntityLinks), pages in the cluster (by cluster
membership), related clusters, knowledge-hub link, CollectionPage + DefinedTerm + Breadcrumb schema.
Distinct from `/knowledge/` (entity/theme hubs) and cross-linked to them.

## Exports & viz (Part 5)
- `/clusters/graph.json` — entity→cluster (primary/secondary/authority), cluster→entity (with roles),
  cluster→cluster relations, and metrics. Machine-readable, regenerated each build.
- `/knowledge/graph.json` — the entity graph (unchanged).

## Coverage (from the live build)
- 16 clusters, **0 empty**; 169 cluster→cluster relation edges.
- **174/229 entities** connected to a cluster (the rest are themes/root/abstract types that act as
  the bridge mechanism rather than cluster members).
- All 24 topical pages carry a valid primary cluster (Cluster Coverage score **100**).

## Intent architecture (Part 6)
Every page targets one of 10 intents; the intent drives schema, AI blocks, FAQ style, conversion
and linking via `intents.ts`. The validator flags missing/invalid intent.
