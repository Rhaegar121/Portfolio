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
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1.5} position-y={0} rotation-y={0}>
      <ambientLight intensity={0.6} />
      <mesh castShadow receiveShadow scale={isMobile ? 2.5 : 2.3} >
        <sphereGeometry args={[1, 32.8, 32.8]} />
        <meshStandardMaterial
          // color='#e6f1ff'
          color='#d5e0f1'
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
        <Decal
          position={[0, 0, -1.3]}
          rotation={[0, Math.PI, 0]}
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
        <OrbitControls
          enableZoom={false}
          // autoRotate
          // autoRotateSpeed={2}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Ball imgUrl={icon} isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;