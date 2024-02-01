import { easeInOut } from 'framer-motion'

export const MenuVariant = {
  initial: { scaleY: 0, scaleX: 0 },
  animate: {
    scaleY: [0, 0.01, 0.01, 0.01, 1],
    scaleX: [0, 0.1, 0.5, 0.9, 1],
    backgroundColor: ['#fff', '#221'],
    transition: { duration: 0.3, ease: easeInOut },
  },
}

export const FuzzyVariant = {
  fuzzyContainer: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: '15%' },
  },
  fuzzyOverlay: {
    initial: {
      translateX: 0,
      translateY: 0,
    },
    animate: {
      translateX: ['10%', '-10%'],
      translateY: ['10%', '-10%'],
      transition: { delay: 0.5, duration: 0.02, repeat: Infinity },
    },
  },
}
