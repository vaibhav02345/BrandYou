export const TEMPLATES = [
  // ── DEVELOPER ─────────────────────────────────────────────────────────────
  {
    id: 'dev-minimal',
    name: 'Midnight Code',
    category: 'developer',
    tags: ['minimal', 'dark', 'clean'],
    accentColor: '#7c3aed',
    accentGradient: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
    description: 'A sleek dark portfolio with terminal-inspired aesthetics. Perfect for developers who love clean, focused design.',
    popular: true,
    new: false,
    premium: false,
    img: 'https://images.unsplash.com/photo-1564798605859-a4ab4a561b2a?auto=format&w=800&q=80&fit=crop'
  },
  {
    id: 'dev-neon',
    name: 'Neon Matrix',
    category: 'developer',
    tags: ['neon', 'dark', 'bold'],
    accentColor: '#00ff88',
    accentGradient: 'linear-gradient(135deg, #00ff88, #00b4d8)',
    description: 'Cyberpunk-inspired neon green aesthetic that makes your projects pop. Stand out from the crowd.',
    popular: true,
    new: false,
    premium: true,
    img: 'https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?auto=format&w=800&q=80&fit=crop'
  },
  {
    id: 'dev-glass',
    name: 'Glass Terminal',
    category: 'developer',
    tags: ['glassmorphism', 'modern', 'gradient'],
    accentColor: '#818cf8',
    accentGradient: 'linear-gradient(135deg, #818cf8, #c084fc)',
    description: 'Glassmorphism meets developer portfolio. Translucent cards with vibrant gradients.',
    popular: false,
    new: true,
    premium: false,
    img: 'https://images.unsplash.com/photo-1545454674-dac159c12c8c?auto=format&w=800&q=80&fit=crop'
  },
  {
    id: 'dev-mono',
    name: 'Mono Pro',
    category: 'developer',
    tags: ['monochrome', 'professional', 'minimal'],
    accentColor: '#e2e8f0',
    accentGradient: 'linear-gradient(135deg, #e2e8f0, #94a3b8)',
    description: 'Elegant monochrome design for senior developers. Sophistication in simplicity.',
    popular: false,
    new: false,
    premium: false,
    img: 'https://images.unsplash.com/photo-1631453577393-461cff89e0f7?auto=format&w=800&q=80&fit=crop'
  },

  // ── DESIGNER ──────────────────────────────────────────────────────────────
  {
    id: 'design-bold',
    name: 'Canvas Bold',
    category: 'designer',
    tags: ['bold', 'colorful', 'creative'],
    accentColor: '#f59e0b',
    accentGradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    description: 'Big typography, bold colors, maximum creative impact. Let your work do the talking.',
    popular: true,
    new: false,
    premium: false,
    img: 'https://images.unsplash.com/photo-1707740557687-29525d1e18c8?auto=format&w=800&q=80&fit=crop'
  },
  {
    id: 'design-minimal',
    name: 'Studio White',
    category: 'designer',
    tags: ['minimal', 'clean', 'editorial'],
    accentColor: '#ec4899',
    accentGradient: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
    description: 'Editorial-style portfolio with generous white space. Puts your visuals front and center.',
    popular: false,
    new: true,
    premium: false,
    img: 'https://images.unsplash.com/photo-1644483878399-6c9ed360523a?auto=format&w=800&q=80&fit=crop'
  },
  {
    id: 'design-gradient',
    name: 'Aurora',
    category: 'designer',
    tags: ['gradient', 'vibrant', 'artistic'],
    accentColor: '#06b6d4',
    accentGradient: 'linear-gradient(135deg, #06b6d4, #ec4899, #7c3aed)',
    description: 'Aurora borealis-inspired gradient portfolio. Breathtaking color transitions throughout.',
    popular: true,
    new: true,
    premium: true,
    img: 'https://images.unsplash.com/photo-1650388033943-72790a65095c?auto=format&w=800&q=80&fit=crop'
  },
  {
    id: 'design-dark',
    name: 'Obsidian',
    category: 'designer',
    tags: ['dark', 'luxury', 'premium'],
    accentColor: '#d97706',
    accentGradient: 'linear-gradient(135deg, #d97706, #92400e)',
    description: 'Dark luxury portfolio with gold accents. For designers with premium taste.',
    popular: false,
    new: false,
    premium: true,
    img: 'https://images.unsplash.com/photo-1572299414463-e97232132601?auto=format&w=800&q=80&fit=crop'
  },

  // ── CREATIVE ──────────────────────────────────────────────────────────────
  {
    id: 'creative-photo',
    name: 'Lens & Light',
    category: 'creative',
    tags: ['photography', 'grid', 'dark'],
    accentColor: '#f97316',
    accentGradient: 'linear-gradient(135deg, #f97316, #facc15)',
    description: 'Full-bleed photography portfolio with masonry grid. Perfect for photographers.',
    popular: true,
    new: false,
    premium: false,
    img: 'https://images.unsplash.com/photo-1565725058640-c009a25ffea3?auto=format&w=800&q=80&fit=crop'
  },
  {
    id: 'creative-writer',
    name: 'The Author',
    category: 'creative',
    tags: ['writing', 'blog', 'serif'],
    accentColor: '#84cc16',
    accentGradient: 'linear-gradient(135deg, #84cc16, #10b981)',
    description: 'Editorial design for writers, bloggers, and journalists. Clean readable typography.',
    popular: false,
    new: false,
    premium: false,
    img: 'https://images.unsplash.com/photo-1714205901306-e79a306f901a?auto=format&w=800&q=80&fit=crop'
  },
  {
    id: 'creative-artist',
    name: 'Palette',
    category: 'creative',
    tags: ['art', 'colorful', 'playful'],
    accentColor: '#a855f7',
    accentGradient: 'linear-gradient(135deg, #a855f7, #ec4899, #ef4444)',
    description: 'Playful and colorful for illustrators and visual artists. Every scroll is a delight.',
    popular: false,
    new: true,
    premium: false,
    img: 'https://images.unsplash.com/photo-1666293128679-e4ca2d7bfc14?auto=format&w=800&q=80&fit=crop'
  },
  {
    id: 'creative-video',
    name: 'Director',
    category: 'creative',
    tags: ['video', 'dark', 'cinematic'],
    accentColor: '#ef4444',
    accentGradient: 'linear-gradient(135deg, #ef4444, #f97316)',
    description: 'Cinematic dark theme for video creators and filmmakers. Dramatic and bold.',
    popular: false,
    new: false,
    premium: true,
    img: 'https://images.pexels.com/photos/17112938/pexels-photo-17112938.jpeg?auto=compress&cs=tinysrgb&w=800&q=80'
  },

  // ── PROFESSIONAL ──────────────────────────────────────────────────────────
  {
    id: 'pro-corporate',
    name: 'Executive',
    category: 'professional',
    tags: ['corporate', 'clean', 'trustworthy'],
    accentColor: '#2563eb',
    accentGradient: 'linear-gradient(135deg, #2563eb, #7c3aed)',
    description: 'Professional portfolio for executives, consultants and business professionals.',
    popular: true,
    new: false,
    premium: false,
    img: 'https://images.unsplash.com/photo-1531972111231-7482a960e109?auto=format&w=800&q=80&fit=crop'
  },
  {
    id: 'pro-consultant',
    name: 'Impact',
    category: 'professional',
    tags: ['consultant', 'metrics', 'bold'],
    accentColor: '#10b981',
    accentGradient: 'linear-gradient(135deg, #10b981, #0891b2)',
    description: 'Results-focused portfolio with big numbers and metrics. For consultants and PMs.',
    popular: false,
    new: false,
    premium: false,
    img: 'https://images.unsplash.com/photo-1588209134368-81591fd1a36c?auto=format&w=800&q=80&fit=crop'
  },
  {
    id: 'pro-researcher',
    name: 'Scholar',
    category: 'professional',
    tags: ['academic', 'research', 'elegant'],
    accentColor: '#6366f1',
    accentGradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    description: 'Academic-inspired portfolio for researchers, professors, and scientists.',
    popular: false,
    new: false,
    premium: false,
    img: 'https://images.unsplash.com/photo-1599880917812-35b7cde34597?auto=format&w=800&q=80&fit=crop'
  },

  // ── STUDENT ───────────────────────────────────────────────────────────────
  {
    id: 'student-fresh',
    name: 'First Chapter',
    category: 'student',
    tags: ['fresher', 'clean', 'friendly'],
    accentColor: '#06b6d4',
    accentGradient: 'linear-gradient(135deg, #06b6d4, #6366f1)',
    description: 'Perfect for students and fresh graduates. Friendly, approachable, and clean.',
    popular: true,
    new: false,
    premium: false,
    img: 'https://images.unsplash.com/photo-1635875060146-80ec95d47043?auto=format&w=800&q=80&fit=crop'
  },
  {
    id: 'student-bold',
    name: 'Rising Star',
    category: 'student',
    tags: ['bold', 'energetic', 'modern'],
    accentColor: '#f59e0b',
    accentGradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    description: 'Bold and energetic for students who want to make a statement. Show your ambition.',
    popular: false,
    new: true,
    premium: false,
    img: 'https://images.unsplash.com/photo-1665685153603-c4ddaed47ea5?auto=format&w=800&q=80&fit=crop'
  },
  // ── HEALTHCARE ────────────────────────────────────────────────────────────
  {
    id: 'health-prime',
    name: 'Clinic Prime',
    category: 'healthcare',
    tags: ['medical', 'clean', 'professional'],
    accentColor: '#10b981',
    accentGradient: 'linear-gradient(135deg, #10b981, #059669)',
    description: 'Structured and professional for healthcare experts. Trustworthy and clear.',
    popular: false,
    new: true,
    premium: false,
    img: 'https://images.unsplash.com/photo-1602857052438-7e9f27da2648?auto=format&w=800&q=80&fit=crop'
  },
  // ── LEGAL ──────────────────────────────────────────────────────────────────
  {
    id: 'legal-justice',
    name: 'Justice Pro',
    category: 'legal',
    tags: ['law', 'traditional', 'elegant'],
    accentColor: '#1e293b',
    accentGradient: 'linear-gradient(135deg, #1e293b, #334155)',
    description: 'Traditional elegance for the legal profession. Authoritative and sophisticated.',
    popular: false,
    new: true,
    premium: false,
    img: 'https://images.unsplash.com/photo-1775144657610-9a6f171e522f?auto=format&w=800&q=80&fit=crop'
  },
  // ── ENTERTAINMENT ──────────────────────────────────────────────────────────
  {
    id: 'ent-spotlight',
    name: 'Spotlight',
    category: 'entertainment',
    tags: ['media', 'dynamic', 'bold'],
    accentColor: '#f43f5e',
    accentGradient: 'linear-gradient(135deg, #f43f5e, #e11d48)',
    description: 'Dynamic and media-rich for entertainers and performers. Catchy and vibrant.',
    popular: true,
    new: true,
    premium: false,
    img: 'https://images.pexels.com/photos/17112938/pexels-photo-17112938.jpeg?auto=compress&cs=tinysrgb&w=800&q=80'
  },
];

