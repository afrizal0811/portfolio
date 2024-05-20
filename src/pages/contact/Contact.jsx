import { motion } from 'framer-motion'
import React from 'react'
import { toast } from 'react-custom-alert'
import Avatar from '../../components/avatar/Avatar'
import { menuProps } from '../../constants/properties'
import { choicesList } from './help'

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
        choice={choicesList}
        isAvatarWave={true}
        alert={alertSuccess}
      />
    </motion.div>
  )
}

export default Contact
