import { FETCH_MOVIE_COLLECTION } from "../../Actions/action.type";

const INITIAL_STATE = {
  movieCollection: [],
};

export const moviesCategoryReducer = (
  state = INITIAL_STATE,
  { type, payload, category }
) => {
  switch (type) {
    case FETCH_MOVIE_COLLECTION:
      return {
        ...state,
        movieCollection: [
          ...state.movieCollection,
          { [category]: { ...(state.movieCollection[category] = payload) } },
        ],
      };

    default:
      return state;
  }
};
