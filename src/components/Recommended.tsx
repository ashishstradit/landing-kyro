import { useEffect, useRef, useState } from 'react';

interface RecItem {
  img: string;
  name: string;
  sub: string;
  bg: string;
  bgHover: string;
}

const items: RecItem[] = [
  { img: '/Character 02.webp', name: 'StatementIQ', sub: 'Syro',  bg: '#dbeafe', bgHover: '#bfdbfe' },
  { img: '/Character 03.webp', name: 'AltsIQ',      sub: 'Altro', bg: '#ede9fe', bgHover: '#ddd6fe' },
  { img: '/Character 04.webp', name: 'PortfolioQ',  sub: 'Pyro',  bg: '#fce7f3', bgHover: '#fbcfe8' },
  { img: '/Character 05.webp', name: 'FundScan',    sub: 'Furo',  bg: '#dcfce7', bgHover: '#bbf7d0' },
];

const RecCard = ({ item }: { item: RecItem }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ textAlign: 'center', cursor: 'pointer' }}
    >
      <div style={{
        borderRadius: 16, padding: 32, marginBottom: 16,
        background: hovered ? item.bgHover : item.bg,
        transform: hovered ? 'scale(1.04)' : 'scale(1)',
        transition: 'transform 0.3s, background 0.3s',
      }}>
        <img
          src={item.img}
          alt={item.name}
          style={{ width: '100%', height: 'auto', transition: 'transform 0.4s', transform: hovered ? 'scale(1.08) rotate(4deg)' : 'scale(1)' }}
        />
      </div>
      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111' }}>{item.name} <span style={{ fontWeight: 400, color: '#888' }}>({item.sub})</span></h3>
    </div>
  );
};

const Recommended = () => {
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
          Recommended For You
        </h2>
        <div className="fade-up rec-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
          {items.map(item => <RecCard key={item.name} item={item} />)}
        </div>
      </div>
    </section>
  );
};

export default Recommended;