export const CATEGORIES = [
  { id: 'all', label: 'All Templates', icon: '✦', count: TEMPLATES.length },
  { id: 'developer', label: 'Developer', icon: '⌨️', count: TEMPLATES.filter(t => t.category === 'developer').length },
  { id: 'designer', label: 'Designer', icon: '🎨', count: TEMPLATES.filter(t => t.category === 'designer').length },
  { id: 'creative', label: 'Creative', icon: '✨', count: TEMPLATES.filter(t => t.category === 'creative').length },
  { id: 'professional', label: 'Professional', icon: '💼', count: TEMPLATES.filter(t => t.category === 'professional').length },
  { id: 'healthcare', label: 'Healthcare', icon: '🏥', count: TEMPLATES.filter(t => t.category === 'healthcare').length },
  { id: 'legal', label: 'Legal', icon: '⚖️', count: TEMPLATES.filter(t => t.category === 'legal').length },
  { id: 'entertainment', label: 'Entertainment', icon: '🎬', count: TEMPLATES.filter(t => t.category === 'entertainment').length },
  { id: 'student', label: 'Student', icon: '🎓', count: TEMPLATES.filter(t => t.category === 'student').length },
];

export const SAMPLE_USER = {
  name: 'Alex Johnson',
  title: 'Full Stack Developer & UI Designer',
  bio: 'I build beautiful, performant web applications with a focus on user experience. 5+ years crafting digital products that users love.',
  email: 'alex@example.com',
  location: 'San Francisco, CA',
  github: 'alexjohnson',
  linkedin: 'alex-johnson',
  twitter: 'alexj',
  website: 'https://alexjohnson.dev',
  skills: ['React', 'Node.js', 'TypeScript', 'Python', 'Figma', 'AWS'],
  projects: [
    {
      name: 'NovaBuild',
      desc: 'A no-code platform for building web apps with AI assistance. 10k+ users.',
      tech: ['React', 'Node.js', 'GPT-4'],
      link: '#',
      gradient: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
    },
    {
      name: 'PayFlow',
      desc: 'Real-time payment dashboard with fraud detection. Processes $2M+ daily.',
      tech: ['Next.js', 'PostgreSQL', 'Redis'],
      link: '#',
      gradient: 'linear-gradient(135deg, #10b981, #0891b2)',
    },
    {
      name: 'InkSpace',
      desc: 'Collaborative design tool built for remote teams. 500+ daily active users.',
      tech: ['WebSockets', 'Canvas API', 'AWS'],
      link: '#',
      gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    },
  ],
  experience: [
    { role: 'Senior Developer', company: 'TechCorp Inc.', period: '2022 – Present' },
    { role: 'Frontend Engineer', company: 'StartupXYZ', period: '2020 – 2022' },
  ],
};
