export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content container">
        <img src="/logo.jpg" alt="Ruwad logo" className="hero-logo" />
        <h1 className="hero-title">Ruwad</h1>
        <p className="hero-arabic">روَّاد</p>
        <h3 className="hero-subtitle">
          Pioneering <span className="highlight-blue">Technology</span> for Human Progress
        </h3>
        <a href="#contact" className="btn btn-primary">Get in touch</a>
      </div>
      <a href="#about" className="scroll-indicator" aria-label="Scroll down">
        <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
          <rect x="1" y="1" width="18" height="28" rx="9" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
          <circle className="scroll-dot" cx="10" cy="10" r="3" fill="#fff"/>
        </svg>
      </a>
    </section>
  )
}
