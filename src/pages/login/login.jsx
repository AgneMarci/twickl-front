import React, { useState } from "react";
import "./login.css";
import Newsletter from "../../components/newsletter/newsletter";
import Footer from "../../components/footer/footer";
import { NavLink } from "react-router-dom";
import ForgotPasswordPopup from '../../components/forgotPasswordPopup/forgotPasswordPopup';

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showForgotPopup, setShowForgotPopup] = useState(false);

  const loginData = {
    username,
    password,
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(loginData)


    try {
      const response = await fetch("your-api-endpoint/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        // User successfully logged in
        console.log("User logged in successfully.");
      } else {
        // Error logging in
        console.error("Error logging in.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="main">
      <div className="login">
        <div className="wrapper2">
          <h1>LOG IN</h1>
          <form className="loginForm" onSubmit={handleLogin}>
            <input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">SIGN IN</button>
            <p className="passwordResetText" onClick={() =>
               setShowForgotPopup(true)}>
              DO NOT REMEMBER THE PASSWORD?
            </p>
            <NavLink to="/signup">CREATE A NEW ACCOUNT</NavLink>
          </form>
        </div>
      </div>
      <Newsletter />
      <Footer />
      {showForgotPopup && <ForgotPasswordPopup onClose={() => setShowForgotPopup(false)} />}
    </div>
  );
};
