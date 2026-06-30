import PageHeader from '../components/PageHeader.jsx'
import ProductListing from '../components/ProductListing.jsx'
import { products } from '../data/store.js'

export default function Products() {
  return (
    <div className="page">
      <PageHeader
        eyebrow="Full range"
        title="All Products"
        subtitle="Browse the complete DAIKU range of cordless tools, garden equipment and Share+ bundles."
        trail={[{ label: 'Products' }]}
      />
      <div className="page-body">
        <ProductListing allProducts={products} />
      </div>
    </div>
  )
}
