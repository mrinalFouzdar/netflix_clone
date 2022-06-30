import { FETCH_ALL_MOVIES } from "../../Actions/action.type";


const INITIAL_STATE={
    movieCollection:[]
}

const allMoviesReducer =(state=INITIAL_STATE,{type,payload})=>{
    switch (type) {
        case FETCH_ALL_MOVIES:
            return{
                ...state,
                movieCollection:[...state.movieCollection,...payload]
            }
    
        default:
            return state;
    }
}

export default allMoviesReducer