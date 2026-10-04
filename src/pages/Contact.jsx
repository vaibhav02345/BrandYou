import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-bg-pattern" />
      
      <section className="contact-hero container">
        <div className="contact-header">
          <div className="contact-badge">
            <MessageSquare size={14} />
            <span>CONNECT</span>
          </div>
          <h1 className="contact-title">LET'S START THE <br /><span>DIALOGUE</span></h1>
          <p className="contact-subtitle">Have questions about our universe? Our team of branding experts is standing by.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label>YOUR NAME</label>
                  <input type="text" placeholder="Alex Johnson" />
                </div>
                <div className="form-group">
                  <label>EMAIL ADDRESS</label>
                  <input type="email" placeholder="alex@example.com" />
                </div>
              </div>
              <div className="form-group">
                <label>SUBJECT</label>
                <select>
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Enterprise Licensing</option>
                  <option>Billing Question</option>
                </select>
              </div>
              <div className="form-group">
                <label>MESSAGE</label>
                <textarea placeholder="Tell us what's on your mind..." rows="6"></textarea>
              </div>
              <button type="submit" className="btn-send">
                <span>SEND MESSAGE</span>
                <Send size={18} />
              </button>
            </form>
          </div>

          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon-box"><Mail size={24} /></div>
              <div className="info-content">
                <h3>EMAIL US</h3>
                <p>hello@brandyou.me</p>
                <p>support@brandyou.me</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-box"><Phone size={24} /></div>
              <div className="info-content">
                <h3>CALL US</h3>
                <p>+1 (555) 000-BRAND</p>
                <p>Mon-Fri, 9am - 6pm EST</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-box"><MapPin size={24} /></div>
              <div className="info-content">
                <h3>OFFICE</h3>
                <p>123 Creative Blvd</p>
                <p>Design District, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
