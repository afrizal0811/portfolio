import React from 'react'

const ImageComp = (props) => {
  const { className, src, alt, height, width } = props

  return (
    <img
      alt={alt}
      className={className}
      src={src}
      height={height}
      width={width}
      draggable='false'
      loading='lazy'
    />
  )
}

export default ImageComp
