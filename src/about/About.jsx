import { motion } from 'framer-motion'
import React, { useState } from 'react'
import ImageComp from '../components/image-comp/ImageComp'
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
  const isLastOption = option === 2
  const imageSrc = isFirstOption ? imagePaths.avatarWave : imagePaths.avatarIdle
  const newClassOption = !isLastOption && 'not-third-options'

  return (
    <motion.div
      className='wrapper'
      {...menuProps(isInView)}
    >
      <div className='about-container'>
        <div className='about-content'>
          <div className={`${newClassOption} options`}>
            <TextOptions
              option={option}
              setOption={setOption}
              isFinished={isFinished}
            />
          </div>
          <ImageComp
            className='avatar'
            src={imageSrc}
            alt='avatar'
          />
          <TextBox
            isInView={isInView}
            option={option}
            setIsFinished={setIsFinished}
            isLastOption={isLastOption}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default About
