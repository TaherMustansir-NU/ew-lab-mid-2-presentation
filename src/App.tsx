import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";

// Slides
import Slide00Intro from "./slides/Slide00Intro";
import Slide01Title from "./slides/Slide01Title";
import Slide02Hook from "./slides/Slide02Hook";
import Slide03WhatIs from "./slides/Slide03WhatIs";
import Slide04HowItWorks from "./slides/Slide04HowItWorks";
import Slide05HumanCost from "./slides/Slide05HumanCost";
import Slide06Threat from "./slides/Slide06Threat";
import Slide07Solutions from "./slides/Slide07Solutions";
import Slide08GenZ from "./slides/Slide08GenZ";
import Slide09Actions from "./slides/Slide09Actions";
import Slide10Conclusion from "./slides/Slide10Conclusion";
import Slide11Closing from "./slides/Slide11Closing";

// Components
import ThreeBackground from "./components/ThreeBackground";

const SLIDES = [
  Slide00Intro,
  Slide02Hook,
  Slide01Title,
  Slide03WhatIs,
  Slide04HowItWorks,
  Slide05HumanCost,
  Slide06Threat,
  Slide07Solutions,
  Slide08GenZ,
  Slide09Actions,
  Slide10Conclusion,
  Slide11Closing,
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, SLIDES.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = SLIDES[currentSlide];

  return (
    <>
      <ThreeBackground currentSlide={currentSlide} />
      
      {/* Slide Index Indicator */}
      <div style={{ position: "fixed", bottom: "1rem", right: "1rem", zIndex: 100, fontSize: "1rem", fontWeight: "bold" }}>
        {currentSlide + 1} / {SLIDES.length}
      </div>

      <AnimatePresence mode="wait">
        <CurrentSlideComponent key={currentSlide} />
      </AnimatePresence>
    </>
  );
}

export default App;
