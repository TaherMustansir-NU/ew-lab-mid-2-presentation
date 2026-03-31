import { motion } from "framer-motion";
import SlideTransition from "../components/SlideTransition";
import TextScramble from "../components/TextScramble";

export default function Slide09Actions() {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariantNum = {
    hidden: { opacity: 0, rotateX: -90 },
    visible: { opacity: 1, rotateX: 0, transition: { type: "tween", ease: "backOut", duration: 0.8 } }
  };

  const itemVariantCard = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "tween", ease: "easeOut", duration: 0.6 } }
  };

  return (
    <SlideTransition centered>
      <div style={{ width: "100%", maxWidth: "1200px" }}>
        
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
           <TextScramble as="h2" text="WHAT YOU CAN DO" className="accent-green" style={{ margin: 0, fontSize: "clamp(2rem, 5vw, 4rem)" }} />
           <p style={{ fontSize: "1.25rem", margin: "1rem 0 0 0" }}>Three simple actions to walk away with today.</p>
        </div>

        <motion.div 
          variants={containerVariant} 
          initial="hidden" 
          animate="visible" 
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <motion.h1 
               variants={itemVariantNum} 
               style={{ transformOrigin: "bottom" }} 
               className="action-num accent-green" 
               style={{ margin: "0 0 1rem 0", fontSize: "clamp(4rem, 8vw, 6rem)", lineHeight: 1, transformOrigin: "bottom" }}
            >
              01
            </motion.h1>
            <motion.div variants={itemVariantCard} className="action-card brutalist-card" style={{ width: "100%", borderColor: "var(--color-benefit-green)", padding: "1.5rem" }}>
              <h3 className="accent-green" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>VERIFY BEFORE YOU SHARE</h3>
              <p style={{ margin: 0, fontSize: "1rem" }}>Pause. Check the source. Look for signs of manipulation before you pass it on.</p>
            </motion.div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <motion.h1 
               variants={itemVariantNum} 
               style={{ transformOrigin: "bottom" }} 
               className="action-num accent-green" 
               style={{ margin: "0 0 1rem 0", fontSize: "clamp(4rem, 8vw, 6rem)", lineHeight: 1, transformOrigin: "bottom" }}
            >
              02
            </motion.h1>
            <motion.div variants={itemVariantCard} className="action-card brutalist-card bg-green" style={{ width: "100%", padding: "1.5rem" }}>
              <h3 style={{ color: "var(--color-bg)", fontSize: "1.5rem", marginBottom: "1rem" }}>TALK ABOUT IT</h3>
              <p style={{ margin: 0, color: "var(--color-bg)", fontSize: "1rem" }}>Bring this conversation home. Awareness is the first line of defense.</p>
            </motion.div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <motion.h1 
               variants={itemVariantNum} 
               style={{ transformOrigin: "bottom" }} 
               className="action-num accent-green" 
               style={{ margin: "0 0 1rem 0", fontSize: "clamp(4rem, 8vw, 6rem)", lineHeight: 1, transformOrigin: "bottom" }}
            >
              03
            </motion.h1>
            <motion.div variants={itemVariantCard} className="action-card brutalist-card" style={{ width: "100%", borderColor: "var(--color-benefit-green)", padding: "1.5rem" }}>
              <h3 className="accent-green" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>DEMAND REGULATION</h3>
              <p style={{ margin: 0, fontSize: "1rem" }}>The law is behind the technology. Push for laws that protect people from digital abuse.</p>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </SlideTransition>
  );
}
