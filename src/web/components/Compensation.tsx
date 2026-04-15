import { useEffect, useRef } from "react";

const levels = [
  { level: "Direct (Level 1)", rate: "20%", type: "Recurring", desc: "Your personally referred clients", example: "R179.80/client on Plus plan" },
  { level: "Level 2", rate: "10%", type: "Recurring", desc: "Clients referred by your direct recruits", example: "R89.90/client" },
  { level: "Level 3", rate: "5%", type: "Recurring", desc: "Third-level downline", example: "R44.95/client" },
  { level: "Level 4 & 5", rate: "3%", type: "Recurring", desc: "Levels 4 and 5 of your network", example: "R26.97/client" },
  { level: "Binary Bonus", rate: "10%", type: "Monthly Bonus", desc: "10% of weaker leg monthly volume", example: "Up to R5,000/month" },
  { level: "Rank Advancement", rate: "Once-off", type: "Cash Bonus", desc: "Bonus paid on each new rank achieved", example: "R500 – R50,000" },
];

const rankBonuses = [
  { rank: "Builder", bonus: "R500" }, { rank: "Leader", bonus: "R1,500" },
  { rank: "Manager", bonus: "R5,000" }, { rank: "Director", bonus: "R15,000" },
  { rank: "Executive", bonus: "R30,000" }, { rank: "Diamond Elite", bonus: "R50,000" },
];

const nodeStyle = (bg: string, color: string, isYou = false, size = "48px", fontSize = "14px") => ({
  width: size, height: size,
  background: isYou ? "linear-gradient(135deg, #118849, #15a85a)" : bg,
  border: isYou ? "none" : `1px solid ${bg}`,
  borderRadius: "4px",
  display: "flex", alignItems: "center", justifyContent: "center",
  fontFamily: "Space Mono, monospace",
  fontSize, fontWeight: "700", color,
  boxShadow: isYou ? "0 0 20px rgba(17,136,73,0.4)" : "none",
  position: "relative" as const,
});

const thStyle: React.CSSProperties = { padding: "14px 16px", textAlign: "left", fontFamily: "Space Mono, monospace", fontSize: "10px", letterSpacing: "1.5px", color: "#15a85a", textTransform: "uppercase" as const, fontWeight: "400" };
const tdStyle: React.CSSProperties = { padding: "14px 16px", verticalAlign: "top" };

