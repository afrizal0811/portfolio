import { motion } from 'framer-motion';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { glitchProps } from '../../constants/properties';
import LinkComponent from '../link-component/LinkComponent';

const MENU_ITEMS = ['about', 'projects', 'contact'];

/**
 * Sebelumnya `pathname` di-pass sebagai prop dari parent.
 * Sekarang MenuList membaca pathname sendiri via `useLocation()`
 * agar tidak bergantung pada prop chain dari luar.
 */
const MenuList = () => {
  const { pathname } = useLocation();

  return (
    <motion.div {...glitchProps('text')}>
      {MENU_ITEMS.map((menu) => (
        <li key={menu}>
          <LinkComponent
            menu={menu}
            pathname={pathname}
          />
        </li>
      ))}
    </motion.div>
  );
};

export default MenuList;
