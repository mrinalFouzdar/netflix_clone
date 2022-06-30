import {combineReducers} from "redux"
import allMoviesReducer from "./all_movies_reducer/allMoviesReducer"
import { moviesCategoryReducer } from "./movie_category_reducer/movieCategoryReducer"



export const rootReducer = combineReducers({
    movieCategory:moviesCategoryReducer,
    allMovies:allMoviesReducer
})