import { motion } from 'framer-motion'
import React from 'react'
import MenuHeader from '../components/menu-header/MenuHeader'
import { menuVariant } from '../constants/variants'
import './style.css'
const Projects = (props) => {
  const { isInView, pathname } = props

  return (
    <motion.div
      className='wrapper'
      variants={isInView ? menuVariant : ''}
      initial='initial'
      animate='animate'
    >
      <MenuHeader pathname={pathname} />
    </motion.div>
  )
}

export default Projects
