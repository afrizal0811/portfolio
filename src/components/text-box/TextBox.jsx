import React, { useEffect, useState } from 'react';
import useTypingEffect from '../../hooks/useTypingEffect';
import './style.css';

const TextBox = ({ choice, isInView, linkId, option, setIsFinished }) => {
  const [isSeen, setIsSeen] = useState(false);

  const hasNumericLinkId = typeof linkId === 'number';
  const delayTime = isInView ? (hasNumericLinkId || isSeen ? 20 : 2100) : 20;
  const index = linkId ?? option;

  /**
   * Bug lama: dependency `[isSeen]` menyebabkan timer dibuat ulang
   * setiap kali isSeen berubah jadi true, lalu langsung restart.
   * Fix: early return `if (isSeen)` agar timer hanya jalan sekali.
   */
  useEffect(() => {
    if (isSeen) return;
    const timer = setTimeout(() => setIsSeen(true), 2000);
    return () => clearTimeout(timer);
  }, [isSeen]);

  const textDisplay = useTypingEffect(choice[index].explain, delayTime, setIsFinished);

  return (
    <div className="text-box">
      <p>{textDisplay}</p>
    </div>
  );
};

export default TextBox;
