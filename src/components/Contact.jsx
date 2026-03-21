import { WHATSAPP_LINK } from "../config";

function Contact() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #4facfe, #00f2fe)",
        color: "white",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <div className="container">
        <h2 style={{ marginBottom: "10px" }}>Contact Us</h2>

        <p style={{ opacity: 0.9 }}>
          Get in touch with us for admissions and enquiries
        </p>

        {/* Contact Info Box */}
        <div
          style={{
            marginTop: "25px",
            background: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(10px)",
            padding: "20px",
            borderRadius: "15px",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          <p style={{ margin: "10px 0" }}>
            📞 +91 9766513058 <br />
            +91 8149613058 <br />
            +91 9307164172
          </p>

          <p style={{ margin: "10px 0" }}>
            📍 Near Sai Temple, Mordewadi Road, Manchar - 410503
          </p>
        </div>

        {/* Button */}
        <div style={{ marginTop: "25px" }}>
          <a
            href={WHATSAPP_LINK}
            className="btn"
            style={{
              fontSize: "16px",
              padding: "14px 28px",
            }}
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;