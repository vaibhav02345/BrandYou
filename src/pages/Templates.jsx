import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Code, Scissors, Briefcase, Activity, Scale, Clapperboard, Sparkles } from 'lucide-react';
import { TEMPLATES } from '../data/templates';
import PortfolioPreview from './PortfolioPreview';
import NeonMatrixPortfolio from './NeonMatrixPortfolio';
import './Templates.css';

const CATEGORIES = [
  { id: 'all', label: 'All Universe', icon: <Sparkles size={16} /> },
  { id: 'developer', label: 'Tech Stack', icon: <Code size={16} /> },
  { id: 'designer', label: 'High Fashion', icon: <Scissors size={16} /> },
  { id: 'professional', label: 'Executive', icon: <Briefcase size={16} /> },
  { id: 'healthcare', label: 'Clinical', icon: <Activity size={16} /> },
  { id: 'legal', label: 'Juris Pro', icon: <Scale size={16} /> },
  { id: 'entertainment', label: 'Spotlight', icon: <Clapperboard size={16} /> },
];

export default function Templates() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewTemplate, setPreviewTemplate] = useState(null);
  const [showNeonMatrix, setShowNeonMatrix] = useState(false);

  const handlePreview = (t) => {
    if (t.id === 'dev-neon') {
      setShowNeonMatrix(true);
    } else {
      setPreviewTemplate(t);
    }
  };

  const filteredTemplates = useMemo(() => {
    return TEMPLATES.filter(t => {
      const matchesCategory = activeCategory === 'all' || t.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch = t.name.toLowerCase().includes(q) || 
                           t.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="templates-page">
      <div className="templates-bg-glow" />
      
      <section className="templates-hero">
        <div className="container">
          <div className="t-hero-badge">
            <Sparkles size={14} />
            <span>The 2025 Drop</span>
          </div>
          <h1 className="t-hero-title">CURATE YOUR <br /><span>EXPERIENCE</span></h1>
          <p className="t-hero-subtitle">Premium portfolio architectures engineered for maximum impact. No code. No limits.</p>
          
          <div className="t-controls">
            <div className="t-search-wrapper">
              <div className="t-search-box">
                <Search size={18} className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search architecture..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <div className="t-categories-scroll">
              <div className="t-categories">
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat.id} 
                    className={`t-cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    {cat.icon}
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="templates-grid-section container">
        <div className="t-results-info">
          <span>Showing <b>{filteredTemplates.length}</b> designs</span>
          <div className="t-filter-toggle">
            <Filter size={16} />
            <span>Refine</span>
          </div>
        </div>

        <div className="t-grid">
          {filteredTemplates.map((t, i) => (
            <div key={t.id} className="t-card" style={{ '--delay': i }}>
              <div className="t-card-img-box">
                <img src={t.img || 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&w=800&q=80&fit=crop'} alt={t.name} />
                <div className="t-card-overlay">
                  <div className="t-card-actions">
                    <button 
                      className="btn-preview-small"
                      onClick={() => handlePreview(t)}
                    >
                      PREVIEW
                    </button>
                    <Link to={`/builder?template=${t.id}`} className="btn-use-small">USE DESIGN</Link>
                  </div>
                </div>
                {t.premium && <div className="premium-tag">PREMIUM</div>}
              </div>
              <div className="t-card-content">
                <div className="t-card-header">
                  <h3 className="t-card-title">{t.name}</h3>
                  <div className="t-card-dots">
                    <div className="t-dot" style={{ backgroundColor: t.accentColor }} />
                  </div>
                </div>
                <p className="t-card-desc">{t.description}</p>
                <div className="t-card-footer">
                  <span className="t-card-category">{t.category}</span>
                  <div className="t-card-meta">
                    {t.tags?.slice(0, 2).map(tag => (
                      <span key={tag} className="t-meta-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Preview Modal */}
      {previewTemplate && (
        <PortfolioPreview
          template={previewTemplate}
          onClose={() => setPreviewTemplate(null)}
        />
      )}

      {/* Neon Matrix Portfolio Editor */}
      {showNeonMatrix && (
        <NeonMatrixPortfolio
          onClose={() => setShowNeonMatrix(false)}
        />
      )}
    </div>
  );
}
