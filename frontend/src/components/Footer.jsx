import { Link } from 'react-router-dom'
import { FaEnvelope, FaBriefcase, FaTwitter, FaLink } from 'react-icons/fa'
import './Footer.css'
import logoImg from '../assets/logoassspire.jpeg'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logoImg} alt="Aspire Mediatech" className="footer-logo-img" />
            <span className="footer-brand-name">Aspire Mediatech</span>
          </Link>
          <p>Full-stack web development & digital marketing agency crafting production-grade websites, web apps, and growth strategies with a security-first approach and scalable solutions.</p>
          <div className="footer-social">
            <span><FaEnvelope /></span><span><FaBriefcase /></span><span><FaTwitter /></span><span><FaLink /></span>
          </div>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <Link to="/services/web-development">Web Development</Link>
          <Link to="/services/mobile-apps">Mobile Apps</Link>
          <Link to="/services/api-development">API Development</Link>
          <Link to="/services/cloud-devops">Cloud & DevOps</Link>
          <Link to="/services/ui-ux-design">UI/UX Design</Link>
          <Link to="/services/digital-marketing">Digital Marketing</Link>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/tech-stack">Tech Stack</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <span>aspiremediatechsolution@gmail.com</span>
          <span>+91 9194035877</span>
          <span>+91 8542950556</span>
          <span>2nd Floor, 203 A, Felix Square, Sushant Golf City, Ansal Api, Nearby lulu mall Lucknow, Uttar Pradesh 226030</span>
          <span>Mon-Sat 9AM-7PM IST</span>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© 2024 Aspire Mediatech — All Rights Reserved — Built with Modern Technologies</p>
        </div>
      </div>
    </footer>
  )
}
