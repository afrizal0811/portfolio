import { motion } from 'framer-motion'
import React from 'react'
import ImageComp from '../components/image-comp/ImageComp'
import { projectVariant } from '../constants/variants'
import IsMobile from '../utilities/isMobile'
import { projectData } from './help'
const ProjectImages = () => {
  const dimmerMobile = IsMobile() && 'dimmer-mobile'

  return (
    <div className='project-img-container'>
      {projectData.map((data) => (
        <motion.a
          animate={IsMobile() && 'hover'}
          className='project-img-content'
          href={data.href}
          key={data.id}
          rel='noreferrer'
          target='_blank'
          variants={projectVariant}
          whileHover='hover'
        >
          <div className={`${dimmerMobile} dimmer-container`}>
            <a
              href={data.href}
              target='_blank'
              rel='noreferrer'
              className='dimmer-content'
            >
              click for more info
            </a>
          </div>
          <ImageComp
            key={data.id}
            src={data.image}
            width='100%'
          />
        </motion.a>
      ))}
    </div>
  )
}

export default ProjectImages
