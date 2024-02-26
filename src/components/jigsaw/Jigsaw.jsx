import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import { jigsawVariant } from '../../constants/variants'
import { JigsawData } from './help'
import './style.css'

const Jigsaw = (props) => {
  const { setSolvedJigsaw, setTotalJigsaw } = props
  const [isSolved, setIsSolved] = useState(false)
  const [solvedId, setSolvedId] = useState([])
  setTotalJigsaw(JigsawData.length)

  const handleSolve = (data) => {
    setIsSolved(true)
    setSolvedId((prev) => [...prev, data.id])
    setSolvedJigsaw((prevState) => prevState + 1)
  }

  const linkProps = (data) =>
    isSolved && solvedId.includes(data.id)
      ? {
          href: data.href,
          target: '_blank',
          rel: 'noreferrer',
        }
      : {}

  return (
    <div className='jigsaw-container'>
      {JigsawData.map((data) => (
        <motion.div
          className='jigsaw-content'
          variants={jigsawVariant}
          whileHover={isSolved && solvedId.includes(data.id) && 'hover'}
        >
          <a
            {...linkProps(data)}
            key={data.id}
          >
            <JigsawPuzzle
              imageSrc={data.image}
              rows={2}
              columns={2}
              onSolved={() => handleSolve(data)}
              className='jigsaw-puzzle'
            />
          </a>
        </motion.div>
      ))}
    </div>
  )
}

export default Jigsaw
