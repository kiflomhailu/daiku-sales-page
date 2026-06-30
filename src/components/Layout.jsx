import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { useStore } from '../context/StoreContext.jsx'

export default function Layout() {
  const { pathname } = useLocation()
  const { toast } = useStore()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])

  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
      {toast && (
        <div className="toast" role="status">
          <span className="toast-check" aria-hidden="true">✓</span>
          {toast.message}
        </div>
      )}
    </div>
  )
}
