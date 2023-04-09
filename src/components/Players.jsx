import React from 'react';
import Playercard from './PlayerCard';



const Players = ({players, selectedPlayer, setSelectedPlayer}) => {
    //console.log('selectedPlayer: ', slectedPlayer);
    // const players = props.players;
    return (
    <>
       <div id="all-players-container">
      {players.map((player) => {
          return <Playercard  key={player.id} player={player} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer}/>
      })};
      
      </div>
    </>
    );
}



export default Players;