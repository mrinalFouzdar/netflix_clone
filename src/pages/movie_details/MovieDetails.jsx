import styled from "./movieDeatils.module.css";
import { useSelector } from "react-redux";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
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
      <div className={styled.conatiner}>
        <div className={styled.info_container}>
          {/* movie details like name and title */}
          <h1 className={styled.text}>
            {(singleMovie.name ? handleString(singleMovie.name, 25) : null) ||
              (singleMovie.title ? handleString(singleMovie.title, 25) : null)}
          </h1>
          <h2 className={styled.movie_info}>
            {handleString(singleMovie.overview, 350)}
          </h2>

          {/* button div */}
          <div className={styled.btndiv}>
            <button type="submit" className={styled.play_button}>
              <PlayArrowIcon sx={{ fontSize: "4vh", fontWeight: "700" }} />
              <span className={styled.btnTxt}>PLAY</span>
            </button>
            <button className={styled.list_button}>
              <AddIcon sx={{ fontSize: "4vh", fontWeight: "700" }} />
              <span className={styled.btnTxt}>MY LIST</span>
            </button>
          </div>
        </div>
        <div className={styled.block} />
        {/* Image Container */}
        <div className={styled.image_container}>
          <img
            src={`${IMAGE_URL}${singleMovie.backdrop_path}`}
            alt={singleMovie.name}
            className={styled.image_tag}
          />
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
