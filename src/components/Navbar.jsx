import { useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-pill">
        <a href="#home" className="navbar-home">
          <img src="/logo.jpg" alt="Ruwad" className="navbar-logo" />
          <span className="navbar-brand">Ruwad</span>
        </a>
        <div className={`navbar-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="navbar-link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
        <button
          className="navbar-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`hamburger ${open ? 'open' : ''}`} />
        </button>
      </div>
    </nav>
  )
}
