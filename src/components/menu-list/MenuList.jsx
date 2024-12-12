import { motion } from 'framer-motion'
import React from 'react'
import { glitchProps } from '../../constants/properties'
import LinkComponent from '../link-component/LinkComponent'
const MenuList = (props) => {
  const { pathname } = props
  const menuList = ['about', 'projects', 'contact']

  return (
    <motion.div {...glitchProps('text')}>
      {menuList.map((menu, index) => (
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
