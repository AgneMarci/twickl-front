import React from "react";
import Newsletter from "../../components/newsletter/newsletter";
import "./aboutus.css";
import Footer from "../../components/footer/footer";

export const Aboutus = () => {
  return (
    <div className="main">
    <div className="container2">
      <div className="infoContainer">
        <h1 className="title">Twickl</h1>
        <p className="description">
          Our platform is for you. You, who wants to sell or buy clothes.<br>
          </br>We want to make a second-hand clothes your first choice.<br>
          </br>Buy what you need and sell things, that you don't need.<br></br>
        </p>
        <div className="buttonContainer">
          <button className="button" onClick={() => window.location.href = "/add"}>
            START SELLING
          </button>
          <button className="button" onClick={() => window.location.href = "/shop"}>
            START SHOPPING
          </button>
        </div>
      </div>
    </div>
    <Newsletter />
    <Footer />
  </div>
  );
};