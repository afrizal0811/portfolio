import { motion } from 'framer-motion'
import React from 'react'
import './style.css'

const FuzzyEffect = () => {
  return (
    <motion.div
      className='fuzzy-overlay'
      initial={{ translateX: 0, translateY: 0, opacity: '15%' }}
      animate={{
        translateX: ['10%', '-10%'],
        translateY: ['10%', '-10%'],
      }}
      transition={{ duration: 0.02, repeat: Infinity }}
    />
  )
}

export default FuzzyEffect
