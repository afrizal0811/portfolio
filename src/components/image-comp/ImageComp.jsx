import React from 'react'

const ImageComp = (props) => {
  const { className, src, alt, height } = props

  return (
    <img
      alt={alt}
      className={className}
      src={src}
      height={height}
      draggable='false'
      loading='lazy'
    />
  )
}

export default ImageComp
