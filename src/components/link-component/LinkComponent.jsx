import React from 'react'
import { Link } from 'react-router-dom'
import { publicImagePaths } from '../../constants/imagePaths'
import IsMobile from '../../utilities/isMobile'
import ImageComp from '../image-comp/ImageComp'
import './styles.css'
const LinkComponent = (props) => {
  const { menu, pathname } = props
  const isHome = pathname === '/'
  const isSelectedMenu = pathname === `/${menu}`

  const logo = (
    <ImageComp
      alt='cursor'
      className='sign-menu'
      height={IsMobile(768) ? '40px' : '60px'}
      src={publicImagePaths.logoBlue}
    />
  )

  const unselectedLink = (
    <span className='arrow-menu disabled-link'>
      {isHome && logo}
      {menu}
    </span>
  )

  const selectedLink = (
    <Link
      to={menu === 'home' ? '/' : `/${menu}`}
      className='arrow-menu'
    >
      {isHome && logo}
      {menu}
    </Link>
  )

  return <div>{isSelectedMenu ? unselectedLink : selectedLink}</div>
}

export default LinkComponent
