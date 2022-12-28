import React, { useState } from "react";

function Toggle(props)
{
    const [isToggleOn, setToggleOn] = useState(true)

    function handleClick1()
    {
        setToggleOn(isToggleOn => !isToggleOn)
    }

    const handleClick2 = () => 
    {
        setToggleOn(isToggleOn => !isToggleOn)
    }

    return <button onClick={handleClick1}>
        {isToggleOn ? 'turnOn' : 'turnOff'}
    </button>
}

export default Toggle;