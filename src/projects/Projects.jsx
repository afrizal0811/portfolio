import { motion } from 'framer-motion'
import React from 'react'
import { menuProps } from '../constants/properties'
import './style.css'

const Projects = (props) => {
  const { isInView } = props
  return (
    <motion.div
      className='wrapper'
      {...menuProps(isInView)}
    >
      <div className='container'>
        <div className='content'>
          <h1 className='title'>Projects</h1>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
