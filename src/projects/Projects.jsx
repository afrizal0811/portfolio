import { easeInOut, motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import { getRandom } from '../utils/randomNumbers'
import './style.css'

const Projects = () => {
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
    <div>
      <motion.div
        className='wrapper'
        initial={{ scaleY: 0, scaleX: 0 }}
        animate={{ scaleY: getRandom(0, 0.01), scaleX: getRandom(0.7, 1) }}
        exit={{ scaleY: 0, scaleX: 0 }}
        transition={{ duration: 1, ease: easeInOut }}
      >
        <h1>Projects</h1>
        <ol>
          {list.map((data, index) => (
            <li key={index}>{linkComponent(data)}</li>
          ))}
        </ol>
      </motion.div>
    </div>
  )
}

export default Projects
