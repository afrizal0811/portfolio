import { easeInOut } from 'framer-motion'

export const transitionVariant = {
  initial: { scaleY: 0, scaleX: 0 },
  animate: {
    scaleY: [0, 0.01, 0.01, 0.01, 1],
    scaleX: [0, 0.1, 0.5, 0.9, 1],
    backgroundColor: ['#fff', '#221'],
    transition: { duration: 0.3, ease: easeInOut },
  },
  exit: {
    scaleY: [1, 0.01, 0.01, 0.01, 0],
    scaleX: [1, 0.9, 0.5, 0.1, 0],
    backgroundColor: ['#221', '#fff'],
    transition: { duration: 0.3, ease: easeInOut },
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

export const blackBackground = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [0, 0.1, 0.5, 0.9, 1],
    transition: { delay: 1.6, duration: 1 },
  },
}

export const colorBar = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    transition: { delay: 1, duration: 1.5 },
  },
}
