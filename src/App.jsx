import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Programs />
      <Features />
      <Gallery />
      <Contact />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#25D366",
          color: "white",
          padding: "15px",
          borderRadius: "50%",
          fontSize: "20px",
          textDecoration: "none",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}
      >
        💬
      </a>
    </>
  );
}

export default App;