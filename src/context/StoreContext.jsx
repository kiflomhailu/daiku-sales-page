import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { products } from '../data/store.js'

const StoreContext = createContext(null)

const CART_KEY = 'daiku_cart'
const WISH_KEY = 'daiku_wishlist'

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => loadJSON(CART_KEY, []))
  const [wishlist, setWishlist] = useState(() => loadJSON(WISH_KEY, []))
  const [toast, setToast] = useState(null)

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem(WISH_KEY, JSON.stringify(wishlist))
  }, [wishlist])

  useEffect(() => {
    if (!toast) return undefined
    const timer = setTimeout(() => setToast(null), 2600)
    return () => clearTimeout(timer)
  }, [toast])

  const notify = (message) => setToast({ message, id: Date.now() })

  const addToCart = (productId, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === productId)
      if (existing) {
        return prev.map((item) =>
          item.id === productId ? { ...item, qty: item.qty + qty } : item,
        )
      }
      return [...prev, { id: productId, qty }]
    })
    const product = products.find((p) => p.id === productId)
    notify(`${product ? product.name : 'Product'} added to cart`)
  }

  const updateQty = (productId, qty) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === productId ? { ...item, qty: Math.max(1, qty) } : item))
        .filter((item) => item.qty > 0),
    )
  }

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId))
  }

  const clearCart = () => setCart([])

  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        notify('Removed from wishlist')
        return prev.filter((id) => id !== productId)
      }
      notify('Saved to wishlist')
      return [...prev, productId]
    })
  }

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((id) => id !== productId))
  }

  const isInWishlist = (productId) => wishlist.includes(productId)

  const cartItems = useMemo(
    () =>
      cart
        .map((item) => {
          const product = products.find((p) => p.id === item.id)
          return product ? { ...product, qty: item.qty } : null
        })
        .filter(Boolean),
    [cart],
  )

  const wishlistItems = useMemo(
    () => wishlist.map((id) => products.find((p) => p.id === id)).filter(Boolean),
    [wishlist],
  )

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.qty, 0), [cart])
  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cartItems],
  )

  const value = {
    cart,
    cartItems,
    cartCount,
    subtotal,
    addToCart,
    updateQty,
    removeFromCart,
    clearCart,
    wishlist,
    wishlistItems,
    wishlistCount: wishlist.length,
    toggleWishlist,
    removeFromWishlist,
    isInWishlist,
    toast,
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}
