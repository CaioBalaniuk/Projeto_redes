import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//BOTAO ATACAR

const Button7 = ({ link }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleClick = () => {
    navigate(link);
  };
  const buttonStyle = {
    width: "160px",
    height: "70px",
    backgroundColor: isHovered ? "#781C1C" : "#9A2525",
    border: "1px solid #000000",
    borderRadius: "68px",
    color: isHovered ? "#000000" : "#FFFFFF",
    fontFamily: "'Goldman', sans-serif",
    fontSize: "28px",
    lineHeight: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "background-color 0.3s ease, color 0.3s ease",

    // Centering styles
    position: "absolute",
    top: "130%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={buttonStyle}
    >
      {"Atacar!"}
    </button>
  );
};

export default Button7;
