import { FETCH_MOVIE_COLLECTION } from "../action.type"


export const fetchmovieCollection=(movieCollection,category)=>({
    type: FETCH_MOVIE_COLLECTION,
    payload: movieCollection,
    category

})