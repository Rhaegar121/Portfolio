import { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import { skipRaycast } from './materials';

const lampSpots = [
  [4.8, 12],
  [-4.8, 12],
  [4.8, 24],
  [-4.8, 24],
  [-12, 3.8],
  [12, 3.8],
  [-28, 3.8],
  [28, 3.8],
];

function createGroundTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const context = canvas.getContext('2d');
  context.fillStyle = '#0b101a';
  context.fillRect(0, 0, 512, 512);
  context.strokeStyle = 'rgba(90, 130, 180, 0.16)';
  context.lineWidth = 2;
  for (let line = 0; line <= 512; line += 32) {
    context.beginPath();
    context.moveTo(line, 0);
    context.lineTo(line, 512);
    context.stroke();
    context.beginPath();
    context.moveTo(0, line);
    context.lineTo(512, line);
    context.stroke();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(16, 16);
  texture.encoding = THREE.sRGBEncoding;
  return texture;
}

function StreetLamp({ position }) {
  return (
    <group position={[position[0], 0, position[1]]}>
      <mesh position={[0, 1.15, 0]} raycast={skipRaycast}>
        <cylinderGeometry args={[0.045, 0.065, 2.3, 6]} />
        <meshStandardMaterial color="#2c3648" roughness={0.55} metalness={0.45} />
      </mesh>
      <mesh position={[0, 2.4, 0]} raycast={skipRaycast}>
        <sphereGeometry args={[0.11, 10, 10]} />
        <meshBasicMaterial color="#ffb020" />
      </mesh>
    </group>
  );
}

StreetLamp.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
};

function CityGround({ quality }) {
  const groundTexture = useMemo(() => createGroundTexture(), []);
  const lamps = quality === 'lite' ? lampSpots.slice(0, 4) : lampSpots;
  const marks = useMemo(() => {
    const next = [];
    const step = quality === 'lite' ? 4.6 : 3.2;
    for (let z = 12; z <= 32; z += step) next.push({ position: [0, 0.08, z], rotation: 0 });
    for (let x = -30; x <= -10; x += step) next.push({ position: [x, 0.08, 0], rotation: Math.PI / 2 });
    for (let x = 10; x <= 30; x += step) next.push({ position: [x, 0.08, 0], rotation: Math.PI / 2 });
    return next;
  }, [quality]);

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow={false} raycast={skipRaycast}>
        <planeGeometry args={[150, 150]} />
        <meshStandardMaterial map={groundTexture} color="#9aa8be" roughness={0.92} metalness={0.04} />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]} raycast={skipRaycast}>
        <circleGeometry args={[9.2, 48]} />
        <meshStandardMaterial color="#12192a" roughness={0.42} metalness={0.48} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.045, 0]} raycast={skipRaycast}>
        <ringGeometry args={[7.6, 7.85, 48]} />
        <meshBasicMaterial color="#2ee9ff" side={THREE.DoubleSide} transparent opacity={0.85} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.046, 0]} raycast={skipRaycast}>
        <ringGeometry args={[4.3, 4.45, 40]} />
        <meshBasicMaterial color="#ff2ea6" side={THREE.DoubleSide} transparent opacity={0.7} />
      </mesh>

      {[
        { position: [0, 0.04, 22], args: [5.4, 28] },
        { position: [-20, 0.04, 0], args: [24, 5.4] },
        { position: [20, 0.04, 0], args: [24, 5.4] },
      ].map((road) => (
        <mesh key={road.position.join('-')} rotation={[-Math.PI / 2, 0, 0]} position={road.position} raycast={skipRaycast}>
          <planeGeometry args={road.args} />
          <meshStandardMaterial color="#0d121c" roughness={0.38} metalness={0.62} />
        </mesh>
      ))}

      {[
        { position: [2.75, 0.07, 22], args: [0.06, 0.05, 27], color: '#2ee9ff' },
        { position: [-2.75, 0.07, 22], args: [0.06, 0.05, 27], color: '#ff2ea6' },
        { position: [-20, 0.07, 2.75], args: [23, 0.05, 0.06], color: '#2ee9ff' },
        { position: [20, 0.07, -2.75], args: [23, 0.05, 0.06], color: '#ff2ea6' },
      ].map((curb) => (
        <mesh key={curb.position.join('-')} position={curb.position} raycast={skipRaycast}>
          <boxGeometry args={curb.args} />
          <meshBasicMaterial color={curb.color} />
        </mesh>
      ))}

      {marks.map((mark) => (
        <mesh
          key={`${mark.position[0]}-${mark.position[2]}`}
          position={mark.position}
          rotation={[0, mark.rotation, 0]}
          raycast={skipRaycast}
        >
          <boxGeometry args={[0.12, 0.02, 0.85]} />
          <meshBasicMaterial color="#c9842a" />
        </mesh>
      ))}

      {lamps.map((spot) => (
        <StreetLamp key={`${spot[0]}-${spot[1]}`} position={spot} />
      ))}
    </group>
  );
}

CityGround.propTypes = {
  quality: PropTypes.oneOf(['lite', 'full']).isRequired,
};

export default memo(CityGround);
