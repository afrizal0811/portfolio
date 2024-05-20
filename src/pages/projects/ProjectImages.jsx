import { motion } from 'framer-motion'
import React from 'react'
import ImageComp from '../../components/image-comp/ImageComp'
import { projectVariant } from '../../constants/variants'
import IsMobile from '../../utilities/isMobile'

const ProjectImages = (props) => {
  const { projectData, setIsLinkClicked, setLinkId } = props
  const dimmerMobile = IsMobile() && 'dimmer-mobile'

  const handleOnClick = (id) => {
    setIsLinkClicked(true)
    setLinkId(id)
  }

  return (
    <div className='project-img-container'>
      {projectData.map((data) => (
        <motion.div
          animate={IsMobile() && 'hover'}
          className='project-img-content'
          key={data.id}
          variants={projectVariant}
          whileHover='hover'
          onClick={() => handleOnClick(data.id)}
        >
          <div className={`${dimmerMobile} dimmer-container`}>
            <div
              className='dimmer-content'
              onClick={() => handleOnClick(data.id)}
            >
              click for more info
            </div>
          </div>
          <ImageComp
            key={data.id}
            src={data.image}
            width='100%'
          />
        </motion.div>
      ))}
    </div>
  )
}

export default ProjectImages
