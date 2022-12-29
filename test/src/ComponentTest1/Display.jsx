import React from "react";

// 상위 컴포넌트에서 배열을 받아서 리스트 출력
// 클릭 이벤트에 적용할 핸들러를 받아서 적용
// changeMenu : 상품 번호를 받아서 선택 상품의 상태를 변경시키는 역할

function Display({list,changeItem})
{
    return(
        <div>
            <ul>
                {list.map(item =><li key = {item.index} onClick={() => changeItem(item.index)}> {item.name}</li> )}
            </ul>
        </div>
    )
}
export default Display
