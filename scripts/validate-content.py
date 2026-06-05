#!/usr/bin/env python3
"""Algeria Compass — advanced content validator (Phase 3.5).
Validates cluster, intent, entity, citation, FAQ, AI-blocks, links, schema, accessibility,
image, knowledge-graph and authority signals. Severity: CRITICAL / FAILURE / WARNING.
Emits five scores per page + portfolio. Exit 1 on any CRITICAL/FAILURE.
Usage: python3 scripts/validate-content.py [file.md]"""
import os, re, glob, json, sys
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CDIR=os.path.join(ROOT,'src','content')

def read(p): return open(p,encoding='utf-8').read()
# live registries (stay in sync with the TS source of truth)
CLUSTERS=set(re.findall(r"id:\s*'(algeria-[a-z-]+)'", read(os.path.join(ROOT,'src','data','clusters.ts'))))
INTENTS=set(re.findall(r"id:\s*'([a-z]+)'", read(os.path.join(ROOT,'src','data','intents.ts'))))
CONTENT={'province','destination','experience','article','question'}

RULES={
 'province':    dict(min_words=1200,min_sources=1,min_faqs=6,keyfacts=True,ans='quickAnswer',needs_cluster=True),
 'destination': dict(min_words=400, min_sources=1,min_faqs=3,keyfacts=True,ans='quickAnswer',needs_cluster=True),
 'experience':  dict(min_words=300, min_sources=1,min_faqs=3,keyfacts=True,ans='quickAnswer',needs_cluster=True),
 'article':     dict(min_words=1000,min_sources=1,min_faqs=3,keyfacts=False,ans='quickAnswer',needs_cluster=True),
 'question':    dict(min_words=350, min_sources=1,min_faqs=0,keyfacts=False,ans='shortAnswer',needs_cluster=True),
 'editorial':   dict(min_words=300, min_sources=0,min_faqs=0,keyfacts=False,ans=None,needs_cluster=False),
 'team':        dict(min_words=120, min_sources=0,min_faqs=0,keyfacts=False,ans=None,needs_cluster=False),
 'reviewer':    dict(min_words=120, min_sources=0,min_faqs=0,keyfacts=False,ans=None,needs_cluster=False),
}

def parse(path):
    raw=read(path); m=re.match(r'^---\n(.*?)\n---\n?(.*)$',raw,re.S)
    fm,body=(m.group(1),m.group(2)) if m else ('',raw)
    counts,cur={},None
    for line in fm.split('\n'):
        if re.match(r'^[A-Za-z_]',line): cur=line.split(':')[0].strip(); counts.setdefault(cur,0)
        elif re.match(r'^\s*-\s',line) and cur: counts[cur]+=1
    has=lambda k: bool(re.search(rf'^{k}:\s*\S',fm,re.M))
    val=lambda k:(re.search(rf'^{k}:\s*"?([^"\n\[]+)"?',fm,re.M) or [None,''])[1].strip()
    return fm,body,counts,has,val,len(re.findall(r'\b\w+\b',body)),len(re.findall(r'\]\(/',body))

