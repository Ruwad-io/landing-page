import { useInView } from '../hooks/useInView'

const paragraphs = [
  {
    text: 'Ruwad (رُوَّاد) — "pioneers" in Arabic. We are a technology company on a mission to ',
    highlight: 'put innovation at the service of humanity.',
    highlightColor: 'var(--color-accent-purple)',
  },
  {
    text: 'We design intelligent systems powered by AI, data, and cloud infrastructure to ',
    highlight: 'solve real-world challenges',
    highlightColor: 'var(--color-accent-magenta)',
    suffix: ' — from healthcare access and education to sustainable urban development.',
  },
  {
    text: 'United as engineers, creators, and builders, we believe technology should serve people, communities, and organizations to ',
    highlight: 'build a more sustainable and inclusive future.',
    highlightColor: 'var(--color-accent-rose)',
  },
]

function ManifestoParagraph({ data, index }) {
  const [ref, isInView] = useInView()
  return (
    <p
      ref={ref}
      className={`manifesto-text reveal ${isInView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {data.text}
      <span style={{ color: data.highlightColor }}>{data.highlight}</span>
      {data.suffix || ''}
    </p>
  )
}

export default function Manifesto() {
  const [titleRef, titleInView] = useInView()

  return (
    <section className="manifesto" id="about">
      <div className="container manifesto-inner">
        <div
          ref={titleRef}
          className={`manifesto-header reveal ${titleInView ? 'visible' : ''}`}
        >
          <p className="section-label">About us</p>
          <h2 className="manifesto-title">Our Mission</h2>
        </div>
        {paragraphs.map((p, i) => (
          <ManifestoParagraph key={i} data={p} index={i} />
        ))}
      </div>
    </section>
  )
}
