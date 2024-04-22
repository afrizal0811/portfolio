import React, { useEffect, useState } from 'react'
import { useTypingEffect } from '../../utilities/typingEffect'
import './style.css'

const TextBox = (props) => {
  const { isInView, option, setIsFinished, choice } = props
  const [isSeen, setIsSeen] = useState(false)
  const delayTime = isInView ? (isSeen ? 30 : 2100) : 30
  const textDisplay = useTypingEffect(
    choice[option].answer,
    delayTime,
    setIsFinished
  )

  useEffect(() => {
    setTimeout(() => {
      setIsSeen(true)
    }, 2000)
  }, [isSeen])

  return (
    <div className='text-box'>
      <p>{textDisplay}</p>
    </div>
  )
}

export default TextBox
