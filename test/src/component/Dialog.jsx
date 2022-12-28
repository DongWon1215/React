import React from "react";
import FancyBoard from "./FancyBoard";

function Dialog(props){
    return (
        <FancyBoard color="blue">
            <h1>{props.title}</h1>
            <p>{props.message}</p>
            {props.children}
        </FancyBoard>
    )
}

export default Dialog