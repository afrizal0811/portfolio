import React, { useState } from 'react'
import ImageComp from '../components/image-comp/ImageComp'
import TextBox from '../components/text-box/TextBox'
import TextOptions from '../components/text-options/TextOptions'
import imagePaths from '../constants/imagePaths'
import './style.css'

const Avatar = (props) => {
  const { isInView, choice, pathname } = props
  const [option, setOption] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const [isAvatarShow, setIsAvatarShow] = useState(true)
  const isFirstOption = option === 0
  const isAboutPage = pathname === '/about'
  const imageSrc =
    isFirstOption && isAboutPage ? imagePaths.avatarWave : imagePaths.avatarIdle

  const renderAvatar = (
    <div className='avatar-content'>
      <div>
        <ImageComp
          className='avatar'
          src={imageSrc}
          alt='avatar'
        />
      </div>
      <div className='options'>
        <TextOptions
          choice={choice}
          option={option}
          setOption={setOption}
          isFinished={isFinished}
          pathname={pathname}
          setIsAvatarShow={setIsAvatarShow}
        />
      </div>
      <div className='box'>
        <TextBox
          choice={choice}
          isInView={isInView}
          option={option}
          setIsFinished={setIsFinished}
        />
      </div>
    </div>
  )
  return <div className='avatar-container'>{isAvatarShow && renderAvatar}</div>
}

export default Avatar
