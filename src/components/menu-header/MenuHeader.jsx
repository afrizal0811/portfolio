import React from 'react'
import { menuList } from '../../constants/lists'
import { linkComponent } from '../../utilities/linkComponent'
import './style.css'

const MenuHeader = (props) => {
  const { pathname } = props

  return (
    <div className='header-wrapper'>
      {menuList.toReversed().map((menu, index) => (
        <div
          className={`header-content ${
            `/${menu}` === pathname ? 'selected' : ''
          }`}
          key={index}
        >
          {linkComponent(menu, pathname)}
        </div>
      ))}
    </div>
  )
}

export default MenuHeader
