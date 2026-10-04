import { useEffect } from 'react';
import { X, GitBranch, Link2, Mail, MapPin, Globe, ExternalLink, AtSign, Hash, Play } from 'lucide-react';
import { PORTFOLIO_SAMPLE_DATA } from '../data/portfolioSampleData';
import './PortfolioPreview.css';

/* ─── Platform Handle Badge ─────────────────────────────────────── */
function HandleBadge({ handle }) {
  const icons = {
    GitHub: <GitBranch size={13} />,
    LinkedIn: <Link2 size={13} />,
    Twitter: <AtSign size={13} />,
    Instagram: <Hash size={13} />,
    YouTube: <Play size={13} />,
    'Stack Overflow': <AtSign size={13} />,
    npm: <GitBranch size={13} />,
    Behance: <ExternalLink size={13} />,
    Dribbble: <Hash size={13} />,
    Vimeo: <Play size={13} />,
    ResearchGate: <ExternalLink size={13} />,
    ORCID: <Link2 size={13} />,
    PubMed: <ExternalLink size={13} />,
    Avvo: <Link2 size={13} />,
    Martindale: <Link2 size={13} />,
    Website: <Globe size={13} />,
    AngelList: <ExternalLink size={13} />,
    TikTok: <Play size={13} />,
    IMDb: <Play size={13} />,
    'Google Scholar': <ExternalLink size={13} />,
  };
  return (
    <a href={handle.url} className="handle-badge" onClick={e => e.preventDefault()}>
      <span className="handle-icon">{icons[handle.platform] || <Globe size={13} />}</span>
      <span className="handle-label">{handle.platform}</span>
      <span className="handle-val">{handle.handle}</span>
    </a>
  );
}

