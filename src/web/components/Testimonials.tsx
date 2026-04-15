import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Thandi Mokoena",
    role: "Diamond Elite Partner",
    location: "Johannesburg",
    quote: "I joined Masakhe Partners 18 months ago with zero sales experience. Today I'm earning more in commissions than I ever did in my corporate job. The binary system means my upline actively helps build my network — it's not just you against the world.",
    earnings: "R48,250/month",
    duration: "18 months",
    image: "/images/testimonial-1.png",
    color: "#15a85a",
  },
  {
    name: "Sipho Khumalo",
    role: "Executive Partner",
    location: "Cape Town",
    quote: "The product sells itself — every SMME owner I speak to needs exactly what Masakhe offers. Recurring commissions mean I get paid every month on clients I referred years ago. This is what real passive income looks like.",
    earnings: "R31,800/month",
    duration: "2 years",
    image: "/images/testimonial-2.png",
    color: "#118849",
  },
  {
    name: "Zanele Dlamini",
    role: "Executive Partner",
    location: "Durban",
    quote: "What I love most is the product quality. I'm not pushing something questionable — I'm genuinely helping small businesses grow. When your clients succeed, they renew every month and your income grows with them.",
    earnings: "R28,400/month",
    duration: "14 months",
    image: "/images/testimonial-3.png",
    color: "#118849",
  },
  {
    name: "Nkosi Baloyi",
    role: "Director Partner",
    location: "Pretoria",
    quote: "I started part-time while still working. Within 6 months my commissions were matching my salary. I resigned at month 9. The training, the support, the tools — everything you need to succeed is already in the platform.",
    earnings: "R19,200/month",
    duration: "11 months",
    image: "/images/testimonial-4.png",
    color: "#15a85a",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".test-anim").forEach((el, i) => {
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

  useEffect(() => {
    const timer = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[active];

  return (
    <section ref={sectionRef} style={{
      background: "#192943",
      padding: "120px 24px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Subtle background pattern */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "800px", height: "800px", background: "radial-gradient(circle, rgba(17,136,73,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="test-anim" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease", textAlign: "center", marginBottom: "72px" }}>
          <div style={{ fontFamily: "Space Mono, monospace", fontSize: "11px", letterSpacing: "3px", color: "#15a85a", textTransform: "uppercase", marginBottom: "16px" }}>SUCCESS STORIES</div>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: "700", color: "#FFFFFF", lineHeight: "1.1" }}>
            Hear From Our<br /><span style={{ color: "#15a85a" }}>Top Partners</span>
          </h2>
        </div>

        {/* Main testimonial — big horizontal layout */}
        <div className="test-anim" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease 0.1s" }}>
          <div style={{
            display: "grid", gridTemplateColumns: "380px 1fr",
            background: "linear-gradient(135deg, #1e3454, #192943)",
            border: "1px solid rgba(17,136,73,0.25)",
            borderRadius: "4px", overflow: "hidden",
          }} className="test-card-grid">

            {/* Photo */}
            <div style={{ position: "relative", minHeight: "480px" }}>
              <img
                src={t.image}
                alt={t.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block", transition: "opacity 0.4s ease" }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to right, transparent 60%, #1e3454)",
              }} />
              {/* Earnings badge */}
              <div style={{
                position: "absolute", bottom: "24px", left: "24px",
                background: "rgba(15,50,107,0.9)", backdropFilter: "blur(8px)",
                border: "1px solid rgba(17,136,73,0.4)",
                borderRadius: "2px", padding: "12px 16px",
              }}>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", fontFamily: "DM Sans, sans-serif", marginBottom: "2px" }}>MONTHLY EARNINGS</div>
                <div style={{ fontFamily: "Space Mono, monospace", fontSize: "22px", fontWeight: "700", color: "#15a85a" }}>{t.earnings}</div>
              </div>
            </div>

            {/* Text */}
            <div style={{ padding: "56px 48px", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: "32px", height: "32px", borderTop: "2px solid rgba(17,136,73,0.3)", borderRight: "2px solid rgba(17,136,73,0.3)" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, width: "32px", height: "32px", borderBottom: "2px solid rgba(17,136,73,0.3)", borderLeft: "2px solid rgba(17,136,73,0.3)" }} />

              <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "100px", lineHeight: "0.6", color: "rgba(17,136,73,0.12)", marginBottom: "16px" }}>"</div>

              <blockquote style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(20px, 2.5vw, 26px)",
                fontStyle: "italic", color: "rgba(255,255,255,0.88)",
                lineHeight: "1.6", marginBottom: "40px",
              }}>"{t.quote}"</blockquote>

              <div>
                <div style={{ fontFamily: "DM Sans, sans-serif", fontWeight: "700", fontSize: "18px", color: "#FFFFFF", marginBottom: "4px" }}>{t.name}</div>
                <div style={{ fontSize: "13px", color: t.color, fontFamily: "Space Mono, monospace" }}>{t.role} · {t.location}</div>
              </div>

              <div style={{ display: "flex", gap: "4px", marginTop: "20px" }}>
                {"★★★★★".split("").map((s, i) => <span key={i} style={{ color: "#15a85a", fontSize: "16px" }}>{s}</span>)}
              </div>
            </div>
          </div>
        </div>

        {/* Nav dots */}
        <div className="test-anim" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease 0.2s", display: "flex", justifyContent: "center", gap: "12px", marginTop: "28px" }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              width: i === active ? "32px" : "8px", height: "8px",
              background: i === active ? "#118849" : "rgba(17,136,73,0.3)",
              border: "none", borderRadius: "4px", cursor: "pointer",
              transition: "all 0.3s ease", padding: 0,
            }} />
          ))}
        </div>

        {/* Thumbnail row */}
        <div className="test-anim" style={{
          opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease 0.3s",
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginTop: "32px",
        }}>
          {testimonials.map((t2, i) => (
            <button key={t2.name} onClick={() => setActive(i)} style={{
              background: "none", border: "none", padding: 0, cursor: "pointer",
              borderRadius: "4px", overflow: "hidden",
              outline: i === active ? "2px solid #118849" : "2px solid transparent",
              outlineOffset: "3px", transition: "outline 0.2s",
            }}>
              <div style={{ position: "relative" }}>
                <img src={t2.image} alt={t2.name} style={{
                  width: "100%", height: "120px", objectFit: "cover", objectPosition: "top", display: "block",
                  filter: i === active ? "none" : "brightness(0.5) grayscale(0.4)",
                  transition: "filter 0.3s ease",
                }} />
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  background: "linear-gradient(to top, rgba(15,50,107,0.9), transparent)",
                  padding: "20px 12px 10px",
                }}>
                  <div style={{ fontFamily: "DM Sans, sans-serif", fontWeight: "700", fontSize: "12px", color: "#FFFFFF" }}>{t2.name}</div>
                  <div style={{ fontSize: "10px", color: "#15a85a", fontFamily: "Space Mono, monospace" }}>{t2.earnings}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .test-card-grid { grid-template-columns: 1fr !important; }
          .test-card-grid > div:first-child { min-height: 280px !important; }
        }
      `}</style>
    </section>
  );
}
