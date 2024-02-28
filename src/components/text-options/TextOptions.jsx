import React from 'react'
import { questionTextList } from '../../constants/lists'
import './style.css'

const TextOptions = (props) => {
  const { option, setOption, isFinished } = props
  const selectedQuestion = questionTextList.find(({ id }) => id === option)
  const filteredQuestion = questionTextList.filter(
    (data) => data !== selectedQuestion
  )

  const renderOptions = (
    <div className='options-content'>
      {filteredQuestion.map(({ id, question }) => (
        <button
          onClick={() => setOption(id)}
          key={id}
        >
          {question}
        </button>
      ))}
    </div>
  )

  return <div>{isFinished && renderOptions}</div>
}

export default TextOptions
