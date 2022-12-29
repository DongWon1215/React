import React from 'react';

function Headers(props) {
    return (
        <div>
            <header>
                <h1>{props.title}</h1>
                <p>웹을 공부하는 블로그</p>
            </header>
        </div>
    );
}

export default Headers;