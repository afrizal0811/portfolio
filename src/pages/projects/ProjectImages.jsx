import { motion } from 'framer-motion';
import React from 'react';
import ImageComp from '../../components/image-comp/ImageComp';
import { glitchProps } from '../../constants/properties';
import { projectVariant } from '../../constants/variants';
import useIsMobile from '../../hooks/useIsMobile';

const ProjectImages = ({ projectList, setIsLinkClicked, setLinkId }) => {
  const isMobile = useIsMobile(768);

  const handleClick = (id) => {
    setIsLinkClicked(true);
    setLinkId(id);
  };

  return (
    <div className="project-img-container">
      {projectList.map((data) => (
        <motion.div
          className={`project-img-content ${isMobile ? 'project-img-content-bottom' : ''}`}
          key={data.id}
          variants={projectVariant}
          whileHover="hover"
          onClick={() => handleClick(data.id)}
        >
          <div className={`dimmer-container ${isMobile ? 'dimmer-container-bottom' : ''}`}>
            <div
              className="dimmer-content"
              onClick={() => handleClick(data.id)}
            >
              click for more info
            </div>
          </div>
          <motion.div {...glitchProps('image')}>
            <ImageComp
              src={data.image}
              width="100%"
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectImages;
