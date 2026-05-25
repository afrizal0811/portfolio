import { useEffect, useRef, useState } from 'react'

/**
 * Hook untuk efek mengetik teks karakter per karakter.
 *
 * Nama file sebelumnya `typeEffect.js` tidak konsisten dengan nama
 * fungsi yang diekspor (`useTypingEffect`). Sekarang diseragamkan.
 *
 * @param {string} text - Teks yang akan ditampilkan.
 * @param {number} delay - Jeda antar karakter dalam milidetik.
 * @param {Function} [onFinished] - Callback opsional yang dipanggil saat teks selesai ditampilkan.
 * @returns {string} Substring teks yang sudah "diketik" sampai posisi saat ini.
 */
const useTypingEffect = (text, delay, onFinished) => {
  const hasFinishedCallback = typeof onFinished !== 'undefined'
  const [currentPosition, setCurrentPosition] = useState(0)
  const positionRef = useRef(0)

  useEffect(() => {
    if (hasFinishedCallback) onFinished(false)

    const intervalId = setInterval(() => {
      setCurrentPosition((prev) => prev + 1)
      positionRef.current += 1

      if (positionRef.current > text.length) {
        clearInterval(intervalId)
        if (hasFinishedCallback) onFinished(true)
      }
    }, delay)

    return () => {
      clearInterval(intervalId)
      positionRef.current = 0
      setCurrentPosition(0)
    }
  }, [delay, text, onFinished, hasFinishedCallback])

  return text.substring(0, currentPosition)
}

export default useTypingEffect
