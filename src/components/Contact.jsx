function Contact() {
  return (
    <section style={{
      background: "linear-gradient(135deg, #4facfe, #00f2fe)",
      color: "white"
    }}>
      <div className="container">
        <h2>Contact Us</h2>

        <p>📞 +91 9766513058, +91 8149613058, +91 9307164172</p>
        <p>📍 Near Sai Temple,Mordewadi Road,Manchar - 410503</p>

        <a href="https://wa.me/919766513058" className="btn">
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}

export default Contact;