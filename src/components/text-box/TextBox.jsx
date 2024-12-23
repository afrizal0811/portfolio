import React, { useEffect, useState } from 'react'
import useTypingEffect from '../../utilities/typeEffect'
import './style.css'

const TextBox = (props) => {
  const { choice, isInView, linkId, option, setIsFinished } = props
  const [isSeen, setIsSeen] = useState(false)

  const isLinkIdNull = typeof linkId === 'number'
  const delayTime = isInView ? (isLinkIdNull || isSeen ? 20 : 2100) : 20
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
