import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".contact-anim").forEach((el, i) => {
            setTimeout(() => {
              (el as HTMLElement).style.opacity = "1";
              (el as HTMLElement).style.transform = "translateY(0)";
            }, i * 100);
          });
        }
      }),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" ref={sectionRef} style={{
      background: "#192943",
      padding: "120px 24px",
    }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: "1px",
        background: "linear-gradient(90deg, transparent, #118849, transparent)",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="contact-anim" style={{
          opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease",
          textAlign: "center", marginBottom: "72px",
        }}>
          <div style={{
            fontFamily: "Space Mono, monospace", fontSize: "11px",
            letterSpacing: "3px", color: "#15a85a", textTransform: "uppercase",
            marginBottom: "16px",
          }}>SUPPORT & ENQUIRIES</div>
          <h2 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: "700", color: "#FFFFFF",
            lineHeight: "1.1",
          }}>
            We're Here<br />
            <span style={{ color: "#15a85a" }}>To Help</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "56px", alignItems: "start" }}>
          {/* Left: contact info */}
          <div>
            {[
              {
                icon: "📧",
                label: "Partner Support",
                value: "partners@masakheportal.co.za",
                desc: "For commission, account, and technical queries",
              },
              {
                icon: "📱",
                label: "WhatsApp",
                value: "+27 60 000 0000",
                desc: "Mon–Fri 8am–6pm SAST",
              },
              {
                icon: "🌐",
                label: "Main Platform",
                value: "www.masakheportal.co.za",
                desc: "View the full product your clients will use",
              },
              {
                icon: "📍",
                label: "Registered Office",
                value: "Johannesburg, South Africa",
                desc: "B-BBEE Level 1 · POPIA Compliant",
              },
            ].map((item, i) => (
              <div
                key={item.label}
                className="contact-anim"
                style={{
                  opacity: 0, transform: "translateY(30px)",
                  transition: `all 0.6s ease ${i * 0.1}s`,
                  display: "flex", gap: "16px", padding: "24px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div style={{
                  width: "44px", height: "44px", flexShrink: 0,
                  background: "rgba(17,136,73,0.1)",
                  border: "1px solid rgba(17,136,73,0.25)",
                  borderRadius: "2px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "18px",
                }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: "11px", color: "#15a85a", fontFamily: "Space Mono, monospace", letterSpacing: "1px", marginBottom: "4px", textTransform: "uppercase" }}>
                    {item.label}
                  </div>
                  <div style={{ fontFamily: "DM Sans, sans-serif", fontWeight: "600", fontSize: "15px", color: "#FFFFFF", marginBottom: "2px" }}>
                    {item.value}
                  </div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", fontFamily: "DM Sans, sans-serif" }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}

            {/* FAQ quick links */}
            <div className="contact-anim" style={{
              opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease 0.4s",
              marginTop: "32px",
              background: "#1e3454",
              border: "1px solid rgba(17,136,73,0.15)",
              borderRadius: "2px", padding: "24px",
            }}>
              <div style={{ fontSize: "12px", color: "#15a85a", fontFamily: "Space Mono, monospace", letterSpacing: "2px", marginBottom: "16px" }}>
                QUICK FAQ
              </div>
              {[
                "When are commissions paid?",
                "How do I track my downline?",
                "Can I upgrade my package?",
                "Is there a minimum payout?",
              ].map((q) => (
                <div key={q} style={{
                  padding: "10px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "13px", fontFamily: "DM Sans, sans-serif",
                  display: "flex", alignItems: "center", gap: "8px",
                  cursor: "pointer",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#15a85a")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                >
                  <span style={{ color: "#15a85a", fontSize: "10px" }}>›</span>
                  {q}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-anim" style={{
            opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease 0.2s",
            background: "#1e3454",
            border: "1px solid rgba(17,136,73,0.2)",
            borderRadius: "4px", padding: "40px",
          }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "28px", color: "#FFFFFF", marginBottom: "12px" }}>Message Sent!</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: "DM Sans, sans-serif" }}>We'll get back to you within 24 hours.</p>
                <button onClick={() => { setSent(false); setForm({ name:"",email:"",subject:"",message:"" }); }} style={{
                  marginTop: "24px", padding: "10px 24px",
                  background: "transparent", border: "1px solid rgba(17,136,73,0.4)",
                  color: "#15a85a", borderRadius: "2px", cursor: "pointer",
                  fontFamily: "DM Sans, sans-serif", fontSize: "14px",
                }}>Send another</button>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: "28px" }}>
                  <div style={{ fontFamily: "Space Mono, monospace", fontSize: "11px", color: "#15a85a", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>GET IN TOUCH</div>
                  <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "26px", fontWeight: "700", color: "#FFFFFF" }}>Send a Message</div>
                </div>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  {[
                    { label: "Full Name", key: "name", type: "text", placeholder: "Your full name" },
                    { label: "Email", key: "email", type: "email", placeholder: "your@email.com" },
                    { label: "Subject", key: "subject", type: "text", placeholder: "How can we help?" },
                  ].map((f) => (
                    <div key={f.key}>
                      <label style={{ display: "block", fontSize: "10px", color: "#15a85a", fontFamily: "Space Mono, monospace", letterSpacing: "1px", marginBottom: "6px", textTransform: "uppercase" }}>
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        value={(form as any)[f.key]}
                        onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                        required
                        style={{
                          width: "100%", padding: "11px 13px",
                          background: "#192943",
                          border: "1px solid rgba(17,136,73,0.2)",
                          borderRadius: "2px", color: "#FFFFFF",
                          fontFamily: "DM Sans, sans-serif", fontSize: "14px",
                          outline: "none", boxSizing: "border-box",
                        }}
                        onFocus={e => e.target.style.borderColor = "rgba(17,136,73,0.7)"}
                        onBlur={e => e.target.style.borderColor = "rgba(17,136,73,0.2)"}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: "block", fontSize: "10px", color: "#15a85a", fontFamily: "Space Mono, monospace", letterSpacing: "1px", marginBottom: "6px", textTransform: "uppercase" }}>
                      Message
                    </label>
                    <textarea
                      placeholder="Tell us more..."
                      value={form.message}
                      onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                      required
                      rows={5}
                      style={{
                        width: "100%", padding: "11px 13px",
                        background: "#192943",
                        border: "1px solid rgba(17,136,73,0.2)",
                        borderRadius: "2px", color: "#FFFFFF",
                        fontFamily: "DM Sans, sans-serif", fontSize: "14px",
                        outline: "none", resize: "vertical", boxSizing: "border-box",
                      }}
                      onFocus={e => e.target.style.borderColor = "rgba(17,136,73,0.7)"}
                      onBlur={e => e.target.style.borderColor = "rgba(17,136,73,0.2)"}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      padding: "14px",
                      background: loading ? "rgba(17,136,73,0.5)" : "linear-gradient(90deg, #118849, #15a85a)",
                      border: "none", color: "#FFFFFF",
                      fontFamily: "DM Sans, sans-serif", fontWeight: "700",
                      fontSize: "14px", borderRadius: "2px", cursor: loading ? "wait" : "pointer",
                    }}
                  >{loading ? "Sending..." : "Send Message →"}</button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
