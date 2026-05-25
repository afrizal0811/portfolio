import React, { forwardRef } from 'react';

const ImageComp = forwardRef(({ className, src, alt, height, width, draggable, style }, ref) => (
  <img
    ref={ref}
    alt={alt}
    className={className}
    draggable={draggable}
    height={height}
    loading="lazy"
    src={src}
    style={style}
    width={width}
  />
));

ImageComp.displayName = 'ImageComp';

export default ImageComp;
