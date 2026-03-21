function Programs() {
  const programs = ["Play Group", "Nursery", "Jr. KG", "Sr. KG"];

  return (
    <section>
      <div className="container">
        <h2>Our Programs</h2>

        <div className="grid grid-4">
          {programs.map((p, i) => (
            <div key={i} className="card" style={{
              background: "linear-gradient(135deg, #6BCB77, #4D96FF)",
              color: "white"
            }}>
              <h3>{p}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;