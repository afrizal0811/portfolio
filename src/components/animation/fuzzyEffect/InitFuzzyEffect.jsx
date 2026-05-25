import { motion } from 'framer-motion';
import React from 'react';
import { disappearedFuzzyProps, fuzzyProps } from '../../../constants/properties';
import './style.css';

/**
 * Sebelumnya import `DisapperedFuzzyProps` (typo ganda).
 * Sekarang menggunakan nama yang sudah diperbaiki: `disappearedFuzzyProps`.
 */
const InitFuzzyEffect = () => (
  <motion.div {...disappearedFuzzyProps}>
    <motion.div
      className="fuzzy-overlay"
      {...fuzzyProps}
    />
  </motion.div>
);

export default InitFuzzyEffect;
