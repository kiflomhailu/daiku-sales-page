import ContentPage from '../components/ContentPage.jsx'

export default function Terms() {
  return (
    <ContentPage
      eyebrow="The fine print"
      title="Terms & Conditions"
      subtitle="The terms that apply when you use the DAIKU Tools website and place an order."
      trail={[{ label: 'Terms & Conditions' }]}
      updated="June 2026"
      sections={[
        {
          heading: 'Using our website',
          body: ['By accessing this website you agree to use it lawfully and not to misuse content, pricing or product information.'],
        },
        {
          heading: 'Orders & pricing',
          body: ['All prices include VAT unless stated otherwise. We reserve the right to correct pricing errors and to refuse or cancel orders in rare cases of obvious mistakes.'],
        },
        {
          heading: 'Payment',
          body: ['Payment is taken at checkout. Your order is confirmed once payment is successfully processed.'],
        },
        {
          heading: 'Warranty',
          body: ['Products are covered by the warranty stated on each product page. Warranty does not cover misuse, wear parts or unauthorised repairs.'],
        },
        {
          heading: 'Liability',
          body: ['DAIKU Tools is not liable for indirect damages arising from product use beyond the limits permitted by applicable law.'],
        },
      ]}
    />
  )
}
