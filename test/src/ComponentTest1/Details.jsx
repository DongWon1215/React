import React from "react";

function Details(props)
{
    return (
        <div>
            <h1>{props.name}</h1>
            <br/>
            <h1>{props.index}</h1>
            <br/>
            <h1>{props.price}</h1>
        </div>
    )
}
export default Details
