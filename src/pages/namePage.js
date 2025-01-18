import React, { useState } from "react";
import Button3 from "../components/button3";
import Button2 from "../components/button2";
import Ttitulo from "../components/titulo";
import image3 from "../assets/imagem3.png";
import { io } from "socket.io-client";

const NamePage = ({ socket }) => {
  const [nomeJogador, setNomeJogador] = useState("");

  const handleInputChange = (e) => {
    setNomeJogador(e.target.value);
  };

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
      zIndex: -1, //imagem no centro
    },

    centralSquare: {
      position: "absolute",
      width: "423px",
      height: "389px",

      background: "#D9D9D9",
      borderRadius: "25px",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    },
    inputBox: {
      position: "absolute",
      width: "300px",
      height: "50px",
      left: "57px",
      top: "190px",

      background: "#FFFFFF",
    },

    titleBox: {
      position: "absolute",
      width: "423px",
      height: "95.62px",
      left: "0px",
      top: "0px",

      background: "#9F9F9F",
      borderRadius: "25px 25px 0px 0px",
    },
    titletext: {
      position: "absolute",
      textAlign: "center",
      width: "315.96px",
      height: "82.58px",
      left: "55px",
      top: "10px",

      fontFamily: "Goldman",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "32px",
      lineHeight: "38px",

      color: "#000000",
    },
  };

  return (
    <div style={styles.backgroundImage}>
      <Ttitulo />
      <div style={styles.centralSquare}>
        <div style={styles.titleBox}>
          <div style={styles.titletext}>Escolha seu nome de Guerra</div>
        </div>
        <form>
          <input
            type="text"
            style={styles.inputBox}
            placeholder="Digite seu nome aqui..."
            value={nomeJogador}
            onChange={handleInputChange}
          />
        </form>

        <Button2
          link={"/StartGridPage"}
          socket={io("http://localhost:3000")}
          nome={nomeJogador}
        />
        <Button3 link="/StartPage" />
      </div>
    </div>
  );
};

export default NamePage;
