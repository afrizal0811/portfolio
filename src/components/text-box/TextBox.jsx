import React, { useEffect, useState } from 'react'
import imagePaths from '../../constants/imagePaths'
import { answerTextList } from '../../constants/lists'
import { useTypingEffect } from '../../utilities/typingEffect'
import ImageComp from '../image-comp/ImageComp'
import './style.css'

const TextBox = (props) => {
  const { isInView, option, setIsFinished, isLastOption } = props
  const [isSeen, setIsSeen] = useState(false)
  const delayTime = isInView ? (isSeen ? 30 : 2000) : 30
  const newClassText = !isLastOption && 'not-third-text'
  const newClassChat = !isLastOption && 'not-third-chatbox'
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
      <ImageComp
        className={`${newClassChat} chatbox`}
        src={imagePaths.chatBox}
        alt='chatbox'
      />
    </div>
  )
}

export default TextBox
