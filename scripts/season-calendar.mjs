// Prints the auto-computed ambience schedule — nothing here is hand-maintained.
// Usage: node scripts/season-calendar.mjs [months]
import { upcomingWindows, seasonForDate } from '../src/lib/season-calendar.mjs';
const months = parseInt(process.argv[2] || '18', 10);
const now = new Date();
console.log(`Ambience schedule — computed automatically, next ${months} months`);
console.log(`today ${now.toISOString().slice(0, 10)}  ->  ${seasonForDate(now)}\n`);
for (const w of upcomingWindows(now, months))
  console.log(`  ${w.from} -> ${w.to}   ${String(w.season).padEnd(9)} ${w.label}`);
console.log('\nOutside these windows the site follows the plain season:');
console.log('  Mar-May spring | Jun-Aug summer | Sep-Nov autumn | Dec-Feb winter');
