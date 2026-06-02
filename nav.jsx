// Surface Studio — Nav
const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['Réalisations', '#realisations'],
    ['Services',     '#services'],
    ['Studio',       '#studio'],
    ['Contact',      '#contact'],
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      padding: scrolled ? '18px 48px' : '28px 48px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(244,240,232,0.92)' : 'rgba(244,240,232,0.0)',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? `1px solid ${T.encre}14` : `1px solid transparent`,
      transition: 'all 0.4s ease',
    }}>
      <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}>
        <SFSymbol size={26} color={T.encre} sw={1.5}/>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{
            fontFamily: SERIF, fontWeight: 300,
            fontSize: 22, letterSpacing: '-0.01em', color: T.encre,
          }}>Surface</span>
          <span style={{
            fontFamily: SANS, fontWeight: 500, fontSize: 8,
            letterSpacing: '0.32em', color: T.vermillon,
            textTransform: 'uppercase', marginTop: 4,
          }}>Studio · Marrakech</span>
        </div>
      </a>

      <div style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
        {links.map(([label, href]) => (
          <a key={label} href={href}
             style={{
               fontFamily: SANS, fontWeight: 500, fontSize: 12,
               letterSpacing: '0.18em', textTransform: 'uppercase',
               color: T.encre, textDecoration: 'none',
               position: 'relative', padding: '6px 0',
             }}
             onMouseEnter={e => e.currentTarget.style.color = T.vermillon}
             onMouseLeave={e => e.currentTarget.style.color = T.encre}>
            {label}
          </a>
        ))}
      </div>

      <a href="#contact" style={{
        display: 'inline-flex', alignItems: 'center', gap: 12,
        background: T.vermillon, color: T.chaux,
        padding: '14px 22px', textDecoration: 'none',
        fontFamily: SANS, fontWeight: 500, fontSize: 11,
        letterSpacing: '0.2em', textTransform: 'uppercase',
        transition: 'background 0.25s',
      }}
      onMouseEnter={e => e.currentTarget.style.background = T.encre}
      onMouseLeave={e => e.currentTarget.style.background = T.vermillon}>
        Démarrer votre projet
        <span>→</span>
      </a>
    </nav>
  );
};

Object.assign(window, { Nav });
