import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import MenuList from '../../components/menu-list/MenuList'
import StartButton from '../../components/start-button/StartButton'
import { glitchProps, menuProps } from '../../constants/properties'
import { buttonListVariant } from '../../constants/variants'
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

  const delayTime = isInView ? (isSeen ? 30 : 2100) : 0
  const textDisplay = useTypingEffect('Web Developer & Other Things', delayTime)

  const renderButtonList = () => {
    const animation = started ? 'click' : isInView ? 'unclick' : ''
    const startButton = <StartButton setStarted={setStarted} />

    return (
      <motion.div animate={animation}>
        {isInView && startButton}
        <motion.div variants={buttonListVariant}>
          <MenuList pathname={pathname} />
        </motion.div>
      </motion.div>
    )
  }

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
        <motion.div>{renderButtonList()}</motion.div>
      </ol>
    </motion.div>
  )
}
export default Main
