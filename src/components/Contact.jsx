import { WHATSAPP_LINK } from "../config";
import { FaWhatsapp, FaInstagram, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
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

        {/* Icon Buttons */}
        <div className="icon-row">
          <a href={WHATSAPP_LINK} className="icon-btn whatsapp">
            <FaWhatsapp />
          </a>

          <a href="tel:+919766513058" className="icon-btn call">
            <FaPhone />
          </a>

          <a
            href="https://maps.app.goo.gl/ve2i6tnq4MaoRs6v9"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn location"
          >
            <FaMapMarkerAlt />
          </a>

          <a
            href="https://www.instagram.com/guru_global_school_manchar?igsh=Y2x5cmZrMXJ0amhu"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn insta"
          >
            <FaInstagram />
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