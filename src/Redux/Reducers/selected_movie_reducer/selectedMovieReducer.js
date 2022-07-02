import { ADD_SELECTED_MOVIE } from "../../Actions/action.type";


export const selectedMovieReducer=(state={},{type,payload})=>{
    switch (type) {
        case ADD_SELECTED_MOVIE:
            return {
                ...state,
                ...payload
            }
        
    
        default:
            return state;
    }
}