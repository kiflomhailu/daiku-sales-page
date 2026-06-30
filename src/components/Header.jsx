import { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useStore } from '../context/StoreContext.jsx'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/categories', label: 'Categories' },
  { to: '/best-sellers', label: 'Best Sellers' },
  { to: '/battery-system', label: 'Battery System' },
  { to: '/reviews', label: 'Reviews' },
]

export default function Header() {
  const navigate = useNavigate()
  const { cartCount, wishlistCount } = useStore()
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const onSearch = (event) => {
    event.preventDefault()
    navigate(`/search?q=${encodeURIComponent(query.trim())}`)
    setMenuOpen(false)
  }

  return (
    <>
      <div className="promo-bar">
        <span>Free delivery from EUR 299</span>
        <span>Order before 10:00 - shipped today</span>
        <span>Customer rating 4.9/5.0</span>
      </div>

      <header className="site-header">
        <Link className="brand" to="/" aria-label="DAIKU home">
          <img src={`${import.meta.env.BASE_URL}daiku-logo-green.png`} alt="DAIKU logo" />
        </Link>

        <form className="search-bar" onSubmit={onSearch} role="search">
          <span>Search products</span>
          <input
            type="search"
            placeholder="Search drills, batteries, garden tools..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Search products"
          />
          <button type="submit" className="search-go" aria-label="Search">
            ⌕
          </button>
        </form>

        <nav className="main-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="header-icon" to="/wishlist" aria-label="Wishlist">
            <span aria-hidden="true">♥</span>
            <span className="header-icon-label">Wish</span>
            {wishlistCount > 0 && <span className="count-bubble">{wishlistCount}</span>}
          </Link>
          <Link className="header-icon" to="/cart" aria-label="Cart">
            <span aria-hidden="true">🛒</span>
            <span className="header-icon-label">Cart</span>
            {cartCount > 0 && <span className="count-bubble">{cartCount}</span>}
          </Link>
          <Link className="shop-now-btn" to="/products">
            Shop now
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-label="Mobile navigation">
          <button
            type="button"
            className="mobile-menu-close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
          <nav>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/products" onClick={() => setMenuOpen(false)}>
              All Products
            </Link>
            <Link to="/wishlist" onClick={() => setMenuOpen(false)}>
              Wishlist ({wishlistCount})
            </Link>
            <Link to="/cart" onClick={() => setMenuOpen(false)}>
              Cart ({cartCount})
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
