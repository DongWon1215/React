import React from "react";
import { useState } from "react";

function SignUp(props)
{
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")

    const handleSubmit = (event) => {event.preventDefault(); alert(`이름 : ${name} 성별 : ${gender}`)}

    return (
        <form onSubmit={handleSubmit}>
            <label>
                여기에 이름 입력
                <input type="text" value={name} onChange={(event) => {setName(event.target.value)}}></input>
            </label>
            <br/>
            <label>
                성별 : 
                남성<input type="radio" name="gender" value="male" checked="checked" onChange={(event) => {setGender(event.target.value)}}/>
                여성<input type="radio" name="gender" value="female" onChange={(event) => {setGender(event.target.value)}}/>
            </label>
            <br/>
            <button type="submit">확정</button>
        </form>
    )

}
export default SignUp;