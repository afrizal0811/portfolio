import { motion } from 'framer-motion'
import React from 'react'
import { colorBarProps } from '../../../constants/properties'
import './style.css'

const ColorBarEffect = () => {
  return (
    <motion.div
      className='colorbar-container'
      {...colorBarProps}
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
