import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaGlobe, FaMobileAlt, FaCogs, FaCloud, FaPaintBrush, FaChartLine, FaBolt, FaShieldAlt, FaLayerGroup, FaBullseye, FaCheckCircle, FaHeadphones, FaStar, FaPlay, FaRocket, FaPalette, FaSearchDollar, FaServer, FaWordpress, FaPhp, FaPython } from 'react-icons/fa'
import { SiNextdotjs, SiDjango, SiSpringboot } from 'react-icons/si'
import './Home.css'

const API = import.meta.env.VITE_API_URL || '/api'

export default function Home() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch(API + '/reviews')
      .then(res => res.json())
      .then(data => setReviews(data.slice(0, 2)))
      .catch(() => {})
  }, [])
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
            <span className="hero-badge"><FaRocket style={{ fontSize: 10, marginRight: 6 }} /> WEB & DIGITAL EXPERTS · EST. 2024</span>
            <h1>Digital Solutions,<br /><span className="gradient-text">Web Development</span><br />&amp; Digital Marketing</h1>
            <p>Full-stack web development & digital marketing agency crafting production-grade websites, web apps, and growth strategies. We build for startups, enterprises, and global clients — using modern technologies that scale.</p>
            <div className="hero-actions">
              <Link to="/contact" className="btn-primary">Start Your Project →</Link>
              <Link to="/services" className="btn-secondary">Explore Services</Link>
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
            <p>End-to-end digital solutions — from web development to marketing growth</p>
          </div>
          <div className="services-grid-home">
            <Link to="/services/web-development" className="service-card-home">
              <span className="service-icon-home"><FaGlobe /></span>
              <h3>Web Development</h3>
              <p>Custom websites & web apps built with modern frameworks — responsive, fast, and scalable.</p>
              <span className="service-link">Learn More →</span>
            </Link>
            <Link to="/services/mobile-apps" className="service-card-home">
              <span className="service-icon-home"><FaMobileAlt /></span>
              <h3>Mobile Apps</h3>
              <p>Cross-platform native apps for iOS and Android that deliver seamless user experiences.</p>
              <span className="service-link">Learn More →</span>
            </Link>
            <Link to="/services/api-development" className="service-card-home">
              <span className="service-icon-home"><FaCogs /></span>
              <h3>API Development</h3>
              <p>RESTful and GraphQL APIs with robust authentication, validation, and documentation.</p>
              <span className="service-link">Learn More →</span>
            </Link>
            <Link to="/services/cloud-devops" className="service-card-home">
              <span className="service-icon-home"><FaCloud /></span>
              <h3>Cloud & DevOps</h3>
              <p>AWS, Docker, CI/CD pipelines for reliable, scalable infrastructure and deployment.</p>
              <span className="service-link">Learn More →</span>
            </Link>
            <Link to="/services/ui-ux-design" className="service-card-home">
              <span className="service-icon-home"><FaPaintBrush /></span>
              <h3>UI/UX Design</h3>
              <p>Figma prototypes and design systems built for conversion and beautiful user journeys.</p>
              <span className="service-link">Learn More →</span>
            </Link>
            <Link to="/services/digital-marketing" className="service-card-home">
              <span className="service-icon-home"><FaChartLine /></span>
              <h3>Digital Marketing</h3>
              <p>SEO optimization, analytics, content strategy, and growth marketing to scale your reach.</p>
              <span className="service-link">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies We Work With */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Tech Stack</span>
            <h2>Technologies We Work With</h2>
            <p>Modern tools and frameworks for every type of project</p>
          </div>
          <div className="tech-showcase">
            <div className="tech-group">
              <h4>Frontend</h4>
              <div className="tech-chips">
                <span>React.js</span><span>Next.js</span><span>Vue.js</span><span>TypeScript</span><span>Tailwind CSS</span><span>Bootstrap</span>
              </div>
            </div>
            <div className="tech-group">
              <h4>Backend</h4>
              <div className="tech-chips">
                <span>Node.js</span><span>Express.js</span><span>Python</span><span>Django</span><span>PHP</span><span>Laravel</span><span>Java</span><span>Spring Boot</span><span>.NET Core</span>
              </div>
            </div>
            <div className="tech-group">
              <h4>Database & Cloud</h4>
              <div className="tech-chips">
                <span>MongoDB</span><span>PostgreSQL</span><span>MySQL</span><span>Redis</span><span>AWS</span><span>Docker</span><span>Firebase</span>
              </div>
            </div>
            <div className="tech-group">
              <h4>Marketing & Analytics</h4>
              <div className="tech-chips">
                <span>Google Analytics</span><span>SEO Tools</span><span>SEMrush</span><span>HubSpot</span><span>Mailchimp</span><span>Hotjar</span>
              </div>
            </div>
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
            <div className="why-card-home"><span className="why-icon"><FaShieldAlt /></span><h3>Security First</h3><p>JWT, bcrypt, HTTPS, OWASP compliance in every project we deliver.</p></div>
            <div className="why-card-home"><span className="why-icon"><FaLayerGroup /></span><h3>Scalable Architecture</h3><p>Code that scales from 100 to 10M users without a rewrite or tech debt.</p></div>
            <div className="why-card-home"><span className="why-icon"><FaBullseye /></span><h3>Business Focused</h3><p>Every feature tied to real user value and business goals — not just code.</p></div>
            <div className="why-card-home"><span className="why-icon"><FaCheckCircle /></span><h3>Quality Assurance</h3><p>Automated testing, code reviews, and 98+ Lighthouse score on every build.</p></div>
            <div className="why-card-home"><span className="why-icon"><FaHeadphones /></span><h3>24/7 Support</h3><p>Dedicated team for bug fixes, updates, monitoring, and maintenance.</p></div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Process</span>
            <h2>Development Workflow</h2>
            <p>From idea to launch — a proven process that delivers results</p>
          </div>
          <div className="process-home">
            <div className="process-step-home"><span className="step-num">01</span><h3>Discovery</h3><p>Requirements &amp; research</p></div>
            <span className="process-arrow">→</span>
            <div className="process-step-home"><span className="step-num">02</span><h3>Design</h3><p>Figma UI/UX prototypes</p></div>
            <span className="process-arrow">→</span>
            <div className="process-step-home"><span className="step-num">03</span><h3>Build</h3><p>Agile development sprints</p></div>
            <span className="process-arrow">→</span>
            <div className="process-step-home"><span className="step-num">04</span><h3>Test</h3><p>QA, security &amp; performance</p></div>
            <span className="process-arrow">→</span>
            <div className="process-step-home"><span className="step-num">05</span><h3>Deploy</h3><p>AWS + CI/CD go-live</p></div>
          </div>
        </div>
      </section>

      {/* What Our Clients Say */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Testimonials</span>
            <h2>What Our Clients Say</h2>
            <p>Real feedback from real clients we have worked with</p>
          </div>
          {reviews.length === 0 ? (
            <>
              <div className="testimonial-card-home">
                <div className="testimonial-stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> <span>5.0/5.0</span></div>
                <p className="testimonial-text">"Aspire Mediatech delivered our web application in 5 weeks — on time, under budget. The code quality and documentation were outstanding. Highly recommended for any web development or digital marketing need!"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">AS</div>
                  <div><strong>Amit Sharma</strong><span>CEO at TechVenture India</span></div>
                </div>
              </div>
              <div className="testimonial-card-home" style={{ marginTop: 24 }}>
                <div className="testimonial-stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> <span>5.0/5.0</span></div>
                <p className="testimonial-text">"Their digital marketing strategy doubled our website traffic in just 3 months. The team is professional, responsive, and truly understands how to drive results. Best investment we made for our brand."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">PK</div>
                  <div><strong>Priya Kapoor</strong><span>Founder at StyleCraft India</span></div>
                </div>
              </div>
            </>
          ) : (
            reviews.map((r, i) => (
              <div key={r._id} className="testimonial-card-home" style={i > 0 ? { marginTop: 24 } : {}}>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, si) => <FaStar key={si} style={{ opacity: si < r.rating ? 1 : 0.2 }} />)}
                  <span>{r.rating}.0/5.0</span>
                </div>
                <p className="testimonial-text">"{r.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{r.avatar || r.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)}</div>
                  <div><strong>{r.name}</strong><span>{r.company || ''}{r.company && r.position ? `, ${r.position}` : r.position || ''}</span></div>
                </div>
              </div>
            ))
          )}
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/reviews" className="btn-secondary">View All Reviews →</Link>
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
