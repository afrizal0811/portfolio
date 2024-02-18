const colors = {
  white: '#FFFFFF',
  alabaster: '#f2f0e5',
}

export const transitionVariant = {
  initial: { scaleY: 0, scaleX: 0, translateY: '0px' },
  animate: {
    scaleY: [0, 0.01, 0.01, 0.01, 1],
    scaleX: [0, 0.1, 0.5, 0.9, 1],
    backgroundColor: [colors.white, colors.alabaster],
    translateY: '0.5px',
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
      translateY: { duration: 0.4, repeat: Infinity },
    },
  },
  exit: {
    scaleY: [1, 0.01, 0.01, 0.01, 0],
    scaleX: [1, 0.9, 0.5, 0.1, 0],
    backgroundColor: [colors.alabaster, colors.white],
    transition: { duration: 0.2, ease: 'easeInOut' },
  },
}

export const fuzzyVariant = {
  initial: {
    translateX: 0,
    translateY: 0,
    opacity: '80%',
  },
  animate: {
    translateX: ['10%', '-10%'],
    translateY: ['10%', '-10%'],
    transition: { duration: 0.02, repeat: Infinity },
  },
  exit: { opacity: 0 },
}

export const DisapperedFuzzyVariant = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: [1, 0.9, 0.5, 0.1, 0],
    transition: { delay: 1.6, duration: 1 },
  },
}

export const colorBarVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    transition: { delay: 1.15, duration: 1.5 },
  },
}

export const menuVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [0, 0, 0.5, 1, 1, 1, 1, 1],
    transition: { delay: 1.7, duration: 1 },
  },
}

export const startButtonVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  unclick: {
    opacity: [0, 0, 0, 1, 1, 1],
    transition: { duration: 0.5, ease: 'easeInOut', repeat: Infinity },
  },
  click: {
    opacity: [0, 1, 0, 0.6, 0, 0.2, 0],
    scale: 1,
    transition: {
      opacity: {
        duration: 0.5,
        ease: 'easeInOut',
        repeat: Infinity,
      },
      scale: {
        delay: 0.6,
      },
    },
  },
}

export const buttonListVariant = {
  click: {
    scale: 1,
    x: 0,
    y: 0,
    opacity: [0, 0.2, 0, 0.6, 0, 1],
    transition: {
      scale: {
        duration: 0.1,
      },
      x: {
        ease: 'easeInOut',
        duration: 0.5,
      },
      y: {
        ease: 'easeInOut',
        duration: 0.5,
      },
      opacity: {
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.7,
      },
    },
  },
  unclick: {
    x: 0,
    y: 100,
    scale: 0,
    opacity: 0,
  },
}

export const wobbleyVariant = {
  initial: {
    translateY: 0,
  },
  animate: {
    translateY: '1px',
    transition: { duration: 0.1, repeat: Infinity },
  },
}
