import { useEffect, useRef } from "react";

const stats = [
  { value: "R12,500+", label: "Avg Monthly Earnings" },
  { value: "2,800+", label: "Active Distributors" },
  { value: "94%", label: "Renewal Rate" },
  { value: "R1.2M+", label: "Paid in Commissions" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll(".fade-item");
    items?.forEach((el, i) => setTimeout(() => {
      (el as HTMLElement).style.opacity = "1";
      (el as HTMLElement).style.transform = "translateY(0)";
    }, i * 180));
  }, []);

  const scrollToJoin = () => document.querySelector("#join")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section ref={ref} style={{
      minHeight: "100vh", position: "relative", overflow: "hidden",
      display: "flex", alignItems: "center",
    }}>
      {/* Joburg skyline bg */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url(/images/johannesburg-skyline.png)",
        backgroundSize: "cover", backgroundPosition: "center 40%",
        filter: "brightness(0.18) saturate(0.6)",
      }} />
      {/* Navy deep overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, rgba(15,50,107,0.96) 0%, rgba(25,41,67,0.88) 50%, rgba(15,50,107,0.95) 100%)",
      }} />
      {/* Subtle dot grid */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04, pointerEvents: "none" }}>
        <defs>
          <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="#118849" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
      {/* Green left accent line */}
      <div style={{
        position: "absolute", top: 0, left: "30%", width: "1px", height: "100%",
        background: "linear-gradient(to bottom, transparent, rgba(17,136,73,0.2), transparent)",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "120px 24px 80px", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "center" }} className="hero-grid">

          {/* Left text */}
          <div>
            <div className="fade-item" style={{
              opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease",
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(17,136,73,0.15)", border: "1px solid rgba(17,136,73,0.4)",
              borderRadius: "4px", padding: "6px 14px", marginBottom: "28px",
            }}>
              <span style={{ width: "6px", height: "6px", background: "#118849", borderRadius: "50%", display: "inline-block" }} />
              <span style={{ color: "#15a85a", fontSize: "11px", fontFamily: "Space Mono, monospace", letterSpacing: "2px", textTransform: "uppercase" }}>
                South Africa's #1 SMME Partner Network
              </span>
            </div>

            <h1 className="fade-item" style={{
              opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease",
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(52px, 6vw, 84px)", fontWeight: "700",
              lineHeight: "1.02", marginBottom: "28px", color: "#ffffff",
            }}>
              Build Wealth.<br />
              <span style={{
                background: "linear-gradient(90deg, #118849, #15a85a, #118849)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text", animation: "shimmer 4s linear infinite",
              }}>Empower SMMEs.</span>
            </h1>

            <p className="fade-item" style={{
              opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease",
              fontSize: "18px", color: "rgba(255,255,255,0.7)", lineHeight: "1.75",
              marginBottom: "44px", fontFamily: "DM Sans, sans-serif", maxWidth: "500px",
            }}>
              Become a Masakhe Partner and earn recurring commissions by introducing South African SMMEs to the all-in-one platform they need to thrive. Binary compensation. Real residual income.
            </p>

            <div className="fade-item" style={{
              opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease",
              display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "48px",
            }}>
              <button onClick={scrollToJoin} style={{
                padding: "16px 38px",
                background: "#118849", border: "none", color: "#ffffff",
                fontFamily: "DM Sans, sans-serif", fontWeight: "700",
                fontSize: "15px", borderRadius: "4px", cursor: "pointer",
                transition: "background 0.2s", letterSpacing: "0.3px",
              }}
                onMouseEnter={e => (e.currentTarget.style.background = "#15a85a")}
                onMouseLeave={e => (e.currentTarget.style.background = "#118849")}
              >Start Earning Today →</button>
              <button onClick={() => document.querySelector("#compensation")?.scrollIntoView({ behavior: "smooth" })} style={{
                padding: "16px 38px", background: "transparent",
                border: "1px solid rgba(255,255,255,0.3)", color: "#ffffff",
                fontFamily: "DM Sans, sans-serif", fontWeight: "600",
                fontSize: "15px", borderRadius: "4px", cursor: "pointer", transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(21,168,90,0.6)"; e.currentTarget.style.color = "#15a85a"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#ffffff"; }}
              >View Earnings Plan</button>
            </div>

            {/* Social proof */}
            <div className="fade-item" style={{
              opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease",
              display: "flex", alignItems: "center", gap: "16px",
            }}>
              <div style={{ display: "flex" }}>
                {["/images/testimonial-1.png", "/images/testimonial-2.png", "/images/testimonial-3.png", "/images/testimonial-4.png"].map((src, i) => (
                  <img key={i} src={src} alt="partner" style={{
                    width: "36px", height: "36px", borderRadius: "50%",
                    border: "2px solid #118849", objectFit: "cover",
                    marginLeft: i === 0 ? 0 : "-10px",
                  }} />
                ))}
              </div>
              <div>
                <div style={{ display: "flex", gap: "2px", marginBottom: "2px" }}>
                  {"★★★★★".split("").map((s, i) => <span key={i} style={{ color: "#15a85a", fontSize: "12px" }}>{s}</span>)}
                </div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", fontFamily: "DM Sans, sans-serif" }}>
                  Joined by <strong style={{ color: "#fff" }}>2,800+</strong> partners across SA
                </div>
              </div>
            </div>
          </div>

          {/* Right: photo + floating cards */}
          <div className="fade-item" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease", position: "relative" }}>
            <div style={{
              position: "relative", borderRadius: "6px", overflow: "hidden",
              border: "1px solid rgba(17,136,73,0.35)",
              boxShadow: "0 24px 80px rgba(15,50,107,0.5)",
            }}>
              <img src="/images/partner-woman.png" alt="Masakhe Partner" style={{
                width: "100%", height: "520px", objectFit: "cover", objectPosition: "top", display: "block",
              }} />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "220px",
                background: "linear-gradient(to top, rgba(15,50,107,0.95), transparent)",
              }} />
              <div style={{ position: "absolute", top: 0, left: 0, width: "32px", height: "32px", borderTop: "2px solid #118849", borderLeft: "2px solid #118849" }} />
              <div style={{ position: "absolute", top: 0, right: 0, width: "32px", height: "32px", borderTop: "2px solid #118849", borderRight: "2px solid #118849" }} />
            </div>

            {/* Earnings card */}
            <div style={{
              position: "absolute", bottom: "24px", left: "-24px",
              background: "rgba(15,50,107,0.95)", backdropFilter: "blur(16px)",
              border: "1px solid rgba(17,136,73,0.4)", borderRadius: "6px",
              padding: "18px 22px", minWidth: "210px",
            }}>
              <div style={{ fontSize: "10px", color: "#5e708d", fontFamily: "Space Mono, monospace", letterSpacing: "2px", marginBottom: "8px" }}>THIS MONTH</div>
              <div style={{ fontFamily: "Space Mono, monospace", fontSize: "28px", fontWeight: "700", color: "#15a85a" }}>R48,250</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", fontFamily: "DM Sans, sans-serif", marginTop: "4px" }}>Thandi M. · Diamond Elite</div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "8px" }}>
                <span style={{ color: "#15a85a", fontSize: "11px", fontFamily: "Space Mono, monospace" }}>▲ +14% vs last month</span>
              </div>
            </div>

            {/* Partners badge */}
            <div style={{
              position: "absolute", top: "16px", right: "-16px",
              background: "#118849", borderRadius: "6px",
              padding: "12px 16px", textAlign: "center",
              boxShadow: "0 8px 24px rgba(17,136,73,0.4)",
            }}>
              <div style={{ fontFamily: "Space Mono, monospace", fontSize: "20px", fontWeight: "700", color: "#ffffff" }}>2,800+</div>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.8)", fontFamily: "DM Sans, sans-serif", fontWeight: "600" }}>Active Partners</div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="fade-item" style={{
          opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease",
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
          marginTop: "80px",
          background: "rgba(15,50,107,0.7)", backdropFilter: "blur(12px)",
          border: "1px solid rgba(17,136,73,0.25)", borderRadius: "6px", overflow: "hidden",
        }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{
              padding: "24px", textAlign: "center",
              borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
            }}>
              <div style={{ fontFamily: "Space Mono, monospace", fontSize: "26px", fontWeight: "700", color: "#15a85a" }}>{s.value}</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", fontFamily: "DM Sans, sans-serif", marginTop: "4px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @media (max-width: 768px) { .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </section>
  );
}
