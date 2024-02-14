import { motion } from 'framer-motion'
import React from 'react'
import { menuVariant } from '../constants/variants'
import './style.css'

const Projects = (props) => {
  const { isInView } = props
  return (
    <motion.div
      className='wrapper'
      variants={isInView ? menuVariant : ''}
      initial='initial'
      animate='animate'
    >
      <div className='content'>
        <h1 className='title'>Projects</h1>
      </div>
    </motion.div>
  )
}

export default Projects
