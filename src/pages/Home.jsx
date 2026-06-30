import { Link } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid.jsx'
import StarRating from '../components/StarRating.jsx'
import {
  images,
  categories,
  bestSellers,
  products,
  reviews,
} from '../data/store.js'
import gardenBanner from '../assets/used_images/hero-garden-banner-daiku.png'

const proofItems = [
  'Fast delivery from local stock',
  'One battery for multiple tools',
  'Support for home, garden and workshop',
]

const projectCards = [
  { title: 'Keep the lawn sharp', text: 'Mowers and trimmers for small gardens and larger weekend projects.', image: images.mowerProject, to: '/category/lawn-mowers' },
  { title: 'Cut, prune and clean', text: 'Cordless tools made for fast outdoor work with fewer cables.', image: images.sawCategory, to: '/category/saws' },
  { title: 'Build your Share+ kit', text: 'Sell batteries, chargers and compatible tools as a repeat-sales system.', image: images.sawProduct, to: '/battery-system' },
  { title: 'Water the garden right', text: 'Hose reels, sprayers and pressure tools for easy outdoor maintenance.', image: images.hoseProduct, to: '/category/garden-tools' },
  { title: 'Power up the workshop', text: 'Drills, batteries and Share+ tools for indoor projects and repairs.', image: images.daikuPruner, to: '/category/drills' },
  { title: 'Grab the weekend deal', text: 'Bundle mowers, oil and accessories into one high-value starter offer.', image: images.mowerKit, to: '/category/bundles' },
]

export default function Home() {
  const featured = bestSellers().slice(0, 6)
  const projectTools = products.slice(6, 12)
  const headlineReviews = reviews.slice(0, 1)

  return (
    <div className="home">
      <section id="top" className="hero-section">
        <img className="hero-bg" src={gardenBanner} alt="" />
        <div className="hero-copy">
          <p className="eyebrow">Power tools for serious sellers</p>
          <h1>Power up every home, garden, and workshop.</h1>
          <p className="hero-text">
            Discover DAIKU tools with launch offers, fast delivery, clear categories, and
            bundles designed to increase every order value.
          </p>
          <div className="hero-actions">
            <Link className="primary-cta" to="/products">
              Shop launch offers
            </Link>
            <Link className="secondary-cta" to="/categories">
              Explore categories
            </Link>
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
          <img className="hero-product" src={images.mowerHero} alt="DAIKU lawn mower offer" />
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
          <Link to="/product/daiku-4-in-1-mower-kit">Shop the bundle -&gt;</Link>
        </div>
        <img src={images.mowerKit} alt="DAIKU mower bundle deal" />
      </section>

      <section id="categories" className="section-block">
        <div className="section-heading row-heading">
          <div>
            <p className="eyebrow">Shop by need</p>
            <h2>Clear categories for quick decisions</h2>
          </div>
          <Link to="/categories">View all categories -&gt;</Link>
        </div>
        <div className="category-grid">
          {categories.slice(0, 6).map((category) => (
            <Link to={`/category/${category.slug}`} className="category-card" key={category.slug}>
              <img src={category.image} alt={category.name} />
              <strong>{category.name}</strong>
            </Link>
          ))}
        </div>
      </section>

      <section id="bestsellers" className="product-section">
        <div className="section-heading row-heading">
          <div>
            <p className="eyebrow">Popular right now</p>
            <h2>Bestsellers built to convert</h2>
          </div>
          <Link to="/best-sellers">See all products -&gt;</Link>
        </div>
        <div className="home-grid-wrap">
          <ProductGrid products={featured} />
        </div>
      </section>

      <section className="project-section">
        <div className="section-heading row-heading">
          <div>
            <p className="eyebrow">Shop by project</p>
            <h2>Show customers what they can finish today</h2>
          </div>
          <Link to="/categories">Browse all categories -&gt;</Link>
        </div>
        <div className="project-grid">
          {projectCards.map((project) => (
            <article className="project-card" key={project.title}>
              <img src={project.image} alt={project.title} />
              <div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <Link to={project.to}>View tools -&gt;</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="product-section product-section-light">
        <div className="section-heading row-heading">
          <div>
            <p className="eyebrow">Complete your project</p>
            <h2>More tools to finish the job today</h2>
          </div>
          <Link to="/products">Shop all tools -&gt;</Link>
        </div>
        <div className="home-grid-wrap">
          <ProductGrid products={projectTools} />
        </div>
      </section>

      <section id="system" className="battery-banner">
        <div>
          <p className="eyebrow">DAIKU Share+ system</p>
          <h2>One battery. Many tools. More repeat sales.</h2>
          <p>
            Promote a product ecosystem that encourages customers to return for compatible
            tools, batteries, chargers, and accessories.
          </p>
          <Link className="primary-cta" to="/battery-system">
            Explore the system
          </Link>
        </div>
        <div className="battery-visual">
          <img src={images.daikuPruner} alt="DAIKU Share+ cordless pruner system" />
        </div>
      </section>

      <section id="reviews" className="review-section">
        <div className="review-score">
          <strong>4.9</strong>
          <StarRating rating={4.9} size="md" />
          <span>Customer score</span>
          <p>Based on product quality, delivery speed, and support.</p>
          <Link className="secondary-cta" to="/reviews">
            Read all reviews
          </Link>
        </div>
        {headlineReviews.map((review) => (
          <div className="review-card" key={review.id}>
            <StarRating rating={review.rating} />
            <p>"{review.text}"</p>
            <span>
              {review.name} — {review.product}
            </span>
          </div>
        ))}
        <NewsletterForm />
      </section>
    </div>
  )
}

function NewsletterForm() {
  return (
    <form
      className="newsletter"
      onSubmit={(event) => {
        event.preventDefault()
        event.currentTarget.reset()
      }}
    >
      <h2>Get 5% off first order</h2>
      <div>
        <input type="email" placeholder="Your email" aria-label="Email" required />
        <button type="submit">Send</button>
      </div>
    </form>
  )
}
