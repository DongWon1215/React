import React from "react";
import Details from "./Details";


function Container(props)
{
    const list = [{name: "상품1", index : 1, price : 4000},{name: "상품2", index : 2, price : 5000},{name: "상품3", index : 3, price : 6000},{name: "상품4", index : 4, price : 8000},{name: "상품5", index : 5, price : 8000}];
    
    const listItems = list.map((item) => {<li>{item.name}</li>})

    return (
        <div>
            <div>
                <ul>
                    {listItems}
                </ul>
            </div>
            <div>
                <Details name ></Details>
            </div>
        </div>
    )
}
export default Container
