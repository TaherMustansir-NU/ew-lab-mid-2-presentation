import { motion } from "framer-motion";
import SlideTransition from "../components/SlideTransition";
import TextScramble from "../components/TextScramble";

export default function Slide05HumanCost() {
  return (
    <SlideTransition centered>
      <div style={{ maxWidth: "800px", textAlign: "left" }}>
        {/* Swapped inline style for TextScramble props mapping cleanly */}
        <div style={{ marginBottom: "2rem" }}>
          <TextScramble as="h2" text="THE HUMAN COST" className="accent-red" style={{ fontSize: "5rem" }} />
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="brutalist-card" 
          style={{ background: "var(--color-flaw-light)", borderColor: "var(--color-flaw-red)" }}
        >
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <h1 style={{ margin: 0, fontSize: "8rem" }} className="accent-red">"</h1>
            <p style={{ fontSize: "1.5rem", fontStyle: "italic", margin: 0 }}>
              Within days — her reputation, her career, and her mental health were destroyed. She was a deepfake victim.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{ marginTop: "3rem", display: "flex", justifyContent: "space-between" }}
        >
           <div>
              <h1 className="accent-red" style={{ margin: 0, lineHeight: 1 }}>500,000+</h1>
              <p style={{ fontWeight: "bold" }}>DEEPFAKE VIDEOS IN 2023</p>
           </div>
           <div style={{ borderLeft: "4px solid var(--color-flaw-red)", paddingLeft: "2rem" }}>
              <h1 className="accent-red" style={{ margin: 0, lineHeight: 1 }}>550%</h1>
              <p style={{ fontWeight: "bold" }}>RISE IN JUST 4 YEARS</p>
           </div>
        </motion.div>
      </div>
    </SlideTransition>
  );
}
