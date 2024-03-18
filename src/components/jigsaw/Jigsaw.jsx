import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import { jigsawVariant } from '../../constants/variants'
import { JigsawData } from '../../projects/help'
import IsMobile from '../../utilities/isMobile'
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

  const renderPuzzle = (data) => (
    <JigsawPuzzle
      imageSrc={data.image}
      rows={2}
      columns={2}
      onSolved={() => handleSolve(data)}
      className='jigsaw-puzzle'
    />
  )

  const renderMappedJigsaw = JigsawData.map((data) => {
    const isJigsawSolved = isSolved && solvedId.includes(data.id)
    const animateJigsaw = isJigsawSolved && 'hover'
    const dimmerMobile = IsMobile() && 'dimmer-mobile'
    const buttonMore = (
      <div className={`${dimmerMobile} dimmer-container`}>
        <a
          {...linkProps(data.href, isJigsawSolved)}
          className='dimmer-content'
          key={data.id}
        >
          click for more info
        </a>
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
          {isJigsawSolved && buttonMore}
          <a
            {...linkProps(data.href, isJigsawSolved)}
            key={data.id}
          >
            {renderPuzzle(data)}
          </a>
        </motion.div>
      </div>
    )
  })

  return <div className='jigsaw-container'>{renderMappedJigsaw}</div>
}

export default Jigsaw
