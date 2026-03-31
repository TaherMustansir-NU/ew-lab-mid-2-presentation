import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { motion, type Variants } from "framer-motion";
import SlideTransition from "../components/SlideTransition";
import TextScramble from "../components/TextScramble";

export default function Slide06Threat() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Infographic 'infection' spreading animation
    const tl = gsap.timeline({ delay: 0.5 });
    tl.fromTo(".info-node-core", 
      { scale: 0, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)" }
    );
    
    tl.fromTo(".info-node", 
      { scale: 0, opacity: 0 }, 
      { scale: 1, opacity: 1, stagger: 0.05, duration: 0.4, ease: "back.out(2)" },
      "-=0.2"
    );

    // Continuous pulse on nodes
    gsap.to(".info-node", {
      scale: 1.1,
      opacity: 0.8,
      duration: 0.5,
      stagger: {
        each: 0.1,
        yoyo: true,
        repeat: -1
      },
      ease: "sine.inOut"
    });

  }, { scope: containerRef });

  const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariant: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: "tween", ease: "easeOut", duration: 0.8 } }
  };

  const nodes = Array.from({ length: 36 }, (_, i) => i);

  return (
    <SlideTransition centered={true}>
      <div ref={containerRef} style={{ width: "100%", maxWidth: "1200px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        
        {/* Left Column: Text Content */}
        <div>
          <div style={{ marginBottom: "2rem" }}>
            <TextScramble as="h2" text="THE THREAT" className="accent-red" style={{ fontSize: "4rem", margin: 0 }} />
          </div>
          
          <motion.div 
            variants={containerVariant} 
            initial="hidden" 
            animate="visible" 
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <motion.div variants={itemVariant} className="brutalist-card bg-red" style={{ padding: "1.5rem" }}>
              <h3 style={{ color: "var(--color-bg)", margin: 0, fontSize: "1.5rem" }}>SPREAD FALSE NEWS</h3>
              <p style={{ color: "var(--color-bg)", opacity: 0.8, marginTop: "0.25rem", fontSize: "1rem" }}>And political lies</p>
            </motion.div>
            
            <motion.div variants={itemVariant} className="brutalist-card" style={{ padding: "1.5rem", borderColor: "var(--color-flaw-red)" }}>
              <h3 className="accent-red" style={{ margin: 0, fontSize: "1.5rem" }}>MANIPULATE ELECTIONS</h3>
              <p style={{ opacity: 0.8, marginTop: "0.25rem", fontSize: "1rem" }}>Destroy democratic trust</p>
            </motion.div>
            
            <motion.div variants={itemVariant} className="brutalist-card bg-red" style={{ padding: "1.5rem" }}>
              <h3 style={{ color: "var(--color-bg)", margin: 0, fontSize: "1.5rem" }}>BLACKMAIL</h3>
              <p style={{ color: "var(--color-bg)", opacity: 0.8, marginTop: "0.25rem", fontSize: "1rem" }}>Destroy ordinary people's lives</p>
            </motion.div>
            
            <motion.div variants={itemVariant} className="brutalist-card" style={{ padding: "1.5rem", borderColor: "var(--color-flaw-red)" }}>
              <h3 className="accent-red" style={{ margin: 0, fontSize: "1.5rem" }}>NON-CONSENSUAL CONTENT</h3>
              <p style={{ opacity: 0.8, marginTop: "0.25rem", fontSize: "1rem" }}>Robbing people of autonomy</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column: Wow-factor Infographic (Spreading Infection Grid) */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", height: "500px", width: "100%" }}>
          <div className="brutalist-border" style={{ position: "absolute", width: "100%", height: "100%", display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridTemplateRows: "repeat(6, 1fr)", gap: "4px", padding: "4px", background: "var(--color-text)" }}>
             {nodes.map(i => (
               <div 
                 key={i} 
                 className={`info-node ${i === 14 || i === 15 || i === 20 || i === 21 ? 'info-node-core' : ''}`}
                 style={{ 
                   background: "var(--color-flaw-red)", 
                   width: "100%", 
                   height: "100%",
                   opacity: 0.2 
                 }} 
               />
             ))}
          </div>
          
          <div className="brutalist-border info-node-core" style={{ position: "absolute", background: "var(--color-bg)", padding: "1rem", color: "var(--color-flaw-red)", zIndex: 10, fontWeight: "bold", fontSize: "1.5rem" }}>
            [ SYSTEM COMPROMISED ]
          </div>
        </div>

      </div>
    </SlideTransition>
  );
}
