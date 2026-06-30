import { useState } from 'react'
import ProductCard from './ProductCard.jsx'
import QuickViewModal from './QuickViewModal.jsx'

export default function ProductGrid({ products }) {
  const [quickView, setQuickView] = useState(null)

  return (
    <>
      <div className="product-grid-modern">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onQuickView={setQuickView} />
        ))}
      </div>
      {quickView && <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />}
    </>
  )
}
