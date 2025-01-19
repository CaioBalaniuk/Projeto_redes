import React, {useState} from "react";
import { useNavigate} from "react-router-dom";
import image1 from "../assets/circle.svg";
import image2 from "../assets/circleX.svg";
import {io} from "socket.io-client";

//BOTAO AZUL USADO NO TABULEIRO

const Button4 = ({link,top, left, onClickk, useImage, useAttack, nome}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();
    const [isAttacked, setIsAttacked] = useState(false);
    const [isBoat, setIsBoat] = useState(false);


    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    function ataque() {
      const socket = io("http://localhost:3000");
      let co = get_coord();
      socket.emit("atacar", co, nome);
      socket.on("ataque", (msm) => {
        setIsAttacked(true);
        if (msm === 2) {
          setIsBoat(true);
        };
      })
      socket.on("fimDeJogo", (d) => {
        alert("FIm de jogo, vencedor: " + d);
        socket.off();
        navigate("/EndPage")
      })
    }


    function get_coord() {
      let t;
      let l;
      let resp = [];
      l = parseInt(left[0]);
      t = parseInt(top[0]);
      resp.push(t);
      resp.push(l);
      //console.log(resp);
      return resp;
    }

    const handleClick = () =>{
      if (useAttack === "0") {
        ataque();
      } else {
        setIsClicked((prevState) => !prevState);
        navigate(link);
        navigate(link);
        const dados = get_coord();
        onClickk(dados);
      }

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
        {useImage  === "1" && isAttacked && (
          <img
            src={isBoat ? image2: image1 }
            alt="Button Content"
            style={imageStyle}
          />
        )}
      </button>
    );
  };
  
  export default Button4;