const Navbar = () => (
  <nav style={{
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(0,0,0,0.06)',
  }}>
    <div style={{
      maxWidth: 1280, margin: '0 auto', padding: '0 24px',
      height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <a href="#" style={{ fontSize: 22, fontWeight: 700, color: '#111', textDecoration: 'none' }}>AML</a>

    </div>
  </nav>
);

export default Navbar;
