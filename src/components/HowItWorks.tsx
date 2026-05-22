import { useEffect, useRef } from 'react';

const HowItWorks = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    );
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ padding: '96px 24px', background: '#f3f4f6' }} ref={ref}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <h2 className="fade-up" style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, textAlign: 'left', color: '#111', marginBottom: 56 }}>
          How KYRO works
        </h2>
        <div className="fade-up how-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <img src="/Globe.webp" alt="How KYRO works" style={{ width: '100%', borderRadius: 16 }} />
          <p style={{ fontSize: 20, color: '#555', lineHeight: 1.7 }}>
            Performs periodic reviews by monitoring investor transactions and risk scores (high, medium, low)
            using rules and AI to detect anomalies, reduce false positives, and provide clear review justifications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
