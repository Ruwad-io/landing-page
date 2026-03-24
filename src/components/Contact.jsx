import { useInView } from '../hooks/useInView'

export default function Contact() {
  const [ref, isInView] = useInView()

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div
          ref={ref}
          className={`contact-card reveal ${isInView ? 'visible' : ''}`}
        >
          <p className="section-label">Get started</p>
          <h2 className="contact-title">Ready to pioneer your next project?</h2>
          <p className="contact-text">
            Whether you're a startup, an organization, or a government — we'd love to explore how technology can drive your impact.
          </p>
          <div className="contact-actions">
            <a href="mailto:contact@ruwad.io" className="btn btn-primary btn-lg">
              contact@ruwad.io
            </a>
          </div>
          <p className="contact-location">Based in Paris — working globally</p>
        </div>
      </div>
    </section>
  )
}
