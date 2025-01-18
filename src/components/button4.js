import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/circle.svg";
import image2 from "../assets/circleX.svg";

//BOTAO AZUL USADO NO TABULEIRO

const Button4 = ({ link, top, left, useClick = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const isAttacked = useState(false);
  const isBoat = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleClick = () => {
    if (useClick) {
      setIsClicked((prevState) => !prevState);
      navigate(link);
    } else {
      navigate(link);
    }
  };

  const buttonStyle = {
    position: "absolute",
    width: "64px",
    height: "64px",
    boxSizing: "border-box",
    background: isClicked ? "#57CCEC" : isHovered ? "#57CCEC" : "#0B7896",
    border: "1px solid #FFFFFF",
    top: top,
    left: left,
  };
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={buttonStyle}
    >
      {isAttacked && (
        <img
          src={isBoat ? image1 : image2}
          alt="Button Content"
          style={imageStyle}
        />
      )}
    </button>
  );
};

export default Button4;
