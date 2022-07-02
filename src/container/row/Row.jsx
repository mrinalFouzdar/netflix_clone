import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMAGE_URL } from "../../api/reqest";

import "./row.css"
import { selected_movie } from "../../Redux/Actions/selected_movie/selectedMovie";
import { Link } from "react-router-dom";
function Row({ movie_category, NetflixOriginals ,movieType, isColum, isBox}) {

  // movie_category:-from movie_category we get the movie category
  // NetflixOriginals:-from NetflixOriginals we check is it NetflixOriginals or not 
  // movieType :- check movie Type 
  // isColum: is coulum true then show data using grid other wise flex
  const dispatch = useDispatch()
  const { movieCollection } = useSelector((state) => state.movieCategory);

  // Filter movie data category wise ...
  const filterMovieData = movieCollection.filter(
    (data) => data[movie_category]
  );
  const filterMovie = filterMovieData ? filterMovieData[0] : [];

  let movieKeys;

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      // swap index
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

  // single movie data store(Despatch a action here)
  const handleSinglemovie=(movie)=>{
    dispatch(selected_movie(movie))
  }

  const handleString=(str,num)=>{
    return str.length >= num ? `${str.slice(0,num)}...`: str;
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
                  {
                    isBox ?
                    <div className="isBoxDiv">
                      <p>{handleString(movie.overview,58)}</p>
                    </div> : null
                  }
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
