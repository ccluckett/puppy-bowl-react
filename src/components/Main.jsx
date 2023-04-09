import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import Players from './Players';
import { fetchAllPlayers } from '../api/ajaxHelper';
import { fetchSinglePlayer } from '../api/ajaxHelper';
import SinglePlayer from './SinglePLayer';



const Main = () => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState({});
    console.log('selectedPlayer:', selectedPlayer);

useEffect(() => {
    const getPlayers = async () => {
        const players = await fetchAllPlayers();
        setPlayers(players);
       
    };
    getPlayers();
    
}, []);

 useEffect(() => {
    const getSinglePlayer = async () => {
        const singlePlayer = await fetchSinglePlayer();
        setPlayers(singlePlayer);
       
    };
    getSinglePlayer();
    
}, []); 

//console.log(players);

  if(selectedPlayer.id) {return (
    <>
       <SinglePlayer selectedPlayer={selectedPlayer}  setSelectedPlayer={setSelectedPlayer}/>
      
    </>
    );} else {

        return (
        <>
           <SearchBar /> 
           <Players players={players}  selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer}/>
        </>
        );}
};



export default Main;