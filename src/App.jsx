import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './home_page/Home_page';
import ListingDetails from './listing_details/Listing_details';
import BookingPage from './booking_page/Booking_page';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listing/:id" element={<ListingDetails />} />
        <Route path="/booking/:id" element={<BookingPage />} />
      </Routes>
    
  );
}

export default App;
