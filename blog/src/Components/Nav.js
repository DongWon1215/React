import React from 'react';

function Nav(props) {
    return (
        <div>
            <nav>
                <ul>
                    {props.list.map((item)=><li key={item}>item</li>)}
                </ul>

                <div>
                    <input type = "text" name = "검색"></input>
                    <input type = "button" value="검색"></input>
                </div>
            </nav>
        </div>
    );
}

export default Nav;