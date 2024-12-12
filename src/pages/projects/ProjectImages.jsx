import { motion } from 'framer-motion'
import React from 'react'
import ImageComp from '../../components/image-comp/ImageComp'
import { projectVariant } from '../../constants/variants'
import IsMobile from '../../utilities/isMobile'
import { glitchProps } from '../../constants/properties'
const ProjectImages = (props) => {
  const { projectData, setIsLinkClicked, setLinkId } = props
  const projectImageClass = IsMobile() ? 'project-img-content-bottom' : ''
  const buttonMoreClass = IsMobile() ? 'dimmer-container-bottom' : ''
  
  const handleOnClick = (id) => {
    setIsLinkClicked(true)
    setLinkId(id)
  }

  return (
    <div className='project-img-container'>
      {projectData.map((data) => {
        return (
          <motion.div
            className={`project-img-content ${projectImageClass}`}
            key={data.id}
            variants={projectVariant}
            whileHover='hover'
            onClick={() => handleOnClick(data.id)}
          >
            <div className={`dimmer-container ${buttonMoreClass}`}>
              <div
                className='dimmer-content'
                onClick={() => handleOnClick(data.id)}
              >
                click for more info
              </div>
            </div>
            <motion.div {...glitchProps('image')}>
              <ImageComp
                key={data.id}
                src={data.image}
                width='100%'
              />
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default ProjectImages
