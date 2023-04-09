import React from 'react';


const Playercard = (props) => {
    const player = props.player;
    const setSelectedPlayer = props.setSelectedPlayer;
   // console.log(props);

    return (
        <div>
          
          <div>{player && player.name}</div>
          <div>{player && player.id}</div>
          <div><img style={{ width: 150 + 'px' }} src={player && player.imageUrl}></img></div>
          <button onClick={()=>{setSelectedPlayer(player)}}>See Details</button>
       </div>
    );
};

export default Playercard;