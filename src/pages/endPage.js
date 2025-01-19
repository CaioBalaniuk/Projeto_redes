
import React from "react";
import Ttitulo from "../components/titulo";
import image1 from "../assets/image1.png";
import AUX from "../components/textAUx";

const EndPage = () => {
    const styles = {
        backgroundImage: {
            position: "absolute",
            top: "0px",
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${image1})`, //caminho para a imagem
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            zIndex: -1,  //imagem no centro
        },
    }
    return (
        <div style={styles.backgroundImage}>
            <h1><Ttitulo/></h1>
            <AUX text = "OBRIGADO POR JOGAR"/>
        </div>
    )
}

export default EndPage;


