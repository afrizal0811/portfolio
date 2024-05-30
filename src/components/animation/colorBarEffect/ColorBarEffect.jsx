import { motion } from 'framer-motion'
import React from 'react'
import {
  privateImagePaths,
  publicImagePaths,
} from '../../../constants/imagePaths'
import { colorBarProps } from '../../../constants/properties'
import ImageComp from '../../image-comp/ImageComp'
import './style.css'

const ColorBarEffect = (props) => {
  const { isPrivateProject } = props
  return (
    <motion.div
      className='colorbar-container'
      {...colorBarProps}
    >
      <ImageComp
        alt ='colorbar'
        className='colorbar'
        src={
          isPrivateProject
            ? privateImagePaths.colorBar
            : publicImagePaths.colorBar
        }
      />
    </motion.div>
  )
}

export default ColorBarEffect
