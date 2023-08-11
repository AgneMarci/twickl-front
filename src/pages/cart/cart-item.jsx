import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const {  removeFromCart } = useContext(ShopContext);

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  return (
    <div className="cartItem">
      <img src={productImage} alt={`Product: €{productName}`} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: €{price}</p>
        <button onClick={handleRemoveFromCart}>Remove</button>
      </div>
    </div>
  );
};