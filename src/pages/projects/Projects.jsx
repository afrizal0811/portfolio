import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Avatar from '../../components/avatar/Avatar'
import { menuProps } from '../../constants/properties'
import { getCookies, setCookies } from '../../utilities/handleCookies'
import ProjectImages from './ProjectImages'
import { choicesList, initialChoicesList, projectData } from './help'
import './style.css'

const Projects = (props) => {
  const { isInView, navigate } = props
  const [isInitalOptionSelected, setIsInitialOptionSelected] = useState(true)
  const [selectedMultiOption, setSelectedMultiOption] = useState(null)
  const [isLinkClicked, setIsLinkClicked] = useState(false) //buat klik gambar
  const [linkId, setLinkId] = useState('')

  const everSelected = getCookies()
  const isInitialProject = !everSelected && isInitalOptionSelected
  const isProjectSelected = !isInitialProject && isLinkClicked
  const randomNumber = Math.floor(Math.random() * 10)

  useEffect(() => {
    const handleOpenLink = () => {
      const selectedProject = projectData.find(({ id }) => id === linkId)
      const isPublic = selectedProject.isPublic
      const link = selectedProject.href
      if (isPublic) {
        window.open(link)
      } else {
        navigate(link)
      }
    }

    if (!isInitalOptionSelected) setCookies(true)
    if (selectedMultiOption === 0) {
      handleOpenLink()
    }
    setSelectedMultiOption(null)
  }, [isInitalOptionSelected, selectedMultiOption, linkId, navigate])

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
      choice={initialChoicesList}
      setIsInitialOptionSelected={setIsInitialOptionSelected}
    />
  )

  const renderProjectAvatar = (
    <Avatar
      {...props}
      choice={choicesList(randomNumber)}
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
