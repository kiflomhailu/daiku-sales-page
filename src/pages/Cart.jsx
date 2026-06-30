import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import EmptyState from '../components/EmptyState.jsx'
import { useStore } from '../context/StoreContext.jsx'
import { formatPrice } from '../data/store.js'

const COUPONS = { DAIKU10: 0.1, WELCOME5: 0.05 }
const FREE_SHIPPING_THRESHOLD = 299
const SHIPPING_FEE = 9
const VAT_RATE = 0.21

export default function Cart() {
  const navigate = useNavigate()
  const { cartItems, updateQty, removeFromCart, subtotal, clearCart } = useStore()
  const [couponInput, setCouponInput] = useState('')
  const [coupon, setCoupon] = useState(null)
  const [couponError, setCouponError] = useState('')

  const applyCoupon = (event) => {
    event.preventDefault()
    const code = couponInput.trim().toUpperCase()
    if (COUPONS[code]) {
      setCoupon({ code, rate: COUPONS[code] })
      setCouponError('')
    } else {
      setCoupon(null)
      setCouponError('That coupon code is not valid.')
    }
  }

  const discount = coupon ? subtotal * coupon.rate : 0
  const discounted = subtotal - discount
  const shipping = discounted >= FREE_SHIPPING_THRESHOLD || discounted === 0 ? 0 : SHIPPING_FEE
  const total = discounted + shipping
  const vatIncluded = total - total / (1 + VAT_RATE)

  if (cartItems.length === 0) {
    return (
      <div className="page">
        <PageHeader title="Your Cart" trail={[{ label: 'Cart' }]} />
        <div className="page-body">
          <EmptyState
            icon="🛒"
            title="Your cart is empty"
            message="Looks like you haven't added anything yet. Explore our bestselling tools."
            actionTo="/products"
            actionLabel="Start shopping"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <PageHeader
        eyebrow="Checkout"
        title="Your Cart"
        subtitle={`${cartItems.length} ${cartItems.length === 1 ? 'item' : 'items'} ready to order.`}
        trail={[{ label: 'Cart' }]}
      />
      <div className="page-body cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <article className="cart-row" key={item.id}>
              <Link to={`/product/${item.slug}`} className="cart-thumb">
                <img src={item.image} alt={item.name} />
              </Link>
              <div className="cart-row-info">
                <Link to={`/product/${item.slug}`} className="cart-row-name">
                  {item.name}
                </Link>
                <span className="cart-row-cat">{item.categoryName}</span>
                <button type="button" className="text-btn" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
              <div className="qty-stepper" aria-label="Quantity">
                <button type="button" onClick={() => updateQty(item.id, item.qty - 1)} aria-label="Decrease">
                  −
                </button>
                <span>{item.qty}</span>
                <button type="button" onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Increase">
                  +
                </button>
              </div>
              <div className="cart-row-price">{formatPrice(item.price * item.qty)}</div>
            </article>
          ))}

          <div className="cart-items-foot">
            <Link className="secondary-cta" to="/products">
              ← Continue shopping
            </Link>
            <button type="button" className="text-btn" onClick={clearCart}>
              Clear cart
            </button>
          </div>
        </div>

        <aside className="cart-summary">
          <h2>Order summary</h2>

          <form className="coupon-row" onSubmit={applyCoupon}>
            <input
              type="text"
              placeholder="Coupon code (try DAIKU10)"
              value={couponInput}
              onChange={(event) => setCouponInput(event.target.value)}
              aria-label="Coupon code"
            />
            <button type="submit">Apply</button>
          </form>
          {couponError && <p className="coupon-error">{couponError}</p>}
          {coupon && <p className="coupon-ok">Coupon {coupon.code} applied — {coupon.rate * 100}% off</p>}

          <dl className="summary-lines">
            <div>
              <dt>Subtotal</dt>
              <dd>{formatPrice(subtotal)}</dd>
            </div>
            {discount > 0 && (
              <div className="summary-discount">
                <dt>Discount</dt>
                <dd>-{formatPrice(discount)}</dd>
              </div>
            )}
            <div>
              <dt>Shipping {shipping === 0 && <em>(free)</em>}</dt>
              <dd>{shipping === 0 ? 'Free' : formatPrice(shipping)}</dd>
            </div>
            <div className="summary-note">
              <dt>VAT (21% incl.)</dt>
              <dd>{formatPrice(vatIncluded)}</dd>
            </div>
          </dl>

          {discounted < FREE_SHIPPING_THRESHOLD && (
            <p className="shipping-hint">
              Add {formatPrice(FREE_SHIPPING_THRESHOLD - discounted)} more for free shipping.
            </p>
          )}

          <div className="summary-total">
            <span>Total</span>
            <strong>{formatPrice(total)}</strong>
          </div>

          <button type="button" className="primary-cta checkout-btn" onClick={() => navigate('/checkout')}>
            Proceed to checkout
          </button>
          <p className="secure-note">🔒 Secure checkout · Visa · Mastercard · PayPal</p>
        </aside>
      </div>
    </div>
  )
}
