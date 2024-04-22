import { motion } from 'framer-motion'
import React from 'react'
import Avatar from '../avatar/Avatar'
import { aboutChoicesList } from '../constants/lists'
import { menuProps } from '../constants/properties'
import './style.css'

const About = (props) => {
  const { isInView } = props
  return (
    <motion.div
      className='wrapper'
      {...menuProps(isInView)}
    >
      <Avatar
        {...props}
        choice={aboutChoicesList}
      />
    </motion.div>
  )
}

export default About
