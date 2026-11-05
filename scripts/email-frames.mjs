// One email letter frame that carries all eight civilisation identities.
// Header: a frieze of eight panels (each skin's pattern, colour and emblem in a
// gold medallion) over a green ribbon; footer: the eight patterns as a mosaic
// strip. Rendered at 2x into public/assets/email/. The ribbon's caption is
// added by the caption step (Cinzel isn't a system font for librsvg).
import fs from 'node:fs';
import sharp from 'sharp';

const CIV = 'public/assets/civ/';
const OUT = 'public/assets/email/';
const GOLD = '#E4AD40';
const GREEN = '#07261C';

// band: panel colour; line: pattern colour; em2: emblem's second colour.
const SKINS = [
  { id: '01', band: '#3A1F17', line: '#E8B53C', em2: '#D8553F' }, // Amazigh
  { id: '02', band: '#1B2A4A', line: '#E0A85A', em2: '#D0654A' }, // Tuareg & Sahara
  { id: '03', band: '#4E2A1A', line: '#E08A55', em2: '#F0B486' }, // M'Zab
  { id: '04', band: '#43251B', line: '#C9A24B', em2: '#A9B47E' }, // Numidian & Roman
  { id: '05', band: '#4A2F1B', line: '#D9A25F', em2: '#E9C58F' }, // Islamic-Berber
  { id: '06', band: '#173326', line: '#D4AF5A', em2: '#5FBF92' }, // Andalusian
  { id: '07', band: '#0F3333', line: '#C9A24B', em2: '#55C2C2' }, // Ottoman Algiers
  { id: '08', band: '#123627', line: '#D4AF5A', em2: '#E0604E' }, // Modern Algeria
];

function tile(id, color, opacity) {
  const svg = fs.readFileSync(CIV + id + '-pattern.svg', 'utf8');
  const [, w, h] = svg.match(/width='(\d+)' height='(\d+)'/);
  const inner = svg.replace(/^<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '')
    .replace(/stroke='#[0-9A-Fa-f]{6}'/g, `stroke='${color}'`)
    .replace(/fill='#[0-9A-Fa-f]{6}'/g, `fill='${color}'`)
    .replace(/opacity='[\d.]+'/g, `opacity='${opacity}'`);
  return { w: +w, h: +h, inner };
}

function emblem(id, c1, c2) {
  const svg = fs.readFileSync(CIV + id + '-emblem.svg', 'utf8');
  let n = 0;
  return svg.replace(/^<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '')
    .replace(/stroke='#[0-9A-Fa-f]{6}'/g, () => `stroke='${n++ === 0 ? c1 : c2}'`)
    .replace(/fill='#[0-9A-Fa-f]{6}'/g, `fill='${c1}'`);
}

const W = 1080, PW = W / SKINS.length;

function panels(H, opacity, withEmblems, scale) {
  let defs = '', body = '';
  SKINS.forEach((s, i) => {
    const t = tile(s.id, s.line, opacity);
    const x = i * PW;
    defs += `<pattern id='p${i}' width='${t.w}' height='${t.h}' patternUnits='userSpaceOnUse' patternTransform='translate(${x} 0) scale(${scale})'>${t.inner}</pattern>`;
    defs += `<radialGradient id='c${i}'><stop offset='0' stop-color='${s.band}'/><stop offset='.6' stop-color='${s.band}' stop-opacity='.95'/><stop offset='1' stop-color='${s.band}' stop-opacity='0'/></radialGradient>`;
    body += `<rect x='${x}' y='0' width='${PW}' height='${H}' fill='${s.band}'/><rect x='${x}' y='0' width='${PW}' height='${H}' fill='url(#p${i})'/>`;
    if (withEmblems) {
      const cx = x + PW / 2, cy = H / 2, r = 40;
      body += `<circle cx='${cx}' cy='${cy}' r='${r + 22}' fill='url(#c${i})'/>`
        + `<circle cx='${cx}' cy='${cy}' r='${r}' fill='${s.band}' stroke='${GOLD}' stroke-width='2.4'/>`
        + `<circle cx='${cx}' cy='${cy}' r='${r - 6}' fill='none' stroke='${GOLD}' stroke-opacity='.45' stroke-width='1.1'/>`
        + `<g transform='translate(${cx - 26} ${cy - 26}) scale(${52 / 48})'>${emblem(s.id, GOLD, s.em2)}</g>`;
    }
    if (i) body += `<path d='M${x} 0V${H}' stroke='${GOLD}' stroke-opacity='.7' stroke-width='1.6'/>`;
  });
  return { defs, body };
}