export default function Compensation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.querySelectorAll(".comp-anim").forEach((el, i) => {
        setTimeout(() => { (el as HTMLElement).style.opacity = "1"; (el as HTMLElement).style.transform = "translateY(0)"; }, i * 100);
      });
    }), { threshold: 0.05 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="compensation" style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/network-bg.png)", backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.12) saturate(0.4) hue-rotate(180deg)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(15,50,107,0.97), rgba(25,41,67,0.96))" }} />

      <div ref={sectionRef} style={{ position: "relative", zIndex: 1, padding: "120px 24px" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #118849, transparent)" }} />

        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div className="comp-anim" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease", textAlign: "center", marginBottom: "80px" }}>
            <div style={{ fontFamily: "Space Mono, monospace", fontSize: "11px", letterSpacing: "3px", color: "#15a85a", textTransform: "uppercase", marginBottom: "16px" }}>BINARY COMPENSATION PLAN</div>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: "700", color: "#ffffff", lineHeight: "1.1", marginBottom: "20px" }}>
              How You<br /><span style={{ color: "#15a85a" }}>Get Paid</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "17px", maxWidth: "560px", margin: "0 auto", fontFamily: "DM Sans, sans-serif", lineHeight: "1.6" }}>
              A transparent binary system with 5 levels of recurring commissions, binary matching bonuses, and rank advancement rewards.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>
            {/* Binary Tree */}
            <div className="comp-anim" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease 0.1s" }}>
              <div style={{ background: "rgba(15,50,107,0.85)", backdropFilter: "blur(12px)", border: "1px solid rgba(17,136,73,0.3)", borderRadius: "6px", padding: "40px 32px" }}>
                <div style={{ fontFamily: "Space Mono, monospace", fontSize: "11px", color: "#15a85a", letterSpacing: "2px", marginBottom: "32px", textTransform: "uppercase" }}>Binary Tree Structure</div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={nodeStyle("#118849", "#ffffff", true)}>YOU</div>
                  <div style={{ display: "flex", gap: "80px", position: "relative" }}>
                    <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "1px", height: "30px", background: "#118849" }} />
                    <div style={{ position: "absolute", top: "30px", left: "25%", right: "25%", height: "1px", background: "#118849" }} />
                    <div style={{ width: "1px", height: "30px", background: "#118849", marginTop: "30px" }} />
                    <div style={{ width: "1px", height: "30px", background: "#118849", marginTop: "30px" }} />
                  </div>
                  <div style={{ display: "flex", gap: "40px" }}>
                    {["L1", "R1"].map((n) => (
                      <div key={n} style={{ textAlign: "center" }}>
                        <div style={nodeStyle("#15a85a", "#ffffff")}>{n}</div>
                        <div style={{ fontSize: "10px", color: "#15a85a", fontFamily: "Space Mono, monospace", marginTop: "4px" }}>20%</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: "0", width: "260px", position: "relative", height: "30px" }}>
                    {[...Array(3)].map((_, i) => <div key={i} style={{ position: "absolute", left: `${25 + i * 25}%`, width: "1px", height: "30px", background: "rgba(17,136,73,0.5)" }} />)}
                    <div style={{ position: "absolute", top: 0, left: "20%", width: "15%", height: "1px", background: "rgba(17,136,73,0.3)" }} />
                    <div style={{ position: "absolute", top: 0, left: "50%", width: "30%", height: "1px", background: "rgba(17,136,73,0.3)" }} />
                  </div>
                  <div style={{ display: "flex", gap: "12px" }}>
                    {["L2a", "L2b", "R2a", "R2b"].map((n) => (
                      <div key={n} style={{ textAlign: "center" }}>
                        <div style={nodeStyle("rgba(17,136,73,0.6)", "#ffffff", false, "40px", "12px")}>{n}</div>
                        <div style={{ fontSize: "9px", color: "rgba(21,168,90,0.7)", fontFamily: "Space Mono, monospace", marginTop: "2px" }}>10%</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: "12px", textAlign: "center" }}>
                    <div style={{ color: "rgba(17,136,73,0.5)", fontSize: "11px", fontFamily: "Space Mono, monospace", letterSpacing: "2px" }}>· · · Levels 3–5 (5% / 3% / 3%) · · ·</div>
                  </div>
                </div>
                <div style={{ marginTop: "32px", background: "rgba(17,136,73,0.08)", border: "1px solid rgba(17,136,73,0.25)", borderRadius: "4px", padding: "16px" }}>
                  <div style={{ fontSize: "11px", color: "#15a85a", fontFamily: "Space Mono, monospace", marginBottom: "8px" }}>BINARY BONUS FORMULA</div>
                  <div style={{ fontFamily: "Space Mono, monospace", fontSize: "13px", color: "#ffffff" }}>Weaker Leg Volume × 10% = Bonus</div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", fontFamily: "DM Sans, sans-serif", marginTop: "6px" }}>e.g. Left R30k, Right R20k → R20k × 10% = R2,000</div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div>
              <div className="comp-anim" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease 0.2s", background: "rgba(15,50,107,0.85)", backdropFilter: "blur(12px)", border: "1px solid rgba(17,136,73,0.2)", borderRadius: "6px", overflow: "hidden", marginBottom: "24px" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ background: "rgba(17,136,73,0.12)", borderBottom: "1px solid rgba(17,136,73,0.2)" }}>
                      <th style={thStyle}>Level</th><th style={thStyle}>Rate</th><th style={thStyle}>Type</th><th style={thStyle}>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    {levels.map((l, i) => (
                      <tr key={l.level} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)" }}>
                        <td style={tdStyle}>
                          <div style={{ color: "#ffffff", fontFamily: "DM Sans, sans-serif", fontSize: "13px", fontWeight: "600" }}>{l.level}</div>
                          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", marginTop: "2px" }}>{l.desc}</div>
                        </td>
                        <td style={{ ...tdStyle, textAlign: "center" }}>
                          <span style={{ fontFamily: "Space Mono, monospace", fontSize: "16px", fontWeight: "700", color: "#15a85a" }}>{l.rate}</span>
                        </td>
                        <td style={{ ...tdStyle, textAlign: "center" }}>
                          <span style={{ background: "rgba(17,136,73,0.12)", border: "1px solid rgba(17,136,73,0.3)", borderRadius: "4px", padding: "2px 8px", fontSize: "11px", color: "#15a85a", fontFamily: "Space Mono, monospace", whiteSpace: "nowrap" as const }}>{l.type}</span>
                        </td>
                        <td style={{ ...tdStyle, color: "rgba(255,255,255,0.5)", fontSize: "12px", fontFamily: "Space Mono, monospace" }}>{l.example}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="comp-anim" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease 0.3s", background: "rgba(15,50,107,0.85)", backdropFilter: "blur(12px)", border: "1px solid rgba(17,136,73,0.2)", borderRadius: "6px", padding: "28px" }}>
                <div style={{ fontFamily: "Space Mono, monospace", fontSize: "11px", color: "#15a85a", letterSpacing: "2px", marginBottom: "20px", textTransform: "uppercase" }}>Rank Advancement Bonuses</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
                  {rankBonuses.map((r) => (
                    <div key={r.rank} style={{ background: "rgba(17,136,73,0.08)", border: "1px solid rgba(17,136,73,0.2)", borderRadius: "4px", padding: "12px", textAlign: "center" }}>
                      <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", fontFamily: "DM Sans, sans-serif", marginBottom: "4px" }}>{r.rank}</div>
                      <div style={{ fontFamily: "Space Mono, monospace", fontSize: "16px", fontWeight: "700", color: "#15a85a" }}>{r.bonus}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
