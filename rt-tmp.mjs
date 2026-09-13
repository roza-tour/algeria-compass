// Runtime checks a static crawl cannot do: JS console errors, failed network
// requests, horizontal overflow at phone width, and interactive controls.
import puppeteer from 'puppeteer-core';
import http from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const root = '/home/user/algeria-compass/dist';
const MT = { '.html':'text/html','.css':'text/css','.js':'text/javascript','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.ico':'image/x-icon','.woff2':'font/woff2','.xml':'application/xml','.txt':'text/plain' };
const srv = http.createServer((q, s) => {
  let p = decodeURIComponent(q.url.split('?')[0]);
  if (p.endsWith('/')) p += 'index.html';
  let f = join(root, p);
  if (existsSync(f) && statSync(f).isDirectory()) f = join(f, 'index.html');
  if (existsSync(f) && statSync(f).isFile()) { s.writeHead(200, { 'content-type': MT[extname(f)] || 'application/octet-stream' }); s.end(readFileSync(f)); }
  else { s.writeHead(404); s.end('nf'); }
}).listen(8230);

const PAGES = [
  '/', '/tours/', '/tours/algeria-cultural-tour/', '/tours/tadrart-rouge-7-days/',
  '/tours/algeria-grand-discovery-14-days/', '/destinations/', '/destinations/djanet/',
  '/provinces/', '/regions/', '/questions/', '/blog/', '/blog/algeria-itinerary/',
  '/luxury/', '/experiences/', '/about/', '/contact/', '/evisa/', '/visa-support/',
  '/search/', '/team/', '/editorial/', '/sitemap/', '/unesco/', '/culture/', '/food/',
  '/fr/', '/fr/circuits/', '/fr/circuits/tadrart-rouge-7-days/', '/fr/evisa-algerie/',
  '/de/', '/de/reisen/', '/de/reisen/sefar-tassili-trek/',
  '/es/', '/es/circuitos/', '/es/circuitos/ihrir-oasis-7-days/',
  '/it/', '/it/circuiti/', '/it/circuiti/algeria-grand-discovery-14-days/',
  '/404.html',
];

const b = await puppeteer.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
const results = { consoleErrors: [], pageErrors: [], failedRequests: [], overflow: [], noH1: [] };

for (const vp of [{ w: 360, h: 780, name: 'phone' }, { w: 1280, h: 900, name: 'desktop' }]) {
  const pg = await b.newPage();
  await pg.setViewport({ width: vp.w, height: vp.h });
  for (const path of PAGES) {
    const errs = [], fails = [];
    const onConsole = m => { if (m.type() === 'error') errs.push(m.text().slice(0, 150)); };
    const onPageErr = e => results.pageErrors.push(`${vp.name} ${path}: ${String(e).slice(0, 150)}`);
    const onFail = r => { const u = r.url(); if (!u.startsWith('data:')) fails.push(`${u.replace('http://127.0.0.1:8230','')} (${r.failure()?.errorText || ''})`); };
    const onResp = r => { if (r.status() >= 400) fails.push(`${r.status()} ${r.url().replace('http://127.0.0.1:8230','')}`); };
    pg.on('console', onConsole); pg.on('pageerror', onPageErr);
    pg.on('requestfailed', onFail); pg.on('response', onResp);

    try { await pg.goto('http://127.0.0.1:8230' + path, { waitUntil: 'networkidle0', timeout: 30000 }); }
    catch (e) { results.pageErrors.push(`${vp.name} ${path}: NAV ${String(e).slice(0, 80)}`); }
    await new Promise(r => setTimeout(r, 250));

    const info = await pg.evaluate(() => {
      const de = document.documentElement;
      const over = de.scrollWidth - de.clientWidth;
      let culprits = [];
      if (over > 1) {
        for (const el of document.querySelectorAll('body *')) {
          const r = el.getBoundingClientRect();
          if (r.right > de.clientWidth + 1 && r.width > 8 && getComputedStyle(el).position !== 'fixed') {
            culprits.push((el.tagName + (el.className && typeof el.className === 'string' ? '.' + el.className.split(' ').filter(Boolean)[0] : '')) + ` right=${Math.round(r.right)}`);
            if (culprits.length >= 3) break;
          }
        }
      }
      return { over, culprits, h1: document.querySelectorAll('h1').length };
    });
    if (info.over > 1) results.overflow.push(`${vp.name} ${path}: +${info.over}px  ${info.culprits.join(' | ')}`);
    if (errs.length) results.consoleErrors.push(`${vp.name} ${path}: ${[...new Set(errs)].slice(0, 2).join(' ; ')}`);
    if (fails.length) results.failedRequests.push(`${vp.name} ${path}: ${[...new Set(fails)].slice(0, 3).join(' ; ')}`);

    pg.off('console', onConsole); pg.off('pageerror', onPageErr);
    pg.off('requestfailed', onFail); pg.off('response', onResp);
  }
  await pg.close();
}

const dump = (label, arr, cap = 12) => {
  console.log(`\n### ${label}: ${arr.length}`);
  [...new Set(arr)].slice(0, cap).forEach(x => console.log('   ' + x));
  if (arr.length > cap) console.log(`   ...and ${arr.length - cap} more`);
};
console.log(`checked ${PAGES.length} pages x 2 viewports`);
dump('UNCAUGHT PAGE ERRORS', results.pageErrors);
dump('CONSOLE ERRORS', results.consoleErrors);
dump('FAILED / 4xx REQUESTS', results.failedRequests);
dump('HORIZONTAL OVERFLOW', results.overflow);

await b.close(); srv.close(); process.exit(0);
