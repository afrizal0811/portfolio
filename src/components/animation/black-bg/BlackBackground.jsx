import { motion } from 'framer-motion'
import React from 'react'
import { blackBackgroundVariant } from '../../../constants/variants'
import './style.css'

const BlackBackground = () => {
  return (
    <motion.div
      className='black-container'
      variants={blackBackgroundVariant}
      initial='initial'
      animate='animate'
    >
      <div className='black-bg'></div>
    </motion.div>
  )
}

export default BlackBackground
