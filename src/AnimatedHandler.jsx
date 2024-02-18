import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import ColorBarEffect from './components/animation/colorBarEffect/ColorBarEffect'
import FuzzyEffect from './components/animation/fuzzyEffect/FuzzyEffect'
import MenuHeader from './components/menu-header/MenuHeader'
import MenuList from './components/menu-list/MenuList'
import StartButton from './components/start-button/StartButton'
import imagePaths from './constants/imagePaths'
import { menuProps, transitionProps } from './constants/properties'
import { buttonListVariant } from './constants/variants'
import Image from './components/image/Image'

export const StyledMenu = (menu) => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const props = menu.props
  const isHome = props.pathname === '/'

  const newMenus = (menu) => {
    menu = { ...menu, props: { ...props, isInView: isInView } }
    return menu
  }

  const intialTransition = (
    <div>
      <FuzzyEffect />
      <ColorBarEffect />
    </div>
  )

  const frame = (
    <motion.div
      className='frame-container vignette'
      {...menuProps(isInView)}
    >
      <Image
        className='frame-content'
        src={imagePaths.frame}
        alt='frame'
      />
    </motion.div>
  )

  const menus = (
    <MenuHeader
      pathname={props.pathname}
      isInView={isInView}
    />
  )

  return (
    <motion.div {...transitionProps}>
      <motion.div
        ref={ref}
        className='wrapper'
        {...transitionProps}
      >
        {!isHome && menus}
        {isInView && intialTransition}
        {frame}
        {newMenus(menu)}
      </motion.div>
    </motion.div>
  )
}

export const StyledButtonList = (params) => {
  const { isInView, pathname, started, setStarted } = params
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
