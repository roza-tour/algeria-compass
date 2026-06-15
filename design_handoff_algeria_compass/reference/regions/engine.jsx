/* Algeria Compass — REGIONS · 3D engine (mouse-tilt + parallax) */

/* Interactive 3D tilt — children with translateZ get parallax depth. */
function Tilt3D({ max = 12, scale = 1.03, className = '', innerClassName = '', style = {}, children, onClick }) {
  const ref = React.useRef(null);
  const inner = React.useRef(null);
  const onMove = (e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    if (inner.current) {
      inner.current.style.transition = 'transform .08s linear';
      inner.current.style.transform = `rotateY(${px * max}deg) rotateX(${-py * max}deg) scale(${scale})`;
    }
  };
  const onLeave = () => {
    if (inner.current) {
      inner.current.style.transition = 'transform .6s cubic-bezier(.2,.7,.2,1)';
      inner.current.style.transform = 'rotateY(0) rotateX(0) scale(1)';
    }
  };
  return (
    <div ref={ref} className={className} style={style} onMouseMove={onMove} onMouseLeave={onLeave} onClick={onClick}>
      <div ref={inner} className={innerClassName} style={{ transformStyle: 'preserve-3d' }}>{children}</div>
    </div>
  );
}

/* Monument card — 3D tilt + cursor shine, raised info plate. */
function MonumentCard({ img, n, title, text }) {
  const ref = React.useRef(null);
  const inner = React.useRef(null);
  const onMove = (e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    if (inner.current) {
      inner.current.style.transition = 'transform .1s linear';
      inner.current.style.transform = `perspective(1000px) rotateY(${px * 14}deg) rotateX(${-py * 14}deg)`;
      inner.current.style.setProperty('--gx', `${(px + 0.5) * 100}%`);
      inner.current.style.setProperty('--gy', `${(py + 0.5) * 100}%`);
    }
  };
  const onLeave = () => {
    if (inner.current) {
      inner.current.style.transition = 'transform .6s cubic-bezier(.2,.7,.2,1)';
      inner.current.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
    }
  };
  return (
    <div className="rg-mcard" ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="rg-mcard__in" ref={inner}>
        <img className="rg-mcard__img" src={img} alt={title} />
        <div className="rg-mcard__shine" />
        <div className="rg-mcard__plate">
          <div className="rg-mcard__n">{n}</div>
          <div className="rg-mcard__t">{title}</div>
          <div className="rg-mcard__d">{text}</div>
        </div>
      </div>
    </div>
  );
}

/* Parallax hero — layers drift with the cursor / scroll. */
function ParallaxHero({ region }) {
  const wrap = React.useRef(null);
  const imgR = React.useRef(null);
  const patR = React.useRef(null);
  const inR = React.useRef(null);
  const onMove = (e) => {
    const el = wrap.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    if (imgR.current) imgR.current.style.transform = `translate(${px * -22}px, ${py * -22}px) scale(1.08)`;
    if (patR.current) patR.current.style.transform = `translate(${px * 34}px, ${py * 34}px)`;
    if (inR.current) inR.current.style.transform = `translate(${px * 16}px, ${py * 10}px)`;
  };
  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (imgR.current) imgR.current.style.transform = `translateY(${y * 0.18}px) scale(1.08)`;
      if (inR.current) inR.current.style.transform = `translateY(${y * 0.30}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className="rg-hero" ref={wrap} onMouseMove={onMove}>
      <img className="rg-hero__img" ref={imgR} src={region.hero} alt={region.name} style={{ transform: 'scale(1.08)' }} />
      <div className="rg-hero__pat" ref={patR} />
      <div className="rg-hero__scrim" />
      <div className="rg-hero__in" ref={inR}>
        <img className="rg-hero__em" src={region.emblem} alt="" />
        <span className="rg-hero__kick">{region.kicker}</span>
        <span className="rg-hero__ar">{region.ar}</span>
        <h1 className="rg-hero__title">{region.name}</h1>
        <p className="rg-hero__sub">{region.sub}</p>
      </div>
      <div className="rg-hero__cue">Scroll to explore</div>
    </header>
  );
}

Object.assign(window, { Tilt3D, MonumentCard, ParallaxHero });
