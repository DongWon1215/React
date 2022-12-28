import  React from "react";
import FancyBoard from "./FancyBoard";

function Dialog(props)
{
    return (
        <FancyBoard color="blue">
            <h1>{props.title}</h1>
            <p>{props.message}</p>
            {props.children}
        </FancyBoard>
    )
}

function Dialo(props)
{
    return (
        <Dialog title="안녕하세요" messsage="환영합니다"/>
    )
}
export default Dialo;
