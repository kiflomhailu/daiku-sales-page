import ContentPage from '../components/ContentPage.jsx'

export default function Privacy() {
  return (
    <ContentPage
      eyebrow="Your data, protected"
      title="Privacy Policy"
      subtitle="How DAIKU Tools collects, uses and protects your personal information."
      trail={[{ label: 'Privacy Policy' }]}
      updated="June 2026"
      sections={[
        {
          heading: 'Information we collect',
          body: ['We collect the information you provide when you place an order, create an account or contact us.'],
          list: ['Name and contact details', 'Delivery and billing address', 'Order and payment details', 'Browsing and device data via cookies'],
        },
        {
          heading: 'How we use your data',
          body: ['Your data is used to process orders, provide support, improve our store and, with consent, send relevant offers.'],
        },
        {
          heading: 'Cookies',
          body: ['We use essential cookies to run the store and optional analytics cookies to understand how it is used. You can manage cookies in your browser settings.'],
        },
        {
          heading: 'Sharing & third parties',
          body: ['We share data only with trusted partners required to fulfil your order, such as payment and delivery providers. We never sell your personal data.'],
        },
        {
          heading: 'Your rights',
          body: ['You can request access to, correction of, or deletion of your personal data at any time by contacting support@daikutools.com.'],
        },
      ]}
    />
  )
}
