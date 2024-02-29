import React, { useEffect, useState } from 'react'
import { answerTextList } from '../../constants/lists'
import { useTypingEffect } from '../../utilities/typingEffect'
import './style.css'

const TextBox = (props) => {
  const { isInView, option, setIsFinished, isLastOption } = props
  const [isSeen, setIsSeen] = useState(false)
  const delayTime = isInView ? (isSeen ? 30 : 2000) : 30
  const newClassText = !isLastOption && 'not-third-text'
  const textDisplay = useTypingEffect(
    answerTextList[option],
    delayTime,
    setIsFinished
  )

  useEffect(() => {
    setTimeout(() => {
      setIsSeen(true)
    }, 1800)
  }, [isSeen])

  return (
    <div className={`${newClassText} text-box`}>
      <p>{textDisplay}</p>
    </div>
  )
}

export default TextBox
