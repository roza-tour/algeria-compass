// Generate the eight regions' art: emblem + seamless pattern per region
// (public/assets/regions/em-*.svg, pat-*.svg) and src/styles/region-art.css,
// which gives each region's hero its own architectural edge.
//
// October 2026. The first emblems were a few strokes each (a cross in two
// circles for the Sahara) and read as clip-art. They are redrawn here as the
// region's own landmark or craft, in line-art:
//   algiers     the Casbah cascading to the sea, dome and minaret
//   constantine Sidi M'Cid suspension bridge over the Rhumel gorge
//   roman       Timgad's Arch of Trajan
//   mzab        Ghardaia's pyramidal minaret above the stacked town
//   sahara      the Tuareg cross of Agadez between dunes
//   tlemcen     a horseshoe arch in its alfiz frame, a zellige star inside
//   bejaia      Cap Carbon lighthouse on its cliff, the sea below
//   bousaada    palms of the oasis, dune and sun
// and each pattern is a craft of the region (Ottoman ogee lattice, viaduct
// arcade, Roman meander, Mozabite stepped lozenges, Tuareg leather lozenges,
// Zayyanid zellige, coastal waves, Ouled Nail kilim).
//
// Every shape carries pathLength="1" so a page can draw it in with one
// stroke-dashoffset transition.
import { readFileSync, writeFileSync } from 'node:fs';

const src = readFileSync('src/data/regions.ts', 'utf8');
const RC = {};
for (const m of src.matchAll(/id: '([a-z]+)'[\s\S]*?rc: '(#[0-9A-Fa-f]{6})'/g)) RC[m[1]] = m[2];
const RCD = {}, RCL = {}, NAME = {};
for (const m of src.matchAll(/id: '([a-z]+)', idx: '\d+', name: '([^']+)'(?:, heading: '([^']+)')?[\s\S]*?rcD: '(#[0-9A-Fa-f]{6})', rcL: '(#[0-9A-Fa-f]{6})'/g)) {
  NAME[m[1]] = m[3] || m[2]; RCD[m[1]] = m[4]; RCL[m[1]] = m[5];
}

const len = s => s.replace(/<(path|circle|rect|line|polyline|polygon|ellipse)\b(?![^>]*pathLength)/g, '<$1 pathLength="1"');

const wave = (x0, x1, y, a = 4, w = 10) => { let d = `M${x0},${y}`; for (let x = x0; x < x1; x += w) d += ` q${w / 2},${-a} ${w},0`; return d; };

