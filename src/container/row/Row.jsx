import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMAGE_URL } from "../../api/reqest";

import "./row.css"
import { selected_movie } from "../../Redux/Actions/selected_movie/selectedMovie";
import { Link } from "react-router-dom";
function Row({ movie_category, NetflixOriginals ,movieType, isColum}) {
  // console.log(movie_category)
  // const {}=useSelector(state=>state.movie_category)
  const dispatch = useDispatch()
  const { movieCollection } = useSelector((state) => state.movieCategory);
  const filterMovieData = movieCollection.filter(
    (data) => data[movie_category]
  );
  // filterMovieData.pop()
  const filterMovie = filterMovieData ? filterMovieData[0] : [];
  // console.log(filterMovie);

  let movieKeys;

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      /* eslint-disable no-param-reassign */
      [array[i], array[j]] = [array[j], array[i]];
    }
    // console.log(array);
    return array;
  }

  if (filterMovie) {
    const movieArray = Object.keys(filterMovie[movie_category]);
    // console.log(movieArray);
    movieKeys = shuffleArray(movieArray);
  }

  const handleSinglemovie=(movie)=>{
    dispatch(selected_movie(movie))
  }

  return (
    <div className="row">
      <h1 className="title">{movieType}</h1>
      <div className=  {isColum ?"isColum_container":"row_container"}>
        {movieKeys
          ? movieKeys.map((key) => {
              const movie = filterMovie[movie_category][key];
              // console.log(movie);
              return (
                <div key={movie.id}>
                <Link key={movie.id} className={isColum ? "isColum_link":"style_link"} to={`/movie/${movie.id}`} onClick={()=>handleSinglemovie(movie)}>
                  <img
                    className={NetflixOriginals ? "imageLarge" : "image"}
                    src={`${IMAGE_URL}${
                      NetflixOriginals ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt="Images"
                  />
                </Link>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Row;
