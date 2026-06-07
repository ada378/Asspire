import { Link } from 'react-router-dom'
import { FaGlobe, FaMobileAlt, FaCogs, FaCloud, FaPaintBrush, FaChartLine, FaVideo, FaPhp, FaWordpress, FaJava, FaPython } from 'react-icons/fa'
import { SiMongodb, SiNextdotjs, SiSpringboot, SiDotnet } from 'react-icons/si'
import './Services.css'

const services = [
  { id: 'web-development', icon: FaGlobe, title: 'Web Development', desc: 'Full-stack MERN applications with modern architecture, component-based design, and comprehensive testing.', features: ['Custom web apps', 'Responsive design', 'API integration', 'Performance optimization'] },
  { id: 'mobile-apps', icon: FaMobileAlt, title: 'Mobile Apps', desc: 'Cross-platform iOS and Android apps using React Native with native-like performance and offline support.', features: ['iOS & Android', 'Push notifications', 'Offline-first', 'App store deployment'] },
  { id: 'api-development', icon: FaCogs, title: 'API Development', desc: 'Robust RESTful and GraphQL APIs with authentication, validation, documentation, and monitoring.', features: ['REST & GraphQL', 'JWT/OAuth', 'Swagger docs', 'Rate limiting'] },
  { id: 'cloud-devops', icon: FaCloud, title: 'Cloud & DevOps', desc: 'Scalable cloud infrastructure on AWS with Docker containerization and automated CI/CD pipelines.', features: ['AWS infrastructure', 'Docker', 'CI/CD', 'Monitoring'] },
  { id: 'ui-ux-design', icon: FaPaintBrush, title: 'UI/UX Design', desc: 'User-centered designs from research and wireframes to interactive Figma prototypes and design systems.', features: ['Figma prototypes', 'Design systems', 'User research', 'Usability testing'] },
  { id: 'digital-marketing', icon: FaChartLine, title: 'Digital Marketing', desc: 'Data-driven SEO, analytics, and marketing strategies to grow your online presence and conversions.', features: ['SEO optimization', 'Analytics', 'Content marketing', 'CRO'] },
]

const videoTools = [
  { name: 'Adobe Premiere Pro', desc: 'Industry standard for YouTube & commercial projects', icon: FaVideo },
  { name: 'DaVinci Resolve', desc: 'Professional editing + color grading', icon: FaVideo },
  { name: 'Final Cut Pro', desc: 'Optimized for Mac users', icon: FaVideo },
  { name: 'Adobe After Effects', desc: 'Animations & VFX', icon: FaVideo },
  { name: 'CapCut', desc: 'Short-form content (Reels, TikTok, Shorts)', icon: FaVideo },
]

const techStacks = [
  { name: 'MERN Stack', icon: SiMongodb, items: ['MongoDB', 'Express.js', 'React.js', 'Node.js'], desc: 'Best for startups & SaaS products' },
  { name: 'Next.js + Node.js', icon: SiNextdotjs, items: ['Next.js (React)', 'Node.js Backend'], desc: 'SEO friendly modern websites' },
  { name: 'Laravel + MySQL', icon: FaPhp, items: ['Laravel (PHP)', 'MySQL Database'], desc: 'Business & e-commerce projects' },
  { name: 'WordPress', icon: FaWordpress, items: ['WordPress CMS', 'Custom Themes'], desc: 'Blogs, news & small business' },
  { name: 'Java Spring Boot', icon: FaJava, items: ['Spring Boot', 'Microservices'], desc: 'Enterprise level applications' },
  { name: '.NET Core', icon: SiDotnet, items: ['ASP.NET Core', 'Azure Cloud'], desc: 'Enterprise level applications' },
  { name: 'Python Django', icon: FaPython, items: ['Django', 'PostgreSQL'], desc: 'Rapid development & AI/ML' },
]

export default function Services() {
  return (
    <section className="section services-page">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Services</span>
          <h2>What We Deliver</h2>
          <p>End-to-end digital solutions powered by modern technology stacks</p>
        </div>

        <div className="services-list">
          {services.map(s => {
            const Icon = s.icon
            return (
              <Link to={`/services/${s.id}`} key={s.id} className="services-item">
                <span className="services-item-icon"><Icon /></span>
                <div className="services-item-content">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="services-item-features">
                    {s.features.map((f, i) => (
                      <span key={i} className="services-feature-tag">{f}</span>
                    ))}
                  </div>
                </div>
                <span className="services-item-arrow">→</span>
              </Link>
            )
          })}
        </div>

        {/* Video Editing Tools - For Foreign Clients */}
        <div className="services-extra-section">
          <div className="section-header">
            <span className="section-tag">For Global Clients</span>
            <h2>Video Editing & Post-Production</h2>
            <p>Professional video editing tools we use to attract and serve international clients</p>
          </div>
          <div className="video-tools-grid">
            {videoTools.map((t, i) => {
              const Icon = t.icon
              return (
                <div key={i} className="video-tool-card">
                  <span className="video-tool-icon"><Icon /></span>
                  <h4>{t.name}</h4>
                  <p>{t.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Tech Stacks - Foreign Companies */}
        <div className="services-extra-section">
          <div className="section-header">
            <span className="section-tag">Enterprise Stacks</span>
            <h2>Tech Stacks Used by Foreign Companies</h2>
            <p>We build on the same stacks that power global businesses</p>
          </div>
          <div className="tech-stacks-grid">
            {techStacks.map((t, i) => {
              const Icon = t.icon
              return (
                <div key={i} className="tech-stack-card">
                  <span className="tech-stack-icon"><Icon /></span>
                  <h4>{t.name}</h4>
                  <p className="tech-stack-desc">{t.desc}</p>
                  <div className="tech-stack-items">
                    {t.items.map((item, j) => (
                      <span key={j} className="tech-stack-tag">{item}</span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="services-cta">
          <h3>Not Sure Which Service You Need?</h3>
          <p>Contact us for a free consultation and we will recommend the best solution for your business.</p>
          <Link to="/contact" className="btn-primary">Get Free Consultation →</Link>
        </div>
      </div>
    </section>
  )
}
