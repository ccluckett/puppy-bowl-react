
const cohortName = '2303-FTB-ET-WEB-FT-REACT';

const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


export const fetchAllPlayers = async () => {
    try {
        const response = await fetch(`${APIURL}/players`);
        const {success, error, data:{ players }} = await response.json();
        if (error) throw error;
        return players;
    } catch (error) {
        console.error(`Uh oh, trouble fetching players!`, error);
    }
};

export const fetchSinglePlayer = async (playerId) => {
    try {
       const response = await fetch(`${APIURL}/players/${playerId}`);
       const { success, error , data: {player}} =await response.json();
       if (error) throw error;
       return player;
    } catch (error) {
        console.log(`Uh oh, trouble fetching single player!`, error);
    }
}
