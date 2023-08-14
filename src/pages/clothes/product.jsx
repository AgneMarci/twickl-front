import React, {useContext } from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { NavLink } from "react-router-dom"; 
import { Search } from "@mui/icons-material";
import "./clothes.css";
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;

  const { addToCart } = useContext(ShopContext);
  
  const handleAddToCart = (productId) => {
    addToCart(productId);
  }

  return (
    <div className="product">
      <div className="imageContainer">
        <img src={productImage} alt="Product" />
        <div className="iconsContainer"> 
          <NavLink to="/item" className="icon">
            <Search style={{ color: "black", fontSize: "30px" }} />
          </NavLink>
         <button className="icon" onClick={() => handleAddToCart(id)}>
            <ShoppingCartOutlinedIcon style={{ color: "black", fontSize: "30px" }} />
          </button>
        </div>
      </div>
      <div className="description">
        <p1>{productName}</p1>
        <p2>€{price}</p2>
      </div>
    </div>
  );
};