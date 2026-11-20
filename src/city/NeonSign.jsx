import { useEffect, useMemo } from 'react';
import { Billboard } from '@react-three/drei';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import { skipRaycast } from './materials';

function paintSign(canvas, text, color) {
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = 'rgba(6, 10, 18, 0.82)';
  context.fillRect(16, 18, canvas.width - 32, canvas.height - 36);
  context.strokeStyle = color;
  context.lineWidth = 4;
  context.strokeRect(16, 18, canvas.width - 32, canvas.height - 36);
  context.font = '600 68px "Montserrat Alternates", sans-serif';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillStyle = color;
  context.fillText(text, canvas.width / 2, canvas.height / 2 - 2);
}

function createSignTexture(text, color) {
  const canvas = document.createElement('canvas');
  canvas.width = 640;
  canvas.height = 160;
  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = false;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.encoding = THREE.sRGBEncoding;
  paintSign(canvas, text, color);
  return texture;
}

export default function NeonSign({ text, color, position }) {
  const texture = useMemo(() => createSignTexture(text, color), [text, color]);

  useEffect(() => () => texture.dispose(), [texture]);

  useEffect(() => {
    let cancel = false;
    const draw = () => {
      if (cancel) return;
      paintSign(texture.image, text, color);
      texture.needsUpdate = true;
    };
    if (document.fonts && document.fonts.load) {
      document.fonts.load('600 68px "Montserrat Alternates"').then(draw).catch(() => {
        /* the canvas already has a fallback font */
      });
    }
    return () => {
      cancel = true;
    };
  }, [texture, text, color]);

  return (
    <Billboard position={position}>
      <mesh raycast={skipRaycast}>
        <planeGeometry args={[4.4, 1.05]} />
        <meshBasicMaterial
          map={texture}
          transparent
          depthWrite={false}
          toneMapped={false}
          fog={false}
        />
      </mesh>
    </Billboard>
  );
}

NeonSign.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
};
