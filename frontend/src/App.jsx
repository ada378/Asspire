import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import TechStack from './pages/TechStack'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import Reviews from './pages/Reviews'
import Founder from './pages/Founder'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/founder" element={<Founder />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
