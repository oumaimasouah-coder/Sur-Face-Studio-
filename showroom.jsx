// Surface Studio — Landing Showroom
// Concept: concept-store haut de gamme, mise en scène théâtrale
// Palette: Chaux #F4F0E8, Encre Atlas #1C1C1A, Ocre Médina #C9A96E
// Type: Fraunces (display) + Inter (sans, captions)

const T = {
  encre:  '#1C1C1A',
  chaux:  '#F4F0E8',
  chauxP: '#EBE5D8',
  sable:  '#DCD2BD',
  ocre:   '#C9A96E',
  pierre: '#A39E92',
};

const SERIF = '"Fraunces", Georgia, serif';
const SANS  = '"Inter", system-ui, -apple-system, sans-serif';

// ============================================================
// Symbol — 4 losanges imbriqués
// ============================================================
const Symbol = ({ size = 80, color = T.encre, sw = 1.5, opacity = 1 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" style={{ display: 'block', opacity }}>
    <g stroke={color} strokeWidth={sw} fill="none" strokeLinejoin="miter">
      <g transform="translate(100 100) rotate(45)">
        <rect x="-44" y="-44" width="44" height="44"/>
        <rect x="0"   y="-44" width="44" height="44"/>
        <rect x="-44" y="0"   width="44" height="44"/>
        <rect x="0"   y="0"   width="44" height="44"/>
      </g>
    </g>
  </svg>
);

const Eyebrow = ({ children, color = T.ocre, size = 11 }) => (
  <span style={{
    fontFamily: SANS, fontWeight: 500, fontSize: size,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    color,
  }}>{children}</span>
);

const Rule = ({ width = 60, color = T.ocre, height = 1, vertical = false }) => (
  <span style={{
    display: 'inline-block',
    width: vertical ? height : width,
    height: vertical ? width : height,
    background: color,
  }}/>
);

// ============================================================
// NAV
// ============================================================
const Nav = () => (
  <nav style={{
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    padding: '24px 64px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    background: 'rgba(244, 240, 232, 0.85)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderBottom: `1px solid ${T.encre}14`,
  }}>
    <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}>
      <Symbol size={28} color={T.encre} sw={1.5}/>
      <span style={{
        fontFamily: SERIF, fontWeight: 300,
        fontSize: 22, letterSpacing: '-0.01em',
        color: T.encre,
      }}>Surface</span>
    </a>
    <div style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
      {['Concept', 'Galerie', 'Matières', 'Visite'].map(label => (
        <a key={label} href={`#${label.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}`}
           style={{
             fontFamily: SANS, fontWeight: 500, fontSize: 12,
             letterSpacing: '0.18em', textTransform: 'uppercase',
             color: T.encre, textDecoration: 'none',
           }}>{label}</a>
      ))}
    </div>
    <a href="#visite" style={{
      fontFamily: SANS, fontWeight: 500, fontSize: 12,
      letterSpacing: '0.18em', textTransform: 'uppercase',
      color: T.chaux, background: T.encre,
      padding: '12px 22px', textDecoration: 'none',
      transition: 'all 0.2s',
    }} onMouseEnter={e => { e.currentTarget.style.background = T.ocre; e.currentTarget.style.color = T.encre; }}
       onMouseLeave={e => { e.currentTarget.style.background = T.encre; e.currentTarget.style.color = T.chaux; }}>
      Prendre rendez-vous
    </a>
  </nav>
);

