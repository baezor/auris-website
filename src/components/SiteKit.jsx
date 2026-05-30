const S_ICONS = {
  'message-circle': '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  headphones: '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a9 9 0 0 1 18 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
  'book-open': '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
  github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  server: '<rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  building: '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/>',
  'graduation-cap': '<path d="M21.42 10.92a1 1 0 0 0-.02-1.84L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.83l8.57 3.91a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  bus: '<path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/>',
  sparkle: '<path d="M9.94 14.32a8 8 0 0 1 6.36-6.36 8 8 0 0 1-6.36-6.36 8 8 0 0 1-6.36 6.36 8 8 0 0 1 6.36 6.36z"/>',
};

export function SIcon({ name, size = 22, fill = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill ? 'currentColor' : 'none'}
      stroke={fill ? 'none' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ flex: 'none' }} dangerouslySetInnerHTML={{ __html: S_ICONS[name] || '' }} />
  );
}

const LOGO = '/assets/auris-logo.svg';
const MARK = '/assets/auris-mark.svg';
const GITHUB = 'https://github.com/grupolibermx/auris';

function Btn({ kind = 'primary', children, icon }) {
  const base = { display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 16, borderRadius: 'var(--r-pill)', padding: '13px 24px', cursor: 'pointer', border: 'none', textDecoration: 'none', lineHeight: 1, whiteSpace: 'nowrap', transition: 'background .15s, transform .1s' };
  const styles = {
    primary:   { ...base, background: 'var(--clay)', color: '#fff', boxShadow: 'var(--shadow-sm)' },
    pine:      { ...base, background: 'var(--pine)', color: '#fff' },
    secondary: { ...base, background: 'transparent', color: 'var(--ink)', border: '1.5px solid var(--line-strong)' },
  };
  return <a className="au-btn" style={styles[kind]}>{children}{icon && <SIcon name={icon} size={18} />}</a>;
}

export function SiteNav() {
  const link = { fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600, color: 'var(--ink-2)', textDecoration: 'none', whiteSpace: 'nowrap' };
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 10, background: 'rgba(251,244,233,.86)', backdropFilter: 'blur(8px)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 28 }}>
        <img src={LOGO} height="40" alt="Auris" style={{ display: 'block' }} />
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', gap: 26, alignItems: 'center' }} className="navlinks">
          <a href="#como-funciona" style={link}>Cómo funciona</a>
          <a href="#instituciones" style={link}>Para instituciones</a>
          <a href="#codigo-abierto" style={link}>Código abierto</a>
          <a href={GITHUB} target="_blank" rel="noopener" style={{ ...link, display: 'inline-flex', alignItems: 'center', gap: 6 }}><SIcon name="github" size={18} /> GitHub</a>
        </div>
        <a href={GITHUB} target="_blank" rel="noopener" className="au-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 16, borderRadius: 'var(--r-pill)', padding: '13px 24px', cursor: 'pointer', border: 'none', textDecoration: 'none', lineHeight: 1, whiteSpace: 'nowrap', background: 'var(--clay)', color: '#fff', boxShadow: 'var(--shadow-sm)' }}>Empieza gratis <SIcon name="arrow-right" size={18} /></a>
      </div>
    </nav>
  );
}

