import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import Newsletter from "../../components/newsletter/newsletter";
import Footer from "../../components/footer/footer";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, removeFromCart } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const [showCheckoutPopup, setShowCheckoutPopup] = useState(false);

  return (
    <div className="main">
      <div className="cart">
        <div>
          <h1>Your Cart Items</h1>
        </div>
        <div className="cart">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem key={product.id} data={product} removeFromCart={removeFromCart} />;
            }
            return null;
          })}
        </div>
        {totalAmount > 0 ? (
          <div className="checkout">
            <p>Subtotal: {totalAmount} €</p>
            <button onClick={() => navigate("/")}>CONTINUE</button>
            <button onClick={() => setShowCheckoutPopup(true)}>CHECKOUT</button>
          </div>
        ) : (
          <h1>Your Cart is Empty</h1>
        )}
      </div>
      {showCheckoutPopup && (
  <div className="checkout-popup">
    <p>Congratulations! Now just wait for your purchase.</p>
    <button onClick={() => {
      setShowCheckoutPopup(false);
      navigate("/shop");
    }}>X</button>
  </div>
)}

      <Newsletter />
      <Footer />
    </div>
  );
};
