import * as THREE from 'three';

export function skipRaycast() {
  return null;
}

/* Three.js expects this shader object to be edited in place. */
/* eslint-disable no-param-reassign */
function facadeShader(shader) {
  shader.uniforms.uWindowGain = { value: 0.72 };
  shader.vertexShader = `varying vec3 vCityWorld;\nvarying vec3 vCityNormal;\n${shader.vertexShader}`;
  shader.vertexShader = shader.vertexShader.replace(
    '#include <project_vertex>',
    `vec4 cityWorld = vec4(transformed, 1.0);
     #ifdef USE_INSTANCING
       cityWorld = instanceMatrix * cityWorld;
     #endif
     cityWorld = modelMatrix * cityWorld;
     vCityWorld = cityWorld.xyz;
     vCityNormal = normal;
     #include <project_vertex>`,
  );
  shader.fragmentShader = `varying vec3 vCityWorld;\nvarying vec3 vCityNormal;\nuniform float uWindowGain;\n${shader.fragmentShader}`;
  shader.fragmentShader = shader.fragmentShader.replace(
    '#include <emissivemap_fragment>',
    `#include <emissivemap_fragment>
     float band = fract(vCityWorld.y * 4.0);
     float bandOn = smoothstep(0.04, 0.07, band) * smoothstep(0.96, 0.92, band);
     float axis = abs(vCityNormal.x) > abs(vCityNormal.z) ? vCityWorld.z : vCityWorld.x;
     float column = fract(axis * 4.0);
     float columnOn = smoothstep(0.045, 0.08, column) * smoothstep(0.955, 0.91, column);
     float rowId = floor(vCityWorld.y * 4.0);
     float colId = floor(axis * 4.0);
     float hash = fract(sin(dot(vec2(colId, rowId), vec2(127.1, 311.7))) * 43758.5453);
     float lit = mix(0.7, 1.0, step(0.16, hash));
     float side = step(0.72, max(abs(vCityNormal.x), abs(vCityNormal.z)));
     vec3 cool = vec3(0.0, 0.012, 0.039);
     vec3 warm = vec3(0.0, 0.816, 1.0);
     vec3 lamp = mix(cool, warm, step(0.90, hash));
     totalEmissiveRadiance += lamp * bandOn * columnOn * lit * side * uWindowGain;`,
  );
}
/* eslint-enable no-param-reassign */

export function createFacadeMaterial(color = '#5d6d88') {
  const material = new THREE.MeshStandardMaterial({
    color,
    roughness: 0.84,
    metalness: 0.12,
    emissive: new THREE.Color('#000000'),
    emissiveIntensity: 1,
  });
  material.customProgramCacheKey = () => 'city-facade-v3';
  material.onBeforeCompile = (shader) => {
    material.userData.shader = shader;
    facadeShader(shader);
  };
  return material;
}

export function windowGain(active, hovered) {
  if (active) return 1.45;
  if (hovered) return 1.1;
  return 0.7;
}
