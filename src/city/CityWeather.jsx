import { useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import { skipRaycast } from './materials';

const AREA_X = 96;
const AREA_Z = 100;
const CEILING = 28;

function placeDrop(values, index, y) {
  const x = (Math.random() - 0.5) * AREA_X;
  const z = (Math.random() - 0.5) * AREA_Z + 2;
  const length = 0.65 + Math.random() * 0.85;
  const lean = -0.16 + Math.random() * 0.06;
  const next = values;
  next[index * 6] = x;
  next[index * 6 + 1] = y;
  next[index * 6 + 2] = z;
  next[index * 6 + 3] = x + lean;
  next[index * 6 + 4] = y - length;
  next[index * 6 + 5] = z + lean * 0.25;
}

function createRain(count) {
  const positions = new Float32Array(count * 6);
  const speeds = new Float32Array(count);
  const geometry = new THREE.BufferGeometry();

  for (let index = 0; index < count; index += 1) {
    placeDrop(positions, index, Math.random() * CEILING);
    speeds[index] = 6.5 + Math.random() * 4.5;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  return { geometry, speeds };
}

function CityRain({ quality }) {
  const count = quality === 'lite' ? 240 : 480;
  const rain = useMemo(() => createRain(count), [count]);

  useEffect(() => () => rain.geometry.dispose(), [rain]);

  useFrame((_, delta) => {
    const { position } = rain.geometry.attributes;
    const { array: values } = position;
    const step = Math.min(delta, 0.05);
    for (let index = 0; index < count; index += 1) {
      const fall = rain.speeds[index] * step;
      const drift = step * 0.55;
      values[index * 6] -= drift;
      values[index * 6 + 1] -= fall;
      values[index * 6 + 3] -= drift;
      values[index * 6 + 4] -= fall;
      if (values[index * 6 + 4] < 0) placeDrop(values, index, CEILING + Math.random() * 8);
    }
    position.needsUpdate = true;
  });

  return (
    <lineSegments geometry={rain.geometry} frustumCulled={false} raycast={skipRaycast}>
      <lineBasicMaterial color="#d7e7ff" transparent opacity={0.46} depthWrite={false} />
    </lineSegments>
  );
}

CityRain.propTypes = {
  quality: PropTypes.oneOf(['lite', 'full']).isRequired,
};

function flashIntensity(age) {
  if (age < 0.05) return 16;
  if (age < 0.12) return 2.2;
  if (age < 0.2) return 10;
  if (age < 0.42) return 10 * (1 - (age - 0.2) / 0.22);
  return 0;
}

function Thunder({ reducedMotion, onStrike }) {
  const bolt = useRef(null);
  const nextAt = useRef(0);
  const startedAt = useRef(-1);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (nextAt.current === 0) nextAt.current = time + 2.2 + Math.random() * 1.8;

    if (bolt.current) {
      const age = startedAt.current < 0 ? 1 : time - startedAt.current;
      const strength = reducedMotion ? 0.35 : 1;
      bolt.current.intensity = flashIntensity(age) * strength;
    }

    if (time < nextAt.current) return;
    nextAt.current = time + 8 + Math.random() * 7;
    startedAt.current = time;
    if (bolt.current) {
      bolt.current.position.set(
        (Math.random() - 0.5) * 40,
        24 + Math.random() * 8,
        -6 + (Math.random() - 0.5) * 28,
      );
    }
    onStrike();
  });

  return (
    <pointLight
      ref={bolt}
      position={[0, 30, -8]}
      color="#e7f1ff"
      intensity={0}
      distance={90}
      decay={2}
    />
  );
}

Thunder.propTypes = {
  reducedMotion: PropTypes.bool.isRequired,
  onStrike: PropTypes.func.isRequired,
};

export default function CityWeather({ quality, reducedMotion, onStrike }) {
  return (
    <>
      <CityRain quality={quality} />
      <Thunder reducedMotion={reducedMotion} onStrike={onStrike} />
    </>
  );
}

CityWeather.propTypes = {
  quality: PropTypes.oneOf(['lite', 'full']).isRequired,
  reducedMotion: PropTypes.bool.isRequired,
  onStrike: PropTypes.func.isRequired,
};
