import PageHeader from './PageHeader.jsx'

export default function ContentPage({ eyebrow, title, subtitle, trail, sections, updated }) {
  return (
    <div className="page">
      <PageHeader eyebrow={eyebrow} title={title} subtitle={subtitle} trail={trail} />
      <div className="page-body">
        <article className="content-doc">
          {updated && <p className="content-updated">Last updated: {updated}</p>}
          {sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              {section.list && (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>
      </div>
    </div>
  )
}
