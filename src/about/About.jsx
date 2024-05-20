import { motion } from 'framer-motion'
import React from 'react'
import Avatar from '../components/avatar/Avatar'
import { menuProps } from '../constants/properties'
import { choicesList } from './help'

const About = (props) => {
  const { isInView } = props
  return (
    <motion.div
      className='wrapper'
      {...menuProps(isInView)}
    >
      <Avatar
        {...props}
        choice={choicesList}
        isAvatarWave={true}
      />
    </motion.div>
  )
}

export default About
