import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Products from "../components/Products";
import Compensation from "../components/Compensation";
import Ranks from "../components/Ranks";
import Leaderboard from "../components/Leaderboard";
import Testimonials from "../components/Testimonials";
import JoinCTA from "../components/JoinCTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ImageBanner from "../components/ImageBanner";

export default function Index() {
  return (
    <div style={{ background: "#0A0A0A", color: "#FFFFFF" }}>
      <Navbar />
      <Hero />
      <HowItWorks />

      {/* Banner between How It Works and Products */}
      <ImageBanner image="/images/team-meeting.png" height="300px" overlay="rgba(10,10,10,0.55)">
        <div style={{ maxWidth: "700px" }}>
          <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(24px, 4vw, 40px)", fontStyle: "italic", color: "#FFFFFF", lineHeight: "1.4", margin: 0, textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}>
            "The best time to build residual income was 5 years ago.<br />The second best time is <span style={{ color: "#D4AF37" }}>today.</span>"
          </p>
        </div>
      </ImageBanner>

      <Products />
      <Compensation />

      {/* Banner between Compensation and Ranks */}
      <ImageBanner image="/images/partner-man.png" height="340px" overlay="rgba(10,10,10,0.5)">
        <div style={{ maxWidth: "600px" }}>
          <div style={{ fontFamily: "Space Mono, monospace", fontSize: "11px", letterSpacing: "3px", color: "#D4AF37", textTransform: "uppercase", marginBottom: "16px" }}>YOUR POTENTIAL</div>
          <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: "700", color: "#FFFFFF", margin: "0 0 12px", lineHeight: "1.1", textShadow: "0 2px 20px rgba(0,0,0,0.9)" }}>
            7 Ranks. Unlimited Earnings.<br /><span style={{ color: "#D4AF37" }}>Where will you go?</span>
          </h3>
        </div>
      </ImageBanner>

      <Ranks />

      {/* Banner before Leaderboard */}
      <ImageBanner image="/images/success-flatlay.png" height="260px" overlay="rgba(10,10,10,0.65)">
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "Space Mono, monospace", fontSize: "11px", letterSpacing: "3px", color: "#D4AF37", textTransform: "uppercase", marginBottom: "12px" }}>THE PROOF IS IN THE NUMBERS</div>
          <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(26px, 4vw, 48px)", fontWeight: "700", color: "#FFFFFF", margin: 0, textShadow: "0 2px 20px rgba(0,0,0,0.9)" }}>
            Over <span style={{ color: "#D4AF37" }}>R1.2 Million</span> paid in commissions
          </h3>
        </div>
      </ImageBanner>

      <Leaderboard />
      <Testimonials />
      <JoinCTA />
      <Contact />
      <Footer />
    </div>
  );
}
