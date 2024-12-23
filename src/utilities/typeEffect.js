import { useEffect, useRef, useState } from 'react'

const useTypingEffect = (text, delay, setIsFinished) => {
  const catchFinish = typeof setIsFinished !== 'undefined' ? true : false
  const [currentPosition, setCurrentPosition] = useState(0)
  const currentPositionRef = useRef(0)
  useEffect(() => {
    catchFinish && setIsFinished(false)
    const intervalId = setInterval(() => {
      setCurrentPosition((value) => value + 1)
      currentPositionRef.current += 1
      if (currentPositionRef.current > text.length) {
        clearInterval(intervalId)
        catchFinish && setIsFinished(true)
      }
    }, delay)
    return () => {
      clearInterval(intervalId)
      currentPositionRef.current = 0
      setCurrentPosition(0)
    }
  }, [delay, text, setIsFinished, catchFinish])

  return text.substring(0, currentPosition)
}

export default useTypingEffect
