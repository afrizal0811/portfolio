import { motion } from 'framer-motion'
import React, { useState } from 'react'
import TextBox from '../components/text-box/TextBox'
import TextOptions from '../components/text-options/TextOptions'
import { menuProps } from '../constants/properties'
import './style.css'

const About = (props) => {
  const { isInView } = props
  const [option, setOption] = useState(0)
  return (
    <motion.div
      className='wrapper'
      {...menuProps(isInView)}
    >
      <div className='container'>
        <div className='about-content'>
          <div className='options'>
            <TextOptions
              setOption={setOption}
              className='asu'
            />
          </div>
          <TextBox
            isInView={isInView}
            option={option}
          />
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
