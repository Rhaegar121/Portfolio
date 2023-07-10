export const textVariant = (delay) => ({
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

export const fadeIn = (direction, type, delay, duration) => {
  let hiddenX;
  let hiddenY;

  if (direction === 'left') {
    hiddenX = 100;
  } else if (direction === 'right') {
    hiddenX = -100;
  } else {
    hiddenX = 0;
  }

  if (direction === 'up') {
    hiddenY = 100;
  } else if (direction === 'down') {
    hiddenY = -100;
  } else {
    hiddenY = 0;
  }

  return {
    hidden: {
      x: hiddenX,
      y: hiddenY,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const slideIn = (direction, type, delay, duration) => {
  let hiddenX;
  let hiddenY;

  if (direction === 'left') {
    hiddenX = '-100%';
  } else if (direction === 'right') {
    hiddenX = '100%';
  } else {
    hiddenX = 0;
  }

  if (direction === 'up') {
    hiddenY = '100%';
  } else if (direction === 'down') {
    hiddenY = '-100%';
  } else {
    hiddenY = 0;
  }

  return {
    hidden: {
      x: hiddenX,
      y: hiddenY,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren: delayChildren || 0,
    },
  },
});
