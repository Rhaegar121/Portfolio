import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import Loader from "./Loader";

const Ball = ({imgUrl, isMobile}) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={2} position-y={0} rotation-y={0}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, 0, 0.05]} />
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
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
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

const ItemsPerPage = 4; // Define the number of items to display per page

const BallContainer = ({ technologies, currentPage }) => {
  const start = (currentPage - 1) * ItemsPerPage;
  const end = currentPage * ItemsPerPage;

  const visibleTechnologies = technologies.slice(start, end);

  return (
    <>
      {visibleTechnologies.map((technology) => (
        <div key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </>
  );
};

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination">
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={pageNumber === currentPage ? "active" : ""}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export { BallContainer, Pagination };