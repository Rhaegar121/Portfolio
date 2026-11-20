import {
  Suspense, useEffect, useMemo, useRef,
} from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import { clone as cloneSkinned } from 'three/examples/jsm/utils/SkeletonUtils';
import helicopterModel from '../assets/3Dmodels/helicopter.glb';
import profileReel1 from '../assets/video/neon4.mp4';
import profileReel2 from '../assets/video/neon3.mp4';
import projectReel from '../assets/video/neon1.mp4';
import experienceReel from '../assets/video/neon5.mp4';
import CityBuilding from './CityBuilding';
import {
  Antenna,
  Beacon,
  Buttress,
  Dish,
  FacadeVideo,
  Helipad,
  LandingDeck,
  NeonSpine,
  Penthouse,
  SkyBridge,
  StatusLamps,
  TerminalScreen,
  TerracePost,
} from './landmarkParts';
import { skipRaycast } from './materials';

const buildingProps = {
  accent: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  hovered: PropTypes.bool.isRequired,
  reducedMotion: PropTypes.bool.isRequired,
};

const profileCorners = [
  [-1.92, -1.92],
  [1.92, -1.92],
  [-1.92, 1.92],
  [1.92, 1.92],
];

const projectLayout = {
  left: {
    at: [-4.15, 1.2], size: 2.4, height: 5.6, crown: 1.45, crownHeight: 1.2,
  },
  center: {
    at: [0.05, -1.35], size: 2.75, height: 9.8, crown: 1.6, crownHeight: 1.35,
  },
  right: {
    at: [4.15, 0.95], size: 2.25, height: 7.3, crown: 1.35, crownHeight: 1.25,
  },
};

const experienceTiers = [
  { y: 0, size: 5.8, height: 3.2 },
  { y: 3.2, size: 4.15, height: 3.8 },
  { y: 7.0, size: 2.8, height: 3.15 },
  { y: 10.15, size: 1.55, height: 2.35 },
];

const experiencePosts = [
  {
    y: 4.16,
    height: 1.55,
    spots: [[-2.42, -2.42], [2.42, -2.42], [-2.42, 2.42], [2.42, 2.42]],
  },
  {
    y: 7.88,
    height: 1.22,
    spots: [[-1.72, -1.72], [1.72, -1.72], [-1.72, 1.72], [1.72, 1.72]],
  },
];

const skillBays = [-3.45, -2.65, -1.85];
const skillLamps = [
  [-3.35, 3.48, 1.45],
  [-2.5, 3.48, 1.45],
  [-1.65, 3.48, 1.45],
  [-0.8, 3.48, 1.45],
];

function ProfileTower({
  accent, active, hovered, reducedMotion,
}) {
  const shared = {
    accent, active, hovered, reducedMotion,
  };
  return (
    <group>
      <CityBuilding width={5.2} height={2.2} depth={5.2} {...shared} />
      <group position={[0, 2.2, 0]}>
        <CityBuilding width={3.7} height={12} depth={3.7} {...shared} />
      </group>
      {active && (
        <>
          <FacadeVideo
            src={profileReel1}
            position={[0, 12.98, 1.93]}
            width={3.3}
            height={1.77}
            accent={accent}
            reducedMotion={reducedMotion}
          />
          <FacadeVideo
            src={profileReel2}
            position={[0, 9.2, 1.93]}
            width={3.55}
            height={1.77}
            accent={accent}
            reducedMotion={reducedMotion}
          />
        </>
      )}
      <group position={[0, 14.2, 0]}>
        <CityBuilding width={2.3} height={3.55} depth={2.3} {...shared} />
      </group>
      <group position={[0, 17.75, 0]}>
        <CityBuilding width={1.2} height={1.5} depth={1.2} {...shared} />
      </group>
      {profileCorners.map(([x, z]) => (
        <NeonSpine
          key={`${x}:${z}`}
          position={[x, 8.1, z]}
          height={11.6}
          color={accent}
          thickness={0.14}
        />
      ))}
      <Buttress position={[1.98, 7.5, 0]} height={7.4} color={accent} outward={1} />
      <Buttress position={[-1.98, 7.5, 0]} height={7.4} color={accent} outward={-1} />
      <Antenna position={[0, 19.25, 0]} height={1.9} color={accent} />
      <Beacon
        position={[0, 21.32, 0]}
        color={accent}
        active={active}
        reducedMotion={reducedMotion}
      />
    </group>
  );
}

const voiceSlabs = [
  {
    x: -2.75, height: 4.9, width: 1.9, depth: 0.72, screen: 2.15,
  },
  {
    x: 0, height: 7.05, width: 2.1, depth: 0.8, screen: 3.05,
  },
  {
    x: 2.75, height: 4.25, width: 1.75, depth: 0.68, screen: 1.9,
  },
];

