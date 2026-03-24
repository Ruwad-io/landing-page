import { useInView } from '../hooks/useInView'

export default function Quote() {
  const [ref, isInView] = useInView()

  return (
    <section className="quote-section">
      <div className="container quote-inner">
        <blockquote
          ref={ref}
          className={`quote-text reveal ${isInView ? 'visible' : ''}`}
        >
          We don't wait for the future — we{' '}
          <span style={{ color: 'var(--color-accent-deep-purple)' }}>engineer it</span>,{' '}
          <span style={{ color: 'var(--color-accent-hot-pink)' }}>deploy it</span>, and{' '}
          <span style={{ color: 'var(--color-accent-crimson)' }}>make it accessible to all</span>.
        </blockquote>
      </div>
    </section>
  )
}