function PhoneMock() {
  const bars = Array.from({ length: 26 }, (_, i) => 32 + ((i * 47) % 64));
  return (
    <div style={{ width: 280, background: '#1d1b20', borderRadius: 34, padding: 9, boxShadow: 'var(--shadow-pop)', flex: 'none' }}>
      <div style={{ background: '#E7DDCB', borderRadius: 26, overflow: 'hidden', height: 520, display: 'flex', flexDirection: 'column' }}>
        <div style={{ background: 'var(--clay)', color: '#fff', padding: '14px 14px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--paper)', display: 'grid', placeItems: 'center' }}><img src={MARK} width="22" height="22" alt="" /></div>
          <div><div style={{ fontWeight: 700, fontSize: 15 }}>Auris</div><div style={{ fontSize: 11, opacity: .85 }}>en línea · tu maestro de bolsillo</div></div>
        </div>
        <div style={{ flex: 1, padding: 12, display: 'flex', flexDirection: 'column', gap: 8, backgroundImage: 'radial-gradient(rgba(42,28,19,.035) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div style={{ alignSelf: 'flex-start', background: 'var(--surface)', borderRadius: 12, borderTopLeftRadius: 3, padding: '8px 11px', fontSize: 13.5, maxWidth: '85%', boxShadow: '0 1px 1px rgba(42,28,19,.1)' }}>Hola 👋 Tu lección de hoy ya está lista.</div>
          <div style={{ alignSelf: 'flex-start', background: 'var(--surface)', borderRadius: 12, borderTopLeftRadius: 3, padding: 10, width: '88%', boxShadow: '0 1px 1px rgba(42,28,19,.1)' }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--clay)', marginBottom: 6 }}>Anatomía · Lección 4</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
              <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--clay)', color: '#fff', display: 'grid', placeItems: 'center', flex: 'none' }}><SIcon name="play" size={16} fill /></div>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 2, height: 24 }}>
                {bars.map((h, i) => <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: 2, background: i < 11 ? (i % 2 ? 'var(--wave-3)' : 'var(--wave-1)') : 'var(--wave-track)' }} />)}
              </div>
            </div>
          </div>
          <div style={{ alignSelf: 'flex-end', background: '#E4EFD4', borderRadius: 12, borderTopRightRadius: 3, padding: '8px 11px', fontSize: 13.5, boxShadow: '0 1px 1px rgba(42,28,19,.1)' }}>Voy en el metro 🎧</div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <header style={{ maxWidth: 1120, margin: '0 auto', padding: '64px 24px 56px', display: 'flex', gap: 56, alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ flex: '1 1 420px', minWidth: 320 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 700, color: 'var(--pine)', background: 'var(--pine-tint)', padding: '6px 12px', borderRadius: 'var(--r-pill)' }}><SIcon name="message-circle" size={15} /> Aprende por WhatsApp · sin instalar nada</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px, 6vw, 60px)', lineHeight: 1.04, letterSpacing: '-.02em', margin: '20px 0 0', color: 'var(--ink)', textWrap: 'balance' }}>Tu maestro de bolsillo, en el camino.</h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 19, lineHeight: 1.55, color: 'var(--ink-2)', margin: '18px 0 0', maxWidth: 520 }}>Sube un PDF o tus apuntes y Auris los convierte en una lección de audio narrada por IA, lista en tu WhatsApp para el próximo camión. Sin datos extra, sin app nueva, sin cambiar de número.</p>
        <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
          <a href={GITHUB} target="_blank" rel="noopener" className="au-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 16, borderRadius: 'var(--r-pill)', padding: '13px 24px', cursor: 'pointer', border: 'none', textDecoration: 'none', lineHeight: 1, whiteSpace: 'nowrap', background: 'var(--clay)', color: '#fff', boxShadow: 'var(--shadow-sm)' }}>Ver en GitHub <SIcon name="arrow-right" size={18} /></a>
          <a href="#como-funciona" className="au-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 16, borderRadius: 'var(--r-pill)', padding: '13px 24px', cursor: 'pointer', textDecoration: 'none', lineHeight: 1, whiteSpace: 'nowrap', background: 'transparent', color: 'var(--ink)', border: '1.5px solid var(--line-strong)' }}>Cómo funciona</a>
        </div>
        <div style={{ display: 'flex', gap: 22, marginTop: 26, fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--ink-2)', flexWrap: 'wrap' }}>
          {['Gratis y de código abierto', 'Funciona en cualquier celular', 'Sin app que instalar'].map(t => (
            <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: 'var(--pine)', display: 'flex' }}><SIcon name="check" size={17} /></span>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ flex: '0 1 auto', display: 'flex', justifyContent: 'center', flexGrow: 1 }}><PhoneMock /></div>
    </header>
  );
}

