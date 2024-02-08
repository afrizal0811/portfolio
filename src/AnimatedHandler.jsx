import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import BlackBackground from './components/animation/black-bg/BlackBackground'
import ColorBarEffect from './components/animation/colorBarEffect/ColorBarEffect'
import FuzzyEffect from './components/animation/fuzzyEffect/FuzzyEffect'
import { transitionVariant } from './constants/variants'

export const StyledMenu = (menu) => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const intialTransition = (
    <div>
      <FuzzyEffect />
      <ColorBarEffect />
      <BlackBackground />
    </div>
  )
  const newMenus = (menu) => {
    let menus = menu
    menu = { ...menus, props: { isInView: isInView } }
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
      {newMenus(menu)}
    </motion.div>
  )
}
