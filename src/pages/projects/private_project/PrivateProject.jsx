import { motion } from 'framer-motion'
import React from 'react'
import { useParams } from 'react-router-dom'
import ImageComp from '../../../components/image-comp/ImageComp'
import ImageZoom from '../../../components/image-comp/ImageZoom'
import { menuProps } from '../../../constants/properties'
import { privateVariant } from '../../../constants/variants'
import IsMobile from '../../../utilities/isMobile'
import './../style.css'
import { camelize, filteredImages, isEmpty } from './help'

const PrivateProject = (props) => {
  const { navigate, isInView } = props
  const { name } = useParams()
  const images = filteredImages(name)
  const imageName = camelize(name)
  const isMobile = IsMobile()
  const selectedImage = images[`${imageName}`]
  
  if (isEmpty(selectedImage) || isEmpty(images)) {
    navigate('/', { replace: true })
    return null
  }

  const mappedImages = selectedImage.map((data, key) => {
    const renderImageZoom = (
      <ImageZoom
        alt={data}
        key={key}
        src={data}
      />
    )

    const renderImageComp = (
      <ImageComp
        className='project-img-content'
        key={key}
        src={data}
        width='80%'
      />
    )
    const renderImages = isMobile ? renderImageZoom : renderImageComp

    return (
      <motion.div
        className='project-img-container'
        initial='initial'
        variants={privateVariant}
        whileInView='animate'
      >
        {renderImages}
      </motion.div>
    )
  })

  return (
    <motion.div
      className='wrapper'
      {...menuProps(isInView)}
    >
      <div className='project-container'>
        <div className='project-content'>{mappedImages}</div>
      </div>
    </motion.div>
  )
}

export default PrivateProject
