import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

interface Props {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  style?: React.CSSProperties;
}

gsap.registerPlugin(useGSAP);

export default function TextScramble({ text, as: Component = "span", className = "", style }: Props) {
  const textRef = useRef<any>(null);

  useGSAP(() => {
    if (!textRef.current) return;

    const chars = "!<>-_\\\\/[]{}—=+*^?#________";
    let frame = 0;
    const duration = 40; // frames
    
    // Original effect custom implementation using GSAP ticker
    const tick = () => {
      frame++;
      let output = "";
      
      const progress = frame / duration;
      
      for (let i = 0; i < text.length; i++) {
        if (progress >= 1 || Math.random() < progress) {
          output += text[i];
        } else {
          output += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      
      if (textRef.current) {
          textRef.current.innerText = output;
      }
      
      if (frame < duration) {
        requestAnimationFrame(tick);
      }
    };
    
    const call = gsap.delayedCall(0.1, () => {
      requestAnimationFrame(tick);
    });

    return () => {
      call.kill();
    };
  }, [text]);

  return <Component className={`font-mono ${className}`} style={style} ref={textRef}>{text}</Component>;
}
