import React from "react";
import { useState } from "react";

function Reservation(props)
{
    const [guestNum,setGuestNum] = useState(0);

    const [haveBreakfast, setHaveBreakfast] = useState(false);

    const handleSubmit = (event) => {event.preventDefault(); alert(`조식 여부 : ${haveBreakfast}, 방문객 수 : ${guestNum}`)}

    return (
        <form onSubmit={handleSubmit}>
            <label>
                조식 여부 : 
                <input type="checkbox" checked={haveBreakfast} onChange={(event) => {setHaveBreakfast(event.target.checked)}}/>
            </label>
            <br/>
            <label>
                방문객 수 : 
                <input type="text" value={guestNum} onChange={(event) => {setGuestNum(event.target.value)}} />
            </label>
            <button type="submit">제출</button>
        </form>
    )
}
export default Reservation;