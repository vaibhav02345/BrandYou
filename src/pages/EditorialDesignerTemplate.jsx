import { useState } from 'react';
import { ArrowDown, ArrowUpRight, Mail, Minus, Plus } from 'lucide-react';
import './EditorialDesignerTemplate.css';

const PROJECT_OVERVIEWS = {
  'Nike Brand Refresh': {
    summary: 'A digital-first identity direction for a global campaign.',
    focus: 'Brand identity and creative direction across campaign touchpoints.',
    image: 'https://images.pexels.com/photos/8979071/pexels-photo-8979071.jpeg',
    alt: 'Nike Air shoes photographed by Gustavo Gimenez on Pexels.',
  },
  'Airbnb App Redesign': {
    summary: 'An end-to-end redesign of the Airbnb mobile experience.',
    focus: 'Mobile product design, from discovery through booking.',
    image: 'https://images.unsplash.com/photo-1783110688453-4bf5d4c87a61?auto=format&fit=crop&w=1400&q=85',
    alt: 'Warm, sunlit travel-stay interior by Kevin Lieder on Unsplash; illustrative project imagery.',
  },
  'Luma Design System': {
    summary: 'A component library shaped to bring consistency to product work.',
    focus: 'Reusable components and shared patterns for product teams.',
    image: 'https://images.pexels.com/photos/7598019/pexels-photo-7598019.jpeg',
    alt: 'Branding and design-system samples arranged on a table, photographed by Leeloo The First on Pexels.',
  },
};

const PRACTICE_AREAS = [
  { title: 'Product', items: ['Human-centered design', 'User research', 'Mobile app design'] },
  { title: 'Systems', items: ['Design systems', 'Prototyping', 'Figma · Framer'] },
  { title: 'Identity', items: ['Brand identity', 'Motion design', 'Illustrator'] },
];

function scrollToSection(event) {
  const targetId = event.currentTarget.getAttribute('href')?.slice(1);
  const target = targetId ? document.getElementById(targetId) : null;

  if (!target) return;

  event.preventDefault();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
}

function EditorialProject({ project, index, expandedProject, onToggle }) {
  const overview = PROJECT_OVERVIEWS[project.name] || {
    summary: `Selected work in ${project.category.toLowerCase()}.`,
    focus: project.category,
    alt: `Cover image for ${project.name}`,
  };
  const variant = index === 0 ? 'featured' : index === 1 ? 'mobile' : 'systems';
  const overviewId = `pv-ed-overview-${index}`;
  const isExpanded = expandedProject === overviewId;

  return (
    <article className={`pv-ed-project pv-ed-project--${variant}`}>
      <figure className="pv-ed-project__media">
        <img
          src={overview.image || project.img}
          alt={overview.alt}
          width="1200"
          height="800"
          loading={index === 0 ? 'eager' : 'lazy'}
          style={{ width: '100%', height: '100%' }}
        />
      </figure>

      <div className="pv-ed-project__content">
        <p className="pv-ed-project__category">{project.category}</p>
        <h3>{project.name}</h3>
        <p className="pv-ed-project__summary">{overview.summary}</p>
        <button
          className="pv-ed-project__toggle"
          type="button"
          aria-expanded={isExpanded}
          aria-controls={overviewId}
          onClick={() => onToggle(isExpanded ? null : overviewId)}
        >
          <span>{isExpanded ? 'Close project overview' : 'Read project overview'}</span>
          {isExpanded ? <Minus size={16} aria-hidden="true" /> : <Plus size={16} aria-hidden="true" />}
        </button>
      </div>

      <div className="pv-ed-project__overview" id={overviewId} hidden={!isExpanded}>
        <span>Design focus</span>
        <p>{overview.focus}</p>
      </div>
    </article>
  );
}

