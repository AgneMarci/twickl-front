import React from "react";
import "./bar.css"; 

const Bar = () => {
  return (
    <div className="container">
      <div className="infoContainer">
        <h1 className="title">Twickl - think twice before buying new clothes!</h1>
        <p className="desc">Better buy it here, give them a second chance!</p>
        <button className="button" onClick={() => window.location.href = "/login"}>
          Sign up|Log in
        </button>
      </div>
    </div>
  );
};

export default Bar;