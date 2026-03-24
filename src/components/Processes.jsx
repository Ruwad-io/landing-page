import { useInView } from '../hooks/useInView'

const processes = [
  {
    number: 1,
    title: 'Research',
    image: '/images/research.jpg',
    paragraphs: [
      'At Ruwad, every project begins with curiosity. We analyze data, human behavior, and systemic challenges to uncover patterns that matter.',
      'Our research blends technology, sociology, and local context — turning complexity into insight.',
    ],
  },
  {
    number: 2,
    title: 'Strategy',
    image: '/images/strategy.jpg',
    paragraphs: [
      'We transform insights into scalable strategies.',
      'By aligning innovation with real-world needs, we help organizations — from startups to governments — build solutions that last.',
      'Every plan we craft is grounded in measurable impact and adaptive growth.',
    ],
  },
  {
    number: 3,
    title: 'Design',
    image: '/images/design.jpg',
    paragraphs: [
      'We believe design is where technology meets empathy.',
      'Our teams prototype, test, and refine digital systems that feel intuitive, inclusive, and purposeful.',
      "Good design doesn't just solve problems — it amplifies human potential.",
    ],
  },
]

function ProcessItem({ data, index }) {
  const [ref, isInView] = useInView()
  return (
    <div
      ref={ref}
      className={`process-item reveal ${isInView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="process-image-wrap">
        <img src={data.image} alt={data.title} loading="lazy" />
      </div>
      <div className="process-body">
        <span className="process-number">0{data.number}</span>
        <h3 className="process-title">{data.title}</h3>
        {data.paragraphs.map((para, j) => (
          <p key={j} className="process-text">{para}</p>
        ))}
      </div>
    </div>
  )
}

export default function Processes() {
  const [ref, isInView] = useInView()

  return (
    <section className="processes" id="process">
      <div className="container">
        <div
          ref={ref}
          className={`processes-header reveal ${isInView ? 'visible' : ''}`}
        >
          <p className="section-label">How we work</p>
          <h2 className="processes-heading">Our Process</h2>
        </div>
        <div className="processes-list">
          {processes.map((p, i) => (
            <ProcessItem key={i} data={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
