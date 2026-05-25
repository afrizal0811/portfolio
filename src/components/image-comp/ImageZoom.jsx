import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import './style.css';

/**
 * `key` sebelumnya di-destructure dari props — ini tidak bisa dilakukan
 * karena `key` adalah reserved prop React dan tidak diteruskan ke komponen.
 * Dihapus dari destructuring; parent cukup pasang key di pemanggil.
 */
const ImageZoom = ({ src, alt }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setPosition(scale > 1 ? scale * 40 : 0);
  }, [scale]);

  const handleZoomIn = () => setScale((prev) => prev + 0.5);
  const handleZoomOut = () => setScale((prev) => (prev > 1 ? prev - 0.5 : prev));

  return (
    <div className="zoom-container">
      <div className="btn-zoom-container">
        <button onClick={handleZoomIn}>
          <span>+</span>
        </button>
        <button onClick={handleZoomOut}>
          <span>-</span>
        </button>
      </div>
      <motion.img
        animate={{ scale }}
        alt={alt}
        className="zoom-image"
        drag
        dragConstraints={{
          top: -position,
          left: -position,
          right: position,
          bottom: position,
        }}
        src={src}
        width="100%"
      />
    </div>
  );
};

export default ImageZoom;
