import { useState } from 'react'
import './App.css'
import daikuPruner from './assets/used_images/daiku-share-pruner.png'
import gardenBanner from './assets/used_images/hero-garden-banner-daiku.png'
import mowerHero from './assets/used_images/hero-mower-offer-daiku.png'
import mowerProduct from './assets/used_images/product-cordless-mower-daiku.png'
import sprayerProduct from './assets/used_images/product-pressure-sprayer-daiku.png'
import hoseProduct from './assets/used_images/product-hose-reel-daiku.png'
import sawCategory from './assets/used_images/category-saw-action-daiku.png'
import mowerCategory from './assets/used_images/category-mower-daiku.png'
import mowerActionCategory from './assets/used_images/category-garden-tools-daiku.png'
import mowerProject from './assets/used_images/project-mower-action-daiku.png'
import sawProduct from './assets/used_images/image.png'
import mowerKit from './assets/used_images/deal-mower-kit-daiku.png'
import mowerPack from './assets/used_images/hover-mower-pack-daiku.png'
import mowerLifestyle from './assets/used_images/hover-mower-lifestyle-daiku.png'
import chainsawShare from './assets/used_images/product-chainsaw-share-daiku.png'
import mowerOutside from './assets/used_images/1.png'
import sprayerAlt from './assets/used_images/2.png'
import kitInside from './assets/used_images/3.png'
import mowerFeature from './assets/used_images/4.png'
import mowerInUse from './assets/used_images/5.png'
import kitOutside from './assets/used_images/7.png'
import sprayerOutside from './assets/used_images/8.png'
import best1 from './assets/best1.jpg'
import best1Inuse from './assets/best1-inuse.jpg'
import best1InuseMale from './assets/best1-inuse-male.jpg'
import best1InuseReal from './assets/best1-inuse-real.jpg'

const categories = [
  {
    name: 'Drills',
    image: daikuPruner,
  },
  {
    name: 'Garden tools',
    image: mowerActionCategory,
  },
  {
    name: 'Battery system',
    image: daikuPruner,
  },
  {
    name: 'Pressure washers',
    image: hoseProduct,
  },
  {
    name: 'Saws',
    image: sawCategory,
  },
  {
    name: 'Accessories',
    image: mowerCategory,
  },
]

function getDiscountPercent(price, oldPrice) {
  const current = Number.parseFloat(price.replace(/[^\d.]/g, ''))
  const original = Number.parseFloat(oldPrice.replace(/[^\d.]/g, ''))
  if (!current || !original || original <= current) return 0
  return Math.round((1 - current / original) * 100)
}

const products = [
  {
    name: 'DAIKU Cordless Lawn Mower 40V',
    tag: 'New',
    rating: '4.9',
    price: 'EUR 499',
    oldPrice: 'EUR 589',
    accent: 'green',
    image: best1,
    views: [
      { label: 'Outside', image: best1 },
      { label: 'Inside', image: best1InuseMale },
      { label: 'In use', image: best1InuseReal },
    ],
    spec: 'Brushless motor',
    saving: 'Save EUR 90',
  },
  {
    name: 'DAIKU 20V Impact Drill Pro',
    tag: 'Bestseller',
    rating: '5.0',
    price: 'EUR 129',
    oldPrice: 'EUR 169',
    accent: 'lime',
    cardStyle: 'wuber',
    outsideImage: best1,
    insideImage: best1Inuse,
    spec: 'Share+ 20V system',
    saving: 'Save EUR 40',
  },
  {
    name: 'DAIKU Garden Pressure Sprayer',
    tag: 'Bundle',
    rating: '4.8',
    price: 'EUR 49',
    oldPrice: 'EUR 69',
    accent: 'teal',
    image: sprayerProduct,
    views: [
      { label: 'Outside', image: sprayerOutside },
      { label: 'Inside', image: sprayerAlt },
      { label: 'In use', image: mowerProject },
    ],
    spec: 'Garden care kit',
    saving: 'Bundle deal',
  },
  {
    name: 'DAIKU Wall-Mounted Hose Reel',
    tag: 'Sale',
    rating: '5.0',
    price: 'EUR 149',
    oldPrice: 'EUR 199',
    accent: 'dark',
    image: hoseProduct,
    views: [
      { label: 'Outside', image: hoseProduct },
      { label: 'Inside', image: mowerKit },
      { label: 'In use', image: mowerPack },
    ],
    spec: 'Wall mounted',
    saving: 'Save EUR 50',
  },
  {
    name: 'DAIKU 20V Mini Chainsaw Kit',
    tag: 'Hot',
    rating: '4.9',
    price: 'EUR 199',
    oldPrice: 'EUR 249',
    accent: 'lime',
    image: sawProduct,
    views: [
      { label: 'Outside', image: kitOutside },
      { label: 'Inside', image: kitInside },
      { label: 'In use', image: sawCategory },
    ],
    spec: 'Share+ cordless kit',
    saving: 'Save EUR 50',
  },
  {
    name: 'DAIKU 4-in-1 Mower Kit',
    tag: 'Deal',
    rating: '4.8',
    price: 'EUR 349',
    oldPrice: 'EUR 449',
    accent: 'green',
    image: mowerKit,
    views: [
      { label: 'Outside', image: mowerOutside },
      { label: 'Inside', image: mowerFeature },
      { label: 'In use', image: mowerInUse },
    ],
    spec: 'Weekend bundle',
    saving: 'Save EUR 100',
  },
]

