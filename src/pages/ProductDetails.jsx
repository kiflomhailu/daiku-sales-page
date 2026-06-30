import { useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import StarRating from '../components/StarRating.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import EmptyState from '../components/EmptyState.jsx'
import { useStore } from '../context/StoreContext.jsx'
import {
  productBySlug,
  products,
  reviews,
  formatPrice,
  getDiscountPercent,
} from '../data/store.js'

const stockLabel = {
  in: { text: 'In stock — ships today', className: 'in' },
  low: { text: 'Low stock — order soon', className: 'low' },
  out: { text: 'Out of stock', className: 'out' },
}

export default function ProductDetails() {
  const { slug } = useParams()
  const product = productBySlug(slug)
  const { addToCart, toggleWishlist, isInWishlist } = useStore()
  const [activeImage, setActiveImage] = useState(0)
  const [qty, setQty] = useState(1)
  const [tab, setTab] = useState('description')

  const related = useMemo(() => {
    if (!product) return []
    return products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 4)
  }, [product])

  const productReviews = useMemo(() => {
    if (!product) return []
    const matched = reviews.filter((r) => r.product === product.name)
    return matched.length > 0 ? matched : reviews.slice(0, 3)
  }, [product])

  if (!product) {
    return (
      <div className="page">
        <PageHeader title="Product not found" trail={[{ label: 'Products', to: '/products' }, { label: 'Not found' }]} />
        <div className="page-body">
          <EmptyState
            icon="📦"
            title="This product is unavailable"
            message="The product may have sold out or the link is incorrect."
            actionTo="/products"
            actionLabel="Continue shopping"
          />
        </div>
      </div>
    )
  }

  const discount = getDiscountPercent(product.price, product.oldPrice)
  const stock = stockLabel[product.stock] || stockLabel.in
  const saved = isInWishlist(product.id)
  const gallery = product.gallery && product.gallery.length ? product.gallery : [product.image]

  return (
    <div className="page">
      <div className="pdp-crumbs">
        <Breadcrumbs
          trail={[
            { label: 'Products', to: '/products' },
            { label: product.categoryName, to: `/category/${product.category}` },
            { label: product.name },
          ]}
        />
      </div>

      <section className="pdp">
        <div className="pdp-gallery">
          <div className="pdp-main-image">
            {discount > 0 && <span className="pc-badge pc-badge--sale">-{discount}%</span>}
            <img src={gallery[activeImage]} alt={product.name} />
          </div>
          <div className="pdp-thumbs">
            {gallery.map((image, index) => (
              <button
                type="button"
                key={index}
                className={`pdp-thumb${activeImage === index ? ' is-active' : ''}`}
                onClick={() => setActiveImage(index)}
                aria-label={`View image ${index + 1}`}
              >
                <img src={image} alt="" />
              </button>
            ))}
          </div>
        </div>

        <div className="pdp-info">
          <Link to={`/category/${product.category}`} className="pc-cat">
            {product.categoryName}
          </Link>
          <h1>{product.name}</h1>
          <div className="pdp-rating">
            <StarRating rating={product.rating} showValue />
            <a href="#reviews" className="pdp-review-link">
              {product.reviews} reviews
            </a>
          </div>

          <div className="pdp-price">
            <strong>{formatPrice(product.price)}</strong>
            {product.oldPrice > product.price && (
              <>
                <span className="old">{formatPrice(product.oldPrice)}</span>
                <span className="save">Save {formatPrice(product.oldPrice - product.price)}</span>
              </>
            )}
          </div>

          <span className={`pc-stock pc-stock--${stock.className}`}>{stock.text}</span>

          <p className="pdp-desc">{product.description}</p>

          <div className="pdp-buy">
            <div className="qty-stepper" aria-label="Quantity">
              <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease">
                −
              </button>
              <span>{qty}</span>
              <button type="button" onClick={() => setQty((q) => q + 1)} aria-label="Increase">
                +
              </button>
            </div>
            <button
              type="button"
              className="primary-cta pdp-add"
              disabled={product.stock === 'out'}
              onClick={() => addToCart(product.id, qty)}
            >
              {product.stock === 'out' ? 'Sold out' : 'Add to cart'}
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

          <ul className="pdp-usp">
            <li>Free delivery from EUR 299</li>
            <li>3-year warranty on registration</li>
            <li>30-day easy returns</li>
          </ul>
        </div>
      </section>

      <section className="pdp-tabs">
        <div className="tab-bar" role="tablist">
          {[
            { id: 'description', label: 'Description' },
            { id: 'specs', label: 'Specifications' },
            { id: 'features', label: 'Features' },
          ].map((item) => (
            <button
              type="button"
              role="tab"
              key={item.id}
              aria-selected={tab === item.id}
              className={`tab${tab === item.id ? ' is-active' : ''}`}
              onClick={() => setTab(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="tab-panel">
          {tab === 'description' && <p>{product.description}</p>}
          {tab === 'specs' && (
            <table className="spec-table">
              <tbody>
                {Object.entries(product.specs).map(([key, value]) => (
                  <tr key={key}>
                    <th>{key}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {tab === 'features' && (
            <ul className="feature-list">
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section id="reviews" className="pdp-reviews">
        <h2>Customer reviews</h2>
        <div className="review-list">
          {productReviews.map((review) => (
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
            </article>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="pdp-related">
          <div className="section-heading">
            <p className="eyebrow">You may also like</p>
            <h2>Related products</h2>
          </div>
          <ProductGrid products={related} />
        </section>
      )}
    </div>
  )
}
