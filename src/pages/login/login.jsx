import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useTranslation } from 'react-i18next';
import Newsletter from "../../components/newsletter/newsletter";
import Footer from "../../components/footer/footer";
import { NavLink, useNavigate } from "react-router-dom"; 
import ForgotPasswordPopup from '../../components/forgotPasswordPopup/forgotPasswordPopup';

export const Login = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showForgotPopup, setShowForgotPopup] = useState(false);

  const navigate = useNavigate();  

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginData = {
      username,
      password,
    };

    console.log(loginData);

    try {
      const response = await axios.get("http://localhost:8080/login", loginData);
      
      if (response.status === 200) {
        console.log("User logged in successfully.");
        navigate("/shop"); 
      } else {
        console.error("Error logging in.");
      }
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="main">
      <div className="login">
        <div className="wrapper2">
          <h1>{t('LOG IN')}</h1>
          <form className="loginForm" onSubmit={handleLogin}>
            <input
              placeholder={t('Username')}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              placeholder={t('Password')}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">{t('SIGN IN')}</button>
            <p className="passwordResetText" onClick={() =>
               setShowForgotPopup(true)}>
              {t('DO NOT REMEMBER THE PASSWORD?')}
            </p>
            <NavLink to="/signup">{t('CREATE A NEW ACCOUNT')}</NavLink>
          </form>
        </div>
      </div>
      <Newsletter />
      <Footer />
      {showForgotPopup && <ForgotPasswordPopup onClose={() => setShowForgotPopup(false)} />}
    </div>
  );
};