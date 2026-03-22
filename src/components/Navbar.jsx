import { useState, useEffect } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "features", "programs", "gallery", "contact"];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 100;
          const height = section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < top + height) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <h3 className="logo">Guru Global School</h3>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* Links */}
      <div className={`nav-links ${open ? "active" : ""}`}>
        <a href="#home" className={active === "home" ? "active-link" : ""} onClick={() => setOpen(false)}>Home</a>
        <a href="#programs" className={active === "programs" ? "active-link" : ""} onClick={() => setOpen(false)}>Programs</a>
        <a href="#features" className={active === "features" ? "active-link" : ""} onClick={() => setOpen(false)}>Features</a>
        <a href="#gallery" className={active === "gallery" ? "active-link" : ""} onClick={() => setOpen(false)}>Gallery</a>
        <a href="#contact" className={active === "contact" ? "active-link" : ""} onClick={() => setOpen(false)}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;