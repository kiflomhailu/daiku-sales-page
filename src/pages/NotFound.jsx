import PageHeader from '../components/PageHeader.jsx'
import EmptyState from '../components/EmptyState.jsx'

export default function NotFound() {
  return (
    <div className="page">
      <PageHeader title="Page not found" trail={[{ label: '404' }]} />
      <div className="page-body">
        <EmptyState
          icon="🧭"
          title="404 — This page doesn't exist"
          message="The page you were looking for may have moved. Let's get you back on track."
          actionTo="/"
          actionLabel="Back to home"
        />
      </div>
    </div>
  )
}
