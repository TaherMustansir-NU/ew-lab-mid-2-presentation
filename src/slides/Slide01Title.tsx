import SlideTransition from "../components/SlideTransition";
import TextScramble from "../components/TextScramble";
import { motion } from "framer-motion";

export default function Slide01Title() {
  return (
    <SlideTransition centered>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="brutalist-card"
        style={{ maxWidth: "800px" }}
      >
        <TextScramble as="h1" text="DEEPFAKE" className="accent-red" />
        <TextScramble as="h1" text="TECHNOLOGY" />
        <h3 style={{ marginTop: "2rem" }}>INNOVATION OR THREAT?</h3>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{ position: "absolute", bottom: "4rem" }}
      >
        <p className="font-mono">Speakers: Taher | Noman</p>
      </motion.div>
    </SlideTransition>
  );
}
