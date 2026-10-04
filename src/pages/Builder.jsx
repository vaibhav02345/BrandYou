import { useState, useEffect } from 'react';
import { 
  Save, Monitor, Tablet, Smartphone, Eye, Palette,
  Layout, User, Globe, Plus, Trash2, Sparkles,
  X, CheckCircle, Loader, ExternalLink, Copy, Check
} from 'lucide-react';
import './Builder.css';

const PUBLISH_STEPS = [
  { label: 'Optimizing assets',  duration: 900 },
  { label: 'Deploying to CDN',   duration: 1100 },
  { label: 'Securing with SSL',  duration: 700 },
  { label: 'Going live!',        duration: 600 },
];

const LIVE_URL = 'brandyou.me/alex-johnson';

export default function Builder() {
  const [activeTab,     setActiveTab]     = useState('profile');
  const [viewMode,      setViewMode]      = useState('desktop');
  const [showLiveModal, setShowLiveModal] = useState(false);
  const [publishStep,   setPublishStep]   = useState(-1);
  const [copied,        setCopied]        = useState(false);
  const [showPreview,   setShowPreview]   = useState(false);

  useEffect(() => {
    if (!showLiveModal) { setPublishStep(-1); return; }
    let step = 0;
    setPublishStep(0);
    const run = () => {
      if (step >= PUBLISH_STEPS.length - 1) { setPublishStep(PUBLISH_STEPS.length); return; }
      setTimeout(() => { step++; setPublishStep(step); run(); }, PUBLISH_STEPS[step].duration);
    };
    setTimeout(run, PUBLISH_STEPS[0].duration);
  }, [showLiveModal]);

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://${LIVE_URL}`).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isDone = publishStep >= PUBLISH_STEPS.length;

  return (
    <div className="builder-page">

      {/* GO LIVE MODAL */}
      {showLiveModal && (
        <div className="golive-backdrop" onClick={() => isDone && setShowLiveModal(false)}>
          <div className="golive-modal" onClick={e => e.stopPropagation()}>
            <button className="golive-close" onClick={() => setShowLiveModal(false)}><X size={18} /></button>
            {!isDone ? (
              <>
                <div className="golive-spinner-wrap">
                  <div className="golive-ring" />
                  <Globe size={28} className="golive-globe" />
                </div>
                <h2 className="golive-heading">Publishing Your Site</h2>
                <p className="golive-sub">Hang tight — this only takes a moment.</p>
                <div className="golive-steps">
                  {PUBLISH_STEPS.map((s, i) => (
                    <div key={i} className={`golive-step ${i < publishStep ? 'done' : i === publishStep ? 'active' : ''}`}>
                      {i < publishStep
                        ? <CheckCircle size={16} className="step-icon-done" />
                        : i === publishStep
                        ? <Loader size={16} className="step-icon-spin" />
                        : <div className="step-icon-dot" />}
                      <span>{s.label}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="golive-success-icon"><CheckCircle size={40} /></div>
                <h2 className="golive-heading">You're Live! ??</h2>
                <p className="golive-sub">Your portfolio is now live and accessible to the world.</p>
                <div className="golive-url-box">
                  <Globe size={14} className="golive-url-globe" />
                  <span className="golive-url-text">{LIVE_URL}</span>
                  <button className="golive-copy-btn" onClick={handleCopy}>
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                  </button>
                </div>
                <div className="golive-actions">
                  <button className="golive-btn-primary" onClick={() => window.open(`https://${LIVE_URL}`, '_blank')}>
                    <ExternalLink size={16} />Visit Site
                  </button>
                  <button className="golive-btn-secondary" onClick={() => setShowLiveModal(false)}>
                    Back to Editor
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* LIVE PREVIEW OVERLAY */}
      {showPreview && (
        <div className="preview-overlay">
          <div className="preview-overlay-bar">
            <div className="preview-overlay-url"><Globe size={14} /><span>{LIVE_URL}</span></div>
            <div className="preview-overlay-views">
              <button className={viewMode === 'desktop' ? 'active' : ''} onClick={() => setViewMode('desktop')}><Monitor size={16} /></button>
              <button className={viewMode === 'tablet'  ? 'active' : ''} onClick={() => setViewMode('tablet')}><Tablet size={16} /></button>
              <button className={viewMode === 'mobile'  ? 'active' : ''} onClick={() => setViewMode('mobile')}><Smartphone size={16} /></button>
            </div>
            <button className="preview-overlay-close" onClick={() => setShowPreview(false)}><X size={20} /></button>
          </div>
          <div className="preview-overlay-body">
            <div className={`preview-overlay-frame ${viewMode}`}>
              <div className="preview-canvas">
                <div className="mock-site">
                  <nav className="mock-site-nav">
                    <div className="mock-site-logo" />
                    <div className="mock-site-links"><div/><div/><div/></div>
                  </nav>
                  <div className="mock-site-hero">
                    <div className="mock-site-badge" />
                    <h1 className="mock-site-title">ALEX JOHNSON</h1>
                    <p className="mock-site-subtitle">CREATIVE DIRECTOR</p>
                    <div className="mock-site-line" />
                  </div>
                  <div className="mock-site-grid">
                    <div className="mock-site-card" /><div className="mock-site-card" /><div className="mock-site-card" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SIDEBAR */}
      <aside className="builder-sidebar">
        <div className="builder-sidebar-header">
          <div className="builder-logo"><Sparkles size={20} color="var(--amber)" /><span>Design Studio</span></div>
          <button className="btn-save"><Save size={18} /><span>SAVE</span></button>
        </div>
        <div className="builder-tabs">
          {[
            { id: 'profile', icon: <User size={18} />,    label: 'Profile' },
            { id: 'style',   icon: <Palette size={18} />, label: 'Styles'  },
            { id: 'layout',  icon: <Layout size={18} />,  label: 'Layout'  },
            { id: 'social',  icon: <Globe size={18} />,   label: 'Social'  },
          ].map(tab => (
            <button key={tab.id} className={`builder-tab-btn ${activeTab === tab.id ? 'active' : ''}`} onClick={() => setActiveTab(tab.id)}>
              {tab.icon}<span>{tab.label}</span>
            </button>
          ))}
        </div>
        <div className="builder-controls">
          <div className="control-group">
            <label>FULL NAME</label>
            <input type="text" placeholder="e.g. Alex Johnson" defaultValue="Alex Johnson" />
          </div>
          <div className="control-group">
            <label>PROFESSIONAL TITLE</label>
            <input type="text" placeholder="e.g. Creative Director" defaultValue="Creative Director" />
          </div>
          <div className="control-group">
            <label>BIOGRAPHY</label>
            <textarea placeholder="Tell your story..." defaultValue="I build beautiful, high-performance digital experiences." rows={4} />
          </div>
          <div className="control-section-header">
            <span>EXPERIENCE</span>
            <button className="btn-add-item"><Plus size={14} /></button>
          </div>
          <div className="builder-item-card">
            <div className="item-card-header">
              <span>Senior Designer at TechCorp</span>
              <Trash2 size={14} color="rgba(255,255,255,0.3)" style={{ cursor: 'pointer' }} />
            </div>
            <div className="item-card-date">2022 – Present</div>
          </div>
        </div>
        <div className="builder-sidebar-footer">
          <button className="btn-publish" onClick={() => setShowLiveModal(true)}>GO LIVE</button>
        </div>
      </aside>

      {/* PREVIEW */}
      <main className="builder-preview">
        <header className="preview-toolbar">
          <div className="view-controls">
            <button className={viewMode === 'desktop' ? 'active' : ''} onClick={() => setViewMode('desktop')}><Monitor size={18} /></button>
            <button className={viewMode === 'tablet'  ? 'active' : ''} onClick={() => setViewMode('tablet')}><Tablet size={18} /></button>
            <button className={viewMode === 'mobile'  ? 'active' : ''} onClick={() => setViewMode('mobile')}><Smartphone size={18} /></button>
          </div>
          <div className="preview-url"><Globe size={14} /><span>brandyou.me/alex-johnson</span></div>
          <button className="btn-preview-link" onClick={() => setShowPreview(true)}>
            <Eye size={18} /><span>LIVE PREVIEW</span>
          </button>
        </header>
        <div className={`preview-container ${viewMode}`}>
          <div className="preview-canvas">
            <div className="mock-site">
              <nav className="mock-site-nav">
                <div className="mock-site-logo" />
                <div className="mock-site-links"><div/><div/><div/></div>
              </nav>
              <div className="mock-site-hero">
                <div className="mock-site-badge" />
                <h1 className="mock-site-title">ALEX JOHNSON</h1>
                <p className="mock-site-subtitle">CREATIVE DIRECTOR</p>
                <div className="mock-site-line" />
              </div>
              <div className="mock-site-grid">
                <div className="mock-site-card" /><div className="mock-site-card" /><div className="mock-site-card" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
