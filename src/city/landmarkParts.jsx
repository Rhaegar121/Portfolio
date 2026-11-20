import { useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import { skipRaycast } from './materials';

export function NeonMaterial({ color }) {
  return <meshBasicMaterial color={color} toneMapped={false} fog={false} />;
}

NeonMaterial.propTypes = {
  color: PropTypes.string.isRequired,
};

export function ShellMaterial() {
  return <meshStandardMaterial color="#121826" roughness={0.62} metalness={0.28} />;
}

export function NeonSpine({
  position, height, color, thickness,
}) {
  return (
    <mesh position={position} raycast={skipRaycast}>
      <boxGeometry args={[thickness, height, thickness]} />
      <NeonMaterial color={color} />
    </mesh>
  );
}

NeonSpine.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  height: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  thickness: PropTypes.number.isRequired,
};

export function Antenna({ position, height, color }) {
  const arm = Math.max(0.72, height * 0.62);
  return (
    <group position={position}>
      <mesh position={[0, height / 2, 0]} raycast={skipRaycast}>
        <cylinderGeometry args={[0.045, 0.07, height, 6]} />
        <NeonMaterial color={color} />
      </mesh>
      <mesh position={[0, height * 0.76, 0]} raycast={skipRaycast}>
        <boxGeometry args={[arm, 0.05, 0.05]} />
        <NeonMaterial color={color} />
      </mesh>
      <mesh position={[0, height * 0.76, 0]} raycast={skipRaycast}>
        <boxGeometry args={[0.05, 0.05, arm * 0.7]} />
        <NeonMaterial color={color} />
      </mesh>
    </group>
  );
}

Antenna.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  height: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export function Beacon({
  position, color, active, reducedMotion,
}) {
  const material = useRef(null);
  useFrame((state) => {
    if (reducedMotion || !material.current) return;
    const speed = active ? 4.2 : 2.2;
    const base = active ? 0.86 : 0.64;
    const amp = active ? 0.14 : 0.1;
    material.current.opacity = base + Math.sin(state.clock.elapsedTime * speed) * amp;
  });

  return (
    <mesh position={position} raycast={skipRaycast}>
      <sphereGeometry args={[0.16, 12, 12]} />
      <meshBasicMaterial
        ref={material}
        color={color}
        transparent
        opacity={0.9}
        toneMapped={false}
        fog={false}
      />
    </mesh>
  );
}

Beacon.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  reducedMotion: PropTypes.bool.isRequired,
};

export function Dish({ position, color }) {
  return (
    <group position={position} rotation={[0.62, 0.7, 0]}>
      <mesh raycast={skipRaycast}>
        <circleGeometry args={[0.68, 20]} />
        <meshBasicMaterial color="#0b101a" side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0, 0.02]} raycast={skipRaycast}>
        <ringGeometry args={[0.52, 0.68, 20]} />
        <meshBasicMaterial color={color} side={THREE.DoubleSide} toneMapped={false} fog={false} />
      </mesh>
      <mesh position={[0, 0, 0.2]} raycast={skipRaycast}>
        <sphereGeometry args={[0.07, 8, 8]} />
        <NeonMaterial color={color} />
      </mesh>
    </group>
  );
}

Dish.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.string.isRequired,
};

export function Buttress({
  position, height, color, outward,
}) {
  const width = 0.26;
  return (
    <group position={position}>
      <mesh raycast={skipRaycast}>
        <boxGeometry args={[width, height, 1.5]} />
        <ShellMaterial />
      </mesh>
      <mesh position={[(outward * width) / 2, 0, 0]} raycast={skipRaycast}>
        <boxGeometry args={[0.055, height * 0.9, 0.09]} />
        <NeonMaterial color={color} />
      </mesh>
    </group>
  );
}

Buttress.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  height: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  outward: PropTypes.oneOf([-1, 1]).isRequired,
};

export function Penthouse({
  y, size, height, color,
}) {
  return (
    <group position={[0, y + (height / 2), 0]}>
      <mesh raycast={skipRaycast}>
        <boxGeometry args={[size, height, size]} />
        <ShellMaterial />
      </mesh>
      <mesh position={[0, (height / 2) + 0.06, 0]} raycast={skipRaycast}>
        <boxGeometry args={[size * 0.88, 0.08, size * 0.88]} />
        <NeonMaterial color={color} />
      </mesh>
    </group>
  );
}

