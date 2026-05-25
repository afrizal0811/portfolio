import React from 'react';
import { Link } from 'react-router-dom';
import { publicImagePaths } from '../../constants/imagePaths';
import useIsMobile from '../../hooks/useIsMobile';
import ImageComp from '../image-comp/ImageComp';
import './styles.css';

const LinkComponent = ({ menu, pathname }) => {
  const isMobile = useIsMobile(768);
  const isHome = pathname === '/';
  const isSelectedMenu = pathname === `/${menu}`;
  const to = menu === 'home' ? '/' : `/${menu}`;
  const logoHeight = isMobile ? '40px' : '60px';

  const logo = (
    <ImageComp
      alt="cursor"
      className="sign-menu"
      height={logoHeight}
      src={publicImagePaths.logoBlue}
    />
  );

  return (
    <div>
      {isSelectedMenu ? (
        <span className="arrow-menu disabled-link">
          {isHome && logo}
          {menu}
        </span>
      ) : (
        <Link
          to={to}
          className="arrow-menu"
        >
          {isHome && logo}
          {menu}
        </Link>
      )}
    </div>
  );
};

export default LinkComponent;
