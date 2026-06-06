import { Link } from 'react-router-dom'
import './Services.css'

const services = [
  { id: 'web-development', icon: '🌐', title: 'Web Development', desc: 'Full-stack MERN applications with modern architecture, component-based design, and comprehensive testing.', features: ['Custom web apps', 'Responsive design', 'API integration', 'Performance optimization'] },
  { id: 'mobile-apps', icon: '📱', title: 'Mobile Apps', desc: 'Cross-platform iOS and Android apps using React Native with native-like performance and offline support.', features: ['iOS & Android', 'Push notifications', 'Offline-first', 'App store deployment'] },
  { id: 'api-development', icon: '⚙️', title: 'API Development', desc: 'Robust RESTful and GraphQL APIs with authentication, validation, documentation, and monitoring.', features: ['REST & GraphQL', 'JWT/OAuth', 'Swagger docs', 'Rate limiting'] },
  { id: 'cloud-devops', icon: '☁️', title: 'Cloud & DevOps', desc: 'Scalable cloud infrastructure on AWS with Docker containerization and automated CI/CD pipelines.', features: ['AWS infrastructure', 'Docker', 'CI/CD', 'Monitoring'] },
  { id: 'ui-ux-design', icon: '🎨', title: 'UI/UX Design', desc: 'User-centered designs from research and wireframes to interactive Figma prototypes and design systems.', features: ['Figma prototypes', 'Design systems', 'User research', 'Usability testing'] },
  { id: 'digital-marketing', icon: '📈', title: 'Digital Marketing', desc: 'Data-driven SEO, analytics, and marketing strategies to grow your online presence and conversions.', features: ['SEO optimization', 'Analytics', 'Content marketing', 'CRO'] },
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
          {services.map(s => (
            <Link to={`/services/${s.id}`} key={s.id} className="services-item">
              <span className="services-item-icon">{s.icon}</span>
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
          ))}
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