const projectProducts = [
  {
    name: 'DAIKU Share+ Pruning Shears',
    tag: 'Top pick',
    rating: '4.9',
    price: 'EUR 89',
    oldPrice: 'EUR 119',
    accent: 'lime',
    image: daikuPruner,
    hoverImage: sawProduct,
    spec: 'Share+ 20V system',
    saving: 'Save EUR 30',
  },
  {
    name: 'DAIKU Hero Lawn Mower Offer',
    tag: 'Featured',
    rating: '5.0',
    price: 'EUR 429',
    oldPrice: 'EUR 529',
    accent: 'green',
    image: mowerHero,
    hoverImage: mowerLifestyle,
    spec: 'Limited launch deal',
    saving: 'Save EUR 100',
  },
  {
    name: 'DAIKU Garden Action Kit',
    tag: 'New',
    rating: '4.8',
    price: 'EUR 179',
    oldPrice: 'EUR 229',
    accent: 'teal',
    image: mowerActionCategory,
    hoverImage: mowerProject,
    spec: 'Garden starter set',
    saving: 'Save EUR 50',
  },
  {
    name: 'DAIKU Accessories Bundle',
    tag: 'Bundle',
    rating: '4.7',
    price: 'EUR 69',
    oldPrice: 'EUR 99',
    accent: 'dark',
    image: mowerCategory,
    hoverImage: daikuPruner,
    spec: 'Mower accessories',
    saving: 'Bundle deal',
  },
  {
    name: 'DAIKU Chainsaw Share+ Kit',
    tag: 'Hot',
    rating: '4.9',
    price: 'EUR 219',
    oldPrice: 'EUR 279',
    accent: 'lime',
    image: chainsawShare,
    hoverImage: sawCategory,
    spec: 'Cordless saw system',
    saving: 'Save EUR 60',
  },
  {
    name: 'DAIKU Mower Lifestyle Pack',
    tag: 'Sale',
    rating: '4.8',
    price: 'EUR 399',
    oldPrice: 'EUR 499',
    accent: 'green',
    image: mowerLifestyle,
    hoverImage: mowerPack,
    spec: 'Weekend mower combo',
    saving: 'Save EUR 100',
  },
]

const proofItems = [
  'Fast delivery from local stock',
  'One battery for multiple tools',
  'Support for home, garden and workshop',
]

const projectCards = [
  {
    title: 'Keep the lawn sharp',
    text: 'Mowers and trimmers for small gardens and larger weekend projects.',
    image: mowerProject,
  },
  {
    title: 'Cut, prune and clean',
    text: 'Cordless tools made for fast outdoor work with fewer cables.',
    image: sawCategory,
  },
  {
    title: 'Build your Share+ kit',
    text: 'Sell batteries, chargers and compatible tools as a repeat-sales system.',
    image: sawProduct,
  },
  {
    title: 'Water the garden right',
    text: 'Hose reels, sprayers and pressure tools for easy outdoor maintenance.',
    image: hoseProduct,
  },
  {
    title: 'Power up the workshop',
    text: 'Drills, batteries and Share+ tools for indoor projects and repairs.',
    image: daikuPruner,
  },
  {
    title: 'Grab the weekend deal',
    text: 'Bundle mowers, oil and accessories into one high-value starter offer.',
    image: mowerKit,
  },
]

function WuberStyleProductCard({ product }) {
  const discount = getDiscountPercent(product.price, product.oldPrice)

  return (
    <article className="product-card product-card--wuber">
      <button type="button" className="wishlist-btn" aria-label="Add to wishlist">
        <span aria-hidden="true">♡</span>
      </button>

      <div className="wuber-media">
        {discount > 0 && <span className="discount-badge">-{discount}%</span>}
        <div className={`wuber-visual ${product.accent}`}>
          <img
            className="product-img primary-img"
            src={product.outsideImage}
            alt={product.name}
          />
          <img
            className="product-img hover-img"
            src={product.insideImage}
            alt={`${product.name} in use`}
          />
        </div>
      </div>

      <h3>{product.name}</h3>
      <div className="wuber-price-line">
        <span className="old-price">{product.oldPrice}</span>
        <strong>{product.price}</strong>
      </div>
      <p className="wuber-legal">
        Regular price {product.oldPrice} <strong>-{discount}%</strong>
      </p>
      <p className="wuber-legal">
        Lowest price 30 days: {product.oldPrice} <strong>-{discount}%</strong>
      </p>
      <p className="product-spec">{product.spec}</p>
      <button type="button">Add to cart</button>
    </article>
  )
}

