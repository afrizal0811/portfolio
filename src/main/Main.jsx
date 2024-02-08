import { motion } from 'framer-motion'
import React from 'react'
import MenuList from '../components/menu-list/MenuList'
import { menuVariant } from '../constants/variants'
import './style.css'

const Main = (props) => {
  const { isInView } = props

  return (
    <motion.div
      className='wrapper'
      variants={isInView ? menuVariant : ''}
      initial='initial'
      animate='animate'
    >
      {/* <motion.div
        className='title-bg'
        initial={{ opacity: 0, height: 0, width: 0 }}
        animate={{ opacity: '20%', height: '170px', width: '490px' }}
        transition={{ delay: 0.5, duration: 0.5 }}
      /> */}
      <div className='title'>
        <div className='title-name'>
          <h2>Afrizal</h2>
          <h1>Maulana</h1>
        </div>
        <p>Web Developer</p>
      </div>
      <ol className='menu-list'>
        <MenuList />
      </ol>
    </motion.div>
  )
}

export default Main
