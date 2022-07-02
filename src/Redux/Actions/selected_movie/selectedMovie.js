import { ADD_SELECTED_MOVIE } from "../action.type";


export const selected_movie=(moviedetails)=>({
    type:ADD_SELECTED_MOVIE,
    payload:moviedetails
})