def validate(path):
    coll=os.path.basename(os.path.dirname(path)); r=RULES.get(coll)
    if not r: return None
    fm,body,counts,has,val,words,inline=parse(path)
    issues=[]  # (severity, dimension, message)
    def add(sev,dim,ok,msg):
        if not ok: issues.append((sev,dim,msg))
    # --- cluster ---
    if r['needs_cluster']:
        pc=val('primaryCluster') or val('cluster')
        add('FAILURE','cluster',bool(pc),"no primaryCluster assigned")
        if pc: add('CRITICAL','cluster',pc in CLUSTERS,f"unknown/invalid cluster '{pc}'")
        for sc in re.findall(r'"(algeria-[a-z-]+)"', (re.search(r'secondaryClusters:\s*\[([^\]]*)\]',fm) or ['',''])[1] if re.search(r'secondaryClusters:',fm) else ''):
            add('CRITICAL','cluster',sc in CLUSTERS,f"unknown secondary cluster '{sc}'")
    # --- intent ---
    it=val('intent')
    add('WARNING','intent',bool(it),"no intent assigned")
    if it: add('FAILURE','intent',it in INTENTS,f"unknown intent '{it}'")
    # --- citations ---
    add('FAILURE','citation',counts.get('sources',0)>=r['min_sources'],f"sources {counts.get('sources',0)}<{r['min_sources']}")
    # --- FAQ ---
    if r['min_faqs']>0: add('FAILURE','faq',counts.get('faqs',0)>=r['min_faqs'],f"FAQs {counts.get('faqs',0)}<{r['min_faqs']}")
    # --- AI / AEO triad ---
    if r['ans']: add('FAILURE','ai',has(r['ans']),f"missing {r['ans']} (AEO)")
    if r['keyfacts']: add('FAILURE','ai',counts.get('keyFacts',0)>0,"missing KeyFacts (AEO)")
    # --- schema completeness ---
    add('FAILURE','schema',has('updated'),"missing updated date")
    add('FAILURE','schema',has('seo') or coll in ('team','reviewer','editorial'),"missing seo block")
    add('WARNING','schema',has('lastReviewed') or coll in ('team','reviewer'),"no lastReviewed")
    # --- accessibility / image ---
    if has('image'): add('FAILURE','accessibility',val('imageAlt')!='',"imageAlt empty (a11y)")
    add('WARNING','image',has('image') or coll in ('question','editorial','team','reviewer'),"no image")
    # --- internal links / KG ---
    add('WARNING','linking',inline>=3 or coll in ('team','reviewer'),f"inline links {inline}<3")
    # --- authority ---
    add('WARNING','authority',has('author'),"no explicit author (org default)")
    add('WARNING','authority',has('reviewedBy'),"no explicit reviewedBy (org default)")
    # --- depth ---
    add('WARNING','depth',words>=r['min_words'],f"thin {words}w<{r['min_words']}w")
    # ---- scores (0-100) ----
    crit=sum(1 for s,_,_ in issues if s=='CRITICAL'); fail=sum(1 for s,_,_ in issues if s=='FAILURE'); warn=sum(1 for s,_,_ in issues if s=='WARNING')
    def dim_ok(dim): return not any(d==dim for _,d,_ in issues)
    scores=dict(
      publishing=max(0,100-40*crit-15*fail-4*warn),
      authority=100-(0 if has('author') else 20)-(0 if has('reviewedBy') else 20)-(0 if has('lastReviewed') else 15)-(0 if counts.get('sources',0)>=r['min_sources'] else 30),
      ai=100-(0 if (not r['ans'] or has(r['ans'])) else 35)-(0 if (not r['keyfacts'] or counts.get('keyFacts',0)>0) else 25)-(0 if counts.get('faqs',0)>=max(1,r['min_faqs']) else 20)-(0 if it in INTENTS else 10),
      cluster=100 if not r['needs_cluster'] else (100 if (val('primaryCluster') or val('cluster')) in CLUSTERS else 0),
      entity=100-(0 if dim_ok('linking') else 30),
    )
    scores={k:max(0,min(100,v)) for k,v in scores.items()}
    return dict(coll=coll,file=os.path.basename(path),words=words,issues=issues,scores=scores,
                blocking=crit+fail, crit=crit, fail=fail, warn=warn)

def run(paths):
    res=[validate(p) for p in paths]; res=[x for x in res if x]
    print(f"ADVANCED VALIDATION — {len(res)} content files\n")
    order={'CRITICAL':0,'FAILURE':1,'WARNING':2}
    for x in res:
        st='CRITICAL' if x['crit'] else ('FAIL' if x['fail'] else ('WARN' if x['warn'] else 'PASS'))
        if st=='PASS': 
            print(f"[PASS] {x['coll']}/{x['file']}"); continue
        sc=x['scores']
        print(f"[{st}] {x['coll']}/{x['file']}  pub={sc['publishing']} auth={sc['authority']} ai={sc['ai']} cluster={sc['cluster']} entity={sc['entity']}")
        for sev,dim,msg in sorted(x['issues'],key=lambda i:order[i[0]]):
            mark={'CRITICAL':'✗✗','FAILURE':'✗ ','WARNING':'· '}[sev]
            print(f"    {mark}[{dim}] {msg}")
    n=len(res)
    avg=lambda k: round(sum(x['scores'][k] for x in res)/n,1)
    blk=sum(1 for x in res if x['blocking'])
    print("\n── PORTFOLIO SCORES (avg /100) ──")
    print(f"   Publishing Readiness : {avg('publishing')}")
    print(f"   Authority            : {avg('authority')}")
    print(f"   AI Readiness         : {avg('ai')}")
    print(f"   Cluster Coverage     : {avg('cluster')}")
    print(f"   Entity Coverage      : {avg('entity')}")
    print(f"\nSUMMARY  publishable {n-blk}/{n}  ·  blocked {blk}  ·  CRITICAL {sum(x['crit'] for x in res)} FAIL {sum(x['fail'] for x in res)} WARN {sum(x['warn'] for x in res)}")
    json.dump({'files':[{**{k:x[k] for k in('coll','file','words','scores','crit','fail','warn')}} for x in res],
               'portfolio':{k:avg(k) for k in('publishing','authority','ai','cluster','entity')}},
              open(os.path.join(ROOT,'docs','content-os','validation-report.json'),'w'),indent=1)
    return 1 if blk else 0

if __name__=='__main__':
    paths=[sys.argv[1]] if len(sys.argv)>1 else sorted(glob.glob(os.path.join(CDIR,'*','*.md')))
    sys.exit(run(paths))
