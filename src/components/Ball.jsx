import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

const Ball = ({imgUrl, isMobile}) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={0.75} rotationIntensity={0.5} floatIntensity={1.5}>
      <ambientLight intensity={0.6} />
      <mesh castShadow receiveShadow scale={isMobile ? 2.5 : 2.2} >
        <sphereGeometry args={[1, 32.8, 32.8]} />
        <meshStandardMaterial
          color='#e6f1ff'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1.3]}
          rotation={[0, 0, 0]}
          scale={[0.95, 0.95, 0.95]}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;