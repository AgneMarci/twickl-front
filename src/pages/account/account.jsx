import React, { useState } from 'react';
import './account.css'; 
import profilePicture from '../../assets/profile-picture.png';
import Newsletter from '../../components/newsletter/newsletter';
import Footer from '../../components/footer/footer';
import {PRODUCTS} from "../../products";
import { Product } from "../../pages/clothes/product";
import DeleteConfirmation  from '../../components/deleteConfirmation/deleteConfirmation';
import EditConfirmation  from '../../components/editConfirmation/editConfirmation';

export const Account = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  const [showEditModal, setShowEditModal] = useState(false);

  const handleDeleteConfirm = () => {
    console.log("Deleting account...");
    // You'd call your backend API to delete the account here.
    setShowDeleteModal(false);
  };

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
          <button onClick={() => setShowEditModal(true)}>EDIT</button>

          <button onClick={() => setShowDeleteModal(true)}>DELETE</button>
        </div>
        <div className="wrapper3">
          <h1>YOUR ADDED ITEMS</h1>
          <div className="clothes">
            <div className="products">
                {PRODUCTS.map((product) => (
                     <Product key={product.id} data={product} />
                ))}
            </div>    
         </div>
        </div>
      </div>
      {showDeleteModal && (
        <DeleteConfirmation 
          onCancel={() => {
            console.log("On Cancel Called");
            setShowDeleteModal(false);
      }} 
        onConfirm={handleDeleteConfirm}
        />
      )}
      {showEditModal && (
  <EditConfirmation 
    onCancel={() => {
      console.log("Edit Cancelled");
      setShowEditModal(false);
  }} 
  onConfirm={() => {
    console.log("Edit Confirmed");
    // Call backend API to make the edits here.
    setShowEditModal(false);
  }}
  />
)}

      <Newsletter />
      <Footer />
    </div>
  );
}
