import React, { useRef } from 'react';

function ImageGenerator({ text }) {
  const imageRef = useRef(null);

  const handleConvert = () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0);
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'image.png';
      link.href = dataUrl;
      link.click();
    };

    img.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='${imageRef.current.offsetWidth}' height='${imageRef.current.offsetHeight}'><foreignObject width='100%' height='100%'><div xmlns='http://www.w3.org/1999/xhtml'>${text}</div></foreignObject></svg>`;
  };

  return (
    <div>
      <div ref={imageRef}>{text}</div>
      <button onClick={handleConvert}>Convert to Image</button>
    </div>
  );
}
export default ImageGenerator