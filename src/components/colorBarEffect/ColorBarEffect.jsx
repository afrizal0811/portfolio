import { motion } from 'framer-motion'
import React from 'react'
import './style.css'
const ColorBarEffect = () => {
  return (
    <motion.div
      className='colorbar-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 2 }}
      exit={{ opacity: 0 }}
    >
      <img
        src='./color-bar.svg'
        alt='colorbar'
      />
    </motion.div>
  )
}

export default ColorBarEffect
