import { motion } from 'framer-motion'
import React from 'react'
import { fuzzyProps, scanlinesProps } from '../../../constants/properties'
import './style.css'

const BgFuzzyEffect = () => {
  return (
    <div className='tv-glow'>
      <motion.div
        className='scanlines'
        {...scanlinesProps}
      >
        <motion.div
          className='fuzzy-overlay bg-fuzzy '
          {...fuzzyProps}
        />
      </motion.div>
    </div>
  )
}

export default BgFuzzyEffect
