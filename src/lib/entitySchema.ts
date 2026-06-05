// Schema.org emitter driven by the entity graph.
import { type Entity } from '../data/algeria';
import { getEntity, discover } from './graph';

const clean = (s: string) => s.replace(/\/$/, '');

const COLLECTION_PATH: Record<string, string> = {
  province: '/provinces/', destination: '/destinations/', experience: '/experiences/',
  article: '/blog/', question: '/questions/',
};

export function entityUrl(site: string, e: Entity): string {
  const s = clean(site);
  if (e.contentSlug) return `${s}${COLLECTION_PATH[e.contentSlug.collection] || '/'}${e.contentSlug.slug}/`;
  if (e.type === 'province') return `${s}/knowledge/provinces/#${e.slug}`;
  return `${s}/knowledge/#${e.id}`;
}
export const entityNodeId = (site: string, e: Entity) => `${clean(site)}/knowledge/#${e.id}`;

// nested containedInPlace chain: entity -> parent -> ... -> country
function containment(site: string, e: Entity, depth = 0): any {
  const parent = e.parent ? getEntity(e.parent) : undefined;
  if (!parent || depth > 4) return undefined;
  return {
    '@type': parent.schemaType || 'Place',
    '@id': entityNodeId(site, parent),
    name: parent.name,
    ...(containment(site, parent, depth + 1) ? { containedInPlace: containment(site, parent, depth + 1) } : {}),
  };
}

// One schema.org node for an entity (Place / AdministrativeArea / Museum / Landmark / DefinedTerm ...).
export function entityNode(site: string, e: Entity): any {
  const node: any = {
    '@type': e.schemaType || 'Thing',
    '@id': entityNodeId(site, e),
    name: e.name,
    description: e.description,
    url: entityUrl(site, e),
  };
  if (e.altNames?.length) node.alternateName = e.altNames;
  if (e.sameAs?.length) node.sameAs = e.sameAs;
  if (e.coordinates) node.geo = { '@type': 'GeoCoordinates', latitude: e.coordinates.lat, longitude: e.coordinates.lng };
  const contained = containment(site, e);
  if (contained && e.schemaType !== 'DefinedTerm') node.containedInPlace = contained;
  if (e.type === 'province' && e.wilayaNumber) {
    node.identifier = `DZ-${String(e.wilayaNumber).padStart(2, '0')}`;
  }
  if (e.schemaType === 'DefinedTerm') {
    node['@type'] = 'DefinedTerm';
    node.inDefinedTermSet = { '@type': 'DefinedTermSet', '@id': `${clean(site)}/knowledge/#glossary`, name: 'Algeria Travel Knowledge' };
    delete node.containedInPlace;
  }
  return node;
}

// CollectionPage + ItemList for a hub page.
export function collectionPageNode(site: string, url: string, name: string, description: string, members: Entity[]): any {
  const s = clean(site);
  return {
    '@type': 'CollectionPage',
    '@id': `${s}${url}#collection`,
    name, description, url: `${s}${url}`,
    isPartOf: { '@id': `${s}/#website` },
    about: { '@id': `${s}/#algeria` },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: members.length,
      itemListElement: members.map((m, i) => ({
        '@type': 'ListItem', position: i + 1,
        url: entityUrl(s, m),
        item: { '@type': m.schemaType || 'Thing', '@id': entityNodeId(s, m), name: m.name },
      })),
    },
  };
}

// Plain ItemList (e.g. the 58-province directory) referencing entity @ids.
export function itemListNode(site: string, id: string, name: string, members: Entity[]): any {
  const s = clean(site);
  return {
    '@type': 'ItemList', '@id': `${s}${id}`, name,
    numberOfItems: members.length,
    itemListElement: members.map((m, i) => ({
      '@type': 'ListItem', position: i + 1, url: entityUrl(s, m),
      item: { '@type': m.schemaType || 'Place', '@id': entityNodeId(s, m), name: m.name },
    })),
  };
}

// Build labelled discovery link-groups for the EntityLinks component (entity-based, no random links).
export function discoveryGroups(site: string, entityId: string) {
  const d = discover(entityId);
  const m = (arr: any[]) => arr.map(e => ({ name: e.name, href: entityUrl(site, e) }));
  return [
    { label: 'Related attractions', items: m(d.attractions) },
    { label: 'UNESCO sites', items: m(d.unesco) },
    { label: 'Nearby provinces', items: m(d.provinces) },
    { label: 'Travel themes', items: m(d.themes) },
    { label: 'Historical periods', items: m(d.historicalPeriods) },
    { label: 'Cultural traditions', items: m(d.traditions) },
    { label: 'Food', items: m(d.foods) },
    { label: 'Architecture', items: m(d.architecture) },
  ].filter(g => g.items.length > 0);
}
