import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import "./navbar1.css";
import { AccountCircle, HomeOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { ShopContext } from "../../context/shop-context";

export const Navbar1 = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  
  const { cartItems } = useContext(ShopContext);
  const totalCartCount = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="navbar1">
      <div className="leftSection">
        <div
          className={`dropdown ${isLanguageDropdownOpen ? "active" : ""}`}
          onMouseEnter={() => setIsLanguageDropdownOpen(true)}
          onMouseLeave={() => setIsLanguageDropdownOpen(false)}
        >
          <button className="dropdownButton">{selectedLanguage}</button>
          <div className={`dropdown-content ${isLanguageDropdownOpen ? "open" : ""}`}>
            <a onClick={() => handleLanguageChange("EN")}>EN</a>
            <a onClick={() => handleLanguageChange("LT")}>LT</a>
          </div>
        </div>
        <div className="searchBar">
          <input type="text" placeholder="Search for clothes" />
          <button>SEARCH</button>
        </div>
        <div className="center">
          <h1 className="navbar-logo">Twickl</h1>
        </div>
      </div>
      <div className="rightSection">
        <NavLink className="navbarLink" to="/add">START SELLING</NavLink>
        <NavLink className="navbarLink" to="/login">SIGN UP|LOG IN</NavLink>
        <NavLink to="/account">
          <AccountCircle className="icon-style" />
        </NavLink>
        <NavLink to="/">
          <HomeOutlined className="icon-style" />
        </NavLink>
        <NavLink to="/cart">
          <div className="cartIconContainer">
            <ShoppingCartOutlined className="icon-style" />
            {totalCartCount > 0 && <span className="cartCount">{totalCartCount}</span>}
          </div>
        </NavLink>
      </div>
    </div>
  );
};
