import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import Newsletter from "../../components/newsletter/newsletter";
import Footer from "../../components/footer/footer";

export const Signup = () => {
  const navigate = useNavigate(); 

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    const signupData = {
      name,
      lastName,
      username,
      email,
      password,
      confirmPassword,
    };
    console.log(signupData);

    try {
      const response = await axios.post("http://localhost:8080/register", signupData);
      
      if (response.status === 200) {
        console.log("User signed up successfully.");
        navigate("/shop"); 
      } else {
        console.error("Error signing up.");
      }
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="main">
      <div className="signup">
        <div className="wrapper">
          <h1>CREATE AN ACCOUNT</h1>
          <form className="signupForm" onSubmit={handleSignUp}>
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              placeholder="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </span>
            <button type="submit">CREATE</button>
          </form>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};
