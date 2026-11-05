import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  ChevronLeft, 
  ChevronRight, 
  Code, 
  Scissors, 
  Briefcase, 
  Activity, 
  Scale, 
  Clapperboard, 
  Search, 
  Download, 
  MousePointerClick, 
  FileText, 
  Globe, 
  Monitor, 
  Tablet, 
  Smartphone 
} from 'lucide-react';
import { TEMPLATES } from '../data/templates';
import './Home.css';

const UNIVERSE_TEMPLATES = [
  {
    title: 'NEON MATRIX',
    category: 'Tech / Engineering',
    desc: 'Optimized for code snippets and project documentation.',
    icon: <Code size={20} />,
    img: 'https://images.unsplash.com/photo-1564798605859-a4ab4a561b2a?auto=format&w=800&q=80&fit=crop'
  },
  {
    title: 'CHIC MINIMAL',
    category: 'Fashion / Editorial',
    desc: 'Large typography and bold imagery for creative souls.',
    icon: <Scissors size={20} />,
    img: 'https://images.unsplash.com/photo-1707740557687-29525d1e18c8?auto=format&w=800&q=80&fit=crop'
  },
  {
    title: 'EXECUTIVE SUITE',
    category: 'Business / Consulting',
    desc: 'Clean, trustworthy layout for high-stakes positions.',
    icon: <Briefcase size={20} />,
    img: 'https://images.unsplash.com/photo-1531972111231-7482a960e109?auto=format&w=800&q=80&fit=crop'
  },
  {
    title: 'CLINIC PRIME',
    category: 'Medical / Health',
    desc: 'Structured and professional for healthcare experts.',
    icon: <Activity size={20} />,
    img: 'https://images.unsplash.com/photo-1602857052438-7e9f27da2648?auto=format&w=800&q=80&fit=crop'
  },
  {
    title: 'JUSTICE PRO',
    category: 'Legal / Law',
    desc: 'Traditional elegance for the legal profession.',
    icon: <Scale size={20} />,
    img: 'https://images.unsplash.com/photo-1775144657610-9a6f171e522f?auto=format&w=800&q=80&fit=crop'
  },
  {
    title: 'SPOTLIGHT',
    category: 'Media / Entertainment',
    desc: 'Dynamic and media-rich for entertainers.',
    icon: <Clapperboard size={20} />,
    img: 'https://images.pexels.com/photos/17112938/pexels-photo-17112938.jpeg?auto=compress&cs=tinysrgb&w=800&q=80'
  }
];

const RESUMES = [
  { 
    title: 'Executive Modern', 
    category: 'Tech Leadership', 
    img: 'https://images.unsplash.com/photo-1693045181178-d5d83fb070c8?auto=format&w=800&q=80&fit=crop' 
  },
  { 
    title: 'Professional Classic', 
    category: 'Legal / Finance', 
    img: 'https://images.unsplash.com/photo-1610387879421-3839d64bcff4?auto=format&w=800&q=80&fit=crop' 
  },
  { 
    title: 'Creative Portfolio', 
    category: 'Design / Media', 
    img: 'https://images.unsplash.com/photo-1781606989267-92bbc56a2d52?auto=format&w=800&q=80&fit=crop' 
  },
  { 
    title: 'Clean Minimal', 
    category: 'General / Academic', 
    img: 'https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg?auto=compress&cs=tinysrgb&w=800&q=80' 
  }
];

const PDF_STYLES = [
  { 
    label: 'Style 01', 
    title: 'THE MODERN EXECUTIVE', 
    tags: ['Sans-Serif', 'High Contrast', 'Two Column'],
    featured: false
  },
  { 
    label: 'Style 02', 
    title: 'THE CLASSIC SCHOLAR', 
    tags: ['Serif', 'Traditional', 'Single Column'],
    featured: true
  },
  { 
    label: 'Style 03', 
    title: 'THE CREATIVE STUDIO', 
    tags: ['Experimental', 'Bold Accents', 'Custom Grid'],
    featured: false
  }
];

