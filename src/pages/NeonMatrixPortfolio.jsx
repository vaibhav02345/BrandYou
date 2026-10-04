import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import './NeonMatrixPortfolio.css';

/* ─────────────────────────────────────────────────
   NEON MATRIX — Exact Replica of Kombai Design
   Portfolio site: dark bg, centered terminal window,
   VS Code status bars top/bottom, blinking cursor
───────────────────────────────────────────────── */

export default function NeonMatrixPortfolio({ data, onClose }) {
  const [cursorVisible, setCursorVisible] = useState(true);

  // Blinking cursor animation
  useEffect(() => {
    const t = setInterval(() => setCursorVisible(v => !v), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="nm-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="nm-modal">

        <button className="nm-x-btn nm-modal-close" onClick={onClose}><X size={14} /></button>

        {/* ── Scrollable Content ── */}
        <div className="nm-scroll">

          {/* ══════════════════════════════════
              SECTION 1: WHOAMI
          ══════════════════════════════════ */}
          <section className="nm-section nm-section-hero">
            <div className="nm-window">
              <div className="nm-titlebar">
                <div className="nm-titlebar-dots">
                  <span className="nm-dot nm-dot-red" />
                  <span className="nm-dot nm-dot-yellow" />
                  <span className="nm-dot nm-dot-green" />
                </div>
                <span className="nm-titlebar-title">ZSH — {data?.name?.replace(' ','')?.toUpperCase() || 'MARCUS'}@WEBWORKS.DEV</span>
              </div>
              <div className="nm-window-content">
                <div className="nm-prompt-line">
                  <span className="nm-dollar">$</span>
                  <span className="nm-cmd"> whoami</span>
                  <span className={`nm-cursor ${cursorVisible ? 'nm-cursor-on' : ''}`}>█</span>
                </div>
                <h1 className="nm-hero-name">{data?.name || 'MARCUS WEBB'}</h1>
                <div className="nm-hero-role">
                  <span className="nm-role-key">role:</span>
                  <span className="nm-role-val"> {data?.title || 'Full Stack Engineer'}</span>
                </div>
                <p className="nm-hero-desc">
                  {data?.summary || 'Building scalable systems with clean code. Passionate engineer with 6+ years shipping products at scale.'}
                </p>
              </div>
            </div>
          </section>


          {/* ══════════════════════════════════
              SECTION 2: CAT ~/.PROFILE
          ══════════════════════════════════ */}
          <section className="nm-section">
            <div className="nm-section-header">
              <span className="nm-sh-icon nm-sh-icon--cyan">{'>'}_</span>
              <span className="nm-sh-cmd">CAT ~/.PROFILE</span>
            </div>

            <div className="nm-two-col nm-profile-row">
              {/* JSON Block */}
              <div className="nm-json-block">
                <div className="nm-json-line"><span className="nm-json-brace">&quot;{'{'}&#x22;&quot;</span></div>
                <div className="nm-json-line nm-indent">
                  <span className="nm-json-key">&quot;bio&quot;</span>
                  <span className="nm-json-colon">: </span>
                  <span className="nm-json-str">&quot;Passionate engineer with 6+ years shipping products at scale. Led teams that built systems serving 1M+ daily users. Open source contributor with 2.4k GitHub stars.&quot;</span>
                  <span className="nm-json-comma">,</span>
                </div>
                <div className="nm-json-line nm-indent">
                  <span className="nm-json-key">&quot;location&quot;</span>
                  <span className="nm-json-colon">: </span>
                  <span className="nm-json-str">&quot;San Francisco, CA&quot;</span>
                  <span className="nm-json-comma">,</span>
                </div>
                <div className="nm-json-line nm-indent">
                  <span className="nm-json-key">&quot;status&quot;</span>
                  <span className="nm-json-colon">: </span>
                  <span className="nm-json-str">&quot;Available for hire&quot;</span>
                  <span className="nm-json-comma">,</span>
                </div>
                <div className="nm-json-line nm-indent">
                  <span className="nm-json-key">&quot;metrics&quot;</span>
                  <span className="nm-json-colon">: {'{'}</span>
                </div>
                <div className="nm-json-line nm-indent2">
                  <span className="nm-json-key">&quot;stars&quot;</span>
                  <span className="nm-json-colon">: </span>
                  <span className="nm-json-num">2400</span>
                  <span className="nm-json-comma">,</span>
                </div>
                <div className="nm-json-line nm-indent2">
                  <span className="nm-json-key">&quot;commits_2024&quot;</span>
                  <span className="nm-json-colon">: </span>
                  <span className="nm-json-num">1842</span>
                </div>
                <div className="nm-json-line nm-indent"><span className="nm-json-brace">{'}'}</span></div>
                <div className="nm-json-line"><span className="nm-json-brace">{'}'}&quot;</span></div>
              </div>

              {/* Socials */}
              <div className="nm-socials">
                <div className="nm-socials-title">SCRIPTS / SOCIALS</div>
                <a href="#" className="nm-social-item">
                  <span className="nm-social-cmd">./  github.sh</span>
                  <span className="nm-social-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                  </span>
                </a>
                <a href="#" className="nm-social-item">
                  <span className="nm-social-cmd">./  linkedin.sh</span>
                  <span className="nm-social-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </span>
                </a>
                <a href="#" className="nm-social-item">
                  <span className="nm-social-cmd">./  stackoverflow.sh</span>
                  <span className="nm-social-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H17.78v-2.137H6.111v2.137zm.259-4.852l11.51 2.407.451-2.082-11.51-2.407-.451 2.082zm1.359-5.056l10.96 5.114.9-1.943-10.96-5.115-.9 1.944zm2.715-4.785l9.027 7.stack.enc-1.42-9.027-7.507-1.263 1.517zM13.439 0l-1.503 1.102 6.894 9.408 1.503-1.101L13.439 0z"/></svg>
                  </span>
                </a>
              </div>
            </div>
          </section>


          {/* ══════════════════════════════════
              SECTION 3: PRINTENV | GREP SKILL
          ══════════════════════════════════ */}
          <section className="nm-section">
            <div className="nm-section-header">
              <span className="nm-sh-icon nm-sh-icon--gear">⚙</span>
              <span className="nm-sh-cmd">PRINTENV | GREP SKILL</span>
            </div>

            <div className="nm-env-grid">
              {/* Frontend */}
              <div className="nm-env-card nm-env-card--purple">
                <div className="nm-env-label nm-env-label--purple">ENV_FRONTEND=</div>
                <ul className="nm-env-list">
                  <li><span className="nm-env-dot nm-env-dot--purple">●</span> &quot;React&quot;</li>
                  <li><span className="nm-env-dot nm-env-dot--purple">●</span> &quot;TypeScript&quot;</li>
                  <li><span className="nm-env-dot nm-env-dot--purple">●</span> &quot;Next.js&quot;</li>
                  <li><span className="nm-env-dot nm-env-dot--purple">●</span> &quot;Tailwind&quot;</li>
                </ul>
              </div>
              {/* Backend */}
              <div className="nm-env-card nm-env-card--cyan">
                <div className="nm-env-label nm-env-label--cyan">ENV_BACKEND=</div>
                <ul className="nm-env-list">
                  <li><span className="nm-env-dot nm-env-dot--cyan">●</span> &quot;Node.js&quot;</li>
                  <li><span className="nm-env-dot nm-env-dot--cyan">●</span> &quot;Python&quot;</li>
                  <li><span className="nm-env-dot nm-env-dot--cyan">●</span> &quot;PostgreSQL&quot;</li>
                  <li><span className="nm-env-dot nm-env-dot--cyan">●</span> &quot;Rust&quot;</li>
                </ul>
              </div>
              {/* DevOps */}
              <div className="nm-env-card nm-env-card--gray">
                <div className="nm-env-label nm-env-label--gray">ENV_DEVOPS=</div>
                <ul className="nm-env-list">
                  <li><span className="nm-env-dot nm-env-dot--gray">●</span> &quot;AWS&quot;</li>
                  <li><span className="nm-env-dot nm-env-dot--gray">●</span> &quot;Docker&quot;</li>
                  <li><span className="nm-env-dot nm-env-dot--gray">●</span> &quot;Kubernetes&quot;</li>
                  <li><span className="nm-env-dot nm-env-dot--gray">●</span> &quot;CI/CD&quot;</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
              SECTION 4: LS -LA ~/PROJECTS
          ══════════════════════════════════ */}
          <section className="nm-section">
            <div className="nm-section-header">
              <span className="nm-sh-icon nm-sh-icon--list">☰</span>
              <span className="nm-sh-cmd">LS -LA ~/PROJECTS</span>
            </div>

            <div className="nm-table-wrap">
              <table className="nm-table">
                <thead>
                  <tr>
                    <th>PERMISSIONS</th>
                    <th>USER</th>
                    <th>TAGS / SIZE</th>
                    <th>DATE</th>
                    <th>FILENAME</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="nm-perm">-rwxr-xr-x</td>
                    <td>marcus</td>
                    <td>
                      <span className="nm-tag nm-tag--react">REACT</span>
                      <span className="nm-tag nm-tag--gpt">GPT-4</span>
                    </td>
                    <td>Jul 12 10:45</td>
                    <td className="nm-filename">NovaBuild.app</td>
                    <td className="nm-arrow">›</td>
                  </tr>
                  <tr>
                    <td className="nm-perm">-rwxr-xr-x</td>
                    <td>marcus</td>
                    <td>
                      <span className="nm-tag nm-tag--go">GO</span>
                      <span className="nm-tag nm-tag--redis">REDIS</span>
                    </td>
                    <td>May 24 16:20</td>
                    <td className="nm-filename">PayFlow.api</td>
                    <td className="nm-arrow">›</td>
                  </tr>
                  <tr>
                    <td className="nm-perm">-rwxr-xr-x</td>
                    <td>marcus</td>
                    <td>
                      <span className="nm-tag nm-tag--canvas">CANVAS</span>
                      <span className="nm-tag nm-tag--aws">AWS</span>
                    </td>
                    <td>Jan 05 09:12</td>
                    <td className="nm-filename">InkSpace.io</td>
                    <td className="nm-arrow">›</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ══════════════════════════════════
              SECTION 5: GIT LOG EXPERIENCE
          ══════════════════════════════════ */}
          <section className="nm-section">
            <div className="nm-section-header">
              <span className="nm-sh-icon nm-sh-icon--git">⛓</span>
              <span className="nm-sh-cmd">GIT LOG --PRETTY=FORMAT:&quot;%H %AN %AD %S&quot;</span>
            </div>

            <div className="nm-commits">
              {/* Commit 1 */}
              <div className="nm-commit">
                <div className="nm-commit-dot" />
                <div className="nm-commit-body">
                  <div className="nm-commit-meta">
                    <span className="nm-commit-hash">commit 8f9a2b</span>
                    <span className="nm-commit-author"> Author: Marcus Webb</span>
                    <span className="nm-commit-date"> Date: 2022 - Present</span>
                  </div>
                  <div className="nm-commit-card">
                    <div className="nm-commit-title">Senior Full Stack Engineer @ TechCorp Inc.</div>
                    <p className="nm-commit-desc">Led a team of 8. Built core payment infrastructure serving 1M+ users. Reduced latency by 40% and improved developer velocity.</p>
                  </div>
                </div>
              </div>

              {/* Commit 2 */}
              <div className="nm-commit">
                <div className="nm-commit-dot" />
                <div className="nm-commit-body">
                  <div className="nm-commit-meta">
                    <span className="nm-commit-hash">commit 3d4e5f</span>
                    <span className="nm-commit-author"> Author: Marcus Webb</span>
                    <span className="nm-commit-date"> Date: 2020 - 2022</span>
                  </div>
                  <div className="nm-commit-card">
                    <div className="nm-commit-title">Frontend Engineer @ StartupXYZ</div>
                    <p className="nm-commit-desc">Built entire frontend from scratch using React and TypeScript. Scaled to 100K users in 6 months. Implemented a custom design system.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom padding */}
          <div style={{ height: '4rem' }} />
        </div>

        {/* ── VS Code Status Bar (bottom) ── */}
        <div className="nm-statusbar nm-statusbar-bottom">
          <div className="nm-sb-left">
            <span className="nm-sb-git">⎇ main*</span>
            <span className="nm-sb-sync">↺ Synced</span>
          </div>
          <div className="nm-sb-right">
            <span>UTF-8</span>
            <span className="nm-sb-js">JavaScript</span>
            <span>● Prettier: ✔</span>
          </div>
        </div>

      </div>
    </div>
  );
}
