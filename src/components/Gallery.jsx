import { useState, useEffect, useRef } from "react";

import img1 from "../assets/GGS_1.jpeg";
import img2 from "../assets/GGS_2.jpeg";
import img3 from "../assets/GGS_3.jpeg";
import img4 from "../assets/GGS_4.jpeg";
import img5 from "../assets/GGS_5.jpeg";
import img6 from "../assets/GGS_6.jpeg";
import img7 from "../assets/GGS_7.jpeg";
import img8 from "../assets/GGS_8.jpeg";
import img9 from "../assets/GGS_9.jpeg";

function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  const [index, setIndex] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // ✅ Auto slide (fixed)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev < images.length - 3 ? prev + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const next = () => {
    if (index < images.length - 3) {
      setIndex(index + 1);
    } else {
      setIndex(0); // loop
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  // ✅ Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      next(); // swipe left
    } else if (distance < -50) {
      prev(); // swipe right
    }
  };

  return (
    <section>
      <div className="container">
        <h2>Gallery 📸</h2>

        {/* ✅ Apply swipe here (IMPORTANT) */}
        <div
          className="slider-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="slider"
            style={{
              transform: `translateX(-${index * (100 / 3)}%)`,
            }}
          >
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="school"
                className="slide-img"
              />
            ))}
          </div>
        </div>

        {/* Controls */}
        <div style={{ marginTop: "20px" }}>
          <button onClick={prev} className="btn">⬅ Prev</button>
          <button onClick={next} className="btn" style={{ marginLeft: "10px" }}>
            Next ➡
          </button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;