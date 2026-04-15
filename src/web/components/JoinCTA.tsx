import { useEffect, useRef, useState } from "react";

const packages = [
  {
    name: "Affiliate",
    price: "Free",
    priceNote: "No upfront cost",
    description: "Start earning referral commissions immediately with zero investment.",
    features: [
      "Unique referral link",
      "20% direct commissions",
      "Basic marketing materials",
      "Partner dashboard access",
    ],
    cta: "Join Free",
    color: "#5e708d",
  },
  {
    name: "Reseller",
    price: "R999",
    priceNote: "Once-off setup",
    description: "White-label capability. Sell Masakhe under your own brand identity.",
    features: [
      "Everything in Affiliate",
      "White-label branding kit",
      "Custom sub-domain",
      "Level 2-3 commissions",
      "Dedicated support line",
      "Client management portal",
    ],
    cta: "Become a Reseller",
    color: "#118849",
    featured: true,
  },
  {
    name: "Master Reseller",
    price: "R4,999",
    priceNote: "Once-off setup",
    description: "Recruit your own resellers. Earn overrides on your entire sub-network.",
    features: [
      "Everything in Reseller",
      "Recruit & manage resellers",
      "All 5 commission levels",
      "Binary bonus unlocked",
      "Revenue share pool",
      "Co-branded marketing fund",
    ],
    cta: "Go Master Reseller",
    color: "#15a85a",
  },
];

