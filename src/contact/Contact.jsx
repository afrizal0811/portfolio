import { motion } from 'framer-motion'
import React from 'react'
import { menuProps } from '../constants/properties'
import './style.css'

const Contact = (props) => {
  const { isInView } = props

  return (
    <motion.div
      className='wrapper'
      {...menuProps(isInView)}
    >
      <div className='content'>
        <h1 className='title'>Contact</h1>
      </div>
    </motion.div>
  )
}

export default Contact
