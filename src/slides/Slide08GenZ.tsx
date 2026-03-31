import { motion } from "framer-motion";
import SlideTransition from "../components/SlideTransition";
import TextScramble from "../components/TextScramble";

export default function Slide08GenZ() {
  return (
    <SlideTransition centered>
      <div style={{ 
        width: "100%",
        maxWidth: "1000px", 
        textAlign: "left", 
        display: "flex", 
        flexDirection: "column", 
        gap: "1.5rem", // Reduced gap
        padding: "2rem" // Add extra boundary cushion
      }}>
        
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", margin: 0 }}>Gen Z consumes</p>
          {/* Using clamp for bulletproof text fitting without overflow */}
          <h1 className="accent-green" style={{ fontSize: "clamp(4rem, 10vw, 7rem)", lineHeight: 1 }}>7+ HOURS</h1>
          <p style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", margin: 0 }}>of digital content per day.</p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.8, duration: 0.6 }}
           className="brutalist-card brutalist-border"
           style={{ 
             marginTop: "1.5rem", // reduced margin
             textAlign: "center", 
             padding: "2rem", // reduced padding
             background: "var(--color-text)" 
           }}
        >
          <h2 style={{ color: "var(--color-bg)", fontSize: "clamp(1.5rem, 5vw, 3rem)", margin: 0 }}>THE UNIQUE VALUE PROPOSITION</h2>
          <div style={{ 
            background: "var(--color-benefit-green)", 
            display: "inline-block", 
            padding: "0.5rem 1rem", // Tighter padding
            marginTop: "1.5rem" 
          }}>
            <TextScramble 
              as="h1" 
              text="KNOWLEDGE IS YOUR SHIELD" 
              style={{ color: "var(--color-bg)", margin: 0, fontSize: "clamp(1.5rem, 5vw, 3rem)" }} 
            />
          </div>
        </motion.div>
      </div>
    </SlideTransition>
  );
}
