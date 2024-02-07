import { motion } from 'framer-motion'
import React from 'react'
import { fuzzyVariant } from '../../../constants/variants'
import './style.css'

const FuzzyEffect = () => {
  return (
    <motion.div
      className='fuzzy-overlay '
      variants={fuzzyVariant}
      initial='initial'
      animate='animate'
      exit='exit'
    />
  )
}

export default FuzzyEffect
