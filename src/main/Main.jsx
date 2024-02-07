import { motion } from 'framer-motion'
import React from 'react'
import MenuList from '../components/menu-list/MenuList'
import './style.css'
const Main = () => {
  return (
    <motion.div
      className='wrapper'
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0, 0.5, 1, 1, 1, 1, 1] }}
      transition={{ delay: 2.2, duration: 1 }}
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
