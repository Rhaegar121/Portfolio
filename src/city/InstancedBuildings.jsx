import {
  memo, useEffect, useLayoutEffect, useMemo, useRef,
} from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import { createBlocks } from './layout';
import { createFacadeMaterial } from './materials';

function InstancedBuildings({ quality }) {
  const bodyRef = useRef(null);
  const roofRef = useRef(null);
  const blocks = useMemo(() => createBlocks(quality), [quality]);
  const geometry = useMemo(() => new THREE.BoxGeometry(1, 1, 1), []);
  const roofGeometry = useMemo(() => new THREE.BoxGeometry(1, 1, 1), []);
  const material = useMemo(() => createFacadeMaterial('#ffffff'), []);
  const roofMaterial = useMemo(() => new THREE.MeshBasicMaterial({ color: '#ffffff' }), []);

  useEffect(() => () => {
    geometry.dispose();
    roofGeometry.dispose();
    material.dispose();
    roofMaterial.dispose();
  }, [geometry, roofGeometry, material, roofMaterial]);

  useLayoutEffect(() => {
    const body = bodyRef.current;
    const roof = roofRef.current;
    if (!body || !roof) return undefined;
    const dummy = new THREE.Object3D();
    const color = new THREE.Color();
    blocks.forEach((block, index) => {
      dummy.position.set(block.x, block.height / 2, block.z);
      dummy.scale.set(block.width, block.height, block.depth);
      dummy.rotation.set(0, 0, 0);
      dummy.updateMatrix();
      body.setMatrixAt(index, dummy.matrix);
      color.set(block.color);
      body.setColorAt(index, color);

      dummy.position.set(block.x, block.height + 0.08, block.z);
      dummy.scale.set(block.width * 0.82, 0.14, block.depth * 0.82);
      dummy.updateMatrix();
      roof.setMatrixAt(index, dummy.matrix);
      color.set(block.roof);
      roof.setColorAt(index, color);
    });
    body.instanceMatrix.needsUpdate = true;
    roof.instanceMatrix.needsUpdate = true;
    if (body.instanceColor) body.instanceColor.needsUpdate = true;
    if (roof.instanceColor) roof.instanceColor.needsUpdate = true;
    return undefined;
  }, [blocks]);

  return (
    <group key={quality}>
      <instancedMesh
        ref={bodyRef}
        args={[geometry, material, blocks.length]}
        frustumCulled={false}
      />
      <instancedMesh
        ref={roofRef}
        args={[roofGeometry, roofMaterial, blocks.length]}
        frustumCulled={false}
      />
    </group>
  );
}

InstancedBuildings.propTypes = {
  quality: PropTypes.oneOf(['lite', 'full']).isRequired,
};

export default memo(InstancedBuildings);
