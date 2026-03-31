import { motion } from "framer-motion";
import SlideTransition from "../components/SlideTransition";
import TextScramble from "../components/TextScramble";

export default function Slide11Closing() {
  return (
    <SlideTransition centered>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
        className="brutalist-card bg-red"
        style={{ padding: "6rem", textAlign: "center" }}
      >
        <TextScramble as="h1" text="THANK YOU" style={{ color: "var(--color-bg)" }} />
        <h3 style={{ color: "var(--color-bg)", marginTop: "2rem", opacity: 0.9 }}>ANY QUESTIONS?</h3>
      </motion.div>
    </SlideTransition>
  );
}
