import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './homePage/Navbar'; // Adjust path if necessary
import SlideBar from './homePage/SlideBar'; // Adjust path if necessary
import SearchBar from './homePage/SearchBar'; // Adjust path if necessary
import Cards_grid from './homePage/Cards_grid'; // Adjust path if necessary
import DetailPage from './homePage/DetailPage'; // Add DetailPage component import
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* Navbar, SearchBar, and SlideBar will persist across all pages */}
      <Navbar />
      <SearchBar />
      <SlideBar />

      {/* Define routes for navigation */}
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<Cards_grid />} />
        
        {/* Detail page route */}
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
