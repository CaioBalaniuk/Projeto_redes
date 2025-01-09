import React, {useState} from "react";
import { useNavigate} from "react-router-dom";

const Button2 = ({link}) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const handleClick = () => navigate(link);

    const buttonStyle = {
        width: "131px",
        height: "45px",
        backgroundColor: isHovered ? "#AB1818" : "#741D1D",
        border: "1px solid #000000",
        borderRadius: "27px",
        color: isHovered ? "#000000" : "#FFFFFF" ,
        fontFamily: "'Goldman'",
        fontSize: "20px",
        lineHeight: "24px",
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
            {"BATALHA!!!"}
        </button>
    );
};
export default Button2;
