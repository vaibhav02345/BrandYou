// Portfolio sample data per category
// Each entry includes: user profile, platform handles relevant to the profession, and content sections

export const PORTFOLIO_SAMPLE_DATA = {

  developer: {
    name: 'Marcus Webb',
    initials: 'MW',
    title: 'Full Stack Engineer',
    subtitle: 'Building scalable systems with clean code',
    bio: 'Passionate engineer with 6+ years shipping products at scale. Led teams that built systems serving 1M+ daily users. Open source contributor with 2.4k GitHub stars.',
    location: 'San Francisco, CA',
    email: 'marcus@webworks.dev',
    website: 'webworks.dev',
    avatar: 'https://i.pravatar.cc/200?u=marcuswebb',
    handles: [
      { platform: 'GitHub', handle: '@marcuswebb', url: '#', color: '#24292e' },
      { platform: 'LinkedIn', handle: 'marcus-webb', url: '#', color: '#0077b5' },
      { platform: 'Stack Overflow', handle: 'mwebb', url: '#', color: '#f48024' },
      { platform: 'Twitter', handle: '@marcusw_dev', url: '#', color: '#1da1f2' },
      { platform: 'npm', handle: '@mwebb', url: '#', color: '#cc3534' },
    ],
    skills: {
      Frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Framer Motion'],
      Backend: ['Node.js', 'Python', 'Rust', 'PostgreSQL', 'Redis'],
      DevOps: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    },
    projects: [
      { name: 'NovaBuild', desc: 'No-code platform for building web apps with AI. 10k+ users, $500K ARR.', tech: ['React', 'Node.js', 'GPT-4', 'PostgreSQL'], gradient: 'linear-gradient(135deg,#7c3aed,#06b6d4)', github: '#', live: '#' },
      { name: 'PayFlow', desc: 'Real-time payment dashboard with ML fraud detection. $2M+ processed daily.', tech: ['Next.js', 'Go', 'Redis', 'Stripe'], gradient: 'linear-gradient(135deg,#10b981,#0891b2)', github: '#', live: '#' },
      { name: 'InkSpace', desc: 'Collaborative design tool. 500+ daily active teams. Acquired by DesignCo.', tech: ['WebSockets', 'Canvas API', 'AWS', 'React'], gradient: 'linear-gradient(135deg,#f59e0b,#ef4444)', github: '#', live: '#' },
    ],
    experience: [
      { role: 'Senior Full Stack Engineer', company: 'TechCorp Inc.', period: '2022 – Present', desc: 'Led a team of 8. Built core payment infrastructure serving 1M+ users.' },
      { role: 'Frontend Engineer', company: 'StartupXYZ', period: '2020 – 2022', desc: 'Built entire frontend from scratch. Scaled to 100K users in 6 months.' },
    ],
  },

  student: {
    name: 'Jordan Kim',
    initials: 'JK',
    title: 'CS Student & Aspiring Engineer',
    subtitle: 'Learning by building · Hackathon winner ×3',
    bio: 'CS sophomore at UC Berkeley passionate about ML and web. Interned at Google Summer 2024. Winner of MLH Global Hackathon.',
    location: 'Berkeley, CA',
    email: 'jkim@berkeley.edu',
    website: 'jordankim.dev',
    avatar: 'https://i.pravatar.cc/200?u=jordankim',
    handles: [
      { platform: 'GitHub', handle: '@jordankim', url: '#', color: '#24292e' },
      { platform: 'LinkedIn', handle: 'jordan-kim', url: '#', color: '#0077b5' },
      { platform: 'Twitter', handle: '@jordan_builds', url: '#', color: '#1da1f2' },
      { platform: 'Google Scholar', handle: 'J. Kim', url: '#', color: '#4285f4' },
    ],
    skills: {
      Languages: ['Python', 'JavaScript', 'C++', 'Java', 'SQL'],
      Frameworks: ['React', 'Flask', 'TensorFlow', 'PyTorch'],
      Tools: ['Git', 'Linux', 'Jupyter', 'Figma'],
    },
    projects: [
      { name: 'MLGuard', desc: 'AI-powered cybersecurity tool. Won 1st place MLH Global Hackathon 2024.', tech: ['Python', 'TensorFlow', 'Flask', 'React'], gradient: 'linear-gradient(135deg,#06b6d4,#6366f1)', github: '#', live: '#' },
      { name: 'CampusFood', desc: 'App for discovering best dining hall meals. 2K+ users at UC Berkeley.', tech: ['React Native', 'Node.js', 'MongoDB'], gradient: 'linear-gradient(135deg,#f59e0b,#ef4444)', github: '#', live: '#' },
      { name: 'StudyBuddy', desc: 'AI-powered study assistant. 5k students on waitlist, launching Fall 2025.', tech: ['Next.js', 'OpenAI', 'Supabase'], gradient: 'linear-gradient(135deg,#a855f7,#ec4899)', github: '#', live: '#' },
    ],
    experience: [
      { role: 'SWE Intern', company: 'Google', period: 'Summer 2024', desc: 'Worked on Google Photos ML pipeline improvements. Shipped 2 features.' },
      { role: 'Research Assistant', company: 'UC Berkeley EECS', period: '2023 – Present', desc: 'Researching efficient transformer architectures under Prof. A. Smith.' },
    ],
  },

  designer: {
    name: 'Sofia Laurent',
    initials: 'SL',
    title: 'Product Designer & Creative Director',
    subtitle: 'Crafting human-centered digital experiences',
    bio: '12+ years designing at the intersection of art and technology. Former Design Lead at Figma. Brand work for Nike, Apple, and Airbnb. Named "Designer of the Year" by Fast Company.',
    location: 'New York, NY',
    email: 'sofia@laurentstudio.com',
    website: 'laurentstudio.com',
    avatar: 'https://i.pravatar.cc/200?u=sofialaurent',
    handles: [
      { platform: 'Behance', handle: 'sofialaurent', url: '#', color: '#1769ff' },
      { platform: 'Dribbble', handle: '@sofia_l', url: '#', color: '#ea4c89' },
      { platform: 'Instagram', handle: '@sofia.design', url: '#', color: '#e1306c' },
      { platform: 'LinkedIn', handle: 'sofia-laurent', url: '#', color: '#0077b5' },
    ],
    skills: ['Figma', 'Framer', 'Illustrator', 'Brand Identity', 'Motion Design', 'Design Systems', 'User Research', 'Prototyping'],
    portfolio: [
      { name: 'Nike Brand Refresh', category: 'Brand Identity', desc: 'Global brand identity refresh for Nike\'s digital-first campaign. 800M+ impressions.', img: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&w=800&q=80' },
      { name: 'Airbnb App Redesign', category: 'Product Design', desc: 'End-to-end redesign of Airbnb\'s mobile experience. Increased bookings by 24%.', img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&w=800&q=80' },
      { name: 'Luma Design System', category: 'Design System', desc: '600+ component library used by 120 engineers and 15 designers at scale.', img: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&w=800&q=80' },
    ],
    experience: [
      { role: 'Design Lead', company: 'Figma', period: '2021 – Present', desc: 'Leading the core product design team of 12 across 3 product lines.' },
      { role: 'Senior Product Designer', company: 'Airbnb', period: '2018 – 2021', desc: 'Owned the search and discovery experience used by 100M+ users.' },
    ],
  },

  creative: {
    name: 'Ethan Cole',
    initials: 'EC',
    title: 'Photographer & Visual Artist',
    subtitle: 'Light · Story · Emotion',
    bio: 'Award-winning photographer with work in Vogue, National Geographic, and TIME. Represented by Magnum Photos Agency. Based in LA, shooting globally.',
    location: 'Los Angeles, CA',
    email: 'ethan@colestudio.io',
    website: 'colestudio.io',
    avatar: 'https://i.pravatar.cc/200?u=ethancole',
    handles: [
      { platform: 'Instagram', handle: '@ethan.cole', url: '#', color: '#e1306c' },
      { platform: 'Behance', handle: 'ethancole', url: '#', color: '#1769ff' },
      { platform: 'Vimeo', handle: 'ecole', url: '#', color: '#1ab7ea' },
      { platform: 'LinkedIn', handle: 'ethan-cole-art', url: '#', color: '#0077b5' },
    ],
    skills: ['Portrait Photography', 'Editorial', 'Film', 'Studio Lighting', 'Post-Production', 'Adobe Suite', 'Video Direction', 'Brand Campaigns'],
    portfolio: [
      { name: 'Urban Solitude', category: 'Editorial', desc: '12-part series on urban loneliness. Featured in TIME and Aperture Foundation.', img: 'https://images.unsplash.com/photo-1576158113928-4c240eaaf360?auto=format&w=800&q=80' },
      { name: 'Nike – Just Move', category: 'Commercial', desc: 'Global campaign for Nike 2024. 300M+ social reach across 18 countries.', img: 'https://images.unsplash.com/photo-1612481985126-71e4b98c9b59?auto=format&w=800&q=80' },
      { name: 'Portraits of Tomorrow', category: 'Fine Art', desc: 'Sold-out gallery exhibition NYC. Aperture Foundation award winner.', img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&w=800&q=80' },
    ],
    experience: [
      { role: 'Lead Photographer', company: 'Magnum Photos', period: '2020 – Present', desc: 'Globally represented for editorial and commercial assignments.' },
      { role: 'Staff Photographer', company: 'National Geographic', period: '2017 – 2020', desc: 'Covered stories from 40+ countries across 3 continents.' },
    ],
  },

  professional: {
    name: 'Richard Chen',
    initials: 'RC',
    title: 'VP Strategy & Operations',
    subtitle: 'MBA · Stanford GSB',
    bio: '12+ years driving growth at Fortune 500 companies across APAC and North America. Specialist in M&A integration, operational excellence, and digital transformation.',
    location: 'New York, NY',
    email: 'richard@chen-advisory.com',
    phone: '+1 (212) 555-0198',
    website: 'chen-advisory.com',
    avatar: 'https://i.pravatar.cc/200?u=richardchen',
    credentials: ['MBA, Stanford GSB', 'CFA Charterholder', 'Board Member, TechFund NY'],
    handles: [
      { platform: 'LinkedIn', handle: 'richard-chen', url: '#', color: '#0077b5' },
      { platform: 'Twitter', handle: '@rchenStrategy', url: '#', color: '#1da1f2' },
      { platform: 'Website', handle: 'chen-advisory.com', url: '#', color: '#334155' },
      { platform: 'AngelList', handle: 'r-chen', url: '#', color: '#000000' },
    ],
    achievements: [
      { metric: '$4.2B', label: 'M&A Deal Value Managed' },
      { metric: '3 IPOs', label: 'Supported as Advisor' },
      { metric: '42%', label: 'Avg Revenue Growth YoY' },
      { metric: '6', label: 'Global Market Expansions' },
    ],
    expertise: ['M&A Strategy', 'P&L Ownership', 'Digital Transformation', 'Emerging Markets', 'Board Presentations', 'Team Leadership', 'VC Relations', 'Go-to-Market'],
    experience: [
      { role: 'VP Strategy & Operations', company: 'GlobalCorp Inc.', period: '2021 – Present', desc: 'Overseeing $800M revenue division across APAC. Led 3 major acquisitions.' },
      { role: 'Director, Corporate Development', company: 'McKinsey & Co.', period: '2017 – 2021', desc: 'Led M&A due diligence for Fortune 100 clients across 12 industries.' },
      { role: 'Associate, Investment Banking', company: 'Goldman Sachs', period: '2014 – 2017', desc: 'Technology sector coverage. Executed $2B+ in transactions.' },
    ],
  },

  healthcare: {
    name: 'Dr. Priya Sharma',
    initials: 'PS',
    title: 'Interventional Cardiologist',
    subtitle: 'MD, PhD · FACC · FSCAI',
    bio: 'Board-certified interventional cardiologist with 12+ years in clinical practice and research. Published 45+ peer-reviewed articles. Committed to advancing cardiac care through innovation.',
    location: 'Boston, MA',
    email: 'p.sharma@bostonheart.edu',
    phone: '+1 (617) 555-0122',
    hospital: 'Boston Heart Center',
    avatar: 'https://i.pravatar.cc/200?u=priyasharma',
    credentials: ['MD, Johns Hopkins', 'PhD, Cardiovascular Biology', 'FACC', 'FSCAI'],
    handles: [
      { platform: 'LinkedIn', handle: 'dr-priya-sharma', url: '#', color: '#0077b5' },
      { platform: 'ResearchGate', handle: 'P_Sharma_MD', url: '#', color: '#00d0af' },
      { platform: 'ORCID', handle: '0000-0002-1234', url: '#', color: '#a6ce39' },
      { platform: 'PubMed', handle: 'Sharma P.', url: '#', color: '#336699' },
    ],
    specialties: ['Interventional Cardiology', 'Structural Heart Disease', 'Heart Failure', 'Clinical Trials', 'Cardiac Imaging', 'Preventive Cardiology'],
    publications: [
      { title: 'Novel biomarkers for early detection of acute myocardial infarction', journal: 'New England Journal of Medicine', year: '2023', citations: '142' },
      { title: 'Long-term outcomes of TAVR in high-risk patients: 5-year follow-up', journal: 'Journal of the ACC', year: '2022', citations: '98' },
      { title: 'AI-assisted interpretation of cardiac MRI in emergency settings', journal: 'Circulation', year: '2023', citations: '67' },
    ],
    experience: [
      { role: 'Associate Professor & Attending', company: 'Boston Heart Center', period: '2019 – Present', desc: 'Directing the Structural Heart Disease program. 800+ procedures annually.' },
      { role: 'Interventional Cardiology Fellow', company: 'Massachusetts General Hospital', period: '2016 – 2019', desc: 'Advanced training in complex PCI and structural interventions.' },
    ],
  },

  legal: {
    name: 'Jonathan Hargreaves',
    initials: 'JH',
    title: 'Partner, Corporate & M&A Law',
    subtitle: 'Esq. · 15 Years Experience · Chambers USA Ranked',
    bio: 'Leading corporate attorney specializing in complex M&A transactions, securities law, and corporate governance. 200+ deals closed totaling $30B+ in transaction value.',
    location: 'New York, NY',
    email: 'jhargreaves@hbc-law.com',
    phone: '+1 (212) 555-0145',
    firm: 'Hargreaves, Burke & Chen LLP',
    avatar: 'https://i.pravatar.cc/200?u=jonathanhargreaves',
    credentials: ['JD, Harvard Law School', 'Admitted: NY, CA, DC', 'Chambers USA Ranked', 'AV Preeminent® Rated'],
    handles: [
      { platform: 'LinkedIn', handle: 'jonathan-hargreaves', url: '#', color: '#0077b5' },
      { platform: 'Avvo', handle: 'jhargreaves', url: '#', color: '#ff6b35' },
      { platform: 'Martindale', handle: 'J. Hargreaves', url: '#', color: '#1a1a2e' },
      { platform: 'Website', handle: 'hbc-law.com', url: '#', color: '#1e293b' },
    ],
    practiceAreas: ['Mergers & Acquisitions', 'Securities Law', 'Corporate Governance', 'Private Equity', 'Venture Capital', 'IPO Counsel', 'Joint Ventures', 'Regulatory Compliance'],
    matters: [
      { value: '$8.2B', deal: 'Cross-border merger of TechGlobal and AsiaCorp', type: 'M&A' },
      { value: '$1.4B', deal: 'Series D & bridge financing for FinTech unicorn', type: 'Venture Capital' },
      { value: '$3.1B', deal: 'IPO counsel for enterprise SaaS platform', type: 'Securities' },
    ],
    experience: [
      { role: 'Partner', company: 'Hargreaves, Burke & Chen LLP', period: '2018 – Present', desc: 'Head of M&A practice group. 12 partners, $50M+ revenue division.' },
      { role: 'Senior Associate', company: 'Sullivan & Cromwell LLP', period: '2013 – 2018', desc: 'Corporate M&A and capital markets transactions for Fortune 100 clients.' },
    ],
  },

  entertainment: {
    name: 'Zara Okonkwo',
    initials: 'ZO',
    title: 'Actress & Content Creator',
    subtitle: 'Screen · Stage · Digital · 2.8M Followers',
    bio: 'Award-winning actress with credits on Netflix, HBO, and Broadway. SAG-AFTRA member. Brand ambassador for Nike, Gucci, and Apple. Named "Creator of the Year" by Forbes.',
    location: 'Los Angeles, CA',
    email: 'zara@zaraokstudio.com',
    website: 'zaraokonkwo.com',
    avatar: 'https://i.pravatar.cc/200?u=zaraokonkwo',
    handles: [
      { platform: 'Instagram', handle: '@zaraokonkwo', url: '#', color: '#e1306c' },
      { platform: 'YouTube', handle: 'ZaraO Official', url: '#', color: '#ff0000' },
      { platform: 'TikTok', handle: '@zara.o', url: '#', color: '#010101' },
      { platform: 'IMDb', handle: 'Zara Okonkwo', url: '#', color: '#f5c518' },
    ],
    stats: [
      { metric: '2.8M', label: 'Followers' },
      { metric: '42', label: 'Screen Credits' },
      { metric: '3', label: 'Industry Awards' },
      { metric: '12', label: 'Brand Deals' },
    ],
    credits: [
      { title: 'Shadow Protocol', type: 'Netflix Limited Series (2024)', role: 'Lead — Agent Torres' },
      { title: 'Broken Silences', type: 'HBO Drama (2023)', role: 'Series Regular — Maya Chen' },
      { title: 'A Night in Harlem', type: 'Broadway Musical (2022)', role: 'Lead — Josephine Baker' },
    ],
    experience: [
      { role: 'Lead Actress & Creator', company: 'UTA Agency', period: '2019 – Present', desc: 'Represented globally for film, TV, and theatrical work.' },
      { role: 'Brand Ambassador', company: 'Nike & Gucci', period: '2022 – Present', desc: 'Lead ambassador for their inclusive digital campaigns.' },
    ],
  },
};

// Get sample data by template category
export const getSampleData = (category) => {
  return PORTFOLIO_SAMPLE_DATA[category] || PORTFOLIO_SAMPLE_DATA.developer;
};

// Platform color map
export const PLATFORM_COLORS = {
  GitHub: '#24292e',
  LinkedIn: '#0077b5',
  'Stack Overflow': '#f48024',
  Twitter: '#1da1f2',
  npm: '#cc3534',
  'Google Scholar': '#4285f4',
  Behance: '#1769ff',
  Dribbble: '#ea4c89',
  Instagram: '#e1306c',
  Vimeo: '#1ab7ea',
  ResearchGate: '#00d0af',
  ORCID: '#a6ce39',
  PubMed: '#336699',
  Avvo: '#ff6b35',
  Martindale: '#1a1a2e',
  Website: '#334155',
  AngelList: '#000000',
  YouTube: '#ff0000',
  TikTok: '#010101',
  IMDb: '#f5c518',
  Spotify: '#1db954',
};
