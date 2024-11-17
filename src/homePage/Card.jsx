import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Card.css';

function Card({ object }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageUrls = [
    object.images.thumbnail_url,
    object.images.medium_url,
    object.images.picture_url,
    object.images.xl_picture_url
  ];

  // Handlers for next and previous buttons
  const nextSlide = () => {
    if (currentIndex < imageUrls.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="container1">
      <div className="carousel-container-images">
        <button
          id="prevButton"
          onClick={prevSlide}
          disabled={currentIndex === 0}
          style={{ display: currentIndex === 0 ? 'none' : 'block' }}
        >
          <FontAwesomeIcon icon={faBackward} size="1x" />
        </button>

        <div className="image-container" style={{ transform: `translateX(-${currentIndex}%)` }}>
          <img className="image-item" src={imageUrls[currentIndex]} alt={object.name} />
        </div>

        <button
          id="nextButton"
          onClick={nextSlide}
          disabled={currentIndex >= imageUrls.length - 1}
        >
          <FontAwesomeIcon icon={faForward} size="1x" />
        </button>
      </div>

      {/* Link to the detail page */}
      <h5>
        <Link to={`/detail/${object.id}`} className="card-title-link">
          {object.name}
        </Link>
      </h5>
      <p>{object.host.host_name}</p>
      <p>{object.price}</p>
    </div>
  );
}

export default Card;
