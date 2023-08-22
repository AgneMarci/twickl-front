import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useTranslation } from 'react-i18next';
import './account.css'; 
import profilePicture from '../../assets/profile-picture.png';
import Newsletter from '../../components/newsletter/newsletter';
import Footer from '../../components/footer/footer';
import {PRODUCTS} from "../../products";
import { Product } from "../../pages/clothes/product";
import DeleteConfirmation from '../../components/deleteConfirmation/deleteConfirmation';
import EditConfirmation from '../../components/editConfirmation/editConfirmation';

export const Account = () => {
  const { t } = useTranslation();
  const [userDetails, setUserDetails] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8080/account-details')
      .then(response => {
        setUserDetails(response.data);
      })
      .catch(error => {
        console.error("Error fetching user details:", error);
      });
  }, []);

  const handleDeleteConfirm = () => {
    console.log("Deleting account...");
    setShowDeleteModal(false);
  };

  return (
    <div className="main">
      <div className="account">
        <div className="wrapper3">
          <h1>{t('ACCOUNT DETAILS')}</h1>
          <div className='contentWrapper'>
            <div className='profilePicture'>
              <img src={profilePicture} alt="Profile" />
            </div>
            <table className='profileTable'>
              <tbody>
                <tr>
                  <td>{t('Name')}</td>
                  <td>{userDetails.name}</td>
                </tr>
                <tr>
                  <td>{t('Last name')}</td>
                  <td>{userDetails.lastName}</td>
                </tr>
                <tr>
                  <td>{t('Username')}</td>
                  <td>{userDetails.username}</td>
                </tr>
                <tr>
                  <td>{t('Email')}</td>
                  <td>{userDetails.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button onClick={() => setShowEditModal(true)}>{t('EDIT')}</button>
          <button onClick={() => setShowDeleteModal(true)}>{t('DELETE')}</button>
        </div>
        <div className="wrapper3">
          <h1>{t('YOUR ADDED ITEMS')}</h1>
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
            setShowEditModal(false);
          }}
        />
      )}
      <Newsletter />
      <Footer />
    </div>
  );
}
