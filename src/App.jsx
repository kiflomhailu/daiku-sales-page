import { Routes, Route } from 'react-router-dom'
import './App.css'
import './pages.css'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Categories from './pages/Categories.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import BestSellers from './pages/BestSellers.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import SearchResults from './pages/SearchResults.jsx'
import Wishlist from './pages/Wishlist.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'
import BatterySystem from './pages/BatterySystem.jsx'
import Reviews from './pages/Reviews.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import Shipping from './pages/Shipping.jsx'
import Returns from './pages/Returns.jsx'
import FAQ from './pages/FAQ.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="categories" element={<Categories />} />
        <Route path="category/:slug" element={<CategoryPage />} />
        <Route path="best-sellers" element={<BestSellers />} />
        <Route path="product/:slug" element={<ProductDetails />} />
        <Route path="search" element={<SearchResults />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="battery-system" element={<BatterySystem />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="shipping" element={<Shipping />} />
        <Route path="returns" element={<Returns />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