// ---------------------------------------------------------------- emblems
const EM = {
  algiers: `
    <path d="M10,80 H90"/>
    <path d="${wave(10, 90, 87, 3, 10)}"/>
    <path d="M14,80 V60 H26 V52 H38 V44 H46"/>
    <path d="M46,44 A11,11 0 0 1 68,44"/><path d="M57,33 V28"/><circle cx="57" cy="26.5" r="1.5"/>
    <path d="M46,44 V80 M68,44 V80"/>
    <path d="M68,44 H72 V22 H80 V44 H86 V80"/><path d="M71,22 H81 M76,22 V15"/><circle cx="76" cy="13.5" r="1.5"/>
    <path d="M18,72 v-4 a2,2 0 0 1 4,0 v4 M30,66 v-4 a2,2 0 0 1 4,0 v4 M40,58 v-4 a2,2 0 0 1 4,0 v4 M53,64 v-6 a4,4 0 0 1 8,0 v6 M74,34 v-4 a2,2 0 0 1 4,0 v4 M78,70 v-4 a2,2 0 0 1 4,0 v4"/>`,
  constantine: `
    <path d="M8,92 V50 H26 L30,60 L26,72 L32,92"/>
    <path d="M92,92 V50 H74 L70,60 L74,72 L68,92"/>
    <path d="M12,46 H88"/>
    <path d="M28,46 V22 M72,46 V22 M25,22 H31 M69,22 H75"/>
    <path d="M28,24 Q50,44 72,24"/>
    <path d="M28,24 L12,44 M72,24 L88,44"/>
    <path d="M39,31.5 V46 M44.5,33.4 V46 M50,34 V46 M55.5,33.4 V46 M61,31.5 V46"/>
    <path d="${wave(34, 66, 86, 3, 8)}"/>`,
  roman: `
    <path d="M6,90 H94 M10,86 H90"/>
    <path d="M14,86 V32 H86 V86"/>
    <path d="M10,32 H90 M12,26 H88 M12,26 V32 M88,26 V32"/>
    <path d="M40,86 V58 A10,10 0 0 1 60,58 V86"/>
    <path d="M20,86 V66 A6,6 0 0 1 32,66 V86 M68,86 V66 A6,6 0 0 1 80,66 V86"/>
    <path d="M36,86 V36 M64,86 V36 M35,36 H37 M63,36 H65"/>
    <path d="M21,52 V42 H31 V52 Z M69,52 V42 H79 V52 Z"/>
    <path d="M19,42 L26,36 L33,42 M67,42 L74,36 L81,42"/>
    <path d="M44,22 H56 M50,22 V18"/>`,
  mzab: `
    <path d="M8,88 H92"/>
    <path d="M12,88 L22,78 H32 V72 H44"/>
    <path d="M88,88 L78,78 H68 V72 H56"/>
    <path d="M44,88 V72 L47,22 H53 L56,72 V88"/>
    <path d="M47,22 L45.5,14 M50,22 V11 M53,22 L54.5,14"/>
    <path d="M48.5,34 h3 M48,46 h4 M47.5,58 h5"/>
    <path d="M24,84 v-2 M30,84 v-2 M36,80 v-3 M40,80 v-3 M60,80 v-3 M64,80 v-3 M70,84 v-2 M76,84 v-2"/>
    <path d="M16,60 Q24,52 32,60 M68,60 Q76,52 84,60" opacity=".55"/>`,
  sahara: `
    <circle cx="50" cy="20" r="11"/><circle cx="50" cy="20" r="5"/>
    <path d="M45,30 L40,34 L27,30 L31,40 L42,42 L33,58 L50,88 L67,58 L58,42 L69,40 L73,30 L60,34 L55,30"/>
    <path d="M50,48 L58,60 L50,76 L42,60 Z"/>
    <path d="M36,36 L44,38 M64,36 L56,38"/>
    <circle cx="50" cy="60" r="2"/>
    <path d="M4,90 Q16,78 28,86 M72,86 Q84,76 96,90" opacity=".6"/>`,
  tlemcen: `
    <path d="M16,92 V16 H84 V92"/>
    <path d="M20,92 V20 H80 V92"/>
    <path d="M32,92 V57 A21,21 0 1 1 68,57 V92"/>
    <path d="M50,35 L53.8,40.8 L60.6,42.2 L55.9,47.4 L56.6,54.3 L50,51.5 L43.4,54.3 L44.1,47.4 L39.4,42.2 L46.2,40.8 Z"/>
    <circle cx="50" cy="46" r="3"/>
    <path d="M25,27 l3,-3 l3,3 l-3,3 Z M69,27 l3,-3 l3,3 l-3,3 Z"/>
    <path d="M26,92 V70 M74,92 V70"/>`,
  bejaia: `
    <path d="M6,92 L8,72 L26,64 L46,66 L52,92"/>
    <path d="M33,64 L36,34 H44 L47,64"/>
    <path d="M32,34 H48 M34,34 V30 M46,34 V30"/>
    <path d="M36,30 V24 H44 V30"/>
    <path d="M35,24 L40,18 L45,24"/>
    <path d="M38.5,44 h3 M38,54 h4"/>
    <path d="M48,26 L72,20 M48,28 L74,30" opacity=".6"/>
    <path d="${wave(54, 94, 80, 3, 10)}"/>
    <path d="${wave(58, 94, 88, 3, 9)}"/>
    <path d="M68,46 q3,-3 6,0 q3,-3 6,0"/>`,
  bousaada: `
    <circle cx="76" cy="24" r="8"/>
    <path d="M6,88 Q30,76 52,84 T96,82"/>
    <path d="M38,86 Q40,66 44,46"/>
    <path d="M44,46 Q34,38 22,44 M44,46 Q38,33 28,28 M44,46 Q48,32 58,30 M44,46 Q56,40 66,48 M44,46 Q45,36 42,26"/>
    <path d="M64,84 Q65,72 68,62"/>
    <path d="M68,62 Q61,57 54,61 M68,62 Q65,53 58,50 M68,62 Q71,53 78,52 M68,62 Q76,59 82,64"/>
    <path d="M41,72 h3 M42,62 h3 M43,54 h2" opacity=".6"/>`,
};

