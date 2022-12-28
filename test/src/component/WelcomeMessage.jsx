import React from "react";
import FancyBoard from "./FancyBoard";

function WelcomeMessage(props)
{
    return (
        <FancyBoard color="red">
            <h1>Welcome</h1>
            <p>사이트에 방문해줘서
                감사합니다
            </p>
        </FancyBoard>
    )
}
export default WelcomeMessage;