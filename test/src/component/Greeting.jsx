import React from "react";

function UserGreeting(props)
{
    return (<h1>well met</h1>)
}

function GuestGreeting(props)
{
    return <h1>please regist my site</h1>    
}

function Greeting(props)
{
    const isLogin = props.isLogin;

    // if(isLogin)
    // {
    //     return <UserGreeting/>
    // }

    // return <GuestGreeting/>

    return (
        isLogin ?< UserGreeting/> : <GuestGreeting/>
    )
}

export default Greeting;