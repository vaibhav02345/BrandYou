import { ExternalLink, Sparkles, Globe, Layout } from 'lucide-react';
import './Showcase.css';

const SHOWCASE_ITEMS = [
  {
    name: 'Alex Johnson',
    role: 'Creative Director',
    template: 'Neon Terminal',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&w=800&q=80&fit=crop',
    url: 'brandyou.me/alex-j'
  },
  {
    name: 'Sarah Chen',
    role: 'Full Stack Engineer',
    template: 'Chic Minimal',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&w=800&q=80&fit=crop',
    url: 'brandyou.me/sarah-c'
  },
  {
    name: 'Marcus Thorne',
    role: 'Corporate Legal',
    template: 'Justice Pro',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&w=800&q=80&fit=crop',
    url: 'brandyou.me/marcus-t'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Fashion Designer',
    template: 'Studio White',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&w=800&q=80&fit=crop',
    url: 'brandyou.me/elena-r'
  }
];

export default function Showcase() {
  return (
    <div className="showcase-page">
      <div className="showcase-glow" />
      
      <section className="showcase-hero container">
        <div className="showcase-badge">
          <Sparkles size={14} />
          <span>LIVE UNIVERSE</span>
        </div>
        <h1 className="showcase-title">BUILT WITH <br /><span>BRAND YOU</span></h1>
        <p className="showcase-subtitle">Join 10,000+ professionals who have launched their digital identity on our platform.</p>
      </section>

      <section className="showcase-grid container">
        {SHOWCASE_ITEMS.map((item, i) => (
          <div key={i} className="showcase-card">
            <div className="showcase-img-wrapper">
              <img src={item.img} alt={item.name} />
              <div className="showcase-hover">
                <a href={`https://${item.url}`} target="_blank" rel="noreferrer" className="btn-visit">
                  <span>VISIT SITE</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
            <div className="showcase-content">
              <div className="showcase-header">
                <h3>{item.name}</h3>
                <span className="showcase-role">{item.role}</span>
              </div>
              <div className="showcase-footer">
                <div className="showcase-meta">
                  <Layout size={14} color="var(--amber)" />
                  <span>{item.template}</span>
                </div>
                <div className="showcase-url">
                  <Globe size={14} />
                  <span>{item.url}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="showcase-cta container">
        <div className="cta-box">
          <h2>READY TO BE <br />THE NEXT?</h2>
          <button className="btn-start-now">CREATE YOUR PORTFOLIO</button>
        </div>
      </section>
    </div>
  );
}
