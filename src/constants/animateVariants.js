import { easeInOut } from 'framer-motion'

export const MenuVariant = {
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

export const FuzzyVariant = {
  initial: {
    translateX: 0,
    translateY: 0,
    opacity: '50%',
  },
  animate: {
    translateX: ['10%', '-10%'],
    translateY: ['10%', '-10%'],
    transition: { duration: 0.02, repeat: Infinity },
  },
  exit: { opacity: 0 }
}
