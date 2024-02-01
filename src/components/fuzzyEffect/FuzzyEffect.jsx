import { motion } from 'framer-motion'
import React from 'react'
import './style.css'
import { FuzzyVariant } from '../../constants/animateVariants'

const FuzzyEffect = () => {
  const FuzzyContainerVariant = FuzzyVariant.fuzzyContainer
  const FuzzyOverlayVariant = FuzzyVariant.fuzzyOverlay
  return (
    <motion.div
      className='fuzzy-container'
      variants={FuzzyContainerVariant}
      initial='initial'
      animate='animate'
    >
      <motion.div
        className='fuzzy-overlay'
        variants={FuzzyOverlayVariant}
        initial='initial'
        animate='animate'
      />
    </motion.div>
  )
}

export default FuzzyEffect
