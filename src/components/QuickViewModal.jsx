import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import StarRating from './StarRating.jsx'
import { formatPrice, getDiscountPercent } from '../data/store.js'
import { useStore } from '../context/StoreContext.jsx'

export default function QuickViewModal({ product, onClose }) {
  const { addToCart, toggleWishlist, isInWishlist } = useStore()

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!product) return null
  const discount = getDiscountPercent(product.price, product.oldPrice)
  const saved = isInWishlist(product.id)

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal quickview"
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="modal-close" aria-label="Close" onClick={onClose}>
          ✕
        </button>
        <div className="quickview-media">
          {discount > 0 && <span className="pc-badge pc-badge--sale">-{discount}%</span>}
          <img src={product.image} alt={product.name} />
        </div>
        <div className="quickview-info">
          <p className="pc-cat">{product.categoryName}</p>
          <h2>{product.name}</h2>
          <StarRating rating={product.rating} count={product.reviews} />
          <div className="pc-price quickview-price">
            <strong>{formatPrice(product.price)}</strong>
            {product.oldPrice > product.price && <span>{formatPrice(product.oldPrice)}</span>}
          </div>
          <p className="quickview-desc">{product.description}</p>
          <ul className="quickview-features">
            {product.features.slice(0, 3).map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <div className="quickview-actions">
            <button type="button" className="primary-cta" onClick={() => addToCart(product.id)}>
              Add to cart
            </button>
            <button
              type="button"
              className={`icon-btn${saved ? ' is-active' : ''}`}
              aria-label="Toggle wishlist"
              onClick={() => toggleWishlist(product.id)}
            >
              {saved ? '♥' : '♡'}
            </button>
          </div>
          <Link className="quickview-link" to={`/product/${product.slug}`} onClick={onClose}>
            View full details →
          </Link>
        </div>
      </div>
    </div>
  )
}
