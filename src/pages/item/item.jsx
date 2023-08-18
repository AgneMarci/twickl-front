import React from 'react';
import itemPicture from '../../assets/sweater.jpeg';
import './item.css';
import Newsletter from '../../components/newsletter/newsletter';
import Footer from '../../components/footer/footer';
import { useContext, useState } from 'react';
import { ShopContext } from '../../context/shop-context';

export const Item = (props) => {
const {id} = props;

const { addToCart } = useContext(ShopContext);
const [showNotification, setShowNotification] = useState(false);

 const handleAddToCart = (productId) => {
   addToCart(productId);
   setShowNotification(true);

   setTimeout(() => {
     setShowNotification(false);
   }, 2000);
 };

  return (
    <div className='main'>
      <div className='wrapperItem'>
        <div className='imageItem'>
          <img src={itemPicture} alt='item' />
        </div>
        <div className='informationItem'>
          <h1>Sweater</h1>
          <h2>€ 12 </h2>
          <p>I bought this sweater, but never wore it.</p>
          <div className='button'>
            <button className="addToCartButton" onClick={() => handleAddToCart(id)}>
              ADD TO CART
              </button>
              {showNotification && <div className="notificationAdded">ADDED</div>}
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};
