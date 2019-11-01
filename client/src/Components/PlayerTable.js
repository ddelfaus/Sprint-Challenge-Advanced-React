import React from 'react';



const PlayerTable = props => {

    console.log(props)
    
    
        return(
            <div>
                {props.players.id }{props.players.name}
                
            </div>
        )
    }
    
    
    
    export  default PlayerTable