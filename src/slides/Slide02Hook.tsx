import SlideTransition from "../components/SlideTransition";
import TextScramble from "../components/TextScramble";

export default function Slide02Hook() {
  return (
    <SlideTransition centered>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <TextScramble as="h2" text="BEFORE WE SAY ANYTHING ELSE..." />
        <video 
          className="brutalist-border" 
          src="/deepfake-example.mp4"
          controls
          playsInline
          style={{ width: "auto", maxWidth: "800px", height: "400px", background: "#000", marginTop: "2rem", objectFit: "cover" }}
        />
        <p style={{ marginTop: "2rem", fontSize: "1.5rem", textAlign: "center" }} className="accent-red">
          That video is completely fake.<br/>Made by an AI in under one hour.
        </p>
      </div>
    </SlideTransition>
  );
}
