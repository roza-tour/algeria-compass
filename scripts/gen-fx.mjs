// Exchange rates for the price display (EUR -> USD, GBP), refreshed at every
// build from the European Central Bank's reference rates (via frankfurter.app,
// free, no key). Prices are always booked in EUR; the other currencies are
// shown as "approximately". If the fetch fails (offline build), the last
// rates in src/data/fx.json are kept, so a build never breaks on it.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
const FILE = 'src/data/fx.json';
const prev = existsSync(FILE) ? JSON.parse(readFileSync(FILE, 'utf8')) : { base: 'EUR', date: '2026-10-27', rates: { USD: 1.16, GBP: 0.87 } };
try {
  const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), 8000);
  const r = await fetch('https://api.frankfurter.app/latest?from=EUR&to=USD,GBP', { signal: ctl.signal });
  clearTimeout(t);
  const j = await r.json();
  if (j && j.rates && j.rates.USD && j.rates.GBP) {
    writeFileSync(FILE, JSON.stringify({ base: 'EUR', date: j.date, rates: { USD: j.rates.USD, GBP: j.rates.GBP } }, null, 1) + '\n');
    console.log(`[fx] EUR->USD ${j.rates.USD}, EUR->GBP ${j.rates.GBP} (ECB ${j.date})`);
  } else throw new Error('no rates');
} catch (e) {
  if (!existsSync(FILE)) writeFileSync(FILE, JSON.stringify(prev, null, 1) + '\n');
  console.log(`[fx] kept rates of ${prev.date} (${e.message})`);
}
