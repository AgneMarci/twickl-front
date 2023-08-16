import React, { useContext } from "react";
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
            <button>CHECKOUT</button>
          </div>
        ) : (
          <h1>Your Cart is Empty</h1>
        )}
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};
