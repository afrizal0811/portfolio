import { motion } from 'framer-motion'
import React from 'react'
import { colorBarVariant } from '../../../constants/variants'
import './style.css'

const ColorBarEffect = () => {
  return (
    <motion.div
      className='colorbar-container'
      variants={colorBarVariant}
      initial='initial'
      animate='animate'
    >
      <img
        className='colorbar'
        src='./images/color-bar.svg'
        alt='colorbar'
        draggable='false'
      />
    </motion.div>
  )
}

export default ColorBarEffect
