// Sur-Face Studio — Instagram kit
// Palette: chaux #F5F0E8, sable/or #C8A97E, noir #0A0A09
// Type: Fraunces (display 200-300), JetBrains Mono (labels)

const COLORS = {
  chaux: '#F5F0E8',
  sable: '#C8A97E',
  noir: '#0A0A09',
};

// Subtle diamond grid pattern as inline SVG data URI
const diamondPattern = (color, opacity) => `url("data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'>
    <g fill='none' stroke='${color}' stroke-width='0.5' opacity='${opacity}'>
      <path d='M24 0 L48 24 L24 48 L0 24 Z'/>
      <path d='M24 16 L32 24 L24 32 L16 24 Z'/>
    </g>
  </svg>`
)}")`;

// ============================================================
// 1. POST FEED 1080x1080 — Introduction
// ============================================================
const PostFeed = () => (
  <div style={{
    width: 1080,
    height: 1080,
    background: COLORS.chaux,
    backgroundImage: diamondPattern(COLORS.sable, 0.18),
    backgroundSize: '64px 64px',
    position: 'relative',
    fontFamily: '"Fraunces", serif',
    color: COLORS.noir,
    overflow: 'hidden',
  }}>
    {/* Top label */}
    <div style={{
      position: 'absolute', top: 56, left: 72,
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase',
      color: COLORS.noir, opacity: 0.7,
      display: 'flex', alignItems: 'center', gap: 14,
    }}>
      <span style={{ width: 8, height: 8, background: COLORS.sable, transform: 'rotate(45deg)', display: 'inline-block' }}></span>
      Atelier d'impression — Est. Marrakech
    </div>

    <div style={{
      position: 'absolute', top: 56, right: 72,
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase',
      color: COLORS.noir, opacity: 0.55,
    }}>
      № 01 / Intro
    </div>

    {/* Headline */}
    <div style={{
      position: 'absolute',
      top: 230, left: 72, right: 72,
    }}>
      <h1 style={{
        fontFamily: '"Fraunces", serif',
        fontWeight: 250,
        fontSize: 92,
        lineHeight: 1.02,
        letterSpacing: '-0.025em',
        margin: 0,
        textWrap: 'pretty',
      }}>
        L'<em style={{ fontWeight: 250, fontStyle: 'italic' }}>impression</em><br/>
        grand format,<br/>
        à la <span style={{ color: COLORS.sable, fontStyle: 'italic' }}>hauteur</span><br/>
        de vos ambitions.
      </h1>
    </div>

    {/* Subtitle in mono */}
    <div style={{
      position: 'absolute',
      bottom: 230, left: 72, right: 72,
    }}>
      <div style={{ height: 1, background: COLORS.sable, marginBottom: 26, width: '100%' }}></div>
      <div style={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 16, letterSpacing: '0.32em',
        textTransform: 'uppercase',
        color: COLORS.noir,
        display: 'flex', justifyContent: 'space-between',
      }}>
        <span>Marrakech — HP Latex 630 W</span>
        <span style={{ opacity: 0.5 }}>2026</span>
      </div>
    </div>

    {/* Logo bottom-left */}
    <div style={{
      position: 'absolute', bottom: 64, left: 72,
      display: 'flex', alignItems: 'baseline', gap: 14,
    }}>
      <span style={{
        fontFamily: '"Fraunces", serif',
        fontWeight: 300,
        fontSize: 38,
        letterSpacing: '-0.02em',
      }}>Sur-Face</span>
      <span style={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 13,
        letterSpacing: '0.32em',
        textTransform: 'uppercase',
        color: COLORS.sable,
      }}>Studio</span>
    </div>

    {/* Handle bottom-right */}
    <div style={{
      position: 'absolute', bottom: 64, right: 72,
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: 11, letterSpacing: '0.2em',
      color: COLORS.noir, opacity: 0.6,
    }}>
      @sur.face.studio
    </div>
  </div>
);

