import React, { useState } from "react";
import image1 from "../assets/circle.svg";
import image2 from "../assets/circleX.svg";

const Button6 = ({ top, left, barco, ataque}) => {

  
  const buttonStyle = {
    position: "absolute",
    width: "32px",
    height: "32px",
    boxSizing: "border-box",
    background: barco ? "#57CCEC" : "#0B7896",
    border: "1px solid black",
    top: top,
    left: left,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <button style={buttonStyle}>
      <img
        src={ataque ? image2 : image1}
        alt="Button Content"
        style={imageStyle}
      />
    </button>
  );
};

export default Button6;