export function HowItWorks() {
  const steps = [
    { icon: 'book-open', t: 'Sube tu material', d: 'Carga un PDF, un temario o tus propios apuntes. El motor extrae lo esencial y lo convierte en un guion de audio narrado con IA.' },
    { icon: 'headphones', t: 'Llega a tu WhatsApp', d: 'Recibes un mensaje de audio directo en WhatsApp. Sin app que descargar, sin cuenta que crear, sin datos extra por escuchar.' },
    { icon: 'graduation-cap', t: 'Avanza a tu ritmo', d: 'Responde el quiz al final, repite la lección o pide que te expliquen algo de nuevo. Tu progreso se guarda en tu propio servidor.' },
  ];
  return (
    <section id="como-funciona" style={{ background: 'var(--paper-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '72px 24px' }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--clay)' }}>Cómo funciona</span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 34, letterSpacing: '-.01em', margin: '10px 0 40px', color: 'var(--ink)' }}>De tus apuntes a tu WhatsApp, en tres pasos.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 22 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', padding: 26, boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: 52, height: 52, borderRadius: 'var(--r-md)', background: 'var(--clay-tint)', color: 'var(--clay)', display: 'grid', placeItems: 'center', marginBottom: 16 }}><SIcon name={s.icon} size={26} /></div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 700, color: 'var(--ink-3)', marginBottom: 4 }}>Paso {i + 1}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 21, letterSpacing: '-.01em', margin: '0 0 8px', color: 'var(--ink)' }}>{s.t}</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15.5, lineHeight: 1.55, color: 'var(--ink-2)', margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Audience() {
  return (
    <section style={{ maxWidth: 1120, margin: '0 auto', padding: '72px 24px', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ flex: '1 1 360px', background: 'var(--ink)', borderRadius: 'var(--r-xl)', padding: 36, color: 'var(--paper)', minHeight: 240, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <SIcon name="bus" size={40} />
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 40, color: 'var(--honey)', lineHeight: 1 }}>3 horas</div>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.5, color: 'rgba(251,244,233,.82)', margin: '8px 0 0' }}>al día de trayecto. Auris las convierte en tiempo de estudio, no en tiempo perdido.</p>
        </div>
      </div>
      <div style={{ flex: '1 1 380px' }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--clay)' }}>Para quién es</span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 32, letterSpacing: '-.01em', margin: '10px 0 16px', color: 'var(--ink)' }}>Para quien estudia mientras la vida pasa rápido.</h2>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 17, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 }}>Adultos que trabajan y estudian a la vez. Personas que se preparan para una certificación, terminan la prepa o aprenden algo nuevo — con el celular que ya tienen y sin un solo MB de más.</p>
      </div>
    </section>
  );
}

