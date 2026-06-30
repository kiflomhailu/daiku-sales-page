import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { categories } from '../data/store.js'

export default function Categories() {
  return (
    <div className="page">
      <PageHeader
        eyebrow="Shop by need"
        title="Categories"
        subtitle="Find the right tools fast. Every category is organised around the Share+ battery system."
        trail={[{ label: 'Categories' }]}
      />
      <div className="page-body">
        <div className="cat-grid">
          {categories.map((category) => (
            <article className="cat-card" key={category.slug}>
              <div className="cat-card-media">
                <img src={category.image} alt={category.name} loading="lazy" />
                <span className="cat-count">{category.count} products</span>
              </div>
              <div className="cat-card-body">
                <h3>{category.name}</h3>
                <p>{category.blurb}</p>
                <Link className="cat-link" to={`/category/${category.slug}`}>
                  View Products →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
