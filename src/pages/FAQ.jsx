import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

const faqGroups = [
  {
    group: 'Orders & Delivery',
    items: [
      { q: 'How fast is delivery?', a: 'Orders placed before 10:00 are shipped the same day. Standard delivery takes 1–3 working days within Belgium.' },
      { q: 'Is delivery free?', a: 'Delivery is free for orders over EUR 299. Below that, a flat fee of EUR 9 applies.' },
      { q: 'Can I track my order?', a: 'Yes. As soon as your order ships you receive a tracking link by email.' },
    ],
  },
  {
    group: 'Products & Batteries',
    items: [
      { q: 'Do all tools share the same battery?', a: 'All tools within a voltage platform (20V or 40V) use the same Share+ battery, so one pack powers many tools.' },
      { q: 'What warranty do I get?', a: 'Tools include a 2-year warranty, extendable to 3 years on registration. Batteries carry a 2-year warranty.' },
      { q: 'Are spare parts available?', a: 'Yes, common spare parts and accessories are available in the Accessories category.' },
    ],
  },
  {
    group: 'Returns & Payment',
    items: [
      { q: 'What is your return policy?', a: 'You can return unused items within 30 days for a full refund. See our Returns & Refunds page for details.' },
      { q: 'Which payment methods do you accept?', a: 'We accept Visa, Mastercard, Apple Pay, Google Pay and PayPal.' },
      { q: 'Is checkout secure?', a: 'Yes, all payments are processed over an encrypted, secure connection.' },
    ],
  },
]

export default function FAQ() {
  const [open, setOpen] = useState('0-0')

  return (
    <div className="page">
      <PageHeader
        eyebrow="Help centre"
        title="Frequently Asked Questions"
        subtitle="Quick answers about orders, products, batteries, returns and payment."
        trail={[{ label: 'FAQ' }]}
      />

      <div className="page-body">
        {faqGroups.map((group, gi) => (
          <section className="faq-group" key={group.group}>
            <h2>{group.group}</h2>
            <div className="faq-list">
              {group.items.map((item, ii) => {
                const key = `${gi}-${ii}`
                const isOpen = open === key
                return (
                  <div className={`faq-item${isOpen ? ' is-open' : ''}`} key={item.q}>
                    <button
                      type="button"
                      className="faq-q"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? '' : key)}
                    >
                      <span>{item.q}</span>
                      <span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && <p className="faq-a">{item.a}</p>}
                  </div>
                )
              })}
            </div>
          </section>
        ))}

        <div className="faq-contact">
          <h3>Still need help?</h3>
          <p>Our team is happy to answer anything we missed.</p>
          <Link className="primary-cta" to="/contact">
            Contact support
          </Link>
        </div>
      </div>
    </div>
  )
}
