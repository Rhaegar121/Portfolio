import { locations } from '../constants/cityLocations';

export const roadBoxes = [
  {
    x: 0, z: 22, halfX: 4.3, halfZ: 15.5,
  },
  {
    x: -20, z: 0, halfX: 13.5, halfZ: 4.3,
  },
  {
    x: 20, z: 0, halfX: 13.5, halfZ: 4.3,
  },
];

function createRandom(seed) {
  let value = seed % 2147483647;
  if (value <= 0) value += 2147483646;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

export function isBlocked(x, z) {
  if (Math.hypot(x, z) < 10) return true;
  if (z > 10 && Math.abs(x) < 11) return true;
  const onRoad = roadBoxes.some((road) => (
    Math.abs(x - road.x) < road.halfX && Math.abs(z - road.z) < road.halfZ
  ));
  if (onRoad) return true;
  return locations.some((location) => {
    const [lx, , lz] = location.position;
    return Math.hypot(lx - x, lz - z) < 8;
  });
}

function bodyColor(rand) {
  const roll = rand();
  if (roll > 0.92) return '#261830';
  if (roll > 0.74) return '#1a2742';
  if (roll > 0.48) return '#171e30';
  return '#121826';
}

function roofColor(rand) {
  const roll = rand();
  if (roll > 0.9) return '#ff2ea6';
  if (roll > 0.8) return '#2ee9ff';
  if (roll > 0.72) return '#ffb020';
  if (roll > 0.66) return '#8b7cff';
  return '#2a3348';
}

export function createBlocks(quality) {
  const rand = createRandom(1402);
  const blocks = [];
  const limit = quality === 'lite' ? 32 : 70;
  const step = quality === 'lite' ? 8.4 : 6.6;

  for (let x = -34; x <= 34; x += step) {
    for (let z = -34; z <= 34; z += step) {
      if (blocks.length < limit) {
        const px = x + (rand() - 0.5) * 0.8;
        const pz = z + (rand() - 0.5) * 0.8;
        if (!isBlocked(px, pz)) {
          const tall = rand() > 0.84;
          blocks.push({
            x: px,
            z: pz,
            width: 2.15 + rand() * 1.45,
            depth: 2.15 + rand() * 1.45,
            height: tall ? 8 + rand() * 9 : 2.3 + rand() * 4.8,
            color: bodyColor(rand),
            roof: roofColor(rand),
          });
        }
      }
    }
  }

  if (quality === 'full') {
    for (let index = 0; index < 18; index += 1) {
      const angle = (index / 18) * Math.PI * 2;
      const x = Math.cos(angle) * 50;
      const z = Math.sin(angle) * 50;
      if (z < 24) {
        blocks.push({
          x,
          z,
          width: 3.4 + (index % 3) * 0.55,
          depth: 3.4 + ((index + 1) % 3) * 0.55,
          height: 15 + (index % 5) * 3.4,
          color: '#101726',
          roof: index % 2 === 0 ? '#2ee9ff' : '#ff2ea6',
        });
      }
    }
  }

  return blocks;
}
