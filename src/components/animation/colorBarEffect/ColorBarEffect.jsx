import { motion } from 'framer-motion'
import React from 'react'
import { colorBar } from '../../../constants/variants'
import './style.css'

const ColorBarEffect = () => {
  return (
    <motion.div
      className='colorbar-container'
      variants={colorBar}
      initial='initial'
      animate='animate'
    >
      <img
        className='colorbar'
        src='./images/color-bar.svg'
        alt='colorbar'
      />
    </motion.div>
  )
}

export default ColorBarEffect