// ---------------------------------------------------------------- patterns
// [width, height, body]; every motif that crosses an edge is repeated on the
// opposite edge, so the tile is seamless
const flower = (x, y, r) => `<path d="M${x},${y - r} Q${x + r * .55},${y} ${x},${y + r} Q${x - r * .55},${y} ${x},${y - r} M${x - r},${y} Q${x},${y + r * .55} ${x + r},${y} Q${x},${y - r * .55} ${x - r},${y}"/><circle cx="${x}" cy="${y}" r="${r * .22}"/>`;
const star8 = (x, y, R) => { const a = R * .7071; return `<path d="M${x - a},${y - a} H${x + a} V${y + a} H${x - a} Z M${x},${y - R} L${x + R},${y} L${x},${y + R} L${x - R},${y} Z"/>`; };
const diamond = (x, y, w, h) => `<path d="M${x},${y - h} L${x + w},${y} L${x},${y + h} L${x - w},${y} Z"/>`;
function stepDiamond(cx, cy, n, s) {
  const pts = [];
  for (let i = 0; i <= n; i++) { const hw = s / 2 + i * s, y = cy - (n - i) * s - s / 2; pts.push([cx + hw, y], [cx + hw, y + s]); }
  for (let i = n - 1; i >= 0; i--) { const hw = s / 2 + i * s, y = cy + (n - i) * s - s / 2; pts.push([cx + hw, y], [cx + hw, y + s]); }
  const right = pts, left = right.slice().reverse().map(([x, y]) => [2 * cx - x, y]);
  return `<path d="M${[...right, ...left].map(p => p.join(',')).join(' L')} Z"/>`;
}

