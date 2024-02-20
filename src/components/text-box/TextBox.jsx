import React, { useEffect, useState } from 'react'
import imagePaths from '../../constants/imagePaths'
import { answerTextList } from '../../constants/lists'
import { useTypingEffect } from '../../utilities/typingEffect'
import ImageComp from '../image-comp/ImageComp'
import './style.css'

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

  return (
    <div className='text-box'>
      <p>{textDisplay}</p>
      <ImageComp
        className='chatbox'
        src={imagePaths.chatBox}
        alt='chatbox'
      />
    </div>
  )
}

export default TextBox
