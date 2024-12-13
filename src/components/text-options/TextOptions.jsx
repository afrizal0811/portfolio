import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { glitchProps } from '../../constants/properties'
import './style.css'

const TextOptions = (props) => {
  const {
    alert,
    choice,
    isFinished,
    linkId,
    option,
    pathname,
    setIsAvatarShow,
    setIsLinkClicked,
    setOption,
    setSelectedMultiOption,
  } = props

  const [dimmerOption, setDimmerOption] = useState([])
  const filteredSelectedOptions = [...new Set(dimmerOption)]

  //single option
  const selectedResponse = choice.find(({ id }) => id === option)
  const filteredResponse = choice.filter((data) => data !== selectedResponse)
  const isProjectPage = pathname === '/projects'
  const isAboutPage = pathname === '/about'
  const isContactPage = pathname === '/contact'
  const mappedOptions = isAboutPage ? filteredResponse : choice

  //multi option
  const number = linkId ? linkId : 0
  const responses = mappedOptions[number].response
  const isResponseArray = Array.isArray(responses)
  const filteredMap = isProjectPage
    ? mappedOptions.filter(({ id }) => id === linkId)
    : null
  const newOptions =
    isResponseArray && filteredMap ? filteredMap : mappedOptions

  useEffect(() => {
    setDimmerOption((prev) => [...prev, option])
  }, [option, setDimmerOption])

  const checkSelected = (arr, val) => {
    return arr.some(function (arrVal) {
      return val === arrVal
    })
  }

  const handleOnClick = (id, response) => {
    if (isContactPage) {
      if (response.type === 'E-mail') {
        alert()
        navigator.clipboard.writeText(response.link)
      } else {
        window.open(response.link)
      }
    } else if (isProjectPage) {
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
    responses.map((response, index) => {
      const isObject =
        typeof response === 'object' &&
        !Array.isArray(response) &&
        response !== null
      const text = isObject ? response.type : response

      return (
        <button
          onClick={() => handleOnClick(index, response)}
          key={index}
          className={buttonClassName}
        >
          {text}
        </button>
      )
    })

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
      {newOptions.map(({ id, response }) => {
        const isAlreadySelected = checkSelected(filteredSelectedOptions, id)
        const buttonClassName =
          isAlreadySelected && !isProjectPage && isAboutPage
            ? 'dimmer-option'
            : ''
        const renderButton = isResponseArray
          ? renderMultiResponse(buttonClassName)
          : renderSingleResponse(buttonClassName, id, response)

        return renderButton
      })}
    </div>
  )

  return (
    <motion.div {...glitchProps('text')}>
      {isFinished && renderOptions}
    </motion.div>
  )
}

export default TextOptions
