import { WHATSAPP_LINK } from "../config";

function Contact() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        color: "white",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <div className="container">
        <h3 style={{ marginBottom: "10px" }}>Contact Us</h3>

        <p style={{ margin: "5px 0" }}>
          📞 +91 9766513058, +91 8149613058, +91 9307164172
        </p>

        <p style={{ margin: "5px 0", fontSize: "14px", opacity: 0.9 }}>
          📍 Near Sai Temple, Mordewadi Road, Manchar - 410503
        </p>

        {/* Buttons */}
        <div
          style={{
            marginTop: "15px",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <a href={WHATSAPP_LINK} className="btn">
            💬 WhatsApp
          </a>

          <a href="tel:+919766513058" className="btn">
            📞 Call
          </a>

          {/* Map Link */}
          <a
            href="https://maps.app.goo.gl/ve2i6tnq4MaoRs6v9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            📍 View Location
          </a>
        </div>

        {/* Divider */}
        <div
          style={{
            marginTop: "25px",
            height: "1px",
            background: "rgba(255,255,255,0.3)",
            width: "80%",
            margin: "25px auto 0",
          }}
        ></div>

        {/* Footer */}
        <div style={{ marginTop: "15px", fontSize: "13px", opacity: 0.8 }}>
          <p>© 2026 Guru Global School. All Rights Reserved.</p>
          <p>Designed with ❤️ for better learning</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;