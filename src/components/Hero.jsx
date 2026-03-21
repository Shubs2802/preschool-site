import { WHATSAPP_LINK } from "../config"; 

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
        <p style={{
          background: "white",
          color: "#333",
          display: "inline-block",
          padding: "5px 12px",
          borderRadius: "20px",
          fontSize: "12px",
          marginTop: "10px"
          }}>
            ISO 9001:2015 Certified
            </p>

        <a href={WHATSAPP_LINK} className="btn">
          Enroll via WhatsApp
        </a>
      </div>
    </section>
  );
}

export default Hero;