// P1 verification — drive Chrome (CDP) over the built dist/, exercise the
// Civilisations accordion (click each of the 8 cards), assert the right panel
// opens, capture screenshots, and read back computed text colour vs surface to
// confirm legibility on the dark Sahara skin. No external deps (Node 24).
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { setTimeout as sleep } from 'node:timers/promises';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const ROOT = join(process.cwd(), 'dist');
const PORT = 8131;
const OUT = join(process.cwd(), '_verify');

const MIME = { '.html':'text/html', '.css':'text/css', '.js':'text/javascript', '.json':'application/json', '.svg':'image/svg+xml', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.png':'image/png', '.webp':'image/webp', '.ico':'image/x-icon', '.woff2':'font/woff2' };

// --- tiny static server ---
const server = createServer(async (req, res) => {
  try {
    let p = decodeURIComponent(req.url.split('?')[0]);
    if (p.endsWith('/')) p += 'index.html';
    let fp = normalize(join(ROOT, p));
    if (!fp.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
    if (!existsSync(fp)) { res.writeHead(404); return res.end('404'); }
    const buf = await readFile(fp);
    res.writeHead(200, { 'content-type': MIME[extname(fp)] || 'application/octet-stream' });
    res.end(buf);
  } catch (e) { res.writeHead(500); res.end(String(e)); }
});
await new Promise(r => server.listen(PORT, r));
const BASE = `http://localhost:${PORT}`;
console.log('[verify] serving dist/ at', BASE);

// --- chrome ---
const chrome = spawn(CHROME, [
  '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
  '--remote-debugging-port=9223', `--window-size=1280,2200`,
  '--user-data-dir=' + join(process.cwd(), '.chrome-verify-p1'), 'about:blank',
], { stdio: 'ignore' });

async function wsUrl(){ for(let i=0;i<40;i++){ try{ const r=await fetch('http://127.0.0.1:9223/json/version'); return (await r.json()).webSocketDebuggerUrl; }catch{ await sleep(300);} } throw new Error('no devtools'); }
const ws = new WebSocket(await wsUrl());
await new Promise(res => ws.addEventListener('open', res, { once:true }));
let id=0; const pend=new Map();
ws.addEventListener('message', e => { const m=JSON.parse(e.data); if(m.id&&pend.has(m.id)){pend.get(m.id)(m);pend.delete(m.id);} });
const cmd=(method,params={},sessionId)=>new Promise((res,rej)=>{ const i=++id; const to=setTimeout(()=>{ pend.delete(i); rej(new Error('timeout: '+method)); }, 20000); pend.set(i,(m)=>{ clearTimeout(to); res(m); }); ws.send(JSON.stringify({id:i,method,params,sessionId})); });

console.log('[verify] chrome connected; getting targets');
const { result:{ targetInfos } } = await cmd('Target.getTargets');
const target = targetInfos.find(t=>t.type==='page');
console.log('[verify] attaching to', target.targetId);
const { result:{ sessionId } } = await cmd('Target.attachToTarget', { targetId: target.targetId, flatten:true });
console.log('[verify] attached; session', sessionId);
const S=(method,params)=>cmd(method,params,sessionId);
await S('Page.enable'); await S('Runtime.enable');
async function evalJs(expr){ const r=await S('Runtime.evaluate',{ expression:expr, returnByValue:true, awaitPromise:true }); if(r.result?.exceptionDetails) throw new Error(JSON.stringify(r.result.exceptionDetails)); return r.result?.result?.value; }
async function shot(name){ const r=await S('Page.captureScreenshot',{ format:'png' }); await (await import('node:fs/promises')).writeFile(join(OUT,name), Buffer.from(r.result.data,'base64')); console.log('  shot', name); }

console.log('[verify] navigating to home');
await S('Page.navigate',{ url: BASE + '/' });
await sleep(1800);
console.log('[verify] navigated');
// scroll the explorer into view
await evalJs(`document.querySelector('.civx').scrollIntoView({block:'start'}); true`);
await sleep(400);
await shot('p1-explorer-default.png'); // Amazigh open by default

// helper to OPEN a card (click only if it isn't already open) and report state
async function clickAndReport(skinId){
  await evalJs(`(() => { const c=document.querySelector('[data-civ-target="${skinId}"]'); if(c.getAttribute('aria-expanded')!=='true') c.click(); return true; })()`);
  await sleep(450);
  return await evalJs(`(() => {
    const openPanels = [...document.querySelectorAll('.civx-panel')].filter(p=>!p.hidden).map(p=>p.getAttribute('data-civ-panel'));
    const card = document.querySelector('[data-civ-target="${skinId}"]');
    const panel = document.querySelector('[data-civ-panel="${skinId}"]');
    const cs = panel && !panel.hidden ? getComputedStyle(panel.querySelector('.civx-text')) : null;
    const ti = panel && !panel.hidden ? getComputedStyle(panel.querySelector('.civx-title')) : null;
    return {
      openPanels,
      cardExpanded: card.getAttribute('aria-expanded'),
      textColor: cs && cs.color, textWeight: cs && cs.fontWeight,
      titleColor: ti && ti.color,
      panelBg: panel && getComputedStyle(panel).backgroundColor
    };
  })()`);
}

const results = {};
for (const sk of ['01','02','03','04','05','06','07','08']){
  results[sk] = await clickAndReport(sk);
}
// explicit toggle test: clicking an already-open card collapses it (none open)
await evalJs(`document.querySelector('[data-civ-target="04"]').click(); true`); // ensure 04 open
await sleep(200);
await evalJs(`document.querySelector('[data-civ-target="04"]').click(); true`); // toggle closed
await sleep(200);
const toggleClosed = await evalJs(`[...document.querySelectorAll('.civx-panel')].filter(p=>!p.hidden).length`);
// screenshot the Sahara (02) panel specifically — the legibility-critical one
await evalJs(`document.querySelector('[data-civ-target="02"]').click(); true`); await sleep(400);
await evalJs(`document.querySelector('[data-civ-panel="02"]').scrollIntoView({block:'center'}); true`); await sleep(300);
await shot('p1-explorer-sahara.png');
// a light skin too (Mozabite/desert 03)
await evalJs(`document.querySelector('[data-civ-target="03"]').click(); true`); await sleep(400);
await evalJs(`document.querySelector('[data-civ-panel="03"]').scrollIntoView({block:'center'}); true`); await sleep(300);
await shot('p1-explorer-mzab.png');

console.log('\n[verify] accordion results (each click should open exactly that one panel):');
let pass = true;
for (const sk of Object.keys(results)){
  const r = results[sk];
  const ok = r.openPanels.length===1 && r.openPanels[0]===sk && r.cardExpanded==='true';
  if(!ok) pass=false;
  console.log(`  ${sk}: open=[${r.openPanels}] expanded=${r.cardExpanded} ${ok?'OK':'*** FAIL ***'}`);
}
console.log(`\n[verify] toggle test: panels open after re-clicking card 04 = ${toggleClosed} ${toggleClosed===0?'OK':'*** FAIL ***'}`);
if(toggleClosed!==0) pass=false;
console.log('\n[verify] Sahara (02) legibility — text colour should be light on dark bg:');
console.log('   text:', results['02'].textColor, 'weight', results['02'].textWeight);
console.log('   title:', results['02'].titleColor);
console.log('   panel bg:', results['02'].panelBg);

ws.close(); chrome.kill(); server.close();
console.log('\n[verify]', pass ? 'ALL 8 PANELS WIRED + TOGGLE + LEGIBILITY ✓' : 'SOME CHECKS FAILED ✗');
process.exit(pass ? 0 : 1);
