import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { images } from '../data/store.js'

const stats = [
  { value: '120k+', label: 'Tools delivered' },
  { value: '4.9/5', label: 'Customer rating' },
  { value: '48h', label: 'Average dispatch' },
  { value: '3 yr', label: 'Standard warranty' },
]

const values = [
  { icon: '🔋', title: 'One battery system', text: 'We design around Share+ so customers buy once and expand forever.' },
  { icon: '🚚', title: 'Fast, local delivery', text: 'Stock held locally for next-day dispatch across the region.' },
  { icon: '🛠️', title: 'Built to last', text: 'Brushless motors and quality cells backed by a real warranty.' },
  { icon: '💬', title: 'Honest support', text: 'A team that knows the tools and answers quickly.' },
]

export default function About() {
  return (
    <div className="page">
      <PageHeader
        eyebrow="Our story"
        title="About DAIKU Tools"
        subtitle="We help people power every home, garden and workshop with one smart cordless ecosystem."
        trail={[{ label: 'About Us' }]}
      />

      <section className="about-intro">
        <div className="about-copy">
          <h2>Tools that work as hard as you do</h2>
          <p>
            DAIKU started with a simple idea: people shouldn't need a different battery for every
            tool. Our Share+ system means one platform powers drills, saws, mowers and garden
            tools — saving money and reducing waste.
          </p>
          <p>
            Today we serve thousands of homeowners and trade customers with a focused range of
            dependable, well-priced cordless tools and the support to back them up.
          </p>
          <Link className="primary-cta" to="/products">
            Explore the range
          </Link>
        </div>
        <div className="about-media">
          <img src={images.mowerLifestyle} alt="DAIKU tools in use" />
        </div>
      </section>

      <section className="about-stats">
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="about-values">
        <div className="section-heading">
          <p className="eyebrow">What we stand for</p>
          <h2>Our values</h2>
        </div>
        <div className="values-grid">
          {values.map((value) => (
            <article className="value-card" key={value.title}>
              <span className="value-icon" aria-hidden="true">{value.icon}</span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <h2>Ready to build your Share+ kit?</h2>
        <p>Start with a bundle and add compatible tools whenever you need them.</p>
        <div className="about-cta-actions">
          <Link className="primary-cta" to="/best-sellers">Shop best sellers</Link>
          <Link className="secondary-cta" to="/contact">Talk to us</Link>
        </div>
      </section>
    </div>
  )
}
