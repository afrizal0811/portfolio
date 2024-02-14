import { motion } from 'framer-motion'
import React from 'react'
import { blackBackgroundVariant } from '../../../constants/variants'
import './style.css'

const BlackBackground = (props) => {
  const { isInView } = props
  return (
    <motion.div
      className='black-container'
      variants={isInView ? blackBackgroundVariant : ''}
      initial='initial'
      animate='animate'
    >
      <div className='black-bg'>
        <img
          className='main-frame'
          src='./images/frame.png'
          alt='frame'
          draggable='false'
        />
      </div>
    </motion.div>
  )
}

export default BlackBackground
