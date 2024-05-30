import { motion } from 'framer-motion'
import React from 'react'
import { useParams } from 'react-router-dom'
import ImageComp from '../../../components/image-comp/ImageComp'
import { menuProps } from '../../../constants/properties'
import { privateVariant } from '../../../constants/variants'
import './../style.css'
import { camelize, filteredImages, isEmpty } from './help'

const PrivateProject = (props) => {
  const { navigate, isInView } = props
  const { name } = useParams()
  const images = filteredImages(name)
  const imageName = camelize(name)

  if (isEmpty(images)) {
    navigate('/', { replace: true })
    return null
  }

  const mappedImages = images[`${imageName}`].map((data, key) => (
    <motion.div
      className='project-img-container'
      initial='initial'
      variants={privateVariant}
      whileInView='animate'
    >
      <ImageComp
        className='project-img-content'
        key={key}
        src={data}
        width='80%'
      />
    </motion.div>
  ))

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
