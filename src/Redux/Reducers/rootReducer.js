import { combineReducers } from "redux";
import { moviesCategoryReducer } from "./movie_category_reducer/movieCategoryReducer";
import { selectedMovieReducer } from "./selected_movie_reducer/selectedMovieReducer";

export const rootReducer = combineReducers({
  movieCategory: moviesCategoryReducer,
  singleMovie: selectedMovieReducer,
});
