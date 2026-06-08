// Phase J — responsive QA via Chrome DevTools Protocol.
// Loads each page at each breakpoint, flags horizontal overflow, the elements
// causing it, and undersized tap targets. No external deps (Node 24 WebSocket).
import { spawn } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const BASE = 'http://localhost:8099';
const PAGES = [
  ['/', 'home + explorer + trust'],
  ['/provinces/djanet/', 'province (dark skin)'],
  ['/provinces/tlemcen/', 'province (andalusian)'],
  ['/food/', 'cuisine'],
  ['/tours/the-soul-of-algeria/', 'tour + booking'],
  ['/contact/', 'contact + map'],
  ['/questions/', 'FAQ'],
  ['/visa-support/', 'visa'],
];
const WIDTHS = [360, 390, 414, 768, 834, 1024];

async function wsUrl() {
  for (let i=0;i<20;i++){ try { const r = await fetch('http://127.0.0.1:9222/json/version'); const j = await r.json(); return j.webSocketDebuggerUrl; } catch { await sleep(300); } }
  throw new Error('no devtools');
}
const ws = new WebSocket(await wsUrl());
await new Promise(res => ws.addEventListener('open', res, { once:true }));
let id=0; const pend=new Map();
ws.addEventListener('message', e => { const m=JSON.parse(e.data); if(m.id&&pend.has(m.id)){pend.get(m.id)(m);pend.delete(m.id);} });
const cmd = (method,params={},sessionId)=> new Promise(res=>{ const i=++id; pend.set(i,res); ws.send(JSON.stringify({id:i,method,params,sessionId})); });

// attach to a tab
const { result:{ targetInfos } } = await cmd('Target.getTargets');
let target = targetInfos.find(t=>t.type==='page');
const { result:{ sessionId } } = await cmd('Target.attachToTarget', { targetId: target.targetId, flatten:true });
const S = (method,params)=>cmd(method,params,sessionId);
await S('Page.enable'); await S('Runtime.enable');

const AUDIT = `(() => {
  const vw = window.innerWidth, docW = document.documentElement.scrollWidth;
  const wide = [];
  for (const el of document.querySelectorAll('body *')) {
    const r = el.getBoundingClientRect();
    if (r.width>1 && r.right > vw + 2 && r.left > -2 && r.left < vw) {
      const c = (el.className && el.className.toString ? el.className.toString().split(' ')[0] : '');
      const s = el.tagName.toLowerCase() + (c?'.'+c:'');
      if (!wide.includes(s) && wide.length<10) wide.push(s+' →'+Math.round(r.right));
    }
  }
  const small=[];
  for (const el of document.querySelectorAll('button, summary, [role=tab], .btn, .chip, .nav-links a, .book-widget a, .tour-sticky a, .ha-foot a, input, .civx-card, .civx-tour')) {
    const r = el.getBoundingClientRect(); if(r.width===0||r.height===0) continue;
    const cs = getComputedStyle(el); if(cs.display==='none'||cs.visibility==='hidden') continue;
    if (r.height < 40 && small.length<14) small.push((el.tagName.toLowerCase()+' "'+(el.textContent||'').trim().slice(0,16)+'" '+Math.round(r.height)+'px'));
  }
  return JSON.stringify({vw,docW,overflow:docW>vw+1,wide,small});
})()`;

let problems = 0;
for (const w of WIDTHS) {
  await S('Emulation.setDeviceMetricsOverride', { width:w, height:900, deviceScaleFactor:1, mobile:w<=414 });
  console.log(`\n===== ${w}px =====`);
  for (const [path,label] of PAGES) {
    await S('Page.navigate', { url: BASE+path });
    await sleep(700);
    const out = await S('Runtime.evaluate', { expression: AUDIT, returnByValue:true });
    const a = JSON.parse(out.result.result.value);
    const flagOverflow = a.overflow;
    const flagTaps = a.small.length>0;
    if (flagOverflow || flagTaps) problems++;
    const status = flagOverflow ? `OVERFLOW docW=${a.docW}>vw=${a.vw}` : 'ok';
    console.log(`  ${path.padEnd(34)} ${status}${flagOverflow?'  ['+a.wide.join(', ')+']':''}`);
    if (flagTaps) console.log(`      small taps: ${a.small.join(' | ')}`);
  }
}
console.log(`\n[qa] done — ${problems} page/width combos with flags`);
ws.close();
