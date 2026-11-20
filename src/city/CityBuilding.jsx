import {
  useEffect, useLayoutEffect, useMemo, useRef,
} from 'react';
import { useFrame } from '@react-three/fiber';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import { createFacadeMaterial, skipRaycast, windowGain } from './materials';

function edgeOpacity(active, hovered) {
  if (active) return 1;
  if (hovered) return 0.74;
  return 0.4;
}

export default function CityBuilding({
  width,
  height,
  depth,
  accent,
  active,
  hovered,
  reducedMotion,
}) {
  const material = useMemo(() => createFacadeMaterial(), []);
  const edgeMaterial = useRef(null);
  const edgeSeeded = useRef(false);
  const edges = useMemo(() => {
    const box = new THREE.BoxGeometry(width, height, depth);
    const geometry = new THREE.EdgesGeometry(box);
    box.dispose();
    return geometry;
  }, [width, height, depth]);

  useEffect(() => () => {
    material.dispose();
    edges.dispose();
  }, [material, edges]);

  useLayoutEffect(() => {
    if (!edgeMaterial.current) return;
    if (reducedMotion || !edgeSeeded.current) {
      edgeMaterial.current.opacity = edgeOpacity(active, hovered);
      edgeSeeded.current = true;
    }
  }, [active, hovered, reducedMotion]);

  useFrame(() => {
    const { shader } = material.userData;
    if (shader) {
      const target = windowGain(active, hovered);
      const uniform = shader.uniforms.uWindowGain;
      if (Math.abs(uniform.value - target) >= 0.015) {
        uniform.value = reducedMotion ? target : uniform.value + (target - uniform.value) * 0.14;
      }
    }
    if (!edgeMaterial.current || reducedMotion) return;
    const targetOpacity = edgeOpacity(active, hovered);
    const { opacity } = edgeMaterial.current;
    if (Math.abs(opacity - targetOpacity) < 0.012) return;
    edgeMaterial.current.opacity = opacity + (targetOpacity - opacity) * 0.16;
  });

  return (
    <group position={[0, height / 2, 0]}>
      <mesh material={material} raycast={skipRaycast}>
        <boxGeometry args={[width, height, depth]} />
      </mesh>
      <lineSegments geometry={edges} raycast={skipRaycast}>
        <lineBasicMaterial ref={edgeMaterial} color={accent} transparent />
      </lineSegments>
      <mesh position={[0, (height / 2) + 0.07, 0]} raycast={skipRaycast}>
        <boxGeometry args={[width * 0.92, 0.08, depth * 0.92]} />
        <meshBasicMaterial color={accent} toneMapped={false} fog={false} />
      </mesh>
    </group>
  );
}

CityBuilding.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  depth: PropTypes.number.isRequired,
  accent: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  hovered: PropTypes.bool.isRequired,
  reducedMotion: PropTypes.bool.isRequired,
};
