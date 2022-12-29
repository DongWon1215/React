import React from "react";

function WordList({words, deleteWord})
{
    const list = words.map((word,index)=> {
        return (
            <ul>
                <li key={{index}}>{word}
                <button onClick={() => deleteWord(word)}>삭제</button>
                </li>
            </ul>
        )
    })

    return (
        <ul>
            {list}
        </ul>
    )
}
export default WordList;