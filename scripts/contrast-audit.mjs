// L3 — sitewide WCAG contrast auditor. Loads each page in the system Chrome,
// finds every visible text node, resolves its effective (solid) background by
// walking ancestors, computes the WCAG contrast ratio, and reports AA failures
// (< 4.5 normal text, < 3.0 large text >=24px or >=18.66px bold). Text over a
// background-image is reported separately (ratio can't be trusted).
//   node scripts/contrast-audit.mjs
import pp from 'puppeteer-core';
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE = 'http://localhost:4321';
const PAGES = [
  ['home', '/'],
  ['luxury', '/luxury/'],
  ['tour-sahara', '/tours/timimoun-desert-escape/'],
  ['food', '/food/'],
  ['sweets', '/sweets/'],
  ['evisa', '/evisa/'],
  ['province', '/provinces/oran/'],
  ['culture', '/culture/'],
  ['questions', '/questions/'],
  ['booking', '/booking-terms/'],
];

const AUDIT = `(() => {
  function parse(c){
    var m = c.match(/rgba?\\(([^)]+)\\)/); if(!m) return null;
    var p = m[1].split(',').map(function(s){return parseFloat(s.trim());});
    return { r:p[0], g:p[1], b:p[2], a:p.length>3?p[3]:1 };
  }
  function lin(v){ v/=255; return v<=0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055,2.4); }
  function lum(c){ return 0.2126*lin(c.r)+0.7152*lin(c.g)+0.0722*lin(c.b); }
  function ratio(a,b){ var L1=lum(a),L2=lum(b); var hi=Math.max(L1,L2),lo=Math.min(L1,L2); return (hi+0.05)/(lo+0.05); }
  function effBg(el){
    var node = el;
    while(node && node.nodeType===1){
      var cs = getComputedStyle(node);
      if(cs.backgroundImage && cs.backgroundImage!=='none') return { img:true };
      var bg = parse(cs.backgroundColor);
      if(bg && bg.a>0.5) return { color:bg };
      node = node.parentElement;
    }
    return { color:{r:255,g:255,b:255,a:1} };
  }
  var out=[];
  var els = document.querySelectorAll('body *');
  for(var i=0;i<els.length;i++){
    var el=els[i];
    // direct text only
    var txt='';
    for(var n=0;n<el.childNodes.length;n++){ if(el.childNodes[n].nodeType===3) txt+=el.childNodes[n].textContent; }
    txt=txt.trim();
    if(txt.length<3) continue;
    var r=el.getBoundingClientRect(); if(r.width<2||r.height<2) continue;
    var cs=getComputedStyle(el);
    if(cs.visibility==='hidden'||cs.display==='none'||parseFloat(cs.opacity)<0.4) continue;
    var col=parse(cs.color); if(!col||col.a<0.4) continue;
    var bg=effBg(el);
    var size=parseFloat(cs.fontSize); var weight=parseInt(cs.fontWeight)||400;
    var large = size>=24 || (size>=18.66 && weight>=700);
    var min = large?3.0:4.5;
    if(bg.img){
      out.push({ overImage:true, tag:el.tagName.toLowerCase(), cls:(el.className&&el.className.toString?el.className.toString():'').slice(0,40), size:Math.round(size), txt:txt.slice(0,40) });
      continue;
    }
    var cr = ratio(col, bg.color);
    if(cr < min){
      out.push({
        ratio:Math.round(cr*100)/100, min:min, size:Math.round(size), weight:weight,
        color:'rgb('+Math.round(col.r)+','+Math.round(col.g)+','+Math.round(col.b)+')',
        bg:'rgb('+Math.round(bg.color.r)+','+Math.round(bg.color.g)+','+Math.round(bg.color.b)+')',
        tag:el.tagName.toLowerCase(), cls:(el.className&&el.className.toString?el.className.toString():'').slice(0,46), txt:txt.slice(0,46)
      });
    }
  }
  return out;
})()`;

const b = await pp.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox','--hide-scrollbars'] });
let totalFail = 0, totalImg = 0;
const failKeys = new Map();
for (const [name, path] of PAGES) {
  const p = await b.newPage();
  await p.setViewport({ width: 1280, height: 1000, deviceScaleFactor: 1 });
  await p.goto(BASE + path, { waitUntil: 'networkidle2', timeout: 30000 });
  const res = await p.evaluate(AUDIT);
  const fails = res.filter(r => !r.overImage);
  const imgs = res.filter(r => r.overImage);
  totalFail += fails.length; totalImg += imgs.length;
  if (fails.length) {
    console.log(`\\n### ${name} (${path}) — ${fails.length} contrast FAILS`);
    // dedupe by class+ratio
    const seen = new Set();
    for (const f of fails.sort((a,b)=>a.ratio-b.ratio)) {
      const k = f.cls + '|' + f.ratio;
      if (seen.has(k)) continue; seen.add(k);
      const gk = `${f.tag}.${f.cls.split(' ')[0]}`;
      failKeys.set(gk, (failKeys.get(gk)||0)+1);
      console.log(`  ${f.ratio}:1 (need ${f.min}) ${f.size}px/${f.weight}  ${f.color} on ${f.bg}  <${f.tag} class="${f.cls}">  "${f.txt}"`);
    }
  }
  await p.close();
}
console.log(`\\n=== TOTAL: ${totalFail} contrast failures, ${totalImg} text-over-image (manual check) ===`);
console.log('Top offending selectors:');
[...failKeys.entries()].sort((a,b)=>b[1]-a[1]).slice(0,20).forEach(([k,v])=>console.log(`  ${v}×  ${k}`));
await b.close();