export default function JoinCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", city: "", package: "Reseller" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".join-anim").forEach((el, i) => {
            setTimeout(() => {
              (el as HTMLElement).style.opacity = "1";
              (el as HTMLElement).style.transform = "translateY(0)";
            }, i * 100);
          });
        }
      }),
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="join" ref={sectionRef} style={{
      background: "linear-gradient(135deg, #0f326b, #192943)",
      padding: "120px 24px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse at 50% 0%, rgba(17,136,73,0.1) 0%, transparent 60%)",
      }} />
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: "1px",
        background: "linear-gradient(90deg, transparent, #118849, transparent)",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="join-anim" style={{
          opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease",
          textAlign: "center", marginBottom: "80px",
        }}>
          <div style={{
            fontFamily: "Space Mono, monospace", fontSize: "11px",
            letterSpacing: "3px", color: "#15a85a", textTransform: "uppercase",
            marginBottom: "16px",
          }}>START YOUR JOURNEY</div>
          <h2 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: "700", color: "#FFFFFF",
            lineHeight: "1.05", marginBottom: "20px",
          }}>
            Choose Your<br />
            <span style={{ color: "#15a85a" }}>Partner Package</span>
          </h2>
          <p style={{
            color: "rgba(255,255,255,0.55)", fontSize: "17px",
            maxWidth: "500px", margin: "0 auto",
            fontFamily: "DM Sans, sans-serif", lineHeight: "1.6",
          }}>
            Pick the package that matches your ambition. Upgrade anytime as your network grows.
          </p>
        </div>

        {/* Packages */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "80px" }}>
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className="join-anim"
              style={{
                opacity: 0, transform: "translateY(30px)",
                background: pkg.featured ? "linear-gradient(135deg, #1e3454, #192943)" : "#192943",
                border: `1px solid ${pkg.featured ? "rgba(17,136,73,0.5)" : "rgba(255,255,255,0.07)"}`,
                borderTop: `3px solid ${pkg.color}`,
                borderRadius: "4px", padding: "36px 28px",
                position: "relative",
                cursor: "pointer",
                transition: `all 0.6s ease ${i * 0.1}s`,
              }}
              onClick={() => setFormData((f) => ({ ...f, package: pkg.name }))}
            >
              {pkg.featured && (
                <div style={{
                  position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)",
                  background: "linear-gradient(90deg, #118849, #15a85a)",
                  color: "#FFFFFF", fontSize: "10px", fontFamily: "Space Mono, monospace",
                  fontWeight: "700", letterSpacing: "1px", padding: "3px 12px",
                  borderRadius: "2px", whiteSpace: "nowrap",
                }}>⭐ RECOMMENDED</div>
              )}

              <div style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "28px", fontWeight: "700",
                color: "#FFFFFF", marginBottom: "8px",
              }}>{pkg.name}</div>

              <div style={{ marginBottom: "12px" }}>
                <span style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "36px", fontWeight: "700", color: pkg.color,
                }}>{pkg.price}</span>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", fontFamily: "DM Sans, sans-serif", marginLeft: "8px" }}>
                  {pkg.priceNote}
                </span>
              </div>

              <p style={{
                color: "rgba(255,255,255,0.55)", fontSize: "14px",
                fontFamily: "DM Sans, sans-serif", lineHeight: "1.6",
                marginBottom: "24px",
              }}>{pkg.description}</p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px" }}>
                {pkg.features.map((f) => (
                  <li key={f} style={{
                    display: "flex", alignItems: "center", gap: "8px",
                    padding: "7px 0", color: "rgba(255,255,255,0.7)",
                    fontSize: "13px", fontFamily: "DM Sans, sans-serif",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}>
                    <span style={{ color: pkg.color, fontSize: "10px" }}>◆</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://masakheportal.co.za/register"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: "block", width: "100%", padding: "13px",
                  background: pkg.featured
                    ? "linear-gradient(90deg, #118849, #15a85a)"
                    : "transparent",
                  border: `1px solid ${pkg.featured ? "transparent" : `rgba(${pkg.color === "#5e708d" ? "94,112,141" : "17,136,73"},0.4)`}`,
                  color: pkg.featured ? "#FFFFFF" : pkg.color,
                  fontFamily: "DM Sans, sans-serif", fontWeight: "700",
                  fontSize: "14px", borderRadius: "2px", cursor: "pointer",
                  letterSpacing: "0.5px", transition: "all 0.2s",
                  textDecoration: "none", textAlign: "center", boxSizing: "border-box",
                }}
              >{pkg.cta}</a>
            </div>
          ))}
        </div>

        {/* Registration Form */}
        <div id="join-form" className="join-anim" style={{
          opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease 0.3s",
          maxWidth: "680px", margin: "0 auto",
          background: "#1e3454",
          border: "1px solid rgba(17,136,73,0.25)",
          borderRadius: "4px", padding: "56px 48px",
          position: "relative",
        }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "40px", height: "40px", borderTop: "2px solid #118849", borderLeft: "2px solid #118849" }} />
          <div style={{ position: "absolute", bottom: 0, right: 0, width: "40px", height: "40px", borderBottom: "2px solid #118849", borderRight: "2px solid #118849" }} />

          {submitted ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontSize: "64px", marginBottom: "24px" }}>🎉</div>
              <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "36px", fontWeight: "700", color: "#FFFFFF", marginBottom: "16px" }}>
                Application Received!
              </h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontFamily: "DM Sans, sans-serif", lineHeight: "1.6", marginBottom: "24px" }}>
                Welcome to Masakhe Partners! A member of our team will contact you within <strong style={{ color: "#15a85a" }}>24 hours</strong> to activate your account and get you started.
              </p>
              <div style={{
                background: "rgba(17,136,73,0.08)", border: "1px solid rgba(17,136,73,0.2)",
                borderRadius: "2px", padding: "16px",
                fontFamily: "Space Mono, monospace", fontSize: "13px", color: "#15a85a",
              }}>
                Application ID: MP-{Math.random().toString(36).substr(2, 8).toUpperCase()}
              </div>
            </div>
          ) : (
            <>
              <div style={{ textAlign: "center", marginBottom: "36px" }}>
                <div style={{ fontFamily: "Space Mono, monospace", fontSize: "11px", color: "#15a85a", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "8px" }}>
                  PARTNER APPLICATION
                </div>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "36px", fontWeight: "700", color: "#FFFFFF" }}>
                  Apply to Join
                </h3>
              </div>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  {[{ label: "Full Name", key: "name", placeholder: "e.g. Thandi Mokoena", type: "text" },
                    { label: "Email Address", key: "email", placeholder: "your@email.com", type: "email" },
                    { label: "Phone Number", key: "phone", placeholder: "+27 82 000 0000", type: "tel" },
                    { label: "City / Town", key: "city", placeholder: "e.g. Johannesburg", type: "text" }
                  ].map((field) => (
                    <div key={field.key}>
                      <label style={{ display: "block", fontSize: "11px", color: "#15a85a", fontFamily: "Space Mono, monospace", letterSpacing: "1px", marginBottom: "8px", textTransform: "uppercase" }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={(formData as any)[field.key]}
                        onChange={(e) => setFormData((f) => ({ ...f, [field.key]: e.target.value }))}
                        required
                        style={{
                          width: "100%", padding: "12px 14px",
                          background: "#192943",
                          border: "1px solid rgba(17,136,73,0.25)",
                          borderRadius: "2px", color: "#FFFFFF",
                          fontFamily: "DM Sans, sans-serif", fontSize: "14px",
                          outline: "none", boxSizing: "border-box",
                        }}
                        onFocus={e => e.target.style.borderColor = "rgba(17,136,73,0.7)"}
                        onBlur={e => e.target.style.borderColor = "rgba(17,136,73,0.25)"}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "11px", color: "#15a85a", fontFamily: "Space Mono, monospace", letterSpacing: "1px", marginBottom: "8px", textTransform: "uppercase" }}>
                    Partner Package
                  </label>
                  <select
                    value={formData.package}
                    onChange={(e) => setFormData((f) => ({ ...f, package: e.target.value }))}
                    style={{
                      width: "100%", padding: "12px 14px",
                      background: "#192943",
                      border: "1px solid rgba(17,136,73,0.25)",
                      borderRadius: "2px", color: "#FFFFFF",
                      fontFamily: "DM Sans, sans-serif", fontSize: "14px",
                      outline: "none", cursor: "pointer",
                    }}
                  >
                    {packages.map((p) => <option key={p.name} value={p.name}>{p.name} — {p.price}</option>)}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%", padding: "16px",
                    background: loading ? "rgba(17,136,73,0.5)" : "linear-gradient(90deg, #118849, #15a85a, #118849)",
                    backgroundSize: "200% auto",
                    animation: loading ? "none" : "shimmer 3s linear infinite",
                    border: "none", color: "#FFFFFF",
                    fontFamily: "DM Sans, sans-serif", fontWeight: "700",
                    fontSize: "15px", borderRadius: "2px", cursor: loading ? "wait" : "pointer",
                    letterSpacing: "0.5px", marginTop: "8px",
                    transition: "opacity 0.2s",
                  }}
                >
                  {loading ? "Submitting..." : "Submit Application →"}
                </button>

                <p style={{ textAlign: "center", color: "rgba(255,255,255,0.35)", fontSize: "12px", fontFamily: "DM Sans, sans-serif", margin: 0 }}>
                  By applying you agree to our Partner Terms & Conditions. No spam — ever.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
