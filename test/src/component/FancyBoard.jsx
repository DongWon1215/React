import React from "react";

function FancyBoard(props)
{
    return (
        <div className={'border-' + props.color}>
            {props.children}
        </div>
    )
}
export default FancyBoard;