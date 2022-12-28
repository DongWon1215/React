import React from "react";

function WarnningBanner(props)
{
    // true = 위험, false = 출력X
    if(!props.warning)
    {
        return null;
    }

    return (
        <>
        <h1>위험</h1>
        </>
    )
}

export default WarnningBanner;