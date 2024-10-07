import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faUser, faList } from '@fortawesome/free-solid-svg-icons'; // Import faList from solid icons

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('stays'); // Set default active link

  const handleLinkClick = (link, event) => {
    event.preventDefault();
    setActiveLink(link); // Update active link state on click
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">
          <FontAwesomeIcon icon={faAirbnb} className="logo-image" />
          <span id="name">airbnb</span>
        </Link>
      </div>
      
      <ul className="nav-links" id="navigation1">
        <li className="nav-item">
          {/* Stays Link */}
          <Link 
            to="/" 
            className={`nav-link ${activeLink === 'stays' ? 'active' : ''}`} 
            onClick={(event) => handleLinkClick('stays', event)}
          >
            Stays
          </Link>

          {/* Experiences Link */}
          <Link 
            to="/" 
            className={`nav-link ${activeLink === 'experiences' ? 'active' : ''}`} 
            onClick={(event) => handleLinkClick('experiences', event)}
          >
            Experiences
          </Link>
        </li>
      </ul>

      <ul className="nav-links2" id="navigation2">
        <li>
          {/* Airbnb your home - No Active State */}
          <Link 
            to="/" 
            className="nav-link" // Removed active state here
          >
            Airbnb your home
          </Link>

          {/* Globe Icon - No Active State */}
          <Link 
            to="/" 
            className="nav-link globe-link" // No active state here
          >
            <FontAwesomeIcon icon={faGlobe} />
          </Link>

          {/* List and User Icon - No Active State */}
          <Link 
            to="/" 
            className="nav-link" // Removed active state here
          >
            <FontAwesomeIcon icon={faList} />
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
