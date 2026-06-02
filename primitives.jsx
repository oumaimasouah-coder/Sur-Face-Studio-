// Surface Studio — Primitives
const SFSymbol = ({ size = 80, color = T.encre, sw = 1.5, opacity = 1 }) => (
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
    width:  vertical ? height : width,
    height: vertical ? width : height,
    background: color,
  }}/>
);

// CTA principal — vermillon
const CTAPrimary = ({ children, href = '#contact', onClick, arrow = true }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={href} onClick={onClick}
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       style={{
         display: 'inline-flex', alignItems: 'center', gap: 14,
         background: hover ? T.encre : T.vermillon,
         color: T.chaux,
         padding: '20px 32px',
         fontFamily: SANS, fontWeight: 500, fontSize: 12,
         letterSpacing: '0.22em', textTransform: 'uppercase',
         textDecoration: 'none',
         transition: 'background 0.3s',
         border: 'none', cursor: 'pointer',
       }}>
      <span>{children}</span>
      {arrow && (
        <span style={{
          display: 'inline-flex',
          transform: hover ? 'translateX(6px)' : 'translateX(0)',
          transition: 'transform 0.3s',
        }}>→</span>
      )}
    </a>
  );
};

// CTA secondaire — outline
const CTASecondary = ({ children, href = '#realisations', onClick }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={href} onClick={onClick}
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       style={{
         display: 'inline-flex', alignItems: 'center', gap: 14,
         background: hover ? T.encre : 'transparent',
         color: hover ? T.chaux : T.encre,
         border: `1px solid ${T.encre}`,
         padding: '19px 32px',
         fontFamily: SANS, fontWeight: 500, fontSize: 12,
         letterSpacing: '0.22em', textTransform: 'uppercase',
         textDecoration: 'none', cursor: 'pointer',
         transition: 'all 0.3s',
       }}>
      <span>{children}</span>
      <span style={{ transform: hover ? 'translateX(6px)' : 'translateX(0)', transition: 'transform 0.3s' }}>→</span>
    </a>
  );
};

// CTA tertiaire — texte
const CTATertiary = ({ children, href = '#studio' }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       style={{
         display: 'inline-flex', alignItems: 'center', gap: 12,
         color: T.encre, textDecoration: 'none',
         fontFamily: SANS, fontWeight: 500, fontSize: 12,
         letterSpacing: '0.22em', textTransform: 'uppercase',
         borderBottom: `1px solid ${hover ? T.vermillon : T.encre}33`,
         paddingBottom: 6, transition: 'border-color 0.3s',
       }}>
      {children}
      <span style={{
        width: 24, height: 1,
        background: hover ? T.vermillon : T.encre,
        transition: 'all 0.3s',
        transform: hover ? 'translateX(6px)' : 'translateX(0)',
      }}/>
    </a>
  );
};

// Section header (consistent across page)
const SectionHeader = ({ num, label, baseline, accent }) => (
  <div style={{
    display: 'flex', alignItems: 'baseline',
    justifyContent: 'space-between',
    marginBottom: 80,
    flexWrap: 'wrap', gap: 24,
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <span style={{
        width: 8, height: 8, background: accent || T.vermillon,
        transform: 'rotate(45deg)',
      }}/>
      <Eyebrow color={T.encre}>{label} · {num}</Eyebrow>
      <Rule width={48} color={accent || T.ocre}/>
    </div>
    {baseline && <Eyebrow color={T.pierre}>{baseline}</Eyebrow>}
  </div>
);

Object.assign(window, { SFSymbol, Eyebrow, Rule, CTAPrimary, CTASecondary, CTATertiary, SectionHeader });
