// DetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DetailPage.css';

function DetailPage() {
  const { id } = useParams(); // Get the `id` from the URL params
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    console.log('Received id:', id); // For debugging

    const fetchItemDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/listings/${id}`);
        console.log('API response:', response.data); // Check the response data
        setItemDetails(response.data); // Set the data to the state
      } catch (error) {
        console.error('Error fetching item details:', error);
      }
    };

    if (id) {
      fetchItemDetails();
    }
  }, [id]); // Re-fetch data if `id` changes

  return (
    <div className="detail-page">
      {itemDetails ? (
        <div className="detail-container">
          <h1>{itemDetails.name}</h1>
          <div className="image-container">
            <img src={itemDetails.imageUrl} alt={itemDetails.name} className="main-image" />
            <div className="small-images">
              {itemDetails.additionalImages && itemDetails.additionalImages.map((image, index) => (
                <img key={index} src={image} alt={`Additional ${index + 1}`} className="small-image" />
              ))}
            </div>
          </div>
          <p>{itemDetails.description}</p>
          <p>Price: ${itemDetails.price}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DetailPage;
