import { AnimatePresence } from 'framer-motion'
import React from 'react'
import RouteHandler from './RouteHandler'
import FuzzyEffect from './components/fuzzyEffect/FuzzyEffect'

export const AnimatedPresence = () => {
  return (
    <AnimatePresence mode='wait'>
      <RouteHandler />
    </AnimatePresence>
  )
}

export const StyledBackground = (main) => (
  <div style={{ backgroundColor: '#221' }}>
    <FuzzyEffect />
    {main}
  </div>
)