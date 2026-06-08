// P4 verification — tour cards (home + /tours/), Plan section, compact mobile header.
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { setTimeout as sleep } from 'node:timers/promises';
const CHROME='C:/Program Files/Google/Chrome/Application/chrome.exe';
const ROOT=join(process.cwd(),'dist'), OUT=join(process.cwd(),'_verify'), PORT=8134;
const MIME={'.html':'text/html','.css':'text/css','.js':'text/javascript','.json':'application/json','.svg':'image/svg+xml','.jpg':'image/jpeg','.png':'image/png','.webp':'image/webp','.ico':'image/x-icon','.woff2':'font/woff2'};
const server=createServer(async(req,res)=>{ try{ let p=decodeURIComponent(req.url.split('?')[0]); if(p.endsWith('/'))p+='index.html'; let fp=normalize(join(ROOT,p)); if(!fp.startsWith(ROOT)){res.writeHead(403);return res.end();} if(!existsSync(fp)){res.writeHead(404);return res.end('404');} res.writeHead(200,{'content-type':MIME[extname(fp)]||'application/octet-stream'}); res.end(await readFile(fp)); }catch(e){res.writeHead(500);res.end(String(e));} });
await new Promise(r=>server.listen(PORT,r)); const BASE=`http://localhost:${PORT}`; console.log('[verify] serving',BASE);
const chrome=spawn(CHROME,['--headless=new','--disable-gpu','--no-first-run','--remote-debugging-port=9226','--window-size=1300,2600','--user-data-dir='+join(process.cwd(),'.chrome-verify-p4'),'about:blank'],{stdio:'ignore'});
async function wsUrl(){ for(let i=0;i<40;i++){ try{ const r=await fetch('http://127.0.0.1:9226/json/version'); return (await r.json()).webSocketDebuggerUrl;}catch{await sleep(300);} } throw new Error('no devtools'); }
const ws=new WebSocket(await wsUrl()); await new Promise(r=>ws.addEventListener('open',r,{once:true}));
let id=0; const pend=new Map(); ws.addEventListener('message',e=>{const m=JSON.parse(e.data); if(m.id&&pend.has(m.id)){pend.get(m.id)(m);pend.delete(m.id);}});
const cmd=(method,params={},sessionId)=>new Promise((res,rej)=>{const i=++id;const to=setTimeout(()=>{pend.delete(i);rej(new Error('timeout '+method));},20000);pend.set(i,m=>{clearTimeout(to);res(m);});ws.send(JSON.stringify({id:i,method,params,sessionId}));});
const {result:{targetInfos}}=await cmd('Target.getTargets'); const target=targetInfos.find(t=>t.type==='page');
const {result:{sessionId}}=await cmd('Target.attachToTarget',{targetId:target.targetId,flatten:true});
const S=(m,p)=>cmd(m,p,sessionId); await S('Page.enable'); await S('Runtime.enable');
const evalJs=async e=>{const r=await S('Runtime.evaluate',{expression:e,returnByValue:true,awaitPromise:true}); if(r.result?.exceptionDetails)throw new Error(JSON.stringify(r.result.exceptionDetails)); return r.result?.result?.value;};
const shot=async n=>{const r=await S('Page.captureScreenshot',{format:'png'}); await writeFile(join(OUT,n),Buffer.from(r.result.data,'base64')); console.log('  shot',n);};
const nav=async u=>{ await S('Page.navigate',{url:u}); await sleep(1600); };

// --- desktop: home featured + plan ---
await S('Emulation.clearDeviceMetricsOverride').catch(()=>{});
await nav(BASE+'/');
const home = await evalJs(`({ tcards: document.querySelectorAll('.tcard').length, plan: document.querySelectorAll('.plan-card').length, cta: !!document.querySelector('.tcard-cta'), trust: document.querySelectorAll('.tcard-trust li').length>0, price: !!document.querySelector('.tcard-price b') })`);
await evalJs(`document.querySelector('.tcard').scrollIntoView({block:'start'}); true`); await sleep(400);
await shot('p4-home-cards.png');
await evalJs(`document.querySelector('.plan-sec').scrollIntoView({block:'start'}); true`); await sleep(400);
await shot('p4-plan.png');

// --- desktop: /tours/ ---
await nav(BASE+'/tours/');
const toursPage = await evalJs(`document.querySelectorAll('.tcard').length`);
await evalJs(`window.scrollTo(0,600); true`); await sleep(300);
await shot('p4-tours-page.png');

// --- mobile: compact header ---
await S('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:2,mobile:true});
await nav(BASE+'/');
const hdr = await evalJs(`(() => {
  var idb=document.querySelector('.id-band'), nav=document.querySelector('.nav');
  var bandH = (idb?idb.getBoundingClientRect().height:0) + (nav?nav.getBoundingClientRect().height:0);
  var wa = document.querySelector('.nav-cta .btn-wa');
  var waVisible = wa ? getComputedStyle(wa).display!=='none' : false;
  var waRect = wa && waVisible ? wa.getBoundingClientRect() : null;
  return { bandH: Math.round(bandH), waVisible, waMinTap: waRect ? Math.round(Math.min(waRect.width,waRect.height)) : 0 };
})()`);
await shot('p4-mobile-header.png');

console.log('[verify] HOME', JSON.stringify(home));
console.log('[verify] /tours/ tcards =', toursPage);
console.log('[verify] MOBILE HEADER', JSON.stringify(hdr));
const ok = home.tcards===6 && home.plan===6 && home.cta && home.trust && home.price && toursPage===20
  && hdr.bandH < 70 && hdr.waVisible && hdr.waMinTap>=44;
console.log('\n[verify]', ok?'P4 CARDS + PLAN + COMPACT HEADER ✓':'P4 CHECKS FAILED ✗');
ws.close(); chrome.kill(); server.close(); process.exit(ok?0:1);
