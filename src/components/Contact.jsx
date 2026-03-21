import { WHATSAPP_LINK } from "../config";

function Contact() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #667eea, #764ba2)", // SAME as Hero
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
        </div>

        {/* Map */}
        <div
          style={{
            marginTop: "20px",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.5355225624385!2d73.94072947387268!3d18.996109754478326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd31006b87d111%3A0xefbed163029bbc67!2sGuru%20Global%20Preschool%2Cmanchar.!5e0!3m2!1sen!2sin!4v1774121182140!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Guru Global School Location"
          ></iframe>
        </div>

        {/* Divider */}
        <div
          style={{
            marginTop: "25px",
            height: "1px",
            background: "rgba(255,255,255,0.3)",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        ></div>

        {/* Footer Bottom */}
        <div style={{ marginTop: "15px", fontSize: "13px", opacity: 0.8 }}>
          <p>© 2026 Guru Global School. All Rights Reserved.</p>
          <p>Designed with ❤️ for better learning</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;