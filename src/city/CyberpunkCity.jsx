import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import PropTypes from 'prop-types';
import { locations } from '../constants/cityLocations';
import CityCamera from './CityCamera';
import CityGround from './CityGround';
import CityWeather from './CityWeather';
import InstancedBuildings from './InstancedBuildings';
import PortfolioLocation from './PortfolioLocation';

function CityLights({ reducedMotion, quality, raining }) {
  const cyan = useRef(null);
  const magenta = useRef(null);

  useFrame((state) => {
    if (reducedMotion || !cyan.current || !magenta.current) return;
    const time = state.clock.elapsedTime;
    cyan.current.intensity = 1.7 + Math.sin(time * 1.2) * 0.18;
    magenta.current.intensity = 1.35 + Math.sin(time * 1.05 + 1) * 0.15;
  });

  return (
    <>
      <ambientLight intensity={raining ? 0.16 : 0.24} />
      <hemisphereLight args={[raining ? '#1c3358' : '#23406f', '#140910', raining ? 0.28 : 0.38]} />
      <directionalLight
        position={[24, 36, 16]}
        intensity={raining ? 0.26 : 0.42}
        color={raining ? '#b7c8e4' : '#d5e2ff'}
      />
      <pointLight ref={cyan} position={[0, 16, -16]} color="#2ee9ff" intensity={1.7} distance={36} decay={2} />
      <pointLight ref={magenta} position={[-16, 8, 6]} color="#ff2ea6" intensity={1.35} distance={30} decay={2} />
      {quality === 'full' && (
        <pointLight position={[16, 7, 6]} color="#8b7cff" intensity={1.05} distance={26} decay={2} />
      )}
      <pointLight position={[0, 5, 10]} color="#ffb020" intensity={0.65} distance={34} decay={2} />
    </>
  );
}

CityLights.propTypes = {
  reducedMotion: PropTypes.bool.isRequired,
  quality: PropTypes.oneOf(['lite', 'full']).isRequired,
  raining: PropTypes.bool.isRequired,
};

function CityDust() {
  const points = useRef(null);
  const positions = useMemo(() => {
    const count = 140;
    const values = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      values[index * 3] = (Math.sin(index * 12.9898) * 0.5) * 70;
      values[index * 3 + 1] = (index % 20) * 0.45 + 0.4;
      values[index * 3 + 2] = (Math.cos(index * 78.233) * 0.5) * 70;
    }
    return values;
  }, []);

  useFrame((_, delta) => {
    if (points.current) points.current.rotation.y += delta * 0.012;
  });

  return (
    <group ref={points}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#c6ecff"
          size={0.045}
          sizeAttenuation
          depthWrite={false}
          opacity={0.32}
        />
      </Points>
    </group>
  );
}

export default function CyberpunkCity({
  quality,
  activeId,
  hoveredId,
  reducedMotion,
  raining,
  onStrike,
  onSelect,
  onHover,
}) {
  const focus = locations.find((location) => location.id === activeId) || null;
  const sky = raining ? '#101820' : '#070b14';
  const fogNear = quality === 'lite' ? 20 : 28;
  const fogFar = quality === 'lite' ? 68 : 98;

  return (
    <>
      <color attach="background" args={[sky]} />
      <fog attach="fog" args={[sky, raining ? fogNear * 0.82 : fogNear, raining ? fogFar * 0.86 : fogFar]} />
      <CityCamera focus={focus} reducedMotion={reducedMotion} allowIdle={quality === 'full'} />
      <CityLights reducedMotion={reducedMotion} quality={quality} raining={raining} />
      {raining && (
        <CityWeather quality={quality} reducedMotion={reducedMotion} onStrike={onStrike} />
      )}
      <CityGround quality={quality} />
      <InstancedBuildings quality={quality} />
      {locations.map((location) => (
        <PortfolioLocation
          key={location.id}
          location={location}
          active={activeId === location.id}
          hovered={hoveredId === location.id}
          reducedMotion={reducedMotion}
          onSelect={onSelect}
          onHover={onHover}
        />
      ))}
      {quality === 'full' && !reducedMotion && <CityDust />}
    </>
  );
}

CyberpunkCity.propTypes = {
  quality: PropTypes.oneOf(['lite', 'full']).isRequired,
  activeId: PropTypes.string,
  hoveredId: PropTypes.string,
  reducedMotion: PropTypes.bool.isRequired,
  raining: PropTypes.bool,
  onStrike: PropTypes.func,
  onSelect: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
};

CyberpunkCity.defaultProps = {
  activeId: null,
  hoveredId: null,
  raining: false,
  onStrike: () => {},
};
