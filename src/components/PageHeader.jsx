import Breadcrumbs from './Breadcrumbs.jsx'

export default function PageHeader({ eyebrow, title, subtitle, trail, children }) {
  return (
    <section className="page-header">
      <div className="page-header-inner">
        {trail && <Breadcrumbs trail={trail} />}
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {subtitle && <p className="page-header-sub">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
