import { motion, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import MenuList from '../../components/menu-list/MenuList';
import StartButton from '../../components/start-button/StartButton';
import { glitchProps, menuProps } from '../../constants/properties';
import { buttonListVariant } from '../../constants/variants';
import useTypingEffect from '../../hooks/useTypingEffect';
import './style.css';

const TYPING_TEXT = 'Web Developer & Other Things';
const INITIAL_DELAY_MS = 2000;
const FAST_DELAY_MS = 30;

const Main = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [started, setStarted] = useState(false);
  const [isSeen, setIsSeen] = useState(false);

  useEffect(() => {
    if (isSeen) return;
    const timer = setTimeout(() => setIsSeen(true), INITIAL_DELAY_MS);
    return () => clearTimeout(timer);
  }, [isSeen]);

  const delayTime = isInView ? (isSeen ? FAST_DELAY_MS : INITIAL_DELAY_MS + 100) : 0;
  const textDisplay = useTypingEffect(TYPING_TEXT, delayTime);

  const animation = started ? 'click' : isInView ? 'unclick' : '';

  return (
    <motion.div
      ref={ref}
      className="main-wrapper"
      {...menuProps(isInView)}
    >
      <motion.div
        {...glitchProps('title')}
        className="title-menu"
      >
        <div className="title-name-menu">
          <h2>Afrizal</h2>
          <h1>Maulana</h1>
        </div>
        <p>{textDisplay}</p>
      </motion.div>

      <ol className="menu-list">
        <motion.div>
          <motion.div animate={animation}>
            {isInView && <StartButton setStarted={setStarted} />}
            <motion.div variants={buttonListVariant}>
              <MenuList />
            </motion.div>
          </motion.div>
        </motion.div>
      </ol>
    </motion.div>
  );
};

export default Main;
