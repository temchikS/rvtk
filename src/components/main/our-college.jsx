import React, { useState } from 'react';
import './main.css';
import rvtk from './rvtk.png';
import foto from './foto.jpg';
import foto1 from './foto1.jpg';
import foto3 from './foto3.jpg';

export default function Our_college() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [rvtk, foto, foto1, foto3];

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className='our-college'>
      <div className='left-side'>
        <h1>Республиканский высший технологический колледж</h1>
        <div className='links'>
          <a href='#' className='link'>
            О колледже
          </a>
          <a href='#' className='link'>
            Как поступить
          </a>
        </div>
      </div>
      <div className='slider-container'>
        <div
          className='slider-images'
          style={{
            display: 'flex',
            width: `${images.length * 100}%`,
            transform: `translateX(-${currentImage * (100 / images.length)}%)`,
            transition: 'transform 0.5s ease', 
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`slider-image-${index}`}
              style={{ width: `${100 / images.length}%` }}
            />
          ))}
        </div>
        <div className='slider-controls'>
          <button onClick={prevImage}>&#8249;</button>
          <button onClick={nextImage}>&#8250;</button>
        </div>
        <div className='slider-dots'>
          {images.map((_, index) => (
            <span
              key={index}
              className={index === currentImage ? 'activ-dot' : 'dot'}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}