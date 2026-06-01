import { useRef, useState } from 'react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <video
        ref={videoRef}
        autoPlay muted loop playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
      >
        <source src="/Kyro.mp4" type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.42)', zIndex: 1 }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 700, margin: '0', padding: '120px 48px 80px' }}>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: 40 }}>
          Introducing KYRO Your AML AI Agent: Your dedicated partner in operational excellence.
        </h1>
        <a
          href="https://kyro.stradit.com/dashboard"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', padding: '14px 32px',
            background: '#f97316', color: '#fff', fontWeight: 600, fontSize: 16,
            borderRadius: 8, textDecoration: 'none', transition: 'background 0.2s',
          }}
        >Get Started →</a>

      </div>
      <button
        onClick={toggleSound}
        aria-label="Toggle sound"
        style={{
          position: 'absolute', bottom: 32, right: 32, zIndex: 3,
          background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)',
          border: 'none', color: '#fff', width: 52, height: 52,
          borderRadius: '50%', cursor: 'pointer', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
        }}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          {muted ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15zM17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          )}
        </svg>
      </button>
    </section>
  );
};

export default Hero;