async function header() {
  // Brand ribbon on top (logo and name are added by the caption step),
  // then the frieze of the eight civilisations.
  const RH = 104, FH = 148, H = RH + FH;
  const p = panels(FH, 0.5, true, 1.6);
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${W}' height='${H}'>
  <defs>${p.defs}</defs>
  <rect x='0' y='0' width='${W}' height='${RH}' fill='${GREEN}'/>
  <g transform='translate(0 ${RH})'>${p.body}</g>
  <path d='M0 ${RH}H${W}' stroke='${GOLD}' stroke-width='2.4'/>
  <rect x='1' y='1' width='${W - 2}' height='${H - 2}' fill='none' stroke='${GOLD}' stroke-width='2'/>
</svg>`;
  await sharp(Buffer.from(svg)).png().toFile(OUT + 'frame-head.png');
}

async function footer() {
  const H = 40;
  const p = panels(H, 0.75, false, 1);
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${W}' height='${H}'>
  <defs>${p.defs}</defs>${p.body}
  <path d='M0 2H${W}M0 ${H - 2}H${W}' stroke='${GOLD}' stroke-width='2.4'/>
</svg>`;
  await sharp(Buffer.from(svg)).png().toFile(OUT + 'frame-foot.png');
}

// The eight-pointed star (khatam): two squares, one turned 45 degrees.
function star(cx, cy, r, stroke, w, fill = 'none') {
  const sq = a => [0, 1, 2, 3].map(k => {
    const t = a + k * Math.PI / 2;
    return `${(cx + r * Math.cos(t)).toFixed(2)},${(cy + r * Math.sin(t)).toFixed(2)}`;
  }).join(' ');
  return `<polygon points='${sq(Math.PI / 4)}' fill='${fill}' stroke='${stroke}' stroke-width='${w}'/>`
    + `<polygon points='${sq(0)}' fill='${fill}' stroke='${stroke}' stroke-width='${w}'/>`;
}

// Side rail, repeated down each side of the letter (1x, 24 x 48).
async function rails() {
  const w = 24, h = 48, c = 12;
  const body = `<rect width='${w}' height='${h}' fill='${GREEN}'/>
  <path d='M${c} 0V5M${c} 19V29M${c} 43V48' stroke='${GOLD}' stroke-opacity='.55' stroke-width='1'/>
  ${star(c, 12, 6, GOLD, 1)}<circle cx='${c}' cy='12' r='1.6' fill='${GOLD}'/>
  <path d='M${c} 31L${c + 4.5} 36L${c} 41L${c - 4.5} 36Z' fill='${GOLD}'/>`;
  const edges = (outer, inner) => `<path d='M${outer} 0V${h}' stroke='${GOLD}' stroke-opacity='.5' stroke-width='1'/>`
    + `<path d='M${inner} 0V${h}' stroke='${GOLD}' stroke-width='1.4'/>`;
  for (const [name, o, i] of [['l', 2.5, 22.3], ['r', 21.5, 1.7]]) {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${w * 4}' height='${h * 4}' viewBox='0 0 ${w} ${h}'>${body}${edges(o, i)}</svg>`;
    await sharp(Buffer.from(svg)).resize(w, h, { kernel: 'lanczos3' }).png().toFile(`${OUT}frame-rail-${name}.png`);
  }
}

// Gold corner piece for the writing area (2x of 44 x 44), one per corner.
async function corners() {
  const S = 88;
  const g = `<g fill='none' stroke='${GOLD}' stroke-linecap='round'>
    <path d='M30 7H84M7 30V84' stroke-width='2'/>
    <path d='M30 14H64M14 30V64' stroke-width='1.2' stroke-opacity='.7'/>
  </g>
  ${star(15, 15, 11, GOLD, 2)}<circle cx='15' cy='15' r='3' fill='${GOLD}'/>
  <path d='M84 3L88 7L84 11L80 7Z M3 84L7 88L11 84L7 80Z' fill='${GOLD}'/>
  <circle cx='64' cy='14' r='2' fill='${GOLD}'/><circle cx='14' cy='64' r='2' fill='${GOLD}'/>`;
  const flips = { tl: '', tr: `translate(${S} 0) scale(-1 1)`, bl: `translate(0 ${S}) scale(1 -1)`, br: `translate(${S} ${S}) scale(-1 -1)` };
  for (const [k, t] of Object.entries(flips)) {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${S}' height='${S}'><rect width='${S}' height='${S}' fill='#FFFFFF'/><g transform='${t}'>${g}</g></svg>`;
    await sharp(Buffer.from(svg)).png().toFile(`${OUT}frame-corner-${k}.png`);
  }
}

await header();
await footer();
await rails();
await corners();
console.log('frame done');
