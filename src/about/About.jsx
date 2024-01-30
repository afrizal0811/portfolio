import { easeInOut, motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import { getRandom } from '../utils/randomNumbers'
import './style.css'
const About = ({ className }) => {
  const list = ['about', 'projects', 'contact']

  const linkComponent = (text) => (
    <Link
      to={`/${text}`}
      className='arrow'
    >
      <img
        height='65px'
        src='logo-yellow.png'
        className='sign'
        alt='cursor'
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
        <h1>About</h1>
        <ol>
          {list.map((data, index) => (
            <li key={index}>{linkComponent(data)}</li>
          ))}
        </ol>
      </motion.div>
    </div>
  )
}

export default About
