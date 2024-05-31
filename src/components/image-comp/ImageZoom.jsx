import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import './style.css'

const ImageZoom = (props) => {
  const { key, src, alt } = props
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState(0)

  useEffect(() => {
    if (scale > 1) {
      setPosition(scale * 40)
    } else {
      setPosition(0)
    }
  }, [scale])

  const handleZoomIn = () => {
    setScale((scale) => scale + 0.5)
  }
  const handleZoomOut = () => {
    if (scale > 1) {
      setScale((scale) => scale - 0.5)
    }
  }

  return (
    <div className='zoom-container'>
      <div className='btn-zoom-container'>
        <button onClick={handleZoomIn}>
          <span>+</span>
        </button>
        <button onClick={handleZoomOut}>
          <span>-</span>
        </button>
      </div>
      <motion.img
        animate={{
          scale: scale,
        }}
        alt={alt}
        className='zoom-image'
        drag
        dragConstraints={{
          top: -position,
          left: -position,
          right: position,
          bottom: position,
        }}
        key={key}
        src={src}
        width='100%'
      />
    </div>
  )
}

export default ImageZoom
