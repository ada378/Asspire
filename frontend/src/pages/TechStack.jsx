import './TechStack.css'
import { FaReact, FaNodeJs, FaPython, FaPhp, FaJava, FaDocker, FaAws, FaWordpress, FaLaravel } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiRedis, SiSpringboot, SiDotnet, SiFirebase } from 'react-icons/si'

const categories = [
  {
    title: 'Frontend Technologies',
    icon: FaReact,
    items: [
      { name: 'React.js', desc: 'Component-based UI library' },
      { name: 'Next.js', desc: 'React framework for production' },
      { name: 'Vue.js', desc: 'Progressive JS framework' },
      { name: 'TypeScript', desc: 'Typed JavaScript' },
      { name: 'Tailwind CSS', desc: 'Utility-first CSS framework' },
      { name: 'Bootstrap', desc: 'Responsive CSS framework' },
    ],
  },
  {
    title: 'Backend Technologies',
    icon: FaNodeJs,
    items: [
      { name: 'Node.js', desc: 'JavaScript runtime' },
      { name: 'Express.js', desc: 'Web framework for Node.js' },
      { name: 'Python / Django', desc: 'High-level Python framework' },
      { name: 'PHP / Laravel', desc: 'PHP web framework' },
      { name: 'Java Spring Boot', desc: 'Enterprise Java framework' },
      { name: '.NET Core', desc: 'Microsoft web framework' },
    ],
  },
  {
    title: 'Databases & Storage',
    icon: SiMongodb,
    items: [
      { name: 'MongoDB', desc: 'NoSQL document database' },
      { name: 'PostgreSQL', desc: 'Advanced relational database' },
      { name: 'MySQL', desc: 'Popular relational database' },
      { name: 'Redis', desc: 'In-memory data store' },
      { name: 'Firebase', desc: 'Google app platform' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: FaAws,
    items: [
      { name: 'AWS', desc: 'Cloud infrastructure (EC2, S3, RDS)' },
      { name: 'Docker', desc: 'Container platform' },
      { name: 'CI/CD', desc: 'Automated deployment pipelines' },
      { name: 'Nginx', desc: 'Web server & reverse proxy' },
      { name: 'Terraform', desc: 'Infrastructure as code' },
    ],
  },
  {
    title: 'CMS & Platforms',
    icon: FaWordpress,
    items: [
      { name: 'WordPress', desc: 'CMS for blogs & business sites' },
      { name: 'Shopify', desc: 'E-commerce platform' },
      { name: 'Webflow', desc: 'Visual web design tool' },
    ],
  },
  {
    title: 'Marketing & Analytics',
    icon: FaLaravel,
    items: [
      { name: 'Google Analytics', desc: 'Website analytics' },
      { name: 'SEMrush', desc: 'SEO & competitive research' },
      { name: 'HubSpot', desc: 'CRM & marketing platform' },
      { name: 'Mailchimp', desc: 'Email marketing' },
      { name: 'Hotjar', desc: 'User behavior analytics' },
    ],
  },
]

const tools = [
  'Git & GitHub', 'VS Code', 'Postman', 'Figma', 'Jira', 'Slack', 'Notion',
  'Jest', 'Cypress', 'ESLint', 'Prettier', 'Webpack', 'Vite', 'npm', 'yarn',
]

export default function TechStack() {
  return (
    <section className="section tech-stack-page">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Technology</span>
          <h2>Our Technology Stack</h2>
          <p>Modern tools and frameworks we use to deliver world-class digital solutions</p>
        </div>

        <div className="ts-categories">
          {categories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <div key={i} className="ts-category-card">
                <div className="ts-category-header">
                  <span className="ts-category-icon"><Icon /></span>
                  <h3>{cat.title}</h3>
                </div>
                <div className="ts-category-items">
                  {cat.items.map((item, j) => (
                    <div key={j} className="ts-item">
                      <strong>{item.name}</strong>
                      <span>{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="ts-section">
          <h3>Tools & Platforms We Use Daily</h3>
          <div className="ts-chips">
            {tools.map(t => (
              <span key={t} className="ts-chip">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
