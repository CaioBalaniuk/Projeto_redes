import React from "react";
import Button1 from "../components/button1";
import Ttitulo from "../components/titulo";
import image1 from "../assets/image1.png";

const StartPage = () => {
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
            <Button1 link = "/NamePage" />

        </div>
    )
}

export default StartPage;

