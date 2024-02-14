import { motion } from 'framer-motion'
import React from 'react'
import { menuList } from '../../constants/lists'
import { menuProps } from '../../constants/properties'
import { linkComponent } from '../../utilities/linkComponent'
import './style.css'

const MenuHeader = (props) => {
  const { isInView, pathname } = props
  return (
    <motion.div
      className='header-wrapper'
      {...menuProps(isInView)}
    >
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
    </motion.div>
  )
}

export default MenuHeader
