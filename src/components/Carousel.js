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
      {images.length > 1 && (
        <button
          className="carousel__button carousel__button--prev"
          onClick={prevImage}
        >
          <i className="carousel__chevron fa-solid fa-chevron-left"></i>
        </button>
      )}
      <img className="carousel__img" src={images[currentIndex]} alt="" />
      {images.length > 1 && (
        <button
          className="carousel__button carousel__button--next"
          onClick={nextImage}
        >
          <i className="carousel__chevron fa-solid fa-chevron-right"></i>
        </button>
      )}
      {images.length > 1 && (
        <p className="carousel__number">
          {`${currentIndex + 1}/${images.length}`}
        </p>
      )}
    </div>
  );
};

export default Carousel;
