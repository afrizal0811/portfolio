import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { StyledButtonList } from '../AnimatedHandler'
import { menuVariant } from '../constants/variants'
import './style.css'
const Main = (props) => {
  const { isInView } = props
  const [started, setStarted] = useState(false)

  return (
    <motion.div
      className='wrapper-menu'
      variants={isInView ? menuVariant : ''}
      initial='initial'
      animate='animate'
    >
      <div className='title-menu'>
        <div className='title-name-menu'>
          <h2>Afrizal</h2>
          <h1>Maulana</h1>
        </div>
        <p>Web Developer</p>
      </div>
      <ol className='menu-list-menu'>
        <motion.div>{StyledButtonList(isInView, started, setStarted)}</motion.div>
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
