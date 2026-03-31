import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

interface Props {
  children: ReactNode;
  centered?: boolean;
}

// Brutalist sharp masking transition
const slideVariants: Variants = {
  hidden: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    opacity: 0,
  },
  visible: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

export default function SlideTransition({ children, centered = true }: Props) {
  return (
    <motion.div
      className={centered ? "slide-centered" : "slide-container"}
      variants={slideVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
