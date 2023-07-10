// import React, { Suspense, useEffect, useState } from 'react';
// import { Canvas } from '@react-three/fiber';
// import {
//   Decal,
//   Float,
//   OrbitControls,
//   Preload,
//   useTexture,
// } from '@react-three/drei';
// import Loader from './Loader';

// const Ball = ({ imgUrl, isMobile }) => {
//   const [decal] = useTexture([imgUrl]);

//   return (
//     <Float speed={3} rotationIntensity={1} floatIntensity={2} position-y={0} rotation-y={0}>
//       <ambientLight intensity={0.3} />
//       <directionalLight position={[0, 0, 0.05]} />
//       <mesh castShadow receiveShadow scale={isMobile ? 2.5 : 2.3}>
//         <sphereGeometry args={[1, 32.8, 32.8]} />
//         <meshStandardMaterial
//           color="#d5e0f1"
//           polygonOffset
//           polygonOffsetFactor={-5}
//           flatShading
//         />
//         <Decal
//           position={[0, 0, 1.3]}
//           rotation={[0, 0, 0]}
//           scale={[0.95, 0.95, 0.95]}
//           map={decal}
//           flatShading
//         />
//         <Decal
//           position={[0, 0, -1.3]}
//           rotation={[0, Math.PI, 0]}
//           scale={[0.95, 0.95, 0.95]}
//           map={decal}
//           flatShading
//         />
//       </mesh>
//     </Float>
//   );
// };

// const BallCanvas = ({ icon }) => {
//   // const { gl } = useThree();
//   const [isMobile, setIsMobile] = useState(false);
//   // const canvasRef = useRef(null);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia('(min-width: 768px)');

//     setIsMobile(mediaQuery.matches);

//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     };

//     mediaQuery.addEventListener('change', handleMediaQueryChange);

//     return () => {
//       mediaQuery.removeEventListener('change', handleMediaQueryChange);
//     };
//   }, []);

//   // useEffect(() => {
//   //   const canvas = canvasRef.current;

//   //   const handleContextLost = (event) => {
//   //     console.warn("WebGL context lost.", event);
//   //   };

//   //   canvas.addEventListener("webglcontextlost", handleContextLost);

//   //   return () => {
//   //     canvas.removeEventListener("webglcontextlost", handleContextLost);
//   //   };
//   // }, []);

//   return (
//     <Canvas
//       frameloop="always"
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//       // onClean={() => {
//       //   // Release WebGL resources here
//       //   const renderer = gl.getContext().renderer;
//       //   renderer.dispose();
//       // }}
//     >
//       <Suspense fallback={<Loader />}>
//         <OrbitControls
//           enableZoom={false}
//           // autoRotate
//           // autoRotateSpeed={2}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Ball imgUrl={icon} isMobile={isMobile} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// const BallContainer = ({ technologies, stack }) => {
//   const filteredTechnologies = technologies.filter((technology) => technology.stack === stack);

//   return (
//     <>
//       {filteredTechnologies.map((technology) => (
//         <div key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </>
//   );
// };

// export default BallContainer;
