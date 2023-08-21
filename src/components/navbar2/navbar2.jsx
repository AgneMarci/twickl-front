import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import "./navbar2.css";
import { useTranslation } from 'react-i18next'; 

export const Navbar2 = () => {
  const { t } = useTranslation();

  const [isWomenDropdownOpen, setIsWomenDropdownOpen] = useState(false);
  const [isMenDropdownOpen, setIsMenDropdownOpen] = useState(false);

  return ( 
    <nav className="primaryNavigation">
      <div className="navLinks">
        <NavLink to="/shop">{t('shop')}</NavLink>
        <div 
          className="dropdownContainer"
          onMouseEnter={() => setIsWomenDropdownOpen(true)}
          onMouseLeave={() => setIsWomenDropdownOpen(false)}
        >
          <NavLink to="/women" >{t('women')}</NavLink>
          {isWomenDropdownOpen && (
            <ul className="navList dropdownNavbar">
              <li><NavLink to="/women">{t('all')}</NavLink></li>
              <li><NavLink to="/women/shoes">{t('shoes')}</NavLink></li>
              <li><NavLink to="/women/bottoms">{t('bottoms')}</NavLink></li>
              <li><NavLink to="/women/tops">{t('tops')}</NavLink></li>
              <li><NavLink to="/women/dresses">{t('dressesSkirts')}</NavLink></li>
              <li><NavLink to="/women/other">{t('other')}</NavLink></li>
            </ul>
          )}
        </div>
        <div 
          className="dropdownContainer"
          onMouseEnter={() => setIsMenDropdownOpen(true)}
          onMouseLeave={() => setIsMenDropdownOpen(false)}
        >
          <NavLink to="/men" >{t('men')}</NavLink>
          {isMenDropdownOpen && (
            <ul className="navList dropdownNavbar">
              <li><NavLink to="/men">{t('all')}</NavLink></li>
              <li><NavLink to="/men/shoes">{t('shoes')}</NavLink></li>
              <li><NavLink to="/men/bottoms">{t('bottoms')}</NavLink></li>
              <li><NavLink to="/men/tops">{t('tops')}</NavLink></li>
              <li><NavLink to="/men/suits">{t('suits')}</NavLink></li>
              <li><NavLink to="/men/other">{t('other')}</NavLink></li>
            </ul>
          )}
        </div>
        <NavLink to="/aboutus">{t('aboutUs')}</NavLink>
      </div>
    </nav>
  );
};
