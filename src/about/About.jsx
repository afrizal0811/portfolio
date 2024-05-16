import { motion } from 'framer-motion'
import React from 'react'
import Avatar from '../components/avatar/Avatar'
import { aboutChoicesList } from '../constants/lists'
import { menuProps } from '../constants/properties'

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
        isAvatarWave={true}
      />
    </motion.div>
  )
}

export default About
