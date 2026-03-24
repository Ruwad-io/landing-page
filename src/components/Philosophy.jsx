import { useInView } from '../hooks/useInView'

const items = [
  {
    title: 'Dealing with Chaos',
    subtitle: 'Transforming complex global challenges into structured opportunities.',
    image: '/images/chaos.jpg',
  },
  {
    title: 'Adaptive by Design',
    subtitle: 'Building systems that adapt to context, culture, and scale.',
    image: '/images/adaptive.jpg',
  },
  {
    title: 'Scaling Intelligence',
    subtitle: 'Bringing AI-driven solutions from startups to entire nations.',
    image: '/images/scaling.jpg',
  },
  {
    title: 'Connecting Worlds',
    subtitle: 'Bridging innovation gaps between ecosystems and communities.',
    image: '/images/connecting.jpg',
  },
  {
    title: 'Shaping Tomorrow',
    subtitle: 'Designing the infrastructure for a sustainable, tech-enabled future.',
    image: '/images/shaping.jpg',
  },
  {
    title: 'Human First',
    subtitle: 'Technology is only as good as the lives it improves.',
    image: '/images/human-first.jpg',
  },
]

function PhilosophyCard({ item, index }) {
  const [ref, isInView] = useInView()
  return (
    <div
      ref={ref}
      className={`philosophy-card reveal ${isInView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="philosophy-card-img-wrap">
        <img src={item.image} alt={item.title} loading="lazy" />
      </div>
      <div className="philosophy-card-body">
        <h3>{item.title}</h3>
        <p>{item.subtitle}</p>
      </div>
    </div>
  )
}

export default function Philosophy() {
  const [ref, isInView] = useInView()

  return (
    <section className="philosophy" id="work">
      <div className="container">
        <div
          ref={ref}
          className={`philosophy-header reveal ${isInView ? 'visible' : ''}`}
        >
          <p className="section-label">Our vision</p>
          <h2 className="philosophy-title">&phi;lo-sophy</h2>
          <p className="philosophy-subtitle">The principles that guide everything we build.</p>
        </div>
        <div className="philosophy-grid">
          {items.map((item, i) => (
            <PhilosophyCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
