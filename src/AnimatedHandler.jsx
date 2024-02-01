import { AnimatePresence, easeInOut, motion } from 'framer-motion'
import React from 'react'
import FuzzyEffect from './components/fuzzyEffect/FuzzyEffect'
import { MenuVariant } from './constants/animateVariants'
import RouteHandler from './RouteHandler'
export const AnimatedPresence = () => {
  return (
    <AnimatePresence mode='wait'>
      <RouteHandler />
    </AnimatePresence>
  )
}

export const StyledMenu = (menu) => (
  <motion.div
    variants={MenuVariant}
    initial='intial'
    animate='animate'
    exit='exit'
    transition='transition'
  >
    <FuzzyEffect />
    {menu}
  </motion.div>
)
