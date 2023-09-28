import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <div className="carousel">
      {images.length > 1 && <button onClick={prevImage}>Précédent</button>}
      <img src={images[currentIndex]} alt="" />
      {images.length > 1 && <button onClick={nextImage}>Suivant</button>}
      {images.length > 1 && <p>{`${currentIndex + 1}/${images.length}`}</p>}
    </div>
  );
};

export default Carousel;
