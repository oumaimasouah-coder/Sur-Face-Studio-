// Surface Studio — Project modal with avant/après slider
const BeforeAfter = ({ before, after }) => {
  const [pos, setPos] = React.useState(50);
  const ref = React.useRef(null);
  const dragging = React.useRef(false);

  const update = (clientX) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const p = Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100));
    setPos(p);
  };

  const onDown = (e) => {
    dragging.current = true;
    update(e.clientX || (e.touches && e.touches[0].clientX));
  };
  const onMove = (e) => {
    if (!dragging.current) return;
    update(e.clientX || (e.touches && e.touches[0].clientX));
  };
  const onUp = () => { dragging.current = false; };

  React.useEffect(() => {
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
  }, []);

  return (
    <div ref={ref} onMouseDown={onDown} onTouchStart={onDown}
      style={{
        position: 'relative', width: '100%', height: 540,
        overflow: 'hidden', userSelect: 'none', cursor: 'ew-resize',
        background: T.encre,
      }}>
      <img src={after} alt="Après" draggable={false}
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover',
        }}/>
      <div style={{
        position: 'absolute', inset: 0, width: `${pos}%`,
        overflow: 'hidden',
      }}>
        <img src={before} alt="Avant" draggable={false}
          style={{
            position: 'absolute', inset: 0, width: `${10000 / pos}%`, height: '100%',
            objectFit: 'cover', maxWidth: 'none',
          }}/>
      </div>

      {/* Labels */}
      <div style={{
        position: 'absolute', top: 20, left: 20,
        background: T.encre, color: T.chaux,
        padding: '8px 14px',
        fontFamily: SANS, fontWeight: 500, fontSize: 10,
        letterSpacing: '0.22em', textTransform: 'uppercase',
      }}>Avant</div>
      <div style={{
        position: 'absolute', top: 20, right: 20,
        background: T.vermillon, color: T.chaux,
        padding: '8px 14px',
        fontFamily: SANS, fontWeight: 500, fontSize: 10,
        letterSpacing: '0.22em', textTransform: 'uppercase',
      }}>Après · Surface</div>

      {/* Slider line + handle */}
      <div style={{
        position: 'absolute', top: 0, bottom: 0, left: `${pos}%`,
        width: 2, background: T.chaux,
        transform: 'translateX(-50%)',
        boxShadow: '0 0 0 1px rgba(0,0,0,0.1)',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          width: 56, height: 56,
          background: T.chaux,
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
          fontFamily: SANS, fontWeight: 500, fontSize: 18,
          color: T.encre,
        }}>
          ←&nbsp;→
        </div>
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  React.useEffect(() => {
    if (!project) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [project]);

  if (!project) return null;
  const p = project;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 100,
      background: 'rgba(28,28,26,0.85)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      overflowY: 'auto',
    }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{
        background: T.chaux,
        maxWidth: 1280, margin: '40px auto',
        position: 'relative',
      }}>
        {/* Close */}
        <button onClick={onClose} style={{
          position: 'absolute', top: 24, right: 24, zIndex: 5,
          width: 48, height: 48,
          background: T.encre, color: T.chaux,
          border: 'none', cursor: 'pointer',
          fontFamily: SANS, fontWeight: 500, fontSize: 18,
        }}>×</button>

        {/* Header */}
        <div style={{ padding: '64px 64px 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
            <span style={{ width: 8, height: 8, background: T.vermillon, transform: 'rotate(45deg)' }}/>
            <Eyebrow color={T.vermillon}>{p.catLabel}</Eyebrow>
            <Rule width={48} color={T.ocre}/>
            <Eyebrow color={T.pierre}>{p.secteur}</Eyebrow>
          </div>
          <h2 style={{
            fontFamily: SERIF, fontWeight: 300,
            fontSize: 'clamp(48px, 6vw, 96px)',
            lineHeight: 1, letterSpacing: '-0.035em',
            margin: 0, color: T.encre, textWrap: 'balance',
          }}>
            {p.title}
          </h2>
          <p style={{
            marginTop: 24, maxWidth: 720,
            fontFamily: SERIF, fontStyle: 'italic', fontWeight: 300,
            fontSize: 24, lineHeight: 1.4,
            color: T.vermillon, letterSpacing: '-0.005em',
          }}>{p.accroche}</p>
        </div>

        {/* Avant / Après */}
        <div style={{ padding: '0 64px' }}>
          <div style={{ marginBottom: 16 }}>
            <Eyebrow color={T.encre}>Transformation · Faites glisser</Eyebrow>
          </div>
          <BeforeAfter before={p.before} after={p.after}/>
        </div>

        {/* Context + solution */}
        <div style={{
          padding: '64px 64px',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64,
        }}>
          <div>
            <Eyebrow color={T.vermillon}>Contexte client</Eyebrow>
            <h3 style={{
              fontFamily: SERIF, fontWeight: 300, fontStyle: 'italic',
              fontSize: 28, letterSpacing: '-0.015em',
              margin: '16px 0 0 0', color: T.encre,
            }}>Le besoin</h3>
            <p style={{
              marginTop: 16,
              fontFamily: SERIF, fontWeight: 300,
              fontSize: 18, lineHeight: 1.65, color: T.encre,
            }}>{p.besoin}</p>
          </div>
          <div>
            <Eyebrow color={T.vermillon}>Solutions Surface</Eyebrow>
            <h3 style={{
              fontFamily: SERIF, fontWeight: 300, fontStyle: 'italic',
              fontSize: 28, letterSpacing: '-0.015em',
              margin: '16px 0 0 0', color: T.encre,
            }}>La réponse</h3>
            <p style={{
              marginTop: 16,
              fontFamily: SERIF, fontWeight: 300,
              fontSize: 18, lineHeight: 1.65, color: T.encre,
            }}>{p.solution}</p>
          </div>
        </div>

        {/* Gallery */}
        <div style={{ padding: '0 64px' }}>
          <div style={{ marginBottom: 24 }}>
            <Eyebrow color={T.encre}>Galerie · Détails</Eyebrow>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {p.gallery.map((src, i) => (
              <div key={i} style={{
                aspectRatio: '4/5',
                backgroundImage: `url(${src})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
              }}/>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          margin: '64px 64px 64px',
          background: T.encre, color: T.chaux,
          padding: '56px 48px',
          display: 'grid', gridTemplateColumns: '2fr 1fr',
          gap: 48, alignItems: 'center',
        }}>
          <div>
            <Eyebrow color={T.vermillon}>Inspiré ?</Eyebrow>
            <h3 style={{
              fontFamily: SERIF, fontWeight: 300,
              fontSize: 'clamp(32px, 3.4vw, 52px)',
              lineHeight: 1.05, letterSpacing: '-0.025em',
              margin: '20px 0 0 0', color: T.chaux, textWrap: 'balance',
            }}>
              Démarrez un projet <span style={{ fontStyle: 'italic', color: T.vermillon }}>similaire</span>.
            </h3>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <a href="#contact" onClick={() => onClose()} style={{
              display: 'inline-flex', alignItems: 'center', gap: 14,
              background: T.vermillon, color: T.chaux,
              padding: '20px 32px',
              fontFamily: SANS, fontWeight: 500, fontSize: 12,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              textDecoration: 'none',
            }}>
              Démarrer mon projet <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { ProjectModal });
