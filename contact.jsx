// Surface Studio — Contact
const Contact = () => {
  const [form, setForm] = React.useState({ nom: '', email: '', tel: '', projet: '', message: '' });
  const [submitted, setSubmitted] = React.useState(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4500);
    setForm({ nom: '', email: '', tel: '', projet: '', message: '' });
  };

  return (
    <section id="contact" style={{
      background: T.chauxP,
      padding: '140px 48px 100px',
      borderTop: `1px solid ${T.encre}14`,
    }}>
      <SectionHeader num="04" label="Contact" baseline="Sur rendez-vous uniquement"/>

      <div style={{ display: 'grid', gridTemplateColumns: '6fr 5fr', gap: 100 }}>
        <div>
          <h2 style={{
            fontFamily: SERIF, fontWeight: 300,
            fontSize: 'clamp(48px, 5.4vw, 92px)',
            lineHeight: 1, letterSpacing: '-0.035em',
            margin: 0, color: T.encre, textWrap: 'balance',
          }}>
            Démarrons<br/>
            <span style={{ fontStyle: 'italic', color: T.vermillon }}>votre projet.</span>
          </h2>
          <p style={{
            marginTop: 32,
            fontFamily: SERIF, fontWeight: 300,
            fontSize: 19, lineHeight: 1.65,
            color: T.encre, maxWidth: 480,
          }}>
            Nous accueillons un client à la fois. La visite dure environ une heure
            et inclut un café marocain, une revue de votre projet,
            et un parcours de la matériauthèque.
          </p>

          <div style={{ marginTop: 56, display: 'flex', flexDirection: 'column', maxWidth: 480 }}>
            {[
              ['Adresse',   'Sidi Ghanem · Marrakech 40000'],
              ['Horaires',  'Mar – Sam · 10h – 18h'],
              ['Téléphone', '+212 6 00 00 00 00'],
              ['Email',     'contact@surfacestudio.ma'],
              ['Instagram', '@surfacestudio.ma'],
            ].map(([k, v], i) => (
              <div key={k} style={{
                display: 'flex', justifyContent: 'space-between',
                padding: '20px 0',
                borderTop: i === 0 ? `1px solid ${T.vermillon}` : 'none',
                borderBottom: `1px solid ${T.encre}1f`,
              }}>
                <Eyebrow color={T.vermillon}>{k}</Eyebrow>
                <span style={{
                  fontFamily: SERIF, fontWeight: 300, fontSize: 16,
                  color: T.encre, letterSpacing: '-0.005em',
                }}>{v}</span>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 56,
            padding: 28,
            background: T.chaux,
            border: `1px solid ${T.encre}14`,
          }}>
            <Eyebrow color={T.vermillon}>Important</Eyebrow>
            <p style={{
              marginTop: 12, marginBottom: 0,
              fontFamily: SERIF, fontStyle: 'italic', fontWeight: 300,
              fontSize: 16, lineHeight: 1.5, color: T.encre,
            }}>
              Surface Studio ne communique pas de tarifs en ligne.
              Chaque projet est devisé après écoute et visite — la valeur
              est dans la vision, pas dans la grille.
            </p>
          </div>
        </div>

        {/* Form */}
        <div style={{
          background: T.chaux,
          padding: 48,
          boxShadow: '0 8px 48px rgba(28,28,26,0.06)',
          border: `1px solid ${T.encre}14`,
          position: 'relative',
        }}>
          <div style={{ marginBottom: 32 }}>
            <Eyebrow color={T.vermillon}>Demande de visite</Eyebrow>
            <div style={{
              fontFamily: SERIF, fontWeight: 300, fontSize: 28,
              color: T.encre, marginTop: 8, letterSpacing: '-0.015em',
            }}>Réponse sous 24h.</div>
          </div>

          <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              { id: 'nom',    label: 'Nom complet',     type: 'text' },
              { id: 'email',  label: 'Email',           type: 'email' },
              { id: 'tel',    label: 'Téléphone',       type: 'tel' },
              { id: 'projet', label: 'Nature du projet (résidentiel, café, boutique...)', type: 'text' },
            ].map(f => (
              <div key={f.id}>
                <label htmlFor={f.id} style={{
                  display: 'block',
                  fontFamily: SANS, fontWeight: 500, fontSize: 10,
                  letterSpacing: '0.22em', color: T.pierre,
                  textTransform: 'uppercase', marginBottom: 10,
                }}>{f.label}</label>
                <input id={f.id} type={f.type} required
                  value={form[f.id]} onChange={e => set(f.id, e.target.value)}
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
                  onFocus={e => e.target.style.borderColor = T.vermillon}
                  onBlur={e => e.target.style.borderColor = `${T.encre}33`}/>
              </div>
            ))}
            <div>
              <label style={{
                display: 'block',
                fontFamily: SANS, fontWeight: 500, fontSize: 10,
                letterSpacing: '0.22em', color: T.pierre,
                textTransform: 'uppercase', marginBottom: 10,
              }}>Parlez-nous de votre vision</label>
              <textarea
                value={form.message} onChange={e => set('message', e.target.value)}
                rows={3}
                style={{
                  width: '100%', padding: '12px 0',
                  border: 'none',
                  borderBottom: `1px solid ${T.encre}33`,
                  background: 'transparent',
                  fontFamily: SERIF, fontWeight: 300,
                  fontSize: 17, color: T.encre,
                  outline: 'none', resize: 'vertical',
                }}
                onFocus={e => e.target.style.borderColor = T.vermillon}
                onBlur={e => e.target.style.borderColor = `${T.encre}33`}/>
            </div>

            <button type="submit" style={{
              marginTop: 16,
              background: T.vermillon, color: T.chaux,
              border: 'none', cursor: 'pointer',
              padding: '20px 28px',
              fontFamily: SANS, fontWeight: 500, fontSize: 12,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              transition: 'background 0.25s',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}
            onMouseEnter={e => e.currentTarget.style.background = T.encre}
            onMouseLeave={e => e.currentTarget.style.background = T.vermillon}>
              <span>Envoyer la demande</span>
              <span>→</span>
            </button>
          </form>

          {submitted && (
            <div style={{
              position: 'absolute', inset: 0,
              background: T.encre, color: T.chaux,
              display: 'flex', flexDirection: 'column',
              justifyContent: 'center', alignItems: 'center',
              padding: 48, textAlign: 'center',
            }}>
              <Symbol size={64} color={T.vermillon} sw={1.5}/>
              <div style={{
                marginTop: 32,
                fontFamily: SERIF, fontStyle: 'italic', fontWeight: 300,
                fontSize: 28, color: T.chaux, letterSpacing: '-0.02em',
              }}>Demande reçue.</div>
              <div style={{
                marginTop: 12,
                fontFamily: SANS, fontWeight: 400, fontSize: 14,
                color: T.pierreL, lineHeight: 1.6, maxWidth: 320,
              }}>
                Nous revenons vers vous dans les 24 prochaines heures
                pour fixer un rendez-vous au showroom.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer style={{
    background: T.encre,
    padding: '80px 48px 36px',
    color: T.chaux,
  }}>
    <div style={{
      display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 64, marginBottom: 64,
    }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <SFSymbol size={44} color={T.chaux}/>
          <div>
            <div style={{
              fontFamily: SERIF, fontWeight: 300,
              fontSize: 26, letterSpacing: '-0.01em', color: T.chaux,
            }}>Surface</div>
            <div style={{
              fontFamily: SANS, fontWeight: 500, fontSize: 9,
              letterSpacing: '0.32em', color: T.vermillon,
              textTransform: 'uppercase', marginTop: 4,
            }}>Studio · Marrakech</div>
          </div>
        </div>
        <p style={{
          fontFamily: SERIF, fontStyle: 'italic', fontWeight: 300,
          fontSize: 16, lineHeight: 1.55, color: T.pierreL,
          margin: 0, maxWidth: 360,
        }}>
          Showroom de surfaces imprimées sur mesure.<br/>
          Sidi Ghanem · Marrakech.
        </p>
      </div>

      {[
        { t: 'Naviguer', l: [['Accueil','#top'],['Réalisations','#realisations'],['Services','#services'],['Le Studio','#studio'],['Contact','#contact']] },
        { t: 'Contact',  l: [['+212 6 00 00 00 00','#'],['contact@surfacestudio.ma','#'],['Mar–Sam · 10–18h','#']] },
        { t: 'Suivre',   l: [['Instagram','#'],['Pinterest','#'],['LinkedIn','#']] },
      ].map(col => (
        <div key={col.t}>
          <div style={{
            fontFamily: SANS, fontWeight: 500, fontSize: 10,
            letterSpacing: '0.22em', color: T.vermillon,
            textTransform: 'uppercase', marginBottom: 20,
          }}>— {col.t}</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {col.l.map(([item, href]) => (
              <li key={item}>
                <a href={href} style={{
                  fontFamily: SERIF, fontWeight: 300, fontSize: 15,
                  color: T.chaux, letterSpacing: '-0.005em',
                  textDecoration: 'none', transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = T.vermillon}
                onMouseLeave={e => e.currentTarget.style.color = T.chaux}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div style={{
      paddingTop: 32,
      borderTop: `1px solid ${T.chaux}1f`,
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

Object.assign(window, { Contact, Footer });
