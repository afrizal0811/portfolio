import React from 'react'

const Image = (props) => {
  return (
    <img
      draggable='false'
      loading='lazy'
      {...props}
    />
  )
}

export default Image
