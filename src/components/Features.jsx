function Features() {
  const features = [
    { text: "Activity Based Learning", icon: "🎨", color: "#FFD93D" },
    { text: "Phonics & Foundation Skills", icon: "📚", color: "#4D96FF" },
    { text: "Safe & Caring Environment", icon: "🛡️", color: "#6BCB77" },
    { text: "Individual Attention", icon: "👩‍🏫", color: "#FF6B6B" },
    { text: "Art, Music & Dance", icon: "🎵", color: "#f093fb" },
    { text: "Cultural Celebrations", icon: "🎉", color: "#FF9F1C" },
    { text: "CCTV Supervision", icon: "📹", color: "#00C9A7" }
  ];

  return (
    <section id ="features" style={{ background: "#f9f9f9" }}>
      <div className="container">
        <h2>Why Choose Us</h2>

        <div className="grid grid-3">
          {features.map((f, i) => (
            <div
              key={i}
              className={`card ${
                features.length % 3 === 1 && i === features.length - 1
                  ? "center-last"
                  : ""
              }`}
              style={{
                background: "linear-gradient(135deg, #f093fb, #f5576c)",
                color: "white",
                textAlign: "center",
              }}
            >
              {/* Icon */}
              <div
                className="icon"
                style={{
                  background: f.color,
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 12px",
                  fontSize: "26px",
                }}
              >
                {f.icon}
              </div>

              {/* Text */}
              <div style={{ fontWeight: "500" }}>
                {f.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;