import React from 'react';



const PlayerTable = props => {

    console.log(props)
    
    
        return(
            <div>
               {props.players.name} Searches:{props.players.searches} Country : {props.players.country}
                
            </div>
        )
    }
    
    
    
    export  default PlayerTable