import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ImageComp from '../../../components/image-comp/ImageComp';
import ImageZoom from '../../../components/image-comp/ImageZoom';
import { glitchProps, menuProps } from '../../../constants/properties';
import { privateVariant } from '../../../constants/variants';
import useIsMobile from '../../../hooks/useIsMobile';
import { getFilteredImages, isEmptyObject, toCamelCase } from './privateProjectUtils';
import './../style.css';

const PrivateProject = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const navigate = useNavigate();
  const { name } = useParams();
  const isMobile = useIsMobile(768);

  const imagesList = getFilteredImages(name);
  const camelizedName = toCamelCase(name);
  const selectedImages = imagesList[camelizedName];

  // Redirect ke home jika proyek tidak ditemukan
  if (isEmptyObject(imagesList) || !selectedImages) {
    navigate('/', { replace: true });
    return null;
  }

  return (
    <motion.div
      ref={ref}
      className="wrapper"
      {...menuProps(isInView)}
    >
      <div className="project-container">
        <motion.div
          className="project-content"
          {...glitchProps('image')}
        >
          {selectedImages.map((src, index) => (
            <motion.div
              key={index}
              className="project-img-container"
              initial="initial"
              variants={privateVariant}
              whileInView="animate"
            >
              {isMobile ? (
                <ImageZoom
                  alt={src}
                  src={src}
                />
              ) : (
                <ImageComp
                  className="project-img-content"
                  src={src}
                  width="80%"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PrivateProject;
