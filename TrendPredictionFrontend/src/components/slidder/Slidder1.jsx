import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './slidder1.scss'; // Import CSS file for styling the slideshow

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [ // Array of image URLs for the slideshow
    'https://cdn-geomb.nitrocdn.com/LzrfPrbVihBvkJLnaBSNhbgpLWpiBBZD/assets/images/optimized/rev-1db67e1/wp-content/uploads/2021/04/fashion-desiner.jpg',
    'https://limosa.vn/wp-content/uploads/2023/10/Cach-hoc-tot-chuong-trinh-Fashion-Design-de-tro-thanh-Fashion-Designer-3.jpg',
    'https://img-b.udemycdn.com/course/750x422/4468256_f8cf.jpg',
    'https://aunotribeca.com/wp-content/uploads/2023/07/Work-Of-Designers-fashion1.jpeg',
    'https://static.skillshare.com/uploads/discussion/tmp/77c77d59.jpg'
  ];

  const navigate = useNavigate();

  // Function to handle click on text area
  const handleTextAreaClick = () => {
    navigate('/another-page'); // Navigate to another page
  };

  // Function to handle slideshow navigation
  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slideshow-container">
      <div className="slideshow">
        {images.map((image, index) => (
          <div
            key={index}
            className={
              index === currentImageIndex
                ? 'slide active'
                : 'slide'
            }
          >
            {index === currentImageIndex && (
              <img src={image} alt={`Slide ${index + 1}`} />
            )}
          </div>
        ))}
        <a className="prev" onClick={() => setCurrentImageIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1)}>&#10094;</a>
        <a className="next" onClick={nextSlide}>&#10095;</a>
      </div>
      <div className="text-area" onClick={handleTextAreaClick}>
        Now Wearing:Today's Style Diary
      </div>
    </div>
  );
};

export default Slideshow;
