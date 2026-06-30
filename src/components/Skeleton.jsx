import { useEffect, useState } from 'react'

export function ProductGridSkeleton({ count = 8 }) {
  return (
    <div className="product-grid-modern">
      {Array.from({ length: count }).map((_, i) => (
        <div className="pc pc--skeleton" key={i}>
          <div className="skeleton skeleton-media" />
          <div className="pc-body">
            <div className="skeleton skeleton-line skeleton-line--short" />
            <div className="skeleton skeleton-line" />
            <div className="skeleton skeleton-line skeleton-line--short" />
            <div className="skeleton skeleton-btn" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function useLoading(delay = 450) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), delay)
    return () => clearTimeout(timer)
  }, [delay])
  return loading
}
