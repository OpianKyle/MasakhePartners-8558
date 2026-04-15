import { useState } from "react";
import { useLocation } from "wouter";

const metrics = [
  { label: "This Month's Earnings", value: "R12,450", change: "+14%", icon: "💰", positive: true },
  { label: "Direct Clients", value: "24", change: "+3", icon: "👥", positive: true },
  { label: "Network Size", value: "87", change: "+11", icon: "🌳", positive: true },
  { label: "Binary Bonus", value: "R2,100", change: "+R400", icon: "⚡", positive: true },
];

const recentActivity = [
  { action: "New client referred", name: "Thabo's Electricals", plan: "Enterprise Plus", commission: "+R179.80", date: "Today, 09:14" },
  { action: "Commission received", name: "Monthly payout", plan: "March 2026", commission: "+R10,880", date: "25 Mar 2026" },
  { action: "Downline signup", name: "Lerato Sithole (L2)", plan: "Builder Package", commission: "+R89.90", date: "23 Mar 2026" },
  { action: "New client referred", name: "Nomsa's Salon", plan: "Enterprise", commission: "+R119.80", date: "20 Mar 2026" },
  { action: "Rank upgrade", name: "You advanced to Manager", plan: "Rank Bonus", commission: "+R5,000", date: "15 Mar 2026" },
];

const downline = [
  { name: "Ayanda P.", leg: "Left", clients: 18, recruits: 5, earnings: "R3,240", tier: "Leader" },
  { name: "Sipho R.", leg: "Right", clients: 12, recruits: 3, earnings: "R2,160", tier: "Builder" },
  { name: "Zanele K.", leg: "Left", clients: 9, recruits: 2, earnings: "R1,620", tier: "Builder" },
  { name: "Bongani M.", leg: "Right", clients: 6, recruits: 1, earnings: "R1,080", tier: "Starter" },
];

