import React, { useEffect, useState } from 'react'
import './style.css'

const TextOptions = (props) => {
  const { option, setOption, isFinished, choice, pathname, setIsAvatarShow } =
    props
  const [dimmerOption, setDimmerOption] = useState([])
  const filteredSelectedOptions = [...new Set(dimmerOption)]
  const selectedQuestion = choice.find(({ id }) => id === option)
  const filteredQuestion = choice.filter((data) => data !== selectedQuestion)
  const isProjectPage = pathname === '/projects'
  const mappedOptions = isProjectPage ? choice : filteredQuestion

  useEffect(() => {
    setDimmerOption((prev) => [...prev, option])
  }, [option, setDimmerOption])
  
  const checkSelected = (arr, val) => {
    return arr.some(function (arrVal) {
      return val === arrVal
    })
  }

  const handleOnClick = (id) => {
    isProjectPage ? setIsAvatarShow(false) : setOption(id)
  }

  const renderOptions = (
    <div className='options-content'>
      {mappedOptions.map(({ id, question }) => {
        const isAlreadySelected = checkSelected(filteredSelectedOptions, id)
        const buttonClassName =
          isAlreadySelected && !isProjectPage ? 'dimmer-option' : ''
        return (
          <button
            onClick={() => handleOnClick(id)}
            key={id}
            className={buttonClassName}
          >
            {question}
          </button>
        )
      })}
    </div>
  )

  return <div>{isFinished && renderOptions}</div>
}

export default TextOptions
