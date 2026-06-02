// Surface Studio — 6 visuels Instagram
// Tokens stricts : ocre = filets uniquement, pas d'effets, pas de bitmap.

const T = {
  encre:    '#1C1C1A',
  chaux:    '#F4F0E8',
  chauxP:   '#EBE5D8',
  sable:    '#DCD2BD',
  ocre:     '#C9A96E',
  pierre:   '#A39E92',
};

const MONO = '"JetBrains Mono", monospace';
const SERIF = '"Fraunces", serif';

// ========== Logo symbole canonique (4 losanges imbriqués) ==========
const Symbol = ({ size = 120, color = T.encre, strokeWidth = 2, opacity = 1 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" style={{ display: 'block', opacity }}>
    <g stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinejoin="miter">
      <g transform="translate(100 100) rotate(45)">
        <rect x="-44" y="-44" width="44" height="44"/>
        <rect x="0"   y="-44" width="44" height="44"/>
        <rect x="-44" y="0"   width="44" height="44"/>
        <rect x="0"   y="0"   width="44" height="44"/>
      </g>
    </g>
  </svg>
);

// ========== Logo lockup vertical (symbole + wordmark) ==========
const Lockup = ({ size = 120, color = T.encre, strokeWidth = 2 }) => (
  <div style={{
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28,
  }}>
    <Symbol size={size} color={color} strokeWidth={strokeWidth} />
    <div style={{ textAlign: 'center', color }}>
      <div style={{
        fontFamily: SERIF, fontWeight: 300,
        fontSize: size * 0.34, letterSpacing: '-0.01em',
        lineHeight: 1,
      }}>Surface</div>
      <div style={{
        fontFamily: MONO, fontWeight: 400,
        fontSize: size * 0.11, letterSpacing: '0.32em',
        textTransform: 'uppercase', marginTop: size * 0.13,
      }}>Studio · Marrakech</div>
    </div>
  </div>
);

// Mono caption
const Caption = ({ children, color = T.encre, size = 12, style = {} }) => (
  <div style={{
    fontFamily: MONO, fontSize: size,
    letterSpacing: '0.18em', textTransform: 'uppercase',
    fontWeight: 400, color, ...style,
  }}>{children}</div>
);

// Filet ocre
const Rule = ({ width = 80, vertical = false, opacity = 1 }) => (
  <div style={{
    background: T.ocre,
    width: vertical ? 1 : width,
    height: vertical ? width : 1,
    opacity,
  }} />
);

// ============================================================
// POST 1 — Manifeste (1080×1350)
// ============================================================
const Post1 = () => (
  <div style={{
    width: 1080, height: 1350, background: T.chaux,
    position: 'relative', fontFamily: SERIF, color: T.encre,
    padding: '90px 96px', boxSizing: 'border-box',
    display: 'flex', flexDirection: 'column',
  }}>
    {/* Header caption */}
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Caption>Surface Studio</Caption>
      <Caption color={T.pierre}>Est. 2026</Caption>
    </div>

    {/* Logo lockup centred in upper third */}
    <div style={{
      marginTop: 110, display: 'flex', justifyContent: 'center',
    }}>
      <Lockup size={130} />
    </div>

    {/* Title */}
    <div style={{ marginTop: 130, textAlign: 'center', padding: '0 40px' }}>
      <h1 style={{
        fontFamily: SERIF, fontStyle: 'italic', fontWeight: 300,
        fontSize: 72, lineHeight: 1.12, letterSpacing: '-0.02em',
        margin: 0, color: T.encre, textWrap: 'balance',
      }}>
        Le logo n'évoque pas<br/>
        la matière.<br/>
        Il <span style={{ fontWeight: 300 }}>EST</span> la matière.
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 56 }}>
        <Rule width={64} />
      </div>
    </div>

    {/* Footer caption */}
    <div style={{
      marginTop: 'auto',
      display: 'flex', justifyContent: 'space-between',
    }}>
      <Caption>Manifeste · 01</Caption>
      <Caption color={T.pierre}>Sidi Ghanem · Marrakech</Caption>
    </div>
  </div>
);

