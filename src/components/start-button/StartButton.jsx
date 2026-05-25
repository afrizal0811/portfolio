import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { startButtonProps } from '../../constants/properties';
import './style.css';

const TRIGGER_KEYS = ['Enter', ' ', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

const StartButton = ({ setStarted }) => {
  const [isClicked, setIsClicked] = useState(false);
  const labelRef = useRef(null);

  const handleStart = () => {
    setIsClicked(true);
    setStarted(true);
  };

  useEffect(() => {
    /**
     * Sebelumnya `if (e)` selalu true — semua keydown (Tab, Shift, F5, dll)
     * men-trigger start. Sekarang hanya key yang relevan yang diterima.
     */
    const handleKeyDown = (e) => {
      if (TRIGGER_KEYS.includes(e.key)) handleStart();
    };

    const timer = isClicked
      ? setTimeout(() => {
          if (labelRef.current) labelRef.current.innerText = '';
        }, 500)
      : null;

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (timer) clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [isClicked]);

  return (
    <motion.div
      className="start-button"
      {...startButtonProps(isClicked)}
    >
      <motion.button
        type="button"
        onClick={handleStart}
      >
        <h1 ref={labelRef}>Press Start</h1>
      </motion.button>
    </motion.div>
  );
};

export default StartButton;
