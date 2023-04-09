import React, {useState} from 'react';

const PlayerForm = () => {
  return (
    <div id="new-player-form">

    <form> 
        <label form="name">Name:</label>
        <input type="text" name="name"/>

        <button>Search</button>
    </form>
    </div>
  )
}


export default PlayerForm;