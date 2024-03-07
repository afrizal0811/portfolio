import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { menuProps } from '../constants/properties'
import { useTypingEffect } from '../utilities/typingEffect'
import { contactData } from './help'
import './style.css'
import { contactVariant } from '../constants/variants'

const Contact = (props) => {
  const { isInView } = props
  const [isSeen, setIsSeen] = useState(false)
  const delayTime = isInView ? (isSeen ? 100 : 2000) : 100
  const typingText = useTypingEffect('Hey.', delayTime)

  useEffect(() => {
    setTimeout(() => {
      setIsSeen(true)
    }, 1900)
  }, [isSeen])

  return (
    <motion.div
      className='wrapper'
      {...menuProps(isInView)}
    >
      <div className='contact-container'>
        <div className='contact-content'>
          <h1 className='title'>{typingText}</h1>
          <div className='contact-data'>
            {contactData.map((data, index) => {
              const { type, link } = data
              return (
                <a
                  key={index}
                  href={`${type === 'Email' ? 'mailto:' : ''}${link}`}
                  target='_blank'
                  rel='noreferrer'
                >
                  <motion.p
                    variants={contactVariant}
                    whileHover='hover'
                  >
                    {type}
                  </motion.p>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
