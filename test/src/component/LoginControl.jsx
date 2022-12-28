import React from "react";
import { useState } from "react";

function LoginButton(props)
{
    return< button onClick={props.onClick}>로그인</button>
}

function LogOutButton(props)
{
    <button onClick={props.onClick}>로그아웃</button>
}

function LoginControl(props)
{
    const [isLogin,setisLogin] = useState(false);

    const handleLoginClick = () => {
        setisLogin(true)
    }

    const handleLogoutClick = () => {
        setisLogin(false)
    }

    let Btn = <LoginButton onClick/>

    if(isLogin)
    {
        Btn = <LoginButton onClick="{handleLogoutClick}"/>
    }
    else
    {
        Btn = <LoginButton onClick="{handleLoginClick}"/>
    }

    return (
        <>
        {Btn}
        </>
    )

}

export default LoginControl;