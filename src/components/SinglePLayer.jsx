import React from 'react';


const SinglePlayer = (props) => {
    return (

          <div> 
            <p> Team: {props.selectedPlayer.teamId ? props.selectedPlayer.teamId : 'Unassigned'}</p>
            <p> Breed: {props.selectedPlayer.breed}</p>
            <p> <img style={{ width: 150 + 'px' }} src={props.selectedPlayer && props.selectedPlayer.imageUrl}></img></p>
            
            <button onClick={() => {props.setSelectedPlayer({})}}>Back to all players</button>
          </div>
        
    );
};

export default SinglePlayer;