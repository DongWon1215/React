import React from "react";
import { useState } from "react";
import Toolbar from "./Toolbar";

function MainPage(props)
{
    const [isLogin, setisLogin] = useState(false)
    
    const onClickLogin = () => { setisLogin(true)}
    const onClickLogout = () => { setisLogin(false)}

    return (
        <div>
            <Toolbar 
            isLogin={isLogin}
            onClickLogin={onClickLogin}
            onClickLogout={onClickLogout}/>
                <h3>안녕하세요 메인 인덱스 페이지 입니다</h3>
        </div>
    )
}

export default MainPage;