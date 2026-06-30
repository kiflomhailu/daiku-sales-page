import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import EmptyState from '../components/EmptyState.jsx'
import { useStore } from '../context/StoreContext.jsx'
import { formatPrice } from '../data/store.js'

const FREE_SHIPPING_THRESHOLD = 299
const SHIPPING_FEE = 9

export default function Checkout() {
  const { cartItems, subtotal, clearCart } = useStore()
  const [placed, setPlaced] = useState(false)
  const [orderId] = useState(() => `DK${Math.floor(100000 + Math.random() * 900000)}`)

  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : SHIPPING_FEE
  const total = subtotal + shipping

  const placeOrder = (event) => {
    event.preventDefault()
    setPlaced(true)
    clearCart()
    window.scrollTo({ top: 0 })
  }

  if (placed) {
    return (
      <div className="page">
        <PageHeader title="Order confirmed" trail={[{ label: 'Cart', to: '/cart' }, { label: 'Checkout' }]} />
        <div className="page-body">
          <div className="order-confirm">
            <div className="order-check" aria-hidden="true">✓</div>
            <h2>Thank you for your order!</h2>
            <p>
              Your order <strong>{orderId}</strong> has been placed. A confirmation email is on
              its way and your tools will be dispatched within 48 hours.
            </p>
            <Link className="primary-cta" to="/products">
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (cartItems.length === 0) {
    return (
      <div className="page">
        <PageHeader title="Checkout" trail={[{ label: 'Cart', to: '/cart' }, { label: 'Checkout' }]} />
        <div className="page-body">
          <EmptyState
            icon="🧾"
            title="Nothing to check out"
            message="Your cart is empty. Add some products before checking out."
            actionTo="/products"
            actionLabel="Browse products"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <PageHeader
        eyebrow="Almost there"
        title="Checkout"
        subtitle="Enter your details to complete the order."
        trail={[{ label: 'Cart', to: '/cart' }, { label: 'Checkout' }]}
      />
      <div className="page-body cart-layout">
        <form className="checkout-form" onSubmit={placeOrder}>
          <fieldset>
            <legend>Contact</legend>
            <div className="field-row">
              <label>
                <span>Full name</span>
                <input type="text" required placeholder="Jane Doe" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" required placeholder="jane@example.com" />
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Shipping address</legend>
            <label>
              <span>Street &amp; number</span>
              <input type="text" required placeholder="Main Street 12" />
            </label>
            <div className="field-row">
              <label>
                <span>Postal code</span>
                <input type="text" required placeholder="3500" />
              </label>
              <label>
                <span>City</span>
                <input type="text" required placeholder="Hasselt" />
              </label>
              <label>
                <span>Country</span>
                <select defaultValue="BE">
                  <option value="BE">Belgium</option>
                  <option value="NL">Netherlands</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                </select>
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Payment</legend>
            <label>
              <span>Card number</span>
              <input type="text" required placeholder="4242 4242 4242 4242" inputMode="numeric" />
            </label>
            <div className="field-row">
              <label>
                <span>Expiry</span>
                <input type="text" required placeholder="MM/YY" />
              </label>
              <label>
                <span>CVC</span>
                <input type="text" required placeholder="123" inputMode="numeric" />
              </label>
            </div>
          </fieldset>

          <button type="submit" className="primary-cta checkout-btn">
            Place order · {formatPrice(total)}
          </button>
        </form>

        <aside className="cart-summary">
          <h2>Your order</h2>
          <ul className="checkout-items">
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt="" />
                <span className="checkout-item-name">
                  {item.name}
                  <em>× {item.qty}</em>
                </span>
                <span>{formatPrice(item.price * item.qty)}</span>
              </li>
            ))}
          </ul>
          <dl className="summary-lines">
            <div>
              <dt>Subtotal</dt>
              <dd>{formatPrice(subtotal)}</dd>
            </div>
            <div>
              <dt>Shipping</dt>
              <dd>{shipping === 0 ? 'Free' : formatPrice(shipping)}</dd>
            </div>
          </dl>
          <div className="summary-total">
            <span>Total</span>
            <strong>{formatPrice(total)}</strong>
          </div>
        </aside>
      </div>
    </div>
  )
}
