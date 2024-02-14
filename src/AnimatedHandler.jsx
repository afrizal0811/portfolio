import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import ColorBarEffect from './components/animation/colorBarEffect/ColorBarEffect'
import FuzzyEffect from './components/animation/fuzzyEffect/FuzzyEffect'
import MenuList from './components/menu-list/MenuList'
import StartButton from './components/start-button/StartButton'
import {
  buttonListVariant,
  menuVariant,
  transitionVariant,
} from './constants/variants'
import MenuHeader from './components/menu-header/MenuHeader'

export const StyledMenu = (menu) => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const props = menu.props
  const isHome = props.pathname === '/'

  const intialTransition = (
    <div>
      <FuzzyEffect />
      <ColorBarEffect />
    </div>
  )

  const frame = (
    <motion.div
      className='frame-container'
      variants={isInView ? menuVariant : ''}
      initial='initial'
      animate='animate'
    >
      <img
        className='frame-content'
        src='./images/frame.png'
        alt='frame'
        draggable='false'
      />
    </motion.div>
  )

  const newMenus = (menu) => {
    menu = { ...menu, props: { ...props, isInView: isInView } }
    return menu
  }

  return (
    <motion.div
      ref={ref}
      className='wrapper'
      variants={transitionVariant}
      initial='intial'
      animate='animate'
      transition='transition'
      exit='exit'
    >
      {!isHome && <MenuHeader pathname={props.pathname} />}
      {isInView && intialTransition}
      {frame}
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
