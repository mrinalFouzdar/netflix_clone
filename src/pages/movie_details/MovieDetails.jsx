import React, { memo } from "react";
import "./movieDeatils.css"
import { useSelector } from "react-redux";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from '@mui/icons-material/Add';
import { IMAGE_URL } from "../../api/reqest";

function MovieDetails() {
  const { singleMovie } = useSelector((state) => state);

  if (!singleMovie.id) {
    return null;
  }

  // set string length
  const handleString = (str, num) => {
    return str.length > num ? `${str.slice(0, num - 1)}...` : str;
  };


  return (
    <>
        {/* Get single movie Info */}
      <div className="conatiner">
    
        <div className="info_container">
          {/* movie details like name and title */}
          <h1 className="text">
            {(singleMovie.name ? handleString(singleMovie.name, 25) : null) ||
              (singleMovie.title ? handleString(singleMovie.title, 25) : null)}
          </h1>
          <h2 className="movie_info">
            {handleString(singleMovie.overview, 350)}
          </h2>

          {/* button div */}
          <div className="btndiv">
              <button type="submit" className="play_button">
                <PlayArrowIcon sx={{fontSize:"4vh",fontWeight:"700"}}/>
                <span>PLAY</span>
              </button>
              <button className="list_button">
                <AddIcon sx={{fontSize:"4vh",fontWeight:"700"}} />
                <span>MY LIST</span>
              </button>
          </div>
        </div>
      <div className="block"/>
      {/* Image Container */}
      <div className="image_container">
        <img src={`${IMAGE_URL}${singleMovie.backdrop_path}`} alt={singleMovie.name} className="image_tag" />
      </div>
      </div>

    </>
  );
}

export default memo(MovieDetails);
