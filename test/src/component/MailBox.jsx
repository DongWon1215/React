import React from "react";

function MainBox(props)
{
    //props.unReadMessage => []
    const unReadMessage = props.unReadMessage;

    return (
        <div>
            <h1>메일 박스</h1>
            {unReadMessage.length > 0 &&
            <h3 >현재 {unReadMessage.length}개의 읽지 않은 메시지가 존재합니다</h3>
            }
        </div>
    )
}

export default MainBox;