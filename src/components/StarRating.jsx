export default function StarRating({ rating = 0, size = 'sm', showValue = false, count }) {
  const rounded = Math.round(rating * 2) / 2
  const stars = [1, 2, 3, 4, 5].map((n) => {
    if (rounded >= n) return 'full'
    if (rounded >= n - 0.5) return 'half'
    return 'empty'
  })

  return (
    <span className={`star-rating star-rating--${size}`} aria-label={`Rated ${rating} out of 5`}>
      <span className="stars" aria-hidden="true">
        {stars.map((type, i) => (
          <span key={i} className={`star star--${type}`}>
            ★
          </span>
        ))}
      </span>
      {showValue && <span className="star-value">{rating.toFixed(1)}</span>}
      {typeof count === 'number' && <span className="star-count">({count})</span>}
    </span>
  )
}
