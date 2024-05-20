import React from 'react'
import { Link } from 'react-router-dom'
import imagePaths from '../../constants/imagePaths'
import ImageComp from '../image-comp/ImageComp'
import './styles.css'

const LinkComponent = (props) => {
  const { menu, pathname } = props
  const isHome = pathname === '/'
  const isSelectedMenu = pathname === `/${menu}`

  const logo = (
    <ImageComp
      height='30px'
      src={imagePaths.logoBlue}
      className='sign-menu'
      alt='cursor'
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
