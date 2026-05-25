import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Avatar from '../../components/avatar/Avatar';
import { menuProps } from '../../constants/properties';
import { choicesList } from './aboutData';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      className="wrapper"
      {...menuProps(isInView)}
    >
      <Avatar
        isInView={isInView}
        choice={choicesList}
        totalChoice={choicesList.length}
        isAvatarWave={true}
      />
    </motion.div>
  );
};

export default About;
