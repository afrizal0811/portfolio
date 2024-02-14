import { motion } from 'framer-motion'
import React from 'react'
import { menuVariant } from '../constants/variants'
import './style.css'

const About = (props) => {
  const { isInView } = props
  return (
    <motion.div
      className='wrapper'
      variants={isInView ? menuVariant : ''}
      initial='initial'
      animate='animate'
    >
      <div className='content'>
        <h1 className='title'>About</h1>
      </div>
    </motion.div>
  )
}

export default About
