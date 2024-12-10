import React from 'react'
import Checkin_out from './Checkin_out'
import './booking_page.css'
import Navbar from '../home_page/Navbar'
function Booking_page() {
  return (
    <>
    <Navbar />
    <div id="main-container">
     
      <div id="heading">Request To Book </div>
      <Checkin_out/>
    </div>
    </>
  )
}

export default Booking_page