function TestimonialHall({
  accent, active, hovered, reducedMotion,
}) {
  const shared = {
    accent, active, hovered, reducedMotion,
  };
  const crown = 1.4 + voiceSlabs[1].height;

  return (
    <group>
      <CityBuilding width={8.4} height={1.4} depth={5.4} {...shared} />
      {voiceSlabs.map((slab) => (
        <group key={slab.x} position={[slab.x, 1.4, 0.42]}>
          <CityBuilding
            width={slab.width}
            height={slab.height}
            depth={slab.depth}
            {...shared}
          />
          <TerminalScreen
            position={[0, slab.height * 0.56, (slab.depth / 2) + 0.08]}
            rotation={[0, 0, 0]}
            color={accent}
            width={slab.width * 0.72}
            height={slab.screen}
          />
        </group>
      ))}
      <StatusLamps
        lamps={[
          [-2.75, 1.62, 2.15],
          [0, 1.62, 2.15],
          [2.75, 1.62, 2.15],
        ]}
        color={accent}
      />
      <Antenna position={[0, crown, 0.42]} height={1.15} color={accent} />
      <Beacon
        position={[0, crown + 1.3, 0.42]}
        color={accent}
        active={active}
        reducedMotion={reducedMotion}
      />
    </group>
  );
}

function ProjectTower({ tower, accent, shared }) {
  const [x, z] = tower.at;
  return (
    <group position={[x, 0, z]}>
      <CityBuilding width={tower.size} height={tower.height} depth={tower.size} {...shared} />
      <Penthouse y={tower.height} size={tower.crown} height={tower.crownHeight} color={accent} />
    </group>
  );
}

ProjectTower.propTypes = {
  tower: PropTypes.shape({
    at: PropTypes.arrayOf(PropTypes.number).isRequired,
    size: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    crown: PropTypes.number.isRequired,
    crownHeight: PropTypes.number.isRequired,
  }).isRequired,
  accent: PropTypes.string.isRequired,
  shared: PropTypes.shape(buildingProps).isRequired,
};

function ProjectDistrict({
  accent, active, hovered, reducedMotion,
}) {
  const shared = {
    accent, active, hovered, reducedMotion,
  };
  const { left, center, right } = projectLayout;
  const spine = (center.size / 2) + 0.08;
  const corners = [[-spine, -spine], [spine, -spine], [-spine, spine], [spine, spine]];
  const crownTop = center.height + center.crownHeight;

  return (
    <group>
      <ProjectTower tower={left} accent={accent} shared={shared} />
      <ProjectTower tower={center} accent={accent} shared={shared} />
      <ProjectTower tower={right} accent={accent} shared={shared} />
      {active && (
        <FacadeVideo
          src={projectReel}
          position={[0.07, 4.9, 0.2]}
          width={2.4}
          height={5.7}
          accent={accent}
          reducedMotion={reducedMotion}
        />
      )}
      <group position={[center.at[0], 0, center.at[1]]}>
        {corners.map(([x, z]) => (
          <NeonSpine
            key={`${x}:${z}`}
            position={[x, center.height / 2, z]}
            height={center.height - 0.3}
            color={accent}
            thickness={0.11}
          />
        ))}
        <Antenna position={[0, crownTop, 0]} height={1.05} color={accent} />
        <Beacon
          position={[0, crownTop + 1.2, 0]}
          color={accent}
          active={active}
          reducedMotion={reducedMotion}
        />
      </group>
      <group position={[right.at[0], 0, right.at[1]]}>
        <Antenna position={[0, right.height + right.crownHeight, 0]} height={0.85} color={accent} />
      </group>
      <SkyBridge start={left.at} end={center.at} y={4.15} color={accent} />
      <SkyBridge start={center.at} end={right.at} y={5.7} color={accent} />
    </group>
  );
}

function SkillsTerminal({
  accent, active, hovered, reducedMotion,
}) {
  const shared = {
    accent, active, hovered, reducedMotion,
  };
  return (
    <group>
      <CityBuilding width={8.1} height={3.2} depth={4.7} {...shared} />
      <group position={[2.45, 0, -0.55]}>
        <CityBuilding width={2.4} height={7.5} depth={2.4} {...shared} />
        <Dish position={[0, 7.85, 0]} color={accent} />
        <Beacon
          position={[0, 8.6, 0]}
          color={accent}
          active={active}
          reducedMotion={reducedMotion}
        />
      </group>
      <TerminalScreen
        position={[-1.45, 4.5, 2.62]}
        rotation={[-0.22, 0, 0]}
        color={accent}
        width={4.9}
        height={2.15}
      />
      {skillBays.map((x) => (
        <NeonSpine
          key={x}
          position={[x, 1.7, 2.48]}
          height={2.35}
          color={accent}
          thickness={0.1}
        />
      ))}
      <StatusLamps lamps={skillLamps} color={accent} />
    </group>
  );
}

