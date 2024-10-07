import React, { useEffect } from "react"; // Add useEffect here
import "./SearchBar.css";

const SearchBar = () => {
    useEffect(() => {
        console.log('SearchBar rendered');
      }, []);      
  return (
    <div className="navbar-container">
      <div className="search-bar">
        <button className="search-button">
          <div className="search-label">Where</div>
        </button>
        <span className="divider" />
        <button className="search-button1">
          <div className="search-label"> Check in</div>
        </button>
        <span className="divider" />
        <button className="search-button2">
          <div className="search-label">Check out</div>
        </button>
        <span className="divider" />
        <button className="search-button3">
        </button>
        <div className="search-icon">
          <span role="img" aria-label="search-icon">🔍</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
