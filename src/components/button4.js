import React, {useState} from "react";
import { useNavigate} from "react-router-dom";

const Button4 = ({link,top, left }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const handleClick = () =>{
      setIsClicked((prevState) => !prevState);
      navigate(link);
    }

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

  return (
    <button
        onMouseEnter = {handleMouseEnter}
        onMouseLeave = {handleMouseLeave}
        onClick = {handleClick}
        style = {buttonStyle}
    >
    </button>
  );
};

export default Button4;
