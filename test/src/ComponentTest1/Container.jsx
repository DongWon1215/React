import React from "react";
import { useState } from "react";
import Details from "./Details";
import Display from "./Display";

// 컨트롤러 역할
// 하위 컴포넌트에 전달할 데이터를 가지고 있어야 함
// 상태 값을 가지고 있고 하위 컴포넌트에 전달 가능
// 상태값을 변경해주는 함수를 하위 컴포넌트에 전달

const style = {
    wrapper : 
    {
        padding : 20,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around"
    }
}

function Container(props)
{
    const list = [{name: "상품1", index : 1, price : 4000},{name: "상품2", index : 2, price : 5000},{name: "상품3", index : 3, price : 6000},{name: "상품4", index : 4, price : 8000},{name: "상품5", index : 5, price : 8000}];
    
    // 선택한(클릭한) 아이템을 속성으로 저장 => Detail로 데이터 전달
    // selectedItem => {index : 1, name : '상품1', price : 4000}
    const [selectedItem,setSelectedItem] = useState();

    const changeItem = (index) => {
    // 상품 번호로 배열에서 상품 검색 => 해당 상품의 객체 반환
        const item = list.find(item => item.index === index)
        // 속성으로 관리하는 선택 메뉴의 값을 변경
        setSelectedItem(item);
    }

    return (
        <div>
            <div style={style.wrapper}>
                <Display list={list} changeItem={changeItem}></Display>
                <Details item={selectedItem} ></Details>
            </div>
        </div>
    )
}
export default Container