const PAT = {
  algiers: [60, 90, `
    <path d="M30,0 C30,18 2,24 2,45 C2,66 30,72 30,90 M30,0 C30,18 58,24 58,45 C58,66 30,72 30,90"/>
    <path d="M30,0 C30,18 2,24 2,45 C2,66 30,72 30,90" transform="translate(-30 -45)"/>
    <path d="M30,0 C30,18 58,24 58,45 C58,66 30,72 30,90" transform="translate(30 -45)"/>
    <path d="M30,0 C30,18 2,24 2,45 C2,66 30,72 30,90" transform="translate(-30 45)"/>
    <path d="M30,0 C30,18 58,24 58,45 C58,66 30,72 30,90" transform="translate(30 45)"/>
    ${flower(30, 45, 9)}${flower(0, 0, 7)}${flower(60, 0, 7)}${flower(0, 90, 7)}${flower(60, 90, 7)}`],
  constantine: [48, 48, `
    <path d="M0,3 H48 M0,13 H48"/>
    <path d="M0,13 A12,8 0 0 1 24,13 A12,8 0 0 1 48,13" transform="translate(0 0)"/>
    <path d="M0,48 V30 A24,17 0 0 1 48,30 V48"/>
    <path d="M24,13 V22 M12,13 V24 M36,13 V24"/>
    <path d="M6,3 V13 M18,3 V13 M30,3 V13 M42,3 V13" opacity=".5"/>`],
  roman: [40, 44, `
    <path d="M0,36 H40 M36,36 V4 H4 V28 H28 V12 H12 V20 H20"/>
    <circle cx="10" cy="41" r="1.2"/><circle cx="30" cy="41" r="1.2"/>`],
  mzab: [56, 56, `
    ${stepDiamond(28, 28, 3, 6)}
    ${stepDiamond(28, 28, 1, 6)}
    <path d="M0,0 L8,0 L0,8 Z M56,0 L48,0 L56,8 Z M0,56 L8,56 L0,48 Z M56,56 L48,56 L56,48 Z"/>
    <path d="M28,0 V4 M28,52 V56 M0,28 H4 M52,28 H56"/>`],
  sahara: [44, 44, `
    ${diamond(22, 22, 16, 18)}
    ${diamond(22, 22, 7, 8)}
    <path d="M22,19 V25 M19,22 H25"/>
    <path d="M0,0 L6,0 L0,7 Z M44,0 L38,0 L44,7 Z M0,44 L6,44 L0,37 Z M44,44 L38,44 L44,37 Z"/>
    <path d="M0,22 H3 M41,22 H44 M22,0 V2 M22,42 V44"/>`],
  tlemcen: [60, 60, `
    ${star8(30, 30, 16)}<circle cx="30" cy="30" r="5"/>
    ${star8(0, 0, 16)}${star8(60, 0, 16)}${star8(0, 60, 16)}${star8(60, 60, 16)}
    <path d="M30,0 l4,4 l-4,4 l-4,-4 Z M30,60 l4,-4 l-4,-4 l-4,4 Z M0,30 l4,4 l4,-4 l-4,-4 Z M60,30 l-4,4 l-4,-4 l4,-4 Z"/>
    <path d="M41.3,18.7 L48.7,11.3 M18.7,18.7 L11.3,11.3 M41.3,41.3 L48.7,48.7 M18.7,41.3 L11.3,48.7"/>`],
  bejaia: [48, 32, `
    <path d="M0,8 Q12,0 24,8 T48,8"/>
    <path d="M0,16 Q12,8 24,16 T48,16"/>
    <path d="M-12,26 Q0,18 12,26 T36,26 T60,26"/>
    <circle cx="24" cy="2.5" r="1"/><circle cx="0" cy="2.5" r="1"/><circle cx="48" cy="2.5" r="1"/>`],
  bousaada: [48, 48, `
    <path d="M0,10 L12,2 L24,10 L36,2 L48,10 M0,17 L12,9 L24,17 L36,9 L48,17"/>
    ${diamond(12, 32, 7, 7)}${diamond(36, 32, 7, 7)}
    <circle cx="12" cy="32" r="1.4"/><circle cx="36" cy="32" r="1.4"/>
    <path d="M24,28 V36 M0,28 V36 M48,28 V36"/>`],
};

// ---------------------------------------------------------------- hero edges
// x(t) for t in 0..1 down the hero: where the photograph starts inside a
// 64-wide strip at its left edge. Each is the region's own silhouette.
const tri = u => 1 - Math.abs(((u % 1) + 1) % 1 * 2 - 1);
const EDGE = {
  algiers: t => [38, 24, 30, 12, 20, 6, 16, 28][Math.min(7, Math.floor(t * 8))],           // casbah steps
  constantine: t => 46 - 40 * Math.sin(Math.PI * t),                                            // the bridge's arch
  roman: t => 30 - 20 * Math.abs(Math.sin(Math.PI * t * 5)),                                    // column fluting
  mzab: t => (Math.floor(t * 11) % 2 ? 12 : 32),                                                // parapet merlons
  sahara: t => 32 + 20 * Math.sin(2 * Math.PI * t * 1.1 + .4) + 6 * Math.sin(2 * Math.PI * t * 2.7), // dune
  tlemcen: t => { const u = (t * 4) % 1; return 38 - 30 * Math.pow(Math.sin(Math.PI * u), .55); },   // horseshoe arcade
  bejaia: t => 30 + 11 * Math.sin(2 * Math.PI * t * 5),                                         // the sea
  bousaada: t => 34 - 22 * tri(t * 6),                                                          // kilim zigzag
};
const N = 240, W = 64, H = 40;
function edgeSvg(f, horizontal) {
  const pts = [];
  for (let i = 0; i <= N; i++) { const t = i / N; pts.push([f(t), t * 100]); }
  let poly;
  if (!horizontal) poly = [[W, 0], ...pts, [W, 100]];
  else poly = [[0, 0], ...pts.map(([x, y]) => [y, H * (1 - x / W)]), [100, 0]];
  const vb = horizontal ? `0 0 100 ${H}` : `0 0 ${W} 100`;
  const d = 'M' + poly.map(([x, y]) => `${+x.toFixed(1)},${+y.toFixed(1)}`).join('L') + 'Z';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" preserveAspectRatio="none"><path d="${d}"/></svg>`;
}

