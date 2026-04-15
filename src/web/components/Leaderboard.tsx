import { useEffect, useRef } from "react";

const topEarners = [
  { rank: 1, name: "Thandi M.", location: "Johannesburg, GP", tier: "Diamond Elite", earnings: "R48,250", clients: 312, growth: "+14%", badge: "💎", image: "/images/testimonial-1.png" },
  { rank: 2, name: "Sipho K.", location: "Cape Town, WC", tier: "Executive", earnings: "R31,800", clients: 198, growth: "+8%", badge: "⭐", image: "/images/testimonial-2.png" },
  { rank: 3, name: "Zanele D.", location: "Durban, KZN", tier: "Executive", earnings: "R28,400", clients: 176, growth: "+21%", badge: "🔥", image: "/images/testimonial-3.png" },
  { rank: 4, name: "Nkosi B.", location: "Pretoria, GP", tier: "Director", earnings: "R19,200", clients: 124, growth: "+5%", badge: "◆", image: "/images/testimonial-4.png" },
  { rank: 5, name: "Ayanda P.", location: "Port Elizabeth, EC", tier: "Director", earnings: "R17,550", clients: 110, growth: "+18%", badge: "◆" },
  { rank: 6, name: "Lindiwe T.", location: "Bloemfontein, FS", tier: "Manager", earnings: "R12,400", clients: 78, growth: "+32%", badge: "✦" },
  { rank: 7, name: "Mandla S.", location: "East London, EC", tier: "Manager", earnings: "R10,900", clients: 68, growth: "+11%", badge: "✦" },
  { rank: 8, name: "Precious N.", location: "Polokwane, LP", tier: "Leader", earnings: "R8,200", clients: 52, growth: "+44%", badge: "❋" },
  { rank: 9, name: "Dumisani W.", location: "Nelspruit, MP", tier: "Leader", earnings: "R7,600", clients: 48, growth: "+9%", badge: "❋" },
  { rank: 10, name: "Nomvula F.", location: "Kimberley, NC", tier: "Builder", earnings: "R5,100", clients: 32, growth: "+67%", badge: "◈" },
];

const tierColor: Record<string, string> = {
  "Diamond Elite": "#15a85a", "Executive": "#118849", "Director": "#0f7a42",
  "Manager": "#0d6b3a", "Leader": "#5e9e7a", "Builder": "#5e708d",
};

