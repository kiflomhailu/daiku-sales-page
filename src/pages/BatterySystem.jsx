import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { images, batteries, batteryFaqs, productsByCategory } from '../data/store.js'

const supportedTools = [
  { name: 'Drills & drivers', icon: '🔩', system: '20V Share+' },
  { name: 'Saws & chainsaws', icon: '🪚', system: '20V / 40V' },
  { name: 'Lawn mowers', icon: '🌿', system: '40V Share+' },
  { name: 'Trimmers & pruners', icon: '✂️', system: '20V Share+' },
  { name: 'Sprayers & washers', icon: '💧', system: '20V Share+' },
  { name: 'Lights & blowers', icon: '💡', system: '20V Share+' },
]

const chargers = [
  { name: 'Standard Charger', time: '60 min (4.0 Ah)', note: 'Everyday charging for one pack.' },
  { name: 'Fast Charger', time: '35 min (4.0 Ah)', note: 'Rapid turnaround for busy days.' },
  { name: 'Dual Charger', time: '2 packs in parallel', note: 'Keep two batteries ready at once.' },
]

export default function BatterySystem() {
  const [openFaq, setOpenFaq] = useState(0)
  const batteryProducts = productsByCategory('batteries')
    .concat(productsByCategory('chargers'))

  return (
    <div className="page">
      <PageHeader
        eyebrow="DAIKU Share+ system"
        title="One battery. Every tool."
        subtitle="The Share+ ecosystem lets a single battery platform power your entire DAIKU collection — saving money and reducing clutter."
        trail={[{ label: 'Battery System' }]}
      />

      <section className="battery-hero">
        <div className="battery-hero-copy">
          <h2>How the Share+ system works</h2>
          <p>
            Buy a tool once, then expand with bare units that share the same battery. Two
            platforms cover everything: <strong>20V</strong> for handheld tools and{' '}
            <strong>40V</strong> for high-demand mowers and saws.
          </p>
          <ul className="battery-points">
            <li>Interchangeable across the full range</li>
            <li>Smart cells with overload protection</li>
            <li>Charge-level indicator on every pack</li>
          </ul>
          <Link className="primary-cta" to="/category/batteries">
            Shop batteries
          </Link>
        </div>
        <div className="battery-hero-media">
          <img src={images.daikuPruner} alt="DAIKU Share+ battery system" />
          <span className="battery-chip">20V · 40V</span>
        </div>
      </section>

      <section className="battery-block">
        <div className="section-heading">
          <p className="eyebrow">Compatibility guide</p>
          <h2>Supported tools</h2>
        </div>
        <div className="tool-grid">
          {supportedTools.map((tool) => (
            <article className="tool-card" key={tool.name}>
              <span className="tool-icon" aria-hidden="true">{tool.icon}</span>
              <h3>{tool.name}</h3>
              <span className="tool-system">{tool.system}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="battery-block">
        <div className="section-heading">
          <p className="eyebrow">Capacities</p>
          <h2>Battery comparison</h2>
        </div>
        <div className="table-scroll">
          <table className="compare-table">
            <thead>
              <tr>
                <th>Model</th>
                <th>Voltage</th>
                <th>Capacity</th>
                <th>Runtime</th>
                <th>Weight</th>
                <th>Best for</th>
              </tr>
            </thead>
            <tbody>
              {batteries.map((battery) => (
                <tr key={battery.model}>
                  <td data-label="Model"><strong>{battery.model}</strong></td>
                  <td data-label="Voltage">{battery.voltage}</td>
                  <td data-label="Capacity">{battery.capacity}</td>
                  <td data-label="Runtime">{battery.runtime}</td>
                  <td data-label="Weight">{battery.weight}</td>
                  <td data-label="Best for">{battery.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="battery-block">
        <div className="section-heading">
          <p className="eyebrow">Charger information</p>
          <h2>Keep tools ready</h2>
        </div>
        <div className="charger-grid">
          {chargers.map((charger) => (
            <article className="charger-card" key={charger.name}>
              <span className="charger-icon" aria-hidden="true">⚡</span>
              <h3>{charger.name}</h3>
              <p className="charger-time">{charger.time}</p>
              <p>{charger.note}</p>
            </article>
          ))}
        </div>
      </section>

      {batteryProducts.length > 0 && (
        <section className="battery-block">
          <div className="section-heading">
            <p className="eyebrow">Shop the system</p>
            <h2>Batteries &amp; chargers</h2>
          </div>
          <div className="product-grid-modern">
            {batteryProducts.map((product) => (
              <Link className="mini-product" to={`/product/${product.slug}`} key={product.id}>
                <img src={product.image} alt={product.name} />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="battery-block">
        <div className="section-heading">
          <p className="eyebrow">Good to know</p>
          <h2>Frequently asked questions</h2>
        </div>
        <div className="faq-list">
          {batteryFaqs.map((faq, index) => (
            <div className={`faq-item${openFaq === index ? ' is-open' : ''}`} key={faq.q}>
              <button
                type="button"
                className="faq-q"
                aria-expanded={openFaq === index}
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              >
                <span>{faq.q}</span>
                <span className="faq-icon" aria-hidden="true">{openFaq === index ? '−' : '+'}</span>
              </button>
              {openFaq === index && <p className="faq-a">{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
