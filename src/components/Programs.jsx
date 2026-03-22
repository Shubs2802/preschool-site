function Programs() {
  const programs = [
    {
      title: "Playgroup",
      age: "2–3 Years",
      color: "linear-gradient(135deg, #FFD93D, #FF9F1C)",
      points: ["Fun Activities", "Social Skills", "Motor Development"]
    },
    {
      title: "Nursery",
      age: "3–4 Years",
      color: "linear-gradient(135deg, #6BCB77, #4D96FF)",
      points: ["Basic Learning", "Phonics", "Creativity"]
    },
    {
      title: "Jr. KG",
      age: "4–5 Years",
      color: "linear-gradient(135deg, #4facfe, #00f2fe)",
      points: ["Reading Skills", "Numbers", "Storytelling"]
    },
    {
      title: "Sr. KG",
      age: "5–6 Years",
      color: "linear-gradient(135deg, #f093fb, #f5576c)",
      points: ["Advanced Learning", "Writing", "Confidence Building"]
    }
  ];


  return (
    <section id ="programs">
      <div className="container">
        <h2>Our Programs</h2>

        <div className="grid grid-4">
          {programs.map((p, i) => (
            <div
              key={i}
              className="card"
              style={{
                background: p.color,
                color: "white",
                textAlign: "left"
              }}
            >
              <h3>{p.title}</h3>
              <p><b>{p.age}</b></p>

              <ul style={{ paddingLeft: "20px" }}>
                {p.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;