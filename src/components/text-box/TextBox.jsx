import React, { useEffect, useState } from 'react'
import { useTypingEffect } from '../../utilities/typingEffect'
import './style.css'

const TextBox = (props) => {
  const { choice, isInView, linkId, option, setIsFinished } = props
  const [isSeen, setIsSeen] = useState(false)
  
  const delayTime = isInView ? (isSeen ? 30 : 2100) : 30
  const number = linkId ? linkId : option
  const textDisplay = useTypingEffect(
    choice[number].explain,
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
