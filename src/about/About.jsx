import { motion } from 'framer-motion'
import React, { useState } from 'react'
import TextBox from '../components/text-box/TextBox'
import TextOptions from '../components/text-options/TextOptions'
import { menuProps } from '../constants/properties'
import './style.css'

const About = (props) => {
  const { isInView } = props
  const [option, setOption] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  
  return (
    <motion.div
      className='wrapper'
      {...menuProps(isInView)}
    >
      <div className='container'>
        <div className='about-content'>
          <div className='options'>
            <TextOptions
              option={option}
              setOption={setOption}
              isFinished={isFinished}
            />
          </div>
          <TextBox
            isInView={isInView}
            option={option}
            setIsFinished={setIsFinished}
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
