import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Avatar from '../components/avatar/Avatar'
import {
  initialProjectChoicesList,
  projectSelectedChoicesList,
} from '../constants/lists'
import { menuProps } from '../constants/properties'
import { getCookies, setCookies } from '../utilities/handleCookies'
import ProjectImages from './ProjectImages'
import { projectData } from './help'
import './style.css'

const Projects = (props) => {
  const { isInView } = props
  const [isInitalOptionSelected, setIsInitialOptionSelected] = useState(true)
  const [selectedMultiOption, setSelectedMultiOption] = useState(null)
  const [isLinkClicked, setIsLinkClicked] = useState(false) //buat klik gambar
  const [linkId, setLinkId] = useState('')

  const everSelected = getCookies()
  const isInitialProject = !everSelected && isInitalOptionSelected
  const isProjectSelected = !isInitialProject && isLinkClicked

  useEffect(() => {
    const handleOpenLink = () => {
      const selectedProject = projectData.find(({ id }) => id === linkId)
      window.open(selectedProject.href)
    }

    if (!isInitalOptionSelected) setCookies(true)
    if (selectedMultiOption === 0) {
      setSelectedMultiOption(null)
      handleOpenLink()
    }
  }, [isInitalOptionSelected, selectedMultiOption, linkId])

  const renderProjectImage = (
    <div className='project-container'>
      <div className='project-content'>
        <ProjectImages
          projectData={projectData}
          setIsLinkClicked={setIsLinkClicked}
          setLinkId={setLinkId}
        />
      </div>
    </div>
  )

  const renderInitialAvatar = (
    <Avatar
      {...props}
      choice={initialProjectChoicesList}
      setIsInitialOptionSelected={setIsInitialOptionSelected}
    />
  )

  const renderProjectAvatar = (
    <Avatar
      {...props}
      choice={projectSelectedChoicesList}
      linkId={linkId}
      setIsLinkClicked={setIsLinkClicked}
      setSelectedMultiOption={setSelectedMultiOption}
    />
  )

  return (
    <motion.div
      className='wrapper'
      {...menuProps(isInView)}
    >
      {isInitialProject
        ? renderInitialAvatar
        : isProjectSelected
        ? renderProjectAvatar
        : renderProjectImage}
    </motion.div>
  )
}

export default Projects
