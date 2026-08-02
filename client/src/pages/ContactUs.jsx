import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { FaInstagram, FaEnvelope, FaWhatsapp, FaYoutube, FaStar } from 'react-icons/fa'
import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function ContactUs() {
  const whatsappNumber = '+919640400030'
  const whatsappText = encodeURIComponent('Hi, I would like to know more about PVC/WPC products.')

  const [formData, setFormData] = useState({ name: '', rating: 0, review: '' })
  const [hoverRating, setHoverRating] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [submitMsg, setSubmitMsg] = useState(null)

  const handleStarClick = (star) => {
    setFormData(prev => ({ ...prev, rating: star }))
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitMsg(null)

    if (!formData.name.trim()) {
      setSubmitMsg({ type: 'error', text: 'Please enter your name' })
      return
    }
    if (formData.rating === 0) {
      setSubmitMsg({ type: 'error', text: 'Please select a star rating' })
      return
    }
    if (!formData.review.trim()) {
      setSubmitMsg({ type: 'error', text: 'Please write your review' })
      return
    }

    setSubmitting(true)
    try {
      const response = await axios.post(`${API_BASE}/api/reviews`, {
        name: formData.name.trim(),
        rating: formData.rating,
        review: formData.review.trim()
      })

      // ✅ Console log: show where the submitted review was saved
      const savedSource = response.data?.source === 'mongodb' ? 'MONGODB ✅' : 'IN-MEMORY ⚠️'
      console.log(
        `%c[MongoDB Check] %cReview submitted successfully — saved to: %c${savedSource}`,
        'color:#2563eb;font-weight:bold',
        'color:#111827',
        response.data?.source === 'mongodb' ? 'color:#16a34a;font-weight:bold' : 'color:#f59e0b;font-weight:bold'
      )
      console.log('[MongoDB Check] Submitted review data:', response.data?.data)

      setSubmitMsg({ type: 'success', text: 'Thank you! Your review has been submitted successfully.' })
      setFormData({ name: '', rating: 0, review: '' })
    } catch (err) {
      const errMsg = err.response?.data?.error || 'Something went wrong. Please try again.'
      setSubmitMsg({ type: 'error', text: errMsg })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact RS Interiors Hyderabad | PVC & WPVC Interior Designers</title>
        <meta name="description" content="Contact RS Interiors, the best interior designer in Hyderabad, for premium PVC cupboards, WPVC wardrobes, modular kitchens, and luxury home interiors. Call +919640400030 for free consultation." />
        <link rel="canonical" href="https://www.rsinteriordesigns.in/contact" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rsinteriordesigns.in/contact" />
        <meta property="og:title" content="Contact RS Interiors Hyderabad | PVC & WPVC Interior Designers" />
        <meta property="og:description" content="Contact RS Interiors, the best interior designer in Hyderabad, for PVC cupboards, modular kitchens, wardrobes, and home interior design services. Call +919640400030." />
        <meta property="og:image" content="https://www.rsinteriordesigns.in/src/assets/logo.png" />
        <meta property="og:site_name" content="RS Interiors" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.rsinteriordesigns.in/contact" />
        <meta name="twitter:title" content="Contact RS Interiors Hyderabad | PVC & WPVC Interior Designers" />
        <meta name="twitter:description" content="Contact RS Interiors for PVC cupboards, modular kitchens, wardrobes, and home interior design." />
        <meta name="twitter:image" content="https://www.rsinteriordesigns.in/src/assets/logo.png" />
      </Helmet>

      <section className="page contact-page">
        <h1>Contact - RS Interiors PVC & WPC</h1>
        <p className="lead">Contact RS Interiors, the <span className="seo-keyword">best interior designer in Hyderabad</span> for <span className="seo-keyword">PVC cupboards</span>, <span className="seo-keyword">WPVC wardrobes</span>, and modular kitchens. Reach us instantly through WhatsApp, Gmail, or Instagram for free consultation.</p>

        <div className="contact-options">
          <a className="contact-option contact-option--whatsapp" href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`} target="_blank" rel="noreferrer">
            <div className="contact-option__icon" aria-hidden="true"><FaWhatsapp /></div>
            <div className="contact-option__title">WhatsApp</div>
            <div className="contact-option__sub">Chat with us now</div>
          </a>

          <a className="contact-option contact-option--gmail" href="mailto:inforsinteriordesgins@gmail.com?subject=Contact%20from%20RS%20Interiors&body=Hi%20team%2C%0A%0AI%27d%20like%20to%20know%20more%20about%20your%20PVC%2FWPC%20products.%0A%0AName%3A%20%0APhone%3A%20">
            <div className="contact-option__icon" aria-hidden="true"><FaEnvelope /></div>
            <div className="contact-option__title">Gmail / Email</div>
            <div className="contact-option__sub">inforsinteriordesgins@gmail.com</div>
          </a>

          <a className="contact-option contact-option--instagram" href="https://www.instagram.com/rs_interior_desgins?igsh=MWl1Z253bzQzeHdocQ==" target="_blank" rel="noreferrer">
            <div className="contact-option__icon" aria-hidden="true"><FaInstagram /></div>
            <div className="contact-option__title">Instagram</div>
            <div className="contact-option__sub">Follow our latest work</div>
          </a>

          <a className="contact-option contact-option--youtube" href="https://www.youtube.com/@babuboby8387/shorts" target="_blank" rel="noreferrer">
            <div className="contact-option__icon" aria-hidden="true"><FaYoutube /></div>
            <div className="contact-option__title">YouTube</div>
            <div className="contact-option__sub">Watch our project videos</div>
          </a>
        </div>

        <div className="contact-fallback">
          <div className="contact-fallback__item">
            <b>Mobile:</b> <a className="contact-num" href="tel:9640400030">+919640400030</a>
          </div>
          <div className="contact-fallback__item">
            <b>Mobile:</b> <a className="contact-num" href="tel:+1768000001556">+91768000001556</a>
          </div>
        </div>

        {/* REVIEW FORM */}
        <div className="review-form-section">
          <div className="section-head">
            <div className="eyebrow eyebrow--alt">Share Your Experience</div>
            <h2 className="services-title accent5-heading">Post a Review</h2>
            <p className="lead services-lead">We value your feedback! Share your experience with our products and services.</p>
          </div>

          <form className="review-form" onSubmit={handleSubmit}>
            <div className="review-form-field">
              <label htmlFor="review-name">Your Name</label>
              <input id="review-name" name="name" type="text" placeholder="Enter your name" value={formData.name} onChange={handleChange} maxLength={100} required />
            </div>

            <div className="review-form-field">
              <label>Your Rating</label>
              <div className="star-rating-input">
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    type="button"
                    className={`star-btn ${star <= (hoverRating || formData.rating) ? 'active' : ''}`}
                    onClick={() => handleStarClick(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                  >
                    <FaStar />
                  </button>
                ))}
                <span className="star-rating-label">
                  {formData.rating > 0 ? `${formData.rating} / 5` : 'Click to rate'}
                </span>
              </div>
            </div>

            <div className="review-form-field">
              <label htmlFor="review-text">Your Review</label>
              <textarea id="review-text" name="review" placeholder="Tell us about your experience..." value={formData.review} onChange={handleChange} maxLength={500} rows={4} required />
              <span className="char-count">{formData.review.length}/500</span>
            </div>

            {submitMsg && (
              <div className={`review-form-msg review-form-msg--${submitMsg.type}`}>
                {submitMsg.text}
              </div>
            )}

            <button type="submit" className="btn review-form-submit" disabled={submitting}>
              {submitting ? 'Submitting...' : 'Submit Review'}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}