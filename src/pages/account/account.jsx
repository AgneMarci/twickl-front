import React from 'react';
import { NavLink } from 'react-router-dom';
import './account.css'; 
import profilePicture from '../../assets/profile-picture.png';
import Newsletter from '../../components/newsletter/newsletter';
import Footer from '../../components/footer/footer';
import {PRODUCTS} from "../../products";
import { Product } from "../../pages/clothes/product";

export const Account = () => {
  return (
    <div className="main">
      <div className="account">
        <div className="wrapper3">
          <h1>ACCOUNT DETAILS</h1>
          <div className='contentWrapper'>
            <div className='profilePicture'>
              <img src={profilePicture} alt="Profile" />
            </div>
            <table className='profileTable'>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Your name</td>
                </tr>
                <tr>
                  <td>Last name</td>
                  <td>Your Last name</td>
                </tr>
                <tr>
                  <td>Username</td>
                  <td>Your Username</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>Your Email</td>
                </tr>
              </tbody>
            </table>
          </div>
            <NavLink to="/editAccount">
              <button >EDIT</button>
            </NavLink>
            <button >DELETE</button>
        </div>
        <div className="wrapper3">
          <h1>YOUR ADDED ITEMS</h1>
          <div className="clothes">
            <div className="products">
                {PRODUCTS.map((product)=> (
                     <Product key={product.id} data={product} />
                ))}
            </div>    
         </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}
