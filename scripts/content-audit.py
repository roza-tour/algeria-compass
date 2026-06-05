#!/usr/bin/env python3
"""Algeria Compass — content audit. Reusable. Parses src/content frontmatter + body.
Usage: python3 scripts/content-audit.py"""
import os, re, glob, json, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CDIR = os.path.join(ROOT, 'src', 'content')

def parse(path):
    raw = open(path, encoding='utf-8').read()
    m = re.match(r'^---\n(.*?)\n---\n?(.*)$', raw, re.S)
    fm, body = (m.group(1), m.group(2)) if m else ('', raw)
    # block-aware list-item counts per top-level key
    counts, cur = {}, None
    for line in fm.split('\n'):
        if re.match(r'^[A-Za-z_]', line):
            cur = line.split(':')[0].strip()
            counts.setdefault(cur, 0)
        elif re.match(r'^\s*-\s', line) and cur:
            counts[cur] += 1
    has = lambda k: bool(re.search(rf'^{k}:\s*\S', fm, re.M))
    words = len(re.findall(r'\b\w+\b', body))
    internal_links = len(re.findall(r'\]\(/', body)) + len(re.findall(r'href="/', body))
    h2 = len(re.findall(r'^##\s', body, re.M))
    return dict(words=words, faqs=counts.get('faqs',0), sources=counts.get('sources',0),
                keyFacts=counts.get('keyFacts',0), gallery=counts.get('gallery',0),
                sections=counts.get('sections',0), stops=counts.get('stops',0),
                has_author=has('author'), has_reviewedBy=has('reviewedBy'),
                has_lastReviewed=has('lastReviewed'), has_quickAnswer=has('quickAnswer'),
                h2=h2, internal_links=internal_links)

colls = ['province','destination','experience','article','question','editorial','team','reviewer']
report = {}
for c in colls:
    files = sorted(glob.glob(os.path.join(CDIR, c, '*.md')))
    rows = [(os.path.basename(f)[:-3], parse(f)) for f in files]
    report[c] = rows

print("# CONTENT AUDIT — Algeria Compass\n")
agg = {}
for c, rows in report.items():
    if not rows: continue
    n=len(rows)
    aw=sum(r['words'] for _,r in rows)/n
    fa=sum(r['faqs'] for _,r in rows)
    so=sum(r['sources'] for _,r in rows)
    src_pages=sum(1 for _,r in rows if r['sources']>0)
    auth=sum(1 for _,r in rows if r['has_author'])
    rev=sum(1 for _,r in rows if r['has_reviewedBy'])
    qa=sum(1 for _,r in rows if r['has_quickAnswer'])
    il=sum(r['internal_links'] for _,r in rows)/n
    agg[c]=dict(n=n,avg_words=round(aw),faqs=fa,sources=so,src_pages=src_pages,auth=auth,rev=rev,qa=qa,avg_links=round(il,1))
    print(f"## {c}  (n={n})")
    print(f"   avg body words: {round(aw)} | total FAQs: {fa} | sourced pages: {src_pages}/{n} | total citations: {so}")
    print(f"   author: {auth}/{n} | reviewedBy: {rev}/{n} | quickAnswer: {qa}/{n} | avg internal links: {round(il,1)}")
    # flag weak/strong (content collections only)
    if c in ('province','destination','experience','article','question'):
        weak=[s for s,r in rows if r['words']<450]
        strong=[s for s,r in rows if r['words']>=900]
        if weak: print(f"   WEAK (<450 words): {', '.join(weak)}")
        if strong: print(f"   STRONG (>=900 words): {', '.join(strong)}")
    print()

json.dump({'agg':agg,'detail':report}, open(os.path.join(ROOT,'docs','content-os','audit-data.json'),'w'), ensure_ascii=False, indent=1)
print("Saved machine-readable audit -> docs/content-os/audit-data.json")
