import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

interface Props {
  currentSlide: number;
}

export default function ThreeBackground({ currentSlide }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const meshRef = useRef<THREE.Points | null>(null);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // SCENE
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // CAMERA
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // GEOMETRY - Abstract Wireframe Points (distorted grid)
    const geometry = new THREE.BufferGeometry();
    const count = 1000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    // MATERIAL
    const material = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x7c1919, // Default to deep crimson flaw color
      transparent: true,
      opacity: 0.8,
    });
    
    const points = new THREE.Points(geometry, material);
    scene.add(points);
    meshRef.current = points;

    // ANIMATION LOOP
    const animate = () => {
      requestRef.current = requestAnimationFrame(animate);
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.001;
        meshRef.current.rotation.x += 0.0005;
      }
      renderer.render(scene, camera);
    };
    animate();

    // RESIZE
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener("resize", handleResize);
      if (rendererRef.current?.domElement && container) {
        container.removeChild(rendererRef.current.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  // React to slide changes
  useEffect(() => {
    if (!meshRef.current) return;
    
    const material = meshRef.current.material as THREE.PointsMaterial;
    
    // General background drift direction per slide progression.
    // Content moves uniformly from right to left so we complement that direction smoothly
    gsap.to(meshRef.current.rotation, {
      y: "+=0.6", 
      z: "+=0.1",
      duration: 2.5,
      ease: "power2.inOut"
    });

    let targetX = 0;
    let targetZ = 0;

    // Unique slow & smooth effects per slide
    switch (currentSlide) {
      case 0: // Intro
        gsap.to(material.color, { r: 0.04, g: 0.36, b: 0.21, duration: 2, ease: "power2.inOut" }); // Emerald
        targetZ = 2;
        break;
      case 1: // Hook
        gsap.to(material.color, { r: 0.48, g: 0.1, b: 0.1, duration: 2, ease: "power2.inOut" }); // Crimson
        gsap.to(meshRef.current.rotation, { x: "+=0.4", duration: 3, ease: "power3.inOut" });
        targetZ = -1;
        break;
      case 2: // Title
        targetX = -1;
        break;
      case 3: // What is
        targetZ = 1;
        break;
      case 4: // How it works
        gsap.to(meshRef.current.scale, { x: 1.1, y: 1.1, duration: 2.5, ease: "power2.inOut" });
        targetX = 1;
        break;
      case 5: // Human Cost
        gsap.to(meshRef.current.scale, { x: 1.0, y: 1.0, duration: 2.5, ease: "power2.inOut" });
        targetZ = 3;
        targetX = 0;
        break;
      case 6: // Threat
        gsap.to(meshRef.current.rotation, { x: "-=0.3", duration: 2.5, ease: "power2.inOut" });
        targetZ = 0;
        targetX = -1;
        break;
      case 7: // Solutions
        gsap.to(material.color, { r: 0.04, g: 0.36, b: 0.21, duration: 2.5, ease: "power2.inOut" }); // Emerald
        targetX = 1;
        break;
      case 8: // GenZ
        targetZ = -2;
        break;
      case 9: // Actions
        targetZ = 1;
        break;
      case 10: // Conclusion
        gsap.to(material.color, { r: 0.2, g: 0.2, b: 0.2, duration: 3, ease: "power2.inOut" }); // Neutral grey
        gsap.to(meshRef.current.rotation, { z: "+=1.5", duration: 4, ease: "power3.inOut" });
        targetZ = -2;
        break;
      case 11: // Closing
        gsap.to(material.color, { r: 0.48, g: 0.1, b: 0.1, duration: 2, ease: "power2.inOut" }); // Crimson
        targetZ = -6;
        break;
    }

    // Apply the position targets smoothly
    gsap.to(meshRef.current.position, {
      x: targetX,
      z: targetZ,
      duration: 2.5,
      ease: "power3.inOut"
    });

  }, [currentSlide]);

  return <div id="three-canvas-container" ref={containerRef} />;
}
