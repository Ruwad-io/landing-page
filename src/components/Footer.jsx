const pages = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-card">
          <div className="footer-top">
            <div className="footer-col">
              <h4 className="footer-heading">Pages</h4>
              {pages.map((p) => (
                <a key={p.name} href={p.href} className="footer-link">{p.name}</a>
              ))}
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Contact</h4>
              <a href="mailto:contact@ruwad.io" className="footer-link">contact@ruwad.io</a>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-brand-wrap">
              <img src="/logo.jpg" alt="Ruwad" className="footer-brand-logo" />
              <span className="footer-brand">Ruwad</span>
            </div>
            <span className="footer-copyright">&copy; {year} Ruwad. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
