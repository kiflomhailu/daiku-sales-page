import ContentPage from '../components/ContentPage.jsx'

export default function Returns() {
  return (
    <ContentPage
      eyebrow="Peace of mind"
      title="Returns & Refunds"
      subtitle="Not happy with your purchase? Our 30-day return policy makes it easy."
      trail={[{ label: 'Returns & Refunds' }]}
      updated="June 2026"
      sections={[
        {
          heading: '30-day returns',
          body: ['You can return most unused items in their original packaging within 30 days of delivery for a full refund.'],
        },
        {
          heading: 'How to start a return',
          body: ['Contact support@daikutools.com with your order number. We will send a prepaid return label and instructions.'],
          list: ['Email us with your order number', 'Pack the item in its original box', 'Drop it off using the prepaid label'],
        },
        {
          heading: 'Refunds',
          body: ['Once we receive and inspect your return, your refund is processed to the original payment method within 5–7 working days.'],
        },
        {
          heading: 'Exceptions',
          body: ['Used consumables, opened safety items and custom bundles may not be eligible for return. Faulty items are always covered under warranty.'],
        },
      ]}
    />
  )
}
