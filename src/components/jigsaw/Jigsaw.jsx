import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import { jigsawVariant } from '../../constants/variants'
import IsMobile from '../../utilities/isMobile'
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

  const linkProps = (href, isJigsawSolved) =>
    isJigsawSolved
      ? {
          href: href,
          target: '_blank',
          rel: 'noreferrer',
        }
      : {}

  return (
    <div className='jigsaw-container'>
      {JigsawData.map((data) => {
        const isJigsawSolved = isSolved && solvedId.includes(data.id)
        const animateJigsaw = isJigsawSolved && 'solve'
        const dimmer = (
          <div class={`${IsMobile() && 'dimmer-mobile'} dimmer-container`}>
            <div class='dimmer-content'>click for more info</div>
          </div>
        )
        return (
          <div>
            <motion.div
              className='jigsaw-content'
              variants={jigsawVariant}
              animate={IsMobile() && animateJigsaw}
              whileHover={animateJigsaw}
            >
              {isJigsawSolved && dimmer}
              <a
                {...linkProps(data.href, isJigsawSolved)}
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
          </div>
        )
      })}
    </div>
  )
}

export default Jigsaw
