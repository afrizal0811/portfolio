import { motion } from 'framer-motion'
import React from 'react'
import imagePaths from '../../../constants/imagePaths'
import { colorBarProps } from '../../../constants/properties'
import './style.css'
import Image from '../../image/Image'

const ColorBarEffect = () => {
  return (
    <motion.div
      className='colorbar-container'
      {...colorBarProps}
    >
      <Image
        className='colorbar'
        src={imagePaths.colorBar}
        alt='colorbar'
      />
    </motion.div>
  )
}

export default ColorBarEffect
