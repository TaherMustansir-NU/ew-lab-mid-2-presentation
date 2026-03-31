import SlideTransition from "../components/SlideTransition";
import TextScramble from "../components/TextScramble";

export default function Slide03WhatIs() {
  return (
    <SlideTransition centered={false}>
      <TextScramble
        as="h2"
        text="WHAT IS A DEEPFAKE?"
        style={{ marginBottom: "3rem" }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          height: "100%",
        }}
      >
        <div
          className="brutalist-card"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3 style={{ marginBottom: "1rem" }}>REAL FACE / VOICE</h3>
          <div
            className="brutalist-border"
            style={{ width: "200px", height: "200px", background: "#ccc" }}
          >
            <img
              src="/original.png"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        <div
          className="brutalist-card"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "var(--color-flaw-light)",
          }}
        >
          <h3 className="accent-red" style={{ marginBottom: "1rem" }}>
            AI-GENERATED FAKE
          </h3>
          <div
            className="brutalist-border"
            style={{
              width: "200px",
              height: "200px",
              background: "#111",
              border: "4px solid var(--color-flaw-red)",
            }}
          >
            <img
              src="/fake.png"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      <p style={{ marginTop: "3rem", fontSize: "1.5rem", maxWidth: "800px" }}>
        A piece of media where a person's face or voice has been replaced by{" "}
        <span className="accent-red">artificial intelligence</span> to look and
        sound completely real.
      </p>
    </SlideTransition>
  );
}
