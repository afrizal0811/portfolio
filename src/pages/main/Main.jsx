import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { StyledButtonList } from '../../AnimatedHandler'
import { glitchProps, menuProps } from '../../constants/properties'
import useTypingEffect from '../../utilities/typeEffect'
import './style.css'

const Main = (props) => {
  const { isInView, pathname } = props
  const [started, setStarted] = useState(false)
  const [isSeen, setIsSeen] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsSeen(true)
    }, 2000)
  }, [isSeen])

  const params = {
    isInView,
    pathname,
    started,
    setStarted,
  }
  const delayTime = isInView ? (isSeen ? 30 : 2100) : 0
  const textDisplay = useTypingEffect('Web Developer & Other Things', delayTime)

  return (
    <motion.div
      className='main-wrapper'
      {...menuProps(isInView)}
    >
      <motion.div
        {...glitchProps('title')}
        className='title-menu'
      >
        <div className='title-name-menu'>
          <h2>Afrizal</h2>
          <h1>Maulana</h1>
        </div>
        <p>{textDisplay}</p>
      </motion.div>
      <ol className='menu-list'>
        <motion.div>{StyledButtonList(params)}</motion.div>
      </ol>
    </motion.div>
  )
}
export default Main
