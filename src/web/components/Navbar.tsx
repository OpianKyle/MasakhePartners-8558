import { useState, useEffect } from "react";
import { useLocation } from "wouter";

const C = {
  navy: "#192943", navyDeep: "#0f326b", green: "#118849",
  greenLight: "#15a85a", white: "#ffffff", slate: "#5e708d",
  border: "rgba(255,255,255,0.1)",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [, navigate] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Products", href: "#products" },
    { label: "Earnings", href: "#compensation" },
    { label: "Ranks", href: "#ranks" },
    { label: "Leaderboard", href: "#leaderboard" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      transition: "all 0.3s ease",
      background: scrolled ? "rgba(15,50,107,0.97)" : "rgba(15,50,107,0.6)",
      backdropFilter: "blur(14px)",
      borderBottom: `1px solid ${scrolled ? "rgba(17,136,73,0.3)" : "rgba(255,255,255,0.08)"}`,
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px" }}>

          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "36px", height: "36px",
              background: "linear-gradient(135deg, #118849, #15a85a)",
              display: "flex", alignItems: "center", justifyContent: "center",
              borderRadius: "6px", fontSize: "16px", fontWeight: "700",
              color: C.white, fontFamily: "Cormorant Garamond, serif",
            }}>M</div>
            <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "22px", fontWeight: "700", color: C.white }}>
              Masakhe <span style={{ color: "#15a85a" }}>Partners</span>
            </span>
          </button>

          {/* Desktop */}
          <div style={{ display: "flex", alignItems: "center", gap: "28px" }} className="hidden-mobile">
            {navLinks.map((link) => (
              <button key={link.href} onClick={() => scrollTo(link.href)} style={{
                background: "none", border: "none", cursor: "pointer",
                color: "rgba(255,255,255,0.72)", fontSize: "14px", fontFamily: "DM Sans, sans-serif",
                fontWeight: "500", transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#15a85a")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.72)")}
              >{link.label}</button>
            ))}
            <button onClick={() => navigate("/login")} style={{
              padding: "8px 18px", border: "1px solid rgba(255,255,255,0.25)",
              background: "transparent", color: C.white, borderRadius: "4px",
              fontSize: "13px", fontFamily: "DM Sans, sans-serif", fontWeight: "600", cursor: "pointer", transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(21,168,90,0.7)"; e.currentTarget.style.color = "#15a85a"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = C.white; }}
            >Login</button>
            <button onClick={() => scrollTo("#join")} style={{
              padding: "9px 22px", background: "#118849", border: "none", color: C.white,
              borderRadius: "4px", fontSize: "13px", fontFamily: "DM Sans, sans-serif", fontWeight: "700", cursor: "pointer", transition: "background 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.background = "#15a85a")}
              onMouseLeave={e => (e.currentTarget.style.background = "#118849")}
            >Join Now</button>
          </div>

          {/* Mobile toggle */}
          <button className="show-mobile" onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#15a85a", fontSize: "24px" }}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: "#0f326b", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "16px 0 24px" }}>
            {navLinks.map((link) => (
              <button key={link.href} onClick={() => scrollTo(link.href)} style={{
                display: "block", width: "100%", textAlign: "left", padding: "12px 0",
                background: "none", border: "none", color: "rgba(255,255,255,0.8)",
                fontSize: "15px", fontFamily: "DM Sans, sans-serif", cursor: "pointer",
              }}>{link.label}</button>
            ))}
            <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
              <button onClick={() => { navigate("/login"); setMenuOpen(false); }} style={{
                flex: 1, padding: "10px", border: "1px solid rgba(255,255,255,0.2)",
                background: "transparent", color: C.white, borderRadius: "4px",
                fontSize: "14px", fontFamily: "DM Sans, sans-serif", cursor: "pointer",
              }}>Login</button>
              <button onClick={() => scrollTo("#join")} style={{
                flex: 1, padding: "10px", background: "#118849", border: "none", color: C.white,
                borderRadius: "4px", fontSize: "14px", fontFamily: "DM Sans, sans-serif", fontWeight: "700", cursor: "pointer",
              }}>Join Now</button>
            </div>
          </div>
        )}
      </div>
      <style>{`
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } .show-mobile { display: block !important; } }
        @media (min-width: 769px) { .show-mobile { display: none !important; } }
      `}</style>
    </nav>
  );
}
