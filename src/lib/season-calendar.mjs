// PLAIN-JS twin of season.ts so both Astro and the CLI can import it.
// Which seasonal ambience the whole site wears — resolved ENTIRELY BY
// CALCULATION from the date. Nothing here needs a human to top it up: Islamic
// dates are computed from the tabular Hijri calendar, Gregorian ones from fixed
// rules, so this keeps working for any year, indefinitely.
//
// Scope note: these windows drive DECORATION only. The tabular Hijri calendar
// can differ from the local moon-sighting announcement by about a day, which is
// irrelevant for an ambience (windows are padded) but would not be acceptable
// for a published date — which is why the travel guides deliberately tell
// readers to check the announced dates rather than printing any.


// ---------------------------------------------------------------- calendars
const gregorianToJDN = (y, m, d) => {
  const a = Math.floor((14 - m) / 12);
  const yy = y + 4800 - a;
  const mm = m + 12 * a - 3;
  return d + Math.floor((153 * mm + 2) / 5) + 365 * yy
    + Math.floor(yy / 4) - Math.floor(yy / 100) + Math.floor(yy / 400) - 32045;
};

const jdnToDate = (jdn) => {
  const a = jdn + 32044, b = Math.floor((4 * a + 3) / 146097), c = a - Math.floor(146097 * b / 4);
  const d2 = Math.floor((4 * c + 3) / 1461), e = c - Math.floor(1461 * d2 / 4);
  const m2 = Math.floor((5 * e + 2) / 153);
  const day = e - Math.floor((153 * m2 + 2) / 5) + 1;
  const month = m2 + 3 - 12 * Math.floor(m2 / 10);
  const year = 100 * b + d2 - 4800 + Math.floor(m2 / 10);
  return new Date(Date.UTC(year, month - 1, day));
};

/** Tabular ("civil") Hijri date -> Julian Day Number. */
const hijriToJDN = (y, m, d) =>
  d + Math.ceil(29.5 * (m - 1)) + (y - 1) * 354
  + Math.floor((3 + 11 * y) / 30) + 1948439;

/** Gregorian date -> the Hijri year it falls in (approximate, then corrected). */
const hijriYearOf = (date) => {
  const jdn = gregorianToJDN(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate());
  let hy = Math.floor((jdn - 1948440) / 354.367) + 1;
  while (hijriToJDN(hy, 1, 1) > jdn) hy--;
  while (hijriToJDN(hy + 1, 1, 1) <= jdn) hy++;
  return hy;
};

const addDays = (d, n) => new Date(d.getTime() + n * 86400000);
const iso = (d) => d.toISOString().slice(0, 10);

// ------------------------------------------------------------------ windows

/** Every dated ambience window that touches a given Gregorian year. */
export function windowsForYear(year) {
  const out = [];
  const hijri = (hy, hm, hd) => jdnToDate(hijriToJDN(hy, hm, hd));

  // Hijri years overlapping this Gregorian year
  const hyStart = hijriYearOf(new Date(Date.UTC(year, 0, 1)));
  const hyEnd = hijriYearOf(new Date(Date.UTC(year, 11, 31)));

  for (let hy = hyStart; hy <= hyEnd; hy++) {
    // Ramadan = Hijri month 9 (29-30 days). Pad by a day each side for the
    // sighting difference, and stop the day Eid begins.
    const ramStart = addDays(hijri(hy, 9, 1), -1);
    const eidFitr = hijri(hy, 10, 1);                 // 1 Shawwal
    out.push({ from: iso(ramStart), to: iso(eidFitr), season: 'ramadan', label: `Ramadan ${hy}` });
    out.push({ from: iso(addDays(eidFitr, -1)), to: iso(addDays(eidFitr, 3)), season: 'eid', label: `Eid al-Fitr ${hy}` });

    // Eid al-Adha = 10 Dhu al-Hijjah (month 12)
    const eidAdha = hijri(hy, 12, 10);
    out.push({ from: iso(addDays(eidAdha, -1)), to: iso(addDays(eidAdha, 4)), season: 'eid', label: `Eid al-Adha ${hy}` });

    // Mawlid an-Nabawi = 12 Rabi' al-Awwal (month 3)
    const mawlid = hijri(hy, 3, 12);
    out.push({ from: iso(addDays(mawlid, -1)), to: iso(addDays(mawlid, 2)), season: 'mawlid', label: `Mawlid ${hy}` });
  }

  // Fixed Gregorian occasions
  out.push({ from: `${year}-12-14`, to: `${year + 1}-01-06`, season: 'christmas', label: 'Christmas & New Year' });
  out.push({ from: `${year - 1}-12-14`, to: `${year}-01-06`, season: 'christmas', label: 'Christmas & New Year' });
  out.push({ from: `${year}-01-11`, to: `${year}-01-15`, season: 'yennayer', label: 'Yennayer (Amazigh New Year)' });
  out.push({ from: `${year}-07-04`, to: `${year}-07-07`, season: 'national', label: 'Independence Day' });
  out.push({ from: `${year}-10-31`, to: `${year}-11-03`, season: 'national', label: 'Revolution Day' });

  return out.sort((a, b) => a.from.localeCompare(b.from));
}

/** Plain season by month (0-indexed), northern hemisphere. */
export function seasonForMonth(month) {
  if (month >= 2 && month <= 4) return 'spring';   // Mar–May
  if (month >= 5 && month <= 7) return 'summer';   // Jun–Aug
  if (month >= 8 && month <= 10) return 'autumn';  // Sep–Nov
  return 'winter';                                  // Dec–Feb
}

/** The ambience for a given day: a dated occasion if one is running, else the season. */
export function seasonForDate(d) {
  const day = iso(d);
  const hit = windowsForYear(d.getUTCFullYear()).find(w => day >= w.from && day < w.to);
  return hit ? hit.season : seasonForMonth(d.getUTCMonth());
}

/**
 * A compact schedule the browser can re-check against, so a page cached across
 * an occasion boundary still corrects itself. Covers ~18 months from `from`.
 */
export function upcomingWindows(from, months = 18) {
  const end = new Date(Date.UTC(from.getUTCFullYear(), from.getUTCMonth() + months, 1));
  const years = [];
  for (let y = from.getUTCFullYear(); y <= end.getUTCFullYear(); y++) years.push(y);
  const all = years.flatMap(y => windowsForYear(y));
  const seen = new Set();
  return all
    .filter(w => w.to > iso(from) && w.from < iso(end))
    .filter(w => { const k = w.from + w.season; if (seen.has(k)) return false; seen.add(k); return true; })
    .sort((a, b) => a.from.localeCompare(b.from));
}

export const SEASON_LABEL = {
  spring: 'Spring in Algeria',
  summer: 'Summer in Algeria',
  autumn: 'Autumn in Algeria',
  winter: 'Winter in Algeria',
  christmas: 'Festive season',
  ramadan: 'Ramadan',
  eid: 'Eid',
  mawlid: 'Mawlid',
  yennayer: 'Yennayer',
  national: 'National day',
};
