import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { glitchProps } from '../../constants/properties'
import IsMobile from '../../utilities/isMobile'
import './style.css'
const TextOptions = (props) => {
  const {
    alert,
    choice,
    totalChoice,
    isFinished,
    linkId,
    option,
    pathname,
    setIsAvatarShow,
    setIsLinkClicked,
    setOption,
    setSelectedMultiOption,
  } = props

  const isMobile = IsMobile()
  const [dimmerOption, setDimmerOption] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(isMobile ? 1 : 3)

  const filteredSelectedOptions = [...new Set(dimmerOption)]
  const totalPages = totalChoice
    ? isMobile
      ? totalChoice - 1
      : Math.ceil(totalChoice / itemsPerPage)
    : 1

  const getPaginatedData = (data, page, itemsPerPage) => {
    const startIndex = (page - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return data.slice(startIndex, endIndex)
  }
  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    )
  }

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage))
  }

  //single option
  const selectedResponse = choice.find(({ id }) => id === option)
  const filteredResponse = choice.filter((data) => data !== selectedResponse)
  const isProjectPage = pathname === '/projects'
  const isAboutPage = pathname === '/about'
  const isContactPage = pathname === '/contact'
  const mappedOptions = isAboutPage ? filteredResponse : choice
  const paginatedData = getPaginatedData(
    mappedOptions,
    currentPage,
    itemsPerPage
  )

  //multi option
  const number = linkId ? linkId : 0
  const responses = paginatedData[number].response
  const isResponseArray = Array.isArray(responses)
  const filteredMap = isProjectPage
    ? paginatedData.filter(({ id }) => id === linkId)
    : null
  const newOptions =
    isResponseArray && filteredMap ? filteredMap : paginatedData

  useEffect(() => {
    setDimmerOption((prev) => [...prev, option])
  }, [option, setDimmerOption])

  useEffect(() => {
    setItemsPerPage(isMobile ? 1 : 3)
    setCurrentPage(1)
  }, [isMobile])

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

  const renderPageButton = (
    <div className='page-btn-container'>
      <button
        className='page-btn'
        disabled={currentPage === 1}
        onClick={handlePrevPage}
      >
        &lt;
      </button>
      <button
        className='page-btn'
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
      >
        &gt;
      </button>
    </div>
  )
  return (
    <motion.div {...glitchProps('text')}>
      {isFinished && renderOptions}
      {totalChoice && isFinished && renderPageButton}
    </motion.div>
  )
}

export default TextOptions
