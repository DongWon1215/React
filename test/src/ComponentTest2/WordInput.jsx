import  React from "react";
import { useState } from "react";

// 단어를 상태로 관리하는 배열에 추가하는 함수를 받아서 처리를 해줘야 함
function WordInput({insertWord})
{
    const [words, setWords] = useState('');

    const handleAddWord = () => {
        insertWord(words);
        setWords('');
    }
    
    return (
        <div>
            <input id="outlined-basic" label="단어 입력" value={words} onChange={(event)=>setWords(event.target.value)}/>
            <button onClick={handleAddWord}>단어 추가</button>
        </div>
    )
}

export default WordInput