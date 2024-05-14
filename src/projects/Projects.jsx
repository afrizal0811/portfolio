import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Avatar from '../avatar/Avatar'
import { projectChoicesList } from '../constants/lists'
import { menuProps } from '../constants/properties'
import ProjectImages from './ProjectImages'
import './style.css'

const Projects = (props) => {
  const { isInView } = props
  const [isOptionSelected, setIsOptionSelected] = useState(true)
  const renderProjectImage = (
    <div className='project-container'>
      <div className='project-content'>
        <ProjectImages/>
      </div>
    </div>
  )
  const renderAvatar = (
    <Avatar
      {...props}
      choice={projectChoicesList}
      setIsOptionSelected={setIsOptionSelected}
    />
  )
  const renderProject = isOptionSelected ? renderAvatar : renderProjectImage

  return (
    <motion.div
      className='wrapper'
      {...menuProps(isInView)}
    >
      {renderProject}
    </motion.div>
  )
}

export default Projects
