import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { menuProps } from '../constants/properties'
import { contactVariant } from '../constants/variants'
import { useTypingEffect } from '../utilities/typingEffect'
import { contactData } from './help'
import './style.css'

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

  const renderLink = (type, link) => (
    <a
      href={link}
      target='_blank'
      rel='noreferrer'
    >
      <motion.p
        variants={contactVariant}
        animate='animate'
        whileHover='hover'
      >
        {type}
      </motion.p>
    </a>
  )

  return (
    <motion.div
      className='wrapper'
      {...menuProps(isInView)}
    >
      <div className='contact-container'>
        <div className='contact-content'>
          <h1 className='title'>{typingText}</h1>
          <div className='contact-data'>
            <div>
              <div>Email:</div>
              <div>
                {renderLink(
                  contactData[0].link,
                  `mailto:${contactData[0].link}`
                )}
              </div>
            </div>
            <div>
              <div>On the Internet:</div>
              <div id='internet'>
                {renderLink(contactData[1].type, contactData[1].link)}
                <span className='line'>&#47;</span>
                {renderLink(contactData[2].type, contactData[2].link)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