export default function Home() {
  const carouselRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - (clientWidth * 0.8) : scrollLeft + (clientWidth * 0.8);
      carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="home-container">
      {/* ── HERO SECTION ── */}
      <section className="hero-section">
        <div className="hero-left">
          <div className="sequin-grid" />
          
          <div className="hero-content">
            <div className="hero-badge">
              <img src="/brandyou-icon.png" alt="BrandYou" className="hero-badge-logo" />
              <span className="hero-badge-brand">Brand You</span>
              <div className="hero-badge-dot" />
              <span className="hero-badge-text">Templates Drop</span>
            </div>

            <h1 className="hero-title">
              CRAFT YOUR <br />
              <span className="hero-title-outline">DIGITAL</span> <br />
              IDENTITY
            </h1>

            <p className="hero-subtitle">
              By <b>Brand You</b>. Choose from 100+ premium templates. Build a responsive portfolio that lives on your own hosted subdomain in minutes.
            </p>

            <div className="hero-actions">
              <Link to="/builder" className="btn-start">
                START BUILDING
                <ArrowRight size={20} />
              </Link>
              <button className="btn-demo">
                <Play size={24} fill="currentColor" />
                Watch Demo
              </button>
            </div>
          </div>

          <div className="hero-watermark">YOU</div>
        </div>

        <div className="hero-right">
          <div className="marquee-container">
            <div className="marquee-col">
              {TEMPLATES.slice(0, 6).map((t, i) => (
                <img key={i} src={t.img || `https://images.unsplash.com/photo-${i % 2 === 0 ? '1499951360447-b19be8fe80f5' : '1649217708362-4368faa2559b'}?auto=format&w=600&q=80&fit=crop`} className="marquee-img" alt={`${t.name} Template Preview`} />
              ))}
              {TEMPLATES.slice(0, 6).map((t, i) => (
                <img key={`dup-${i}`} src={t.img || `https://images.unsplash.com/photo-${i % 2 === 0 ? '1499951360447-b19be8fe80f5' : '1649217708362-4368faa2559b'}?auto=format&w=600&q=80&fit=crop`} className="marquee-img" alt={`${t.name} Template Preview Duplicate`} />
              ))}
            </div>
            <div className="marquee-col marquee-col-offset">
              {TEMPLATES.slice(6, 12).map((t, i) => (
                <img key={i} src={t.img || `https://images.unsplash.com/photo-${i % 2 === 0 ? '1649094995015-047fcf337506' : '1526887593587-a307ea5d46b4'}?auto=format&w=600&q=80&fit=crop`} className="marquee-img" alt={`${t.name} Template Preview`} />
              ))}
              {TEMPLATES.slice(6, 12).map((t, i) => (
                <img key={`dup-${i}`} src={t.img || `https://images.unsplash.com/photo-${i % 2 === 0 ? '1649094995015-047fcf337506' : '1526887593587-a307ea5d46b4'}?auto=format&w=600&q=80&fit=crop`} className="marquee-img" alt={`${t.name} Template Preview Duplicate`} />
              ))}
            </div>
          </div>
          <div className="hero-right-overlay" />
        </div>
      </section>

      {/* ── COLLECTIONS SECTION ── */}
      <section className="collections-section">
        <div className="carousel-gradient" />
        <div className="carousel-overlay" />

        <div className="container">
          <div className="collections-header">
            <div>
              <span className="collections-tag">Collections</span>
              <h2 className="collections-title">THE TEMPLATE <br /> UNIVERSE</h2>
            </div>
            <div className="carousel-nav">
              <button className="nav-btn nav-btn-prev" onClick={() => scroll('left')}>
                <ChevronLeft size={24} />
              </button>
              <button className="nav-btn nav-btn-next" onClick={() => scroll('right')}>
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="carousel-track-wrapper">
            <div className="carousel-track" ref={carouselRef}>
              {UNIVERSE_TEMPLATES.map((t, i) => (
                <div key={i} className="template-universe-card">
                  <div className="universe-card-inner">
                    <img src={t.img} className="universe-card-img" alt={t.title} />
                    <div className="universe-card-overlay" />
                    <div className="universe-card-content">
                      <div className="card-category-tag">
                        <span style={{ color: 'var(--amber)' }}>{t.icon}</span>
                        <span className="card-category-name">{t.category}</span>
                      </div>
                      <h3 className="card-title">{t.title}</h3>
                      <p className="card-desc">{t.desc}</p>
                      <button className="btn-preview">
                        PREVIEW TEMPLATE
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="carousel-progress-container">
              <div className="carousel-progress-bar" style={{ width: `${scrollProgress}%` }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── RESUMES SECTION ── */}
      <section className="resumes-section">
        <div className="container">
          <div className="section-intro">
            <span className="intro-tag">Proven Success</span>
            <h2 className="intro-title">JOB-READY <span>RESUMES</span></h2>
            <p className="intro-desc">
              Designed by recruitment experts. Our resumes pass the ATS test and get you noticed by world-class companies.
            </p>
          </div>

          <div className="resumes-grid">
            {RESUMES.map((r, i) => (
              <div key={i} className="resume-card-wrapper">
                <div className="resume-preview-box">
                  <img src={r.img} className="resume-img" alt={r.title} />
                  <div className="resume-hover-overlay">
                    <Search className="resume-hover-icon" />
                  </div>
                </div>
                <h4 className="resume-title">{r.title}</h4>
                <span className="resume-category">{r.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PDF DESIGNS SECTION ── */}
      <section className="pdf-section">
        <div className="sequin-grid" />
        <div className="container">
          <div className="pdf-header">
            <div className="pdf-header-left">
              <span className="pdf-tag">Physical Assets</span>
              <h2 className="pdf-title">DOWNLOADABLE <br /> PDF DESIGNS</h2>
              <p className="pdf-desc">Export your digital brand into stunning, high-fidelity PDF documents optimized for printing and emailing.</p>
            </div>
            <div className="pdf-header-right">
              <span>Brand You Edition</span>
              <div className="header-line" />
              <span>2025</span>
            </div>
          </div>

          <div className="pdf-grid">
            {PDF_STYLES.map((s, i) => (
              <div key={i} className={`ticket-stub ${s.featured ? 'ticket-featured' : ''}`}>
                <div className="ticket-accent" />
                <div>
                  {s.featured && <div className="featured-badge">Featured</div>}
                  <span className="style-label">{s.label}</span>
                  <h4 className="ticket-title">{s.title.split(' ').map((w, idx) => (
                    <span key={idx}>{w} {idx === 1 && <br />}</span>
                  ))}</h4>
                  <div className="ticket-tags">
                    {s.tags.map((tag, idx) => (
                      <span key={idx} className="ticket-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="perforation" />
                  <div className="ticket-footer">
                    <div>
                      <span className="format-label">Format</span>
                      <span className="format-value">PDF v1.4</span>
                    </div>
                    <button className="btn-download">
                      <Download size={24} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SLIPSTREAM PATH SECTION ── */}
      <section className="path-section">
        <div className="container">
          <div className="path-header">
            <h2 className="path-title">THE SLIPSTREAM PATH</h2>
            <p className="path-desc">From concept to live portfolio in less time than it takes to brew a coffee.</p>
          </div>

          <div className="path-visual-container">
            <svg className="path-svg" viewBox="0 0 1200 400">
              <path 
                className="winding-path" 
                d="M100,200 Q300,100 500,250 T900,200" 
                stroke="var(--amber)" 
                strokeWidth="2" 
                fill="none" 
              />
            </svg>

            <div className="path-nodes">
              <div className="glass-node node-up">
                <div className="node-icon-box icon-amber">
                  <MousePointerClick size={32} color="white" />
                </div>
                <h3 className="node-title">CHOOSE</h3>
                <p className="node-desc">Select a base layout from our curated collection of 100+ templates.</p>
              </div>

              <div className="glass-node node-down">
                <div className="node-icon-box icon-primary-light">
                  <FileText size={32} color="white" />
                </div>
                <h3 className="node-title">FILL</h3>
                <p className="node-desc">Input your details or import directly from LinkedIn. No code required.</p>
              </div>

              <div className="glass-node node-mid">
                <div className="node-icon-box icon-white">
                  <Globe size={32} color="var(--primary)" />
                </div>
                <h3 className="node-title">HOST</h3>
                <p className="node-desc">Go live instantly on our high-speed global CDN with a unique subdomain.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESPONSIVENESS SECTION ── */}
      <section className="responsive-section">
        <div className="container">
          <div className="responsive-grid">
            <div className="responsive-content">
              <span className="responsive-tag">Responsiveness</span>
              <h2 className="responsive-title">LOOK GOOD ON <span>ANY SCREEN</span></h2>
              <p className="responsive-desc">Every template is handcrafted by Brand You to be 100% pixel-perfect on mobile, tablet, and desktop.</p>
              
              <div className="device-list">
                <div className="device-item device-item-first">
                  <div className="device-icon-box">
                    <Monitor size={24} />
                  </div>
                  <span className="device-label">Desktop Excellence</span>
                </div>
                <div className="device-item">
                  <div className="device-icon-box">
                    <Tablet size={24} />
                  </div>
                  <span className="device-label">Fluid Tablet Views</span>
                </div>
                <div className="device-item">
                  <div className="device-icon-box">
                    <Smartphone size={24} />
                  </div>
                  <span className="device-label">Mobile-First Logic</span>
                </div>
              </div>
            </div>

            <div className="responsive-visual">
              <div className="device-mockup mockup-desktop">
                <div className="mockup-screen">
                  <img src="https://images.unsplash.com/photo-1630233313373-a03df7d139c9?auto=format&w=1200&q=80&fit=crop" alt="Desktop" />
                  <div className="live-badge">
                    <div className="live-dot" />
                    <span className="live-url">Live: brandyou.me/alex</span>
                  </div>
                </div>
              </div>

              <div className="device-mockup mockup-tablet">
                <div className="mockup-screen">
                  <img src="https://images.unsplash.com/photo-1609915189900-455ffd52e50f?auto=format&w=800&q=80&fit=crop" alt="Tablet" />
                </div>
              </div>

              <div className="device-mockup mockup-mobile">
                <div className="mobile-speaker" />
                <div className="mockup-screen">
                  <img src="https://images.unsplash.com/photo-1625461291092-13d0c45608b3?auto=format&w=400&q=80&fit=crop" alt="Mobile" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="main-footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-logo-row">
              <div className="footer-logo-box">
                <img src="/brandyou-icon.png" alt="BrandYou Logo" className="footer-logo-img" />
              </div>
              <h2 className="footer-brand-title">BRAND<span style={{ color: 'var(--amber)' }}>YOU</span></h2>
            </div>
            <p className="footer-tagline">The world's leading platform for personal branding. Templates, hosting, and professional exports all in one place.</p>
            <button className="btn-footer-cta">
              BUILD FOR FREE
            </button>
            
            <div className="footer-bottom">
              <span>© 2025 BRAND YOU PLATFORM</span>
              <div className="footer-links">
                <a href="#" className="footer-link">TEMPLATES</a>
                <a href="#" className="footer-link">PRICING</a>
                <a href="#" className="footer-link">SHOWCASE</a>
                <a href="#" className="footer-link">SUPPORT</a>
              </div>
              <span className="footer-passion">BUILT FOR PROFESSIONALS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
