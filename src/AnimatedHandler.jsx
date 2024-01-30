import { AnimatePresence } from 'framer-motion'
import React from 'react'
import RouteHandler from './RouteHandler'
const AnimatedHandler = () => {
  return (
    <AnimatePresence mode='wait'>
      <RouteHandler />
    </AnimatePresence>
  )
}

export default AnimatedHandler
