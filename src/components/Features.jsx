function Features() {
  const features = [
    "Activity Based Learning",
    "Phonics & Foundation Skills",
    "Safe & Caring Environment",
    "Individual Attention",
    "Art, Music & Dance",
    "Cultural Celebrations",
    "CCTV Supervision"
  ];

  return (
    <section style={{ background: "#f9f9f9" }}>
      <div className="container">
        <h2>Why Choose Us</h2>

        <div className="grid grid-3">
          {features.map((f, i) => (
            <div key={i} className="card" style={{
              background: "linear-gradient(135deg, #f093fb, #f5576c)",
              color: "white"
            }}>
              {f}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;