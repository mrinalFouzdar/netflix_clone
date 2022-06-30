import React from "react";
import "./featured.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
function Featured() {
  return (
    <div className="featured">
      <img
        src="https://image.tmdb.org/t/p/original//bcpATvKQmSgCbwxONs9PPQrer3A.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://image.tmdb.org/t/p/original//bcpATvKQmSgCbwxONs9PPQrer3A.jpg"
          alt=""
        />

        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          similique animi quia necessitatibus dignissimos officia fuga. Eaque,
          ipsam deserunt. Quibusdam aliquam ex excepturi voluptatum maxime quo
          illum dolor hic velit.
        </span>
        <div className="btn">
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="infobtn">
                <InfoOutlinedIcon/>
                <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
