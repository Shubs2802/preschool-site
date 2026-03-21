import { WHATSAPP_LINK } from "../config";

function Hero() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        color: "white",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <div className="container">
        <h1 style={{ marginBottom: "10px" }}>
          Guru Global School 🌟
        </h1>

        <p style={{ fontSize: "18px", opacity: 0.9 }}>
          We Care, We Create
        </p>

        <p style={{ marginTop: "10px", fontWeight: "bold" }}>
          Admissions Open 2026–27
        </p>

        {/* Wrapper for badge + button */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
            marginTop: "25px",
          }}
        >
          {/* ISO Badge */}
          <div
            style={{
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)",
              padding: "8px 18px",
              borderRadius: "25px",
              fontSize: "13px",
              fontWeight: "bold",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            🏅 ISO 9001:2015 Certified
          </div>

          {/* WhatsApp Button */}
          <a
            href={WHATSAPP_LINK}
            className="btn"
            style={{
              fontSize: "16px",
              padding: "14px 28px",
            }}
          >
            Enroll via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;