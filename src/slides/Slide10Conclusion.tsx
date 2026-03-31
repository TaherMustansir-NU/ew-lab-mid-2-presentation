import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import SlideTransition from "../components/SlideTransition";
import TextScramble from "../components/TextScramble";

export default function Slide10Conclusion() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    gsap.from(".split-pane", {
      width: "0%",
      duration: 1.5,
      stagger: 0.5,
      ease: "power4.inOut"
    });
  }, { scope: containerRef });

  return (
    <SlideTransition centered={false}>
      <div ref={containerRef} style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
        
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <TextScramble as="h2" text="IT IS A MIRROR" />
        </div>
        <p style={{ textAlign: "center", fontSize: "1.5rem", marginBottom: "3rem" }}>And it reflects exactly what we choose to do with it.</p>
        
        <div style={{ display: "flex", flexGrow: 1, gap: "1rem" }}>
          
          <div className="split-pane brutalist-border" style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "var(--color-benefit-green)", color: "var(--color-bg)" }}>
            <h1 style={{ margin: 0 }}>TEACH</h1>
            <h1 style={{ margin: 0 }}>CREATE</h1>
            <h1 style={{ margin: 0 }}>HEAL</h1>
          </div>
          
          <div className="split-pane brutalist-border" style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "var(--color-flaw-red)", color: "var(--color-bg)" }}>
            <h1 style={{ margin: 0 }}>DIVIDE</h1>
            <h1 style={{ margin: 0 }}>DECEIVE</h1>
            <h1 style={{ margin: 0 }}>DESTROY</h1>
          </div>
          
        </div>
        
        <h3 style={{ textAlign: "center", marginTop: "3rem", fontSize: "3rem" }}>THAT CHOICE BELONGS TO US.</h3>
      </div>
    </SlideTransition>
  );
}
