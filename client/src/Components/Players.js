import React from 'react';
import PlayerTable from './PlayerTable'


const Players = props => {

console.log(props)


    return(
        <div>
            {props.players.map(item =>(
                <PlayerTable key ={item.id} players ={item}/>
            ))}
        </div>
    )
}



export  default Players