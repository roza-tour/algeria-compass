// P2 — curate the client-trip library for the homepage Traveller slider.
// Picks high-resolution LANDSCAPE shots (best for a wide slider), flags the
// low-res ones so they are left out rather than shown poorly, and writes a
// committed JSON the <TravellerSlider> imports. Re-run if the library changes:
//   node scripts/curate-traveller-photos.mjs
import { readdirSync, statSync, openSync, readSync, closeSync, writeFileSync } from 'node:fs';

const DIR = 'public/assets/img/clients';
const WEB = '/assets/img/clients';
const MIN_LANDSCAPE = 800;   // min(w,h) px to qualify for the slider
const LOWRES_BELOW   = 700;  // min(w,h) px below this is flagged + omitted
const TARGET = 20;           // how many to show in the slider

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
const landscape = meta.filter(m=>m.w > m.h && Math.min(m.w,m.h) >= MIN_LANDSCAPE);

// even spread across the (id-sorted) qualifying landscapes for variety
const step = Math.max(1, Math.floor(landscape.length / TARGET));
const picked = [];
for(let i=0; i<landscape.length && picked.length<TARGET; i+=step) picked.push(landscape[i]);

const out = {
  generated: new Date().toISOString(),
  criteria: { minLandscapePx: MIN_LANDSCAPE, lowresBelowPx: LOWRES_BELOW, target: TARGET },
  stats: { total: meta.length, landscapeQualifying: landscape.length, lowResFlagged: lowres.length, picked: picked.length },
  slider: picked.map(m=>({ src:`${WEB}/${m.f}`, w:m.w, h:m.h })),
  flaggedLowRes: lowres,
};
writeFileSync('src/data/traveller-slider.json', JSON.stringify(out, null, 2));
console.log(`[curate] ${meta.length} photos | ${landscape.length} hi-res landscape | picked ${picked.length} | flagged ${lowres.length} low-res`);
console.log('[curate] wrote src/data/traveller-slider.json');
