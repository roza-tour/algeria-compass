// One photograph per itinerary day, from the place that day is about, never the
// same photograph twice in a tour. Used by the long tours' story design: the
// hero reel and the day-by-day chapters.
import { readdirSync } from 'node:fs';
import { tourGallery } from '../data/tour-photos';

// places with no photographs of their own borrow from a neighbour on the route
const BORROW: Record<string, string> = { annaba: 'constantine', biskra: 'bousaada' };
// enough to see every photograph of a place (the largest set has under 40)
const MAX_PER_PLACE = 80;

export interface DayPhoto { file: string; alt?: string; }

/**
 * @param days    journeyOf(tour).days -- the places each day visits
 * @param exclude photographs already used on the page (the hero)
 */
export function dayPhotos(days: { places: string[] }[], exclude: string[] = []): (DayPhoto | null)[] {
  let files: string[] = [];
  try { files = readdirSync('public/assets/img/tours'); } catch { return days.map(() => null); }
  const used = new Set(exclude);
  // the place the day ends in first ("Batna to Biskra to Bou Saada"), then the others
  const pickFor = (places: string[]): DayPhoto | null =>
    [...places].reverse()
      .map(place => tourGallery([BORROW[place] || place], files, MAX_PER_PLACE).find(g => !used.has(g.file)))
      .find(Boolean) || null;
  return days.map(d => {
    const pick = pickFor(d.places);
    if (pick) used.add(pick.file);
    return pick;
  });
}
