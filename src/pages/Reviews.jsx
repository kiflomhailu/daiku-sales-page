import { useMemo, useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import StarRating from '../components/StarRating.jsx'
import { reviews as seedReviews } from '../data/store.js'

export default function Reviews() {
  const [items, setItems] = useState(seedReviews)
  const [filter, setFilter] = useState(0)
  const [form, setForm] = useState({ name: '', title: '', text: '', rating: 5 })
  const [submitted, setSubmitted] = useState(false)

  const average = useMemo(
    () => items.reduce((sum, r) => sum + r.rating, 0) / items.length,
    [items],
  )

  const distribution = useMemo(() => {
    const dist = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
    items.forEach((r) => {
      dist[r.rating] = (dist[r.rating] || 0) + 1
    })
    return dist
  }, [items])

  const visible = filter === 0 ? items : items.filter((r) => r.rating === filter)

  const submitReview = (event) => {
    event.preventDefault()
    const newReview = {
      id: Date.now(),
      name: form.name || 'Anonymous',
      location: 'Verified buyer',
      rating: Number(form.rating),
      date: 'Just now',
      title: form.title || 'My review',
      text: form.text,
      product: 'DAIKU customer',
    }
    setItems((prev) => [newReview, ...prev])
    setForm({ name: '', title: '', text: '', rating: 5 })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="page">
      <PageHeader
        eyebrow="What customers say"
        title="Reviews"
        subtitle="Real feedback from DAIKU customers across Belgium and beyond."
        trail={[{ label: 'Reviews' }]}
      />

      <div className="page-body reviews-layout">
        <div className="reviews-main">
          <section className="review-overview">
            <div className="overview-score">
              <strong>{average.toFixed(1)}</strong>
              <StarRating rating={average} size="md" />
              <span>{items.length} reviews</span>
            </div>
            <div className="overview-bars">
              {[5, 4, 3, 2, 1].map((star) => {
                const pct = items.length ? (distribution[star] / items.length) * 100 : 0
                return (
                  <button
                    type="button"
                    key={star}
                    className={`bar-row${filter === star ? ' is-active' : ''}`}
                    onClick={() => setFilter(filter === star ? 0 : star)}
                  >
                    <span className="bar-label">{star} ★</span>
                    <span className="bar-track">
                      <span className="bar-fill" style={{ width: `${pct}%` }} />
                    </span>
                    <span className="bar-count">{distribution[star]}</span>
                  </button>
                )
              })}
            </div>
          </section>

          <div className="review-filter-row">
            <span>Showing {visible.length} reviews</span>
            {filter !== 0 && (
              <button type="button" className="text-btn" onClick={() => setFilter(0)}>
                Clear filter
              </button>
            )}
          </div>

          <div className="reviews-grid">
            {visible.map((review) => (
              <article className="review-item" key={review.id}>
                <div className="review-item-head">
                  <div className="review-avatar" aria-hidden="true">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <strong>{review.name}</strong>
                    <span>{review.location} · {review.date}</span>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
                <h4>{review.title}</h4>
                <p>{review.text}</p>
                <span className="review-product">on {review.product}</span>
              </article>
            ))}
          </div>
        </div>

        <aside className="write-review">
          <h2>Write a review</h2>
          <p>Share your experience with the DAIKU community.</p>
          <form onSubmit={submitReview}>
            <label>
              <span>Your name</span>
              <input
                type="text"
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                placeholder="Your name"
              />
            </label>
            <label>
              <span>Rating</span>
              <select
                value={form.rating}
                onChange={(event) => setForm({ ...form, rating: event.target.value })}
              >
                {[5, 4, 3, 2, 1].map((n) => (
                  <option key={n} value={n}>
                    {n} star{n > 1 ? 's' : ''}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>Title</span>
              <input
                type="text"
                value={form.title}
                onChange={(event) => setForm({ ...form, title: event.target.value })}
                placeholder="Sum it up"
              />
            </label>
            <label>
              <span>Review</span>
              <textarea
                rows="4"
                required
                value={form.text}
                onChange={(event) => setForm({ ...form, text: event.target.value })}
                placeholder="Tell us what you think"
              />
            </label>
            <button type="submit" className="primary-cta">
              Submit review
            </button>
            {submitted && <p className="coupon-ok">Thanks! Your review was added.</p>}
          </form>
        </aside>
      </div>
    </div>
  )
}
