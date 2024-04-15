import React, { useState, useEffect } from 'react';
import './SingleSlide-min.css';

function SingleSlide({ images, alts }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  const currentImageUrl = images[currentImage];
  const currentAlt = alts[currentImage];

  return (
    <div className="slider">
      <img src={currentImageUrl} alt={currentAlt || `Image ${currentImage + 1}`} />
    </div>
  );
}

export default SingleSlide;







