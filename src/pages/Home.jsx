import { Link } from 'react-router-dom'
import { FaGlobe, FaMobileAlt, FaCogs, FaCloud, FaPaintBrush, FaChartLine, FaBolt, FaShieldAlt, FaLayerGroup, FaBullseye, FaCheckCircle, FaHeadphones, FaStar, FaPlay } from 'react-icons/fa'
import './Home.css'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="container home-hero-grid">
          <div className="home-hero-text">
            <span className="hero-badge"><FaPlay style={{ fontSize: 10, marginRight: 6 }} /> MERN STACK EXPERTS · EST. 2024</span>
            <h1>Digital Solutions,<br /><span className="gradient-text">Web Development</span><br />&amp; MERN Stack</h1>
            <p>Full-stack MERN development agency crafting production-grade web applications with modern architecture, security-first approach, and scalable cloud-native solutions. We build for startups, enterprises, and global clients.</p>
            <div className="hero-actions">
              <Link to="/contact" className="btn-primary">Start Your Project →</Link>
              <Link to="/tech-stack" className="btn-secondary">Explore Tech Stack</Link>
            </div>
            <div className="hero-trust-badges">
              <span>Trusted by 35+ clients worldwide</span>
              <span>|</span>
              <span>50+ projects delivered</span>
              <span>|</span>
              <span>99% client satisfaction</span>
            </div>
          </div>
          <div className="home-hero-visual">
            <div className="stats-card">
              <div className="stat-item"><span className="stat-num">50+</span><span className="stat-label">Projects Delivered</span></div>
              <div className="stat-item"><span className="stat-num">35+</span><span className="stat-label">Happy Clients</span></div>
              <div className="stat-item"><span className="stat-num">99%</span><span className="stat-label">Uptime SLA</span></div>
              <div className="stat-item"><span className="stat-num">24/7</span><span className="stat-label">Support</span></div>
              <div className="stat-item"><span className="stat-num">4.9★</span><span className="stat-label">Client Rating</span></div>
              <div className="stat-item"><span className="stat-num">2hr</span><span className="stat-label">Avg. Response</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Do</span>
            <h2>Our Core Services</h2>
            <p>End-to-end digital solutions powered by modern technology stacks</p>
          </div>
          <div className="services-grid-home">
            <Link to="/services/web-development" className="service-card-home">
              <span className="service-icon-home"><FaGlobe /></span>
              <h3>Web Development</h3>
              <p>Full-stack MERN applications with modern architecture and best practices.</p>
              <span className="service-link">Learn More →</span>
            </Link>
            <Link to="/services/mobile-apps" className="service-card-home">
              <span className="service-icon-home"><FaMobileAlt /></span>
              <h3>Mobile Apps</h3>
              <p>Cross-platform native apps using React Native for iOS and Android.</p>
              <span className="service-link">Learn More →</span>
            </Link>
            <Link to="/services/api-development" className="service-card-home">
              <span className="service-icon-home"><FaCogs /></span>
              <h3>API Development</h3>
              <p>RESTful and GraphQL APIs with robust authentication and validation.</p>
              <span className="service-link">Learn More →</span>
            </Link>
            <Link to="/services/cloud-devops" className="service-card-home">
              <span className="service-icon-home"><FaCloud /></span>
              <h3>Cloud & DevOps</h3>
              <p>AWS, Docker, CI/CD pipelines for reliable infrastructure.</p>
              <span className="service-link">Learn More →</span>
            </Link>
            <Link to="/services/ui-ux-design" className="service-card-home">
              <span className="service-icon-home"><FaPaintBrush /></span>
              <h3>UI/UX Design</h3>
              <p>Figma prototypes and design systems built for conversion.</p>
              <span className="service-link">Learn More →</span>
            </Link>
            <Link to="/services/digital-marketing" className="service-card-home">
              <span className="service-icon-home"><FaChartLine /></span>
              <h3>Digital Marketing</h3>
              <p>SEO optimization, analytics, and growth strategy.</p>
              <span className="service-link">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Us</span>
            <h2>Why Aspire Mediatech?</h2>
          </div>
          <div className="why-grid-home">
            <div className="why-card-home"><span className="why-icon"><FaBolt /></span><h3>Lightning Fast Delivery</h3><p>Agile 2-week sprints. MVP in 4-6 weeks. Always on schedule.</p></div>
            <div className="why-card-home"><span className="why-icon"><FaShieldAlt /></span><h3>Security First</h3><p>JWT, bcrypt, HTTPS, OWASP compliance in every project.</p></div>
            <div className="why-card-home"><span className="why-icon"><FaLayerGroup /></span><h3>Scalable Architecture</h3><p>Code that scales from 100 to 10M users without a rewrite.</p></div>
            <div className="why-card-home"><span className="why-icon"><FaBullseye /></span><h3>Business Focused</h3><p>Every feature tied to real user value, not just code.</p></div>
            <div className="why-card-home"><span className="why-icon"><FaCheckCircle /></span><h3>Quality Assurance</h3><p>Jest + Cypress testing. 98+ Lighthouse score.</p></div>
            <div className="why-card-home"><span className="why-icon"><FaHeadphones /></span><h3>24/7 Support</h3><p>Dedicated team for bug fixes, updates, and monitoring.</p></div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Process</span>
            <h2>Development Workflow</h2>
          </div>
          <div className="process-home">
            <div className="process-step-home"><span className="step-num">01</span><h3>Discovery</h3><p>Requirements &amp; research</p></div>
            <span className="process-arrow">→</span>
            <div className="process-step-home"><span className="step-num">02</span><h3>Design</h3><p>Figma UI/UX prototypes</p></div>
            <span className="process-arrow">→</span>
            <div className="process-step-home"><span className="step-num">03</span><h3>Build</h3><p>Agile MERN development</p></div>
            <span className="process-arrow">→</span>
            <div className="process-step-home"><span className="step-num">04</span><h3>Test</h3><p>QA, security &amp; performance</p></div>
            <span className="process-arrow">→</span>
            <div className="process-step-home"><span className="step-num">05</span><h3>Deploy</h3><p>AWS + CI/CD go-live</p></div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section section-light">
        <div className="container">
          <div className="testimonial-card-home">
            <div className="testimonial-stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> <span>5.0/5.0</span></div>
            <p className="testimonial-text">"Aspire Mediatech delivered our MERN app in 5 weeks — on time, under budget. The code quality and documentation were outstanding. Highly recommended!"</p>
            <div className="testimonial-author">
              <div className="author-avatar">AS</div>
              <div><strong>Amit Sharma</strong><span>CEO at TechVenture India</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container cta-inner">
          <h2>Ready to Build Something Amazing?</h2>
          <p>Free consultation within 24 hours. No commitment required.</p>
          <Link to="/contact" className="btn-primary btn-lg">Get Started →</Link>
        </div>
      </section>
    </>
  )
}
