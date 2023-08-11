import React, { useState } from "react";
import "./login.css";
import Newsletter from "../../components/newsletter/newsletter";
import Footer from "../../components/footer/footer";
import { NavLink } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
              required
            />
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">SIGN IN</button>
            <NavLink to="/passwordchange">
              DO NOT REMEMBER THE PASSWORD?
            </NavLink>
            <NavLink to="/signup">CREATE A NEW ACCOUNT</NavLink>
          </form>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};
