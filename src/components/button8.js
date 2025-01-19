import React, { useState } from "react";
import Popup from "../pages/giveUpPage";

const Button8 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const buttonStyle = {
    width: "160px",
    height: "70px",
    backgroundColor: isHovered ? "#781C1C" : "#9A2525",
    border: "1px solid #000000",
    borderRadius: "68px",
    color: isHovered ? "#FFFFFF" : "#000000",
    fontFamily: "'Goldman', sans-serif",
    fontSize: "28px",
    lineHeight: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "background-color 0.3s ease, color 0.3s ease",
    position: "absolute",
    top: "130%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={openPopup} // Chamando apenas openPopup
        style={buttonStyle}
      >
        {"Desistir"}
      </button>

      {/* Popup */}
      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <h2>Você deseja desistir?</h2>
        <p>Tem certeza que deseja encerrar o jogo?</p>
      </Popup>
    </>
  );
};

export default Button8;
