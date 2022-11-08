import axios from "axios";

export const getPlanets = () => async(dispatch) =>{
    dispatch({type: 'gettingPlanets'})

    try {
        const result = await axios.get("https://rickandmortyapi.com/api/location");
        dispatch({type:'getPlanets', payload: result.data.results})
    } catch (error) {
        dispatch({type: 'errorPlanets', payload: error.message});
    }
}


export const postCharacter = () => async(dispatch) => {

}

export const putCharacter = () => async(dispatch) => {
    
}
