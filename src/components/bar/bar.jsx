import React from "react";
import "./bar.css"; 

const Bar = () => {
  return (
    <div className="barContainer">
      <div className="barInfoContainer">
        <h1 className="barTitle">Twickl - think twice before buying new clothes!</h1>
        <button className="barButton" onClick={() => window.location.href = "/login"}>
          Sign up|Log in
        </button>
      </div>
    </div>
  );
};

export default Bar;