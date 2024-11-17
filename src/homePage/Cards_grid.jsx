import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import './Cards_grid.css';

function Cards_grid() {
  const [listings, setListings] = useState([]);

  // Fetch listings from the backend API
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/listings');
        setListings(response.data);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    fetchListings();
  }, []);

  return (
    <div>
      <div className="c">
        {listings.map((item, index) => (
          <Card key={index} object={item} />
        ))}
      </div>
    </div>
  );
}

export default Cards_grid;
