import { useMemo, useState } from 'react'
import ProductGrid from './ProductGrid.jsx'
import { ProductGridSkeleton, useLoading } from './Skeleton.jsx'
import EmptyState from './EmptyState.jsx'
import { categories } from '../data/store.js'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'discount', label: 'Biggest Discount' },
]

export default function ProductListing({ allProducts, lockedCategory = null }) {
  const loading = useLoading()
  const [selected, setSelected] = useState(lockedCategory ? [lockedCategory] : [])
  const [sortBy, setSortBy] = useState('featured')
  const [inStockOnly, setInStockOnly] = useState(false)
  const [maxPrice, setMaxPrice] = useState(600)
  const [mobileFilters, setMobileFilters] = useState(false)

  const toggleCategory = (slug) => {
    setSelected((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    )
  }

  const filtered = useMemo(() => {
    let list = [...allProducts]
    if (!lockedCategory && selected.length > 0) {
      list = list.filter((p) => selected.includes(p.category))
    }
    if (inStockOnly) list = list.filter((p) => p.stock !== 'out')
    list = list.filter((p) => p.price <= maxPrice)

    switch (sortBy) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        list.sort((a, b) => b.rating - a.rating)
        break
      case 'discount':
        list.sort(
          (a, b) => b.oldPrice - b.price - (a.oldPrice - a.price),
        )
        break
      default:
        break
    }
    return list
  }, [allProducts, selected, inStockOnly, maxPrice, sortBy, lockedCategory])

  return (
    <div className="listing">
      <aside className={`listing-filters${mobileFilters ? ' is-open' : ''}`}>
        <div className="filter-block">
          <h3>Categories</h3>
          <ul className="filter-list">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <label className={lockedCategory && lockedCategory !== cat.slug ? 'is-disabled' : ''}>
                  <input
                    type="checkbox"
                    checked={lockedCategory ? lockedCategory === cat.slug : selected.includes(cat.slug)}
                    disabled={Boolean(lockedCategory)}
                    onChange={() => toggleCategory(cat.slug)}
                  />
                  <span>{cat.name}</span>
                  <em>{cat.count}</em>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="filter-block">
          <h3>Max price</h3>
          <input
            type="range"
            min="40"
            max="600"
            step="10"
            value={maxPrice}
            onChange={(event) => setMaxPrice(Number(event.target.value))}
          />
          <div className="filter-range-label">Up to EUR {maxPrice}</div>
        </div>

        <div className="filter-block">
          <h3>Availability</h3>
          <label className="filter-switch">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(event) => setInStockOnly(event.target.checked)}
            />
            <span>In stock only</span>
          </label>
        </div>
      </aside>

      <div className="listing-main">
        <div className="listing-toolbar">
          <button
            type="button"
            className="filter-toggle"
            onClick={() => setMobileFilters((open) => !open)}
          >
            Filters
          </button>
          <span className="listing-count">
            {loading ? 'Loading…' : `${filtered.length} products`}
          </span>
          <label className="sort-select">
            <span>Sort by</span>
            <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        {loading ? (
          <ProductGridSkeleton count={6} />
        ) : filtered.length > 0 ? (
          <ProductGrid products={filtered} />
        ) : (
          <EmptyState
            icon="🔍"
            title="No products match your filters"
            message="Try removing a filter or raising the maximum price."
            actionTo="/products"
            actionLabel="Reset to all products"
          />
        )}
      </div>
    </div>
  )
}
