import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import { toast } from 'react-custom-alert';
import Avatar from '../../components/avatar/Avatar';
import { menuProps } from '../../constants/properties';
import { choicesList } from './contactData';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const handleEmailCopied = () => toast.success('E-mail copied!');

  return (
    <motion.div
      ref={ref}
      className="wrapper"
      {...menuProps(isInView)}
    >
      <Avatar
        isInView={isInView}
        choice={choicesList}
        isAvatarWave={true}
        alert={handleEmailCopied}
      />
    </motion.div>
  );
};

export default Contact;
