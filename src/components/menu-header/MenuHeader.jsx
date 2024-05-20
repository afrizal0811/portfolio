import { motion } from 'framer-motion'
import React from 'react'
import { menuProps } from '../../constants/properties'
import IsMobile from '../../utilities/isMobile'
import { linkComponent } from '../../utilities/linkComponent'
import './style.css'

const MenuHeader = (props) => {
  const { isInView, pathname } = props
  const menuList = ['home', 'about', 'projects', 'contact']
  const list = IsMobile() ? menuList : menuList.toReversed()

  return (
    <motion.div
      className='header-wrapper'
      {...menuProps(isInView)}
    >
      {list.map((menu, index) => (
        <div
          className={`/${menu}` === pathname ? 'selected' : ''}
          key={index}
        >
          {linkComponent(menu, pathname)}
        </div>
      ))}
    </motion.div>
  )
}

export default MenuHeader
