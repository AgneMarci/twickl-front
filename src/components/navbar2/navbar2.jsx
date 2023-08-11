import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import "./navbar2.css";

export const Navbar2 = () => {
  const [isWomenDropdownOpen, setIsWomenDropdownOpen] = useState(false);
  const [isMenDropdownOpen, setIsMenDropdownOpen] = useState(false);

  return ( 
    <nav className="primary-navigation">
      <div className="nav-links">
        <NavLink to="/shop">SHOP</NavLink>
        <div 
          className="dropdown-container"
          onMouseEnter={() => setIsWomenDropdownOpen(true)}
          onMouseLeave={() => setIsWomenDropdownOpen(false)}
        >
          <NavLink to="/women" >WOMEN </NavLink>
          {isWomenDropdownOpen && (
            <ul className="dropdownNavbar">
              <li><NavLink to="/women/all">ALL</NavLink></li>
              <li><NavLink to="/women/shoes">SHOES</NavLink></li>
              <li><NavLink to="/women/bottoms">BOTTOMS</NavLink></li>
              <li><NavLink to="/women/tops">TOPS</NavLink></li>
              <li><NavLink to="/women/dresses">DRESSES, SKIRTS</NavLink></li>
              <li><NavLink to="/women/other">OTHER</NavLink></li>
            </ul>
          )}
        </div>
        <div 
          className="dropdown-container"
          onMouseEnter={() => setIsMenDropdownOpen(true)}
          onMouseLeave={() => setIsMenDropdownOpen(false)}
        >
          <NavLink to="/men" >MEN </NavLink>
          {isMenDropdownOpen && (
            <ul className="dropdownNavbar">
              <li><NavLink to="/men/all">ALL</NavLink></li>
              <li><NavLink to="/men/shoes">SHOES</NavLink></li>
              <li><NavLink to="/men/bottoms">BOTTOMS</NavLink></li>
              <li><NavLink to="/men/tops">TOPS</NavLink></li>
              <li><NavLink to="/men/suits">SUITS</NavLink></li>
              <li><NavLink to="/men/other">OTHER</NavLink></li>
            </ul>
          )}
        </div>
        <NavLink to="/aboutus">ABOUT US</NavLink>
      </div>
    </nav>
  );
};