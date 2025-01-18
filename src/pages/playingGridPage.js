import React from "react";
import Ttitulo from "../components/titulo";
import image3 from "../assets/imagem3.png";
import TextAux from "../components/textAUx";
import Button4 from "../components/button4";
import Button6 from "../components/button6";

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
      zIndex: -1, //imagem no centro
    },

    subTitle: {
      position: "absolute",
      width: "1400px",
      height: "72px",
      left: "5%",
      top: "20%",

      fontFamily: "Goldman",
      fontStyle: "normal",
      fontWeight: 350,
      fontSize: "50px",
      lineHeight: "72px",
      color: "#AB1818",
      textShadow:
        "1px 1px 0 white, -1px -1px 0 white,  0px -1px 0 white, -1px 1px 0 white",
      zIndex: 1,
    },

    subtitle: {
      position: "absolute",
      width: "400px",
      height: "72px",
      right: "5%",
      top: "28%",

      fontFamily: "Goldman",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "50px",
      lineHeight: "72px",
      color: "#AB1818",
      textShadow:
        "1px 1px 0 white, -1px -1px 0 white,  0px -1px 0 white, -1px 1px 0 white",
      zIndex: 1,
    },

    opponentSeenGrid: {
      position: "absolute",
      width: "641px",
      height: "641px",
      backgroundColor: "#FFFFFF",
      top: "30%",
      left: "18%",
    },

    opponentAtkedGrid: {
      position: "absolute",
      width: "640px",
      height: "640px",
      backgroundColor: "black",
      top: "30%",
      left: "18%",
    },

    myGrid: {
      position: "absolute",
      width: "320px",
      height: "320px",
      backgroundColor: "black",
      top: "35%",
      right: "8%",
    },
  };

  return (
    <div style={styles.backgroundImage}>
      <Ttitulo />
      <div style={styles.subTitle}>
        Escolha uma casa do seu oponente para atacar:
      </div>
      <div style={styles.opponentSeenGrid}>
        <TextAux text="A" left="-7%" top="-4%" />
        <TextAux text="B" left="-7%" top="5%" />
        <TextAux text="C" left="-7%" top="16%" />
        <TextAux text="D" left="-7%" top="26%" />
        <TextAux text="E" left="-7%" top="36%" />
        <TextAux text="F" left="-7%" top="46%" />
        <TextAux text="G" left="-7%" top="56%" />
        <TextAux text="H" left="-7%" top="66%" />
        <TextAux text="I" left="-6%" top="76%" />
        <TextAux text="J" left="-7%" top="86%" />

        <TextAux text="1" left="3%" top="-13%" />
        <TextAux text="2" left="13%" top="-13%" />
        <TextAux text="3" left="22%" top="-13%" />
        <TextAux text="4" left="32%" top="-13%" />
        <TextAux text="5" left="42%" top="-13%" />
        <TextAux text="6" left="52%" top="-13%" />
        <TextAux text="7" left="62%" top="-13%" />
        <TextAux text="8" left="72%" top="-13%" />
        <TextAux text="9" left="82%" top="-13%" />
        <TextAux text="10" left="91%" top="-13%" />

        <Button4 top="0%" left="0%" />
        <Button4 top="0%" left="10%" />
        <Button4 top="0%" left="20%" />
        <Button4 top="0%" left="30%" />
        <Button4 top="0%" left="40%" />
        <Button4 top="0%" left="50%" />
        <Button4 top="0%" left="60%" />
        <Button4 top="0%" left="70%" />
        <Button4 top="0%" left="80%" />
        <Button4 top="0%" left="90%" />

        <Button4 top="10%" left="0%" />
        <Button4 top="10%" left="10%" />
        <Button4 top="10%" left="20%" />
        <Button4 top="10%" left="30%" />
        <Button4 top="10%" left="40%" />
        <Button4 top="10%" left="50%" />
        <Button4 top="10%" left="60%" />
        <Button4 top="10%" left="70%" />
        <Button4 top="10%" left="80%" />
        <Button4 top="10%" left="90%" />

        <Button4 top="20%" left="0%" />
        <Button4 top="20%" left="10%" />
        <Button4 top="20%" left="20%" />
        <Button4 top="20%" left="30%" />
        <Button4 top="20%" left="40%" />
        <Button4 top="20%" left="50%" />
        <Button4 top="20%" left="60%" />
        <Button4 top="20%" left="70%" />
        <Button4 top="20%" left="80%" />
        <Button4 top="20%" left="90%" />

        <Button4 top="30%" left="0%" />
        <Button4 top="30%" left="10%" />
        <Button4 top="30%" left="20%" />
        <Button4 top="30%" left="30%" />
        <Button4 top="30%" left="40%" />
        <Button4 top="30%" left="50%" />
        <Button4 top="30%" left="60%" />
        <Button4 top="30%" left="70%" />
        <Button4 top="30%" left="80%" />
        <Button4 top="30%" left="90%" />

        <Button4 top="40%" left="0%" />
        <Button4 top="40%" left="10%" />
        <Button4 top="40%" left="20%" />
        <Button4 top="40%" left="30%" />
        <Button4 top="40%" left="40%" />
        <Button4 top="40%" left="50%" />
        <Button4 top="40%" left="60%" />
        <Button4 top="40%" left="70%" />
        <Button4 top="40%" left="80%" />
        <Button4 top="40%" left="90%" />

        <Button4 top="50%" left="0%" />
        <Button4 top="50%" left="10%" />
        <Button4 top="50%" left="20%" />
        <Button4 top="50%" left="30%" />
        <Button4 top="50%" left="40%" />
        <Button4 top="50%" left="50%" />
        <Button4 top="50%" left="60%" />
        <Button4 top="50%" left="70%" />
        <Button4 top="50%" left="80%" />
        <Button4 top="50%" left="90%" />

        <Button4 top="60%" left="0%" />
        <Button4 top="60%" left="10%" />
        <Button4 top="60%" left="20%" />
        <Button4 top="60%" left="30%" />
        <Button4 top="60%" left="40%" />
        <Button4 top="60%" left="50%" />
        <Button4 top="60%" left="60%" />
        <Button4 top="60%" left="70%" />
        <Button4 top="60%" left="80%" />
        <Button4 top="60%" left="90%" />

        <Button4 top="70%" left="0%" />
        <Button4 top="70%" left="10%" />
        <Button4 top="70%" left="20%" />
        <Button4 top="70%" left="30%" />
        <Button4 top="70%" left="40%" />
        <Button4 top="70%" left="50%" />
        <Button4 top="70%" left="60%" />
        <Button4 top="70%" left="70%" />
        <Button4 top="70%" left="80%" />
        <Button4 top="70%" left="90%" />

        <Button4 top="80%" left="0%" />
        <Button4 top="80%" left="10%" />
        <Button4 top="80%" left="20%" />
        <Button4 top="80%" left="30%" />
        <Button4 top="80%" left="40%" />
        <Button4 top="80%" left="50%" />
        <Button4 top="80%" left="60%" />
        <Button4 top="80%" left="70%" />
        <Button4 top="80%" left="80%" />
        <Button4 top="80%" left="90%" />

        <Button4 top="90%" left="0%" />
        <Button4 top="90%" left="10%" />
        <Button4 top="90%" left="20%" />
        <Button4 top="90%" left="30%" />
        <Button4 top="90%" left="40%" />
        <Button4 top="90%" left="50%" />
        <Button4 top="90%" left="60%" />
        <Button4 top="90%" left="70%" />
        <Button4 top="90%" left="80%" />
        <Button4 top="90%" left="90%" />
      </div>
      <div style={styles.subtitle}>Seu tabuleiro:</div>
      <div style={styles.myGrid}>
        <Button6 top="0%" left="0%" />
        <Button6 top="0%" left="10%" />
        <Button6 top="0%" left="20%" />
        <Button6 top="0%" left="30%" />
        <Button6 top="0%" left="40%" />
        <Button6 top="0%" left="50%" />
        <Button6 top="0%" left="60%" />
        <Button6 top="0%" left="70%" />
        <Button6 top="0%" left="80%" />
        <Button6 top="0%" left="90%" />

        <Button6 top="10%" left="0%" />
        <Button6 top="10%" left="10%" />
        <Button6 top="10%" left="20%" />
        <Button6 top="10%" left="30%" />
        <Button6 top="10%" left="40%" />
        <Button6 top="10%" left="50%" />
        <Button6 top="10%" left="60%" />
        <Button6 top="10%" left="70%" />
        <Button6 top="10%" left="80%" />
        <Button6 top="10%" left="90%" />

        <Button6 top="20%" left="0%" />
        <Button6 top="20%" left="10%" />
        <Button6 top="20%" left="20%" />
        <Button6 top="20%" left="30%" />
        <Button6 top="20%" left="40%" />
        <Button6 top="20%" left="50%" />
        <Button6 top="20%" left="60%" />
        <Button6 top="20%" left="70%" />
        <Button6 top="20%" left="80%" />
        <Button6 top="20%" left="90%" />

        <Button6 top="30%" left="0%" />
        <Button6 top="30%" left="10%" />
        <Button6 top="30%" left="20%" />
        <Button6 top="30%" left="30%" />
        <Button6 top="30%" left="40%" />
        <Button6 top="30%" left="50%" />
        <Button6 top="30%" left="60%" />
        <Button6 top="30%" left="70%" />
        <Button6 top="30%" left="80%" />
        <Button6 top="30%" left="90%" />

        <Button6 top="40%" left="0%" />
        <Button6 top="40%" left="10%" />
        <Button6 top="40%" left="20%" />
        <Button6 top="40%" left="30%" />
        <Button6 top="40%" left="40%" />
        <Button6 top="40%" left="50%" />
        <Button6 top="40%" left="60%" />
        <Button6 top="40%" left="70%" />
        <Button6 top="40%" left="80%" />
        <Button6 top="40%" left="90%" />

        <Button6 top="50%" left="0%" />
        <Button6 top="50%" left="10%" />
        <Button6 top="50%" left="20%" />
        <Button6 top="50%" left="30%" />
        <Button6 top="50%" left="40%" />
        <Button6 top="50%" left="50%" />
        <Button6 top="50%" left="60%" />
        <Button6 top="50%" left="70%" />
        <Button6 top="50%" left="80%" />
        <Button6 top="50%" left="90%" />

        <Button6 top="60%" left="0%" />
        <Button6 top="60%" left="10%" />
        <Button6 top="60%" left="20%" />
        <Button6 top="60%" left="30%" />
        <Button6 top="60%" left="40%" />
        <Button6 top="60%" left="50%" />
        <Button6 top="60%" left="60%" />
        <Button6 top="60%" left="70%" />
        <Button6 top="60%" left="80%" />
        <Button6 top="60%" left="90%" />

        <Button6 top="70%" left="0%" />
        <Button6 top="70%" left="10%" />
        <Button6 top="70%" left="20%" />
        <Button6 top="70%" left="30%" />
        <Button6 top="70%" left="40%" />
        <Button6 top="70%" left="50%" />
        <Button6 top="70%" left="60%" />
        <Button6 top="70%" left="70%" />
        <Button6 top="70%" left="80%" />
        <Button6 top="70%" left="90%" />

        <Button6 top="80%" left="0%" />
        <Button6 top="80%" left="10%" />
        <Button6 top="80%" left="20%" />
        <Button6 top="80%" left="30%" />
        <Button6 top="80%" left="40%" />
        <Button6 top="80%" left="50%" />
        <Button6 top="80%" left="60%" />
        <Button6 top="80%" left="70%" />
        <Button6 top="80%" left="80%" />
        <Button6 top="80%" left="90%" />

        <Button6 top="90%" left="0%" />
        <Button6 top="90%" left="10%" />
        <Button6 top="90%" left="20%" />
        <Button6 top="90%" left="30%" />
        <Button6 top="90%" left="40%" />
        <Button6 top="90%" left="50%" />
        <Button6 top="90%" left="60%" />
        <Button6 top="90%" left="70%" />
        <Button6 top="90%" left="80%" />
        <Button6 top="90%" left="90%" />
      </div>
    </div>
  );
};

export default PGP;
