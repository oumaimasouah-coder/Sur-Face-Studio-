// Surface Studio — Hero (real Unsplash imagery, vermillon accent)
const Hero = () => (
  <section id="top" style={{
    minHeight: '100vh',
    background: T.encre,
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* Background image full-bleed */}
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: 'url(https://images.unsplash.com/photo-1615873968403-89e068629265?w=2400&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'brightness(0.55) contrast(1.05)',
    }} className="slow-zoom"/>

    {/* Gradient overlay */}
    <div style={{
      position: 'absolute', inset: 0,
      background: `linear-gradient(180deg, ${T.encre}66 0%, ${T.encre}22 35%, ${T.encre}99 100%)`,
    }}/>

    {/* Top bar */}
    <div style={{
      position: 'absolute', top: 120, left: 48, right: 48,
      display: 'flex', justifyContent: 'space-between',
      zIndex: 2,
    }}>
      <Eyebrow color={T.chaux}>Studio · Sidi Ghanem</Eyebrow>
      <Eyebrow color={T.chaux} size={11}>Marrakech · MA · 2026</Eyebrow>
    </div>

    {/* Content */}
    <div style={{
      position: 'relative', zIndex: 2,
      minHeight: '100vh',
      padding: '180px 48px 100px',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center',
    }}>
      <div className="rise-in" style={{ maxWidth: 1280 }}>
        <h1 style={{
          fontFamily: SERIF, fontWeight: 300,
          fontSize: 'clamp(56px, 8vw, 132px)',
          lineHeight: 0.95, letterSpacing: '-0.04em',
          margin: 0, color: T.chaux,
          textWrap: 'balance',
        }}>
          La surface,<br/>
          comme <span style={{ fontStyle: 'italic', color: T.vermillon }}>récit</span>.<br/>
          Le mur, comme <span style={{ fontStyle: 'italic', color: T.ocre }}>signature</span>.
        </h1>

        <div style={{ marginTop: 48, display: 'flex', alignItems: 'flex-start', gap: 32, maxWidth: 720 }}>
          <Rule width={64} color={T.vermillon}/>
          <p style={{
            fontFamily: SERIF, fontStyle: 'italic', fontWeight: 300,
            fontSize: 22, lineHeight: 1.55,
            color: T.chaux, margin: 0,
          }}>
            Surface Studio conçoit, dessine et installe les surfaces qui transforment vos espaces —
            décoration murale, branding, vitrines et revêtements premium à Marrakech.
          </p>
        </div>

        <div style={{ marginTop: 64, display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <CTAPrimary href="#contact">Démarrer votre projet</CTAPrimary>
          <a href="#realisations" style={{
            display: 'inline-flex', alignItems: 'center', gap: 14,
            color: T.chaux, textDecoration: 'none',
            border: `1px solid ${T.chaux}55`,
            padding: '19px 32px',
            fontFamily: SANS, fontWeight: 500, fontSize: 12,
            letterSpacing: '0.22em', textTransform: 'uppercase',
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = T.chaux; e.currentTarget.style.color = T.encre; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = T.chaux; }}>
            Voir les réalisations
            <span>→</span>
          </a>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div style={{
      position: 'absolute', bottom: 32, left: 48, right: 48,
      display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
      zIndex: 2,
    }}>
      <div style={{ display: 'flex', gap: 48 }}>
        {[
          ['08', 'Années d\'expertise'],
          ['200+', 'Projets livrés'],
          ['Sur RDV', 'Showroom Sidi Ghanem'],
        ].map(([k, v]) => (
          <div key={v} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{
              fontFamily: SERIF, fontWeight: 300, fontSize: 28,
              color: T.chaux, letterSpacing: '-0.02em',
            }}>{k}</span>
            <span style={{
              fontFamily: SANS, fontWeight: 500, fontSize: 9,
              letterSpacing: '0.22em', color: T.pierreL,
              textTransform: 'uppercase',
            }}>{v}</span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
        <Eyebrow color={T.pierreL} size={10}>Faites défiler</Eyebrow>
        <span style={{ width: 1, height: 40, background: T.chaux, opacity: 0.4 }}/>
      </div>
    </div>
  </section>
);

// Marquee — defile entre hero et realisations
const Marquee = () => {
  const items = [
    'Décoration murale',
    'Branding d\'espace',
    'Vitrines premium',
    'Revêtements & textures',
    'Direction artistique',
    'Signalétique design',
    'Habillage de boutiques',
  ];
  const row = (
    <div style={{ display: 'inline-flex', gap: 64, padding: '0 32px' }}>
      {items.map((it, i) => (
        <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 64 }}>
          <span style={{
            fontFamily: SERIF, fontWeight: 300, fontStyle: 'italic',
            fontSize: 64, letterSpacing: '-0.02em',
            color: T.encre,
          }}>{it}</span>
          <span style={{ width: 12, height: 12, background: T.vermillon, transform: 'rotate(45deg)', flexShrink: 0 }}/>
        </span>
      ))}
    </div>
  );
  return (
    <div style={{
      background: T.chaux,
      borderTop: `1px solid ${T.encre}14`,
      borderBottom: `1px solid ${T.encre}14`,
      overflow: 'hidden',
      padding: '40px 0',
    }}>
      <div className="marquee-track">
        {row}{row}
      </div>
    </div>
  );
};

Object.assign(window, { Hero, Marquee });
