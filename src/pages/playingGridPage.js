import React, { useEffect,useState } from "react";
import Ttitulo from "../components/titulo";
import image3 from "../assets/imagem3.png";
import TextAux from "../components/textAUx";
import Button4 from "../components/button4";
import Button6 from "../components/button6";
import Button8 from "../components/button8";
import {useLocation } from 'react-router-dom';
import {io} from "socket.io-client";

const PGP = () => {
    const [coord, setCoord] = useState([]);
    const location = useLocation();
    const [verify, setVerify] = useState(Array.from({ length: 10 }, () => Array(10).fill(false)));
    const [atac, setAtac] = useState(Array.from({ length: 10 }, () => Array(10).fill(false)));
    const [nome, setNome] = useState("");
    const socket = io("http://localhost:3000");
    useEffect(() => {
        if (!nome) {
            setNome(location.state?.nome || "");
        }
    }, [nome, location.state]);

    useEffect(() => {
        if (coord.length === 0 && location.state?.coor) {
            setCoord(location.state.coor);
        }
    }, [coord.length, location.state?.coor]);

    useEffect(() => {
        if (coord.length > 0) {
          const newVerify = verify.map((row, rowIndex) =>
            row.map((cell, colIndex) => {
              return coord.some(a =>
                a.some(a1 => a1[0] === rowIndex && a1[1] === colIndex)
                
              );
            })
          );
          setVerify(newVerify);
        }
      }, [coord]);

        socket.on("atacado", (msm, linha, coluna) => {
          // Atualiza o estado de maneira imutável
          setAtac(prevAtac => {
            const newAtac = prevAtac.map((row, rowIndex) => 
              row.map((cell, colIndex) => {
                // Verifica se a posição [linha, coluna] deve ser alterada
                if (rowIndex === linha && colIndex === coluna) {
                  return true; // Marca como atacado
                }
                return cell; // Mantém o valor original
              })
            );
            return newAtac;
          });
        });
    


    
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
      zIndex: -1, 
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

        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="0%" left="0%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="0%" left="10%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="0%" left="20%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="0%" left="30%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="0%" left="40%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="0%" left="50%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="0%" left="60%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="0%" left="70%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="0%" left="80%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="0%" left="90%" />

        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="10%" left="0%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="10%" left="10%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="10%" left="20%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="10%" left="30%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="10%" left="40%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="10%" left="50%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="10%" left="60%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="10%" left="70%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="10%" left="80%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="10%" left="90%" />

        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="20%" left="0%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="20%" left="10%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="20%" left="20%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="20%" left="30%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="20%" left="40%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="20%" left="50%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="20%" left="60%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="20%" left="70%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="20%" left="80%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="20%" left="90%" />

        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="30%" left="0%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="30%" left="10%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="30%" left="20%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="30%" left="30%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="30%" left="40%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="30%" left="50%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="30%" left="60%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="30%" left="70%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="30%" left="80%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="30%" left="90%" />

        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="40%" left="0%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="40%" left="10%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="40%" left="20%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="40%" left="30%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="40%" left="40%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="40%" left="50%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="40%" left="60%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="40%" left="70%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="40%" left="80%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="40%" left="90%" />

        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="50%" left="0%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="50%" left="10%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="50%" left="20%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="50%" left="30%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="50%" left="40%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="50%" left="50%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="50%" left="60%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="50%" left="70%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="50%" left="80%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="50%" left="90%" />

        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="60%" left="0%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="60%" left="10%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="60%" left="20%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="60%" left="30%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="60%" left="40%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="60%" left="50%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="60%" left="60%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="60%" left="70%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="60%" left="80%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="60%" left="90%" />

        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="70%" left="0%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="70%" left="10%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="70%" left="20%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="70%" left="30%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="70%" left="40%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="70%" left="50%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="70%" left="60%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="70%" left="70%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="70%" left="80%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="70%" left="90%" />

        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="80%" left="0%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="80%" left="10%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="80%" left="20%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="80%" left="30%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="80%" left="40%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="80%" left="50%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="80%" left="60%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="80%" left="70%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="80%" left="80%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="80%" left="90%" />

        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="90%" left="0%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="90%" left="10%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="90%" left="20%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="90%" left="30%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="90%" left="40%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="90%" left="50%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="90%" left="60%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="90%" left="70%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="90%" left="80%" />
        <Button4 useAttack = {"0"}nome = {nome}useImage = "1" top="90%" left="90%" />
      </div>
      <div style={styles.subtitle}>Seu tabuleiro:</div>
      <div style={styles.myGrid}>
        <Button6 top="0%" left="0%" barco = {verify[0][0]} ataque = {atac[0][0]}/>
        <Button6 top="0%" left="10%" barco = {verify[0][1]} ataque = {atac[0][1]}/>
        <Button6 top="0%" left="20%" barco = {verify[0][2]} ataque = {atac[0][2]}/>
        <Button6 top="0%" left="30%" barco = {verify[0][3]}ataque = {atac[0][3]}/>
        <Button6 top="0%" left="40%" barco = {verify[0][4]}ataque = {atac[0][4]}/>
        <Button6 top="0%" left="50%" barco = {verify[0][5]}ataque = {atac[0][5]}/>
        <Button6 top="0%" left="60%" barco = {verify[0][6]}ataque = {atac[0][6]}/>
        <Button6 top="0%" left="70%" barco = {verify[0][7]}ataque = {atac[0][7]}/>
        <Button6 top="0%" left="80%" barco = {verify[0][8]}ataque = {atac[0][8]}/>
        <Button6 top="0%" left="90%" barco = {verify[0][9]}ataque = {atac[0][9]}/>

        <Button6 top="10%" left="0%" barco = {verify[1][0]}ataque = {atac[1][0]}/>
        <Button6 top="10%" left="10%" barco = {verify[1][1]}ataque = {atac[1][1]}/>
        <Button6 top="10%" left="20%" barco = {verify[1][2]}ataque = {atac[1][2]}/>
        <Button6 top="10%" left="30%" barco = {verify[1][3]}ataque = {atac[1][3]}/>
        <Button6 top="10%" left="40%" barco = {verify[1][4]}ataque = {atac[1][4]}/>
        <Button6 top="10%" left="50%" barco = {verify[1][5]}ataque = {atac[1][5]}/>
        <Button6 top="10%" left="60%" barco = {verify[1][6]}ataque = {atac[1][6]}/>
        <Button6 top="10%" left="70%" barco = {verify[1][7]}ataque = {atac[1][7]}/>
        <Button6 top="10%" left="80%" barco = {verify[1][8]}ataque = {atac[1][8]}/>
        <Button6 top="10%" left="90%" barco = {verify[1][9]}ataque = {atac[1][9]}/>

        <Button6 top="20%" left="0%" barco = {verify[2][0]}ataque = {atac[2][0]}/>
        <Button6 top="20%" left="10%" barco = {verify[2][1]}ataque = {atac[2][1]}/>
        <Button6 top="20%" left="20%" barco = {verify[2][2]}ataque = {atac[2][2]}/>
        <Button6 top="20%" left="30%" barco = {verify[2][3]}ataque = {atac[2][3]}/>
        <Button6 top="20%" left="40%" barco = {verify[2][4]}ataque = {atac[2][4]}/>
        <Button6 top="20%" left="50%" barco = {verify[2][5]}ataque = {atac[2][5]}/>
        <Button6 top="20%" left="60%" barco = {verify[2][6]}ataque = {atac[2][6]}/>
        <Button6 top="20%" left="70%" barco = {verify[2][7]}ataque = {atac[2][7]}/>
        <Button6 top="20%" left="80%" barco = {verify[2][8]}ataque = {atac[2][8]}/>
        <Button6 top="20%" left="90%" barco = {verify[2][9]}ataque = {atac[2][9]}/>

        <Button6 top="30%" left="0%" barco = {verify[3][0]}ataque = {atac[3][0]}/>
        <Button6 top="30%" left="10%" barco = {verify[3][1]}ataque = {atac[3][1]}/>
        <Button6 top="30%" left="20%" barco = {verify[3][2]}ataque = {atac[3][2]}/>
        <Button6 top="30%" left="30%" barco = {verify[3][3]}ataque = {atac[3][3]}/>
        <Button6 top="30%" left="40%" barco = {verify[3][4]}ataque = {atac[3][4]}/>
        <Button6 top="30%" left="50%" barco = {verify[3][5]}ataque = {atac[3][5]}/>
        <Button6 top="30%" left="60%" barco = {verify[3][6]}ataque = {atac[3][6]}/>
        <Button6 top="30%" left="70%" barco = {verify[3][7]}ataque = {atac[3][7]}/>
        <Button6 top="30%" left="80%" barco = {verify[3][8]}ataque = {atac[3][8]}/>
        <Button6 top="30%" left="90%" barco = {verify[3][9]}ataque = {atac[3][9]}/>

        <Button6 top="40%" left="0%" barco = {verify[4][0]}ataque = {atac[4][0]}/>
        <Button6 top="40%" left="10%" barco = {verify[4][1]}ataque = {atac[4][1]}/>
        <Button6 top="40%" left="20%" barco = {verify[4][2]}ataque = {atac[4][2]}/>
        <Button6 top="40%" left="30%" barco = {verify[4][3]}ataque = {atac[4][3]}/>
        <Button6 top="40%" left="40%" barco = {verify[4][4]}ataque = {atac[4][4]}/>
        <Button6 top="40%" left="50%" barco = {verify[4][5]}ataque = {atac[4][5]}/>
        <Button6 top="40%" left="60%" barco = {verify[4][6]}ataque = {atac[4][6]}/>
        <Button6 top="40%" left="70%" barco = {verify[4][7]}ataque = {atac[4][7]}/>
        <Button6 top="40%" left="80%" barco = {verify[4][8]}ataque = {atac[4][8]}/>
        <Button6 top="40%" left="90%" barco = {verify[4][9]}ataque = {atac[4][9]}/>

        <Button6 top="50%" left="0%" barco = {verify[5][0]}ataque = {atac[5][0]}/>
        <Button6 top="50%" left="10%" barco = {verify[5][1]}ataque = {atac[5][1]}/>
        <Button6 top="50%" left="20%" barco = {verify[5][2]}ataque = {atac[5][2]}/>
        <Button6 top="50%" left="30%" barco = {verify[5][3]}ataque = {atac[5][3]}/>
        <Button6 top="50%" left="40%" barco = {verify[5][4]}ataque = {atac[5][4]}/>
        <Button6 top="50%" left="50%" barco = {verify[5][5]}ataque = {atac[5][5]}/>
        <Button6 top="50%" left="60%" barco = {verify[5][6]}ataque = {atac[5][6]}/>
        <Button6 top="50%" left="70%" barco = {verify[5][7]}ataque = {atac[5][7]}/>
        <Button6 top="50%" left="80%" barco = {verify[5][8]}ataque = {atac[5][8]}/>
        <Button6 top="50%" left="90%" barco = {verify[5][9]}ataque = {atac[5][9]}/>

        <Button6 top="60%" left="0%" barco = {verify[6][0]}ataque = {atac[6][0]}/>
        <Button6 top="60%" left="10%" barco = {verify[6][1]}ataque = {atac[6][1]}/>
        <Button6 top="60%" left="20%" barco = {verify[6][2]}ataque = {atac[6][2]}/>
        <Button6 top="60%" left="30%" barco = {verify[6][3]}ataque = {atac[6][3]}/>
        <Button6 top="60%" left="40%" barco = {verify[6][4]}ataque = {atac[6][4]}/>
        <Button6 top="60%" left="50%" barco = {verify[6][5]}ataque = {atac[6][5]}/>
        <Button6 top="60%" left="60%" barco = {verify[6][6]}ataque = {atac[6][6]}/>
        <Button6 top="60%" left="70%" barco = {verify[6][7]}ataque = {atac[6][7]}/>
        <Button6 top="60%" left="80%" barco = {verify[6][8]}ataque = {atac[6][8]}/>
        <Button6 top="60%" left="90%" barco = {verify[6][9]}ataque = {atac[6][9]}/>

        <Button6 top="70%" left="0%" barco = {verify[7][0]}ataque = {atac[7][0]}/>
        <Button6 top="70%" left="10%" barco = {verify[7][1]}ataque = {atac[7][1]}/>
        <Button6 top="70%" left="20%" barco = {verify[7][2]}ataque = {atac[7][2]}/>
        <Button6 top="70%" left="30%" barco = {verify[7][3]}ataque = {atac[7][3]}/>
        <Button6 top="70%" left="40%" barco = {verify[7][4]}ataque = {atac[7][4]}/>
        <Button6 top="70%" left="50%" barco = {verify[7][5]}ataque = {atac[7][5]}/>
        <Button6 top="70%" left="60%" barco = {verify[7][6]}ataque = {atac[7][6]}/>
        <Button6 top="70%" left="70%" barco = {verify[7][7]}ataque = {atac[7][7]}/>
        <Button6 top="70%" left="80%" barco = {verify[7][8]}ataque = {atac[7][8]}/>
        <Button6 top="70%" left="90%" barco = {verify[7][9]}ataque = {atac[7][9]}/>

        <Button6 top="80%" left="0%" barco = {verify[8][0]}ataque = {atac[8][0]}/>
        <Button6 top="80%" left="10%" barco = {verify[8][1]}ataque = {atac[8][1]}/>
        <Button6 top="80%" left="20%" barco = {verify[8][2]}ataque = {atac[8][2]}/>
        <Button6 top="80%" left="30%" barco = {verify[8][3]}ataque = {atac[8][3]}/>
        <Button6 top="80%" left="40%" barco = {verify[8][4]}ataque = {atac[8][4]}/>
        <Button6 top="80%" left="50%" barco = {verify[8][5]}ataque = {atac[8][5]}/>
        <Button6 top="80%" left="60%" barco = {verify[8][6]}ataque = {atac[8][6]}/>
        <Button6 top="80%" left="70%" barco = {verify[8][7]}ataque = {atac[8][7]}/>
        <Button6 top="80%" left="80%" barco = {verify[8][8]}ataque = {atac[8][8]}/>
        <Button6 top="80%" left="90%" barco = {verify[8][9]}ataque = {atac[8][9]}/>

        <Button6 top="90%" left="0%" barco = {verify[9][0]}ataque = {atac[9][0]}/>
        <Button6 top="90%" left="10%" barco = {verify[9][1]}ataque = {atac[9][1]}/>
        <Button6 top="90%" left="20%" barco = {verify[9][2]}ataque = {atac[9][2]}/>
        <Button6 top="90%" left="30%" barco = {verify[9][3]}ataque = {atac[9][3]}/>
        <Button6 top="90%" left="40%" barco = {verify[9][4]}ataque = {atac[9][4]}/>
        <Button6 top="90%" left="50%" barco = {verify[9][5]}ataque = {atac[9][5]}/>
        <Button6 top="90%" left="60%" barco = {verify[9][6]}ataque = {atac[9][6]}/>
        <Button6 top="90%" left="70%" barco = {verify[9][7]}ataque = {atac[9][7]}/>
        <Button6 top="90%" left="80%" barco = {verify[9][8]}ataque = {atac[9][8]}/>
        <Button6 top="90%" left="90%" barco = {verify[9][9]}ataque = {atac[9][9]}/>
      </div>
      <Button8 nome = {nome}/>
    </div>
    
  );
};

export default PGP;