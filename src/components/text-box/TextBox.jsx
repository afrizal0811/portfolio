import React, { useEffect, useState } from 'react'
import { answerTextList } from '../../constants/lists'
import { useTypingEffect } from '../../utilities/typingEffect'

const TextBox = (props) => {
  const { isInView, option, setIsFinished } = props
  const [isSeen, setIsSeen] = useState(false)
  const delayTime = isInView ? (isSeen ? 30 : 2000) : 30
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

  return <p>{textDisplay}</p>
}

export default TextBox
