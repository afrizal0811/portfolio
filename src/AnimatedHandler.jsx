import { motion, useInView } from 'framer-motion'
import React, { Fragment, useRef } from 'react'
import ColorBarEffect from './components/animation/colorBarEffect/ColorBarEffect'
import BgFuzzyEffect from './components/animation/fuzzyEffect/BgFuzzyEffect'
import InitFuzzyEffect from './components/animation/fuzzyEffect/InitFuzzyEffect'
import ImageComp from './components/image-comp/ImageComp'
import MenuHeader from './components/menu-header/MenuHeader'
import { publicImagePaths } from './constants/imagePaths'
import {
  glitchProps,
  menuProps,
  transitionProps,
  wobbleyProps,
} from './constants/properties'

export const StyledMenu = (menu) => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const props = menu.props
  const isHome = props.pathname === '/'
  const newMenu = { ...menu, props: { ...props, isInView: isInView } }

  const frame = (
    <motion.div {...menuProps(isInView)}>
      <BgFuzzyEffect />
      <motion.div
        {...glitchProps('image')}
        className='frame-container'
      >
        <ImageComp
          alt='frame'
          className='frame-content'
          src={publicImagePaths.frame}
        />
      </motion.div>
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
      <motion.div
        {...wobbleyProps}
        className='menu-content'
      >
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
