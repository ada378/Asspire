import { FaQuoteLeft, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import founderImg from '../assets/founderlogo.jpeg'
import './Founder.css'

export default function Founder() {
  return (
    <section className="founder-section">
      <div className="container founder-container">
        <div className="founder-image-wrapper">
          <div className="founder-image-frame">
            <img src={founderImg} alt="Founder - Aspire Mediatech" className="founder-image" />
          </div>
          <div className="founder-pattern"></div>
        </div>

        <div className="founder-content">
          <span className="founder-tag">Meet Our Founder</span>
          <h1 className="founder-name">Rajdeep Kumar Singh</h1>
          <p className="founder-role">Founder & Businessman — Aspire Mediatech</p>

          <div className="founder-quote">
            <FaQuoteLeft className="founder-quote-icon" />
            <p>Building digital products that solve real problems. Every line of code is written with purpose, every design crafted with intent.</p>
          </div>

          <div className="founder-description">
            <p>
              Rajdeep Kumar Singh is the visionary behind <strong>Aspire Mediatech</strong>, a full-stack web development
              and digital marketing agency that helps startups and enterprises scale through modern technology.
              With deep expertise in full-stack development, UI/UX design, and digital strategy, Rajdeep leads
              the company's technical direction and creative vision.
            </p>
            <p>
              Under his leadership, Aspire Mediatech has delivered 50+ projects across web development,
              mobile apps, API architecture, cloud infrastructure, and digital marketing — serving clients
              globally with a commitment to quality, speed, and innovation.
            </p>
            <p>
              Rajdeep believes in writing clean, scalable code and building long-term partnerships with clients.
              When he's not coding or strategizing, he's exploring emerging technologies and mentoring
              the next generation of developers.
            </p>
          </div>

          <div className="founder-stats">
            <div className="founder-stat-item">
              <span className="founder-stat-num">5+</span>
              <span className="founder-stat-label">Years Exp.</span>
            </div>
            <div className="founder-stat-item">
              <span className="founder-stat-num">50+</span>
              <span className="founder-stat-label">Projects Led</span>
            </div>
            <div className="founder-stat-item">
              <span className="founder-stat-num">35+</span>
              <span className="founder-stat-label">Clients Served</span>
            </div>
            <div className="founder-stat-item">
              <span className="founder-stat-num">4.9★</span>
              <span className="founder-stat-label">Avg. Rating</span>
            </div>
          </div>

          <div className="founder-social">
            <a href="mailto:ansh@aspiremediatech.com" className="founder-social-link" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="https://linkedin.com/in/ansh-kumar" target="_blank" rel="noopener noreferrer" className="founder-social-link" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
