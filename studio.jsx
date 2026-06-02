// Surface Studio — Le Studio
const Studio = () => {
  const team = [
    { name: 'Yasmine Bennani', role: 'Direction artistique', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80' },
    { name: 'Karim El Idrissi', role: 'Conception & matières', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80' },
    { name: 'Salma Zerhouni', role: 'Production & pose', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80' },
  ];
  const principles = [
    { n: '01', t: 'Galerie', d: 'Chaque réalisation est exposée comme une œuvre. Espace, lumière, distance.' },
    { n: '02', t: 'Matière', d: 'Toucher avant de choisir. Une bibliothèque tactile à manipuler, pas un catalogue.' },
    { n: '03', t: 'Confiance', d: 'Un dialogue posé autour d\'une table : conseil, échantillons, projets sur mesure.' },
  ];
  return (
    <section id="studio" style={{
      background: T.chaux,
      padding: '140px 48px 160px',
      borderTop: `1px solid ${T.encre}14`,
    }}>
      <SectionHeader num="03" label="Le Studio" baseline="Sidi Ghanem · Marrakech"/>

      <div style={{
        display: 'grid', gridTemplateColumns: '5fr 4fr',
        gap: 80, alignItems: 'start',
        marginBottom: 120,
      }}>
        <div>
          <h2 style={{
            fontFamily: SERIF, fontWeight: 300,
            fontSize: 'clamp(48px, 5.4vw, 92px)',
            lineHeight: 1, letterSpacing: '-0.035em',
            margin: 0, color: T.encre, textWrap: 'balance',
          }}>
            Pas un atelier.<br/>
            <span style={{ fontStyle: 'italic' }}>Une galerie</span> de surfaces.
          </h2>
        </div>
        <div>
          <p style={{
            fontFamily: SERIF, fontWeight: 300,
            fontSize: 19, lineHeight: 1.7,
            color: T.encre, margin: 0,
          }}>
            Le visiteur ne vient pas voir une machine.
            Il vient toucher des matières, voir des panneaux pendre comme des tableaux,
            s'asseoir face à un mur de finitions.
            <br/><br/>
            La technique reste en coulisses. Ce qui compte, c'est le résultat —
            exposé avec le soin d'une exposition.
          </p>
        </div>
      </div>

      {/* Showroom imagery — full bleed image strip */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr',
        gap: 16,
        height: 520,
        marginBottom: 120,
      }}>
        <div style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1604147706283-d7119b5b822c?w=1600&q=80)`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}/>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{
            flex: 1,
            backgroundImage: `url(https://images.unsplash.com/photo-1615873968403-89e068629265?w=1200&q=80)`,
            backgroundSize: 'cover', backgroundPosition: 'center',
          }}/>
          <div style={{
            flex: 1,
            backgroundImage: `url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80)`,
            backgroundSize: 'cover', backgroundPosition: 'center',
          }}/>
        </div>
        <div style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1577720580479-7d839d829c73?w=1200&q=80)`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}/>
      </div>

      {/* Principles */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 0, borderTop: `1px solid ${T.vermillon}`,
        marginBottom: 120,
      }}>
        {principles.map((p, i) => (
          <div key={p.n} style={{
            padding: '48px 40px 0 0',
            borderRight: i < 2 ? `1px solid ${T.encre}1f` : 'none',
            paddingLeft: i === 0 ? 0 : 40,
          }}>
            <Eyebrow color={T.vermillon}>— {p.n}</Eyebrow>
            <h3 style={{
              fontFamily: SERIF, fontWeight: 300, fontStyle: 'italic',
              fontSize: 38, letterSpacing: '-0.02em',
              margin: '24px 0 16px 0', color: T.encre,
            }}>{p.t}</h3>
            <p style={{
              fontFamily: SERIF, fontWeight: 300,
              fontSize: 16, lineHeight: 1.65,
              color: T.encre, margin: 0,
            }}>{p.d}</p>
          </div>
        ))}
      </div>

      {/* Team */}
      <div style={{ marginBottom: 32 }}>
        <Eyebrow color={T.encre}>L'équipe · 03 personnes</Eyebrow>
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24,
      }}>
        {team.map(m => (
          <div key={m.name}>
            <div style={{
              aspectRatio: '4/5',
              backgroundImage: `url(${m.img})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              filter: 'grayscale(0.2)',
              marginBottom: 20,
            }}/>
            <h4 style={{
              fontFamily: SERIF, fontWeight: 300,
              fontSize: 24, letterSpacing: '-0.015em',
              margin: 0, color: T.encre,
            }}>{m.name}</h4>
            <div style={{
              marginTop: 6,
              fontFamily: SANS, fontWeight: 500, fontSize: 11,
              letterSpacing: '0.2em', color: T.vermillon,
              textTransform: 'uppercase',
            }}>{m.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Quote bloc
const Manifeste = () => (
  <section style={{
    background: T.encre,
    padding: '180px 48px',
    position: 'relative', overflow: 'hidden',
  }}>
    <div style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
    }}>
      <SFSymbol size={900} color={T.chaux} sw={1} opacity={0.05}/>
    </div>
    <div style={{ position: 'relative', maxWidth: 1080, margin: '0 auto', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 56 }}>
        <Rule width={48} color={T.vermillon}/>
      </div>
      <p style={{
        fontFamily: SERIF, fontStyle: 'italic', fontWeight: 300,
        fontSize: 'clamp(36px, 4vw, 64px)',
        lineHeight: 1.2, letterSpacing: '-0.025em',
        color: T.chaux, margin: 0, textWrap: 'balance',
      }}>
        Le client n'achète pas une impression.<br/>
        Il choisit <span style={{ color: T.vermillon }}>l'atmosphère</span> qu'il veut habiter.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 56 }}>
        <Rule width={48} color={T.vermillon}/>
      </div>
      <div style={{ marginTop: 40 }}>
        <Eyebrow color={T.pierreL}>Note d'intention · Surface Studio</Eyebrow>
      </div>
    </div>
  </section>
);

Object.assign(window, { Studio, Manifeste });