/* ─── DEVELOPER TEMPLATE ────────────────────────────────────────── */
function DeveloperTemplate({ data }) {
  return (
    <div className="pv-dev">
      <header className="pv-dev-hero">
        <div className="pv-dev-avatar">
          <img src={data.avatar} alt={data.name} />
        </div>
        <div className="pv-dev-intro">
          <div className="pv-dev-status">
            <span className="status-dot" />
            <span>Available for opportunities</span>
          </div>
          <h1 className="pv-dev-name">{data.name}</h1>
          <p className="pv-dev-title">{data.title}</p>
          <p className="pv-dev-subtitle">{data.subtitle}</p>
          <div className="pv-dev-meta">
            <span><MapPin size={13} />{data.location}</span>
            <span><Mail size={13} />{data.email}</span>
            <span><Globe size={13} />{data.website}</span>
          </div>
          <div className="pv-dev-handles">
            {data.handles.map(h => <HandleBadge key={h.platform} handle={h} />)}
          </div>
        </div>
      </header>

      <div className="pv-dev-body">
        <div className="pv-section">
          <div className="pv-section-label">About</div>
          <p className="pv-dev-bio">{data.bio}</p>
        </div>

        <div className="pv-section">
          <div className="pv-section-label">Skills</div>
          <div className="pv-dev-skills-grid">
            {Object.entries(data.skills).map(([cat, skills]) => (
              <div key={cat} className="pv-skill-group">
                <div className="pv-skill-cat">{cat}</div>
                <div className="pv-skill-tags">
                  {skills.map(s => <span key={s} className="pv-skill-tag">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pv-section">
          <div className="pv-section-label">Projects</div>
          <div className="pv-dev-projects">
            {data.projects.map(p => (
              <div key={p.name} className="pv-dev-project-card" style={{ '--grad': p.gradient }}>
                <div className="pv-proj-top">
                  <h3>{p.name}</h3>
                  <div className="pv-proj-links">
                    <a href={p.github} onClick={e => e.preventDefault()}><GitBranch size={15} /></a>
                    <a href={p.live} onClick={e => e.preventDefault()}><ExternalLink size={15} /></a>
                  </div>
                </div>
                <p>{p.desc}</p>
                <div className="pv-proj-tech">
                  {p.tech.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pv-section">
          <div className="pv-section-label">Experience</div>
          <div className="pv-dev-timeline">
            {data.experience.map((e, i) => (
              <div key={i} className="pv-timeline-item">
                <div className="pv-tl-dot" />
                <div className="pv-tl-content">
                  <div className="pv-tl-top">
                    <span className="pv-tl-role">{e.role}</span>
                    <span className="pv-tl-period">{e.period}</span>
                  </div>
                  <div className="pv-tl-company">{e.company}</div>
                  <p className="pv-tl-desc">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── DESIGNER TEMPLATE ─────────────────────────────────────────── */
function DesignerTemplate({ data }) {
  return (
    <div className="pv-design">
      <aside className="pv-design-sidebar">
        <div className="pv-design-avatar-wrap">
          <img src={data.avatar} alt={data.name} className="pv-design-avatar" />
        </div>
        <h1 className="pv-design-name">{data.name}</h1>
        <p className="pv-design-title">{data.title}</p>
        <p className="pv-design-sub">{data.subtitle}</p>
        <div className="pv-design-handles">
          {data.handles.map(h => <HandleBadge key={h.platform} handle={h} />)}
        </div>
        <div className="pv-design-contact">
          <span><MapPin size={12} />{data.location}</span>
          <span><Mail size={12} />{data.email}</span>
          <span><Globe size={12} />{data.website}</span>
        </div>
        <div className="pv-design-skills-list">
          {data.skills.map(s => (
            <div key={s} className="pv-design-skill-item">
              <span>{s}</span>
              <div className="pv-design-skill-bar">
                <div className="pv-design-skill-fill" />
              </div>
            </div>
          ))}
        </div>
      </aside>

      <main className="pv-design-main">
        <div className="pv-design-bio-block">
          <h2>About</h2>
          <p>{data.bio}</p>
        </div>
        <div className="pv-design-work">
          <h2>Selected Work</h2>
          <div className="pv-design-portfolio-grid">
            {data.portfolio.map(item => (
              <div key={item.name} className="pv-design-portfolio-card">
                <div className="pv-design-img-wrap">
                  <img src={item.img} alt={item.name} />
                  <div className="pv-design-img-overlay"><ExternalLink size={20} /></div>
                </div>
                <div className="pv-design-portfolio-info">
                  <span className="pv-design-portfolio-cat">{item.category}</span>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pv-design-exp">
          <h2>Experience</h2>
          {data.experience.map((e, i) => (
            <div key={i} className="pv-design-exp-item">
              <div className="pv-design-exp-left">
                <span className="pv-design-exp-period">{e.period}</span>
              </div>
              <div className="pv-design-exp-right">
                <div className="pv-design-exp-role">{e.role}</div>
                <div className="pv-design-exp-co">{e.company}</div>
                <p>{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

/* ─── CREATIVE TEMPLATE ─────────────────────────────────────────── */
function CreativeTemplate({ data }) {
  return (
    <div className="pv-creative">
      <div className="pv-creative-hero">
        <div className="pv-creative-hero-bg" style={{ backgroundImage: `url(${data.portfolio?.[0]?.img})` }} />
        <div className="pv-creative-hero-overlay" />
        <div className="pv-creative-hero-content">
          <div className="pv-creative-avatar"><img src={data.avatar} alt={data.name} /></div>
          <h1>{data.name}</h1>
          <p className="pv-creative-title">{data.title}</p>
          <p className="pv-creative-sub">{data.subtitle}</p>
          <div className="pv-creative-handles">
            {data.handles.map(h => <HandleBadge key={h.platform} handle={h} />)}
          </div>
        </div>
      </div>

      <div className="pv-creative-bio">
        <div className="pv-creative-bio-inner">
          <p>{data.bio}</p>
          <div className="pv-creative-contact">
            <span><MapPin size={13} />{data.location}</span>
            <span><Mail size={13} />{data.email}</span>
          </div>
        </div>
      </div>

      <div className="pv-creative-skills-section">
        <h2>Expertise</h2>
        <div className="pv-creative-skills">
          {data.skills.map(s => <span key={s} className="pv-creative-skill">{s}</span>)}
        </div>
      </div>

      <div className="pv-creative-gallery">
        <h2>Portfolio</h2>
        <div className="pv-creative-masonry">
          {data.portfolio.map((item) => (
            <div key={item.name} className="pv-creative-tile">
              <img src={item.img} alt={item.name} />
              <div className="pv-creative-tile-info">
                <span className="pv-creative-tile-cat">{item.category}</span>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pv-creative-exp">
        <h2>Experience</h2>
        {data.experience.map((e, i) => (
          <div key={i} className="pv-creative-exp-item">
            <span className="pv-creative-exp-period">{e.period}</span>
            <div>
              <strong>{e.role}</strong> · {e.company}
              <p>{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── PROFESSIONAL TEMPLATE ─────────────────────────────────────── */
function ProfessionalTemplate({ data }) {
  return (
    <div className="pv-pro">
      <header className="pv-pro-header">
        <div className="pv-pro-header-inner">
          <div className="pv-pro-avatar-wrap">
            <img src={data.avatar} alt={data.name} className="pv-pro-avatar" />
          </div>
          <div className="pv-pro-intro">
            <h1>{data.name}</h1>
            <p className="pv-pro-title">{data.title}</p>
            <p className="pv-pro-sub">{data.subtitle}</p>
            <div className="pv-pro-creds">
              {data.credentials?.map(c => <span key={c} className="pv-pro-cred">{c}</span>)}
            </div>
            <div className="pv-pro-contact-row">
              <span><MapPin size={13} />{data.location}</span>
              <span><Mail size={13} />{data.email}</span>
              {data.phone && <span>{data.phone}</span>}
            </div>
          </div>
        </div>
        <div className="pv-pro-handles-row">
          {data.handles.map(h => <HandleBadge key={h.platform} handle={h} />)}
        </div>
      </header>

      {data.achievements && (
        <section className="pv-pro-metrics">
          {data.achievements.map(a => (
            <div key={a.label} className="pv-pro-metric">
              <div className="pv-pro-metric-num">{a.metric}</div>
              <div className="pv-pro-metric-label">{a.label}</div>
            </div>
          ))}
        </section>
      )}

      <div className="pv-pro-section">
        <div className="pv-pro-section-title">Executive Summary</div>
        <p className="pv-pro-bio">{data.bio}</p>
      </div>

      {data.expertise && (
        <div className="pv-pro-section">
          <div className="pv-pro-section-title">Areas of Expertise</div>
          <div className="pv-pro-expertise">
            {data.expertise.map(e => <span key={e} className="pv-pro-expertise-tag">{e}</span>)}
          </div>
        </div>
      )}

      <div className="pv-pro-section">
        <div className="pv-pro-section-title">Career History</div>
        {data.experience.map((e, i) => (
          <div key={i} className="pv-pro-exp-item">
            <div className="pv-pro-exp-bar" />
            <div className="pv-pro-exp-body">
              <div className="pv-pro-exp-header">
                <span className="pv-pro-exp-role">{e.role}</span>
                <span className="pv-pro-exp-period">{e.period}</span>
              </div>
              <div className="pv-pro-exp-co">{e.company}</div>
              <p>{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── HEALTHCARE TEMPLATE ───────────────────────────────────────── */
function HealthcareTemplate({ data }) {
  return (
    <div className="pv-health">
      <header className="pv-health-header">
        <div className="pv-health-avatar-wrap"><img src={data.avatar} alt={data.name} /></div>
        <div className="pv-health-intro">
          <h1>{data.name}</h1>
          <p className="pv-health-title">{data.title}</p>
          <p className="pv-health-sub">{data.subtitle}</p>
          <div className="pv-health-creds">
            {data.credentials?.map(c => <span key={c} className="pv-health-cred">{c}</span>)}
          </div>
        </div>
        <div className="pv-health-contact-block">
          <div><MapPin size={13} />{data.location}</div>
          <div><Mail size={13} />{data.email}</div>
          {data.hospital && <div>🏥 {data.hospital}</div>}
        </div>
      </header>

      <div className="pv-health-handles">
        {data.handles.map(h => <HandleBadge key={h.platform} handle={h} />)}
      </div>

      <div className="pv-health-section">
        <h2>Clinical Profile</h2>
        <p>{data.bio}</p>
      </div>

      <div className="pv-health-section">
        <h2>Specialties</h2>
        <div className="pv-health-specs">
          {data.specialties?.map(s => <span key={s} className="pv-health-spec">{s}</span>)}
        </div>
      </div>

      {data.publications && (
        <div className="pv-health-section">
          <h2>Selected Publications</h2>
          <div className="pv-health-pubs">
            {data.publications.map((p, i) => (
              <div key={i} className="pv-health-pub">
                <div className="pv-health-pub-title">{p.title}</div>
                <div className="pv-health-pub-meta">
                  <span className="pv-health-pub-journal">{p.journal}</span>
                  <span className="pv-health-pub-year">{p.year}</span>
                  <span className="pv-health-pub-cite">📖 {p.citations} citations</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="pv-health-section">
        <h2>Clinical Experience</h2>
        {data.experience.map((e, i) => (
          <div key={i} className="pv-health-exp">
            <div className="pv-health-exp-top">
              <strong>{e.role}</strong>
              <span>{e.period}</span>
            </div>
            <div className="pv-health-exp-co">{e.company}</div>
            <p>{e.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── LEGAL TEMPLATE ────────────────────────────────────────────── */
function LegalTemplate({ data }) {
  return (
    <div className="pv-legal">
      <header className="pv-legal-header">
        <div className="pv-legal-crest">⚖</div>
        <div className="pv-legal-name-block">
          <h1>{data.name}</h1>
          <div className="pv-legal-divider" />
          <p className="pv-legal-title">{data.title}</p>
          <p className="pv-legal-sub">{data.subtitle}</p>
        </div>
        <div className="pv-legal-avatar-wrap">
          <img src={data.avatar} alt={data.name} />
        </div>
      </header>

      <div className="pv-legal-contact-bar">
        <span>{data.firm}</span>
        <span><MapPin size={12} />{data.location}</span>
        <span><Mail size={12} />{data.email}</span>
        {data.phone && <span>{data.phone}</span>}
      </div>

      <div className="pv-legal-handles">
        {data.handles.map(h => <HandleBadge key={h.platform} handle={h} />)}
      </div>

      <div className="pv-legal-body">
        <div className="pv-legal-left">
          <div className="pv-legal-section">
            <h2>About</h2>
            <p>{data.bio}</p>
          </div>
          <div className="pv-legal-section">
            <h2>Credentials</h2>
            <ul className="pv-legal-creds">
              {data.credentials?.map(c => <li key={c}>{c}</li>)}
            </ul>
          </div>
          <div className="pv-legal-section">
            <h2>Experience</h2>
            {data.experience.map((e, i) => (
              <div key={i} className="pv-legal-exp">
                <strong>{e.role}</strong>
                <div className="pv-legal-exp-co">{e.company} · {e.period}</div>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="pv-legal-right">
          <div className="pv-legal-section">
            <h2>Practice Areas</h2>
            <ul className="pv-legal-areas">
              {data.practiceAreas?.map(a => <li key={a}>{a}</li>)}
            </ul>
          </div>
          <div className="pv-legal-section">
            <h2>Notable Matters</h2>
            {data.matters?.map((m, i) => (
              <div key={i} className="pv-legal-matter">
                <div className="pv-legal-matter-val">{m.value}</div>
                <div className="pv-legal-matter-deal">{m.deal}</div>
                <span className="pv-legal-matter-type">{m.type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── ENTERTAINMENT TEMPLATE ────────────────────────────────────── */
function EntertainmentTemplate({ data }) {
  return (
    <div className="pv-ent">
      <div className="pv-ent-hero">
        <div className="pv-ent-hero-content">
          <div className="pv-ent-avatar"><img src={data.avatar} alt={data.name} /></div>
          <h1 className="pv-ent-name">{data.name}</h1>
          <p className="pv-ent-title">{data.title}</p>
          <p className="pv-ent-sub">{data.subtitle}</p>
          <div className="pv-ent-handles">
            {data.handles.map(h => <HandleBadge key={h.platform} handle={h} />)}
          </div>
        </div>
      </div>

      {data.stats && (
        <section className="pv-ent-stats">
          {data.stats.map(s => (
            <div key={s.label} className="pv-ent-stat">
              <div className="pv-ent-stat-num">{s.metric}</div>
              <div className="pv-ent-stat-label">{s.label}</div>
            </div>
          ))}
        </section>
      )}

      <div className="pv-ent-section">
        <h2>About</h2>
        <p>{data.bio}</p>
        <div className="pv-ent-contact">
          <span><MapPin size={13} />{data.location}</span>
          <span><Mail size={13} />{data.email}</span>
        </div>
      </div>

      {data.credits && (
        <div className="pv-ent-section">
          <h2>Screen Credits</h2>
          <div className="pv-ent-credits">
            {data.credits.map((c, i) => (
              <div key={i} className="pv-ent-credit-card">
                <div className="pv-ent-credit-num">0{i + 1}</div>
                <div className="pv-ent-credit-body">
                  <h3>{c.title}</h3>
                  <div className="pv-ent-credit-type">{c.type}</div>
                  <div className="pv-ent-credit-role">Role: {c.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="pv-ent-section">
        <h2>Career</h2>
        {data.experience.map((e, i) => (
          <div key={i} className="pv-ent-exp">
            <div className="pv-ent-exp-dot" />
            <div>
              <strong>{e.role}</strong> · {e.company}
              <div className="pv-ent-exp-period">{e.period}</div>
              <p>{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── STUDENT TEMPLATE ──────────────────────────────────────────── */
function StudentTemplate({ data }) {
  return (
    <div className="pv-student">
      <header className="pv-student-hero">
        <div className="pv-student-avatar">
          <img src={data.avatar} alt={data.name} />
        </div>
        <div className="pv-student-intro">
          <h1>{data.name}</h1>
          <p className="pv-student-title">{data.title}</p>
          <p className="pv-student-sub">{data.subtitle}</p>
          <div className="pv-student-meta">
            <span><MapPin size={13} />{data.location}</span>
            <span><Mail size={13} />{data.email}</span>
          </div>
          <div className="pv-student-handles">
            {data.handles.map(h => <HandleBadge key={h.platform} handle={h} />)}
          </div>
        </div>
      </header>

      <div className="pv-student-section">
        <h2>About Me</h2>
        <p>{data.bio}</p>
      </div>

      <div className="pv-student-section">
        <h2>Tech Stack</h2>
        <div className="pv-student-skills-grid">
          {Object.entries(data.skills).map(([cat, skills]) => (
            <div key={cat} className="pv-student-skill-group">
              <div className="pv-student-skill-cat">{cat}</div>
              <div className="pv-student-skill-tags">
                {skills.map(s => <span key={s} className="pv-student-skill">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pv-student-section">
        <h2>Projects</h2>
        <div className="pv-student-projects">
          {data.projects.map(p => (
            <div key={p.name} className="pv-student-project" style={{ '--grad': p.gradient }}>
              <div className="pv-student-proj-gradient" />
              <div className="pv-student-proj-body">
                <div className="pv-student-proj-top">
                  <h3>{p.name}</h3>
                  <div className="pv-student-proj-links">
                    <a href={p.github} onClick={e => e.preventDefault()}><GitBranch size={14} /></a>
                    <a href={p.live} onClick={e => e.preventDefault()}><ExternalLink size={14} /></a>
                  </div>
                </div>
                <p>{p.desc}</p>
                <div className="pv-student-proj-tech">
                  {p.tech.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pv-student-section">
        <h2>Experience</h2>
        {data.experience.map((e, i) => (
          <div key={i} className="pv-student-exp">
            <div className="pv-student-exp-top">
              <strong>{e.role}</strong>
              <span>{e.period}</span>
            </div>
            <div className="pv-student-exp-co">{e.company}</div>
            <p>{e.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Category → Data Map ───────────────────────────────────────── */
const CATEGORY_MAP = {
  'dev-minimal': 'developer', 'dev-neon': 'developer', 'dev-glass': 'developer', 'dev-mono': 'developer',
  'design-bold': 'designer', 'design-minimal': 'designer', 'design-gradient': 'designer', 'design-dark': 'designer',
  'creative-photo': 'creative', 'creative-writer': 'creative', 'creative-artist': 'creative', 'creative-video': 'creative',
  'pro-corporate': 'professional', 'pro-consultant': 'professional', 'pro-researcher': 'professional',
  'health-prime': 'healthcare',
  'legal-justice': 'legal',
  'ent-spotlight': 'entertainment',
  'student-fresh': 'student', 'student-bold': 'student',
};

function renderTemplate(template) {
  const category = CATEGORY_MAP[template.id] || 'developer';
  const data = PORTFOLIO_SAMPLE_DATA[category];
  switch (category) {
    case 'developer':    return <DeveloperTemplate data={data} />;
    case 'designer':     return <DesignerTemplate data={data} />;
    case 'creative':     return <CreativeTemplate data={data} />;
    case 'professional': return <ProfessionalTemplate data={data} />;
    case 'healthcare':   return <HealthcareTemplate data={data} />;
    case 'legal':        return <LegalTemplate data={data} />;
    case 'entertainment':return <EntertainmentTemplate data={data} />;
    case 'student':      return <StudentTemplate data={data} />;
    default:             return <DeveloperTemplate data={data} />;
  }
}

/* ─── Main Modal ────────────────────────────────────────────────── */
export default function PortfolioPreview({ template, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  if (!template) return null;

  return (
    <div className="pv-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="pv-modal">
        <div className="pv-topbar">
          <div className="pv-topbar-left">
            <div className="pv-browser-dots">
              <span className="pv-dot pv-dot--red" />
              <span className="pv-dot pv-dot--yellow" />
              <span className="pv-dot pv-dot--green" />
            </div>
            <div className="pv-url-bar">
              <Globe size={12} />
              <span>preview — {template.name}</span>
            </div>
          </div>
          <div className="pv-topbar-right">
            <span className="pv-template-badge">{template.name}</span>
            <button className="pv-close-btn" onClick={onClose} title="Close (Esc)">
              <X size={17} />
            </button>
          </div>
        </div>
        <div className="pv-content">
          {renderTemplate(template)}
        </div>
      </div>
    </div>
  );
}
