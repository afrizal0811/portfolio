import { motion } from 'framer-motion'
import React from 'react'
import LinkComponent from '../link-component/LinkComponent'

const MenuList = (props) => {
  const { pathname } = props
  const menuList = ['home', 'about', 'projects', 'contact']
  const filteredMenu = menuList.filter((data) => data !== 'home')

  return (
    <motion.div>
      {filteredMenu.map((menu, index) => (
        <li key={index}>
          <LinkComponent
            menu={menu}
            pathname={pathname}
          />
        </li>
      ))}
    </motion.div>
  )
}

export default MenuList