// ============================================================
// POST 2 — HP Latex 630 W (1080×1350)
// ============================================================
const Post2 = () => {
  const bullets = [
    'Encres aqueuses',
    'Sans COV',
    'Certifié UL ECOLOGO®',
    '1 625 mm de largeur',
  ];
  return (
    <div style={{
      width: 1080, height: 1350, background: T.chauxP,
      position: 'relative', fontFamily: SERIF, color: T.encre,
      padding: '90px 96px', boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Caption>Technologie · 02</Caption>
        <Caption color={T.pierre}>HP Latex 630 W</Caption>
      </div>

      {/* Symbole en haut centré */}
      <div style={{ marginTop: 96, display: 'flex', justifyContent: 'center' }}>
        <Symbol size={128} />
      </div>

      {/* Filet ocre */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 56 }}>
        <Rule width={48} />
      </div>

      {/* Title */}
      <h1 style={{
        marginTop: 56, textAlign: 'center', padding: '0 60px',
        fontFamily: SERIF, fontWeight: 300,
        fontSize: 60, lineHeight: 1.14, letterSpacing: '-0.02em',
        textWrap: 'balance', margin: '56px 0 0 0',
      }}>
        Une technologie.<br/>
        <span style={{ fontStyle: 'italic' }}>Douze surfaces.</span><br/>
        Mille intérieurs.
      </h1>

      {/* Bullets */}
      <div style={{
        marginTop: 110,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22,
      }}>
        {bullets.map((b, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <span style={{ width: 18, height: 1, background: T.ocre }} />
            <span style={{
              fontFamily: MONO, fontSize: 14,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: T.encre,
            }}>{b}</span>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 'auto',
        display: 'flex', justifyContent: 'space-between',
      }}>
        <Caption>Technologie · HP Latex 630 W</Caption>
        <Caption color={T.pierre}>@surface.studio</Caption>
      </div>
    </div>
  );
};

// ============================================================
// POST 3 — Catalogue (1080×1350)
// ============================================================
const Post3 = () => {
  const products = [
    'Papier peint personnalisé', "Trompe-l'œil", 'Stickers muraux',
    'Graphiques vinyle', 'Vitrines', 'Film dépoli',
    'Acrylique', 'Canvas', 'Tissu',
    'Meubles', 'Panneaux décoratifs', 'Foam Board',
  ];
  return (
    <div style={{
      width: 1080, height: 1350, background: T.sable,
      position: 'relative', fontFamily: SERIF, color: T.encre,
      padding: '90px 96px', boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Caption>Catalogue · 03</Caption>
        <Caption color={T.pierre}>12 surfaces</Caption>
      </div>

      {/* Title */}
      <h1 style={{
        marginTop: 96,
        fontFamily: SERIF, fontWeight: 300, fontStyle: 'italic',
        fontSize: 124, lineHeight: 1, letterSpacing: '-0.03em',
        margin: '96px 0 0 0',
      }}>
        Nos surfaces.
      </h1>

      <div style={{ marginTop: 36 }}>
        <Rule width={72} />
      </div>

      {/* Grille 3×4 */}
      <div style={{
        marginTop: 88,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridAutoRows: 'minmax(110px, auto)',
        columnGap: 32, rowGap: 0,
      }}>
        {products.map((p, i) => (
          <div key={i} style={{
            borderTop: `1px solid ${T.encre}1f`,
            padding: '22px 0',
            display: 'flex', flexDirection: 'column', gap: 10,
          }}>
            <span style={{
              fontFamily: MONO, fontSize: 11,
              letterSpacing: '0.22em', color: T.ocre,
            }}>{String(i + 1).padStart(2, '0')}</span>
            <span style={{
              fontFamily: SERIF, fontWeight: 300,
              fontSize: 22, letterSpacing: '-0.01em',
              lineHeight: 1.15, color: T.encre,
              textWrap: 'balance',
            }}>{p}</span>
          </div>
        ))}
      </div>

      {/* Filet ocre pied */}
      <div style={{ marginTop: 'auto' }}>
        <Rule width={'100%'} />
        <div style={{
          marginTop: 24,
          display: 'flex', justifyContent: 'space-between',
        }}>
          <Caption>Surface Studio</Caption>
          <Caption color={T.pierre}>Sidi Ghanem · Marrakech</Caption>
        </div>
      </div>
    </div>
  );
};

// ============================================================
// STORY 1 — Teaser (1080×1920) — Encre Atlas
// ============================================================
const Story1 = () => (
  <div style={{
    width: 1080, height: 1920, background: T.encre,
    position: 'relative', fontFamily: SERIF, color: T.chaux,
    padding: '120px 96px', boxSizing: 'border-box',
    display: 'flex', flexDirection: 'column',
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Caption color={T.chaux}>Surface Studio</Caption>
      <Caption color={T.pierre}>Story · 01</Caption>
    </div>

    {/* Lockup centred upper third */}
    <div style={{
      marginTop: 240, display: 'flex', justifyContent: 'center',
    }}>
      <Lockup size={150} color={T.chaux} />
    </div>

    {/* Title */}
    <div style={{ marginTop: 280, textAlign: 'center' }}>
      <h1 style={{
        fontFamily: SERIF, fontStyle: 'italic', fontWeight: 300,
        fontSize: 80, lineHeight: 1.08, letterSpacing: '-0.02em',
        margin: 0, color: T.chaux,
      }}>
        Bientôt.<br/>
        Sidi Ghanem.
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 56 }}>
        <Rule width={48} />
      </div>
    </div>

    {/* Footer ocre caption */}
    <div style={{
      marginTop: 'auto',
      display: 'flex', justifyContent: 'center',
    }}>
      <div style={{
        fontFamily: MONO, fontSize: 13,
        letterSpacing: '0.32em', textTransform: 'uppercase',
        color: T.ocre,
      }}>Ouverture · Printemps 2026</div>
    </div>
  </div>
);

// ============================================================
// STORY 2 — Citation filigrane (1080×1920)
// ============================================================
const Story2 = () => (
  <div style={{
    width: 1080, height: 1920, background: T.chaux,
    position: 'relative', fontFamily: SERIF, color: T.encre,
    padding: '120px 96px', boxSizing: 'border-box',
    display: 'flex', flexDirection: 'column',
    overflow: 'hidden',
  }}>
    {/* Symbole filigrane immense */}
    <div style={{
      position: 'absolute',
      left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
    }}>
      <Symbol size={1080 * 0.8} color={T.encre} strokeWidth={1.5} opacity={0.08} />
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
      <Caption>Atelier · Citation</Caption>
      <Caption color={T.pierre}>Story · 02</Caption>
    </div>

    {/* Citation centrée */}
    <div style={{
      flex: 1,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      position: 'relative', textAlign: 'center',
    }}>
      <div style={{ marginBottom: 64 }}>
        <Rule width={48} />
      </div>
      <h1 style={{
        fontFamily: SERIF, fontStyle: 'italic', fontWeight: 300,
        fontSize: 56, lineHeight: 1.25, letterSpacing: '-0.015em',
        margin: 0, padding: '0 40px',
        textWrap: 'balance',
      }}>
        Chaque mur raconte<br/>
        une histoire.<br/>
        <span style={{ fontStyle: 'italic' }}>Nous l'imprimons.</span>
      </h1>
      <div style={{ marginTop: 64 }}>
        <Rule width={48} />
      </div>
    </div>

    <div style={{
      display: 'flex', justifyContent: 'center', position: 'relative',
    }}>
      <Caption>Surface Studio · Manufacture Contemporaine</Caption>
    </div>
  </div>
);

// ============================================================
// STORY 3 — Processus (1080×1920)
// ============================================================
const Story3 = () => {
  const steps = [
    'Consultation', 'Création', 'Impression', 'Installation',
  ];
  return (
    <div style={{
      width: 1080, height: 1920, background: T.chauxP,
      position: 'relative', fontFamily: SERIF, color: T.encre,
      padding: '120px 96px', boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Caption>Processus · 03</Caption>
        <Caption color={T.pierre}>Story · 03</Caption>
      </div>

      {/* Symbole canonique */}
      <div style={{ marginTop: 160, display: 'flex', justifyContent: 'center' }}>
        <Symbol size={140} />
      </div>

      {/* Title */}
      <h1 style={{
        marginTop: 112, textAlign: 'center',
        fontFamily: SERIF, fontWeight: 300,
        fontSize: 72, lineHeight: 1.12, letterSpacing: '-0.02em',
        margin: '112px 0 0 0',
      }}>
        De la conception<br/>
        <span style={{ fontStyle: 'italic' }}>à la pose.</span>
      </h1>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 56 }}>
        <Rule width={48} />
      </div>

      {/* 4 lignes verticales numérotées */}
      <div style={{
        marginTop: 130,
        display: 'flex', flexDirection: 'column',
      }}>
        {steps.map((s, i) => (
          <div key={i} style={{
            borderTop: `1px solid ${T.encre}24`,
            borderBottom: i === steps.length - 1 ? `1px solid ${T.encre}24` : 'none',
            padding: '32px 12px',
            display: 'flex', alignItems: 'baseline', gap: 32,
          }}>
            <span style={{
              fontFamily: MONO, fontSize: 14,
              letterSpacing: '0.22em', color: T.ocre,
              minWidth: 40,
            }}>{String(i + 1).padStart(2, '0')}</span>
            <span style={{
              fontFamily: MONO, fontSize: 12,
              letterSpacing: '0.18em', color: T.pierre,
            }}>—</span>
            <span style={{
              fontFamily: SERIF, fontWeight: 300,
              fontSize: 38, letterSpacing: '-0.01em',
              color: T.encre, flex: 1,
            }}>{s}</span>
          </div>
        ))}
      </div>

      {/* Filet ocre pied */}
      <div style={{
        marginTop: 'auto',
        display: 'flex', flexDirection: 'column', gap: 24,
      }}>
        <Rule width={'100%'} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Caption>Surface Studio</Caption>
          <Caption color={T.pierre}>HP Latex 630 W</Caption>
        </div>
      </div>
    </div>
  );
};

// ============================================================
// App — sélecteur + export PNG
// ============================================================
const VISUALS = [
  { id: 'post-1',  label: 'Post 01 · Manifeste',     w: 1080, h: 1350, Comp: Post1 },
  { id: 'post-2',  label: 'Post 02 · HP Latex 630 W', w: 1080, h: 1350, Comp: Post2 },
  { id: 'post-3',  label: 'Post 03 · Catalogue',     w: 1080, h: 1350, Comp: Post3 },
  { id: 'story-1', label: 'Story 01 · Teaser',       w: 1080, h: 1920, Comp: Story1 },
  { id: 'story-2', label: 'Story 02 · Citation',     w: 1080, h: 1920, Comp: Story2 },
  { id: 'story-3', label: 'Story 03 · Processus',    w: 1080, h: 1920, Comp: Story3 },
];

const App = () => {
  const [active, setActive] = React.useState(VISUALS[0].id);
  const [exporting, setExporting] = React.useState(false);
  const stageRef = React.useRef(null);

  // Single light mode — Chaux Sidi Ghanem
  const UI_BG = T.chaux;        // #F4F0E8
  const UI_HOVER = T.chauxP;    // #EBE5D8

  const current = VISUALS.find(v => v.id === active);

  // Fit-to-viewport scale
  const [scale, setScale] = React.useState(0.5);
  React.useEffect(() => {
    const compute = () => {
      const availW = window.innerWidth - 80;
      const availH = window.innerHeight - 220;
      const s = Math.min(availW / current.w, availH / current.h, 0.85);
      setScale(s);
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, [current.w, current.h]);

  const handleExport = async () => {
    if (exporting) return;
    setExporting(true);
    try {
      const node = stageRef.current?.querySelector('[data-export-target="1"]');
      if (!node) throw new Error('No target');
      const canvas = await window.html2canvas(node, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
        logging: false,
        width: current.w,
        height: current.h,
      });
      const link = document.createElement('a');
      link.download = `surface-studio_${current.id}_${current.w}x${current.h}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (e) {
      console.error('Export failed', e);
      alert('Export PNG : échec — réessayez dans un instant.');
    } finally {
      setExporting(false);
    }
  };

  const Comp = current.Comp;

  return (
    <div style={{
      minHeight: '100vh', background: UI_BG,
      fontFamily: MONO, color: T.encre,
      display: 'flex', flexDirection: 'column',
    }}>
      <style>{`
        .ss-tab { background: transparent; color: ${T.encre}; border: 1px solid ${T.ocre}; transition: all 0.15s; }
        .ss-tab:hover:not(.is-active) { background: ${UI_HOVER}; color: ${T.encre}; }
        .ss-tab.is-active { background: ${T.encre}; color: ${T.chaux}; border-color: ${T.encre}; }
        .ss-export { background: ${T.encre}; color: ${T.chaux}; border: 1px solid ${T.encre}; transition: all 0.18s; }
        .ss-export:hover:not(:disabled) { background: ${T.ocre}; color: ${T.encre}; border-color: ${T.ocre}; }
      `}</style>

      {/* Top toolbar */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 10,
        background: UI_BG,
        borderBottom: `1px solid ${T.encre}1f`,
        padding: '20px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 24, flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <Symbol size={28} color={T.encre} strokeWidth={1.5} />
          <div>
            <div style={{
              fontFamily: SERIF, fontSize: 18, fontWeight: 300,
              color: T.encre, letterSpacing: '-0.01em',
            }}>Surface Studio</div>
            <div style={{
              fontFamily: MONO, fontSize: 10,
              letterSpacing: '0.28em', color: T.pierre,
              textTransform: 'uppercase', marginTop: 2,
            }}>Kit Instagram · 6 visuels</div>
          </div>
        </div>

        {/* Selector */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 6,
        }}>
          {VISUALS.map(v => (
            <button
              key={v.id}
              onClick={() => setActive(v.id)}
              className={`ss-tab${active === v.id ? ' is-active' : ''}`}
              style={{
                padding: '10px 14px',
                fontFamily: MONO, fontSize: 11,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                cursor: 'pointer', transition: 'all 0.15s',
              }}
            >{v.label}</button>
          ))}
        </div>

        <button
          onClick={handleExport}
          disabled={exporting}
          className="ss-export"
          style={{
            padding: '12px 22px',
            fontFamily: MONO, fontSize: 11,
            letterSpacing: '0.22em', textTransform: 'uppercase',
            cursor: exporting ? 'wait' : 'pointer',
            opacity: exporting ? 0.6 : 1,
          }}
        >{exporting ? 'Export…' : 'Télécharger PNG'}</button>
      </div>

      {/* Stage */}
      <div ref={stageRef} style={{
        flex: 1,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 80,
      }}>
        <div style={{
          width: current.w * scale,
          height: current.h * scale,
          position: 'relative',
        }}>
          <div
            data-export-target="1"
            style={{
              width: current.w, height: current.h,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
              position: 'absolute', top: 0, left: 0,
              boxShadow: '0 4px 24px rgba(28,28,26,0.06)',
            }}
          >
            <Comp />
          </div>
        </div>
      </div>

      {/* Footer info */}
      <div style={{
        background: UI_BG,
        borderTop: `1px solid ${T.encre}1f`,
        padding: '14px 32px',
        display: 'flex', justifyContent: 'space-between',
        fontFamily: MONO, fontSize: 10,
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: T.pierre,
      }}>
        <span>{current.w} × {current.h} px · échelle {(scale * 100).toFixed(0)}%</span>
        <span>Le logo EST la matière</span>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
