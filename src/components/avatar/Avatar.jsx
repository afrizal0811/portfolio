import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { publicImagePaths } from '../../constants/imagePaths'
import { glitchProps } from '../../constants/properties'
import { getCookies } from '../../utilities/handleCookies'
import ImageComp from '../image-comp/ImageComp'
import TextBox from '../text-box/TextBox'
import TextOptions from '../text-options/TextOptions'
import './style.css'
const Avatar = (props) => {
  const { isAvatarWave, pathname, setIsInitialOptionSelected } = props || null

  const [option, setOption] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const [isAvatarShow, setIsAvatarShow] = useState(true)
  const isFirstOption = option === 0
  const isProjectsPage = pathname === '/projects'
  const imageSrc =
    isFirstOption && isAvatarWave
      ? publicImagePaths.avatarWave
      : publicImagePaths.avatarIdle

  useEffect(() => {
    const cookies = getCookies()
    if (isProjectsPage && !cookies) {
      setIsInitialOptionSelected(isAvatarShow)
    }
  }, [isAvatarShow, isProjectsPage, setIsInitialOptionSelected])

  const renderAvatar = (
    <div className='avatar-content'>
      <motion.div {...glitchProps('image')}>
        <ImageComp
          alt='avatar'
          className='avatar'
          src={imageSrc}
        />
      </motion.div>
      <div className='text-container'>
        <div className='options'>
          <TextOptions
            {...props}
            isFinished={isFinished}
            option={option}
            setIsAvatarShow={setIsAvatarShow}
            setOption={setOption}
          />
        </div>
        <motion.div
          {...glitchProps('text')}
          className='box'
        >
          <TextBox
            {...props}
            option={option}
            setIsFinished={setIsFinished}
          />
        </motion.div>
      </div>
    </div>
  )
  return <div className='avatar-container'>{isAvatarShow && renderAvatar}</div>
}

export default Avatar
