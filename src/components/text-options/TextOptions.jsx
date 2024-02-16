import React from 'react'
import { questionTextList } from '../../constants/lists'
import './style.css'
const TextOptions = (props) => {
  const { setOption } = props
  
  return (
    <div className='wrapper'>
      <div className='options-content'>
        {questionTextList.map((question, number) => (
          <button onClick={() => setOption(number)}>{question}</button>
        ))}
      </div>
    </div>
  )
}

export default TextOptions