import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { startButtonProps } from '../../constants/properties'
import './style.css'

const StartButton = (props) => {
  const { setStarted } = props
  const [isClicked, setIsClicked] = useState(false)
  const myContainer = useRef(null)

  const handleOnClick = () => {
    setIsClicked(true)
    setStarted(true)
  }

  useEffect(() => {
    setTimeout(() => {
      if (isClicked) myContainer.current.innerText = ''
    }, 500)
  }, [isClicked])

  return (
    <motion.div
      className='start-button'
      {...startButtonProps(isClicked)}
    >
      <button
        type='button'
        onClick={() => handleOnClick()}
      >
        <h1 ref={myContainer}>Press Start</h1>
      </button>
    </motion.div>
  )
}

export default StartButton
