// Surface Studio — Services
const ServiceCard = ({ s, idx, layout }) => {
  const [hover, setHover] = React.useState(false);
  const isLeft = idx % 2 === 0;
  const isPhare = s.phare;

  if (layout === 'hero') {
    // Big featured card for "phare" item
    return (
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{
          gridColumn: '1 / -1',
          background: T.encre,
          color: T.chaux,
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 0, position: 'relative', overflow: 'hidden',
        }}>
        <div style={{ padding: 64, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 540 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
              <span style={{ width: 8, height: 8, background: T.vermillon, transform: 'rotate(45deg)' }}/>
              <Eyebrow color={T.vermillon} size={10}>Offre phare · {s.n}</Eyebrow>
            </div>
            <h3 style={{
              fontFamily: SERIF, fontWeight: 300,
              fontSize: 'clamp(40px, 4.4vw, 72px)',
              lineHeight: 1, letterSpacing: '-0.03em',
              margin: 0, color: T.chaux, textWrap: 'balance',
            }}>
              {s.title}
            </h3>
            <p style={{
              marginTop: 28,
              fontFamily: SERIF, fontStyle: 'italic', fontWeight: 300,
              fontSize: 24, lineHeight: 1.4,
              color: T.ocre, margin: '28px 0 0 0',
            }}>
              {s.accroche}
            </p>
            <p style={{
              marginTop: 32, maxWidth: 460,
              fontFamily: SERIF, fontWeight: 300,
              fontSize: 17, lineHeight: 1.65,
              color: T.pierreL,
            }}>
              {s.desc}
            </p>
          </div>
          <div style={{ marginTop: 48 }}>
            <a href="#contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 14,
              background: T.vermillon, color: T.chaux,
              padding: '18px 28px',
              fontFamily: SANS, fontWeight: 500, fontSize: 11,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              textDecoration: 'none',
            }}>
              Discuter de votre vision <span>→</span>
            </a>
          </div>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: 540 }}>
          <img src={s.image} alt={s.title}
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover',
              transform: hover ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.8s cubic-bezier(.16,.84,.3,1)',
            }}/>
          <div style={{
            position: 'absolute', top: 24, right: 24,
            fontFamily: MONO, fontSize: 10, color: T.chaux,
            letterSpacing: '0.1em', background: T.encre, padding: '6px 10px',
          }}>SERVICE · {s.n}</div>
        </div>
      </div>
    );
  }

  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: T.chaux,
        border: `1px solid ${T.encre}14`,
        display: 'flex', flexDirection: 'column',
        position: 'relative', overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.3s',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hover ? '0 32px 60px rgba(28,28,26,0.12)' : '0 0 0 rgba(0,0,0,0)',
      }}>
      <div style={{ position: 'relative', height: 320, overflow: 'hidden' }}>
        <img src={s.image} alt={s.title}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover',
            transform: hover ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.8s cubic-bezier(.16,.84,.3,1)',
          }}/>
        <div style={{
          position: 'absolute', top: 16, left: 16,
          background: T.chaux, color: T.encre,
          padding: '6px 10px',
          fontFamily: MONO, fontSize: 10,
          letterSpacing: '0.1em',
        }}>{s.n}</div>
      </div>
      <div style={{ padding: 32, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          fontFamily: SERIF, fontWeight: 300,
          fontSize: 26, lineHeight: 1.1, letterSpacing: '-0.02em',
          margin: 0, color: T.encre,
        }}>{s.title}</h3>
        <p style={{
          marginTop: 12,
          fontFamily: SERIF, fontStyle: 'italic', fontWeight: 300,
          fontSize: 16, color: T.vermillon,
          letterSpacing: '-0.005em',
        }}>{s.accroche}</p>
        <p style={{
          marginTop: 16, marginBottom: 0, flex: 1,
          fontFamily: SANS, fontWeight: 400, fontSize: 13.5,
          lineHeight: 1.6, color: T.pierre,
        }}>{s.desc}</p>
        <div style={{
          marginTop: 24, paddingTop: 20,
          borderTop: `1px solid ${T.encre}14`,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <Eyebrow color={T.pierre} size={9}>Niveau {s.niveau}</Eyebrow>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: SANS, fontWeight: 500, fontSize: 10,
            letterSpacing: '0.22em', color: hover ? T.vermillon : T.encre,
            textTransform: 'uppercase', transition: 'color 0.3s',
          }}>
            En parler
            <span style={{ width: 16, height: 1, background: hover ? T.vermillon : T.encre, transition: 'all 0.3s' }}/>
          </span>
        </div>
      </div>
    </div>
  );
};

