import { useParams, Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import ProductListing from '../components/ProductListing.jsx'
import EmptyState from '../components/EmptyState.jsx'
import { categories, products } from '../data/store.js'

export default function CategoryPage() {
  const { slug } = useParams()
  const category = categories.find((c) => c.slug === slug)

  if (!category) {
    return (
      <div className="page">
        <PageHeader title="Category not found" trail={[{ label: 'Categories', to: '/categories' }, { label: 'Not found' }]} />
        <div className="page-body">
          <EmptyState
            icon="🧭"
            title="We couldn't find that category"
            message="The category you are looking for may have been moved or renamed."
            actionTo="/categories"
            actionLabel="Browse all categories"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <PageHeader
        eyebrow="Category"
        title={category.name}
        subtitle={category.blurb}
        trail={[{ label: 'Categories', to: '/categories' }, { label: category.name }]}
      >
        <Link className="secondary-cta header-cta" to="/categories">
          ← All categories
        </Link>
      </PageHeader>
      <div className="page-body">
        <ProductListing allProducts={products} lockedCategory={slug} />
      </div>
    </div>
  )
}
