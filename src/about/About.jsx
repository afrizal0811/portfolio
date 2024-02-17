import { motion } from 'framer-motion'
import React, { useState } from 'react'
import TextBox from '../components/text-box/TextBox'
import TextOptions from '../components/text-options/TextOptions'
import imagePaths from '../constants/imagePaths'
import { menuProps } from '../constants/properties'
import './style.css'

const About = (props) => {
  const { isInView } = props
  const [option, setOption] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const isFirstOption = option === 0
  return (
    <motion.div
      className='wrapper'
      {...menuProps(isInView)}
    >
      <div className='about-container'>
        <div className='about-content'>
          <div className='options'>
            <TextOptions
              option={option}
              setOption={setOption}
              isFinished={isFinished}
            />
          </div>
          <img
            className='avatar'
            src={isFirstOption ? imagePaths.avatarWave : imagePaths.avatarIdle}
            alt='avatar'
            draggable='false'
          />

          <TextBox
            isInView={isInView}
            option={option}
            setIsFinished={setIsFinished}
          />
          <img
            className='chatbox'
            src={imagePaths.chatBox}
            alt='chatbox'
            draggable='false'
          />
        </div>
      </div>
    </motion.div>
  )
}

export default About
