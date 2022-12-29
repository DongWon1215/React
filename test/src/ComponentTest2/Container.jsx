import React from "react";
import { useState } from "react";
import WordInput from "./WordInput";
import WordList from "./WordList";


function Container(props)
{
    const style = {
        wrapper : 
        {
            padding : 20,
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around"
        },
        box : {border: "3px solid #333"}
    }

    // 단어 데이터들을 가지는 배열을 상태값으로 관리
    const [words,setWords] = useState(['AAA','BBB','CCC'])

    // 단어 추가 함수
    const insertWord = (word) => {
        // 배열에 단어를 추가하고 setWords
        // words.push(word)
        setWords([...words,word])
    }

    // 단어 삭제 함수
    const deleteWord = (word) => {
        // 배열에서 매개변수로 받은 요소를 삭제 => ['AAA','BBB']
        // 배열.filter(true/false) => 새로운 배열 생성
        const filteredWords = words.filter(w => w !== word)
        setWords([...filteredWords])
    }

    return (
        <div style={style.wrapper}>
            <WordInput insertWord={insertWord}></WordInput>
            <WordList words={words} deleteWord={deleteWord}></WordList>
            
        </div>
    );

}
export default Container;