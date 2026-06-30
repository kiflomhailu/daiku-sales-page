import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-trust">
        <span>Visa</span>
        <span>Mastercard</span>
        <span>Apple Pay</span>
        <span>Google Pay</span>
        <span>FedEx</span>
        <span>DPD</span>
        <span>Fast returns</span>
      </div>

      <div className="footer-main">
        <div className="footer-brand">
          <img src={`${import.meta.env.BASE_URL}daiku-logo-dark.png`} alt="DAIKU logo" />
          <p>
            DAIKU Tools is built for sales, trust, and fast product discovery across home,
            garden, and workshop categories.
          </p>
          <strong>+32 456 768 123</strong>
          <span>support@daikutools.com</span>
        </div>

        <div className="footer-column">
          <h3>Information</h3>
          <Link to="/about">About Us</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/battery-system">Share+ system</Link>
          <Link to="/best-sellers">Promotions</Link>
        </div>

        <div className="footer-column">
          <h3>Customer Service</h3>
          <Link to="/shipping">Shipping Policy</Link>
          <Link to="/returns">Returns &amp; Refunds</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/faq">FAQ</Link>
        </div>

        <div className="footer-column">
          <h3>Legal</h3>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms &amp; Conditions</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>All rights reserved © DAIKU Tools 2026</span>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a>
        </div>
      </div>
    </footer>
  )
}
