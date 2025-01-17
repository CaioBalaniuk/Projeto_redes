import React, {useState} from "react";
import { useNavigate} from "react-router-dom";

//BOTAO SAIR

const Button3 = ({link}) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const handleClick = () =>{
      navigate(link)
  };

    const buttonStyle = {
        //width: "50.43px",
        //height: "101.29px",
        color: isHovered ? "#AB1818": "#000000",
        fontFamily: 'Goldman',
        fontStyle: isHovered ? "bold": "normal",
        fontWeight: "400",
        fontSize: "24px",
        lineHeight: "29px",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        transition: "color 0.3s ease, color 0.3s ease",
        position: "absolute",
        top: "330px",
        left: "50px"
  };

  return (
    <div
        onMouseEnter = {handleMouseEnter}
        onMouseLeave = {handleMouseLeave}
        onClick = {handleClick}
        style = {buttonStyle}
    >
        {"sair..."}
    </div>
  );
};

export default Button3;











