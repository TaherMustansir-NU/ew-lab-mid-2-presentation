import { motion } from "framer-motion";
import SlideTransition from "../components/SlideTransition";
import TextScramble from "../components/TextScramble";

export default function Slide00Intro() {
  return (
    <SlideTransition centered>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 style={{ 
            fontSize: "clamp(3rem, 8vw, 6rem)", 
            margin: 0, 
            textAlign: "center",
            color: "var(--color-text)" 
        }}>
          GOOD MORNING,{" "}
          <TextScramble 
            as="span" 
            text="EVERYONE." 
            className="accent-green"
          />
        </h1>
      </motion.div>
    </SlideTransition>
  );
}
