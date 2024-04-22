import { motion } from 'framer-motion'
import React from 'react'
import Avatar from '../avatar/Avatar'
import { projectChoicesList } from '../constants/lists'
import { menuProps } from '../constants/properties'
import ProjectImages from './ProjectImages'
import './style.css'

const Projects = (props) => {
  const { isInView } = props

  return (
    <motion.div
      className='wrapper'
      {...menuProps(isInView)}
    >
      <div className='project-container'>
        <div className='project-content'>
          <ProjectImages />
        </div>
      </div>
      <Avatar
        {...props}
        choice={projectChoicesList}
      />
    </motion.div>
  )
}

export default Projects