export default function EditorialDesignerTemplate({ data }) {
  const [expandedProject, setExpandedProject] = useState(null);
  const role = 'Staff Product Designer & Creative Director';

  return (
    <div className="pv-ed">
      <header className="pv-ed-masthead" id="pv-ed-top">
        <a className="pv-ed-wordmark" href="#pv-ed-top" onClick={scrollToSection}>
          <span className="pv-ed-monogram" aria-hidden="true">S</span>
          <span>{data.name}</span>
        </a>
        <nav className="pv-ed-nav" aria-label="Portfolio navigation">
          <a href="#pv-ed-work" onClick={scrollToSection}>Work</a>
          <a href="#pv-ed-about" onClick={scrollToSection}>About</a>
          <a href="#pv-ed-experience" onClick={scrollToSection}>Experience</a>
        </nav>
        <a className="pv-ed-nav-contact" href={`mailto:${data.email}`}>
          <span>Email Sofia</span>
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </header>

      <main>
        <section className="pv-ed-intro" aria-labelledby="pv-ed-name">
          <div className="pv-ed-intro__name-block">
            <h1 id="pv-ed-name">
              <span>Sofia</span>
              <span>Laurent<span className="pv-ed-period">.</span></span>
            </h1>
            <p className="pv-ed-role">{role}</p>
          </div>
          <div className="pv-ed-intro__statement">
            <p className="pv-ed-lead">Thoughtful products, clear systems, and identities designed for real people.</p>
            <p className="pv-ed-intro__copy">
              I work across human-centered digital products, mobile experiences, design systems, and brand identity—from the first question to the details people touch.
            </p>
            <a className="pv-ed-work-link" href="#pv-ed-work" onClick={scrollToSection}>
              View selected work
              <ArrowDown size={15} aria-hidden="true" />
            </a>
            <p className="pv-ed-location">{data.location}</p>
          </div>
        </section>

        <section className="pv-ed-work" id="pv-ed-work" aria-labelledby="pv-ed-work-title">
          <div className="pv-ed-section-heading">
            <h2 id="pv-ed-work-title">Selected work</h2>
            <p>Product, identity, and systems work—each shaped around its own context.</p>
          </div>
          <div className="pv-ed-projects">
            {data.portfolio.map((project, index) => (
              <EditorialProject
                key={project.name}
                project={project}
                index={index}
                expandedProject={expandedProject}
                onToggle={setExpandedProject}
              />
            ))}
          </div>
        </section>

        <section className="pv-ed-about" id="pv-ed-about" aria-labelledby="pv-ed-about-title">
          <div className="pv-ed-about__heading">
            <h2 id="pv-ed-about-title">Designing the whole experience.</h2>
            <p>From the system underneath to the moment a person meets it.</p>
          </div>
          <div className="pv-ed-about__body">
            <p>
              I bring product thinking, visual craft, and an understanding of how people use digital tools together. The work moves between defining the experience and making sure its parts feel like they belong to the same whole.
            </p>
            <div className="pv-ed-practice" aria-label="Practice areas and tools">
              {PRACTICE_AREAS.map((area) => (
                <div className="pv-ed-practice__group" key={area.title}>
                  <h3>{area.title}</h3>
                  <ul>
                    {area.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pv-ed-experience" id="pv-ed-experience" aria-labelledby="pv-ed-experience-title">
          <div className="pv-ed-section-heading">
            <h2 id="pv-ed-experience-title">Experience</h2>
            <p>Selected roles</p>
          </div>
          <div className="pv-ed-experience__list">
            {data.experience.map((item) => (
              <article className="pv-ed-experience__item" key={`${item.company}-${item.period}`}>
                <p className="pv-ed-experience__period">{item.period}</p>
                <div>
                  <h3>{item.role}</h3>
                  <p className="pv-ed-experience__company">{item.company}</p>
                  <p className="pv-ed-experience__description">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="pv-ed-contact" id="pv-ed-contact">
        <div>
          <p className="pv-ed-contact__role">{role}</p>
          <h2>Have a good project in mind?</h2>
        </div>
        <a href={`mailto:${data.email}`} aria-label={`Email Sofia Laurent at ${data.email}`}>
          <Mail size={17} aria-hidden="true" />
          <span>{data.email}</span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <div className="pv-ed-footerline">
          <span>{data.name} · {data.location}</span>
          <a href="#pv-ed-top" onClick={scrollToSection}>Back to top <ArrowUpRight size={13} aria-hidden="true" /></a>
        </div>
      </footer>
    </div>
  );
}
