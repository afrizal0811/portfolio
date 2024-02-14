import { motion } from 'framer-motion'
import React from 'react'
import { menuProps } from '../constants/properties'
import './style.css'

const About = (props) => {
  const { isInView } = props
  return (
    <motion.div
      className='wrapper'
      {...menuProps(isInView)}
    >
      <div className='content'>
        <h1 className='title'>About</h1>
      </div>
    </motion.div>
  )
}

export default About