export function OpenSource() {
  return (
    <section id="codigo-abierto" style={{ background: 'var(--pine)', color: 'var(--paper)' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '72px 24px', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 380px' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--honey)' }}>Código abierto · MIT</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 34, letterSpacing: '-.01em', margin: '10px 0 14px' }}>Tuyo para alojar, como WordPress.</h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 17, lineHeight: 1.6, color: 'rgba(251,244,233,.85)', margin: '0 0 24px' }}>Auris es un motor API-first con proveedores intercambiables: Claude o cualquier LLM para el guion, ElevenLabs o TTS local para la voz. Levanta tu instancia, carga tu currículo y los datos de tus estudiantes se quedan en tu servidor.</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href={GITHUB} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--paper)', color: 'var(--ink)', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 16, borderRadius: 'var(--r-pill)', padding: '13px 22px', textDecoration: 'none', whiteSpace: 'nowrap' }}><SIcon name="github" size={18} /> Ver en GitHub</a>
          </div>
        </div>
        <div style={{ flex: '1 1 360px', minWidth: 300 }}>
          <div style={{ background: 'rgba(20,40,32,.55)', border: '1px solid rgba(251,244,233,.18)', borderRadius: 'var(--r-lg)', padding: 18, fontFamily: 'var(--font-mono)', fontSize: 14, lineHeight: 1.8 }}>
            <div style={{ color: 'rgba(251,244,233,.5)' }}># genera una lección de audio</div>
            <div><span style={{ color: 'var(--honey)' }}>$</span> curl localhost:3000/generate \</div>
            <div style={{ paddingLeft: 22 }}><span style={{ color: 'rgba(251,244,233,.6)' }}>-d</span> {`'{"text":"La fotosíntesis es…"}'`} \</div>
            <div style={{ paddingLeft: 22 }}><span style={{ color: 'rgba(251,244,233,.6)' }}>-H</span> {`'Content-Type: application/json'`}</div>
            <div style={{ color: '#aee0c8', marginTop: 6 }}>✓ {`{"audioUrl":"/audio/abc123.mp3"}`}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Institutions() {
  const cards = [
    { icon: 'building', t: 'Universidades', d: 'Llega a estudiantes foráneos y de tiempo parcial donde sí pueden estudiar: en el camino. Carga el temario una vez, tus alumnos reciben las lecciones cada día.' },
    { icon: 'users', t: 'Empleadores', d: 'Capacita a tu personal operativo y de campo sin sacarlos de su jornada. El contenido llega al WhatsApp que ya usan, sin hardware ni licencias extra.' },
    { icon: 'graduation-cap', t: 'Programas sociales', d: 'Alfabetización, prepa abierta y certificaciones nacionales — accesibles desde cualquier celular con WhatsApp, sin requerir datos de alta velocidad.' },
  ];
  return (
    <section id="instituciones" style={{ maxWidth: 1120, margin: '0 auto', padding: '72px 24px' }}>
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--clay)' }}>Para instituciones</span>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 34, letterSpacing: '-.01em', margin: '10px 0 40px', color: 'var(--ink)', maxWidth: 640 }}>Tu institución, en el bolsillo de cada estudiante.</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 22 }}>
        {cards.map((c, i) => (
          <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', padding: 26, boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ color: 'var(--clay)', marginBottom: 14 }}><SIcon name={c.icon} size={30} /></div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 21, margin: '0 0 8px', color: 'var(--ink)' }}>{c.t}</h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15.5, lineHeight: 1.55, color: 'var(--ink-2)', margin: 0 }}>{c.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SiteFooter() {
  const linkStyle = { display: 'block', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--ink-2)', textDecoration: 'none', marginBottom: 9 };
  return (
    <footer style={{ background: 'var(--paper-2)', borderTop: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '56px 24px 32px', display: 'flex', gap: 48, flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <div style={{ maxWidth: 280 }}>
          <img src={LOGO} height="28" alt="Auris" />
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.55, color: 'var(--ink-2)', margin: '14px 0 0' }}>Aprender empieza por escuchar. Motor de lecciones de audio de código abierto, hecho para estudiar en el camino en México y Latinoamérica.</p>
        </div>
        <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 14, color: 'var(--ink)', marginBottom: 12 }}>Producto</div>
            <a href="#como-funciona" style={linkStyle}>Cómo funciona</a>
            <a href="#instituciones" style={linkStyle}>Para instituciones</a>
            <a href="#codigo-abierto" style={linkStyle}>Código abierto</a>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 14, color: 'var(--ink)', marginBottom: 12 }}>Repositorio</div>
            <a href={GITHUB} target="_blank" rel="noopener" style={linkStyle}>GitHub</a>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 14, color: 'var(--ink)', marginBottom: 12 }}>Auris</div>
            <a href={GITHUB} target="_blank" rel="noopener" style={linkStyle}>Sobre el proyecto</a>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--line)', padding: '18px 24px', textAlign: 'center', fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--ink-3)' }}>© 2026 Auris · Software libre, licencia MIT</div>
    </footer>
  );
}
