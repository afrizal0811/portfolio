import { Link } from 'react-router-dom'

export const linkComponent = (text, pathname = '') => {
  const logo = pathname === '/' && (
    <img
      height='30px'
      src='logo-yellow.png'
      className='sign-menu'
      alt='cursor'
    />
  )

  return (
    <Link
      to={text === 'home' ? '/' : `/${text}`}
      className='arrow-menu'
    >
      {logo}
      {text}
    </Link>
  )
}
