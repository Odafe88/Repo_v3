"use client";
import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import StarfieldScene from "./getStarField";

const Earth = () => {
  const earthRef = useRef();
  const cloudsRef = useRef();

  const earthTexture = useLoader(TextureLoader, "/assets/earthmap1k.jpg");
  const cloudsTexture = useLoader(TextureLoader, "/assets/earthcloudmap.jpg");

  // Add rotation to Earth and clouds
  useFrame(() => {
    if (earthRef.current) earthRef.current.rotation.y += 0.001;
    if (cloudsRef.current) cloudsRef.current.rotation.y += 0.0015; // Clouds rotate slightly faster
  });

  return (
    <group>
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial map={earthTexture} />
      </mesh>
      <mesh ref={cloudsRef} scale={[1.02, 1.02, 1.02]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial map={cloudsTexture} transparent opacity={0.2} />
      </mesh>
    </group>
  );
};

const ThreeScene = () => {
  return (
    <Canvas style={{ width: "100%", height: "100vh" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 0.5, 1.5]} />
      <Earth />
      <StarfieldScene />
    </Canvas>
  );
};

export default ThreeScene;
