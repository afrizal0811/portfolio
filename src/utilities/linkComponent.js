import { Link } from 'react-router-dom'
import imagePaths from '../constants/imagePaths'

export const linkComponent = (text, pathname = '') => {
  const isHome = pathname === '/'
  const isSelectedMenu = pathname === `/${text}`

  const logo = (
    <img
      height='30px'
      src={imagePaths.logoYellow}
      className='sign-menu'
      alt='cursor'
    />
  )
  const unselectedLink = (
    <span className='arrow-menu disabled-link'>
      {isHome && logo}
      {text}
    </span>
  )

  const selectedLink = (
    <Link
      to={text === 'home' ? '/' : `/${text}`}
      className='arrow-menu'
    >
      {isHome && logo}
      {text}
    </Link>
  )

  return isSelectedMenu ? unselectedLink : selectedLink
}
