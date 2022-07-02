import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Category from "./pages/category/Category";
import MovieDetails from "./pages/movie_details/MovieDetails";
import { fetchAllMovies } from "./Redux/Actions/asyncAction/asyncActioncall";

function App() {
  // const {movieCollection} = useSelector((state)=>state.movieCategory)
  const dispatch = useDispatch();
  const nevigate = useNavigate();

  // console.log(movieCollection)
  useEffect(() => {
    nevigate("/");

    dispatch(fetchAllMovies());
    // eslint-disable-next-line

  },[]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshows" element={<Category />} />
        <Route path="/movies" element={<Category />} />
        <Route path="/new_Popular" element={<Category />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
