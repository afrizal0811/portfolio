import { motion } from 'framer-motion'
import React from 'react'
import { menuProps } from '../constants/properties'
import './style.css'
import TextBox from '../components/text-box/TextBox'

const About = (props) => {
  const { isInView } = props
  return (
    <motion.div
      className='wrapper'
      {...menuProps(isInView)}
    >
      <div className='container'>
        <div className='about-content'>
          {/* <h1 className='title'>About</h1> */}
          <TextBox isInView={isInView} />
          <img
            className='chatbox'
            src='./images/chatbox.png'
            alt='chatbox'
            draggable='false'
          />
        </div>
      </div>
    </motion.div>
  )
}

export default About
