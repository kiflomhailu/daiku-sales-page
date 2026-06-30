import ContentPage from '../components/ContentPage.jsx'

export default function Shipping() {
  return (
    <ContentPage
      eyebrow="Delivery"
      title="Shipping Policy"
      subtitle="Everything you need to know about how and when your DAIKU order arrives."
      trail={[{ label: 'Shipping Policy' }]}
      updated="June 2026"
      sections={[
        {
          heading: 'Delivery times',
          body: ['Orders placed before 10:00 on a working day are dispatched the same day. Standard delivery takes 1–3 working days within Belgium and 2–5 days elsewhere in the EU.'],
        },
        {
          heading: 'Shipping costs',
          body: ['Delivery is free for orders over EUR 299. For smaller orders a flat fee of EUR 9 applies.'],
          list: ['Free shipping over EUR 299', 'Flat EUR 9 below the threshold', 'Tracked delivery on every order'],
        },
        {
          heading: 'Carriers',
          body: ['We ship with trusted carriers including FedEx and DPD. You will receive a tracking link by email once your order is on its way.'],
        },
        {
          heading: 'Large items',
          body: ['Bulky items such as mowers may be delivered by a dedicated courier and can take an extra working day.'],
        },
      ]}
    />
  )
}
