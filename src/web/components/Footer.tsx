export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{
      background: "#0f326b",
      borderTop: "1px solid rgba(17,136,73,0.2)",
      padding: "80px 24px 40px",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px", marginBottom: "64px" }}>
          {/* Brand */}
          <div className="footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <div style={{
                width: "36px", height: "36px",
                background: "linear-gradient(135deg, #118849, #15a85a)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "16px", fontWeight: "700", color: "#FFFFFF",
                fontFamily: "Cormorant Garamond, serif",
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}>M</div>
              <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "20px", fontWeight: "700", color: "#FFFFFF" }}>
                Masakhe <span style={{ color: "#15a85a" }}>Partners</span>
              </span>
            </div>
            <p style={{
              color: "rgba(255,255,255,0.45)", fontSize: "14px",
              fontFamily: "DM Sans, sans-serif", lineHeight: "1.7",
              maxWidth: "300px", marginBottom: "24px",
            }}>
              "Let us build" — Empowering South African distributors to build wealth by growing the Masakhe SMME network.
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {["B-BBEE Level 1", "POPIA Compliant", "South Africa"].map((tag) => (
                <span key={tag} style={{
                  background: "rgba(17,136,73,0.1)",
                  border: "1px solid rgba(17,136,73,0.25)",
                  borderRadius: "2px", padding: "3px 10px",
                  fontSize: "10px", color: "rgba(255,255,255,0.5)",
                  fontFamily: "Space Mono, monospace",
                }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <div style={{ fontSize: "11px", color: "#15a85a", fontFamily: "Space Mono, monospace", letterSpacing: "2px", marginBottom: "20px", textTransform: "uppercase" }}>
              Opportunity
            </div>
            {[
              { label: "How It Works", id: "#how-it-works" },
              { label: "Products", id: "#products" },
              { label: "Compensation Plan", id: "#compensation" },
              { label: "Rank Structure", id: "#ranks" },
              { label: "Leaderboard", id: "#leaderboard" },
            ].map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)} style={{
                display: "block", background: "none", border: "none", cursor: "pointer",
                color: "rgba(255,255,255,0.5)", fontSize: "13px",
                fontFamily: "DM Sans, sans-serif", padding: "5px 0",
                textAlign: "left",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#15a85a")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >{l.label}</button>
            ))}
          </div>

          {/* Account */}
          <div>
            <div style={{ fontSize: "11px", color: "#15a85a", fontFamily: "Space Mono, monospace", letterSpacing: "2px", marginBottom: "20px", textTransform: "uppercase" }}>
              Account
            </div>
            {[
              { label: "Partner Login", href: "/login" },
              { label: "Apply Now", id: "#join" },
              { label: "Dashboard", href: "/dashboard" },
              { label: "Support", id: "#contact" },
            ].map((l) => (
              <button key={l.label} onClick={() => l.id ? scrollTo(l.id) : window.location.href = (l as any).href} style={{
                display: "block", background: "none", border: "none", cursor: "pointer",
                color: "rgba(255,255,255,0.5)", fontSize: "13px",
                fontFamily: "DM Sans, sans-serif", padding: "5px 0",
                textAlign: "left", transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#15a85a")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >{l.label}</button>
            ))}
          </div>

          {/* Legal */}
          <div>
            <div style={{ fontSize: "11px", color: "#15a85a", fontFamily: "Space Mono, monospace", letterSpacing: "2px", marginBottom: "20px", textTransform: "uppercase" }}>
              Legal
            </div>
            {["Privacy Policy", "Terms of Service", "Partner Agreement", "Income Disclosure"].map((l) => (
              <button key={l} style={{
                display: "block", background: "none", border: "none", cursor: "pointer",
                color: "rgba(255,255,255,0.5)", fontSize: "13px",
                fontFamily: "DM Sans, sans-serif", padding: "5px 0",
                textAlign: "left", transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#15a85a")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >{l}</button>
            ))}
          </div>
        </div>

        <div style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(17,136,73,0.3), transparent)",
          marginBottom: "32px",
        }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "12px", fontFamily: "DM Sans, sans-serif", margin: 0 }}>
            © 2026 Masakhe Business Solutions (Pty) Ltd. All rights reserved. Registered in South Africa.
          </p>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "11px", fontFamily: "DM Sans, sans-serif", margin: 0 }}>
            Income results are not guaranteed. This is a business opportunity — your earnings depend on your effort and network.
          </p>
        </div>
      </div>
    </footer>
  );
}