let css = `/* AUTO-GENERATED by scripts/gen-region-art.mjs — do not edit by hand.
   Each region's hero photograph is cut along its own silhouette: the casbah's
   steps, the bridge's arch, a column's fluting, merlons, a dune, a horseshoe
   arcade, the sea, a kilim's zigzag. */\n`;
for (const id of Object.keys(EM)) {
  const c = RC[id];
  if (!c) throw new Error('no colour for ' + id);
  const em = len(`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><g fill="none" stroke="${c}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">${EM[id]}</g></svg>`).replace(/\s*\n\s*/g, '');
  writeFileSync(`public/assets/regions/em-${id}.svg`, em);
  const [pw, ph, body] = PAT[id];
  const pat = `<svg xmlns="http://www.w3.org/2000/svg" width="${pw}" height="${ph}" viewBox="0 0 ${pw} ${ph}"><g fill="none" stroke="${c}" stroke-width="1.3" stroke-linejoin="round" stroke-linecap="round">${body}</g></svg>`.replace(/\s*\n\s*/g, '');
  writeFileSync(`public/assets/regions/pat-${id}.svg`, pat);
  // the edges are files, not data URIs: cached once, and this CSS stays small
  writeFileSync(`public/assets/regions/edge-${id}-v.svg`, edgeSvg(EDGE[id], false));
  writeFileSync(`public/assets/regions/edge-${id}-h.svg`, edgeSvg(EDGE[id], true));
  css += `[data-region="${id}"]{--edge-v:url('/assets/regions/edge-${id}-v.svg');--edge-h:url('/assets/regions/edge-${id}-h.svg');--pat-w:${pw}px;--pat-h:${ph}px;}\n`;
}
writeFileSync('src/styles/region-art.css', css);

// ---------------------------------------------------------------- tour pages
// A tour page wears its region's identity (src/data/tourRegions.mjs), set by
// data-rgn on <html>: the hero tinted with the region's deep colour and cut
// along its silhouette at the foot, its pattern behind the copy, its emblem
// above each heading and on a seal between sections, and a faint watermark.
const hexToRgb = h => { const n = h.replace('#', ''); return [0, 2, 4].map(i => parseInt(n.slice(i, i + 2), 16)); };
const toHex = rgb => '#' + rgb.map(v => Math.round(v).toString(16).padStart(2, '0')).join('');
const rgba = (h, a) => { const [r, g, b] = hexToRgb(h); return `rgba(${r},${g},${b},${a})`; };
const shade = (h, t) => toHex(hexToRgb(h).map(v => v * (1 - t)));
const lum = h => { const f = v => { v /= 255; return v <= .03928 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; }; const [r, g, b] = hexToRgb(h).map(f); return .2126 * r + .7152 * g + .0722 * b; };
const contrast = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + .05) / (y + .05); };
const legible = h => { let t = 0, c = h; while (contrast(c, '#FFFFFF') < 4.5 && t < .8) { t += .04; c = shade(h, t); } return c; };

let tcss = `/* AUTO-GENERATED by scripts/gen-region-art.mjs — do not edit by hand.
   Tour pages in their region's identity, via data-rgn on <html>. */\n`;
