import { WHATSAPP_LINK } from "../config";

function Hero() {
  return (
    <section
      id="home"
      className="hero-fixed"
    >
      <div className="floating-shapes">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="container hero-content">
        <h1>Guru Global School 🌟</h1>

        <p className="hero-tagline">We Care, We Create</p>

        <p className="hero-admission">
          Admissions Open 2026–27
        </p>

        <div className="hero-actions">
          <div className="hero-badge">
            🏅 ISO 9001:2015 Certified
          </div>

          <a href={WHATSAPP_LINK} className="btn hero-btn">
            Enroll via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;