// ============================================================
// HERO — éditorial, full bleed
// ============================================================
const Hero = () => (
  <section id="top" style={{
    minHeight: '100vh',
    background: T.chaux,
    position: 'relative',
    display: 'flex', flexDirection: 'column',
    justifyContent: 'center',
    padding: '160px 64px 120px',
    overflow: 'hidden',
  }}>
    {/* Filigrane symbole */}
    <div style={{
      position: 'absolute',
      right: -120, top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
    }}>
      <Symbol size={760} color={T.encre} sw={1} opacity={0.05}/>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 80, position: 'relative' }}>
      <Eyebrow>Showroom · Sidi Ghanem</Eyebrow>
      <Eyebrow color={T.pierre}>Marrakech · MA</Eyebrow>
    </div>

    <div style={{ position: 'relative', maxWidth: 1100 }}>
      <h1 style={{
        fontFamily: SERIF, fontWeight: 300,
        fontSize: 'clamp(56px, 7vw, 116px)',
        lineHeight: 0.98, letterSpacing: '-0.035em',
        margin: 0, color: T.encre,
        textWrap: 'balance',
      }}>
        Un espace<br/>
        où la matière<br/>
        <span style={{ fontStyle: 'italic', color: T.ocre, fontWeight: 300 }}>devient récit.</span>
      </h1>

      <div style={{ marginTop: 56, display: 'flex', alignItems: 'center', gap: 32 }}>
        <Rule width={64}/>
        <p style={{
          fontFamily: SERIF, fontStyle: 'italic', fontWeight: 300,
          fontSize: 22, lineHeight: 1.5, letterSpacing: '-0.005em',
          color: T.encre, margin: 0, maxWidth: 540,
        }}>
          Surface est un showroom dédié à la mise en scène<br/>
          des surfaces imprimées : panneaux, textures, applications murales.
        </p>
      </div>
    </div>

    {/* Bottom row */}
    <div style={{
      position: 'absolute', bottom: 64, left: 64, right: 64,
      display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <span style={{
          width: 8, height: 8, background: T.ocre, transform: 'rotate(45deg)',
        }}/>
        <Eyebrow color={T.encre}>Visite sur rendez-vous</Eyebrow>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
        <Eyebrow color={T.pierre} size={10}>Faites défiler</Eyebrow>
        <span style={{ width: 1, height: 40, background: T.encre, opacity: 0.3 }}/>
      </div>
    </div>
  </section>
);

// ============================================================
// CONCEPT — philosophie
// ============================================================
const Concept = () => {
  const principles = [
    { n: '01', t: 'Galerie', d: 'Chaque réalisation est exposée comme une œuvre. Espace, lumière, distance.' },
    { n: '02', t: 'Matière', d: 'Toucher avant de choisir. Une bibliothèque de textures et finitions à manipuler.' },
    { n: '03', t: 'Confiance', d: 'Un dialogue posé, autour d\'une table. Conseil, échantillons, projets sur mesure.' },
  ];
  return (
    <section id="concept" style={{
      background: T.chauxP,
      padding: '160px 64px',
      borderTop: `1px solid ${T.encre}14`,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 64 }}>
        <Eyebrow>Concept · 01</Eyebrow>
        <Rule width={48}/>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'start' }}>
        <h2 style={{
          fontFamily: SERIF, fontWeight: 300,
          fontSize: 'clamp(44px, 4.6vw, 76px)',
          lineHeight: 1.04, letterSpacing: '-0.025em',
          margin: 0, color: T.encre, textWrap: 'balance',
        }}>
          Pas un atelier.<br/>
          <span style={{ fontStyle: 'italic' }}>Une galerie</span> de surfaces.
        </h2>
        <div>
          <p style={{
            fontFamily: SERIF, fontWeight: 300,
            fontSize: 19, lineHeight: 1.7, letterSpacing: '-0.005em',
            color: T.encre, margin: 0, maxWidth: 520,
          }}>
            Le visiteur ne vient pas voir une machine.
            Il vient toucher des matières, voir des panneaux pendre comme
            des tableaux, s'asseoir face à un mur de finitions.
            <br/><br/>
            La technique reste en coulisses. Ce qui compte,
            c'est le résultat — exposé avec le soin d'une exposition.
          </p>
        </div>
      </div>

      <div style={{
        marginTop: 120,
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 0,
        borderTop: `1px solid ${T.ocre}`,
      }}>
        {principles.map((p, i) => (
          <div key={p.n} style={{
            padding: '48px 40px 48px 0',
            borderRight: i < 2 ? `1px solid ${T.encre}1f` : 'none',
            paddingLeft: i === 0 ? 0 : 40,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
              <span style={{
                fontFamily: SANS, fontWeight: 500, fontSize: 11,
                letterSpacing: '0.22em', color: T.ocre,
              }}>— {p.n}</span>
            </div>
            <h3 style={{
              fontFamily: SERIF, fontWeight: 300, fontStyle: 'italic',
              fontSize: 38, letterSpacing: '-0.02em',
              margin: '0 0 24px 0', color: T.encre,
            }}>{p.t}</h3>
            <p style={{
              fontFamily: SERIF, fontWeight: 300,
              fontSize: 16, lineHeight: 1.65, letterSpacing: '-0.005em',
              color: T.encre, margin: 0,
            }}>{p.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ============================================================
// GALERIE — mise en scène théâtrale
// ============================================================
const Galerie = () => {
  // Faux panneaux : compositions abstraites de blocs colorés
  const panels = [
    { id: 1, w: 280, h: 380, bg: T.encre, label: 'Encre · Panneau acrylique', motif: 'mono' },
    { id: 2, w: 240, h: 320, bg: T.ocre,  label: 'Ocre · Tissu tendu', motif: 'lines' },
    { id: 3, w: 320, h: 440, bg: T.chauxP, label: 'Chaux · Papier peint', motif: 'diamond' },
    { id: 4, w: 200, h: 280, bg: T.sable, label: 'Sable · Vinyle mat', motif: 'circles' },
    { id: 5, w: 260, h: 360, bg: T.encre, label: 'Encre · Foam board', motif: 'grid' },
  ];

  const renderMotif = (motif, color) => {
    const c = color === T.encre ? T.chaux : T.encre;
    if (motif === 'mono') return null;
    if (motif === 'lines') return (
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} preserveAspectRatio="none">
        {[0.2, 0.4, 0.6, 0.8].map(y => (
          <line key={y} x1="0" x2="100%" y1={`${y * 100}%`} y2={`${y * 100}%`}
                stroke={c} strokeWidth="1" strokeOpacity="0.4"/>
        ))}
      </svg>
    );
    if (motif === 'diamond') return (
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} viewBox="0 0 100 100" preserveAspectRatio="none">
        {[0,1,2,3].map(r => [0,1,2].map(col => (
          <rect key={`${r}-${col}`} x={col*32+4} y={r*24+4} width="20" height="20"
                transform={`rotate(45 ${col*32+14} ${r*24+14})`}
                stroke={c} strokeOpacity="0.25" fill="none" strokeWidth="0.5"/>
        )))}
      </svg>
    );
    if (motif === 'circles') return (
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} preserveAspectRatio="none">
        <circle cx="50%" cy="50%" r="30%" stroke={c} strokeWidth="1" fill="none" opacity="0.4"/>
        <circle cx="50%" cy="50%" r="20%" stroke={c} strokeWidth="1" fill="none" opacity="0.4"/>
      </svg>
    );
    if (motif === 'grid') return (
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} viewBox="0 0 60 80" preserveAspectRatio="none">
        {[0,1,2,3,4].map(r => [0,1,2].map(col => (
          <rect key={`${r}-${col}`} x={col*20} y={r*16} width="20" height="16"
                stroke={c} strokeOpacity="0.2" fill="none" strokeWidth="0.3"/>
        )))}
      </svg>
    );
    return null;
  };

  return (
    <section id="galerie" style={{
      background: T.chaux,
      padding: '160px 64px',
      borderTop: `1px solid ${T.encre}14`,
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 80 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <Eyebrow>Galerie · 02</Eyebrow>
          <Rule width={48}/>
        </div>
        <Eyebrow color={T.pierre}>Mise en scène</Eyebrow>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '5fr 4fr', gap: 80, alignItems: 'end', marginBottom: 100 }}>
        <h2 style={{
          fontFamily: SERIF, fontWeight: 300,
          fontSize: 'clamp(44px, 4.6vw, 76px)',
          lineHeight: 1.02, letterSpacing: '-0.03em',
          margin: 0, color: T.encre, textWrap: 'balance',
        }}>
          Les œuvres pendent.<br/>
          <span style={{ fontStyle: 'italic' }}>La lumière fait le reste.</span>
        </h2>
        <p style={{
          fontFamily: SERIF, fontWeight: 300,
          fontSize: 17, lineHeight: 1.6, color: T.pierre,
          margin: 0,
        }}>
          Cinq murs, cinq atmosphères. Chaque panneau est éclairé
          individuellement, suspendu à distance, encadré de vide.
        </p>
      </div>

      {/* Panneaux mis en scène — pendus à hauteurs variables */}
      <div style={{
        position: 'relative',
        background: T.chauxP,
        padding: '80px 60px 120px',
        height: 620,
        overflow: 'hidden',
      }}>
        {/* Sol / ombre */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: 80,
          background: `linear-gradient(to top, ${T.encre}14, transparent)`,
        }}/>

        <div style={{
          display: 'flex', alignItems: 'flex-start',
          justifyContent: 'space-between', gap: 40,
          height: '100%', position: 'relative',
        }}>
          {panels.map((p, i) => (
            <div key={p.id} style={{
              flex: '0 0 auto',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              transform: `translateY(${[0, 40, 10, 60, 20][i]}px)`,
              gap: 20,
            }}>
              {/* Suspension */}
              <span style={{ width: 1, height: 32, background: T.encre, opacity: 0.4 }}/>
              {/* Panneau */}
              <div style={{
                width: p.w * 0.7, height: p.h * 0.7,
                background: p.bg,
                position: 'relative',
                boxShadow: '0 24px 48px rgba(28,28,26,0.18)',
              }}>
                {renderMotif(p.motif, p.bg)}
              </div>
              {/* Label */}
              <div style={{ marginTop: 12, textAlign: 'center' }}>
                <div style={{
                  fontFamily: SANS, fontWeight: 500, fontSize: 9,
                  letterSpacing: '0.2em', color: T.ocre, textTransform: 'uppercase',
                  marginBottom: 4,
                }}>{String(i + 1).padStart(2, '0')}</div>
                <div style={{
                  fontFamily: SERIF, fontStyle: 'italic', fontWeight: 300,
                  fontSize: 13, color: T.encre, letterSpacing: '-0.005em',
                }}>{p.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        marginTop: 64,
        display: 'flex', justifyContent: 'space-between',
        paddingTop: 32,
        borderTop: `1px solid ${T.encre}1f`,
      }}>
        <Eyebrow color={T.pierre}>Cinq panneaux · Rotation mensuelle</Eyebrow>
        <a href="#visite" style={{
          fontFamily: SANS, fontWeight: 500, fontSize: 11,
          letterSpacing: '0.22em', color: T.encre,
          textTransform: 'uppercase', textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          Voir en personne
          <span style={{ width: 24, height: 1, background: T.ocre, display: 'inline-block' }}/>
        </a>
      </div>
    </section>
  );
};

// ============================================================
// MATIÈRES — bibliothèque tactile
// ============================================================
const Matieres = () => {
  const swatches = [
    { name: 'Papier coton', code: 'P · 01', tone: '#ECE6D8', tx: 'paper' },
    { name: 'Toile lin',     code: 'T · 02', tone: '#D8CDB4', tx: 'weave' },
    { name: 'Vinyle mat',    code: 'V · 03', tone: '#1C1C1A', tx: 'flat' },
    { name: 'Acrylique',     code: 'A · 04', tone: '#F4F0E8', tx: 'gloss' },
    { name: 'Foam board',    code: 'F · 05', tone: '#E5DFCD', tx: 'flat' },
    { name: 'Bois plaqué',   code: 'B · 06', tone: '#C9A97E', tx: 'wood' },
    { name: 'Tissu tendu',   code: 'TX · 07',tone: '#A39E92', tx: 'weave' },
    { name: 'Verre dépoli',  code: 'G · 08', tone: '#EBE5D8', tx: 'frost' },
  ];

  const swatchTexture = (tx, base) => {
    const ink = base === T.encre ? T.chaux : T.encre;
    if (tx === 'paper') return (
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.18 }}>
        {Array.from({length: 80}).map((_, i) => (
          <circle key={i} cx={`${(i*17)%100}%`} cy={`${(i*23)%100}%`} r="0.5" fill={ink}/>
        ))}
      </svg>
    );
    if (tx === 'weave') return (
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.25 }} viewBox="0 0 40 40">
        {Array.from({length: 8}).map((_, i) => (
          <line key={`h${i}`} x1="0" x2="40" y1={i*5+2.5} y2={i*5+2.5} stroke={ink} strokeWidth="0.3"/>
        ))}
        {Array.from({length: 8}).map((_, i) => (
          <line key={`v${i}`} y1="0" y2="40" x1={i*5+2.5} x2={i*5+2.5} stroke={ink} strokeWidth="0.3"/>
        ))}
      </svg>
    );
    if (tx === 'wood') return (
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} preserveAspectRatio="none" viewBox="0 0 40 80">
        {[8, 22, 36].map(x => (
          <path key={x} d={`M${x} 0 Q ${x+1} 20 ${x} 40 Q ${x-1} 60 ${x} 80`}
                stroke={ink} strokeWidth="0.4" fill="none"/>
        ))}
      </svg>
    );
    if (tx === 'gloss') return (
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(135deg, ${ink}05 0%, ${ink}00 30%, ${ink}10 70%, ${ink}00 100%)`,
      }}/>
    );
    if (tx === 'frost') return (
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(circle at 30% 30%, ${ink}10, transparent 60%)`,
      }}/>
    );
    return null;
  };

  return (
    <section id="matieres" style={{
      background: T.chaux,
      padding: '160px 64px',
      borderTop: `1px solid ${T.encre}14`,
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 80 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <Eyebrow>Matières · 03</Eyebrow>
          <Rule width={48}/>
        </div>
        <Eyebrow color={T.pierre}>Bibliothèque tactile</Eyebrow>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '5fr 4fr', gap: 80, alignItems: 'end', marginBottom: 100 }}>
        <h2 style={{
          fontFamily: SERIF, fontWeight: 300,
          fontSize: 'clamp(44px, 4.6vw, 76px)',
          lineHeight: 1.02, letterSpacing: '-0.03em',
          margin: 0, color: T.encre, textWrap: 'balance',
        }}>
          Toucher,<br/>
          <span style={{ fontStyle: 'italic' }}>avant de choisir.</span>
        </h2>
        <p style={{
          fontFamily: SERIF, fontWeight: 300,
          fontSize: 17, lineHeight: 1.6, color: T.pierre,
          margin: 0,
        }}>
          Une console de chêne brossé présente nos huit familles
          de supports. Échantillons libres, chacun étiqueté à la main.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 32,
      }}>
        {swatches.map((s, i) => (
          <div key={s.code}>
            <div style={{
              aspectRatio: '4/5',
              background: s.tone,
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(28,28,26,0.08)',
              marginBottom: 18,
            }}>
              {swatchTexture(s.tx, s.tone)}
              <span style={{
                position: 'absolute', top: 14, left: 14,
                fontFamily: SANS, fontWeight: 500, fontSize: 9,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: s.tone === T.encre ? T.ocre : T.ocre,
              }}>{s.code}</span>
            </div>
            <div style={{
              fontFamily: SERIF, fontStyle: 'italic', fontWeight: 300,
              fontSize: 18, color: T.encre, letterSpacing: '-0.01em',
              marginBottom: 4,
            }}>{s.name}</div>
            <div style={{
              fontFamily: SANS, fontWeight: 500, fontSize: 10,
              letterSpacing: '0.18em', color: T.pierre,
              textTransform: 'uppercase',
            }}>Échantillon disponible</div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ============================================================
// IMMERSION — citation + filigrane
// ============================================================
const Immersion = () => (
  <section style={{
    background: T.encre,
    padding: '180px 64px',
    position: 'relative',
    overflow: 'hidden',
  }}>
    <div style={{
      position: 'absolute',
      left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
    }}>
      <Symbol size={900} color={T.chaux} sw={1} opacity={0.05}/>
    </div>

    <div style={{ position: 'relative', maxWidth: 980, margin: '0 auto', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 56 }}>
        <Rule width={48}/>
      </div>
      <p style={{
        fontFamily: SERIF, fontStyle: 'italic', fontWeight: 300,
        fontSize: 'clamp(36px, 3.8vw, 60px)',
        lineHeight: 1.25, letterSpacing: '-0.02em',
        color: T.chaux, margin: 0, textWrap: 'balance',
      }}>
        Le client n'achète pas une impression.<br/>
        Il choisit l'atmosphère qu'il veut habiter.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 56 }}>
        <Rule width={48}/>
      </div>
      <div style={{ marginTop: 48 }}>
        <Eyebrow color={T.pierre} size={11}>Note d'intention</Eyebrow>
      </div>
    </div>
  </section>
);

// ============================================================
// VISITE — contact / RDV
// ============================================================
const Visite = () => (
  <section id="visite" style={{
    background: T.chauxP,
    padding: '160px 64px',
    borderTop: `1px solid ${T.encre}14`,
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 80 }}>
      <Eyebrow>Visite · 04</Eyebrow>
      <Rule width={48}/>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '6fr 5fr', gap: 100 }}>
      <div>
        <h2 style={{
          fontFamily: SERIF, fontWeight: 300,
          fontSize: 'clamp(44px, 5vw, 84px)',
          lineHeight: 1, letterSpacing: '-0.03em',
          margin: 0, color: T.encre, textWrap: 'balance',
        }}>
          Sur rendez-vous,<br/>
          <span style={{ fontStyle: 'italic', color: T.ocre }}>uniquement.</span>
        </h2>
        <p style={{
          marginTop: 40,
          fontFamily: SERIF, fontWeight: 300,
          fontSize: 19, lineHeight: 1.65, color: T.encre,
          maxWidth: 480,
        }}>
          Nous accueillons un client à la fois.
          La visite dure environ une heure et inclut
          un café marocain et une revue de votre projet.
        </p>

        <div style={{
          marginTop: 64,
          display: 'flex', flexDirection: 'column', gap: 0,
          maxWidth: 480,
        }}>
          {[
            ['Adresse',  'Sidi Ghanem · Marrakech 40000'],
            ['Horaires', 'Mar–Sam · 10h–18h'],
            ['Téléphone','+212 6 00 00 00 00'],
            ['Email',    'contact@surfacestudio.ma'],
          ].map(([k, v], i) => (
            <div key={k} style={{
              display: 'flex', justifyContent: 'space-between',
              padding: '20px 0',
              borderTop: i === 0 ? `1px solid ${T.ocre}` : 'none',
              borderBottom: `1px solid ${T.encre}1f`,
            }}>
              <span style={{
                fontFamily: SANS, fontWeight: 500, fontSize: 11,
                letterSpacing: '0.22em', color: T.ocre,
                textTransform: 'uppercase',
              }}>{k}</span>
              <span style={{
                fontFamily: SERIF, fontWeight: 300, fontSize: 16,
                color: T.encre, letterSpacing: '-0.005em',
              }}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Form card */}
      <div style={{
        background: T.chaux,
        padding: 56,
        boxShadow: '0 4px 32px rgba(28,28,26,0.06)',
      }}>
        <div style={{ marginBottom: 40 }}>
          <Eyebrow>Demande de visite</Eyebrow>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); alert('Demande enregistrée. Nous revenons vers vous sous 24h.'); }}
              style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {[
            { id: 'nom',   label: 'Nom complet',     type: 'text' },
            { id: 'email', label: 'Email',           type: 'email' },
            { id: 'tel',   label: 'Téléphone',       type: 'tel' },
            { id: 'projet',label: 'Nature du projet',type: 'text' },
          ].map(f => (
            <div key={f.id}>
              <label htmlFor={f.id} style={{
                display: 'block',
                fontFamily: SANS, fontWeight: 500, fontSize: 10,
                letterSpacing: '0.22em', color: T.pierre,
                textTransform: 'uppercase', marginBottom: 10,
              }}>{f.label}</label>
              <input id={f.id} type={f.type}
                     style={{
                       width: '100%', padding: '12px 0',
                       border: 'none',
                       borderBottom: `1px solid ${T.encre}33`,
                       background: 'transparent',
                       fontFamily: SERIF, fontWeight: 300,
                       fontSize: 18, color: T.encre,
                       outline: 'none',
                       transition: 'border-color 0.2s',
                     }}
                     onFocus={e => e.target.style.borderColor = T.ocre}
                     onBlur={e => e.target.style.borderColor = `${T.encre}33`}/>
            </div>
          ))}
          <button type="submit" style={{
            marginTop: 16,
            background: T.encre, color: T.chaux,
            border: `1px solid ${T.encre}`,
            padding: '18px 28px',
            fontFamily: SANS, fontWeight: 500, fontSize: 12,
            letterSpacing: '0.22em', textTransform: 'uppercase',
            cursor: 'pointer', transition: 'all 0.2s',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = T.ocre; e.currentTarget.style.color = T.encre; e.currentTarget.style.borderColor = T.ocre; }}
          onMouseLeave={e => { e.currentTarget.style.background = T.encre; e.currentTarget.style.color = T.chaux; e.currentTarget.style.borderColor = T.encre; }}>
            <span>Envoyer la demande</span>
            <span>→</span>
          </button>
        </form>
      </div>
    </div>
  </section>
);

