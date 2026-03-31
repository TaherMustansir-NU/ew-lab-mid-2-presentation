import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import SlideTransition from "../components/SlideTransition";
import TextScramble from "../components/TextScramble";
import { ShieldAlert, Fingerprint, Eye, ScanSearch } from "lucide-react";

export default function Slide07Solutions() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    // Infographic scanner animation
    const tlScanner = gsap.timeline({ repeat: -1, yoyo: true });
    tlScanner.to(".scanner-line", {
      y: 180,
      duration: 2,
      ease: "sine.inOut"
    });

    // Hexagon pulse
    gsap.to(".shield-icon", {
      scale: 1.1,
      opacity: 0.8,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, { scope: containerRef });

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "tween", ease: "easeOut", duration: 0.6 } }
  };

  return (
    <SlideTransition centered>
      <div ref={containerRef} style={{ width: "100%", maxWidth: "1200px", display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
        
        {/* Infographic Top Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "4rem", marginBottom: "1rem" }}>
           <div style={{ position: "relative", width: "200px", height: "200px" }} className="brutalist-border">
              {/* Background grid */}
              <div style={{ position: "absolute", width: "100%", height: "100%", display: "flex", flexWrap: "wrap", opacity: 0.1 }}>
                  {Array.from({ length: 16 }).map((_, i) => (
                     <div key={i} style={{ width: "25%", height: "25%", border: "1px solid var(--color-benefit-green)" }} />
                  ))}
              </div>
              <div style={{ position: "absolute", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                 <ScanSearch size={80} className="accent-green shield-icon" />
              </div>
              {/* Animated Scanner Line */}
              <div className="scanner-line" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "4px", background: "var(--color-benefit-green)", boxShadow: "0px 0px 15px 5px rgba(10, 92, 54, 0.5)", zIndex: 10 }}></div>
           </div>
           
           <div>
              <TextScramble as="h2" text="WE ARE NOT HELPLESS" className="accent-green" style={{ fontSize: "3rem", margin: 0 }} />
              <p style={{ marginTop: "1rem", fontSize: "1.25rem", maxWidth: "500px" }}>Three key solutions being actively developed and deployed to counteract AI-generated manipulation.</p>
           </div>
        </div>
        
        {/* Cards Row */}
        <motion.div 
          variants={containerVariant} 
          initial="hidden" 
          animate="visible" 
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", width: "100%" }}
        >
          <motion.div variants={itemVariant} className="solution-card brutalist-card" style={{ borderColor: "var(--color-benefit-green)", padding: "1.5rem" }}>
            <ShieldAlert size={48} className="accent-green" style={{ marginBottom: "1rem" }} />
            <h3 className="accent-green" style={{ fontSize: "1.5rem" }}>AI DETECTION</h3>
            <p style={{ marginTop: "1rem", fontSize: "1rem" }}>Systems scanning videos flagging deepfakes with up to 96% accuracy. AI fighting AI.</p>
          </motion.div>
          
          <motion.div variants={itemVariant} className="solution-card brutalist-card bg-green" style={{ padding: "1.5rem" }}>
            <Fingerprint size={48} color="var(--color-bg)" style={{ marginBottom: "1rem" }} />
            <h3 style={{ color: "var(--color-bg)", fontSize: "1.5rem" }}>DIGITAL WATERMARK</h3>
            <p style={{ marginTop: "1rem", color: "var(--color-bg)", fontSize: "1rem" }}>Content tagged at the source. Hidden signatures to trace and remove fake content.</p>
          </motion.div>
          
          <motion.div variants={itemVariant} className="solution-card brutalist-card" style={{ borderColor: "var(--color-benefit-green)", padding: "1.5rem" }}>
            <Eye size={48} className="accent-green" style={{ marginBottom: "1rem" }} />
            <h3 className="accent-green" style={{ fontSize: "1.5rem" }}>MEDIA LITERACY</h3>
            <p style={{ marginTop: "1rem", fontSize: "1rem" }}>Teaching people to question what they see. Verify sources. Pause before sharing.</p>
          </motion.div>
        </motion.div>
        
      </div>
    </SlideTransition>
  );
}
