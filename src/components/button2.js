import React, {useState} from "react";
import { useNavigate} from "react-router-dom";
import {io} from "socket.io-client";

//BOTAO BATALHAA

const Button2 = ({link, socket, nome}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const navigate = useNavigate();
    
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);


    const handleClick = () => {
        const socket = io("http://localhost:3000");
        
        if (socket) {
            setIsDisabled(true);
            socket.emit("connection");
            socket.emit("definirNome", nome);
            socket.emit("iniciarJogo");
            console.log("Evento 'connection' emitido.")

            socket.once("iniciar", () =>{
                console.log("Jogo iniciado no backend");
                navigate(link);
            })

        }
    }

    const buttonStyle = {
        position: "absolute",
        height: "45px",
        backgroundColor: isHovered ?  "#741D1D" : "#AB1818",
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
        
        top: "320px",
        left :"270px",
    };

    return (
        <button
            onMouseEnter = {handleMouseEnter}
            onMouseLeave = {handleMouseLeave}
            onClick = {handleClick}
            style = {buttonStyle}
            disabled = {isDisabled}
        >
            {isDisabled ?"Aguardando...": "BATALHA!!!"}
        </button>
    );
};
export default Button2;