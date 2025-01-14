
import React from "react";

const TextAux = ({top, left,text,tam,tam1, color}) => {
    const titleStyle = {
        position: "absolute",
        width: tam1|| "5px",
        height: "50px",
        left:left|| "100px",
        top: top||"100px",

        fontFamily: 'Goldman',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: tam || "42px",
        lineHeight: "50px",
        color: color || "#000000",
        zIndex: 1,

    }

    return (
        <h2 style={titleStyle}>{text}</h2>
    );
};
export default TextAux;
