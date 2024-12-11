import { motion, useInView } from 'framer-motion'
import React, { Fragment, useRef } from 'react'
import ColorBarEffect from './components/animation/colorBarEffect/ColorBarEffect'
import BgFuzzyEffect from './components/animation/fuzzyEffect/BgFuzzyEffect'
import InitFuzzyEffect from './components/animation/fuzzyEffect/InitFuzzyEffect'
import ImageComp from './components/image-comp/ImageComp'
import MenuHeader from './components/menu-header/MenuHeader'
import MenuList from './components/menu-list/MenuList'
import StartButton from './components/start-button/StartButton'
import { publicImagePaths } from './constants/imagePaths'
import {
  menuProps,
  transitionProps,
  wobbleyProps,
} from './constants/properties'
import { buttonListVariant } from './constants/variants'

export const StyledMenu = (menu) => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const props = menu.props
  const isHome = props.pathname === '/'
  const newMenu = { ...menu, props: { ...props, isInView: isInView } }

  const frame = (
    <motion.div
      className='frame-container'
      {...menuProps(isInView)}
    >
      <BgFuzzyEffect />
      <ImageComp
        alt='frame'
        className='frame-content'
        src={publicImagePaths.frame}
      />
    </motion.div>
  )

  const intialTransition = (
    <Fragment>
      <InitFuzzyEffect />
      <ColorBarEffect />
    </Fragment>
  )

  const headMenu = (
    <MenuHeader
      pathname={props.pathname}
      isInView={isInView}
    />
  )

  const transitionEffects = (children) => {
    return (
      <motion.div
        {...transitionProps}
        className='blurry'
      >
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

  const renderMenu = (
    <Fragment>
      {!isHome && headMenu}
      {isInView && intialTransition}
      <motion.div {...wobbleyProps} className='content-menu'>
        {frame}
        {newMenu}
      </motion.div>
    </Fragment>
  )

  return (
    <Fragment>
      <ImageComp
        alt='vignette'
        className='vignette'
        src={publicImagePaths.vignette}
      />
      <div>{transitionEffects(renderMenu)}</div>
    </Fragment>
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
