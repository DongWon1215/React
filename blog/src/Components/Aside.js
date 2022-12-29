import React from 'react';

function Aside({category,recently}) {
    return (
        <div>
            <aside>
            <h4>카테고리</h4>
            <ul>
                {category.map(classification => <li key = {classification}>{classification}</li>)}
            </ul>

            <h4>최근 글</h4>
            <ul>
                {recently.map(Post => <li key = {Post}>{Post}</li>)}
            </ul>
        </aside>
        </div>
    );
}

export default Aside;