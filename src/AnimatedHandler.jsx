import { motion } from 'framer-motion'
import React from 'react'
import ColorBarEffect from './components/colorBarEffect/ColorBarEffect'
import FuzzyEffect from './components/fuzzyEffect/FuzzyEffect'
import { MenuVariant } from './constants/animateVariants'

export const StyledMenu = (menu) => (
  <motion.div
    variants={MenuVariant}
    initial='intial'
    animate='animate'
    transition='transition'
    exit='exit'
  >
    <FuzzyEffect />
    {/* <ColorBarEffect /> */}
    {menu}
  </motion.div>
)
