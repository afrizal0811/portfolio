import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { StyledButtonList } from '../AnimatedHandler'
import { menuProps } from '../constants/properties'
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
      <div className='title-menu'>
        <div className='title-name-menu'>
          <h2>Afrizal</h2>
          <h1>Maulana</h1>
        </div>
        <p>Web Developer</p>
      </div>
      <ol className='menu-list-menu'>
        <motion.div>{StyledButtonList(params)}</motion.div>
      </ol>
    </motion.div>
  )
}
/* <motion.div
        className='title-bg'
        initial={{ opacity: 0, height: 0, width: 0 }}
        animate={{ opacity: '20%', height: '170px', width: '490px' }}
        transition={{ delay: 0.5, duration: 0.5 }}
      /> */
export default Main
