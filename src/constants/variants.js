const colors = {
  white: '#FFFFFF',
  alabaster: '#f2f0e5',
  azure: '#4b80ca',
}

export const transitionVariant = {
  initial: { scaleY: 0, scaleX: 0 },
  animate: {
    scaleY: [0, 0.01, 0.01, 0.01, 1],
    scaleX: [0, 0.1, 0.5, 0.9, 1],
    backgroundColor: [colors.white, colors.alabaster],
    transition: {
      duration: 0.15,
      ease: 'easeInOut',
    },
  },
  exit: {
    scaleY: [1, 0.01, 0.01, 0.01, 0],
    scaleX: [1, 0.9, 0.5, 0.1, 0],
    backgroundColor: [colors.alabaster, colors.white],
    transition: { duration: 0.15, ease: 'easeInOut' },
  },
}

export const fuzzyVariant = {
  initial: {
    translateX: 0,
    translateY: 0,
    opacity: 0.8,
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

export const scanlinesVariant = {
  initial: {
    translateX: 0,
    translateY: 0,
    opacity: 0.8,
  },
  animate: {
    translateX: ['5%', '-5%'],
    translateY: ['5%', '-5%'],
    transition: { duration: 0.1, repeat: Infinity },
  },
  exit: { opacity: 0 },
}

export const colorBarVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    transition: { delay: 1.15, duration: 1 },
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

export const glitchTextVariant = {
  initial: { opacity: 1, skewX: 0, scaleY: 1 },
  animate: {
    opacity: [1, 0.8, 0.8, 1],
    skewX: [0, 89, -50, 0],
    scaleY: [1, 1.2, 1.2, 1],
    transition: {
      duration: 5, // Durasi animasi (5 detik)
      ease: 'easeInOut', // Pola easing
      repeat: Infinity, // Mengulangi animasi tanpa batas
      delay: 2, // Penundaan sebelum animasi dimulai (2000ms)
      times: [0.4, 0.41, 0.42, 0.43], // Posisi waktu untuk setiap frame
    },
  },
}
export const glitchImageVariant = {
  initial: { opacity: 1, skewX: 0, scaleY: 1 },
  animate: {
    opacity: [1, 0.8, 0.8, 1],
    skewX: [0, 90, -10, 0],
    scaleY: [1, 0.9, 1.1, 1],
    transition: {
      duration: 5, // Durasi animasi (5 detik)
      ease: 'easeInOut', // Pola easing
      repeat: Infinity, // Mengulangi animasi tanpa batas
      delay: 2, // Penundaan sebelum animasi dimulai (2000ms)
      times: [0.42, 0.43, 0.44, 0.45], // Posisi waktu untuk setiap frame
    },
  },
}

export const wobbleyVariant = {
  initial: { translateY: 0 },
  animate: {
    translateX: ['-0.4px', '0.2px'],
    translateY: ['-0.5px', '0.7px'],
    transition: { duration: 0.2, repeat: Infinity },
  },
}

export const projectVariant = {
  hover: {
    scale: 1.02,
    transition: { type: 'spring', stiffness: 400 },
    filter: 'brightness(60%)',
  },
}

export const privateVariant = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      duration: 0.5,
    },
    viewport: {
      once: true,
    },
  },
}
