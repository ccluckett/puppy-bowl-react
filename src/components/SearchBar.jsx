import React, {useState} from 'react';
import { fetchAllPlayers } from '../api/ajaxHelper';

const SearchBar = () => {

  const searchPlayers = (players, searchTerm) => {
    const filteredPlayers = players.filter((player) => players.name.toLowerCase().include(searchTerm.toLowerCase()));
  return filteredPlayers;
  }
      
    <div id="new-player-form">

    <form onSubmit={SearchBar}> 

        <div>
        <label form="name">Name:</label>
        <input type="text" name="name"/>
        <button>Search</button>
          
        </div>
    </form>
    </div>

}


export default SearchBar;