import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get URL params
import axios from 'axios';
import './DetailPage.css';

function DetailPage() {
  const { id } = useParams(); // Retrieve the `id` from the URL
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    console.log('Received id:', id); // Check if id is being passed correctly

    const fetchItemDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/listings/${id}`);
        console.log('API response:', response.data); // Check the API response
        setItemDetails(response.data);
      } catch (error) {
        console.error('Error fetching item details:', error); // Log errors
      }
    };

    if (id) {
      fetchItemDetails();
    }
  }, [id]); // Re-fetch if `id` changes

  return (
    <div className="detail-page">
      {itemDetails ? (
        <div className="detail-container">
          <div className="main-image">
            <img src={itemDetails.imageUrl} alt={itemDetails.name} className="detail-image" />
          </div>
          <div className="sub-images">
            <div className="top-row">
              <img src={itemDetails.imageUrl} alt="Sub image 1" className="sub-image" />
              <img src={itemDetails.imageUrl} alt="Sub image 2" className="sub-image" />
            </div>
            <div className="bottom-row">
              <img src={itemDetails.imageUrl} alt="Sub image 3" className="sub-image" />
              <img src={itemDetails.imageUrl} alt="Sub image 4" className="sub-image" />
            </div>
          </div>
          <h1>{itemDetails.name}</h1>
          <p>{itemDetails.description}</p>
          <p>Host: {itemDetails.host.host_name}</p>
          <p>Price: {itemDetails.price}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DetailPage;