// ============================================================
// 2. STORY 1080x1920 — Services
// ============================================================
const Story = () => {
  const services = [
    { code: '01', label: 'Bâches publicitaires & événementielles' },
    { code: '02', label: 'Signalétique intérieure / extérieure' },
    { code: '03', label: 'Revêtements muraux & vitrines' },
    { code: '04', label: 'Habillage véhicules & flottes' },
    { code: '05', label: 'Stands, salons & PLV grand format' },
  ];

  return (
    <div style={{
      width: 1080,
      height: 1920,
      background: COLORS.noir,
      backgroundImage: diamondPattern(COLORS.sable, 0.5),
      backgroundSize: '72px 72px',
      position: 'relative',
      fontFamily: '"Fraunces", serif',
      color: COLORS.chaux,
      overflow: 'hidden',
    }}>
      {/* Top bar */}
      <div style={{
        position: 'absolute', top: 80, left: 72, right: 72,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 13, letterSpacing: '0.28em', textTransform: 'uppercase',
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ width: 9, height: 9, background: COLORS.sable, transform: 'rotate(45deg)' }}></span>
          Sur-Face Studio
        </span>
        <span style={{ color: COLORS.sable }}>Services</span>
      </div>

      <div style={{ position: 'absolute', top: 130, left: 72, right: 72, height: 1, background: COLORS.sable, opacity: 0.4 }}></div>

      {/* Headline */}
      <div style={{
        position: 'absolute',
        top: 220, left: 72, right: 72,
      }}>
        <div style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 12, letterSpacing: '0.32em',
          color: COLORS.sable, textTransform: 'uppercase',
          marginBottom: 36,
        }}>
          — Ce que nous imprimons
        </div>
        <h1 style={{
          fontFamily: '"Fraunces", serif',
          fontStyle: 'italic',
          fontWeight: 250,
          fontSize: 110,
          lineHeight: 0.98,
          letterSpacing: '-0.03em',
          margin: 0,
          color: COLORS.chaux,
        }}>
          Bâches.<br/>
          Signalétique.<br/>
          <span style={{ color: COLORS.sable }}>Revêtements.</span>
        </h1>
      </div>

      {/* Services list */}
      <div style={{
        position: 'absolute',
        top: 880, left: 72, right: 72,
      }}>
        {services.map((s, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'baseline', gap: 28,
            padding: '22px 0',
            borderTop: i === 0 ? `1px solid rgba(200,169,126,0.3)` : 'none',
            borderBottom: `1px solid rgba(200,169,126,0.3)`,
            fontFamily: '"JetBrains Mono", monospace',
          }}>
            <span style={{
              color: COLORS.sable,
              fontSize: 13,
              letterSpacing: '0.18em',
              minWidth: 32,
            }}>—</span>
            <span style={{
              color: COLORS.sable,
              fontSize: 13,
              letterSpacing: '0.2em',
              minWidth: 38,
            }}>{s.code}</span>
            <span style={{
              fontSize: 18,
              letterSpacing: '0.04em',
              color: COLORS.chaux,
              flex: 1,
            }}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Bottom block */}
      <div style={{
        position: 'absolute',
        bottom: 96, left: 72, right: 72,
      }}>
        <div style={{
          fontFamily: '"Fraunces", serif',
          fontStyle: 'italic',
          fontWeight: 250,
          fontSize: 52,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          color: COLORS.chaux,
          marginBottom: 44,
        }}>
          Livraison directe<br/>
          <span style={{ color: COLORS.sable }}>— sans pose.</span>
        </div>

        <button style={{
          background: COLORS.sable,
          color: COLORS.noir,
          border: 'none',
          padding: '26px 38px',
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 14,
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          width: '100%',
          cursor: 'pointer',
        }}>
          <span>Demander un devis</span>
          <span style={{ fontSize: 18 }}>→</span>
        </button>

        <div style={{
          marginTop: 28,
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 11, letterSpacing: '0.24em',
          color: COLORS.chaux, opacity: 0.5,
          textTransform: 'uppercase',
          display: 'flex', justifyContent: 'space-between',
        }}>
          <span>@sur.face.studio</span>
          <span>Marrakech · MA</span>
        </div>
      </div>
    </div>
  );
};

