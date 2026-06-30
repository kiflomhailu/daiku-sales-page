import { Link } from 'react-router-dom'

export default function Breadcrumbs({ trail = [] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        {trail.map((item, index) => {
          const isLast = index === trail.length - 1
          return (
            <li key={item.label} aria-current={isLast ? 'page' : undefined}>
              <span className="crumb-sep" aria-hidden="true">/</span>
              {item.to && !isLast ? (
                <Link to={item.to}>{item.label}</Link>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
