
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './Components/home/Home';
import Navbar from './Components/Navbar/Navbar';
import RowContainer from './container/row_container/RowContainer';
import Category from './pages/category/Category';
import MovieDetails from './pages/movie_details/MovieDetails';
import { fetchAllMovies } from './Redux/Actions/asyncAction/asyncActioncall';

function App() {
  // const {movieCollection} = useSelector((state)=>state.movieCategory)
  // useSelector
  const dispatch = useDispatch()
  const nevigate = useNavigate()
  
  // console.log(movieCollection)
  useEffect(()=>{
    nevigate("/")
    dispatch(fetchAllMovies())
  },[])

  return (
    <>
      {/* <img width="100%" height="50%" src="https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=614&fit=crop&crop=faces&auto=format%2Ccompress&q=50&dpr=2" alt="" className='left-img'/> */}
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/tvshows' element={<Category/>}/>
      <Route path='/movies' element={<Category/>}/>
      <Route path='/movie/:movieId' element={<MovieDetails/>}/>
     </Routes>
      {/* <Home/> */}
    </>
  );
}

export default App;
