import React from "react";
import Ttitulo from "../components/titulo";
import image3 from "../assets/imagem3.png";

const PGP = () => {
    const styles = {
        backgroundImage: {
            position: "absolute",
            top: "0px",
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${image3})`, //caminho para a imagem
            backgroundSize: "100%",
            backgroundPosition: "cover",
            zIndex: -1,  //imagem no centro

        },

    }

    return (
        <div style={styles.backgroundImage}>
            <Ttitulo/>

        </div>
    )
}

export default PGP;