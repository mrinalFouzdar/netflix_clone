import React from "react";
import "./featured.css";
import { useSelector } from "react-redux";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { IMAGE_URL } from "../../api/reqest";
function Featured() {
  const { movieCollection } = useSelector((state) => state.movieCategory);
  const filterMovieData = movieCollection.filter((data) => data.NetflixOriginals);
  let filterMovie

  if(filterMovieData){
    filterMovie=filterMovieData[0]
  }

  const selectMovie= filterMovie ? (filterMovie.NetflixOriginals[Math.floor(Math.random()*20)]): null;

  const handelDesLeng=(descrip,num)=>{
    return descrip.length >num ? `${descrip.slice(0,num)}...` : descrip

  }
  return (
    <div className="featured">
      <img
        src={`${IMAGE_URL}${selectMovie ? selectMovie.backdrop_path : ""}`}
        alt="img"
      />
      <div className="info">
      <img
          src={`${IMAGE_URL}${selectMovie ? selectMovie.poster_path : ""}`}
          alt="Poster"
          
        />
        <h1 className="desc">
          {handelDesLeng((selectMovie ? selectMovie.overview: ""),150)}
        </h1>
        <div className="main_btn_div">
          <button className= " btn play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className=" btn infobtn">
                <InfoOutlinedIcon/>
                <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
