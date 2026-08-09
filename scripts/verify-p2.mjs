// P2 verification — slider behaviour + reviews display/schema, via CDP.
// Serves dist/ and injects a SAMPLE /reviews-approved.json (2 reviews) so the
// reviews list + AggregateRating JSON-LD path is exercised without PHP.
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { setTimeout as sleep } from 'node:timers/promises';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const ROOT = join(process.cwd(), 'dist');
const OUT = join(process.cwd(), '_verify');
const PORT = 8132;
const MIME = { '.html':'text/html','.css':'text/css','.js':'text/javascript','.json':'application/json','.svg':'image/svg+xml','.jpg':'image/jpeg','.png':'image/png','.webp':'image/webp','.ico':'image/x-icon','.woff2':'font/woff2' };

const SAMPLE = { updated:new Date().toISOString(), reviews:[
  { id:'a1', name:'Marta', country:'Spain', tour:'Djanet Sahara Safari', rating:5, comment:'Unforgettable dunes and a guide who knew every star. Faultless.', date:'2026-05-02' },
  { id:'a2', name:'Tom', country:'UK', tour:'Algiers City Tour', rating:4, comment:'The Casbah walk was a highlight. Smooth, well organised trip.', date:'2026-04-18' },
]};

const server = createServer(async (req,res)=>{
  try{
    let p = decodeURIComponent(req.url.split('?')[0]);
    if(p === '/reviews-approved.json'){ res.writeHead(200,{'content-type':'application/json'}); return res.end(JSON.stringify(SAMPLE)); }
    if(p.endsWith('/')) p += 'index.html';
    let fp = normalize(join(ROOT,p));
    if(!fp.startsWith(ROOT)){ res.writeHead(403); return res.end(); }
    if(!existsSync(fp)){ res.writeHead(404); return res.end('404'); }
    res.writeHead(200,{'content-type':MIME[extname(fp)]||'application/octet-stream'});
    res.end(await readFile(fp));
  }catch(e){ res.writeHead(500); res.end(String(e)); }
});
await new Promise(r=>server.listen(PORT,r));
const BASE=`http://localhost:${PORT}`;
console.log('[verify] serving dist/ at',BASE);

const chrome = spawn(CHROME,['--headless=new','--disable-gpu','--no-first-run','--no-default-browser-check','--remote-debugging-port=9224','--window-size=1280,2400','--user-data-dir='+join(process.cwd(),'.chrome-verify-p2'),'about:blank'],{stdio:'ignore'});
async function wsUrl(){ for(let i=0;i<40;i++){ try{ const r=await fetch('http://127.0.0.1:9224/json/version'); return (await r.json()).webSocketDebuggerUrl; }catch{ await sleep(300);} } throw new Error('no devtools'); }
const ws=new WebSocket(await wsUrl());
await new Promise(r=>ws.addEventListener('open',r,{once:true}));
let id=0; const pend=new Map();
ws.addEventListener('message',e=>{ const m=JSON.parse(e.data); if(m.id&&pend.has(m.id)){pend.get(m.id)(m);pend.delete(m.id);} });
const cmd=(method,params={},sessionId)=>new Promise((res,rej)=>{ const i=++id; const to=setTimeout(()=>{pend.delete(i);rej(new Error('timeout '+method));},20000); pend.set(i,m=>{clearTimeout(to);res(m);}); ws.send(JSON.stringify({id:i,method,params,sessionId})); });
const { result:{ targetInfos } }=await cmd('Target.getTargets');
const target=targetInfos.find(t=>t.type==='page');
const { result:{ sessionId } }=await cmd('Target.attachToTarget',{targetId:target.targetId,flatten:true});
const S=(m,p)=>cmd(m,p,sessionId);
await S('Page.enable'); await S('Runtime.enable');
const evalJs=async expr=>{ const r=await S('Runtime.evaluate',{expression:expr,returnByValue:true,awaitPromise:true}); if(r.result?.exceptionDetails) throw new Error(JSON.stringify(r.result.exceptionDetails)); return r.result?.result?.value; };
const shot=async name=>{ const r=await S('Page.captureScreenshot',{format:'png'}); await writeFile(join(OUT,name),Buffer.from(r.result.data,'base64')); console.log('  shot',name); };

await S('Page.navigate',{url:BASE+'/'});
await sleep(2200);

// --- slider ---
const slideCount = await evalJs(`document.querySelectorAll('.travx-slide').length`);
await evalJs(`document.querySelector('.travx').scrollIntoView({block:'center'}); true`); await sleep(500);
await shot('p2-slider.png');
const dotBefore = await evalJs(`[...document.querySelectorAll('.travx-dot')].findIndex(d=>d.classList.contains('active'))`);
await evalJs(`document.querySelector('.travx-nav.next').click(); true`); await sleep(900);
const dotAfter = await evalJs(`[...document.querySelectorAll('.travx-dot')].findIndex(d=>d.classList.contains('active'))`);

// --- reviews ---
await evalJs(`document.querySelector('.rvx').scrollIntoView({block:'start'}); true`); await sleep(700);
await shot('p2-reviews.png');
const rev = await evalJs(`(() => {
  const cards = document.querySelectorAll('.rvx-card').length;
  const agg = document.querySelector('.rvx-agg') ? document.querySelector('.rvx-agg b').textContent : null;
  const ld = [...document.querySelectorAll('script[type="application/ld+json"]')].map(s=>{try{return JSON.parse(s.textContent)}catch{return null}}).find(j=>j && j.aggregateRating);
  const stars = document.querySelectorAll('.rvx-stars input[name=rating]').length;
  const fields = ['name','country','tour','comment','email','whatsapp','website'].filter(n=>document.querySelector('.rvx-form [name="'+n+'"]')).length;
  return { cards, agg, hasSchema: !!ld, schemaRating: ld && ld.aggregateRating.ratingValue, schemaCount: ld && ld.aggregateRating.reviewCount, schemaReviews: ld ? ld.review.length : 0, starInputs: stars, formFields: fields };
})()`);

console.log('\n[verify] SLIDER: slides='+slideCount+' activeDot '+dotBefore+' -> '+dotAfter+' '+(slideCount===20 && dotAfter!==dotBefore ? 'OK':'*** FAIL ***'));
console.log('[verify] REVIEWS:', JSON.stringify(rev));
const ok = slideCount===20 && dotAfter!==dotBefore && rev.cards===2 && rev.agg==='4.5' && rev.hasSchema && rev.schemaCount===2 && rev.starInputs===5 && rev.formFields===7;
console.log('\n[verify]', ok ? 'P2 SLIDER + REVIEWS + SCHEMA ✓' : 'P2 CHECKS FAILED ✗');
ws.close(); chrome.kill(); server.close();
process.exit(ok?0:1);
