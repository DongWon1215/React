import React from "react";
import { useState } from "react";

function Counter(props)
{
    // let count = 0;
    const [count,setCount] =useState(0);

    // 0 -> count 변수의 초기값
    // setCount() => state 값을 변경해주는 함수, 실행 => 재 랜더링

    return (
        <div>
            <p>총 {count} 번 클릭했습니다</p>
            <button onClick={() => setCount(count + 1)}>클릭</button>
        </div>
    )
}

export default Counter;