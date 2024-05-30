import { motion } from 'framer-motion'
import React from 'react'
import { menuProps } from '../../constants/properties'
import './style.css'
import ImageComp from '../../components/image-comp/ImageComp'
import imagePaths from '../../constants/imagePaths'
const PrivateProject = (props) => {
  const { isInView } = props

  return (
    <motion.div
      className='wrapper'
      {...menuProps(isInView)}
    >
      <div className='project-container'>
        <div className='project-content'>
          <ImageComp
            key={imagePaths.id}
            src={imagePaths.webBank.adminAdd}
            width='80%'
          />
        </div>
      </div>
    </motion.div>
  )
}

export default PrivateProject
