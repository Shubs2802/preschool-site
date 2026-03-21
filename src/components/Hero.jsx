function Hero() {
  return (
    <section style={{
      background: "linear-gradient(135deg, #FFD93D, #FF6B6B)",
      color: "white"
    }}>
      <div className="container">
        <h1>Guru Global School 🌟</h1>
        <p style={{ fontSize: "18px" }}>We Care, We Create</p>
        <p><b>Admissions Open 2026–27</b></p>

        <a href="https://wa.me/919766513058" className="btn">
          Enroll via WhatsApp
        </a>
      </div>
    </section>
  );
}

export default Hero;