Penthouse.propTypes = {
  y: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export function SkyBridge({
  start, end, y, color,
}) {
  const dx = end[0] - start[0];
  const dz = end[1] - start[1];
  const length = Math.hypot(dx, dz);
  const yaw = Math.atan2(dx, dz);
  const width = 1.05;
  return (
    <group
      position={[(start[0] + end[0]) / 2, y, (start[1] + end[1]) / 2]}
      rotation={[0, yaw, 0]}
    >
      <mesh raycast={skipRaycast}>
        <boxGeometry args={[width, 0.16, length]} />
        <meshStandardMaterial color="#141b2c" roughness={0.46} metalness={0.42} />
      </mesh>
      {[-1, 1].map((side) => (
        <mesh key={side} position={[side * (width / 2 - 0.03), 0.2, 0]} raycast={skipRaycast}>
          <boxGeometry args={[0.07, 0.28, length]} />
          <NeonMaterial color={color} />
        </mesh>
      ))}
    </group>
  );
}

SkyBridge.propTypes = {
  start: PropTypes.arrayOf(PropTypes.number).isRequired,
  end: PropTypes.arrayOf(PropTypes.number).isRequired,
  y: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export function FacadeVideo({
  src, position, width, height, accent, reducedMotion,
}) {
  const media = useMemo(() => {
    const video = document.createElement('video');
    video.src = src;
    video.loop = true;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.autoplay = true;
    video.preload = 'auto';
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    const map = new THREE.VideoTexture(video);
    map.encoding = THREE.sRGBEncoding;
    map.minFilter = THREE.LinearFilter;
    map.magFilter = THREE.LinearFilter;
    map.generateMipmaps = false;
    return { video, map };
  }, [src]);

  useEffect(() => () => {
    media.video.pause();
    media.video.removeAttribute('src');
    media.video.load();
    media.map.dispose();
  }, [media]);

  useEffect(() => {
    const { video } = media;
    if (reducedMotion) {
      video.pause();
      return undefined;
    }
    let stopped = false;
    let resume;
    const start = () => {
      if (stopped) return;
      video.play().catch(() => {
        resume = () => {
          video.play().catch(() => {});
        };
        window.addEventListener('pointerdown', resume, { once: true });
      });
    };
    if (video.readyState >= 2) start();
    else video.addEventListener('loadeddata', start, { once: true });
    return () => {
      stopped = true;
      if (resume) window.removeEventListener('pointerdown', resume);
      video.removeEventListener('loadeddata', start);
      video.pause();
    };
  }, [media, reducedMotion]);

  return (
    <group position={position}>
      <mesh position={[0, 0, -0.04]} raycast={skipRaycast}>
        <planeGeometry args={[width + 0.1, height + 0.1]} />
        <meshBasicMaterial color={accent} toneMapped={false} fog={false} />
      </mesh>
      <mesh raycast={skipRaycast}>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial map={media.map} toneMapped={false} fog={false} />
      </mesh>
    </group>
  );
}

FacadeVideo.propTypes = {
  src: PropTypes.string.isRequired,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  accent: PropTypes.string.isRequired,
  reducedMotion: PropTypes.bool.isRequired,
};

export function TerminalScreen({
  position, rotation, color, width, height,
}) {
  return (
    <group position={position} rotation={rotation}>
      <mesh raycast={skipRaycast}>
        <planeGeometry args={[width + 0.34, height + 0.32]} />
        <meshBasicMaterial color="#070b14" />
      </mesh>
      <mesh position={[0, 0, 0.04]} raycast={skipRaycast}>
        <planeGeometry args={[width, height]} />
        <NeonMaterial color={color} />
      </mesh>
      {[-0.24, 0, 0.24].map((band) => (
        <mesh key={band} position={[0, band * height, 0.07]} raycast={skipRaycast}>
          <planeGeometry args={[width * 0.9, 0.045]} />
          <meshBasicMaterial color="#070b14" />
        </mesh>
      ))}
    </group>
  );
}

TerminalScreen.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  rotation: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export function LandingDeck({
  position, width, depth, color,
}) {
  const corners = [
    [-width / 2 + 0.42, -depth / 2 + 0.42],
    [width / 2 - 0.42, -depth / 2 + 0.42],
    [-width / 2 + 0.42, depth / 2 - 0.42],
    [width / 2 - 0.42, depth / 2 - 0.42],
  ];
  return (
    <group position={position}>
      <mesh raycast={skipRaycast}>
        <boxGeometry args={[width, 0.14, depth]} />
        <meshStandardMaterial color="#141b2c" roughness={0.42} metalness={0.4} />
      </mesh>
      <mesh position={[0, 0.08, depth / 2]} raycast={skipRaycast}>
        <boxGeometry args={[width, 0.045, 0.06]} />
        <NeonMaterial color={color} />
      </mesh>
      <mesh position={[0, 0.08, -depth / 2]} raycast={skipRaycast}>
        <boxGeometry args={[width, 0.045, 0.06]} />
        <NeonMaterial color={color} />
      </mesh>
      <mesh position={[width / 2, 0.08, 0]} raycast={skipRaycast}>
        <boxGeometry args={[0.06, 0.045, depth]} />
        <NeonMaterial color={color} />
      </mesh>
      <mesh position={[-width / 2, 0.08, 0]} raycast={skipRaycast}>
        <boxGeometry args={[0.06, 0.045, depth]} />
        <NeonMaterial color={color} />
      </mesh>
      {corners.map(([x, z]) => (
        <group key={`${x}:${z}`} position={[x, 0.48, z]}>
          <mesh raycast={skipRaycast}>
            <boxGeometry args={[0.12, 0.82, 0.12]} />
            <ShellMaterial />
          </mesh>
          <mesh position={[0, 0.48, 0]} raycast={skipRaycast}>
            <boxGeometry args={[0.2, 0.1, 0.2]} />
            <NeonMaterial color={color} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

LandingDeck.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  width: PropTypes.number.isRequired,
  depth: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export function Helipad({ position, color, radius }) {
  const leg = radius * 0.34;
  return (
    <group position={position}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} raycast={skipRaycast}>
        <ringGeometry args={[radius, radius + 0.16, 40]} />
        <meshBasicMaterial color={color} side={THREE.DoubleSide} toneMapped={false} fog={false} />
      </mesh>
      <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]} raycast={skipRaycast}>
        <planeGeometry args={[leg, 0.12]} />
        <NeonMaterial color={color} />
      </mesh>
      <mesh position={[-leg * 0.42, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]} raycast={skipRaycast}>
        <planeGeometry args={[0.12, leg * 0.85]} />
        <NeonMaterial color={color} />
      </mesh>
      <mesh position={[leg * 0.42, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]} raycast={skipRaycast}>
        <planeGeometry args={[0.12, leg * 0.85]} />
        <NeonMaterial color={color} />
      </mesh>
    </group>
  );
}

Helipad.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.string.isRequired,
  radius: PropTypes.number.isRequired,
};

export function TerracePost({ position, height, color }) {
  return (
    <group position={position}>
      <mesh raycast={skipRaycast}>
        <boxGeometry args={[0.28, height, 0.28]} />
        <ShellMaterial />
      </mesh>
      <mesh position={[0, (height / 2) + 0.1, 0]} raycast={skipRaycast}>
        <boxGeometry args={[0.4, 0.14, 0.4]} />
        <NeonMaterial color={color} />
      </mesh>
    </group>
  );
}

TerracePost.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  height: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export function StatusLamps({ lamps, color }) {
  return (
    <group>
      {lamps.map(([x, y, z]) => (
        <mesh key={`${x}:${y}:${z}`} position={[x, y, z]} raycast={skipRaycast}>
          <boxGeometry args={[0.22, 0.14, 0.22]} />
          <NeonMaterial color={color} />
        </mesh>
      ))}
    </group>
  );
}

StatusLamps.propTypes = {
  lamps: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  color: PropTypes.string.isRequired,
};
