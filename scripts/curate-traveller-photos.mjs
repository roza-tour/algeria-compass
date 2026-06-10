// P2/L2 — curate the client-trip library for the homepage Traveller MARQUEE.
// The marquee crops every photo into a uniform tile (object-fit:cover), so we
// no longer need landscape-only: we keep ALL reasonably-sized shots of either
// orientation and pick an even spread for variety, flagging only the truly
// small ones. Writes a committed JSON the <TravellerSlider> imports. Re-run if
// the library changes:  node scripts/curate-traveller-photos.mjs
import { readdirSync, statSync, openSync, readSync, closeSync, writeFileSync } from 'node:fs';

const DIR = 'public/assets/img/clients';
const WEB = '/assets/img/clients';
const MIN_TILE = 600;        // min(w,h) px to qualify — plenty for a cropped tile
const LOWRES_BELOW   = 600;  // min(w,h) px below this is flagged + omitted
const TARGET = 36;           // how many tiles to show in the marquee

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
const qualifying = meta.filter(m=>Math.min(m.w,m.h) >= MIN_TILE);

// even spread across the (id-sorted) qualifying photos for variety, so the
// marquee mixes people, places and the desert across the whole trip library
const step = Math.max(1, Math.floor(qualifying.length / TARGET));
const picked = [];
for(let i=0; i<qualifying.length && picked.length<TARGET; i+=step) picked.push(qualifying[i]);

const out = {
  generated: new Date().toISOString(),
  criteria: { minTilePx: MIN_TILE, lowresBelowPx: LOWRES_BELOW, target: TARGET },
  stats: { total: meta.length, qualifying: qualifying.length, lowResFlagged: lowres.length, picked: picked.length },
  slider: picked.map(m=>({ src:`${WEB}/${m.f}`, w:m.w, h:m.h })),
  flaggedLowRes: lowres,
};
writeFileSync('src/data/traveller-slider.json', JSON.stringify(out, null, 2));
console.log(`[curate] ${meta.length} photos | ${qualifying.length} qualifying | picked ${picked.length} | flagged ${lowres.length} low-res`);
console.log('[curate] wrote src/data/traveller-slider.json');
