import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import BlackBackground from './components/animation/black-bg/BlackBackground'
import ColorBarEffect from './components/animation/colorBarEffect/ColorBarEffect'
import FuzzyEffect from './components/animation/fuzzyEffect/FuzzyEffect'
import MenuList from './components/menu-list/MenuList'
import StartButton from './components/start-button/StartButton'
import { buttonListVariant, transitionVariant } from './constants/variants'

export const StyledMenu = (menu) => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const intialTransition = (
    <div>
      <FuzzyEffect />
      <ColorBarEffect />
    </div>
  )
  const newMenus = (menu) => {
    const props = menu.props
    menu = { ...menu, props: { ...props, isInView: isInView } }
    return menu
  }

  return (
    <motion.div
      ref={ref}
      variants={transitionVariant}
      initial='intial'
      animate='animate'
      transition='transition'
      exit='exit'
    >
      {isInView && intialTransition}
      <BlackBackground isInView={isInView} />
      {newMenus(menu)}
    </motion.div>
  )
}

export const StyledButtonList = (params) => {
  return (
    <motion.div
      animate={params.started ? 'click' : params.isInView ? 'unclick' : ''}
    >
      {params.isInView && <StartButton setStarted={params.setStarted} />}
      <motion.div variants={buttonListVariant}>
        <MenuList pathname={params.pathname} />
      </motion.div>
    </motion.div>
  )
}