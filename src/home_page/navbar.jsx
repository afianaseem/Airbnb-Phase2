// Navbar.js
import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import { faGlobe,faBars,faUser} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [activeItem, setActiveItem] = useState("Stays");
  const handleItemClick = (item, event) => {
    event.preventDefault();
    console.log(item);
    setActiveItem(item);
  };

  return (
    <>
      <nav>
        <div>
          <div id="logoname">
            <FontAwesomeIcon id="air_logo" icon={faAirbnb} />
            <span id="name">airbnb</span>
          </div>
        </div>
        <ul id="navigation1">
          <li className={`nav_li ${activeItem === "Stays" ? "active" : ""}`}>
            <a
              href="about.html"
              onClick={(event) => handleItemClick("Stays", event)}
            >
              Stays
            </a>
          </li>
          <li
            className={`nav_li ${activeItem === "Experience" ? "active" : ""}`}
          >
            <a
              href="projects.html"
              onClick={(event) => handleItemClick("Experience", event)}
            >
              Experience
            </a>
          </li>
        </ul>
        <ul id="right_nav_items">
        <li className="nav_li_right" >
            <a href="about.html">
              Airbnb Your Home
            </a>
          </li>
          <li className="nav_li_right" >
            <a href="projects.html">
            <FontAwesomeIcon id="globe" icon={faGlobe} />
            </a>
          </li>
          <li  >
            <div id="login_button">
            <FontAwesomeIcon id="Bar" icon={faBars} /><FontAwesomeIcon id="user" icon={faUser} />
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
