import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import "./navbar1.css";
import { AccountCircle, HomeOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { ShopContext } from "../../context/shop-context";
import i18n from '../../i18n';

export const Navbar1 = () => {

    const { t } = i18n;

    const { cartItems } = useContext(ShopContext);
    const totalCartCount = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);

    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem("lang") || i18n.language);

    const handleLanguageChange = (e) => {
        e.preventDefault();
        const newLang = e.target.value;
        i18n.changeLanguage(newLang);
        setSelectedLanguage(newLang);
        localStorage.setItem("lang", newLang);
    };

    return (
        <div className="navbar1">
            <div className="leftSection">
                <div className="languageDropdown">
                    <select className="dropdownSelection" defaultValue={selectedLanguage} onChange={handleLanguageChange}>
                        <option className="a" value="en">EN</option>
                        <option className="a" value="lt">LT</option>
                    </select>
                </div>
                <div className="searchBar">
                    <input type="text" placeholder={t('searchPlaceholder')} />
                    <button>{t('searchButton')}</button>
                </div>
                <div className="center">
                    <h1 className="navbar-logo">{t('brandName')}</h1>
                </div>
            </div>
            <div className="rightSection">
                <NavLink className="navbarLink" to="/add">{t('startSelling')}</NavLink>
                <NavLink className="navbarLink" to="/login">{t('auth')}</NavLink>
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
