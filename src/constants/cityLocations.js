// City layout. Positions are [x, y, z] on the ground plane.
// Move a district by editing position, camera, and lookAt together.
// camera is where the view flies; lookAt is the point it frames.
// Replace contactEmail with your address. An empty string shows a placeholder.

export const contactEmail = 'kaungmyatkyaw7012@gmail.com';

export const overviewCamera = {
  position: [0, 16, 39],
  lookAt: [0, 6, -12],
};

export const locations = [
  {
    id: 'profile',
    name: 'Profile Tower',
    short: 'Profile',
    sign: 'PROFILE',
    summary: 'About me and professional background',
    position: [0, 0, -15],
    camera: [11, 10, -1],
    lookAt: [0, 8, -18],
    color: '#2ee9ff',
    signHeight: 22.2,
    hitSize: [6.6, 24, 6.6],
  },
  {
    id: 'testimonials',
    name: 'Testimonial Hall',
    short: 'Voices',
    sign: 'VOICES',
    summary: 'Recommendations from people I have worked with',
    position: [-12, 0, -10],
    camera: [-5, 10, -2],
    lookAt: [-10, 6, -10],
    color: '#ff2ea6',
    signHeight: 13.5,
    hitSize: [12.2, 14.2, 7],
  },
  {
    id: 'skills',
    name: 'Skills Terminal',
    short: 'Skills',
    sign: 'SKILLS',
    summary: 'Technical skills and technology stack',
    position: [14, 0, 10],
    camera: [4, 8, 20],
    lookAt: [18, 4, 10],
    color: '#fc4503',
    signHeight: 10.4,
    hitSize: [7, 12.2, 2],
  },
  {
    id: 'experience',
    name: 'Experience Building',
    short: 'Experience',
    sign: 'JOURNEY',
    summary: 'Work experience and career timeline',
    position: [-14, 0, 10],
    camera: [-6, 8, 21],
    lookAt: [-10, 7, 10],
    color: '#03fc56',
    signHeight: 15.8,
    hitSize: [8.2, 16.4, 8.2],
  },
  {
    id: 'contact',
    name: 'Contact Station',
    short: 'Contact',
    sign: 'CONTACT',
    summary: 'Contact details and social links',
    position: [11, 0, -10],
    camera: [4, 7, -4],
    lookAt: [11, 3, -10],
    color: '#8b7cff',
    signHeight: 6.5,
    hitSize: [10, 8, 8],
  },
];

export function getLocation(id) {
  return locations.find((location) => location.id === id) || null;
}

export function toMapPoint(position) {
  const [x, , z] = position;
  const span = 56;
  return {
    x: Math.min(88, Math.max(12, ((x + 28) / span) * 100)),
    y: Math.min(88, Math.max(12, ((z + 28) / span) * 100)),
  };
}
