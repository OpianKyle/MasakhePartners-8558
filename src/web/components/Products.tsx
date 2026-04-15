import { useEffect, useRef } from "react";

const products = [
  {
    plan: "Enterprise", price: "R599", commission: "R119.80", commissionPct: "20%", period: "/month",
    tag: "Entry Tier", color: "#5e708d", featured: false,
    features: ["AI Website Builder", "Social Media Hub", "Financial Tracking", "Overview Dashboard", "Basic Support"],
  },
  {
    plan: "Enterprise Plus", price: "R899", commission: "R179.80", commissionPct: "20%", period: "/month",
    tag: "Most Popular", color: "#118849", featured: true,
    features: ["Everything in Enterprise", "Invoicing & Quotes", "Client Management", "Payroll Management", "Priority Support"],
  },
  {
    plan: "Enterprise Premium", price: "R1,499", commission: "R299.80", commissionPct: "20%", period: "/month",
    tag: "Top Earner", color: "#15a85a", featured: false,
    features: ["Everything in Plus", "Unlimited Invoices", "Advanced Payroll", "Premium Support", "Dedicated Account Manager"],
  },
];

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.querySelectorAll(".prod-anim").forEach((el, i) => {
        setTimeout(() => { (el as HTMLElement).style.opacity = "1"; (el as HTMLElement).style.transform = "translateY(0)"; }, i * 150);
      });
    }), { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" ref={sectionRef} style={{ background: "#192943", padding: "120px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="prod-anim" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease", textAlign: "center", marginBottom: "80px" }}>
          <div style={{ fontFamily: "Space Mono, monospace", fontSize: "11px", letterSpacing: "3px", color: "#15a85a", textTransform: "uppercase", marginBottom: "16px" }}>WHAT YOU'RE SELLING</div>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: "700", color: "#ffffff", lineHeight: "1.1", marginBottom: "20px" }}>
            Products That<br /><span style={{ color: "#15a85a" }}>Sell Themselves</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "17px", maxWidth: "560px", margin: "0 auto", fontFamily: "DM Sans, sans-serif", lineHeight: "1.6" }}>
            Every South African SMME needs this. You earn 20% recurring commission on every active subscription you refer — every single month.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          {products.map((product, i) => (
            <div key={product.plan} className="prod-anim" style={{
              opacity: 0, transform: "translateY(30px)", transition: `all 0.6s ease ${i * 0.12}s`,
              background: product.featured ? "linear-gradient(135deg, #1a3a6b, #0f326b)" : "#1e3454",
              border: `1px solid ${product.featured ? "rgba(17,136,73,0.5)" : "rgba(255,255,255,0.07)"}`,
              borderTop: `3px solid ${product.color}`,
              borderRadius: "6px", padding: "40px 32px", position: "relative",
            }}>
              {product.featured && (
                <div style={{
                  position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)",
                  background: "#118849", color: "#ffffff", fontSize: "10px",
                  fontFamily: "Space Mono, monospace", fontWeight: "700", letterSpacing: "2px",
                  padding: "4px 14px", borderRadius: "4px", whiteSpace: "nowrap",
                }}>⭐ HIGHEST EARNER</div>
              )}
              <div style={{
                display: "inline-block", background: `rgba(${product.featured ? "17,136,73" : "255,255,255"},0.1)`,
                border: `1px solid rgba(${product.featured ? "17,136,73" : "255,255,255"},0.2)`,
                borderRadius: "4px", padding: "4px 10px",
                color: product.featured ? "#15a85a" : "rgba(255,255,255,0.5)",
                fontSize: "10px", fontFamily: "Space Mono, monospace", letterSpacing: "1px", marginBottom: "20px",
              }}>{product.tag}</div>

              <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "28px", fontWeight: "700", color: "#ffffff", marginBottom: "8px" }}>{product.plan}</h3>

              <div style={{ marginBottom: "24px" }}>
                <span style={{ fontFamily: "Space Mono, monospace", fontSize: "42px", fontWeight: "700", color: product.color }}>{product.price}</span>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", fontFamily: "DM Sans, sans-serif" }}>{product.period}</span>
              </div>

              <div style={{ background: "rgba(17,136,73,0.1)", border: "1px solid rgba(17,136,73,0.3)", borderRadius: "4px", padding: "14px 16px", marginBottom: "24px" }}>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)", fontFamily: "DM Sans, sans-serif", marginBottom: "4px" }}>YOUR MONTHLY COMMISSION</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                  <span style={{ fontFamily: "Space Mono, monospace", fontSize: "22px", fontWeight: "700", color: "#15a85a" }}>{product.commission}</span>
                  <span style={{ color: "#15a85a", fontSize: "13px" }}>({product.commissionPct} recurring)</span>
                </div>
              </div>

              <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "24px" }} />
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
                {product.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", color: "rgba(255,255,255,0.72)", fontSize: "14px", fontFamily: "DM Sans, sans-serif", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <span style={{ color: "#118849", fontSize: "12px" }}>✓</span>{f}
                  </li>
                ))}
              </ul>

              <button onClick={() => document.querySelector("#join")?.scrollIntoView({ behavior: "smooth" })} style={{
                width: "100%", padding: "14px",
                background: product.featured ? "#118849" : "transparent",
                border: `1px solid ${product.featured ? "transparent" : "rgba(17,136,73,0.4)"}`,
                color: "#ffffff", fontFamily: "DM Sans, sans-serif", fontWeight: "700",
                fontSize: "14px", borderRadius: "4px", cursor: "pointer", transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "#15a85a"; e.currentTarget.style.border = "1px solid transparent"; }}
                onMouseLeave={e => { e.currentTarget.style.background = product.featured ? "#118849" : "transparent"; e.currentTarget.style.border = `1px solid ${product.featured ? "transparent" : "rgba(17,136,73,0.4)"}`; }}
              >Start Selling This Plan</button>
            </div>
          ))}
        </div>

        <div className="prod-anim" style={{
          opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease 0.4s",
          textAlign: "center", marginTop: "48px", padding: "24px",
          background: "#1e3454", border: "1px solid rgba(17,136,73,0.2)", borderRadius: "6px",
        }}>
          <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: "DM Sans, sans-serif", fontSize: "14px", margin: 0 }}>
            <span style={{ color: "#15a85a" }}>💡 Pro Tip:</span> A distributor with just 20 active Enterprise Plus clients earns <strong style={{ color: "#ffffff" }}>R3,596/month</strong> in direct commissions alone — before binary bonuses or downline earnings.
          </p>
        </div>
      </div>
    </section>
  );
}
