import React from 'react'
import ImageComp from '../components/image-comp/ImageComp'
import imagePaths from '../constants/imagePaths'
const ProjectImages = () => {
  return (
    <div className='project-img-container'>
      <ImageComp
        src={imagePaths.webMoneypool}
        width='50%'
      />
    </div>
  )
}

export default ProjectImages