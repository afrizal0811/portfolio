import { motion, useInView } from 'framer-motion';
import React, { Fragment, useRef } from 'react';
import ColorBarEffect from './components/animation/colorBarEffect/ColorBarEffect';
import BgFuzzyEffect from './components/animation/fuzzyEffect/BgFuzzyEffect';
import InitFuzzyEffect from './components/animation/fuzzyEffect/InitFuzzyEffect';
import ImageComp from './components/image-comp/ImageComp';
import MenuHeader from './components/menu-header/MenuHeader';
import { publicImagePaths } from './constants/imagePaths';
import { glitchProps, menuProps, transitionProps, wobbleyProps } from './constants/properties';

export const PageLayout = ({ pathname, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const isHome = pathname === '/';

  const frame = (
    <motion.div {...menuProps(isInView)}>
      <BgFuzzyEffect />
      <motion.div
        {...glitchProps('image')}
        className="frame-container"
      >
        <ImageComp
          alt="frame"
          className="frame-content"
          src={publicImagePaths.frame}
        />
      </motion.div>
    </motion.div>
  );

  const initialTransition = (
    <Fragment>
      <InitFuzzyEffect />
      <ColorBarEffect />
    </Fragment>
  );

  const renderContent = (
    <Fragment>
      {!isHome && (
        <MenuHeader
          pathname={pathname}
          isInView={isInView}
        />
      )}
      {isInView && initialTransition}
      <motion.div
        {...wobbleyProps}
        className="menu-content"
      >
        {frame}
        {children}
      </motion.div>
    </Fragment>
  );

  return (
    <Fragment>
      <ImageComp
        alt="vignette"
        className="vignette"
        src={publicImagePaths.vignette}
      />
      <div>
        <motion.div
          {...transitionProps}
          className="blurry"
        >
          <motion.div
            ref={ref}
            className="wrapper"
            {...transitionProps}
          >
            {renderContent}
          </motion.div>
        </motion.div>
      </div>
    </Fragment>
  );
};
