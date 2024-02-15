import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { textBoxVariant } from '../../constants/variants'
const TextBox = (props) => {
  const { isInView } = props
  const [isSeen, setIsSeen] = useState(false)
  const text = ['Hi! My name is Afrizal Maulana.']
  const controls = useAnimation()
  const ref = useRef(null)
  const isInViewText = useInView(ref, { amount: 0.5, once: true })
  const staggerTime = isInView ? (isSeen ? 0.05 : 1.8) : 0.05

  useEffect(() => {
    if (isInViewText) {
      controls.start('visible')
    }
    setTimeout(() => {
      setIsSeen(true)
    }, 1800)

  }, [isInViewText, controls, isSeen])

  return (
      <motion.p
        ref={ref}
        initial='hidden'
        animate={controls}
        variants={{
          visible: {
            transition: {
              staggerChildren: staggerTime,
            },
          },
          hidden: {},
        }}
      >
        {text.map((line, lineIndex) => (
          <span key={`${line}-${lineIndex}`}>
            {line.split(' ').map((word, wordIndex) => (
              <span key={`${word}-${wordIndex}`}>
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    variants={textBoxVariant}
                  >
                    {char}
                  </motion.span>
                ))}
                <span>&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.p>
  )
}

export default TextBox
