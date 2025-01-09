import React, {useState} from "react";
import { useNavigate} from "react-router-dom";


const Button3 = ({link}) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const handleClick = () =>{
      window.location.href = link;  // Mudar a URL para o link externo
  };
    const buttonStyle = {
        width: "50.43px",
        height: "101.29px",
        color: isHovered ? "#000000":"#741D1D",
        fontFamily: 'Goldman',
        fontStyle: isHovered ? "normal" : "bold",
        fontWeight: "400",
        fontSize: "24px",
        lineHeight: "29px",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        transition: "color 0.3s ease, color 0.3s ease",
        position: "absolute",
  };

  return (
    <button
        onMouseEnter = {handleMouseEnter}
        onMouseLeave = {handleMouseLeave}
        onClick = {handleClick}
        style = {buttonStyle}
    >
        {"sair..."}
    </button>
  );
};

export default Button3;