// ============================================================
// FOOTER
// ============================================================
const Footer = () => (
  <footer style={{
    background: T.chaux,
    padding: '100px 64px 48px',
    borderTop: `1px solid ${T.encre}14`,
  }}>
    <div style={{
      display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 80, marginBottom: 80,
    }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 32 }}>
          <Symbol size={48} color={T.encre}/>
          <div>
            <div style={{
              fontFamily: SERIF, fontWeight: 300,
              fontSize: 28, letterSpacing: '-0.01em', color: T.encre,
            }}>Surface</div>
            <div style={{
              fontFamily: SANS, fontWeight: 500, fontSize: 10,
              letterSpacing: '0.32em', color: T.ocre,
              textTransform: 'uppercase', marginTop: 4,
            }}>Studio · Marrakech</div>
          </div>
        </div>
        <p style={{
          fontFamily: SERIF, fontStyle: 'italic', fontWeight: 300,
          fontSize: 17, lineHeight: 1.5, color: T.pierre,
          margin: 0, maxWidth: 360,
        }}>
          Showroom de surfaces imprimées.<br/>
          Sidi Ghanem, Marrakech.
        </p>
      </div>

      {[
        { t: 'Explorer', l: ['Concept', 'Galerie', 'Matières', 'Visite'] },
        { t: 'Contact',  l: ['+212 6 00 00 00 00', 'contact@surfacestudio.ma', 'Mar–Sam · 10–18h'] },
        { t: 'Suivre',   l: ['Instagram', 'Pinterest', 'LinkedIn'] },
      ].map(col => (
        <div key={col.t}>
          <div style={{
            fontFamily: SANS, fontWeight: 500, fontSize: 11,
            letterSpacing: '0.22em', color: T.ocre,
            textTransform: 'uppercase', marginBottom: 24,
          }}>— {col.t}</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {col.l.map(item => (
              <li key={item} style={{
                fontFamily: SERIF, fontWeight: 300, fontSize: 15,
                color: T.encre, letterSpacing: '-0.005em',
              }}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div style={{
      paddingTop: 32,
      borderTop: `1px solid ${T.encre}1f`,
      display: 'flex', justifyContent: 'space-between',
      fontFamily: SANS, fontWeight: 500, fontSize: 10,
      letterSpacing: '0.22em', color: T.pierre,
      textTransform: 'uppercase',
    }}>
      <span>© 2026 Surface Studio</span>
      <span>Sidi Ghanem · Marrakech · Maroc</span>
      <span>Showroom sur rendez-vous</span>
    </div>
  </footer>
);

// ============================================================
// App
// ============================================================
const App = () => (
  <div style={{ background: T.chaux, minHeight: '100vh' }}>
    <Nav/>
    <Hero/>
    <Concept/>
    <Galerie/>
    <Immersion/>
    <Matieres/>
    <Visite/>
    <Footer/>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
