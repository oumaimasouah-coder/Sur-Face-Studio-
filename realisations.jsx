// Surface Studio — Réalisations
const Realisations = ({ onOpenProject }) => {
  const [filter, setFilter] = React.useState('all');
  const [hovered, setHovered] = React.useState(null);

  const filtered = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.cat === filter);

  // Variable heights for editorial gallery feel
  const heights = [520, 420, 600, 460, 520, 580, 440, 540];

  return (
    <section id="realisations" style={{
      background: T.chaux,
      padding: '140px 48px 160px',
    }}>
      <SectionHeader num="01" label="Réalisations" baseline="Une histoire par projet"/>

      <div style={{
        display: 'grid', gridTemplateColumns: '5fr 4fr',
        gap: 80, alignItems: 'end',
        marginBottom: 80,
      }}>
        <h2 style={{
          fontFamily: SERIF, fontWeight: 300,
          fontSize: 'clamp(48px, 5.4vw, 92px)',
          lineHeight: 1, letterSpacing: '-0.035em',
          margin: 0, color: T.encre, textWrap: 'balance',
        }}>
          Chaque mur,<br/>
          <span style={{ fontStyle: 'italic' }}>une transformation.</span>
        </h2>
        <p style={{
          fontFamily: SERIF, fontWeight: 300,
          fontSize: 18, lineHeight: 1.6,
          color: T.pierre, margin: 0, maxWidth: 480,
        }}>
          Nous ne livrons pas des impressions. Nous racontons des espaces.
          Sélection de projets récents — résidentiel, commercial, hôtellerie,
          espaces de marque.
        </p>
      </div>

      {/* Filters */}
      <div className="no-scrollbar" style={{
        display: 'flex', gap: 8, marginBottom: 64,
        overflowX: 'auto', paddingBottom: 4,
      }}>
        {FILTERS.map(f => {
          const active = filter === f.id;
          return (
            <button key={f.id} onClick={() => setFilter(f.id)}
              style={{
                background: active ? T.encre : 'transparent',
                color: active ? T.chaux : T.encre,
                border: `1px solid ${active ? T.encre : T.encre + '33'}`,
                padding: '12px 20px',
                fontFamily: SANS, fontWeight: 500, fontSize: 11,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
              onMouseEnter={e => { if (!active) e.currentTarget.style.borderColor = T.vermillon; }}
              onMouseLeave={e => { if (!active) e.currentTarget.style.borderColor = T.encre + '33'; }}>
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Gallery: masonry-ish 3-col */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24,
      }}>
        {filtered.map((p, i) => {
          const h = heights[i % heights.length];
          const isHover = hovered === p.slug;
          return (
            <div key={p.slug} onClick={() => onOpenProject(p)}
              onMouseEnter={() => setHovered(p.slug)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: 'relative',
                cursor: 'pointer',
                overflow: 'hidden',
                background: T.chauxP,
                gridRow: i % 5 === 2 ? 'span 1' : 'span 1',
              }}>
              <div style={{
                position: 'relative', width: '100%', height: h,
                overflow: 'hidden',
              }}>
                <img src={p.cover} alt={p.title}
                  style={{
                    position: 'absolute', inset: 0, width: '100%', height: '100%',
                    objectFit: 'cover',
                    transform: isHover ? 'scale(1.06)' : 'scale(1)',
                    filter: isHover ? 'brightness(0.6)' : 'brightness(0.92)',
                    transition: 'all 0.7s cubic-bezier(.16,.84,.3,1)',
                  }}/>
                {/* Index badge */}
                <div style={{
                  position: 'absolute', top: 20, left: 20,
                  background: T.chaux, color: T.encre,
                  padding: '6px 10px',
                  fontFamily: MONO, fontSize: 10,
                  letterSpacing: '0.1em',
                }}>
                  N°{String(i + 1).padStart(2, '0')}
                </div>
                {/* Hover content */}
                <div style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: 28,
                  opacity: isHover ? 1 : 0,
                  transition: 'opacity 0.4s',
                }}>
                  <div style={{
                    fontFamily: SANS, fontWeight: 500, fontSize: 10,
                    letterSpacing: '0.22em', color: T.vermillon,
                    textTransform: 'uppercase', marginBottom: 12,
                  }}>{p.catLabel}</div>
                  <div style={{
                    fontFamily: SERIF, fontWeight: 300, fontSize: 32,
                    color: T.chaux, letterSpacing: '-0.02em',
                    lineHeight: 1.05, marginBottom: 12,
                  }}>{p.title}</div>
                  <div style={{
                    fontFamily: SERIF, fontStyle: 'italic', fontWeight: 300,
                    fontSize: 15, color: T.chaux, opacity: 0.85,
                    lineHeight: 1.4, marginBottom: 24,
                  }}>{p.accroche}</div>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    fontFamily: SANS, fontWeight: 500, fontSize: 10,
                    letterSpacing: '0.22em', color: T.chaux,
                    textTransform: 'uppercase',
                    paddingTop: 16, borderTop: `1px solid ${T.chaux}33`,
                  }}>
                    Découvrir le projet
                    <span style={{ width: 24, height: 1, background: T.vermillon }}/>
                  </div>
                </div>
              </div>
              {/* Default caption (non hover) */}
              <div style={{
                padding: '20px 24px',
                background: T.chaux,
                opacity: isHover ? 0 : 1,
                transition: 'opacity 0.3s',
                position: isHover ? 'absolute' : 'relative',
                inset: isHover ? 'auto 0 0 0' : 'auto',
                pointerEvents: 'none',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{
                    fontFamily: SERIF, fontStyle: 'italic', fontWeight: 300,
                    fontSize: 20, color: T.encre, letterSpacing: '-0.01em',
                  }}>{p.title}</span>
                  <span style={{
                    fontFamily: SANS, fontWeight: 500, fontSize: 9,
                    letterSpacing: '0.22em', color: T.pierre,
                    textTransform: 'uppercase',
                  }}>{p.catLabel}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{
        marginTop: 80,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        paddingTop: 40, borderTop: `1px solid ${T.encre}1f`,
      }}>
        <Eyebrow color={T.pierre}>{filtered.length} projets · Sélection 2024–2026</Eyebrow>
        <CTATertiary href="#contact">Démarrer un projet similaire</CTATertiary>
      </div>
    </section>
  );
};

Object.assign(window, { Realisations });
