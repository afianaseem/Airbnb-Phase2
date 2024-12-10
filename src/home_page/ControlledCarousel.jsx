import React, { useRef, useState, useEffect } from 'react';
import './Carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCity,
  faBed,
  faEye,
  faWater,
  faShip,
  faLandmark,
  faHome,
  faFire,
  faGlobe,
  faHotel,
  faRocket,
  faTree,
  faSnowflake,
  faMountain,
  faUmbrellaBeach,
  faLeaf,
  faUtensils,
  faSwimmingPool,
  faCar,
  faPlane,
  faMap,
  faUsers,
  faStar,
  faSun,
  faSnowman,
  faPalette,
  faWrench,
  faFireAlt,
  faDumbbell
} from '@fortawesome/free-solid-svg-icons';

const IconBar = () => {
  const carouselRef = useRef(null); // Ref to the icon bar for scrolling
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const categories = [
    { icon: faCity, label: 'Top cities' },
    { icon: faBed, label: 'Rooms' },
    { icon: faEye, label: 'Amazing views' },
    { icon: faWater, label: 'Lakefront' },
    { icon: faShip, label: 'Houseboats' },
    { icon: faLandmark, label: 'Mansions' },
    { icon: faHome, label: 'Tiny homes' },
    { icon: faFire, label: 'Trending' },
    { icon: faGlobe, label: 'Earth homes' },
    { icon: faHotel, label: 'Castles' },
    { icon: faRocket, label: 'OMG!' },
    { icon: faTree, label: 'Nature' },
    { icon: faSnowflake, label: 'Snow' },
    { icon: faMountain, label: 'Mountains' },
    { icon: faUmbrellaBeach, label: 'Beach' },
    { icon: faLeaf, label: 'Eco-friendly' },
    { icon: faUtensils, label: 'Dining' },
    { icon: faSwimmingPool, label: 'Pools' },
    { icon: faCar, label: 'Road Trips' },
    { icon: faPlane, label: 'Travel' },
    { icon: faMap, label: 'Adventure' },
    { icon: faUsers, label: 'Groups' },
    { icon: faStar, label: 'Luxury' },
    { icon: faSun, label: 'Sunshine' },
    { icon: faSnowman, label: 'Winter' },
    { icon: faPalette, label: 'Art' },
    { icon: faWrench, label: 'Renovated' },
    { icon: faFireAlt, label: 'Fireplace' },
    { icon: faDumbbell, label: 'Fitness' },
  ];

  // Scroll function
  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300; // Adjust scroll amount based on item size
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Check if the carousel is at the ends
  const checkScrollButtonsVisibility = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth);
    }
  };

  // Add event listeners on mount and cleanup on unmount
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', checkScrollButtonsVisibility);
    }
    return () => {
      if (carousel) {
        carousel.removeEventListener('scroll', checkScrollButtonsVisibility);
      }
    };
  }, []);

  return (
    <div className="icon-bar-wrapper">
      {showLeftButton && (
        <button className="scroll-button left" onClick={() => scroll('left')}>
          &#8249;
        </button>
      )}

      <div className="icon-bar" ref={carouselRef}>
        {categories.map((category, index) => (
          <div key={index} className="icon-item">
            <FontAwesomeIcon icon={category.icon} className="icon" />
            <span className="icon-label">{category.label}</span>
          </div>
        ))}
      </div>

      {showRightButton && (
        <button className="scroll-button right" onClick={() => scroll('right')}>
          &#8250;
        </button>
      )}
    </div>
  );
};

export default IconBar;