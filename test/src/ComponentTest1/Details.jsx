import React from "react";

// 상위 컴포넌트에서 선택된 데이터를 전달 받아서 출력하는 컴포넌트

function Details({item})
{
    if(!item)
    {
        return (
            <div>선택된 항목이 없습니다</div>
        ) 
        
    }

    return (
        <div>
            <h3>{item.name}</h3>
            <br/>
            <h3>{item.index}</h3>
            <br/>
            <h3>{item.price}</h3>
        </div>
    )
}
export default Details
