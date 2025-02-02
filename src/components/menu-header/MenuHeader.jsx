import { motion } from 'framer-motion'
import React from 'react'
import { glitchProps, menuProps } from '../../constants/properties'
import IsMobile from '../../utilities/isMobile'
import LinkComponent from '../link-component/LinkComponent'
import './style.css'

const MenuHeader = (props) => {
  const { isInView, pathname } = props
  const menuList = ['home', 'about', 'projects', 'contact']
  const list = IsMobile(1024) ? menuList : menuList.toReversed()

  return (
    <motion.div
      className='header-wrapper'
      {...menuProps(isInView)}
    >
      {list.map((menu, index) => (
        <motion.div
          {...glitchProps('text')}
          className={`/${menu}` === pathname ? 'selected' : ''}
          key={index}
        >
          <LinkComponent
            menu={menu}
            pathname={pathname}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default MenuHeader
