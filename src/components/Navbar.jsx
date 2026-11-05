import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  // Hide navbar entirely on the Builder page — it has its own UI
  if (location.pathname === '/builder') return null;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
    };
    
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/templates', label: 'Templates' },
    { to: '/resumes', label: 'Resumes' },
    { to: '/builder', label: 'Builder' },
    { to: '/showcase', label: 'Showcase' },
    { to: '/contact', label: 'Contact' },
  ];

  const isHome = location.pathname === '/';

  const navClass = [
    'navbar',
    scrolled ? 'navbar--scrolled' : '',
    isHome && !scrolled ? 'navbar--transparent' : '',
    !isHome && !scrolled ? 'navbar--solid' : '',
  ].filter(Boolean).join(' ');

  return (
    <nav className={navClass}>
      <div className="navbar__progress" style={{ width: `${scrollProgress}%` }} />
      
      <div className={`navbar__inner container ${isHome ? 'navbar__inner--home' : ''}`}>
        {!isHome && (
          <Link to="/" className="navbar__brand" aria-label="BrandYou Home">
            <div className="navbar__logo">
              <img src="/brandyou-icon.png" alt="BrandYou Logo" className="navbar__logo-img" />
            </div>
            <span className="navbar__brandname">
              BRAND<span className="brand-accent">YOU</span>
            </span>
          </Link>
        )}

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`navbar__link ${location.pathname === l.to ? 'navbar__link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/builder" className="navbar__cta" onClick={() => setMenuOpen(false)}>
            Build for Free
          </Link>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="navbar-toggle"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
