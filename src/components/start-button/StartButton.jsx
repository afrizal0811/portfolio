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

  const handleKeyDown = (e) => {
    const spaceCode = e.keyCode === 32
    const enterCode = e.keyCode === 13
    
    if (spaceCode || enterCode) {
      setIsClicked(true)
      setStarted(true)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (isClicked) myContainer.current.innerText = ''
    }, 500)

    document.addEventListener('keydown', handleKeyDown)

    // Don't forget to clean up
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClicked])

  return (
    <motion.div
      className='start-button'
      {...startButtonProps(isClicked)}
    >
      <button
        type='button'
        onClick={handleOnClick}
        onKeyDown={(e) => handleKeyDown(e)}
      >
        <h1 ref={myContainer}>Press Start</h1>
      </button>
    </motion.div>
  )
}

export default StartButton
