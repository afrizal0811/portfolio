import { motion } from 'framer-motion'
import React from 'react'
import { linkComponent } from '../../utilities/linkComponent'

const MenuList = (props) => {
  const { pathname } = props
  const menuList = ['home', 'about', 'projects', 'contact']
  const filteredMenu = menuList.filter((data) => data !== 'home')

  return (
    <motion.div>
      {filteredMenu.map((menu, index) => (
        <li key={index}>{linkComponent(menu, pathname)}</li>
      ))}
    </motion.div>
  )
}

export default MenuList
