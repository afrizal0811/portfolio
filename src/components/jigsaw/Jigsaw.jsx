import React, { useState } from 'react'
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import { JigsawData } from './help'
import './style.css'
const Jigsaw = () => {
  const [isSolved, setIsSolved] = useState(false)
  const handleSolve = () => {
    setIsSolved(true)
  }

  const linkProps = (data) =>
    isSolved
      ? {
          href: data.href,
          target: '_blank',
          rel: 'noreferrer',
        }
      : {}

  return (
    <div>
      {JigsawData.map((data) => (
        <a {...linkProps(data)}>
          <JigsawPuzzle
            key={data.id}
            imageSrc={data.image}
            rows={2}
            columns={2}
            onSolved={() => handleSolve()}
            className='jigsaw-puzzle'
          />
        </a>
      ))}
    </div>
  )
}

export default Jigsaw
