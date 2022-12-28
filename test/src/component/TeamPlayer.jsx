import React from "react";

const players = [
    {id : 1, name:'송흥민', },
    {id : 2, name:'인강인', },
    {id : 3, name:'황희찬', },
    {id : 4, name:'김민재', }
]

function TeamPlayer(props)
{

    return (
        <ul>
            {players.map((player,index)=>
            {
                return <li key = {player.id}>{player.name}</li>
            })}
        </ul>
    )
}
export default TeamPlayer;