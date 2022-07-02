import React from "react";
import Row from "../row/Row";
import "./rowContainer.css"
function RowContainer() {
  return (
    <div className="main_row_container">
      <Row
        movie_category="NetflixOriginals"
        NetflixOriginals
        movieType="Netflix Originals"
      ></Row>
      <Row movie_category="Trending"  movieType="Trending Now" />
      <Row movie_category="ActionMovies"  movieType="Action Movies"/>
      <Row movie_category="Upcoming"  movieType="Upcoming"/>
      <Row movie_category="ComedyMovies"  movieType="Comedy Movies"/>
      <Row movie_category="TopRated"  movieType="Top Rated"/>
      <Row movie_category="RomanceMovies" movieType="Romance Movies" />
      <Row movie_category="HorrorMovies"  movieType="Horror Movies"/>
      <Row movie_category="Drama"  movieType="Drama"/>
    </div>
  );
}

export default RowContainer;