export default function Leaderboard() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.querySelectorAll(".lb-anim").forEach((el, i) => {
        setTimeout(() => { (el as HTMLElement).style.opacity = "1"; (el as HTMLElement).style.transform = "translateX(0)"; }, i * 60);
      });
    }), { threshold: 0.05 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const top3 = [topEarners[1], topEarners[0], topEarners[2]];

  return (
    <section id="leaderboard" ref={sectionRef} style={{ background: "#0f326b", padding: "120px 24px", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #118849, transparent)" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="lb-anim" style={{ opacity: 0, transform: "translateX(-20px)", transition: "all 0.6s ease", textAlign: "center", marginBottom: "64px" }}>
          <div style={{ fontFamily: "Space Mono, monospace", fontSize: "11px", letterSpacing: "3px", color: "#15a85a", textTransform: "uppercase", marginBottom: "16px" }}>TOP PERFORMERS — APRIL 2026</div>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: "700", color: "#ffffff", lineHeight: "1.1", marginBottom: "20px" }}>
            This Month's<br /><span style={{ color: "#15a85a" }}>Top Earners</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "16px", maxWidth: "500px", margin: "0 auto", fontFamily: "DM Sans, sans-serif", lineHeight: "1.6" }}>
            Real distributors. Real earnings. These results are achievable — they started exactly where you are now.
          </p>
        </div>

        {/* Top 3 podium */}
        <div style={{ display: "flex", gap: "20px", marginBottom: "56px", justifyContent: "center", alignItems: "flex-end", flexWrap: "wrap" }}>
          {top3.map((earner, i) => {
            const isFirst = earner.rank === 1;
            return (
              <div key={earner.rank} className="lb-anim" style={{ opacity: 0, transform: "translateX(-20px)", transition: `all 0.6s ease ${i * 0.12}s`, width: isFirst ? "300px" : "260px", flexShrink: 0 }}>
                <div style={{ position: "relative", height: isFirst ? "440px" : "380px", borderRadius: "6px", overflow: "hidden", border: `1px solid ${isFirst ? "rgba(17,136,73,0.5)" : "rgba(255,255,255,0.1)"}` }}>
                  {earner.image
                    ? <img src={earner.image} alt={earner.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                    : <div style={{ width: "100%", height: "100%", background: "#1e3454", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "64px" }}>{earner.badge}</div>
                  }
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,50,107,0.97) 0%, rgba(15,50,107,0.25) 55%, transparent 100%)" }} />
                  {isFirst && (
                    <div style={{ position: "absolute", top: "14px", left: "50%", transform: "translateX(-50%)", background: "#118849", color: "#ffffff", fontSize: "10px", fontFamily: "Space Mono, monospace", fontWeight: "700", letterSpacing: "1px", padding: "4px 14px", borderRadius: "4px", whiteSpace: "nowrap" }}>👑 #1 TOP EARNER</div>
                  )}
                  {!isFirst && (
                    <div style={{ position: "absolute", top: "14px", left: "14px", background: "rgba(15,50,107,0.85)", backdropFilter: "blur(6px)", border: "1px solid rgba(17,136,73,0.35)", borderRadius: "4px", padding: "4px 10px", fontFamily: "Space Mono, monospace", fontSize: "12px", color: "#15a85a" }}>#{earner.rank}</div>
                  )}
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px" }}>
                    <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "22px", fontWeight: "700", color: "#ffffff", marginBottom: "2px" }}>{earner.name}</div>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", fontFamily: "DM Sans, sans-serif", marginBottom: "10px" }}>{earner.location}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ fontFamily: "Space Mono, monospace", fontSize: isFirst ? "22px" : "18px", fontWeight: "700", color: "#15a85a" }}>{earner.earnings}</div>
                      <span style={{ background: "rgba(17,136,73,0.2)", border: "1px solid rgba(17,136,73,0.4)", borderRadius: "4px", padding: "2px 8px", fontSize: "10px", color: "#15a85a", fontFamily: "Space Mono, monospace" }}>{earner.tier}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Table */}
        <div style={{ background: "#1e3454", border: "1px solid rgba(17,136,73,0.2)", borderRadius: "6px", overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "rgba(17,136,73,0.1)", borderBottom: "1px solid rgba(17,136,73,0.2)" }}>
                {["#", "Partner", "Location", "Tier", "Clients", "Growth", "Earnings"].map(h => (
                  <th key={h} style={{ padding: "14px 16px", textAlign: "left", fontFamily: "Space Mono, monospace", fontSize: "10px", letterSpacing: "1.5px", color: "#15a85a", textTransform: "uppercase", fontWeight: "400" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {topEarners.slice(3).map((earner, i) => (
                <tr key={earner.rank} className="lb-anim" style={{ opacity: 0, transform: "translateX(-20px)", transition: `all 0.5s ease ${(i + 4) * 0.05}s`, borderBottom: "1px solid rgba(255,255,255,0.04)", background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)" }}>
                  <td style={{ padding: "14px 16px" }}><span style={{ fontFamily: "Space Mono, monospace", fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>{earner.badge} #{earner.rank}</span></td>
                  <td style={{ padding: "14px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(17,136,73,0.2)", border: "1px solid rgba(17,136,73,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Cormorant Garamond, serif", fontSize: "13px", fontWeight: "700", color: "#15a85a", flexShrink: 0 }}>{earner.name.split(" ").map(n => n[0]).join("")}</div>
                      <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "14px", fontWeight: "600", color: "#ffffff" }}>{earner.name}</span>
                    </div>
                  </td>
                  <td style={{ padding: "14px 16px" }}><span style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", fontFamily: "DM Sans, sans-serif" }}>{earner.location}</span></td>
                  <td style={{ padding: "14px 16px" }}><span style={{ background: "rgba(17,136,73,0.15)", border: "1px solid rgba(17,136,73,0.3)", borderRadius: "4px", padding: "2px 8px", fontSize: "10px", color: tierColor[earner.tier] || "#15a85a", fontFamily: "Space Mono, monospace" }}>{earner.tier}</span></td>
                  <td style={{ padding: "14px 16px" }}><span style={{ fontFamily: "Space Mono, monospace", fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>{earner.clients}</span></td>
                  <td style={{ padding: "14px 16px" }}><span style={{ fontFamily: "Space Mono, monospace", fontSize: "13px", color: "#4CAF50" }}>{earner.growth}</span></td>
                  <td style={{ padding: "14px 16px" }}><span style={{ fontFamily: "Space Mono, monospace", fontSize: "16px", fontWeight: "700", color: "#15a85a" }}>{earner.earnings}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="lb-anim" style={{ opacity: 0, transform: "translateX(-20px)", transition: "all 0.6s ease 0.6s", textAlign: "center", marginTop: "28px" }}>
          <p style={{ color: "rgba(255,255,255,0.25)", fontFamily: "DM Sans, sans-serif", fontSize: "12px" }}>* Earnings displayed are gross commissions. Individual results vary. Past performance is not a guarantee of future results.</p>
        </div>
      </div>
    </section>
  );
}
