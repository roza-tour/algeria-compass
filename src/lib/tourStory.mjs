// The story design of a long tour, for any language: which days get which
// region, photograph and "On to ..." divider, and what the hero reel shows.
// The English tour (tours.json) gives the places; `days` gives the words, in
// the page's language (same days, same order).
import { journeyOf } from './journey.mjs';
import { dayPhotos } from './journeyPhotos';
import { REGIONS } from '../data/regions';
import { regionName } from '../data/regionNames.mjs';

const MIN_STORY_DAYS = 3;
const REEL_MAX = 4;
const DAY = { en: 'Day', fr: 'Jour', it: 'Giorno', es: 'Día', de: 'Tag' };

export function tourStory(tour, days, lang = 'en', heroFile = '') {
  const journey = journeyOf(tour);
  const story = days.length >= MIN_STORY_DAYS;
  const isJourney = story && journey.regions.length >= 2;
  const RG = Object.fromEntries(REGIONS.map(r => [r.id, r]));
  const photos = story ? dayPhotos(journey.days, [heroFile]) : [];
  const dayWord = DAY[lang] || DAY.en;
  let last = '';
  const view = days.map((d, i) => {
    const jd = journey.days[i] || { places: [], regions: [] };
    const region = jd.regions[jd.regions.length - 1] || last;
    const r = isJourney && region ? RG[region] : null;
    const enters = isJourney && region && region !== last ? RG[region] : null;
    last = region || last;
    return {
      d, photo: photos[i] || null, place: jd.places[jd.places.length - 1] || '',
      r, rName: r ? regionName(r, lang).name : '',
      enters, entersHeading: enters ? regionName(enters, lang).heading : '',
      names: jd.regions.map(x => RG[x] && regionName(RG[x], lang).name).filter(Boolean),
    };
  });
  const heroPlace = (heroFile || '').replace(/-\d+\.jpg$/i, '');
  const heroDay = story ? view.find(v => (journey.days[v.d.day - 1]?.places || []).includes(heroPlace)) : null;
  // one frame per place on a route; on a single-place tour (the Djanet
  // circuits) one per day, since every day is a different corner of it
  const byPlace = journey.places.length > 1;
  const seen = new Set(heroDay && byPlace ? [heroDay.place] : []);
  const reel = story ? view.filter(v => v.photo && v !== heroDay && (!byPlace || (!seen.has(v.place) && seen.add(v.place))))
    .slice(0, REEL_MAX).map(v => ({ src: `/assets/img/tours/${v.photo.file}`, caption: `${dayWord} ${v.d.day} · ${v.d.title}` })) : [];
  return {
    story, isJourney, journey, view, reel, dayWord,
    heroCaption: heroDay ? `${dayWord} ${heroDay.d.day} · ${heroDay.d.title}` : '',
  };
}
