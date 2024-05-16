import { motion } from 'framer-motion'
import React from 'react'
import { toast } from 'react-custom-alert'
import Avatar from '../components/avatar/Avatar'
import { contactChoicesList } from '../constants/lists'
import { menuProps } from '../constants/properties'

const Contact = (props) => {
  const { isInView } = props
  const alertSuccess = () => toast.success('E-mail copied!')

  return (
    <motion.div
      className='wrapper'
      {...menuProps(isInView)}
    >
      <Avatar
        {...props}
        choice={contactChoicesList}
        isAvatarWave={true}
        alert={alertSuccess}
      />
    </motion.div>
  )
}

export default Contact
