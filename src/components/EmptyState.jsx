import { Link } from 'react-router-dom'

export default function EmptyState({ icon = '🛍️', title, message, actionTo, actionLabel }) {
  return (
    <div className="empty-state">
      <div className="empty-icon" aria-hidden="true">
        {icon}
      </div>
      <h2>{title}</h2>
      {message && <p>{message}</p>}
      {actionTo && actionLabel && (
        <Link className="primary-cta" to={actionTo}>
          {actionLabel}
        </Link>
      )}
    </div>
  )
}
