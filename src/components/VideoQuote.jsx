import { useInView } from '../hooks/useInView'

export default function VideoQuote() {
  const [ref, isInView] = useInView()

  return (
    <section className="video-quote" ref={ref}>
      <video
        className="video-quote-bg"
        autoPlay
        muted
        loop
        playsInline
        src="https://framerusercontent.com/assets/fFvEE0R7zgzMZyafnmRGWfywnk.mp4"
      />
      <div className="video-quote-overlay" />
      <div className="container video-quote-content">
        <p className={`video-quote-text reveal ${isInView ? 'visible' : ''}`}>
          We build AI-powered platforms, data pipelines, and digital tools that help organizations{' '}
          <span style={{ color: 'var(--color-accent-violet)' }}>measure their impact</span> — not just talk about it.
        </p>
        <p
          className={`video-quote-text reveal ${isInView ? 'visible' : ''}`}
          style={{ transitionDelay: '0.2s' }}
        >
          From optimizing public services to connecting underserved communities,{' '}
          <span style={{ color: 'var(--color-accent-pink)' }}>every line of code serves a purpose</span>.
        </p>
      </div>
    </section>
  )
}
