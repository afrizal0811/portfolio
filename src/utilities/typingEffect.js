import { useEffect, useRef, useState } from 'react'

export function useTypingEffect(
  textToType,
  interKeyStrokeDurationInMs,
  setIsFinished
) {
  const [currentPosition, setCurrentPosition] = useState(0)
  const currentPositionRef = useRef(0)
  useEffect(() => {
    setIsFinished(false)
    const intervalId = setInterval(() => {
      setCurrentPosition((value) => value + 1)
      currentPositionRef.current += 1
      if (currentPositionRef.current > textToType.length) {
        clearInterval(intervalId)
        setIsFinished(true)
      }
    }, interKeyStrokeDurationInMs)
    return () => {
      clearInterval(intervalId)
      currentPositionRef.current = 0
      setCurrentPosition(0)
    }
  }, [interKeyStrokeDurationInMs, textToType, setIsFinished])

  return textToType.substring(0, currentPosition)
}