import React, {useState} from "react";
import { useNavigate} from "react-router-dom";

//BOTAO VERIFICAR

const Button5 = ({link}) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const handleClick = () => {navigate(link)};

    const buttonStyle = {
        position: "absolute",
        width: "131px",
        height: "45px",
        left: "68%",
        top: "75%",

        boxSizing: "border-box",

        background: isHovered ? "#741D1D" : "#AB1818",
        border: "1px solid #000000",
        borderRadius: "27px",
        color: isHovered ? "#000000" : "#FFFFFF",
        fontFamily: "'Goldman', sans-serif",
        fontSize: "25px",
        lineHeight: "77px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        transition: "background-color 0.3s ease, color 0.3s ease",


    };

    return (
        <button
            onMouseEnter = {handleMouseEnter}
            onMouseLeave = {handleMouseLeave}
            onClick = {handleClick}
            style = {buttonStyle}
        >
            {"Verificar"}
        </button>
    );
};
export default Button5;