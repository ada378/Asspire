import { Link, useParams } from 'react-router-dom'
import { FaGlobe, FaMobileAlt, FaCogs, FaCloud, FaPaintBrush, FaChartLine } from 'react-icons/fa'
import './ServiceDetail.css'

const serviceData = {
  'web-development': {
    title: 'Web Development',
    icon: FaGlobe,
    tagline: 'Full-stack MERN applications',
    description: 'We build production-grade web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Our development process follows industry best practices including component-based architecture, state management with Redux Toolkit, responsive design with Tailwind CSS, and comprehensive testing with Jest and Cypress.',
    features: [
      'Custom MERN stack web applications',
      'Responsive, mobile-first design',
      'RESTful & GraphQL API integration',
      'Authentication & authorization (JWT)',
      'Database design & optimization',
      'CI/CD pipeline setup',
      'Performance optimization (98+ Lighthouse)',
    ],
    tech: ['React.js', 'Next.js', 'Express.js', 'MongoDB', 'Node.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS'],
  },
  'mobile-apps': {
    title: 'Mobile Apps',
    icon: FaMobileAlt,
    tagline: 'Cross-platform with React Native',
    description: 'We develop high-performance cross-platform mobile applications using React Native, delivering native-like experiences on both iOS and Android from a single codebase. Our apps are built with performance, scalability, and user experience in mind.',
    features: [
      'Cross-platform iOS & Android apps',
      'React Native with native modules',
      'Push notifications & real-time features',
      'Offline-first architecture',
      'App store deployment & management',
      'Performance monitoring & analytics',
      'Third-party API integrations',
    ],
    tech: ['React Native', 'Expo', 'Redux', 'Firebase', 'Socket.io', 'App Center'],
  },
  'api-development': {
    title: 'API Development',
    icon: FaCogs,
    tagline: 'REST & GraphQL APIs',
    description: 'We design and build robust, scalable APIs that power your applications. Whether you need RESTful endpoints or GraphQL schemas, we ensure your API is secure, well-documented, and performant.',
    features: [
      'RESTful & GraphQL API design',
      'Authentication (JWT, OAuth)',
      'Rate limiting & security headers',
      'Input validation & sanitization',
      'API documentation (Swagger/OpenAPI)',
      'Error handling & logging',
      'Performance monitoring',
    ],
    tech: ['Express.js', 'GraphQL', 'Apollo', 'PostgreSQL', 'Redis', 'Swagger', 'Docker'],
  },
  'cloud-devops': {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    tagline: 'AWS, Docker, CI/CD',
    description: 'We provide end-to-end cloud infrastructure and DevOps services to ensure your applications are reliable, scalable, and efficiently deployed. From containerization to continuous deployment, we handle the infrastructure so you can focus on building.',
    features: [
      'AWS infrastructure (EC2, S3, RDS, Lambda)',
      'Docker containerization',
      'CI/CD pipelines (GitHub Actions)',
      'Nginx reverse proxy & load balancing',
      'Automated testing & deployment',
      'Infrastructure as Code (Terraform)',
      '24/7 monitoring & alerts',
    ],
    tech: ['AWS', 'Docker', 'Nginx', 'GitHub Actions', 'Terraform', 'CloudWatch', 'Datadog'],
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    icon: FaPaintBrush,
    tagline: 'Figma prototypes & design systems',
    description: 'We create beautiful, user-centered designs that drive engagement and conversions. Our design process starts with research and wireframes, evolves into interactive Figma prototypes, and culminates in a comprehensive design system.',
    features: [
      'User research & personas',
      'Wireframing & prototyping (Figma)',
      'Visual design & branding',
      'Design systems & component libraries',
      'Usability testing & iteration',
      'Responsive design specs',
      'Developer handoff (Zeplin/Figma)',
    ],
    tech: ['Figma', 'Adobe XD', 'Sketch', 'Zeplin', 'Storybook', 'Tailwind CSS'],
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    icon: FaChartLine,
    tagline: 'SEO & Analytics',
    description: 'We help you reach your target audience and grow your online presence through data-driven digital marketing strategies. From search engine optimization to analytics, we ensure your business gets the visibility it deserves.',
    features: [
      'Search Engine Optimization (SEO)',
      'Google Analytics & Tag Manager setup',
      'Social media marketing strategy',
      'Content marketing & blogging',
      'Email marketing campaigns',
      'Conversion rate optimization (CRO)',
      'Monthly reports & insights',
    ],
    tech: ['Google Analytics', 'SEO Tools', 'SEMrush', 'HubSpot', 'Mailchimp', 'Hotjar'],
  },
}

export default function ServiceDetail() {
  const { serviceId } = useParams()
  const service = serviceData[serviceId]
  const Icon = service?.icon

  if (!service) {
    return (
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Service Not Found</h2>
          <p>The service you are looking for does not exist.</p>
          <Link to="/services" className="btn-primary" style={{ marginTop: 24, display: 'inline-block' }}>View All Services</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section service-detail">
      <div className="container">
        <div className="sd-header">
          <Link to="/services" className="sd-back">← Back to Services</Link>
          <div className="sd-title-row">
            <span className="sd-icon">{Icon && <Icon />}</span>
            <div>
              <span className="section-tag">{service.tagline}</span>
              <h2 className="sd-title">{service.title}</h2>
            </div>
          </div>
          <p className="sd-desc">{service.description}</p>
        </div>

        <div className="sd-content">
          <div className="sd-features">
            <h3>What We Deliver</h3>
            <ul>
              {service.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
          <div className="sd-tech">
            <h3>Technologies</h3>
            <div className="sd-tech-grid">
              {service.tech.map((t, i) => (
                <span key={i} className="sd-tech-chip">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="sd-cta">
          <h3>Need {service.title} Services?</h3>
          <p>Let's discuss your project requirements. Free consultation within 24 hours.</p>
          <Link to="/contact" className="btn-primary">Get in Touch →</Link>
        </div>
      </div>
    </section>
  )
}
