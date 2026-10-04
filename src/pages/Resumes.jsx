import { useState, useRef } from 'react';
import { X, Download, Eye, Globe, FileText, Briefcase, User, Code, Palette, GraduationCap } from 'lucide-react';
import './Resumes.css';

/* ── Resume Data ─────────────────────────────────────────────────── */
const SAMPLE = {
  name: 'Alex Morgan',
  title: 'Senior Software Engineer',
  email: 'alex@example.com',
  phone: '+1 (555) 234-5678',
  location: 'San Francisco, CA',
  website: 'alexmorgan.dev',
  linkedin: 'linkedin.com/in/alexmorgan',
  github: 'github.com/alexmorgan',
  summary: 'Seasoned full-stack engineer with 7+ years of experience building scalable web applications. Proven track record leading cross-functional teams and shipping products used by millions. Passionate about clean code, developer experience, and impactful products.',
  experience: [
    {
      role: 'Senior Software Engineer',
      company: 'TechCorp Inc.',
      period: 'Jan 2022 – Present',
      location: 'San Francisco, CA',
      bullets: [
        'Led development of microservices architecture serving 5M+ daily active users',
        'Reduced API latency by 40% through Redis caching and query optimization',
        'Mentored 4 junior engineers and conducted 100+ technical interviews',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'StartupXYZ',
      period: 'Jun 2019 – Dec 2021',
      location: 'New York, NY',
      bullets: [
        'Built the core product from 0 to 100K users in 18 months using React and Node.js',
        'Implemented real-time collaboration features using WebSockets',
        'Owned full CI/CD pipeline on AWS reducing deploy time by 60%',
      ],
    },
    {
      role: 'Junior Developer',
      company: 'WebAgency Co.',
      period: 'Aug 2017 – May 2019',
      location: 'Boston, MA',
      bullets: [
        'Developed 25+ client websites using React, Vue, and vanilla JavaScript',
        'Integrated third-party APIs (Stripe, Twilio, Salesforce) for enterprise clients',
      ],
    },
  ],
  education: [
    {
      degree: 'B.S. Computer Science',
      school: 'MIT',
      period: '2013 – 2017',
      gpa: '3.8 / 4.0',
    },
  ],
  skills: {
    Languages: ['JavaScript', 'TypeScript', 'Python', 'Rust', 'SQL'],
    Frameworks: ['React', 'Next.js', 'Node.js', 'FastAPI', 'GraphQL'],
    Cloud: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
    Tools: ['Git', 'PostgreSQL', 'Redis', 'Figma', 'Jira'],
  },
  certifications: ['AWS Solutions Architect – Professional', 'Google Cloud Professional Data Engineer'],
  awards: ['TechCorp Hackathon Winner 2023', 'Forbes 30 Under 30 – Technology 2022'],
};

/* ── Resume Templates Config ─────────────────────────────────────── */
const RESUME_TEMPLATES = [
  {
    id: 'executive-modern',
    name: 'Executive Modern',
    desc: 'Two-column layout with bold blue accents. Perfect for senior professionals.',
    category: 'professional',
    icon: <Briefcase size={22} />,
    accent: '#1e40af',
    bg: 'linear-gradient(135deg, #1e40af, #7c3aed)',
    tags: ['Two-Column', 'ATS Friendly', 'Corporate'],
    preview: 'https://images.unsplash.com/photo-1531972111231-7482a960e109?auto=format&w=600&q=80',
  },
  {
    id: 'clean-minimal',
    name: 'Clean Minimal',
    desc: 'Elegant single-column with generous whitespace. Timeless and recruiter-approved.',
    category: 'general',
    icon: <FileText size={22} />,
    accent: '#0f172a',
    bg: 'linear-gradient(135deg, #0f172a, #334155)',
    tags: ['Single Column', 'Minimal', 'All Industries'],
    preview: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&w=600&q=80',
  },
  {
    id: 'creative-edge',
    name: 'Creative Edge',
    desc: 'Vibrant sidebar with icon accents. Designed for creatives and designers.',
    category: 'creative',
    icon: <Palette size={22} />,
    accent: '#7c3aed',
    bg: 'linear-gradient(135deg, #7c3aed, #ec4899)',
    tags: ['Sidebar', 'Colorful', 'Creative'],
    preview: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&w=600&q=80',
  },
  {
    id: 'tech-pro',
    name: 'Technical Pro',
    desc: 'Skills matrix, dark header, and clean layout. Built for developers and engineers.',
    category: 'tech',
    icon: <Code size={22} />,
    accent: '#059669',
    bg: 'linear-gradient(135deg, #059669, #0891b2)',
    tags: ['Skills Matrix', 'Dark Header', 'Tech'],
    preview: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&w=600&q=80',
  },
  {
    id: 'academic-cv',
    name: 'Academic CV',
    desc: 'Publication-ready academic format with sections for research and presentations.',
    category: 'academic',
    icon: <GraduationCap size={22} />,
    accent: '#b45309',
    bg: 'linear-gradient(135deg, #b45309, #92400e)',
    tags: ['Academic', 'Publications', 'Multi-page'],
    preview: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&w=600&q=80',
  },
  {
    id: 'ats-optimized',
    name: 'ATS Optimized',
    desc: 'Plain, structured and scannable. Guaranteed to pass Applicant Tracking Systems.',
    category: 'general',
    icon: <User size={22} />,
    accent: '#374151',
    bg: 'linear-gradient(135deg, #374151, #111827)',
    tags: ['ATS Friendly', 'Structured', 'Universal'],
    preview: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&w=600&q=80',
  },
];

/* ── Individual Resume Renders ───────────────────────────────────── */

function ExecutiveModernResume({ data }) {
  return (
    <div className="resume executive-modern">
      <div className="em-sidebar">
        <div className="em-avatar">{data.name.split(' ').map(n=>n[0]).join('')}</div>
        <h2 className="em-name">{data.name}</h2>
        <p className="em-title">{data.title}</p>

        <div className="em-section">
          <h3>Contact</h3>
          <div className="em-contact-list">
            <span>📧 {data.email}</span>
            <span>📞 {data.phone}</span>
            <span>📍 {data.location}</span>
            <span>🌐 {data.website}</span>
            <span>💼 {data.linkedin}</span>
          </div>
        </div>

        <div className="em-section">
          <h3>Skills</h3>
          {Object.entries(data.skills).map(([cat, skills]) => (
            <div key={cat} className="em-skill-group">
              <div className="em-skill-label">{cat}</div>
              {skills.map(s => (
                <div key={s} className="em-skill-bar-wrap">
                  <span>{s}</span>
                  <div className="em-skill-bar"><div className="em-skill-fill" /></div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {data.certifications && (
          <div className="em-section">
            <h3>Certifications</h3>
            {data.certifications.map(c => <div key={c} className="em-cert">{c}</div>)}
          </div>
        )}
      </div>

      <div className="em-main">
        <div className="em-section">
          <h3>Professional Summary</h3>
          <p>{data.summary}</p>
        </div>

        <div className="em-section">
          <h3>Experience</h3>
          {data.experience.map((e, i) => (
            <div key={i} className="em-exp">
              <div className="em-exp-header">
                <div>
                  <div className="em-exp-role">{e.role}</div>
                  <div className="em-exp-co">{e.company} · {e.location}</div>
                </div>
                <span className="em-exp-period">{e.period}</span>
              </div>
              <ul>{e.bullets.map((b,j) => <li key={j}>{b}</li>)}</ul>
            </div>
          ))}
        </div>

        <div className="em-section">
          <h3>Education</h3>
          {data.education.map((e, i) => (
            <div key={i} className="em-edu">
              <strong>{e.degree}</strong> · {e.school}
              <span>{e.period} · GPA: {e.gpa}</span>
            </div>
          ))}
        </div>

        {data.awards && (
          <div className="em-section">
            <h3>Awards & Recognition</h3>
            {data.awards.map(a => <div key={a} className="em-award">🏆 {a}</div>)}
          </div>
        )}
      </div>
    </div>
  );
}

function CleanMinimalResume({ data }) {
  return (
    <div className="resume clean-minimal">
      <div className="cm-header">
        <div>
          <h1>{data.name}</h1>
          <p className="cm-title">{data.title}</p>
        </div>
        <div className="cm-contact">
          <span>{data.email}</span>
          <span>{data.phone}</span>
          <span>{data.location}</span>
          <span>{data.website}</span>
        </div>
      </div>
      <div className="cm-divider" />

      <div className="cm-section">
        <h2>Summary</h2>
        <p>{data.summary}</p>
      </div>

      <div className="cm-section">
        <h2>Experience</h2>
        {data.experience.map((e, i) => (
          <div key={i} className="cm-exp">
            <div className="cm-exp-top">
              <div><strong>{e.role}</strong> — {e.company}</div>
              <span>{e.period}</span>
            </div>
            <ul>{e.bullets.map((b,j) => <li key={j}>{b}</li>)}</ul>
          </div>
        ))}
      </div>

      <div className="cm-two-col">
        <div className="cm-section">
          <h2>Education</h2>
          {data.education.map((e,i) => (
            <div key={i}><strong>{e.degree}</strong><br />{e.school} · {e.period}</div>
          ))}
        </div>
        <div className="cm-section">
          <h2>Skills</h2>
          <div className="cm-skills">
            {Object.values(data.skills).flat().map(s => <span key={s}>{s}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function CreativeEdgeResume({ data }) {
  return (
    <div className="resume creative-edge">
      <div className="ce-sidebar">
        <div className="ce-avatar">{data.name.split(' ').map(n=>n[0]).join('')}</div>
        <div className="ce-name">{data.name}</div>
        <div className="ce-title">{data.title}</div>
        <div className="ce-contact">
          <div>✉ {data.email}</div>
          <div>📞 {data.phone}</div>
          <div>📍 {data.location}</div>
          <div>🌐 {data.website}</div>
        </div>
        <div className="ce-sec-title">Skills</div>
        {Object.entries(data.skills).map(([cat, skills]) => (
          <div key={cat} className="ce-skill-block">
            <div className="ce-skill-cat">{cat}</div>
            <div className="ce-skill-pills">
              {skills.map(s => <span key={s}>{s}</span>)}
            </div>
          </div>
        ))}
      </div>
      <div className="ce-main">
        <div className="ce-header">
          <h1>{data.name}</h1>
          <h2>{data.title}</h2>
        </div>
        <div className="ce-section">
          <div className="ce-sec-header">Profile</div>
          <p>{data.summary}</p>
        </div>
        <div className="ce-section">
          <div className="ce-sec-header">Experience</div>
          {data.experience.map((e,i) => (
            <div key={i} className="ce-exp">
              <div className="ce-exp-top">
                <strong>{e.role}</strong>
                <span className="ce-period">{e.period}</span>
              </div>
              <div className="ce-company">{e.company}</div>
              <ul>{e.bullets.map((b,j) => <li key={j}>{b}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className="ce-section">
          <div className="ce-sec-header">Education</div>
          {data.education.map((e,i) => (
            <div key={i} className="ce-edu">
              <strong>{e.degree}</strong> · {e.school} · {e.period}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TechProResume({ data }) {
  return (
    <div className="resume tech-pro">
      {/* Header */}
      <div className="tp-header">
        <div className="tp-header-left">
          <div className="tp-header-line" />
          <h1 className="tp-name">
            {data.name.split(' ').map((w, i) => (
              <span key={i} className="tp-name-word">{w}<br /></span>
            ))}
          </h1>
          <div className="tp-role-line">
            {data.title.toUpperCase()} — {data.github?.replace('github.com/','0X').slice(0,10) || '0X8F9A2B'}
          </div>
          <div className="tp-header-line tp-header-line--bot" />
        </div>
        <div className="tp-header-right">
          <div>{data.location}</div>
          <div>{data.email}</div>
          <div>{data.website}</div>
        </div>
      </div>

      {/* Summary */}
      <div className="tp-summary-block">
        <p>{data.summary}</p>
      </div>

      {/* Stats row */}
      <div className="tp-stats-row">
        <div className="tp-stat"><span className="tp-stat-val">6+</span><span className="tp-stat-lbl">YEARS EXP.</span></div>
        <div className="tp-stat"><span className="tp-stat-val">1M+</span><span className="tp-stat-lbl">DAILY USERS</span></div>
        <div className="tp-stat"><span className="tp-stat-val">2.4k</span><span className="tp-stat-lbl">GITHUB STARS</span></div>
        <div className="tp-stat"><span className="tp-stat-val">10k+</span><span className="tp-stat-lbl">PLATFORM ACTIVE</span></div>
      </div>

      {/* Two-column body */}
      <div className="tp-two-col">
        {/* Left: Experience */}
        <div className="tp-log-section">
          <div className="tp-log-header">
            <span className="tp-log-key">LOG:</span>
            <span className="tp-log-val"> EXPERIENCE</span>
          </div>
          {data.experience.map((e, i) => (
            <div key={i} className="tp-exp">
              <div className="tp-exp-header">
                <span className="tp-role">{e.role}</span>
                <span className="tp-period">{e.period}</span>
              </div>
              <div className="tp-company">{e.company.toUpperCase()}</div>
              <p className="tp-exp-desc">{e.bullets.join(' ')}</p>
            </div>
          ))}
        </div>

        {/* Right: Projects + Skills */}
        <div className="tp-log-section">
          <div className="tp-log-header">
            <span className="tp-log-key">LOG:</span>
            <span className="tp-log-val"> MODULES</span>
          </div>
          <div className="tp-module-card">
            <div className="tp-module-name">NovaBuild</div>
            <p className="tp-module-desc">AI-powered no-code platform. Managed full lifecycle from MVP to $500K ARR.</p>
            <div className="tp-module-tech">
              <span>React</span><span>GPT-4</span><span>Node</span>
            </div>
          </div>
          
          <div className="tp-module-card">
            <div className="tp-module-name">PayFlow</div>
            <p className="tp-module-desc">Real-time payment dash with ML fraud detection. $2M+ processed daily.</p>
            <div className="tp-module-tech">
              <span>Next.js</span><span>Go</span><span>Redis</span>
            </div>
          </div>

          <div className="tp-log-header" style={{ marginTop: '1rem' }}>
            <span className="tp-log-key">DEPENDENCIES</span>
          </div>
          {Object.entries(data.skills).map(([cat, skills]) => (
            <div key={cat} className="tp-dep-row">
              <div className="tp-dep-key">{cat.toUpperCase()}</div>
              <div className="tp-dep-val">{skills.join(', ')}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="tp-footer">
        <span className="tp-footer-icon">&lt;&gt;</span>
        <span>INTERACTIVE PORTFOLIO: brandyou.me/{data.name.toLowerCase().replace(' ', '-')}</span>
      </div>
    </div>
  );
}

function AcademicCVResume({ data }) {
  return (
    <div className="resume academic-cv">
      <div className="ac-header">
        <h1>{data.name}</h1>
        <p className="ac-title">{data.title}</p>
        <div className="ac-contact-row">
          <span>{data.email}</span><span>|</span>
          <span>{data.phone}</span><span>|</span>
          <span>{data.location}</span><span>|</span>
          <span>{data.website}</span>
        </div>
      </div>

      <div className="ac-section">
        <h2>Research Summary</h2>
        <p>{data.summary}</p>
      </div>

      <div className="ac-section">
        <h2>Academic & Professional Experience</h2>
        {data.experience.map((e,i) => (
          <div key={i} className="ac-exp">
            <div className="ac-exp-top">
              <strong>{e.role}</strong>, {e.company}
              <span className="ac-period">{e.period}</span>
            </div>
            <ul>{e.bullets.map((b,j) => <li key={j}>{b}</li>)}</ul>
          </div>
        ))}
      </div>

      <div className="ac-section">
        <h2>Education</h2>
        {data.education.map((e,i) => (
          <div key={i} className="ac-edu">
            <strong>{e.degree}</strong><br />
            {e.school} · {e.period} · GPA: {e.gpa}
          </div>
        ))}
      </div>

      <div className="ac-two-col">
        <div className="ac-section">
          <h2>Technical Skills</h2>
          {Object.entries(data.skills).map(([cat, skills]) => (
            <div key={cat} className="ac-skill-row">
              <strong>{cat}:</strong> {skills.join(', ')}
            </div>
          ))}
        </div>
        <div className="ac-section">
          <h2>Awards & Honors</h2>
          {data.awards?.map(a => <div key={a} className="ac-award">{a}</div>)}
          <h2 style={{marginTop:'1rem'}}>Certifications</h2>
          {data.certifications?.map(c => <div key={c} className="ac-cert">{c}</div>)}
        </div>
      </div>
    </div>
  );
}

function ATSResume({ data }) {
  return (
    <div className="resume ats-optimized">
      <div className="ats-header">
        <h1>{data.name}</h1>
        <div className="ats-contact">
          {data.email} | {data.phone} | {data.location} | {data.website}
        </div>
      </div>

      <div className="ats-section">
        <h2>PROFESSIONAL SUMMARY</h2>
        <p>{data.summary}</p>
      </div>

      <div className="ats-section">
        <h2>TECHNICAL SKILLS</h2>
        {Object.entries(data.skills).map(([cat, skills]) => (
          <div key={cat} className="ats-skill-line">
            <strong>{cat}:</strong> {skills.join(', ')}
          </div>
        ))}
      </div>

      <div className="ats-section">
        <h2>PROFESSIONAL EXPERIENCE</h2>
        {data.experience.map((e,i) => (
          <div key={i} className="ats-exp">
            <div className="ats-exp-header">
              <strong>{e.role}</strong> | {e.company} | {e.location}
              <span>{e.period}</span>
            </div>
            <ul>{e.bullets.map((b,j) => <li key={j}>{b}</li>)}</ul>
          </div>
        ))}
      </div>

      <div className="ats-section">
        <h2>EDUCATION</h2>
        {data.education.map((e,i) => (
          <div key={i}>
            <strong>{e.degree}</strong> | {e.school} | {e.period} | GPA: {e.gpa}
          </div>
        ))}
      </div>

      <div className="ats-section">
        <h2>CERTIFICATIONS</h2>
        {data.certifications?.map(c => <div key={c}>{c}</div>)}
      </div>
    </div>
  );
}

/* ── Resume Renderer ─────────────────────────────────────────────── */
function renderResume(id, data) {
  switch (id) {
    case 'executive-modern': return <ExecutiveModernResume data={data} />;
    case 'clean-minimal':    return <CleanMinimalResume data={data} />;
    case 'creative-edge':    return <CreativeEdgeResume data={data} />;
    case 'tech-pro':         return <TechProResume data={data} />;
    case 'academic-cv':      return <AcademicCVResume data={data} />;
    case 'ats-optimized':    return <ATSResume data={data} />;
    default:                 return <CleanMinimalResume data={data} />;
  }
}

/* ── Resume Preview Modal ────────────────────────────────────────── */
function ResumePreviewModal({ template, onClose }) {
  const printRef = useRef(null);
  const isDark = template.id === 'tech-pro';

  const handlePrint = () => {
    const content = printRef.current.innerHTML;
    const win = window.open('', '_blank');
    win.document.write(`
      <html>
        <head>
          <title>${template.name} — ${SAMPLE.name}</title>
          <link rel="stylesheet" href="/src/pages/Resumes.css">
          <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet">
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
            body { margin: 0; font-family: 'Inter', sans-serif; background: ${isDark ? '#0a0d10' : 'white'}; }
            .resume { box-shadow: none !important; }
          </style>
        </head>
        <body>${content}</body>
      </html>
    `);
    win.document.close();
    setTimeout(() => win.print(), 500);
  };

  return (
    <div className="res-modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="res-modal">
        <div className="res-modal-bar">
          <div className="res-modal-bar-left">
            <div className="res-browser-dots">
              <span className="res-dot red" /><span className="res-dot yellow" /><span className="res-dot green" />
            </div>
            <span className="res-modal-title">{template.name} Preview</span>
          </div>
          <div className="res-modal-bar-right">
            <button className="res-print-btn" onClick={handlePrint}>
              <Download size={15} /> Download PDF
            </button>
            <button className="res-close-btn" onClick={onClose}><X size={16} /></button>
          </div>
        </div>
        <div className="res-modal-body" style={isDark ? { background: '#0d1117' } : {}}>
          <div className="res-a4-wrap">
            <div className="res-a4" ref={printRef} style={isDark ? { background: '#0a0d10', boxShadow: '0 8px 32px rgba(16,185,129,0.15)' } : {}}>
              {renderResume(template.id, SAMPLE)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


/* ── Main Resumes Page ───────────────────────────────────────────── */
export default function Resumes() {
  const [previewResume, setPreviewResume] = useState(null);

  return (
    <div className="resumes-page">
      <div className="res-bg-glow" />

      <section className="res-hero">
        <div className="container">
          <div className="res-hero-badge">
            <FileText size={14} />
            <span>PDF Resume Templates</span>
          </div>
          <h1 className="res-hero-title">LAND YOUR <br /><span>DREAM JOB</span></h1>
          <p className="res-hero-subtitle">
            ATS-friendly, recruiter-approved resume templates. Fill in your details, preview, and download as PDF in seconds.
          </p>
        </div>
      </section>

      <section className="res-grid-section container">
        <div className="res-grid">
          {RESUME_TEMPLATES.map((t, i) => (
            <div key={t.id} className="res-card" style={{ '--delay': i }}>
              <div className="res-card-preview">
                <div className="res-card-accent-bar" style={{ background: t.bg }} />
                {t.id === 'tech-pro' ? (
                  /* Cyberpunk glimpse for Technical Pro */
                  <div className="res-card-doc tp-cyber-doc">
                    <div className="tp-cyber-line tp-cyber-line--green" />
                    <div className="tp-cyber-name">
                      <div className="tp-cyber-bar tp-cyber-bar--lg" />
                      <div className="tp-cyber-bar tp-cyber-bar--md" />
                    </div>
                    <div className="tp-cyber-divider" />
                    <div className="tp-cyber-stats">
                      <div className="tp-cyber-stat">6+</div>
                      <div className="tp-cyber-stat">1M+</div>
                      <div className="tp-cyber-stat">2.4k</div>
                    </div>
                    <div className="tp-cyber-divider" />
                    <div className="tp-cyber-grid">
                      <div>
                        <div className="tp-cyber-bar tp-cyber-bar--sm tp-cyber-bar--amber" />
                        <div className="tp-cyber-bar tp-cyber-bar--xs" />
                        <div className="tp-cyber-bar tp-cyber-bar--xs" />
                      </div>
                      <div>
                        <div className="tp-cyber-bar tp-cyber-bar--sm tp-cyber-bar--amber" />
                        <div className="tp-cyber-bar tp-cyber-bar--xs" />
                        <div className="tp-cyber-bar tp-cyber-bar--xs" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="res-card-doc">
                    {t.id === 'executive-modern' && <div className="res-doc-avatar" />}
                    <div className="res-doc-bar" />
                    <div className="res-doc-bar res-doc-bar--half res-doc-bar--amber" />
                    <div className="res-doc-divider" />
                    <div className="res-doc-bar--thin" />
                    <div className="res-doc-bar--xshort" />
                    <div className="res-doc-bar--thin" />
                    <div className="res-doc-bar--xshort" />
                    <div className="res-doc-divider" />
                    <div className="res-doc-bar--thin" />
                    <div className="res-doc-bar--xshort" />
                    <div className="res-doc-bar--thin" />
                  </div>
                )}
                <div className="res-card-preview-overlay">
                  <button className="res-preview-btn" onClick={() => setPreviewResume(t)}>
                    <Eye size={15} /> Preview
                  </button>
                </div>

              </div>
              <div className="res-card-body">
                <div className="res-card-icon" style={{ background: t.bg }}>{t.icon}</div>
                <div className="res-card-info">
                  <h3>{t.name}</h3>
                  <p>{t.desc}</p>
                  <div className="res-card-tags">
                    {t.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </div>
              <div className="res-card-footer">
                <button className="res-use-btn" onClick={() => setPreviewResume(t)}>
                  <Eye size={14} /> Preview Template
                </button>
                <button className="res-dl-btn" onClick={() => setPreviewResume(t)}>
                  <Download size={14} /> Use This
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {previewResume && (
        <ResumePreviewModal
          template={previewResume}
          onClose={() => setPreviewResume(null)}
        />
      )}
    </div>
  );
}
