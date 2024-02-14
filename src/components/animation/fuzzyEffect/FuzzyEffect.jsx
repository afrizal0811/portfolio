import { motion } from 'framer-motion'
import React from 'react'
import { DisapperedFuzzyProps, fuzzyProps } from '../../../constants/properties'
import './style.css'

const FuzzyEffect = () => {
  return (
    <motion.div {...DisapperedFuzzyProps}>
      <motion.div
        className='fuzzy-overlay'
        {...fuzzyProps}
      />
    </motion.div>
  )
}

export default FuzzyEffect
