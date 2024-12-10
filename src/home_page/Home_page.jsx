import React from 'react'
import Navbar from './navbar'
import SearchBar from './SearchBar'
import ControlledCarousel from './ControlledCarousel'
import Cards_grid from '../Cards_grid'

function Home_page() {
  return (
    <div>
      <Navbar/>
      <ControlledCarousel/>
      <SearchBar/>

 <Cards_grid/>
    </div>
  )
}

export default Home_page