export default function Dashboard() {
  const [, navigate] = useLocation();
  const [activeTab, setActiveTab] = useState<"overview" | "network" | "earnings">("overview");

  return (
    <div style={{ minHeight: "100vh", background: "#192943", fontFamily: "DM Sans, sans-serif" }}>
      {/* Top nav */}
      <nav style={{
        background: "rgba(15,50,107,0.97)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(17,136,73,0.2)",
        padding: "0 24px", height: "64px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        position: "sticky", top: 0, zIndex: 100,
      }}>
        <button onClick={() => navigate("/")} style={{
          background: "none", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", gap: "10px",
        }}>
          <div style={{
            width: "30px", height: "30px",
            background: "linear-gradient(135deg, #118849, #15a85a)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "14px", fontWeight: "700", color: "#FFFFFF",
            fontFamily: "Cormorant Garamond, serif",
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}>M</div>
          <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "18px", fontWeight: "700", color: "#FFFFFF" }}>
            Masakhe <span style={{ color: "#15a85a" }}>Partners</span>
          </span>
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{
            background: "rgba(17,136,73,0.12)", border: "1px solid rgba(17,136,73,0.3)",
            borderRadius: "2px", padding: "4px 12px",
            fontSize: "11px", color: "#15a85a", fontFamily: "Space Mono, monospace",
          }}>MANAGER · M4</span>
          <div style={{
            width: "36px", height: "36px",
            background: "linear-gradient(135deg, #118849, #0d6b3a)",
            borderRadius: "2px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "14px", fontWeight: "700", color: "#FFFFFF",
            fontFamily: "Cormorant Garamond, serif", cursor: "pointer",
          }}>JD</div>
        </div>
      </nav>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "32px 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ fontFamily: "Space Mono, monospace", fontSize: "10px", color: "#15a85a", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "6px" }}>
            PARTNER DASHBOARD
          </div>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "36px", fontWeight: "700", color: "#FFFFFF", margin: "0 0 4px" }}>
            Welcome back, <span style={{ color: "#15a85a" }}>James</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.45)", margin: 0, fontSize: "14px" }}>
            April 2026 · Next payout: <strong style={{ color: "#15a85a" }}>25 April 2026</strong>
          </p>
        </div>

        {/* Metrics */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {metrics.map((m) => (
            <div key={m.label} style={{
              background: "#1e3454",
              border: "1px solid rgba(17,136,73,0.15)",
              borderRadius: "4px", padding: "24px",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                background: "linear-gradient(90deg, #118849, #15a85a)",
              }} />
              <div style={{ fontSize: "24px", marginBottom: "12px" }}>{m.icon}</div>
              <div style={{ fontFamily: "Space Mono, monospace", fontSize: "28px", fontWeight: "700", color: "#15a85a", marginBottom: "4px" }}>
                {m.value}
              </div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", marginBottom: "6px" }}>{m.label}</div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "4px",
                background: "rgba(21,168,90,0.1)", borderRadius: "2px", padding: "2px 8px",
                fontSize: "11px", color: "#15a85a", fontFamily: "Space Mono, monospace",
              }}>{m.change} this month</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "0", marginBottom: "32px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          {(["overview", "network", "earnings"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "12px 24px",
                background: "none",
                border: "none", borderBottom: activeTab === tab ? "2px solid #118849" : "2px solid transparent",
                color: activeTab === tab ? "#15a85a" : "rgba(255,255,255,0.45)",
                fontSize: "13px", fontFamily: "Space Mono, monospace",
                letterSpacing: "1px", textTransform: "uppercase",
                cursor: "pointer", transition: "all 0.2s",
                marginBottom: "-1px",
              }}
            >{tab}</button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "24px" }}>
            {/* Recent Activity */}
            <div style={{
              background: "#1e3454",
              border: "1px solid rgba(17,136,73,0.15)",
              borderRadius: "4px", overflow: "hidden",
            }}>
              <div style={{
                padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)",
                display: "flex", alignItems: "center", justifyContent: "space-between",
              }}>
                <div style={{ fontFamily: "Space Mono, monospace", fontSize: "11px", color: "#15a85a", letterSpacing: "2px", textTransform: "uppercase" }}>
                  Recent Activity
                </div>
              </div>
              {recentActivity.map((item, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  padding: "16px 24px",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                  background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)",
                }}>
                  <div style={{
                    width: "8px", height: "8px", borderRadius: "50%",
                    background: item.commission.startsWith("+R5") ? "#15a85a" : "#118849",
                    flexShrink: 0,
                  }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "13px", fontWeight: "600", color: "#FFFFFF" }}>{item.name}</div>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>{item.action} · {item.plan}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: "Space Mono, monospace", fontSize: "14px", color: "#15a85a", fontWeight: "700" }}>{item.commission}</div>
                    <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)" }}>{item.date}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Rank Progress + Binary */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Rank Progress */}
              <div style={{
                background: "#1e3454",
                border: "1px solid rgba(17,136,73,0.15)",
                borderRadius: "4px", padding: "24px",
              }}>
                <div style={{ fontFamily: "Space Mono, monospace", fontSize: "11px", color: "#15a85a", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>
                  Rank Progress
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span style={{ fontSize: "13px", color: "#FFFFFF", fontWeight: "600" }}>Manager → Director</span>
                  <span style={{ fontFamily: "Space Mono, monospace", fontSize: "12px", color: "#15a85a" }}>52%</span>
                </div>
                <div style={{ height: "6px", background: "rgba(255,255,255,0.08)", borderRadius: "3px", overflow: "hidden", marginBottom: "16px" }}>
                  <div style={{ height: "100%", width: "52%", background: "linear-gradient(90deg, #118849, #15a85a)", borderRadius: "3px" }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", fontSize: "12px" }}>
                  {[
                    { label: "Active Recruits", current: "26/50", pct: "52%" },
                    { label: "Network MRR", current: "R13,400/R25,000", pct: "54%" },
                  ].map((req) => (
                    <div key={req.label} style={{ background: "rgba(17,136,73,0.06)", border: "1px solid rgba(17,136,73,0.12)", borderRadius: "2px", padding: "10px" }}>
                      <div style={{ color: "rgba(255,255,255,0.4)", marginBottom: "4px" }}>{req.label}</div>
                      <div style={{ fontFamily: "Space Mono, monospace", color: "#15a85a" }}>{req.current}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Binary Balance */}
              <div style={{
                background: "#1e3454",
                border: "1px solid rgba(17,136,73,0.15)",
                borderRadius: "4px", padding: "24px",
              }}>
                <div style={{ fontFamily: "Space Mono, monospace", fontSize: "11px", color: "#15a85a", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>
                  Binary Balance
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                  {[
                    { leg: "Left Leg", volume: "R28,400", members: 42, color: "#118849" },
                    { leg: "Right Leg", volume: "R21,000", members: 45, color: "#15a85a" },
                  ].map((leg) => (
                    <div key={leg.leg} style={{ textAlign: "center", background: "rgba(17,136,73,0.06)", border: "1px solid rgba(17,136,73,0.12)", borderRadius: "2px", padding: "16px" }}>
                      <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginBottom: "6px" }}>{leg.leg}</div>
                      <div style={{ fontFamily: "Space Mono, monospace", fontSize: "20px", fontWeight: "700", color: leg.color }}>{leg.volume}</div>
                      <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginTop: "4px" }}>{leg.members} members</div>
                    </div>
                  ))}
                </div>
                <div style={{
                  background: "rgba(17,136,73,0.1)", border: "1px solid rgba(17,136,73,0.25)",
                  borderRadius: "2px", padding: "12px", textAlign: "center",
                }}>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginBottom: "4px" }}>Binary Bonus (10% of R21,000)</div>
                  <div style={{ fontFamily: "Space Mono, monospace", fontSize: "22px", fontWeight: "700", color: "#15a85a" }}>R2,100</div>
                </div>
              </div>

              {/* Referral Link */}
              <div style={{
                background: "#1e3454",
                border: "1px solid rgba(17,136,73,0.15)",
                borderRadius: "4px", padding: "20px",
              }}>
                <div style={{ fontFamily: "Space Mono, monospace", fontSize: "11px", color: "#15a85a", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>
                  Your Referral Link
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div style={{
                    flex: 1, background: "#192943", border: "1px solid rgba(17,136,73,0.15)",
                    borderRadius: "2px", padding: "10px 12px",
                    fontFamily: "Space Mono, monospace", fontSize: "11px",
                    color: "rgba(255,255,255,0.5)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                  }}>partners.masakhe.co.za/ref/jd-mp4</div>
                  <button
                    onClick={() => navigator.clipboard?.writeText("https://partners.masakhe.co.za/ref/jd-mp4")}
                    style={{
                      padding: "10px 16px",
                      background: "linear-gradient(90deg, #118849, #15a85a)",
                      border: "none", color: "#FFFFFF",
                      fontFamily: "DM Sans, sans-serif", fontWeight: "700",
                      fontSize: "12px", borderRadius: "2px", cursor: "pointer",
                      whiteSpace: "nowrap",
                    }}
                  >Copy</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "network" && (
          <div>
            <div style={{
              background: "#1e3454",
              border: "1px solid rgba(17,136,73,0.15)",
              borderRadius: "4px", overflow: "hidden",
            }}>
              <div style={{ padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ fontFamily: "Space Mono, monospace", fontSize: "11px", color: "#15a85a", letterSpacing: "2px", textTransform: "uppercase" }}>
                  Direct Downline
                </div>
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "rgba(17,136,73,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    {["Partner", "Leg", "Clients", "Recruits", "Tier", "Monthly Volume"].map((h) => (
                      <th key={h} style={{
                        padding: "12px 20px", textAlign: "left",
                        fontFamily: "Space Mono, monospace", fontSize: "10px",
                        letterSpacing: "1px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase",
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {downline.map((d, i) => (
                    <tr key={d.name} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)" }}>
                      <td style={{ padding: "16px 20px", fontWeight: "600", color: "#FFFFFF" }}>{d.name}</td>
                      <td style={{ padding: "16px 20px" }}>
                        <span style={{
                          background: d.leg === "Left" ? "rgba(17,136,73,0.1)" : "rgba(21,168,90,0.1)",
                          border: `1px solid ${d.leg === "Left" ? "rgba(17,136,73,0.3)" : "rgba(21,168,90,0.3)"}`,
                          borderRadius: "2px", padding: "2px 8px",
                          fontSize: "11px", fontFamily: "Space Mono, monospace",
                          color: d.leg === "Left" ? "#118849" : "#15a85a",
                        }}>{d.leg}</span>
                      </td>
                      <td style={{ padding: "16px 20px", fontFamily: "Space Mono, monospace", color: "rgba(255,255,255,0.7)" }}>{d.clients}</td>
                      <td style={{ padding: "16px 20px", fontFamily: "Space Mono, monospace", color: "rgba(255,255,255,0.7)" }}>{d.recruits}</td>
                      <td style={{ padding: "16px 20px" }}>
                        <span style={{ fontSize: "12px", color: "#15a85a", fontFamily: "Space Mono, monospace" }}>{d.tier}</span>
                      </td>
                      <td style={{ padding: "16px 20px", fontFamily: "Space Mono, monospace", fontWeight: "700", color: "#15a85a" }}>{d.earnings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "earnings" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            {/* Earnings breakdown */}
            <div style={{
              background: "#1e3454",
              border: "1px solid rgba(17,136,73,0.15)",
              borderRadius: "4px", padding: "28px",
            }}>
              <div style={{ fontFamily: "Space Mono, monospace", fontSize: "11px", color: "#15a85a", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "24px" }}>
                April 2026 Breakdown
              </div>
              {[
                { label: "Direct (Level 1) Commissions", amount: "R4,800", pct: "38%" },
                { label: "Level 2 Commissions", amount: "R3,200", pct: "26%" },
                { label: "Level 3 Commissions", amount: "R1,500", pct: "12%" },
                { label: "Level 4–5 Commissions", amount: "R850", pct: "7%" },
                { label: "Binary Bonus", amount: "R2,100", pct: "17%" },
              ].map((item) => (
                <div key={item.label} style={{ marginBottom: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>{item.label}</span>
                    <span style={{ fontFamily: "Space Mono, monospace", fontSize: "13px", color: "#15a85a", fontWeight: "700" }}>{item.amount}</span>
                  </div>
                  <div style={{ height: "4px", background: "rgba(255,255,255,0.06)", borderRadius: "2px", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: item.pct, background: "linear-gradient(90deg, #118849, #15a85a)", borderRadius: "2px" }} />
                  </div>
                </div>
              ))}
              <div style={{ height: "1px", background: "rgba(17,136,73,0.25)", margin: "20px 0" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "DM Sans, sans-serif", fontWeight: "700", color: "#FFFFFF", fontSize: "15px" }}>Total Earnings</span>
                <span style={{ fontFamily: "Space Mono, monospace", fontSize: "26px", fontWeight: "700", color: "#15a85a" }}>R12,450</span>
              </div>
            </div>

            {/* Payout history */}
            <div style={{
              background: "#1e3454",
              border: "1px solid rgba(17,136,73,0.15)",
              borderRadius: "4px", padding: "28px",
            }}>
              <div style={{ fontFamily: "Space Mono, monospace", fontSize: "11px", color: "#15a85a", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "24px" }}>
                Payout History
              </div>
              {[
                { month: "March 2026", amount: "R10,880", status: "Paid" },
                { month: "February 2026", amount: "R9,200", status: "Paid" },
                { month: "January 2026", amount: "R8,550", status: "Paid" },
                { month: "December 2025", amount: "R11,300", status: "Paid" },
                { month: "November 2025", amount: "R7,900", status: "Paid" },
              ].map((p) => (
                <div key={p.month} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}>
                  <div>
                    <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: "14px", color: "#FFFFFF", fontWeight: "500" }}>{p.month}</div>
                    <div style={{
                      display: "inline-block", marginTop: "4px",
                      background: "rgba(21,168,90,0.1)", border: "1px solid rgba(21,168,90,0.3)",
                      borderRadius: "2px", padding: "1px 7px",
                      fontSize: "10px", color: "#15a85a", fontFamily: "Space Mono, monospace",
                    }}>{p.status}</div>
                  </div>
                  <div style={{ fontFamily: "Space Mono, monospace", fontSize: "18px", fontWeight: "700", color: "#15a85a" }}>{p.amount}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
