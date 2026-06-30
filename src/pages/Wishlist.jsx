import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import StarRating from '../components/StarRating.jsx'
import EmptyState from '../components/EmptyState.jsx'
import { useStore } from '../context/StoreContext.jsx'
import { formatPrice } from '../data/store.js'

export default function Wishlist() {
  const { wishlistItems, removeFromWishlist, addToCart } = useStore()

  return (
    <div className="page">
      <PageHeader
        eyebrow="Saved for later"
        title="Your Wishlist"
        subtitle="Keep an eye on the tools you love and move them to your cart when you are ready."
        trail={[{ label: 'Wishlist' }]}
      />
      <div className="page-body">
        {wishlistItems.length === 0 ? (
          <EmptyState
            icon="♡"
            title="Your wishlist is empty"
            message="Save products you are interested in by tapping the heart icon on any product."
            actionTo="/products"
            actionLabel="Continue shopping"
          />
        ) : (
          <div className="wishlist-grid">
            {wishlistItems.map((product) => (
              <article className="wishlist-card" key={product.id}>
                <Link to={`/product/${product.slug}`} className="wishlist-img">
                  <img src={product.image} alt={product.name} />
                </Link>
                <div className="wishlist-body">
                  <Link to={`/product/${product.slug}`} className="wishlist-name">
                    {product.name}
                  </Link>
                  <StarRating rating={product.rating} count={product.reviews} />
                  <div className="pc-price">
                    <strong>{formatPrice(product.price)}</strong>
                    {product.oldPrice > product.price && <span>{formatPrice(product.oldPrice)}</span>}
                  </div>
                  <div className="wishlist-actions">
                    <button
                      type="button"
                      className="primary-cta"
                      onClick={() => {
                        addToCart(product.id)
                        removeFromWishlist(product.id)
                      }}
                    >
                      Move to cart
                    </button>
                    <button
                      type="button"
                      className="text-btn"
                      onClick={() => removeFromWishlist(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {wishlistItems.length > 0 && (
          <div className="page-foot-actions">
            <Link className="secondary-cta" to="/products">
              ← Continue shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
