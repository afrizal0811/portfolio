import { motion } from 'framer-motion'
import React from 'react'
import imagePaths from '../../../constants/imagePaths'
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
        src={imagePaths.colorBar}
        alt='colorbar'
        draggable='false'
      />
    </motion.div>
  )
}

export default ColorBarEffect