function ExperienceBuilding({
  accent, active, hovered, reducedMotion,
}) {
  const shared = {
    accent, active, hovered, reducedMotion,
  };
  const crown = 12.5;
  return (
    <group>
      {experienceTiers.map((tier) => (
        <group key={tier.y} position={[0, tier.y, 0]}>
          <CityBuilding width={tier.size} height={tier.height} depth={tier.size} {...shared} />
        </group>
      ))}
      {experiencePosts.map((level) => level.spots.map(([x, z]) => (
        <TerracePost
          key={`${level.y}:${x}:${z}`}
          position={[x, level.y, z]}
          height={level.height}
          color={accent}
        />
      )))}
      {active && (
        <FacadeVideo
          src={experienceReel}
          position={[0, 8.7, 1.5]}
          width={2.4}
          height={2}
          accent={accent}
          reducedMotion={reducedMotion}
        />
      )}
      <mesh position={[0, crown + 0.18, 0]} rotation={[-Math.PI / 2, 0, 0]} raycast={skipRaycast}>
        <ringGeometry args={[0.58, 0.86, 28]} />
        <meshBasicMaterial color={accent} side={THREE.DoubleSide} toneMapped={false} fog={false} />
      </mesh>
      <Antenna position={[0, crown, 0]} height={1.65} color={accent} />
      <Beacon
        position={[0, crown + 1.82, 0]}
        color={accent}
        active={active}
        reducedMotion={reducedMotion}
      />
    </group>
  );
}

const padClearance = 3.12;

function ContactHelicopter({ active, reducedMotion }) {
  const rig = useRef(null);
  const { scene, animations } = useGLTF(helicopterModel);
  const rotorClips = useMemo(() => animations.map((clip) => {
    const parked = clip.clone();
    parked.tracks = parked.tracks.filter((track) => (
      track.name.startsWith('Blades_01') || track.name.startsWith('Screw_02')
    ));
    return parked;
  }), [animations]);
  const { actions } = useAnimations(rotorClips, rig);
  const model = useMemo(() => {
    const fitted = cloneSkinned(scene);
    fitted.updateMatrixWorld(true);
    const bounds = new THREE.Box3().setFromObject(fitted);
    const center = bounds.getCenter(new THREE.Vector3());
    fitted.position.set(-center.x, -bounds.min.y, -center.z);
    fitted.traverse((node) => {
      if (node.isMesh) Object.assign(node, { raycast: skipRaycast, frustumCulled: false });
    });
    return fitted;
  }, [scene]);

  useEffect(() => {
    const clip = rotorClips[0]?.name;
    const action = clip ? actions[clip] : undefined;
    if (!action) return undefined;
    if (reducedMotion) {
      action.stop();
      return undefined;
    }
    action.reset().play();
    return () => action.stop();
  }, [actions, reducedMotion, rotorClips]);

  useFrame((_, delta) => {
    if (!rig.current || !active || reducedMotion) return;
    rig.current.rotation.y += delta * ((Math.PI * 2) / 6);
  });

  return (
    <group ref={rig} position={[0.7, padClearance, 0.15]}>
      <primitive object={model} />
    </group>
  );
}

ContactHelicopter.propTypes = {
  active: PropTypes.bool.isRequired,
  reducedMotion: PropTypes.bool.isRequired,
};

useGLTF.preload(helicopterModel);

function ContactStation({
  accent, active, hovered, reducedMotion,
}) {
  const shared = {
    accent, active, hovered, reducedMotion,
  };
  return (
    <group>
      <CityBuilding width={7.2} height={2.65} depth={4.8} {...shared} />
      <LandingDeck position={[0, 2.86, 0]} width={8.2} depth={5.9} color={accent} />
      <Helipad position={[0.7, 3.08, 0.15]} color={accent} radius={1.55} />
      <Suspense fallback={null}>
        <ContactHelicopter active={active} reducedMotion={reducedMotion} />
      </Suspense>
      <group position={[-3.15, 0, -1.65]}>
        <CityBuilding width={1.15} height={5.15} depth={1.15} {...shared} />
        <Dish position={[0.2, 5.45, 0]} color={accent} />
        <Beacon
          position={[0, 6.15, 0]}
          color={accent}
          active={active}
          reducedMotion={reducedMotion}
        />
      </group>
    </group>
  );
}

ProfileTower.propTypes = buildingProps;
TestimonialHall.propTypes = buildingProps;
ProjectDistrict.propTypes = buildingProps;
SkillsTerminal.propTypes = buildingProps;
ExperienceBuilding.propTypes = buildingProps;
ContactStation.propTypes = buildingProps;

const landmarks = {
  profile: ProfileTower,
  testimonials: ProjectDistrict,
  // projects: ProjectDistrict,
  skills: SkillsTerminal,
  experience: ExperienceBuilding,
  contact: ContactStation,
};

export default landmarks;
