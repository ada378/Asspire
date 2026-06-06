import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import logoImg from '../assets/logoassspire.jpeg'

const services = [
  { id: 'web-development', label: 'Web Development', desc: 'Full-stack MERN apps' },
  { id: 'mobile-apps', label: 'Mobile Apps', desc: 'React Native' },
  { id: 'api-development', label: 'API Development', desc: 'REST & GraphQL' },
  { id: 'cloud-devops', label: 'Cloud & DevOps', desc: 'AWS, Docker, CI/CD' },
  { id: 'ui-ux-design', label: 'UI/UX Design', desc: 'Figma prototypes' },
  { id: 'digital-marketing', label: 'Digital Marketing', desc: 'SEO & Analytics' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path ? 'active' : ''

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="header-logo">
          <img src={logoImg} alt="Aspire Mediatech" className="header-logo-img" />
        </Link>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`header-nav ${menuOpen ? 'nav-open' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/')}`} onClick={() => setMenuOpen(false)}>Home</Link>

          <div className="dropdown-wrapper"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link to="/services"
              className={`nav-link dropdown-trigger ${isActive('/services') || location.pathname.startsWith('/services/') ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Services <span className="dropdown-arrow">▾</span>
            </Link>
            <div className={`dropdown-menu ${dropdownOpen ? 'dropdown-open' : ''}`}>
              {services.map(s => (
                <Link key={s.id} to={`/services/${s.id}`} className="dropdown-item" onClick={() => { setMenuOpen(false); setDropdownOpen(false) }}>
                  <span className="dropdown-item-label">{s.label}</span>
                  <span className="dropdown-item-desc">{s.desc}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link to="/tech-stack" className={`nav-link ${isActive('/tech-stack')}`} onClick={() => setMenuOpen(false)}>Tech Stack</Link>
          <Link to="/contact" className={`nav-link nav-cta ${isActive('/contact')}`} onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}