const NiveauHeader = ({ niveau, accent }) => (
  <div style={{
    gridColumn: '1 / -1',
    display: 'grid', gridTemplateColumns: '1fr 2fr',
    gap: 64, alignItems: 'baseline',
    padding: '40px 0 24px 0',
    borderTop: `1px solid ${T.encre}1f`,
  }}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
      <span style={{
        fontFamily: SERIF, fontWeight: 300, fontStyle: 'italic',
        fontSize: 64, letterSpacing: '-0.03em',
        color: accent || T.vermillon, lineHeight: 1,
      }}>0{niveau.n}</span>
      <div>
        <Eyebrow color={accent || T.vermillon}>Niveau {niveau.n}</Eyebrow>
        <div style={{
          fontFamily: SERIF, fontWeight: 300,
          fontSize: 32, letterSpacing: '-0.02em',
          color: T.encre, marginTop: 6,
        }}>{niveau.label}</div>
      </div>
    </div>
    <p style={{
      fontFamily: SERIF, fontStyle: 'italic', fontWeight: 300,
      fontSize: 20, lineHeight: 1.5,
      color: T.pierre, margin: 0,
    }}>{niveau.baseline}</p>
  </div>
);

const Services = () => {
  const grouped = NIVEAUX.map(n => ({
    niveau: n,
    items: SERVICES.filter(s => s.niveau === n.n),
  }));
  const accents = { 1: T.encre, 2: T.ocre, 3: T.vermillon };

  return (
    <section id="services" style={{
      background: T.chauxP,
      padding: '140px 48px 160px',
      borderTop: `1px solid ${T.encre}14`,
    }}>
      <SectionHeader num="02" label="Services" baseline="10 offres · 3 niveaux"/>

      <div style={{
        display: 'grid', gridTemplateColumns: '5fr 4fr',
        gap: 80, alignItems: 'end',
        marginBottom: 100,
      }}>
        <h2 style={{
          fontFamily: SERIF, fontWeight: 300,
          fontSize: 'clamp(48px, 5.4vw, 92px)',
          lineHeight: 1, letterSpacing: '-0.035em',
          margin: 0, color: T.encre, textWrap: 'balance',
        }}>
          Trois métiers,<br/>
          <span style={{ fontStyle: 'italic' }}>une vision.</span>
        </h2>
        <p style={{
          fontFamily: SERIF, fontWeight: 300,
          fontSize: 18, lineHeight: 1.6,
          color: T.pierre, margin: 0, maxWidth: 480,
        }}>
          Du panneau décoratif au branding total d'un espace,
          nous accompagnons chaque projet avec la même rigueur :
          écouter, dessiner, livrer.
        </p>
      </div>

      {grouped.map(({ niveau, items }, gi) => (
        <div key={niveau.n} style={{ marginBottom: gi < 2 ? 80 : 0 }}>
          <NiveauHeader niveau={niveau} accent={accents[niveau.n]}/>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
            marginTop: 32,
          }}>
            {items.map((s, i) => (
              <ServiceCard key={s.n} s={s} idx={i}
                layout={s.phare ? 'hero' : 'card'}/>
            ))}
          </div>
        </div>
      ))}

      <div style={{
        marginTop: 100,
        background: T.chaux,
        padding: 64,
        display: 'grid', gridTemplateColumns: '2fr 1fr',
        gap: 64, alignItems: 'center',
        border: `1px solid ${T.encre}14`,
      }}>
        <div>
          <Eyebrow color={T.vermillon}>Sur mesure · Toujours</Eyebrow>
          <h3 style={{
            fontFamily: SERIF, fontWeight: 300,
            fontSize: 'clamp(32px, 3.4vw, 52px)',
            lineHeight: 1.05, letterSpacing: '-0.025em',
            margin: '20px 0 0 0', color: T.encre, textWrap: 'balance',
          }}>
            Chaque projet est <span style={{ fontStyle: 'italic' }}>unique</span>.
            Le devis aussi.
          </h3>
          <p style={{
            marginTop: 20, maxWidth: 580,
            fontFamily: SERIF, fontWeight: 300,
            fontSize: 17, lineHeight: 1.6, color: T.pierre,
          }}>
            Nous ne vendons pas un catalogue. Nous écoutons votre besoin,
            proposons une vision, et chiffrons en transparence après visite.
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <CTAPrimary href="#contact">Parler de votre projet</CTAPrimary>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Services });
