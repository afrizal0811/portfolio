import { motion } from 'framer-motion'
import React from 'react'
import { FuzzyVariant } from '../../constants/animateVariants'
import './style.css'

const FuzzyEffect = () => {
  return (
    <motion.div
      className='fuzzy-overlay'
      variants={FuzzyVariant}
      initial='initial'
      animate='animate'
    />
  )
}

export default FuzzyEffect
