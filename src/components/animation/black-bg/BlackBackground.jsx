import { motion } from 'framer-motion'
import React from 'react'
import './style.css'
import { blackBackground } from '../../../constants/animateVariants'

const BlackBackground = () => {
  return (
    <motion.div
      className='black-container'
      variants={blackBackground}
      initial='initial'
      animate='animate'
    >
      <div className='black-bg'></div>
    </motion.div>
  )
}

export default BlackBackground
