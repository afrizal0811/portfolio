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
      <h1 className='title'>About</h1>
    </motion.div>
  )
}

export default About
