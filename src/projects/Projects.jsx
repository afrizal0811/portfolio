import { motion } from 'framer-motion'
import React from 'react'
import MenuList from '../components/menu-list/MenuList'
import { menuVariant } from '../constants/variants'
import './style.css'

const Projects = (props) => {
  const { isInView } = props

  return (
    <div>
      <motion.div
        className='wrapper'
        variants={isInView ? menuVariant : ''}
        initial='initial'
        animate='animate'
      >
        <h1>Projects</h1>
        <ol>
          <MenuList />
        </ol>
      </motion.div>
    </div>
  )
}

export default Projects
