import { useInView } from '../hooks/useInView'
import { useState, useEffect } from 'react'

function AnimatedNumber({ target, duration = 2000, start }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    let current = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setValue(target)
        clearInterval(timer)
      } else {
        setValue(Math.floor(current))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [start, target, duration])

  return <>{value}</>
}

const stats = [
  { value: 10, suffix: '+', label: 'Years in AI & R&D' },
  { value: 4, suffix: '', label: 'Startups Founded' },
  { value: 6, suffix: '+', label: 'Industries Served' },
  { value: 5, suffix: '', label: 'Research Publications' },
]

export default function Numbers() {
  const [ref, isInView] = useInView()

  return (
    <section className="numbers" id="numbers">
      <div className="container">
        <div
          ref={ref}
          className={`numbers-grid reveal ${isInView ? 'visible' : ''}`}
        >
          {stats.map((s, i) => (
            <div key={i} className="number-item">
              <span className="number-value">
                <AnimatedNumber target={s.value} start={isInView} />
                {s.suffix}
              </span>
              <span className="number-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
