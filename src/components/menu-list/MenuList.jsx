import React from 'react'
import { Link } from 'react-router-dom'
import { menuList } from '../../constants/lists'

const MenuList = () => {
  const linkComponent = (text) => (
    <Link
      to={text === 'home' ? '/' : `/${text}`}
      className='arrow'
    >
      <img
        height='30px'
        src='logo-yellow.png'
        className='sign'
        alt='cursor'
      />
      {text}
    </Link>
  )

  return (
    <div>
      {menuList.map((data, index) => (
        <li key={index}>{linkComponent(data)}</li>
      ))}
    </div>
  )
}

export default MenuList
