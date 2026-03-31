import { motion } from "framer-motion";
import SlideTransition from "../components/SlideTransition";
import TextScramble from "../components/TextScramble";

export default function Slide04HowItWorks() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <SlideTransition centered>
      <TextScramble as="h2" text="HOW IT WORKS" style={{ marginBottom: "4rem" }} />
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        style={{ display: "flex", gap: "2rem", alignItems: "center", width: "100%", justifyContent: "center" }}
      >
        <motion.div variants={item} className="brutalist-card">
          <h4 style={{ margin: 0 }}>IMAGES</h4>
          <p style={{ margin: 0, fontSize: "1rem" }}>(Thousands)</p>
        </motion.div>
        
        <motion.div variants={item} style={{ fontSize: "3rem" }}>→</motion.div>
        
        <motion.div variants={item} className="brutalist-card bg-red">
          <h4 style={{ margin: 0 }}>AI MODEL</h4>
          <p style={{ margin: 0, fontSize: "1rem", color: "var(--color-bg)" }}>(Analyzes details)</p>
        </motion.div>
        
        <motion.div variants={item} style={{ fontSize: "3rem" }}>→</motion.div>
        
        <motion.div variants={item} className="brutalist-card brutalist-border">
          <h4 style={{ margin: 0 }}>FAKE VIDEO</h4>
          <p style={{ margin: 0, fontSize: "1rem", color: "var(--color-text)" }}>(Mimics perfectly)</p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <h3 style={{ marginTop: "4rem" }} className="accent-red">You cannot tell the difference with your naked eye.</h3>
      </motion.div>
    </SlideTransition>
  );
}
