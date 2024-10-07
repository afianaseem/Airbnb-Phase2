import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './homePage/Navbar'; // Adjust path if necessary
import SlideBar from './homePage/SlideBar'; // Adjust path if necessary
import './index.css';
import SearchBar from './homePage/SearchBar';
import Cards_grid from './homePage/Cards_grid';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <SearchBar />
      <SlideBar />
      <Cards_grid />
    </BrowserRouter>
  </StrictMode>
);