function SimpleHoverProductCard({ product }) {
  return (
    <article className="product-card product-card--swap-hover">
      <div className={`product-visual ${product.accent}`}>
        <img className="product-img primary-img" src={product.image} alt={product.name} />
        <img className="product-img hover-img" src={product.hoverImage} alt="" />
        <span>{product.tag}</span>
        <strong className="daiku-sticker">DAIKU</strong>
      </div>
      <div className="rating">Rating {product.rating}</div>
      <h3>{product.name}</h3>
      <p className="product-spec">{product.spec}</p>
      <div className="price-line">
        <strong>{product.price}</strong>
        <span>{product.oldPrice}</span>
      </div>
      <div className="saving-line">{product.saving}</div>
      <button type="button">Add to cart</button>
    </article>
  )
}

function ProductCard({ product }) {
  const [activeView, setActiveView] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const currentImage = product.views[activeView].image

  return (
    <article
      className={`product-card${isHovered ? ' is-hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setActiveView(0)
      }}
    >
      <div className="product-media">
        <div
          className={`product-visual ${product.accent}${
            product.brandedImage ? ' branded-visual' : ''
          }`}
        >
          <img className="product-img active-img" src={currentImage} alt={product.name} />
          <span>{product.tag}</span>
          {!product.brandedImage && <strong className="daiku-sticker">DAIKU</strong>}
        </div>

        <div className={`product-view-tabs${isHovered ? ' is-visible' : ''}`}>
          {product.views.map((view, index) => (
            <button
              type="button"
              key={view.label}
              className={`view-tab${activeView === index ? ' is-active' : ''}`}
              onMouseEnter={() => {
                setIsHovered(true)
                setActiveView(index)
              }}
              onClick={() => setActiveView(index)}
              aria-label={`Show ${view.label.toLowerCase()} view`}
              aria-pressed={activeView === index}
            >
              <img src={view.image} alt="" />
              <span>{view.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="rating">Rating {product.rating}</div>
      <h3>{product.name}</h3>
      <p className="product-spec">{product.spec}</p>
      <div className="price-line">
        <strong>{product.price}</strong>
        <span>{product.oldPrice}</span>
      </div>
      <div className="saving-line">{product.saving}</div>
      <button type="button">Add to cart</button>
    </article>
  )
}

function App() {
  return (
    <main className="page-shell">
      <div className="promo-bar">
        <span>Free delivery from EUR 299</span>
        <span>Order before 10:00 - shipped today</span>
        <span>Customer rating 4.9/5.0</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="DAIKU home">
          <img src={`${import.meta.env.BASE_URL}daiku-logo-green.png`} alt="DAIKU logo" />
        </a>
        <label className="search-bar">
          <span>Search products</span>
          <input type="search" placeholder="Search drills, batteries, garden tools..." />
        </label>
        <nav aria-label="Main navigation">
          <a href="#categories">Categories</a>
          <a href="#bestsellers">Bestsellers</a>
          <a href="#system">Battery system</a>
          <a href="#reviews">Reviews</a>
        </nav>
        <div className="header-actions">
          <span className="header-icon" aria-label="Wishlist">Wish</span>
          <span className="header-icon" aria-label="Cart">Cart</span>
          <button type="button">Shop now</button>
        </div>
      </header>

      <section id="top" className="hero-section">
        <img className="hero-bg" src={gardenBanner} alt="" />
        <div className="hero-copy">
          <p className="eyebrow">Power tools for serious sellers</p>
          <h1>Power up every home, garden, and workshop.</h1>
          <p className="hero-text">
            Discover DAIKU tools with launch offers, fast delivery, clear
            categories, and bundles designed to increase every order value.
          </p>
          <div className="hero-actions">
            <a className="primary-cta" href="#bestsellers">
              Shop launch offers
            </a>
            <a className="secondary-cta" href="#categories">
              Explore categories
            </a>
          </div>
          <div className="hero-stats">
            <span>
              <strong>48h</strong>
              Fast dispatch
            </span>
            <span>
              <strong>20V</strong>
              Share+ system
            </span>
            <span>
              <strong>4.9</strong>
              Store rating
            </span>
          </div>
        </div>

        <div className="hero-visual" aria-label="DAIKU featured tools">
          <img className="hero-product" src={mowerHero} alt="DAIKU lawn mower offer" />
          <div className="price-badge">
            <strong>-25%</strong>
            Launch offers
          </div>
          <div className="trust-badge">
            <strong>4.9</strong>
            Customer rating
          </div>
        </div>
      </section>

      <section className="proof-row" aria-label="DAIKU store promises">
        {proofItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>

      <section className="deal-strip">
        <div>
          <p className="eyebrow">Weekend deal</p>
          <h2>Start with the mower kit, add Share+ tools later.</h2>
          <a href="#bestsellers">Shop the bundle -&gt;</a>
        </div>
        <img src={mowerKit} alt="DAIKU mower bundle deal" />
      </section>

      <section id="categories" className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Shop by need</p>
          <h2>Clear categories for quick decisions</h2>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <a href="#bestsellers" className="category-card" key={category.name}>
              <img src={category.image} alt={category.name} />
              <strong>{category.name}</strong>
            </a>
          ))}
        </div>
      </section>

      <section id="bestsellers" className="product-section">
        <div className="section-heading row-heading">
          <div>
            <p className="eyebrow">Popular right now</p>
            <h2>Bestsellers built to convert</h2>
          </div>
          <a href="#top">See all products -&gt;</a>
        </div>
        <div className="product-grid">
          {products.map((product) =>
            product.cardStyle === 'wuber' ? (
              <WuberStyleProductCard product={product} key={product.name} />
            ) : (
              <ProductCard product={product} key={product.name} />
            ),
          )}
        </div>
      </section>

      <section className="project-section">
        <div className="section-heading row-heading">
          <div>
            <p className="eyebrow">Shop by project</p>
            <h2>Show customers what they can finish today</h2>
          </div>
          <a href="#categories">Browse all categories -&gt;</a>
        </div>
        <div className="project-grid">
          {projectCards.map((project) => (
            <article className="project-card" key={project.title}>
              <img src={project.image} alt={project.title} />
              <div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <a href="#bestsellers">View tools -&gt;</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="project-tools" className="product-section product-section-light">
        <div className="section-heading row-heading">
          <div>
            <p className="eyebrow">Complete your project</p>
            <h2>More tools to finish the job today</h2>
          </div>
          <a href="#bestsellers">Shop all tools -&gt;</a>
        </div>
        <div className="product-grid">
          {projectProducts.map((product) => (
            <SimpleHoverProductCard product={product} key={product.name} />
          ))}
        </div>
      </section>

      <section id="system" className="battery-banner">
        <div>
          <p className="eyebrow">DAIKU Share+ system</p>
          <h2>One battery. Many tools. More repeat sales.</h2>
          <p>
            Promote a product ecosystem that encourages customers to return for
            compatible tools, batteries, chargers, and accessories.
          </p>
          <a className="primary-cta" href="#bestsellers">
            Build a bundle
          </a>
        </div>
        <div className="battery-visual">
          <img src={daikuPruner} alt="DAIKU Share+ cordless pruner system" />
        </div>
      </section>

      <section id="reviews" className="review-section">
        <div className="review-score">
          <strong>4.9</strong>
          <span>Customer score</span>
          <p>Based on product quality, delivery speed, and support.</p>
        </div>
        <div className="review-card">
          <p>
            "Strong visual design, clear product cards, and sales messages that
            make the customer understand why they should buy now."
          </p>
          <span>Sales-focused landing page concept</span>
        </div>
        <form className="newsletter">
          <h2>Get 5% off first order</h2>
          <div>
            <input type="email" placeholder="Your email" aria-label="Email" />
            <button type="submit">Send</button>
          </div>
        </form>
      </section>

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
              DAIKU Tools is built for sales, trust, and fast product discovery
              across home, garden, and workshop categories.
            </p>
            <strong>+32 456 768 123</strong>
            <span>support@daikutools.com</span>
          </div>

          <div className="footer-column">
            <h3>Information</h3>
            <a href="#top">About DAIKU</a>
            <a href="#categories">Categories</a>
            <a href="#system">Share+ system</a>
            <a href="#bestsellers">Promotions</a>
          </div>

          <div className="footer-column">
            <h3>Customer Service</h3>
            <a href="#top">Delivery</a>
            <a href="#top">Returns</a>
            <a href="#top">Warranty</a>
            <a href="#top">FAQ</a>
          </div>

          <div className="footer-column">
            <h3>Your Account</h3>
            <a href="#top">Login</a>
            <a href="#top">Orders</a>
            <a href="#top">Wishlist</a>
            <a href="#top">Support</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>All rights reserved © DAIKU Tools 2026</span>
          <div className="social-links">
            <a href="#top">Facebook</a>
            <a href="#top">Instagram</a>
            <a href="#top">YouTube</a>
            <a href="#top">TikTok</a>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
