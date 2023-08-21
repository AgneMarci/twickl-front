import { Facebook, Instagram, MailOutline, Twitter } from '@mui/icons-material';
import React from 'react';
import "./footer.css";
import { Phone } from 'phosphor-react';
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className='footer'>
        <div className='leftFooter'>
            <h2>Twickl</h2>
            <p>{t('footer.description')}</p>
            <div className='socialContainer'>
                <div className='socialIcon'>
                    <Facebook />
                </div>
                <div className='socialIcon' >
                    <Instagram />
                </div>
                <div className='socialIcon' >
                    <Twitter />
                </div>
            </div>
        </div>
        <div className="centerFooter">
            <h2>{t('footer.usefulLinks')}</h2>
            <ul>
                <li>
                    <NavLink to="/" className="footerNavLink">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/cart" className="footerNavLink">Cart</NavLink>
                </li>
                <li>
                    <NavLink to="/women" className="footerNavLink">Women</NavLink>
                </li>
                <li>
                    <NavLink to="/men" className="footerNavLink">Men</NavLink>
                </li>
                <li>
                    <NavLink to="/aboutus" className="footerNavLink">About us</NavLink>
                </li>
            </ul>
        </div>
        <div className='rightFooter'>
            <h2>{t('footer.contact')}</h2>
            <p1><Phone style={{marginRight:"10px"}} />+37062233456</p1>
            <p2><MailOutline style={{marginRight:"10px"}}/>info@twickl.lt</p2>
            <img style={{marginLeft:"5px"}} src="https://i.ibb.co/Qfvn4z6/payment.png" alt="Payment methods" />
        </div>
    </div>
  );
}

export default Footer;
