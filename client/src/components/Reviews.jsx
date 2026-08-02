import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000'

function StarRating({ rating }) {
  return (
    <div className="star-rating" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map(star => (
        <span key={star} className={`star ${star <= rating ? 'star--filled' : ''}`}>
          <FaStar />
        </span>
      ))}
    </div>
  )
}

function formatDate(dateString) {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now - date)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 1) return 'Today'
  if (diffDays === 2) return 'Yesterday'
  if (diffDays <= 7) return `${diffDays} days ago`
  if (diffDays <= 30) return `${Math.floor(diffDays / 7)} weeks ago`

  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export default function Reviews() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchReviews()
  }, [])

  const fetchReviews = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await axios.get(`${API_BASE}/api/reviews`)

      if (response.data.success) {
        setReviews(response.data.data)

        // ✅ Console log: show whether MongoDB data is coming through or not
        const isMongo = response.data.source === 'mongodb'
        console.log(
          `%c[MongoDB Check] %cReviews API responded: %c${isMongo ? 'MONGODB ✅ (data coming from MongoDB)' : 'IN-MEMORY ⚠️ (MongoDB NOT connected — using fallback)'}`,
          'color:#2563eb;font-weight:bold',
          'color:#111827',
          isMongo ? 'color:#16a34a;font-weight:bold' : 'color:#f59e0b;font-weight:bold'
        )
        console.log('[MongoDB Check] Source:', response.data.source)
        console.log('[MongoDB Check] Review count received:', response.data.count)
        console.log('[MongoDB Check] Sample data:', response.data.data.slice(0, 3))
      } else {
        console.warn('[MongoDB Check] Reviews API returned success: false', response.data)
      }
    } catch (err) {
      console.error('Error fetching reviews:', err)
      console.error(
        `%c[MongoDB Check] %c✖ FAILED — MongoDB data is NOT coming through. Is the backend running at ${API_BASE}?`,
        'color:#2563eb;font-weight:bold',
        'color:#dc2626;font-weight:bold'
      )
      setError('Unable to load reviews. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="reviews-section">
        <div className="page">
          <div className="section-head">
            <div className="eyebrow eyebrow--alt">Testimonials</div>
            <h2 className="services-title accent5-heading">What Our Customers Say</h2>
          </div>
          <div className="reviews-loading">Loading reviews...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="reviews-section">
        <div className="page">
          <div className="section-head">
            <div className="eyebrow eyebrow--alt">Testimonials</div>
            <h2 className="services-title accent5-heading">What Our Customers Say</h2>
          </div>
          <div className="reviews-error">{error}</div>
        </div>
      </div>
    )
  }

  if (reviews.length === 0) {
    return (
      <div className="reviews-section">
        <div className="page">
          <div className="section-head">
            <div className="eyebrow eyebrow--alt">Testimonials</div>
            <h2 className="services-title accent5-heading">What Our Customers Say</h2>
            <p className="lead services-lead">Be the first to share your experience with our products and services!</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="reviews-section">
      <div className="page">
        <div className="section-head">
          <div className="eyebrow eyebrow--alt">Testimonials</div>
          <h2 className="services-title accent5-heading">What Our Customers Say</h2>
          <p className="lead services-lead">Real feedback from our valued customers who trusted us for their interior needs.</p>
        </div>

        <div className="reviews-grid">
          {reviews.map(review => (
            <div key={review._id} className="review-card">
              <div className="review-card__header">
                <div className="review-card__avatar">
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <div className="review-card__meta">
                  <h3 className="review-card__name">{review.name}</h3>
                  <div className="review-card__date">{formatDate(review.createdAt)}</div>
                </div>
              </div>

              <div className="review-card__rating">
                <StarRating rating={review.rating} />
              </div>

              <p className="review-card__text">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}