for (const id of Object.keys(EM)) {
  const c = RC[id], d = RCD[id], l = RCL[id], ink = legible(c), sel = `:root[data-rgn="${id}"]`;
  const [pw, ph] = PAT[id];
  const lightPat = readFileSync(`public/assets/regions/pat-${id}.svg`, 'utf8').replace(`stroke="${c}"`, `stroke="${l}"`).replace('<g ', '<g opacity=".5" ');
  writeFileSync(`public/assets/regions/pat-${id}-light.svg`, lightPat);
  const wm = readFileSync(`public/assets/regions/em-${id}.svg`, 'utf8').replace('<svg ', '<svg opacity=".07" ');
  writeFileSync(`public/assets/regions/wm-${id}.svg`, wm);
  const A = `/assets/regions/`;
  tcss += `\n/* ${id} */\n`;
  tcss += `${sel}{--accent:${ink};--accent-2:${l};--accent-deep:${d};--wash:${rgba(c, .06)};}\n`;
  // hero: the region's deep colour over the photograph, no seasonal edge (the
  // region's silhouette is the edge), the foot cut along that silhouette
  tcss += `${sel} .hero::after{background:linear-gradient(100deg,${rgba(d, .9)} 0%,${rgba(d, .55)} 48%,${rgba(d, .15)} 85%),linear-gradient(0deg,${rgba(d, .7)},transparent 42%);}\n`;
  tcss += `${sel} .hero{-webkit-mask:url('${A}edge-${id}-h.svg') left bottom/100% 46px no-repeat,linear-gradient(#000,#000) left top/100% calc(100% - 45px) no-repeat;`
        + `mask:url('${A}edge-${id}-h.svg') left bottom/100% 46px no-repeat,linear-gradient(#000,#000) left top/100% calc(100% - 45px) no-repeat;}\n`;
  tcss += `${sel} .hero > picture::after{content:"";position:absolute;inset:0;z-index:2;pointer-events:none;`
        + `background:url('${A}pat-${id}-light.svg') 0 0/${pw * 1.3}px ${ph * 1.3}px repeat;`
        + `-webkit-mask-image:linear-gradient(100deg,#000 0%,rgba(0,0,0,.55) 40%,transparent 72%);mask-image:linear-gradient(100deg,#000 0%,rgba(0,0,0,.55) 40%,transparent 72%);}\n`;
  // section breaks: a band of the pattern, the emblem on a seal at its centre
  tcss += `${sel} .section + .section{position:relative;}\n`;
  tcss += `${sel} .section + .section::before{content:"";position:absolute;left:50%;top:0;transform:translate(-50%,-50%);width:min(90%,1040px);height:28px;pointer-events:none;`
        + `background:url('${A}pat-${id}.svg') center/auto 28px repeat-x;opacity:.55;`
        + `-webkit-mask-image:linear-gradient(90deg,transparent,#000 22%,transparent 44%,transparent 56%,#000 78%,transparent);mask-image:linear-gradient(90deg,transparent,#000 22%,transparent 44%,transparent 56%,#000 78%,transparent);}\n`;
  tcss += `${sel} .section + .section::after{content:"";position:absolute;left:50%;top:0;transform:translate(-50%,-50%);width:50px;height:50px;border-radius:50%;pointer-events:none;`
        + `background:#fff url('${A}em-${id}.svg') center/34px 34px no-repeat;box-shadow:0 0 0 1px ${rgba(c, .35)},0 0 0 5px #fff,0 0 0 6px ${rgba(c, .16)};}\n`;
  // headings: the emblem, then a short rule in the region's colour
  tcss += `${sel} :is(.prose,.tour) h2::before{content:"";display:block;width:76px;height:28px;margin-bottom:.6rem;`
        + `background:url('${A}em-${id}.svg') left center/28px 28px no-repeat,linear-gradient(${c},${c}) 36px center/40px 2px no-repeat;}\n`;
  tcss += `${sel} body::after{content:"";position:fixed;right:-40px;bottom:-40px;width:300px;height:300px;z-index:-1;pointer-events:none;background:url('${A}wm-${id}.svg') center/contain no-repeat;}\n`;
  tcss += `${sel} .card{border-top:2px solid ${c};}\n${sel} .qbox{background:${rgba(c, .06)};}\n`;
}
writeFileSync('src/styles/tour-regions.css', tcss);
console.log(`[gen] region art: ${Object.keys(EM).length} emblems, patterns and hero edges`);
