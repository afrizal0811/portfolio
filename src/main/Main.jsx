import React from 'react'
import { Link } from 'react-router-dom'
import { StyledArrow } from './StyledComponents'
import { getRandom } from '../utils/randomNumbers'
import { motion, easeInOut } from 'framer-motion'
const Main = ({ className }) => {
  const list = ['about', 'projects', 'contact']
  
  const linkComponent = (text) => (
    <Link
      to={`/${text}`}
      className='arrow'
    >
      <StyledArrow
        src='logo-yellow.png'
        className='sign'
      />
      {text}
    </Link>
  )

  return (
    <div className={className}>
      <motion.div
        className='wrapper'
        initial={{ scaleY: 0 }}
        animate={{ scaleY: getRandom() }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: easeInOut }}
      >
        <ol>
          {list.map((data, index) => (
            <li key={index}>{linkComponent(data)}</li>
          ))}
        </ol>
      </motion.div>
    </div>
  )
}

export default Main
