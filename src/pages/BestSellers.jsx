import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import ProductListing from '../components/ProductListing.jsx'
import StarRating from '../components/StarRating.jsx'
import { bestSellers } from '../data/store.js'

export default function BestSellers() {
  const featured = bestSellers()
  const topRated = [...featured].sort((a, b) => b.rating - a.rating)[0]

  return (
    <div className="page">
      <PageHeader
        eyebrow="Popular right now"
        title="Best Sellers"
        subtitle="The tools our customers buy most — proven performers with strong ratings and active discounts."
        trail={[{ label: 'Best Sellers' }]}
      />

      <section className="bestseller-spotlight">
        <div className="spotlight-media">
          <img src={topRated.image} alt={topRated.name} />
          <span className="pc-badge pc-badge--sale">Top rated</span>
        </div>
        <div className="spotlight-body">
          <p className="eyebrow">Customer favourite</p>
          <h2>{topRated.name}</h2>
          <StarRating rating={topRated.rating} count={topRated.reviews} showValue />
          <p>{topRated.description}</p>
          <Link className="primary-cta" to={`/product/${topRated.slug}`}>
            View product
          </Link>
        </div>
      </section>

      <div className="page-body">
        <ProductListing allProducts={featured} />
      </div>
    </div>
  )
}
