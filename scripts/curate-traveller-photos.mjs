// P2/L2/M — curate the client-trip library for the homepage Traveller MARQUEE.
// The marquee now shows each photo at its NATIVE aspect ratio (a fixed-height
// film-strip — no cropping), so portrait AND landscape phone shots both read
// cleanly. We keep reasonably-sized shots of either orientation, drop the soft /
// over-compressed ones with a file-size floor, and pick an even spread for
// variety. Writes a committed JSON the <TravellerSlider> imports + the picked
// dimensions so the strip reserves the right width. Re-run if the library
// changes:  node scripts/curate-traveller-photos.mjs
import { readdirSync, statSync, openSync, readSync, closeSync, writeFileSync } from 'node:fs';

const DIR = 'public/assets/img/clients';
const WEB = '/assets/img/clients';
const MIN_TILE = 600;        // min(w,h) px to qualify — plenty for a film-strip tile
const LOWRES_BELOW   = 600;  // min(w,h) px below this is flagged + omitted
const MIN_KB = 150;          // file-size floor — drops the soft / over-compressed shots
const TARGET = 48;           // how many tiles to show in the marquee (more variety)

function jpegSize(fp){
  const fd = openSync(fp,'r'); const buf = Buffer.alloc(65536); const n = readSync(fd,buf,0,65536,0); closeSync(fd);
  let o=2;
  while(o<n-8){
    if(buf[o]!==0xFF){o++;continue;}
    const m=buf[o+1];
    if(m>=0xC0&&m<=0xCF&&m!==0xC4&&m!==0xC8&&m!==0xCC){ return [buf.readUInt16BE(o+7), buf.readUInt16BE(o+5)]; }
    o += 2 + buf.readUInt16BE(o+2);
  }
  return [0,0];
}

const files = readdirSync(DIR).filter(f=>/^client-\d+\.jpg$/i.test(f))
  .sort((a,b)=>parseInt(a.match(/\d+/)[0])-parseInt(b.match(/\d+/)[0]));

const meta = files.map(f=>{ const [w,h]=jpegSize(DIR+'/'+f); return { f, w, h, kb:Math.round(statSync(DIR+'/'+f).size/1024) }; });

const lowres = meta.filter(m=>Math.min(m.w,m.h) < LOWRES_BELOW).map(m=>`${m.f} (${m.w}x${m.h})`);
const qualifying = meta.filter(m=>Math.min(m.w,m.h) >= MIN_TILE && m.kb >= MIN_KB);

// even spread across the (id-sorted) qualifying photos for variety, so the
// marquee mixes people, places and the desert across the whole trip library
const step = Math.max(1, Math.floor(qualifying.length / TARGET));
const picked = [];
for(let i=0; i<qualifying.length && picked.length<TARGET; i+=step) picked.push(qualifying[i]);

const out = {
  generated: new Date().toISOString(),
  criteria: { minTilePx: MIN_TILE, minKb: MIN_KB, lowresBelowPx: LOWRES_BELOW, target: TARGET },
  stats: { total: meta.length, qualifying: qualifying.length, lowResFlagged: lowres.length, picked: picked.length },
  slider: picked.map(m=>({ src:`${WEB}/${m.f}`, w:m.w, h:m.h })),
  flaggedLowRes: lowres,
};
writeFileSync('src/data/traveller-slider.json', JSON.stringify(out, null, 2));
console.log(`[curate] ${meta.length} photos | ${qualifying.length} qualifying | picked ${picked.length} | flagged ${lowres.length} low-res`);
console.log('[curate] wrote src/data/traveller-slider.json');
