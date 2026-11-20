export function canUseWebGL() {
  if (typeof document === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return Boolean(context);
  } catch (error) {
    return false;
  }
}

export function getCityQuality() {
  if (typeof window === 'undefined') return 'lite';
  const narrow = window.matchMedia('(max-width: 800px)').matches;
  const coarseTablet = window.matchMedia('(pointer: coarse)').matches
    && window.matchMedia('(max-width: 1100px)').matches;
  const saveData = navigator.connection && navigator.connection.saveData;
  const cores = navigator.hardwareConcurrency || 8;
  const memory = navigator.deviceMemory || 8;
  if (narrow || coarseTablet || saveData || cores <= 4 || memory <= 4) return 'lite';
  return 'full';
}

export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
