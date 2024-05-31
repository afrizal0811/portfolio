import React from 'react'

const ImageComp = (props) => {
  const { className, src, alt, height, width, ref, draggable, style } = props

  return (
    <img
      alt={alt}
      className={className}
      draggable={draggable}
      height={height}
      loading='lazy'
      ref={ref}
      src={src}
      style={style}
      width={width}
    />
  )
}

export default ImageComp
