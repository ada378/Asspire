import { useState, useEffect } from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'
import './Reviews.css'

const API = import.meta.env.VITE_API_URL || '/api'

function Stars({ rating }) {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5
  const empty = 5 - full - (half ? 1 : 0)
  return (
    <span className="review-stars">
      {[...Array(full)].map((_, i) => <FaStar key={`f${i}`} />)}
      {half && <FaStarHalfAlt />}
      {[...Array(empty)].map((_, i) => <FaRegStar key={`e${i}`} />)}
    </span>
  )
}

export default function Reviews() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({ name: '', company: '', position: '', rating: 5, text: '' })
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    fetch(API + '/reviews')
      .then(res => res.json())
      .then(data => { setReviews(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.name.trim() || !form.text.trim()) return
    setSubmitting(true)
    setMessage(null)
    try {
      const res = await fetch(API + '/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, rating: Number(form.rating) })
      })
      if (!res.ok) throw new Error()
      const review = await res.json()
      setReviews(prev => [review, ...prev])
      setForm({ name: '', company: '', position: '', rating: 5, text: '' })
      setMessage({ type: 'success', text: 'Thank you for your review!' })
    } catch {
      setMessage({ type: 'error', text: 'Failed to submit. Please try again.' })
    }
    setSubmitting(false)
  }

  function getInitials(name) {
    return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) || '?'
  }

  return (
    <div className="reviews-page">
      {/* Hero */}
      <section className="reviews-hero">
        <div className="container">
          <span className="section-tag">Testimonials</span>
          <h1>What Our Clients Say</h1>
          <p>Real feedback from real clients we have worked with around the world</p>
        </div>
      </section>

      {/* Reviews List */}
      <section className="section">
        <div className="container">
          {loading ? (
            <div className="reviews-loading">Loading reviews...</div>
          ) : reviews.length === 0 ? (
            <div className="reviews-empty">No reviews yet. Be the first to share your experience!</div>
          ) : (
            <div className="reviews-grid">
              {reviews.map(r => (
                <div key={r._id} className="review-card">
                  <div className="review-card-header">
                    <div className="review-avatar">{r.avatar || getInitials(r.name)}</div>
                    <div>
                      <strong className="review-name">{r.name}</strong>
                      {r.company && <span className="review-company">{r.company}{r.position ? `, ${r.position}` : ''}</span>}
                    </div>
                  </div>
                  <Stars rating={r.rating} />
                  <p className="review-text">{r.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Submit Review */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Share Your Experience</span>
            <h2>Leave a Review</h2>
            <p>We value your feedback and are committed to continuous improvement</p>
          </div>
          {message && (
            <div className={`review-message ${message.type}`}>{message.text}</div>
          )}
          <form className="review-form" onSubmit={handleSubmit}>
            <div className="review-form-row">
              <div className="review-form-group">
                <label>Your Name *</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required />
              </div>
              <div className="review-form-group">
                <label>Company</label>
                <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Company name" />
              </div>
            </div>
            <div className="review-form-row">
              <div className="review-form-group">
                <label>Position</label>
                <input type="text" name="position" value={form.position} onChange={handleChange} placeholder="e.g. CEO" />
              </div>
              <div className="review-form-group">
                <label>Rating *</label>
                <select name="rating" value={form.rating} onChange={handleChange}>
                  <option value="5">5 - Excellent</option>
                  <option value="4">4 - Great</option>
                  <option value="3">3 - Good</option>
                  <option value="2">2 - Fair</option>
                  <option value="1">1 - Poor</option>
                </select>
              </div>
            </div>
            <div className="review-form-group">
              <label>Your Review *</label>
              <textarea name="text" value={form.text} onChange={handleChange} rows="5" placeholder="Tell us about your experience working with Aspire Mediatech..." required />
            </div>
            <button type="submit" className="btn-primary" disabled={submitting}>
              {submitting ? 'Submitting...' : 'Submit Review'}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
