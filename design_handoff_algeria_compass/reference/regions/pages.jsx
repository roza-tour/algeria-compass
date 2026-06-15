/* Algeria Compass — REGIONS · Hub + Region page */

function setVars(r) {
  return { '--rc': r.rc, '--rc-d': r.rcD, '--rc-l': r.rcL, '--rc-paper': r.paper, '--pat': r.pat };
}

function RegionNav({ onNav }) {
  return (
    <nav className="rg-nav">
      <div className="rg-nav__b" onClick={() => onNav('hub')}>
        <img src="../../assets/img/logo-emblem-gold.webp" alt="" />
        <span>Algeria <b>Compass</b></span>
      </div>
      <div className="rg-nav__links">
        <a onClick={() => onNav('hub')}>All regions</a>
        <a onClick={() => onNav('algiers')}>Algiers</a>
        <a onClick={() => onNav('sahara')}>The Sahara</a>
        <a onClick={() => onNav('roman')}>Roman Algeria</a>
      </div>
    </nav>
  );
}

/* ---------- HUB ---------- */
function RegionHub({ onNav }) {
  return (
    <div className="rg rg-hub">
      <RegionNav onNav={onNav} />
      <div className="rg-hub__head">
        <div className="rg-hub__kick">Algeria Compass · The Regions</div>
        <h1 className="rg-hub__title">One country,<br />eight worlds</h1>
        <p className="rg-hub__sub">Algeria is the largest country in Africa — and no two corners of it feel alike. Choose a region and step into its colour, its culture and its monuments.</p>
      </div>
      <div className="rg-grid">
        {REGIONS.map(r => (
          <Tilt3D key={r.id} max={14} scale={1.04} className="rg-tilt" innerClassName="rg-tilt__in"
            style={setVars(r)} onClick={() => onNav(r.id)}>
            <div className="rg-card">
              <img className="rg-card__img" src={r.hero} alt={r.name} />
              <div className="rg-card__pat" />
              <div className="rg-card__scrim" />
              <div className="rg-card__em" style={{ position: 'absolute' }}><img src={r.emblem} alt="" /></div>
              <div className="rg-card__body">
                <div className="rg-card__idx">{r.idx} — Region</div>
                <div className="rg-card__ar">{r.ar}</div>
                <div className="rg-card__name">{r.name}</div>
                <div className="rg-card__tag">{r.tag}</div>
                <div className="rg-card__go">Explore <span>→</span></div>
              </div>
            </div>
          </Tilt3D>
        ))}
      </div>
      <footer className="rg-foot">
        <img src="../../assets/img/logo-full.png" alt="Algeria Compass" /><br />
        <span style={{ fontSize: '.8rem' }}>Independent travel-intelligence for Algeria — researched, reviewed and openly sourced.</span>
      </footer>
    </div>
  );
}

/* ---------- REGION PAGE ---------- */
function RegionPage({ region, onNav }) {
  const r = region;
  return (
    <div className="rg rg-page" style={{ ...setVars(r), background: r.paper }}>
      <RegionNav onNav={onNav} />
      <ParallaxHero region={{ ...r, emblem: r.emblem }} />

      {/* Intro */}
      <section className="rg-section rg-wrap">
        <div className="rg-intro">
          <div>
            <span className="rg-eyebrow">The dossier</span>
            <h2 className="rg-h2">{r.name}</h2>
            <p className="rg-lead" style={{ marginTop: '1.2rem' }}>{r.intro[0]}</p>
            <p className="rg-p" style={{ marginTop: '1rem' }}>{r.intro[1]}</p>
          </div>
          <div className="rg-medallion"><img src={r.emblem} alt="" /></div>
        </div>
      </section>

      {/* 3D monuments */}
      <section className="rg-monu rg-section">
        <div className="rg-wrap">
          <div className="rg-monu__head">
            <span className="rg-eyebrow">Archaeological & cultural sites</span>
            <h2 className="rg-h2">What to see</h2>
          </div>
          <div className="rg-monu__grid">
            {r.monuments.map((m, i) => <MonumentCard key={i} {...m} />)}
          </div>
        </div>
      </section>

      {/* Facets */}
      <section className="rg-section rg-wrap">
        <span className="rg-eyebrow">The character of the region</span>
        <h2 className="rg-h2" style={{ marginBottom: '2.2rem' }}>What defines it</h2>
        <div className="rg-facets">
          {r.facets.map((f, i) => (
            <div className="rg-facet" key={i}>
              <div className="rg-facet__n">{f[0]}</div>
              <div><h3>{f[1]}</h3><p>{f[2]}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* Ledger + gallery */}
      <section className="rg-section rg-wrap" style={{ paddingTop: 0 }}>
        <div className="rg-two">
          <div>
            <span className="rg-eyebrow">Travel notes</span>
            <h2 className="rg-h2" style={{ marginBottom: '1rem' }}>At a glance</h2>
            <div className="rg-ledger">
              {r.facts.map((f, i) => (
                <div className="rg-ledger__row" key={i}>
                  <span className="rg-ledger__k">{f[0]}</span>
                  <span className="rg-ledger__dots" />
                  <span className="rg-ledger__v">{f[1]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rg-gal">
            {r.gallery.map((g, i) => (
              <figure key={i}><img src={g} alt="" /></figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rg-section rg-wrap" style={{ paddingTop: 0 }}>
        <div className="rg-cta">
          <div style={{ position: 'relative' }}>
            <img src={r.emblem} alt="" style={{ width: 54, marginBottom: '1rem', filter: 'brightness(0) invert(1)' }} />
            <h2 className="rg-h2" style={{ color: '#fff', maxWidth: 640, margin: '0 auto' }}>Travel {r.name} with us</h2>
            <p style={{ color: 'rgba(255,255,255,.86)', maxWidth: 520, margin: '1rem auto 0', lineHeight: 1.7 }}>
              When you’re ready, we can shape a journey through this region with trusted local guides — offered as a service, never a hard sell.
            </p>
            <div style={{ marginTop: '1.8rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a className="rg-btn">Plan a journey →</a>
              <a className="rg-btn rg-btn--ghost" onClick={() => onNav('hub')}>All regions</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="rg-foot">
        <span className="rg-back" onClick={() => onNav('hub')}>← Back to all regions</span>
        <div style={{ marginTop: '1.4rem' }}>
          <img src="../../assets/img/logo-full.png" alt="Algeria Compass" />
        </div>
      </footer>
    </div>
  );
}

Object.assign(window, { RegionHub, RegionPage });
