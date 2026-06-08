// P3 verification — Honest Answers: single-open accordion + screenshot.
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { setTimeout as sleep } from 'node:timers/promises';
const CHROME='C:/Program Files/Google/Chrome/Application/chrome.exe';
const ROOT=join(process.cwd(),'dist'), OUT=join(process.cwd(),'_verify'), PORT=8133;
const MIME={'.html':'text/html','.css':'text/css','.js':'text/javascript','.json':'application/json','.svg':'image/svg+xml','.jpg':'image/jpeg','.png':'image/png','.webp':'image/webp','.ico':'image/x-icon','.woff2':'font/woff2'};
const server=createServer(async(req,res)=>{ try{ let p=decodeURIComponent(req.url.split('?')[0]); if(p.endsWith('/'))p+='index.html'; let fp=normalize(join(ROOT,p)); if(!fp.startsWith(ROOT)){res.writeHead(403);return res.end();} if(!existsSync(fp)){res.writeHead(404);return res.end('404');} res.writeHead(200,{'content-type':MIME[extname(fp)]||'application/octet-stream'}); res.end(await readFile(fp)); }catch(e){res.writeHead(500);res.end(String(e));} });
await new Promise(r=>server.listen(PORT,r)); const BASE=`http://localhost:${PORT}`; console.log('[verify] serving',BASE);
const chrome=spawn(CHROME,['--headless=new','--disable-gpu','--no-first-run','--remote-debugging-port=9225','--window-size=1280,2600','--user-data-dir='+join(process.cwd(),'.chrome-verify-p3'),'about:blank'],{stdio:'ignore'});
async function wsUrl(){ for(let i=0;i<40;i++){ try{ const r=await fetch('http://127.0.0.1:9225/json/version'); return (await r.json()).webSocketDebuggerUrl;}catch{await sleep(300);} } throw new Error('no devtools'); }
const ws=new WebSocket(await wsUrl()); await new Promise(r=>ws.addEventListener('open',r,{once:true}));
let id=0; const pend=new Map(); ws.addEventListener('message',e=>{const m=JSON.parse(e.data); if(m.id&&pend.has(m.id)){pend.get(m.id)(m);pend.delete(m.id);}});
const cmd=(method,params={},sessionId)=>new Promise((res,rej)=>{const i=++id;const to=setTimeout(()=>{pend.delete(i);rej(new Error('timeout '+method));},20000);pend.set(i,m=>{clearTimeout(to);res(m);});ws.send(JSON.stringify({id:i,method,params,sessionId}));});
const {result:{targetInfos}}=await cmd('Target.getTargets'); const target=targetInfos.find(t=>t.type==='page');
const {result:{sessionId}}=await cmd('Target.attachToTarget',{targetId:target.targetId,flatten:true});
const S=(m,p)=>cmd(m,p,sessionId); await S('Page.enable'); await S('Runtime.enable');
const evalJs=async e=>{const r=await S('Runtime.evaluate',{expression:e,returnByValue:true,awaitPromise:true}); if(r.result?.exceptionDetails)throw new Error(JSON.stringify(r.result.exceptionDetails)); return r.result?.result?.value;};
const shot=async n=>{const r=await S('Page.captureScreenshot',{format:'png'}); await writeFile(join(OUT,n),Buffer.from(r.result.data,'base64')); console.log('  shot',n);};
await S('Page.navigate',{url:BASE+'/'}); await sleep(1800);
await evalJs(`document.querySelector('.ha').scrollIntoView({block:'start'}); true`); await sleep(400);
// open first details, then a details in another category
await evalJs(`document.querySelectorAll('.ha .faq details')[0].querySelector('summary').click(); true`); await sleep(250);
const afterFirst=await evalJs(`document.querySelectorAll('.ha .faq details[open]').length`);
await evalJs(`document.querySelectorAll('.ha .faq details')[5].querySelector('summary').click(); true`); await sleep(250);
const afterSecond=await evalJs(`document.querySelectorAll('.ha .faq details[open]').length`);
const total=await evalJs(`document.querySelectorAll('.ha .faq details').length`);
const cats=await evalJs(`document.querySelectorAll('.ha-cat').length`);
await evalJs(`document.querySelector('.ha').scrollIntoView({block:'start'}); true`); await sleep(300);
await shot('p3-honest-answers.png');
console.log('[verify] cats='+cats+' totalQ='+total+' openAfter1='+afterFirst+' openAfter2='+afterSecond);
const ok = cats===6 && total===16 && afterFirst===1 && afterSecond===1;
console.log('\n[verify]', ok?'P3 SINGLE-OPEN ACCORDION ✓':'P3 FAILED ✗');
ws.close(); chrome.kill(); server.close(); process.exit(ok?0:1);
