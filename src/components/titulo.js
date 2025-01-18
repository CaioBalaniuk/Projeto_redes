import React from "react";

const Ttitulo = () => {
  const titleStyle = {
    position: "absolute",
    width: "870px",
    left: "50%",
    transform: "translate(-50%, -50%)",
    top: "5%",

    fontFamily: "Goldman",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "96px",
    lineHeight: "115px",
    color: "#AB1818",
    textShadow:
      "2px 2px 0 #000, -2px -1px 0 #000,  0px -1px 0 #000, -1px 1px 0 #000",
  };

  return <h1 style={titleStyle}>{"BATALHA NAVAL"}</h1>;
};
export default Ttitulo;
