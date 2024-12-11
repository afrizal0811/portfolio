import { motion } from 'framer-motion'
import React from 'react'
import { fuzzyProps } from '../../../constants/properties'
import './style.css'

const BgFuzzyEffect = () => {
  return (
    <motion.div
      className='fuzzy-overlay bg-fuzzy '
      {...fuzzyProps}
    />
  )
}

export default BgFuzzyEffect
