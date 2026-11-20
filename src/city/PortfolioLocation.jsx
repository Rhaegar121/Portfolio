import { memo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import landmarks from './landmarks';
import NeonSign from './NeonSign';
import { skipRaycast } from './materials';

function GroundRing({ color, active, reducedMotion }) {
  const ring = useRef(null);
  useFrame((state) => {
    if (!ring.current) return;
    const pulse = reducedMotion ? 0.75 : 0.55 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    ring.current.material.opacity = active ? 0.95 : pulse;
  });

  return (
    <mesh ref={ring} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.09, 0]} raycast={skipRaycast}>
      <ringGeometry args={[3.15, 3.42, 40]} />
      <meshBasicMaterial color={color} transparent opacity={0.75} side={THREE.DoubleSide} />
    </mesh>
  );
}

GroundRing.propTypes = {
  color: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  reducedMotion: PropTypes.bool.isRequired,
};

function PortfolioLocation({
  location,
  active,
  hovered,
  reducedMotion,
  onSelect,
  onHover,
}) {
  const Landmark = landmarks[location.id];
  const shared = {
    accent: location.color,
    active,
    hovered,
    reducedMotion,
  };
  const focused = active || hovered;
  const lightHeight = Math.min(location.signHeight * 0.45, 9);

  return (
    <group position={location.position}>
      <Landmark {...shared} />
      {focused && (
        <pointLight
          position={[0, lightHeight, 4.6]}
          color={location.color}
          intensity={active ? 1.65 : 0.85}
          distance={22}
          decay={2}
        />
      )}
      <NeonSign text={location.sign} color={location.color} position={[0, location.signHeight, 0]} />
      <GroundRing color={location.color} active={active} reducedMotion={reducedMotion} />
      <mesh
        position={[0, location.hitSize[1] / 2, 0]}
        onClick={(event) => {
          event.stopPropagation();
          onSelect(location.id);
        }}
        onPointerEnter={(event) => {
          event.stopPropagation();
          onHover(location.id, true);
        }}
        onPointerLeave={(event) => {
          event.stopPropagation();
          onHover(location.id, false);
        }}
      >
        <boxGeometry args={location.hitSize} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>
    </group>
  );
}

PortfolioLocation.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.string.isRequired,
    sign: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    signHeight: PropTypes.number.isRequired,
    position: PropTypes.arrayOf(PropTypes.number).isRequired,
    hitSize: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  active: PropTypes.bool.isRequired,
  hovered: PropTypes.bool.isRequired,
  reducedMotion: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
};

export default memo(PortfolioLocation);
