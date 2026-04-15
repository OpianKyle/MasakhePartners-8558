import { useState } from "react";
import { useLocation } from "wouter";

export default function LoginPage() {
  const [, navigate] = useLocation();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    await new Promise((r) => setTimeout(r, 1200));
    // Demo: any credentials work
    if (form.email && form.password) {
      navigate("/dashboard");
    } else {
      setError("Please enter your credentials.");
    }
    setLoading(false);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#192943",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "24px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px", height: "600px",
        background: "radial-gradient(circle, rgba(17,136,73,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04, pointerEvents: "none" }}>
        <defs>
          <pattern id="grid2" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#118849" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid2)" />
      </svg>

      <div style={{ width: "100%", maxWidth: "460px", position: "relative" }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <button
            onClick={() => navigate("/")}
            style={{ background: "none", border: "none", cursor: "pointer", display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "12px" }}
          >
            <div style={{
              width: "56px", height: "56px",
              background: "linear-gradient(135deg, #118849, #15a85a)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "24px", fontWeight: "700", color: "#FFFFFF",
              fontFamily: "Cormorant Garamond, serif",
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}>M</div>
            <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "26px", fontWeight: "700", color: "#FFFFFF" }}>
              Masakhe <span style={{ color: "#15a85a" }}>Partners</span>
            </span>
          </button>
        </div>

        {/* Card */}
        <div style={{
          background: "#1e3454",
          border: "1px solid rgba(17,136,73,0.25)",
          borderRadius: "4px", padding: "48px 44px",
          position: "relative",
        }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "32px", height: "32px", borderTop: "2px solid #118849", borderLeft: "2px solid #118849" }} />
          <div style={{ position: "absolute", bottom: 0, right: 0, width: "32px", height: "32px", borderBottom: "2px solid #118849", borderRight: "2px solid #118849" }} />

          <div style={{ marginBottom: "32px" }}>
            <div style={{ fontFamily: "Space Mono, monospace", fontSize: "10px", color: "#15a85a", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "8px" }}>
              DISTRIBUTOR PORTAL
            </div>
            <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "34px", fontWeight: "700", color: "#FFFFFF", margin: 0 }}>
              Welcome Back
            </h1>
          </div>

          {error && (
            <div style={{
              background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)",
              borderRadius: "2px", padding: "12px 14px", marginBottom: "20px",
              color: "#ef4444", fontSize: "13px", fontFamily: "DM Sans, sans-serif",
            }}>{error}</div>
          )}

          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              { label: "Email Address", key: "email", type: "email", placeholder: "your@email.com" },
              { label: "Password", key: "password", type: "password", placeholder: "••••••••" },
            ].map((f) => (
              <div key={f.key}>
                <label style={{ display: "block", fontSize: "10px", color: "#15a85a", fontFamily: "Space Mono, monospace", letterSpacing: "1px", marginBottom: "8px", textTransform: "uppercase" }}>
                  {f.label}
                </label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  value={(form as any)[f.key]}
                  onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                  required
                  style={{
                    width: "100%", padding: "13px 14px",
                    background: "#192943",
                    border: "1px solid rgba(17,136,73,0.2)",
                    borderRadius: "2px", color: "#FFFFFF",
                    fontFamily: "DM Sans, sans-serif", fontSize: "15px",
                    outline: "none", boxSizing: "border-box",
                  }}
                  onFocus={e => e.target.style.borderColor = "rgba(17,136,73,0.7)"}
                  onBlur={e => e.target.style.borderColor = "rgba(17,136,73,0.2)"}
                />
              </div>
            ))}

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button type="button" style={{
                background: "none", border: "none", color: "#15a85a",
                fontSize: "13px", fontFamily: "DM Sans, sans-serif", cursor: "pointer",
              }}>Forgot password?</button>
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%", padding: "15px",
                background: loading ? "rgba(17,136,73,0.5)" : "linear-gradient(90deg, #118849, #15a85a, #118849)",
                backgroundSize: "200% auto",
                animation: loading ? "none" : "shimmer 3s linear infinite",
                border: "none", color: "#FFFFFF",
                fontFamily: "DM Sans, sans-serif", fontWeight: "700",
                fontSize: "15px", borderRadius: "2px", cursor: loading ? "wait" : "pointer",
              }}
            >{loading ? "Signing in..." : "Sign In to Dashboard →"}</button>
          </form>

          <div style={{
            marginTop: "28px", paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            textAlign: "center",
          }}>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", fontFamily: "DM Sans, sans-serif" }}>
              Not a partner yet?{" "}
            </span>
            <button
              onClick={() => { navigate("/"); setTimeout(() => document.querySelector("#join")?.scrollIntoView({ behavior: "smooth" }), 100); }}
              style={{
                background: "none", border: "none", color: "#15a85a",
                fontSize: "14px", fontFamily: "DM Sans, sans-serif",
                cursor: "pointer", fontWeight: "600",
              }}
            >Apply to join →</button>
          </div>
        </div>

        <p style={{ textAlign: "center", marginTop: "24px", color: "rgba(255,255,255,0.2)", fontSize: "11px", fontFamily: "DM Sans, sans-serif" }}>
          © 2026 Masakhe Business Solutions (Pty) Ltd
        </p>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
}
