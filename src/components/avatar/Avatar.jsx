import React, { useEffect, useState } from 'react'
import imagePaths from '../../constants/imagePaths'
import ImageComp from '../image-comp/ImageComp'
import TextBox from '../text-box/TextBox'
import TextOptions from '../text-options/TextOptions'
import './style.css'
import { getCookies } from '../../utilities/handleCookies'

const Avatar = (props) => {
  const {
    choice,
    linkId,
    isInView,
    pathname,
    setIsInitialOptionSelected,
    setIsLinkClicked,
    setSelectedMultiOption,
  } = props

  const [option, setOption] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const [isAvatarShow, setIsAvatarShow] = useState(true)
  const isFirstOption = option === 0
  const isAboutPage = pathname === '/about'
  const isProjectsPage = pathname === '/projects'
  const imageSrc =
    isFirstOption && isAboutPage ? imagePaths.avatarWave : imagePaths.avatarIdle

  useEffect(() => {
    const cookies = getCookies()
    if (isProjectsPage && !cookies) {
      setIsInitialOptionSelected(isAvatarShow)
    }
  }, [isAvatarShow, isProjectsPage, setIsInitialOptionSelected])

  const renderAvatar = (
    <div className='avatar-content'>
      <div>
        <ImageComp
          alt='avatar'
          className='avatar'
          src={imageSrc}
        />
      </div>
      <div className='options'>
        <TextOptions
          choice={choice}
          linkId={linkId}
          isFinished={isFinished}
          option={option}
          pathname={pathname}
          setIsAvatarShow={setIsAvatarShow}
          setIsLinkClicked={setIsLinkClicked}
          setOption={setOption}
          setSelectedMultiOption={setSelectedMultiOption}
        />
      </div>
      <div className='box'>
        <TextBox
          choice={choice}
          linkId={linkId}
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
