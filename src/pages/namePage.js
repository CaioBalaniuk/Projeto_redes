import React from "react";
import Button3 from "../components/button1";
import Button2 from "../components/button2";
import Ttitulo from "../components/titulo";
import image2 from "../assets/image2.png";

const NamePage = () => {
    const styles = {
        backgroundImage: {
            position: "absolute",
            top: "0px",
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${image2})`, //caminho para a imagem
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            zIndex: -1,  //imagem no centro
        },
    }
    return (
        <div style={styles.backgroundImage}>
            <h1><Ttitulo/></h1>

            <Button2/>

        </div>
    )
}

export default NamePage;