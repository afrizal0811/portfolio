import { Link } from 'react-router-dom'
import imagePaths from '../constants/imagePaths'
import Image from '../components/image/Image'

export const linkComponent = (text, pathname = '') => {
  const isHome = pathname === '/'
  const isSelectedMenu = pathname === `/${text}`

  const logo = (
    <Image
      height='30px'
      src={imagePaths.logoBlue}
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
