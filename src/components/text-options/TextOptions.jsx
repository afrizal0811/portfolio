import React, { useEffect, useState } from 'react'
import './style.css'

const TextOptions = (props) => {
  const {
    choice,
    linkId,
    isFinished,
    option,
    pathname,
    setIsAvatarShow,
    setIsLinkClicked,
    setOption,
    setSelectedMultiOption,
  } = props

  const [dimmerOption, setDimmerOption] = useState([])
  const filteredSelectedOptions = [...new Set(dimmerOption)]
  const selectedResponse = choice.find(({ id }) => id === option)
  const filteredResponse = choice.filter((data) => data !== selectedResponse)
  const isProjectPage = pathname === '/projects'
  const mappedOptions = isProjectPage ? choice : filteredResponse
  const number = linkId ? linkId : 0
  const responses = mappedOptions[number].response
  const isResponseArray = Array.isArray(responses)

  useEffect(() => {
    setDimmerOption((prev) => [...prev, option])
  }, [option, setDimmerOption])

  const checkSelected = (arr, val) => {
    return arr.some(function (arrVal) {
      return val === arrVal
    })
  }

  const handleOnClick = (id) => {
    if (isProjectPage) {
      setIsAvatarShow(false)
      if (isResponseArray) {
        setSelectedMultiOption(id)
        setIsLinkClicked(false)
      }
    } else {
      setOption(id)
    }
  }

  const renderMultiResponse = (buttonClassName) =>
    responses.map((response, index) => (
      <button
        onClick={() => handleOnClick(index)}
        key={index}
        className={buttonClassName}
      >
        {response}
      </button>
    ))

  const renderSingleResponse = (buttonClassName, id, response) => (
    <button
      onClick={() => handleOnClick(id)}
      key={id}
      className={buttonClassName}
    >
      {response}
    </button>
  )

  const renderOptions = (
    <div className='options-content'>
      {mappedOptions.map(({ id, response }) => {
        const isAlreadySelected = checkSelected(filteredSelectedOptions, id)
        const buttonClassName =
          isAlreadySelected && !isProjectPage ? 'dimmer-option' : ''
        const renderButton = isResponseArray
          ? renderMultiResponse(buttonClassName)
          : renderSingleResponse(buttonClassName, id, response)

        return renderButton
      })}
    </div>
  )

  return <div>{isFinished && renderOptions}</div>
}

export default TextOptions
