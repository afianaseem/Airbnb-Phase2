import React, { useState } from 'react'; // Import useState
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Ensure FontAwesomeIcon is imported
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons'; // Ensure these icons are imported
import './Card.css';

function Card({ object }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [image,setimage]=useState(object.images[0]);

  // Handlers for next and previous buttons
  const nextSlide = () => {
    if (currentIndex < object.images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <div className='container1'>
        <div className="carousel-container-images">
          <button
            id="prevButton"
            onClick={prevSlide}
            disabled={currentIndex === 0}
            style={{ display: currentIndex === 0 ? 'none' : 'block' }} // Show only after moving forward
          >
            <FontAwesomeIcon icon={faBackward} size="1x" />
          </button>

          <div className="image-container" style={{ transform: `translateX(-${currentIndex }%)` }}>
            
              <img className="image-item" src={object.images[currentIndex]}  />
            
          </div>

          <button
            id="nextButton"
            onClick={nextSlide}
            disabled={currentIndex >= object.images.length - 1}
          >
            <FontAwesomeIcon icon={faForward} size="1x" />
          </button>
        </div>
        <div>
        <h5>{object.location}</h5>
        <p>{object.hostedby}</p>
        <p>{object.price}</p>
        </div>
      </div>
    </>
  );
}

export default Card