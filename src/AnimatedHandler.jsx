import { AnimatePresence, easeInOut, motion } from 'framer-motion'
import React from 'react'
import FuzzyEffect from './components/fuzzyEffect/FuzzyEffect'
import RouteHandler from './RouteHandler'
import { getRandom } from './utils/randomNumbers'

export const AnimatedPresence = () => {
  return (
    <AnimatePresence mode='wait'>
      <RouteHandler />
    </AnimatePresence>
  )
}

export const StyledMenu = (menu) => {
  const MenuEffect = (menu) => (
    <motion.div
      initial={{ scaleY: 0, scaleX: 0 }}
      animate={{ scaleY: getRandom(0, 0.01), scaleX: getRandom(0.9, 1) }}
      exit={{ scaleY: 0, scaleX: 0 }}
      transition={{ duration: 1, ease: easeInOut }}
    >
      {menu}
    </motion.div>
  )

  const backgroundEffect = (menu) => (
    <div style={{ backgroundColor: '#221' }}>
      <FuzzyEffect />
      {MenuEffect(menu)}
    </div>
  )
  return backgroundEffect(menu)
}

