function Gallery() {
  const images = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300"
  ];

  return (
    <section>
      <div className="container">
        <h2>Gallery</h2>

        <div className="grid grid-3">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="school"
              style={{
                width: "100%",
                borderRadius: "15px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;