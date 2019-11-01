import React from 'react';
import PlayerTable from './PlayerTable'
import {Toggle } from "../hooks/Toggle"

const Players = props => {

const [order, setOrder] = Toggle(true)

console.log(props)


const newArray = props.players

const toggleMode = () => {
   if (order = false){
     newArray= props.players.reverse();
  
   }
}

    return(
        <div>
            <button onClick ={setOrder} >
            {order ? `Order`: "reverse Order"}
            </button>


            
            { props.players.map(item =>(
                <PlayerTable key ={item.id} players ={item}/>
            ))}
                
          
        </div>
    )
}



export  default Players