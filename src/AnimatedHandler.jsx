import { motion, useInView } from 'framer-motion'
import React, { Fragment, useRef } from 'react'
import ColorBarEffect from './components/animation/colorBarEffect/ColorBarEffect'
import FuzzyEffect from './components/animation/fuzzyEffect/FuzzyEffect'
import Image from './components/image/Image'
import MenuHeader from './components/menu-header/MenuHeader'
import MenuList from './components/menu-list/MenuList'
import StartButton from './components/start-button/StartButton'
import imagePaths from './constants/imagePaths'
import { menuProps, transitionProps } from './constants/properties'
import { buttonListVariant } from './constants/variants'

export const StyledMenu = (menu) => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const props = menu.props
  const isHome = props.pathname === '/'

  const newMenus = (menu) => {
    menu = { ...menu, props: { ...props, isInView: isInView } }
    return menu
  }

  const effects = (children) => {
    return (
      <motion.div {...transitionProps}>
        <motion.div
          ref={ref}
          className='wrapper'
          {...transitionProps}
        >
          {children}
        </motion.div>
      </motion.div>
    )
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

  const renderMenu = (
    <Fragment>
      {!isHome && menus}
      {isInView && intialTransition}
      {frame}
      {newMenus(menu)}
    </Fragment>
  )

  return effects(renderMenu)
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
