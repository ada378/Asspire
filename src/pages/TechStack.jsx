import './TechStack.css'

export default function TechStack() {
  return (
    <section className="section tech-stack-page">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Technology</span>
          <h2>MERN Stack Architecture</h2>
          <p>Production-grade setup we use on every project</p>
        </div>

        <div className="ts-grid">
          <div className="ts-card"><div className="ts-letter">M</div><h3>MongoDB</h3><p>NoSQL Database · Atlas Cloud</p><span className="ts-detail">Document-oriented, schema-less database with horizontal scaling and rich query language.</span></div>
          <div className="ts-card"><div className="ts-letter">E</div><h3>Express.js</h3><p>Backend Framework · REST / GraphQL</p><span className="ts-detail">Fast, unopinionated web framework for Node.js with robust routing and middleware.</span></div>
          <div className="ts-card"><div className="ts-letter">R</div><h3>React.js</h3><p>Frontend UI · Next.js / Vite</p><span className="ts-detail">Component-based UI library for building dynamic, high-performance user interfaces.</span></div>
          <div className="ts-card"><div className="ts-letter">N</div><h3>Node.js</h3><p>Runtime Engine · v20 LTS</p><span className="ts-detail">JavaScript runtime built on V8 engine. Event-driven, non-blocking I/O for scalable apps.</span></div>
        </div>

        <div className="ts-section">
          <h3>Tools & Libraries</h3>
          <div className="ts-chips">
            {['TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Jest', 'Cypress', 'Docker', 'AWS EC2', 'Nginx', 'Redis', 'Socket.io', 'GitHub Actions', 'Terraform'].map(t => (
              <span key={t} className="ts-chip">{t}</span>
            ))}
          </div>
        </div>

        <div className="ts-code-section">
          <h3>Server Setup</h3>
          <div className="ts-code-block">
            <div className="ts-code-header">server/app.js</div>
            <pre>{`const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/projects', projRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000))
  .catch(err => console.error(err));`}</pre>
          </div>
          <div className="ts-code-block">
            <div className="ts-code-header">client/App.jsx</div>
            <pre>{`import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/users')
      .then(res => setData(res.data))
      .catch(console.error);
  }, []);

  return <BrowserRouter>
    <Routes>...</Routes>
  </BrowserRouter>;
}`}</pre>
          </div>
        </div>
      </div>
    </section>
  )
}
