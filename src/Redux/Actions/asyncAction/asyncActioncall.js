import requests from "../../../api/reqest";
import movieApi from "../../../api/baseURL";
import { fetchmovieCollection } from "../movies_category_actions/moviesCategroyAction";

export const fetchAllMovies = () => (dispatch) => {
  Object.entries(requests).forEach((key) => {
    movieApi
      .get(key[1])
      .then((res) => {
        // console.log(res)
        // console.log(key)
        const movieData = res.data.results;
        dispatch(fetchmovieCollection(movieData, key[0]));
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
