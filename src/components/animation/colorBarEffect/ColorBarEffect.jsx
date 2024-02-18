import { motion } from 'framer-motion'
import React from 'react'
import imagePaths from '../../../constants/imagePaths'
import { colorBarProps } from '../../../constants/properties'
import ImageComp from '../../image-comp/ImageComp'
import './style.css'

const ColorBarEffect = () => {
  return (
    <motion.div
      className='colorbar-container'
      {...colorBarProps}
    >
      <ImageComp
        className='colorbar'
        src={imagePaths.colorBar}
        alt='colorbar'
      />
    </motion.div>
  )
}

export default ColorBarEffect
