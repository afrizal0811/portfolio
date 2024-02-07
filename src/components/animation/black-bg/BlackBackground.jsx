import { motion } from 'framer-motion'
import React from 'react'
import { blackBackground } from '../../../constants/variants'
import './style.css'

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
