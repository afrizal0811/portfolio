import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { StyledButtonList } from '../../AnimatedHandler'
import { glitchProps, menuProps } from '../../constants/properties'
import './style.css'

const Main = (props) => {
  const { isInView, pathname } = props
  const [started, setStarted] = useState(false)
  const params = {
    isInView,
    pathname,
    started,
    setStarted,
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
        <p>Web Developer</p>
      </motion.div>
      <ol className='menu-list'>
        <motion.div>{StyledButtonList(params)}</motion.div>
      </ol>
    </motion.div>
  )
}
export default Main
