import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { publicImagePaths } from '../../constants/imagePaths';
import { glitchProps } from '../../constants/properties';
import { getCookie } from '../../utilities/cookieUtils';
import ImageComp from '../image-comp/ImageComp';
import TextBox from '../text-box/TextBox';
import TextOptions from '../text-options/TextOptions';
import './style.css';

/**
 * `props || null` sebelumnya tidak berguna — props object selalu truthy.
 * Langsung destructure props saja.
 */
const Avatar = (props) => {
  const { isAvatarWave, pathname, setIsInitialOptionSelected } = props;

  const [option, setOption] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isAvatarShow, setIsAvatarShow] = useState(true);

  const isFirstOption = option === 0;
  const isProjectsPage = pathname === '/projects';
  const imageSrc =
    isFirstOption && isAvatarWave ? publicImagePaths.avatarWave : publicImagePaths.avatarIdle;

  useEffect(() => {
    const hasCookie = getCookie();
    if (isProjectsPage && !hasCookie) {
      setIsInitialOptionSelected(isAvatarShow);
    }
  }, [isAvatarShow, isProjectsPage, setIsInitialOptionSelected]);

  return (
    <div className="avatar-container">
      {isAvatarShow && (
        <div className="avatar-content">
          <motion.div {...glitchProps('image')}>
            <ImageComp
              alt="avatar"
              className="avatar"
              src={imageSrc}
            />
          </motion.div>
          <div className="text-container">
            <div className="options">
              <TextOptions
                {...props}
                isFinished={isFinished}
                option={option}
                setIsAvatarShow={setIsAvatarShow}
                setOption={setOption}
              />
            </div>
            <motion.div
              {...glitchProps('text')}
              className="box"
            >
              <TextBox
                {...props}
                option={option}
                setIsFinished={setIsFinished}
              />
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Avatar;
