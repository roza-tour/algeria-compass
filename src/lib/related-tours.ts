// Picks the bookable tours a guide is actually about, so a reader who has just
// learned about Djanet sees the Djanet trips — not a generic "our tours" link.
// 1) tours the text already links to, in the order they appear;
// 2) then tours whose places the text talks about most.
import toursData from '../data/tours.json';

const tourList: any[] = ((toursData as any).tours || toursData) as any[];

// Words that point at each region in any of the five languages.
const PLACE_WORDS: Record<string, string[]> = {
  algiers: ['algiers', 'alger', 'algeri', 'argel', 'algier', 'casbah', 'kasbah'],
  tipaza: ['tipaza', 'cherchell'],
  djanet: ['djanet', 'tadrart', 'tassili', 'ihrir', 'sefar'],
  illizi: ['illizi'],
  ghardaia: ['ghardaïa', 'ghardaia', "m'zab", 'mzab', 'beni isguen'],
  timimoun: ['timimoun', 'gourara'],
  constantine: ['constantine', 'costantina', 'constantina'],
  'batna-timgad': ['timgad', 'batna', 'aurès', 'aures'],
  batna: ['timgad', 'batna'],
  setif: ['sétif', 'setif', 'djémila', 'djemila'],
  djemila: ['djémila', 'djemila'],
  bousaada: ['bou saâda', 'bou saada', 'bousaada'],
  oran: ['oran', 'orano', 'orán'],
  tlemcen: ['tlemcen'],
  mostaganem: ['mostaganem'],
  bejaia: ['béjaïa', 'bejaia', 'kabylie', 'kabylia'],
  annaba: ['annaba', 'hippo'],
};

export function relatedTours(text: string, limit = 3): any[] {
  const low = text.toLowerCase();
  const picked: string[] = [];
  for (const m of low.matchAll(/\/(?:tours|fr\/circuits|it\/circuiti|es\/circuitos|de\/reisen)\/([a-z0-9-]+)\//g)) {
    if (!picked.includes(m[1]) && tourList.some(t => t.id === m[1])) picked.push(m[1]);
  }
  const score = (t: any) => {
    const words = new Set((t.wilayas || []).flatMap((w: string) => PLACE_WORDS[w] || [w]));
    let n = 0;
    for (const w of words) n += low.split(w).length - 1;
    return n / Math.sqrt((t.wilayas || []).length || 1);
  };
  const rest = tourList
    .filter(t => !picked.includes(t.id) && !/^1 day/.test(t.duration))
    .map(t => [t, score(t)] as [any, number])
    .filter(([, s]) => s > 0)
    .sort((a, b) => b[1] - a[1])
    .map(([t]) => t.id);
  // Among the tours the guide links to, take one per region first, so a guide
  // comparing Djanet with Timimoun shows a trip to each; then the other linked
  // tours; only then tours matched by the places mentioned.
  const out: string[] = [], seen = new Set<string>();
  const primary = (id: string) => tourList.find(t => t.id === id).wilayas?.[0];
  for (const id of picked) if (out.length < limit && !seen.has(primary(id))) { out.push(id); seen.add(primary(id)); }
  for (const id of [...picked, ...rest]) if (out.length < limit && !out.includes(id)) out.push(id);
  return out.map(id => tourList.find(t => t.id === id));
}
