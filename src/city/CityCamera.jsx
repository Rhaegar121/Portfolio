import {
  useEffect, useLayoutEffect, useRef, useState,
} from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import { overviewCamera } from '../constants/cityLocations';

const overviewPosition = new THREE.Vector3(...overviewCamera.position);
const overviewLook = new THREE.Vector3(...overviewCamera.lookAt);

export default function CityCamera({ focus, reducedMotion, allowIdle }) {
  const controls = useRef(null);
  const { camera, gl } = useThree();
  const desired = useRef(overviewPosition.clone());
  const look = useRef(overviewLook.clone());
  const userMoved = useRef(false);
  const unlockQueued = useRef(false);
  const idle = useRef(0);
  const pointer = useRef({ x: 0, y: 0 });
  const [locked, setLocked] = useState(true);
  const posed = useRef(false);

  useLayoutEffect(() => {
    if (posed.current || !controls.current) return;
    controls.current.target.copy(look.current);
    controls.current.update();
    posed.current = true;
  }, [camera]);

  useEffect(() => {
    const nextPosition = focus ? focus.camera : overviewCamera.position;
    const nextLook = focus ? focus.lookAt : overviewCamera.lookAt;
    desired.current.set(nextPosition[0], nextPosition[1], nextPosition[2]);
    look.current.set(nextLook[0], nextLook[1], nextLook[2]);
    userMoved.current = false;
    unlockQueued.current = false;
    idle.current = 0;
    setLocked(true);
  }, [focus]);

  useEffect(() => {
    const element = gl.domElement;
    const onMove = (event) => {
      const rect = element.getBoundingClientRect();
      pointer.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.current.y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    };
    element.addEventListener('pointermove', onMove);
    return () => element.removeEventListener('pointermove', onMove);
  }, [gl]);

  useFrame((_, delta) => {
    if (!controls.current) return;
    if (locked) {
      const alpha = reducedMotion ? 1 : 1 - Math.exp(-delta * 2.5);
      camera.position.lerp(desired.current, alpha);
      controls.current.target.lerp(look.current, alpha);
      controls.current.update();
      const positionArrived = camera.position.distanceTo(desired.current) < 0.2;
      const aimArrived = controls.current.target.distanceTo(look.current) < 0.2;
      if (positionArrived && aimArrived && !unlockQueued.current) {
        unlockQueued.current = true;
        setLocked(false);
      }
      return;
    }
    if (!allowIdle || focus || reducedMotion || userMoved.current) return;
    idle.current += delta * 0.18;
    const sway = Math.sin(idle.current);
    camera.position.x = desired.current.x + sway * 1.05 + pointer.current.x * 0.7;
    camera.position.y = desired.current.y + Math.sin(idle.current * 0.8) * 0.28;
    camera.position.z = desired.current.z + Math.cos(idle.current) * 0.45;
    controls.current.target.set(
      look.current.x + pointer.current.x * 1.8,
      look.current.y,
      look.current.z + pointer.current.y * 0.8,
    );
    controls.current.update();
  });

  return (
    <OrbitControls
      ref={controls}
      enabled={!locked}
      enablePan={false}
      enableDamping={!reducedMotion}
      dampingFactor={0.08}
      rotateSpeed={0.65}
      zoomSpeed={0.7}
      maxPolarAngle={Math.PI / 2.08}
      minPolarAngle={0.45}
      minDistance={9}
      maxDistance={78}
      onStart={() => {
        userMoved.current = true;
      }}
    />
  );
}

CityCamera.propTypes = {
  focus: PropTypes.shape({
    camera: PropTypes.arrayOf(PropTypes.number).isRequired,
    lookAt: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
  reducedMotion: PropTypes.bool.isRequired,
  allowIdle: PropTypes.bool.isRequired,
};

CityCamera.defaultProps = {
  focus: null,
};
