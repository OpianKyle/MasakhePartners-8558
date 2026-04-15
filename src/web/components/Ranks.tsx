import { useEffect, useRef } from "react";

const ranks = [
  { rank: "Starter", code: "S1", requirements: { recruits: 0, mrrTarget: "—" }, perks: ["Referral dashboard access", "20% direct commissions", "Marketing materials"], advancement: "R0", color: "#5e708d", icon: "⬡" },
  { rank: "Builder", code: "B2", requirements: { recruits: 3, mrrTarget: "R1,797+" }, perks: ["All Starter perks", "Level 2 commissions (10%)", "R500 rank bonus", "Priority support"], advancement: "R500", color: "#6b8aad", icon: "◈" },
  { rank: "Leader", code: "L3", requirements: { recruits: 10, mrrTarget: "R5,990+" }, perks: ["Level 3 commissions (5%)", "R1,500 rank bonus", "Training access", "Co-op marketing fund"], advancement: "R1,500", color: "#5e9e7a", icon: "✦" },
  { rank: "Manager", code: "M4", requirements: { recruits: 25, mrrTarget: "R10,000+" }, perks: ["Level 4 commissions (3%)", "R5,000 rank bonus", "Dedicated account manager", "Monthly strategy call"], advancement: "R5,000", color: "#118849", icon: "❋" },
  { rank: "Director", code: "D5", requirements: { recruits: 50, mrrTarget: "R25,000+" }, perks: ["Level 5 commissions (3%)", "R15,000 rank bonus", "Custom sub-brand kit", "Revenue share pool"], advancement: "R15,000", color: "#0f7a42", icon: "⬟" },
  { rank: "Executive", code: "E6", requirements: { recruits: 100, mrrTarget: "R50,000+" }, perks: ["Max binary bonus cap lifted", "R30,000 rank bonus", "Equity consideration", "Elite events access"], advancement: "R30,000", color: "#0d6b3a", icon: "◆" },
  { rank: "Diamond Elite", code: "DE7", requirements: { recruits: 250, mrrTarget: "R100,000+" }, perks: ["R50,000 rank bonus", "Board advisory seat", "Profit sharing", "Lifetime Partner status"], advancement: "R50,000", color: "#15a85a", icon: "💎", featured: true },
];

export default function Ranks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.querySelectorAll(".rank-anim").forEach((el, i) => {
        setTimeout(() => { (el as HTMLElement).style.opacity = "1"; (el as HTMLElement).style.transform = "translateY(0)"; }, i * 80);
      });
    }), { threshold: 0.05 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="ranks" ref={sectionRef} style={{ background: "#192943", padding: "120px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="rank-anim" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease", textAlign: "center", marginBottom: "80px" }}>
          <div style={{ fontFamily: "Space Mono, monospace", fontSize: "11px", letterSpacing: "3px", color: "#15a85a", textTransform: "uppercase", marginBottom: "16px" }}>RANK STRUCTURE</div>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: "700", color: "#ffffff", lineHeight: "1.1", marginBottom: "20px" }}>
            Your Path to<br /><span style={{ color: "#15a85a" }}>Diamond Elite</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "17px", maxWidth: "560px", margin: "0 auto", fontFamily: "DM Sans, sans-serif", lineHeight: "1.6" }}>
            Seven ranks. Each one unlocks deeper commissions, higher bonuses, and greater recognition.
          </p>
        </div>

        {/* Progress bar */}
        <div className="rank-anim" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease 0.1s", display: "flex", alignItems: "center", marginBottom: "64px", overflowX: "auto", padding: "8px 0" }}>
          {ranks.map((r, i) => (
            <div key={r.rank} style={{ display: "flex", alignItems: "center", flex: "1", minWidth: "fit-content" }}>
              <div style={{ textAlign: "center", minWidth: "80px" }}>
                <div style={{ width: "40px", height: "40px", margin: "0 auto 6px", background: `rgba(17,136,73,0.15)`, border: `2px solid ${r.color}`, borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>{r.icon}</div>
                <div style={{ fontSize: "10px", color: r.color, fontFamily: "Space Mono, monospace" }}>{r.code}</div>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", fontFamily: "DM Sans, sans-serif" }}>{r.rank}</div>
              </div>
              {i < ranks.length - 1 && <div style={{ flex: 1, height: "1px", background: "rgba(17,136,73,0.3)", minWidth: "20px" }} />}
            </div>
          ))}
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
          {ranks.map((rank, i) => (
            <div key={rank.rank} className="rank-anim" style={{
              opacity: 0, transform: "translateY(30px)", transition: `all 0.6s ease ${i * 0.07}s`,
              background: (rank as any).featured ? "linear-gradient(135deg, #1a3a6b, #0f326b)" : "#1e3454",
              border: `1px solid ${(rank as any).featured ? "rgba(17,136,73,0.45)" : "rgba(255,255,255,0.06)"}`,
              borderTop: `3px solid ${rank.color}`,
              borderRadius: "6px", padding: "28px", position: "relative",
            }}>
              {(rank as any).featured && (
                <div style={{ position: "absolute", top: "-12px", right: "16px", background: "#118849", color: "#ffffff", fontSize: "10px", fontFamily: "Space Mono, monospace", fontWeight: "700", letterSpacing: "1px", padding: "3px 10px", borderRadius: "4px" }}>PEAK RANK</div>
              )}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "44px", height: "44px", background: `rgba(17,136,73,0.15)`, border: `1px solid ${rank.color}`, borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>{rank.icon}</div>
                <div>
                  <div style={{ fontFamily: "Space Mono, monospace", fontSize: "10px", color: rank.color, letterSpacing: "2px" }}>{rank.code}</div>
                  <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "22px", fontWeight: "700", color: "#ffffff" }}>{rank.rank}</div>
                </div>
              </div>

              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "4px", padding: "12px 14px", marginBottom: "16px" }}>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.35)", fontFamily: "Space Mono, monospace", letterSpacing: "1px", marginBottom: "8px" }}>REQUIREMENTS</div>
                <div style={{ display: "flex", gap: "20px" }}>
                  <div>
                    <div style={{ fontSize: "20px", fontWeight: "700", fontFamily: "Space Mono, monospace", color: rank.color }}>{rank.requirements.recruits}</div>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", fontFamily: "DM Sans, sans-serif" }}>Recruits</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "16px", fontWeight: "700", fontFamily: "Space Mono, monospace", color: rank.color }}>{rank.requirements.mrrTarget}</div>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", fontFamily: "DM Sans, sans-serif" }}>Network MRR</div>
                  </div>
                </div>
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px", fontSize: "13px", fontFamily: "DM Sans, sans-serif" }}>
                {rank.perks.map((p) => (
                  <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: "8px", padding: "5px 0", color: "rgba(255,255,255,0.65)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <span style={{ color: "#118849", fontSize: "10px", marginTop: "3px", flexShrink: 0 }}>✓</span>{p}
                  </li>
                ))}
              </ul>

              {rank.advancement !== "R0" && (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(17,136,73,0.1)", border: "1px solid rgba(17,136,73,0.25)", borderRadius: "4px", padding: "10px 14px" }}>
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", fontFamily: "DM Sans, sans-serif" }}>Rank Bonus</span>
                  <span style={{ fontFamily: "Space Mono, monospace", fontSize: "18px", fontWeight: "700", color: "#15a85a" }}>{rank.advancement}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
