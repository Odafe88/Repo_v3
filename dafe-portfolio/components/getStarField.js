"use client";
import React, { useMemo } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function randomSpherePoint() {
  const radius = Math.random() * 25 + 25;
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const x = radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.sin(phi) * Math.sin(theta);
  const z = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

const Starfield = ({ numStars = 500 }) => {
  const [positions, colors] = useMemo(() => {
    const positions = [];
    const colors = [];
    for (let i = 0; i < numStars; i++) {
      const pos = randomSpherePoint();
      const hue = 0.6;
      const col = new THREE.Color().setHSL(hue, 0.2, Math.random());
      positions.push(pos.x, pos.y, pos.z);
      colors.push(col.r, col.g, col.b);
    }
    return [new Float32Array(positions), new Float32Array(colors)];
  }, [numStars]);

  // Use useLoader to load the texture properly
  const texture = useLoader(THREE.TextureLoader, '/assets/circle.png');

  return (
    <Points positions={positions} colors={colors}>
      <PointMaterial
        size={0.2}
        vertexColors
        map={texture} // Use the texture loaded by useLoader
      />
    </Points>
  );
};

const StarfieldScene = () => {
  return (
    <Canvas style={{ width: '100%', height: '100vh' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 0.5, 1.5]} />
      <Starfield />
    </Canvas>
  );
};

export default StarfieldScene;
