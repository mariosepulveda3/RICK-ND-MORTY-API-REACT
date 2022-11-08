import axios from "axios";

export const getCharacters = () => async(dispatch) =>{
    dispatch({type: 'gettingCharacters'})

    try {
        const result = await axios.get("https://rickandmortyapi.com/api/character");
        dispatch({type:'getCharacters', payload: result.data.results})
    } catch (error) {
        dispatch({type: 'errorCharacters', payload: error.message});
    }
}


export const postCharacter = () => async(dispatch) => {

}

export const putCharacter = () => async(dispatch) => {
    
}
