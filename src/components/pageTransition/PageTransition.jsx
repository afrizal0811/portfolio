import { easeInOut, motion } from 'framer-motion'
import React from 'react'
import { getRandom } from '../../utils/randomNumbers'
const PageTransition = (props) => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: getRandom() }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 1, ease: easeInOut }}
    >
      {props.map((home) => (
        <div>{home}</div>
      ))}
    </motion.div>
  )
}

export default PageTransition
