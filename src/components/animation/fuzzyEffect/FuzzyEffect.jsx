import { motion } from 'framer-motion'
import React from 'react'
import {
  DisapperedFuzzyVariant,
  fuzzyVariant,
} from '../../../constants/variants'
import './style.css'

const FuzzyEffect = () => {
  return (
    <motion.div
      variants={DisapperedFuzzyVariant}
      initial='initial'
      animate='animate'
    >
      <motion.div
        className='fuzzy-overlay '
        variants={fuzzyVariant}
        initial='initial'
        animate='animate'
        exit='exit'
      />
    </motion.div>
  )
}

export default FuzzyEffect
