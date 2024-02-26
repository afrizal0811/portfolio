import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Jigsaw from '../components/jigsaw/Jigsaw'
import { menuProps } from '../constants/properties'
import './style.css'

const Projects = (props) => {
  const { isInView } = props
  const [solvedJigsaw, setSolvedJigsaw] = useState(0)
  const [totalJigsaw, setTotalJigsaw] = useState(0)
  const fixedNumber = solvedJigsaw === 0 ? 0 : solvedJigsaw / 2

  return (
    <motion.div
      className='wrapper'
      {...menuProps(isInView)}
    >
      <div className='container'>
        <div className='content'>
          <p>
            Solved ({fixedNumber}/{totalJigsaw})
          </p>
          <Jigsaw
            setSolvedJigsaw={setSolvedJigsaw}
            setTotalJigsaw={setTotalJigsaw}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