// ============================================================
// 3. CARROUSEL slide 1 — 1080x1350 portrait
// ============================================================
const Carousel = () => (
  <div style={{
    width: 1080,
    height: 1350,
    background: COLORS.chaux,
    backgroundImage: diamondPattern(COLORS.sable, 0.14),
    backgroundSize: '56px 56px',
    position: 'relative',
    fontFamily: '"Fraunces", serif',
    color: COLORS.noir,
    overflow: 'hidden',
  }}>
    {/* Vertical sable bar left */}
    <div style={{
      position: 'absolute',
      left: 72, top: 72, bottom: 72,
      width: 4,
      background: COLORS.sable,
    }}></div>

    {/* Top row: brand left, slide counter right */}
    <div style={{
      position: 'absolute',
      top: 76, left: 116, right: 72,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <div style={{
        display: 'flex', alignItems: 'baseline', gap: 12,
      }}>
        <span style={{
          fontFamily: '"Fraunces", serif',
          fontWeight: 300, fontSize: 22,
          letterSpacing: '-0.01em',
        }}>Sur-Face</span>
        <span style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 10, letterSpacing: '0.32em',
          textTransform: 'uppercase', color: COLORS.sable,
        }}>Studio</span>
      </div>
      <div style={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 13, letterSpacing: '0.2em',
        color: COLORS.noir,
      }}>
        <span>01</span>
        <span style={{ opacity: 0.4, margin: '0 6px' }}>/</span>
        <span style={{ opacity: 0.4 }}>05</span>
      </div>
    </div>

    {/* Category tag */}
    <div style={{
      position: 'absolute',
      top: 230, left: 116,
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: 11, letterSpacing: '0.32em',
      textTransform: 'uppercase',
      color: COLORS.sable,
      display: 'flex', alignItems: 'center', gap: 12,
    }}>
      <span style={{ width: 7, height: 7, background: COLORS.sable, transform: 'rotate(45deg)' }}></span>
      Technologie · Encres
    </div>

    {/* Title */}
    <div style={{
      position: 'absolute',
      top: 290, left: 116, right: 80,
    }}>
      <h1 style={{
        fontFamily: '"Fraunces", serif',
        fontWeight: 300,
        fontSize: 88,
        lineHeight: 1.0,
        letterSpacing: '-0.03em',
        margin: 0,
        textWrap: 'pretty',
      }}>
        HP Latex<br/>
        <span style={{ color: COLORS.sable, fontStyle: 'italic', fontWeight: 250 }}>630 W.</span>
      </h1>
      <div style={{
        marginTop: 32,
        fontFamily: '"Fraunces", serif',
        fontStyle: 'italic',
        fontWeight: 250,
        fontSize: 42,
        lineHeight: 1.15,
        letterSpacing: '-0.015em',
        color: COLORS.noir,
        opacity: 0.85,
      }}>
        L'encre qui respecte<br/>
        vos espaces.
      </div>
    </div>

    {/* Body copy in mono */}
    <div style={{
      position: 'absolute',
      bottom: 280, left: 116, right: 100,
    }}>
      <div style={{ height: 1, background: COLORS.sable, opacity: 0.5, marginBottom: 32, width: 80 }}></div>
      <p style={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 13,
        lineHeight: 1.85,
        letterSpacing: '0.04em',
        color: COLORS.noir,
        margin: 0,
        maxWidth: 720,
      }}>
        Encres écologiques à base d'eau.<br/>
        Sans solvants. Sans odeur.<br/>
        Résultat pro, intérieur comme extérieur.
      </p>

      {/* Specs row */}
      <div style={{
        marginTop: 40,
        display: 'flex',
        gap: 48,
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 11,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
      }}>
        {[
          { k: 'Base', v: 'Eau' },
          { k: 'COV', v: '0%' },
          { k: 'Séchage', v: 'Instantané' },
          { k: 'Largeur', v: '1.63m' },
        ].map((spec, i) => (
          <div key={i}>
            <div style={{ color: COLORS.sable, fontSize: 10, marginBottom: 8 }}>— {spec.k}</div>
            <div style={{ color: COLORS.noir, fontSize: 14, letterSpacing: '0.12em' }}>{spec.v}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom: swipe indicator */}
    <div style={{
      position: 'absolute',
      bottom: 80, left: 116, right: 80,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: 11, letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color: COLORS.noir,
    }}>
      <span style={{ opacity: 0.55 }}>@sur.face.studio</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 12, color: COLORS.sable }}>
        Glissez
        <span style={{ fontSize: 16 }}>→</span>
      </span>
    </div>
  </div>
);

// ============================================================
// App
// ============================================================
const App = () => (
  <DesignCanvas title="Sur-Face Studio — Instagram kit" defaultZoom={0.42}>
    <DCSection id="feed" title="Post Feed — 1080×1080">
      <DCArtboard id="feed-1" label="Introduction · Fond chaux" width={1080} height={1080}>
        <PostFeed />
      </DCArtboard>
    </DCSection>

    <DCSection id="story" title="Story — 1080×1920">
      <DCArtboard id="story-1" label="Services · Fond noir" width={1080} height={1920}>
        <Story />
      </DCArtboard>
    </DCSection>

    <DCSection id="carrousel" title="Carrousel — 1080×1350">
      <DCArtboard id="carr-1" label="Slide 01 / 05 · HP Latex 630 W" width={1080} height={1350}>
        <Carousel />
      </DCArtboard>
    </DCSection>
  </DesignCanvas>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
