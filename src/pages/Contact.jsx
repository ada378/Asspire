import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', service: 'Web Development (MERN Stack)', budget: 'Rs. 1,00,000 - Rs. 5,00,000', details: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will respond within 24 hours with a proposal.')
    setForm({ firstName: '', lastName: '', email: '', phone: '', service: 'Web Development (MERN Stack)', budget: 'Rs. 1,00,000 - Rs. 5,00,000', details: '' })
  }

  return (
    <section className="section contact-page">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2>Let's Build Something Amazing</h2>
          <p>Free consultation within 24 hours. No commitment required.</p>
        </div>

        <div className="contact-page-grid">
          <div className="contact-page-info">
            <div className="contact-info-badge">FREE CONSULTATION AVAILABLE</div>
            <div className="contact-info-item"><span className="contact-info-label">Email</span><span>hello@aspiremediatech.com</span></div>
            <div className="contact-info-item"><span className="contact-info-label">Phone</span><span>+91 98765 43210</span></div>
            <div className="contact-info-item"><span className="contact-info-label">WhatsApp</span><span>+91 98765 43210</span></div>
            <div className="contact-info-item"><span className="contact-info-label">Address</span><span>Gorakhpur, Uttar Pradesh, India</span></div>
            <div className="contact-info-item"><span className="contact-info-label">Hours</span><span>Mon — Sat: 9AM – 7PM IST</span></div>
            <div className="contact-info-item"><span className="contact-info-label">Website</span><span>aspiremediatech.com</span></div>
          </div>

          <form className="contact-page-form" onSubmit={handleSubmit}>
            <div className="cp-form-row">
              <input type="text" name="firstName" placeholder="First Name *" value={form.firstName} onChange={handleChange} required />
              <input type="text" name="lastName" placeholder="Last Name *" value={form.lastName} onChange={handleChange} required />
            </div>
            <div className="cp-form-row">
              <input type="email" name="email" placeholder="Email Address *" value={form.email} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
            </div>
            <select name="service" value={form.service} onChange={handleChange}>
              <option>Web Development (MERN Stack)</option>
              <option>Mobile Apps</option>
              <option>API Development</option>
              <option>Cloud & DevOps</option>
              <option>UI/UX Design</option>
              <option>Digital Marketing</option>
            </select>
            <select name="budget" value={form.budget} onChange={handleChange}>
              <option>Rs. 1,00,000 - Rs. 5,00,000</option>
              <option>Rs. 5,00,000 - Rs. 10,00,000</option>
              <option>Rs. 10,00,000+</option>
            </select>
            <textarea name="details" placeholder="Tell us about your project *" rows="5" value={form.details} onChange={handleChange} required></textarea>
            <button type="submit" className="btn-primary btn-full">Send Message →</button>
          </form>
        </div>
      </div>
    </section>
  )
}
