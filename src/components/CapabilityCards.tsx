import { useEffect, useRef, useState } from 'react';

interface CardData {
  video: string;
  gradient: string;
  title: string;
  desc: string;
}

const cards: CardData[] = [
  {
    video: '/envato_video_gen_Feb_27_2026_14_39_51.mp4',
    gradient: 'linear-gradient(to bottom, #a855f7, #7e22ce)',
    title: 'Periodic Review & Ongoing Monitoring',
    desc: 'Conducts automated periodic KYC reviews by continuously monitoring investor profiles and transactional behavior. Identifies changes in risk posture based on activity trends, thresholds, and behavioral deviations.',
  },
  {
    video: '/Kyro Transaction.mp4',
    gradient: 'linear-gradient(to bottom, #3b82f6, #1d4ed8)',
    title: 'Transaction Monitoring & Risk Scoring',
    desc: 'Monitors investor transactions in real time and batch mode. Assigns risk scores using predefined rules and AI-driven risk models. Detects suspicious activity including unusual transaction size, frequency, geography, or counterparties.',
  },
  {
    video: '/envato_video_gen_Feb_27_2026_15_00_51.mp4',
    gradient: 'linear-gradient(to bottom, #ec4899, #be185d)',
    title: 'AI-Driven Anomaly Detection',
    desc: 'Uses machine learning models to establish normal behavioral patterns for each investor. Flags abnormal deviations that may indicate AML, fraud, or sanctions risks. Continuously improves detection accuracy through feedback loops.',
  },
  {
    video: '/envato_video_gen_Feb_27_2026_15_06_12.mp4',
    gradient: 'linear-gradient(to bottom, #22c55e, #15803d)',
    title: 'False Positive Reduction',
    desc: 'Combines rules-based logic with AI modeling to minimize unnecessary alerts. Prioritizes high-risk and high-confidence alerts for human review. Improves operational efficiency and reduces compliance workload.',
  },
  {
    video: '/envato_video_gen_Feb_27_2026_15_03_30.mp4',
    gradient: 'linear-gradient(to bottom, #f97316, #c2410c)',
    title: 'Explainability & Audit Support',
    desc: 'Clearly explains why an alert was triggered and why a review is required. Provides transparent, regulator-friendly justifications for decisions. Supports audit trails and regulatory examinations.',
  },
];

const CapabilityCard = ({ card }: { card: CardData }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative', height: 420, borderRadius: 24, overflow: 'hidden', cursor: 'pointer' }}
    >
      <video
        autoPlay muted loop playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', transform: hovered ? 'scale(1.08)' : 'scale(1)' }}
      >
        <source src={card.video} type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, background: card.gradient, opacity: hovered ? 0.65 : 0.4, transition: 'opacity 0.3s' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>{card.title}</h3>
      </div>
      <div style={{
        position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.9)', padding: 24,
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        textAlign: 'center', opacity: hovered ? 1 : 0, transition: 'opacity 0.3s',
      }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>{card.title}</h3>
        <p style={{ fontSize: 13, color: '#fff', lineHeight: 1.6 }}>{card.desc}</p>
      </div>
    </div>
  );
};

const CapabilityCards = () => {
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
    <section style={{ padding: '96px 24px', background: '#fff' }} ref={ref}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <h2 className="fade-up" style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, textAlign: 'left', color: '#111', marginBottom: 56 }}>
          Core Functions & Capabilities
        </h2>
        <div className="fade-up cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20 }}>
          {cards.map((card) => <CapabilityCard key={card.title} card={card} />)}
        </div>
      </div>
    </section>
  );
};

export default CapabilityCards;
