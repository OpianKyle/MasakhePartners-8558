import { useEffect, useRef } from "react";

const steps = [
  { number: "01", title: "Register as a Partner", description: "Complete your distributor application. Choose between Affiliate, Reseller, or Master Reseller. Get your unique referral link and marketing kit instantly.", icon: "🎯", detail: "Free registration · Instant approval", image: "/images/partner-laptop.jpg" },
  { number: "02", title: "Promote Masakhe Plans", description: "Use your personalised dashboard, referral links, and marketing materials to introduce SMMEs to Masakhe's all-in-one platform. Products sell themselves.", icon: "📣", detail: "Plans from R599/month per SMME", image: "/images/smme-owner.jpg" },
  { number: "03", title: "Build Your Binary Network", description: "Place recruits on your left or right leg. Earn on both legs. The weaker leg volume drives your binary bonus — your upline helps fill your network.", icon: "🌳", detail: "Binary matching bonus monthly", image: "/images/boardroom.jpg" },
  { number: "04", title: "Earn Recurring Commissions", description: "Every month your referred SMMEs renew, you earn. Stack residual income as your network grows. Climb ranks to unlock higher commissions and bonuses.", icon: "💰", detail: "Paid on the 25th each month", image: "/images/earnings-visual.png" },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".anim-item").forEach((el, i) => {
            setTimeout(() => { (el as HTMLElement).style.opacity = "1"; (el as HTMLElement).style.transform = "translateY(0)"; }, i * 150);
          });
        }
      }),
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} style={{ background: "#0f326b", padding: "120px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #118849, transparent)" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="anim-item" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease", textAlign: "center", marginBottom: "80px" }}>
          <div style={{ fontFamily: "Space Mono, monospace", fontSize: "11px", letterSpacing: "3px", color: "#15a85a", textTransform: "uppercase", marginBottom: "16px" }}>HOW IT WORKS</div>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: "700", color: "#ffffff", lineHeight: "1.1", marginBottom: "20px" }}>
            Four Steps to<br /><span style={{ color: "#15a85a" }}>Financial Freedom</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "17px", maxWidth: "560px", margin: "0 auto", fontFamily: "DM Sans, sans-serif", lineHeight: "1.6" }}>
            No experience needed. No stock. No cold calling. Just a powerful product, a proven system, and the ambition to grow.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
          {steps.map((step, i) => (
            <div key={step.number} className="anim-item how-it-works-grid" style={{
              opacity: 0, transform: "translateY(30px)", transition: `all 0.6s ease ${i * 0.1}s`,
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center",
            }}>
              <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                <div style={{ position: "relative", borderRadius: "6px", overflow: "hidden", border: "1px solid rgba(17,136,73,0.3)" }}>
                  <img src={step.image} alt={step.title} style={{ width: "100%", height: "340px", objectFit: "cover", display: "block" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(15,50,107,0.3), transparent)" }} />
                  <div style={{
                    position: "absolute", top: "20px", left: "20px",
                    background: "rgba(15,50,107,0.9)", backdropFilter: "blur(8px)",
                    border: "1px solid rgba(17,136,73,0.5)", borderRadius: "4px",
                    padding: "6px 12px", fontFamily: "Space Mono, monospace", fontSize: "11px", color: "#15a85a", letterSpacing: "2px",
                  }}>STEP {step.number}</div>
                  <div style={{ position: "absolute", bottom: 0, right: 0, width: "28px", height: "28px", borderBottom: "2px solid #118849", borderRight: "2px solid #118849" }} />
                </div>
              </div>

              <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                <div style={{ fontSize: "44px", marginBottom: "16px" }}>{step.icon}</div>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "34px", fontWeight: "700", color: "#ffffff", marginBottom: "16px", lineHeight: "1.15" }}>{step.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "16px", lineHeight: "1.8", fontFamily: "DM Sans, sans-serif", marginBottom: "24px" }}>{step.description}</p>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "rgba(17,136,73,0.12)", border: "1px solid rgba(17,136,73,0.35)",
                  borderRadius: "4px", padding: "8px 16px",
                }}>
                  <span style={{ color: "#15a85a", fontSize: "13px", fontFamily: "Space Mono, monospace" }}>✓ {step.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
