import { easeInOut, motion } from 'framer-motion'
import React from 'react'
import { getRandom } from '../utils/randomNumbers'
import './style.css'
const About = () => {
  const animatedNumbers = getRandom()
  return (
    <motion.div
      className='main-a'
      initial={{ scaleY: 0 }}
      animate={{ scaleY: animatedNumbers }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 1, ease: easeInOut }}
    >
      <h1>ASU</h1>
    </motion.div>
  )
}

export default About
