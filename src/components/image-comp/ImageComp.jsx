import React from 'react'

const ImageComp = (props) => {
  const { className, src, alt } = props

  return (
    <img
      alt={alt}
      className={className}
      src={src}
      draggable='false'
      loading='lazy'
    />
  )
}

export default ImageComp
