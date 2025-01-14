import React, {useState} from "react";
import { useNavigate} from "react-router-dom";

const Button1 = ({link}) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const handleClick = () =>{
      navigate(link)
  };
    const buttonStyle = {
        width: "356px",
        height: "142px",
        backgroundColor: isHovered ?  "#781C1C" : "#9A2525",
        border: "1px solid #000000",
        borderRadius: "68px",
        color: isHovered ? "#000000" : "#FFFFFF",
        fontFamily: "'Goldman', sans-serif",
        fontSize: "64px",
        lineHeight: "77px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        transition: "background-color 0.3s ease, color 0.3s ease",
        position: "absolute",
        top: "45%",
        left: "37%"
  };

  return (
    <button
        onMouseEnter = {handleMouseEnter}
        onMouseLeave = {handleMouseLeave}
        onClick = {handleClick}
        style = {buttonStyle}
    >
        {"START"}
    </button>
  );
};

export default Button1;