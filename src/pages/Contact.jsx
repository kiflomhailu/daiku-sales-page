import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'

const channels = [
  { icon: '📞', title: 'Phone', value: '+32 456 768 123', note: 'Mon–Fri, 9:00–18:00' },
  { icon: '✉️', title: 'Email', value: 'support@daikutools.com', note: 'Replies within 24h' },
  { icon: '📍', title: 'Showroom', value: 'Hasselt, Belgium', note: 'By appointment' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <div className="page">
      <PageHeader
        eyebrow="We're here to help"
        title="Contact Us"
        subtitle="Questions about a tool, an order or the Share+ system? Reach out — we respond fast."
        trail={[{ label: 'Contact' }]}
      />

      <div className="page-body contact-layout">
        <div className="contact-channels">
          {channels.map((channel) => (
            <article className="contact-card" key={channel.title}>
              <span className="contact-icon" aria-hidden="true">{channel.icon}</span>
              <h3>{channel.title}</h3>
              <strong>{channel.value}</strong>
              <span>{channel.note}</span>
            </article>
          ))}
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <h2>Send a message</h2>
          <div className="field-row">
            <label>
              <span>Name</span>
              <input type="text" required placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" required placeholder="you@example.com" />
            </label>
          </div>
          <label>
            <span>Subject</span>
            <input type="text" required placeholder="How can we help?" />
          </label>
          <label>
            <span>Message</span>
            <textarea rows="5" required placeholder="Write your message" />
          </label>
          <button type="submit" className="primary-cta">
            Send message
          </button>
          {sent && <p className="coupon-ok">Thanks! Your message has been sent.</p>}
        </form>
      </div>
    </div>
  )
}
