import React, { useState } from 'react';
import './Carousel.css'; // Import CSS for styling

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container">
      <button className="prev-button" onClick={goToPreviousSlide}>
        Previous
      </button>
      <div className="carousel-slide">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button className="next-button" onClick={goToNextSlide}>
        Next
      </button>
    </div>
  );
}

export default Carousel;
