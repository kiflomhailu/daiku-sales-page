import { Link } from 'react-router-dom'
import StarRating from './StarRating.jsx'
import { formatPrice, getDiscountPercent } from '../data/store.js'
import { useStore } from '../context/StoreContext.jsx'

const stockLabel = {
  in: { text: 'In stock', className: 'in' },
  low: { text: 'Low stock', className: 'low' },
  out: { text: 'Out of stock', className: 'out' },
}

export default function ProductCard({ product, onQuickView }) {
  const { addToCart, toggleWishlist, isInWishlist } = useStore()
  const discount = getDiscountPercent(product.price, product.oldPrice)
  const hoverImage = product.gallery?.[1] || product.image
  const stock = stockLabel[product.stock] || stockLabel.in
  const saved = isInWishlist(product.id)

  return (
    <article className="pc">
      <div className="pc-media">
        {discount > 0 && <span className="pc-badge pc-badge--sale">-{discount}%</span>}
        {product.tag && <span className="pc-badge pc-badge--tag">{product.tag}</span>}

        <button
          type="button"
          className={`pc-wish${saved ? ' is-active' : ''}`}
          aria-label={saved ? 'Remove from wishlist' : 'Add to wishlist'}
          aria-pressed={saved}
          onClick={() => toggleWishlist(product.id)}
        >
          {saved ? '♥' : '♡'}
        </button>

        <Link to={`/product/${product.slug}`} className="pc-img-link" aria-label={product.name}>
          <img className="pc-img pc-img--primary" src={product.image} alt={product.name} loading="lazy" />
          <img className="pc-img pc-img--hover" src={hoverImage} alt="" loading="lazy" />
        </Link>

        {onQuickView && (
          <button type="button" className="pc-quick" onClick={() => onQuickView(product)}>
            Quick View
          </button>
        )}
      </div>

      <div className="pc-body">
        <Link to={`/category/${product.category}`} className="pc-cat">
          {product.categoryName}
        </Link>
        <h3 className="pc-title">
          <Link to={`/product/${product.slug}`}>{product.name}</Link>
        </h3>
        <StarRating rating={product.rating} count={product.reviews} />

        <div className="pc-price">
          <strong>{formatPrice(product.price)}</strong>
          {product.oldPrice > product.price && <span>{formatPrice(product.oldPrice)}</span>}
        </div>

        <span className={`pc-stock pc-stock--${stock.className}`}>{stock.text}</span>

        <button
          type="button"
          className="pc-add"
          disabled={product.stock === 'out'}
          onClick={() => addToCart(product.id)}
        >
          {product.stock === 'out' ? 'Sold out' : 'Add to cart'}
        </button>
      </div>
    </article>
  )
}
