import { useSearchParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import EmptyState from '../components/EmptyState.jsx'
import { ProductGridSkeleton, useLoading } from '../components/Skeleton.jsx'
import { searchProducts } from '../data/store.js'

export default function SearchResults() {
  const [params] = useSearchParams()
  const query = params.get('q') || ''
  const loading = useLoading(400)
  const results = searchProducts(query)

  return (
    <div className="page">
      <PageHeader
        eyebrow="Search"
        title={query ? `Results for “${query}”` : 'Search'}
        subtitle={
          query
            ? `${results.length} matching ${results.length === 1 ? 'product' : 'products'}`
            : 'Type in the search bar to find tools, batteries and bundles.'
        }
        trail={[{ label: 'Search' }]}
      />
      <div className="page-body">
        {loading ? (
          <ProductGridSkeleton count={4} />
        ) : !query ? (
          <EmptyState
            icon="🔎"
            title="Start your search"
            message="Use the search bar above to look for products by name or category."
            actionTo="/products"
            actionLabel="Browse all products"
          />
        ) : results.length > 0 ? (
          <ProductGrid products={results} />
        ) : (
          <EmptyState
            icon="🔍"
            title="No products found"
            message={`We couldn't find anything for “${query}”. Try a different keyword.`}
            actionTo="/products"
            actionLabel="Browse all products"
          />
        )}
      </div>
    </div>
  )
}
