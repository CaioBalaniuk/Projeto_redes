import React from "react";
import Button4 from "../components/button4";
import Ttitulo from "../components/titulo";
import image3 from "../assets/imagem3.png";
import TextAux from "../components/textAUx";
import Button5 from "../components/button5";

const StartGridPage = () => {
    const styles = {
        backgroundImage: {
            position: "absolute",
            top: "0px",
            left: 0,
            width: "110%",
            height: "150%",
            backgroundImage: `url(${image3})`, //caminho para a imagem
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            zIndex: -1,  //imagem no centro
        },

        subTitle: {
            position: "absolute",
            width: "1300px",
            height: "72px",
            left: "7%",
            top: "20%",

            fontFamily: 'Goldman',
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "60px",
            lineHeight: "72px",
            color: "#AB1818",
            zIndex: 1,
        },

        centralGrid: {
            position: "absolute",
            width: "641px",
            height: "641px",
            backgroundColor: "#FFFFFF",
            top: "33%",
            left:"10%",

        },
        centralSquare: {
            position: "absolute",
            width: "600px",
            height: "500px",
            left: "55%",
            top: "32%",
            
            background: "#D9D9D9",
            borderRadius: "25px",
            opacity: 0.7,
        },

        text1: {
            position: "absolute",
            width: "634px",
            height: "76px",
            left: "2%",
            top: "1%",

            fontFamily: 'Goldman',
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "32px",
            lineHeight: "38px",
            opacity: 1,
            color: "#AB1818",
        
        },

        subitle: {
            position: "absolute",
            width: "1300px",
            height: "72px",
            left: "7%",
            top: "20%",

            fontFamily: 'Goldman',
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "60px",
            lineHeight: "72px",
            color: "#AB1818",
            zIndex: 1,
        },

    }
    return (
        <div style={styles.backgroundImage}>
            <h1><Ttitulo/></h1>
            <div style={styles.subTitle}>Monte seu tabuleiro para começar o jogo!</div>
            <div style={styles.centralSquare}>
                <div style={styles.text1}>Selecione os quadrados conforme pedido:</div>
                <TextAux text = "(precisam ser da mesma linha ou coluna)" tam = "21px" tam1 = "500px" top = "3%" left = "23%"/>
                <TextAux text = "Porta-avião:" tam = "32px" tam1 = "500px" top = "15%" left = "2%"/>
                <TextAux text = "selecione 5 quadrados" tam = "31px" tam1 = "500px" color = "#AB1818" top = "15%" left = "38%" />
                <TextAux text = "Couraçado:" tam = "32px" tam1 = "500px" top = "30%" left = "2%"/>
                <TextAux text = "selecione 4 quadrados" tam = "31px" tam1 = "500px" color = "#AB1818" top = "30%" left = "35%" />
                <TextAux text = "Cruzador:" tam = "32px" tam1 = "500px" top = "45%" left = "2%"/>
                <TextAux text = "selecione 3 quadrados" tam = "31px" tam1 = "500px" color = "#AB1818" top = "45%" left = "31%" />
                <TextAux text = "Submarino:" tam = "32px" tam1 = "500px" top = "60%" left = "2%"/>
                <TextAux text = "selecione 2 quadrados" tam = "31px" tam1 = "500px" color = "#AB1818" top = "60%" left = "35%" />
                <TextAux text = "Destroyer:" tam = "32px" tam1 = "500px" top = "75%" left = "2%"/>
                <TextAux text = "selecione 2 quadrados" tam = "31px" tam1 = "500px" color = "#AB1818" top = "75%" left = "33%" />
            </div>
            <Button5 link = "/PlayingGridPage"/>
            <div style={styles.centralGrid}>
                <TextAux text ="A" left = "-7%" top = "-4%"/>
                <TextAux text ="B" left = "-7%" top = "5%"/>
                <TextAux text ="C" left = "-7%" top = "16%"/>
                <TextAux text ="D" left = "-7%" top = "26%"/>
                <TextAux text ="E" left = "-7%" top = "36%"/>
                <TextAux text ="F" left = "-7%" top = "46%"/>
                <TextAux text ="G" left = "-7%" top = "56%"/>
                <TextAux text ="H" left = "-7%" top = "66%"/>
                <TextAux text ="I" left = "-6%" top = "76%"/>
                <TextAux text ="J" left = "-7%" top = "86%"/>

                <TextAux text ="1" left = "3%" top = "-13%"/>
                <TextAux text ="2" left = "13%" top = "-13%"/>
                <TextAux text ="3" left = "22%" top = "-13%"/>
                <TextAux text ="4" left = "32%" top = "-13%"/>
                <TextAux text ="5" left = "42%" top = "-13%"/>
                <TextAux text ="6" left = "52%" top = "-13%"/>
                <TextAux text ="7" left = "62%" top = "-13%"/>
                <TextAux text ="8" left = "72%" top = "-13%"/>
                <TextAux text ="9" left = "82%" top = "-13%"/>
                <TextAux text ="10" left = "91%" top = "-13%"/>

                <Button4 link = "/NamePage" top = "0%" left = "0%"/>
                <Button4  top = "0%" left = "10%"/>
                <Button4  top = "0%" left = "20%"/>
                <Button4  top = "0%" left = "30%"/>
                <Button4  top = "0%" left = "40%"/>
                <Button4  top = "0%" left = "50%"/>
                <Button4  top = "0%" left = "60%"/>
                <Button4  top = "0%" left = "70%"/>
                <Button4  top = "0%" left = "80%"/>
                <Button4  top = "0%" left = "90%"/>

                <Button4  top = "10%" left = "0%"/>
                <Button4  top = "10%" left = "10%"/>
                <Button4  top = "10%" left = "20%"/>
                <Button4  top = "10%" left = "30%"/>
                <Button4  top = "10%" left = "40%"/>
                <Button4  top = "10%" left = "50%"/>
                <Button4  top = "10%" left = "60%"/>
                <Button4  top = "10%" left = "70%"/>
                <Button4  top = "10%" left = "80%"/>
                <Button4  top = "10%" left = "90%"/>

                <Button4  top = "20%" left = "0%"/>
                <Button4  top = "20%" left = "10%"/>
                <Button4  top = "20%" left = "20%"/>
                <Button4  top = "20%" left = "30%"/>
                <Button4  top = "20%" left = "40%"/>
                <Button4  top = "20%" left = "50%"/>
                <Button4  top = "20%" left = "60%"/>
                <Button4  top = "20%" left = "70%"/>
                <Button4  top = "20%" left = "80%"/>
                <Button4  top = "20%" left = "90%"/>

                <Button4  top = "30%" left = "0%"/>
                <Button4  top = "30%" left = "10%"/>
                <Button4  top = "30%" left = "20%"/>
                <Button4  top = "30%" left = "30%"/>
                <Button4  top = "30%" left = "40%"/>
                <Button4  top = "30%" left = "50%"/>
                <Button4  top = "30%" left = "60%"/>
                <Button4  top = "30%" left = "70%"/>
                <Button4  top = "30%" left = "80%"/>
                <Button4  top = "30%" left = "90%"/>

                <Button4  top = "40%" left = "0%"/>
                <Button4  top = "40%" left = "10%"/>
                <Button4  top = "40%" left = "20%"/>
                <Button4  top = "40%" left = "30%"/>
                <Button4  top = "40%" left = "40%"/>
                <Button4  top = "40%" left = "50%"/>
                <Button4  top = "40%" left = "60%"/>
                <Button4  top = "40%" left = "70%"/>
                <Button4  top = "40%" left = "80%"/>
                <Button4  top = "40%" left = "90%"/>

                <Button4  top = "50%" left = "0%"/>
                <Button4  top = "50%" left = "10%"/>
                <Button4  top = "50%" left = "20%"/>
                <Button4  top = "50%" left = "30%"/>
                <Button4  top = "50%" left = "40%"/>
                <Button4  top = "50%" left = "50%"/>
                <Button4  top = "50%" left = "60%"/>
                <Button4  top = "50%" left = "70%"/>
                <Button4  top = "50%" left = "80%"/>
                <Button4  top = "50%" left = "90%"/>

                <Button4  top = "60%" left = "0%"/>
                <Button4  top = "60%" left = "10%"/>
                <Button4  top = "60%" left = "20%"/>
                <Button4  top = "60%" left = "30%"/>
                <Button4  top = "60%" left = "40%"/>
                <Button4  top = "60%" left = "50%"/>
                <Button4  top = "60%" left = "60%"/>
                <Button4  top = "60%" left = "70%"/>
                <Button4  top = "60%" left = "80%"/>
                <Button4  top = "60%" left = "90%"/>

                <Button4  top = "70%" left = "0%"/>
                <Button4  top = "70%" left = "10%"/>
                <Button4  top = "70%" left = "20%"/>
                <Button4  top = "70%" left = "30%"/>
                <Button4  top = "70%" left = "40%"/>
                <Button4  top = "70%" left = "50%"/>
                <Button4  top = "70%" left = "60%"/>
                <Button4  top = "70%" left = "70%"/>
                <Button4  top = "70%" left = "80%"/>
                <Button4  top = "70%" left = "90%"/>

                <Button4  top = "80%" left = "0%"/>
                <Button4  top = "80%" left = "10%"/>
                <Button4  top = "80%" left = "20%"/>
                <Button4  top = "80%" left = "30%"/>
                <Button4  top = "80%" left = "40%"/>
                <Button4  top = "80%" left = "50%"/>
                <Button4  top = "80%" left = "60%"/>
                <Button4  top = "80%" left = "70%"/>
                <Button4  top = "80%" left = "80%"/>
                <Button4  top = "80%" left = "90%"/>

                <Button4  top = "90%" left = "0%"/>
                <Button4  top = "90%" left = "10%"/>
                <Button4  top = "90%" left = "20%"/>
                <Button4  top = "90%" left = "30%"/>
                <Button4  top = "90%" left = "40%"/>
                <Button4  top = "90%" left = "50%"/>
                <Button4  top = "90%" left = "60%"/>
                <Button4  top = "90%" left = "70%"/>
                <Button4  top = "90%" left = "80%"/>
                <Button4  top = "90%" left = "90%"/>

            </div>

        </div>
    )
}

export default StartGridPage;


